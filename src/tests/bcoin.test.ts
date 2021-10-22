import { getBlockCount, getBlockDate } from "../utils/bcoin"
import test from "ava"

test.before(async t => {
    console.log('Starting tests!')
})

// Getting total blockcount test
test('Getting total Blockcount', async t => {
    const result: number = await getBlockCount()
    t.true(result > 0)
})

// Getting blockDate of an block
test('Get timestamp from an block', async t => {
    const result: number = await getBlockDate(Math.floor(Math.random() * 100))
    t.true(result > 0, "Timestamp over 0")
    t.true(result >= 1231006505, "Timestamp must be higher then the genesis block or the genesis block itself")
})