import { getBlockCount, getBlockDate } from "./utils/bcoin"
import cliProgress from "cli-progress"

let oldBlockDate: number = 0
let count: number = 0

// Progress Bar
const bar: cliProgress = new cliProgress.Bar({
    format: '[{bar}] {percentage}% | {value}/{total} | Results: {results}'
});

const start = async (): Promise<void> => {

    // Get total blockcount to iterate through blocks
    const blockCount: number = await getBlockCount()

    // Start the progress bar with a total value of blockCount and start value of 0
    bar.start(blockCount, 0, {
        results: count
    })

    for (let i: number = 0; i <= blockCount; i++) {
        if (oldBlockDate !== 0) {
            const newBlockDate: number = await getBlockDate(i)
            if (newBlockDate - oldBlockDate > 7200) {
                count++
            }
            oldBlockDate = newBlockDate
        } else {
            oldBlockDate = await getBlockDate(i)
        }
        bar.update(i, {
            results: count
        })
    }
    console.log("Found ${count} Blocks with more then 2h difference!")
    bar.stop()
}

start()