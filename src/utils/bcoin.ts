// Dependencies
import {NodeClient, Network} from 'bcoin'
const network: Network = Network.get('main')

// Client Options Interface
interface ClientOptions {
	network: string,
	port: number
}

// Bcoin Client Options
const clientOptions: ClientOptions = {
	network: network.type,
	port: network.rpcPort
}

// Open Client
const client: NodeClient = new NodeClient(clientOptions)

/**
 * Get Total BlockCount
 * 
 * @returns Total Blockcount
 */
export const getBlockCount = async () : Promise<number> => {
    return await client.execute('getblockcount')
}

/**
 * Get the timestamp of a block
 * 
 * @param blockHeight
 * @returns Timestamp of a block
 */
export const getBlockDate = async (blockHeight: number) : Promise<number> => {
    const response = await client.execute('getblockbyheight', [blockHeight, true, false])
    return response.time
}