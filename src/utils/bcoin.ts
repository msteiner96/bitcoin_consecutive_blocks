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