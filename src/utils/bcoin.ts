// Dependencies
import {NodeClient, Network} from 'bcoin'
const network: Network = Network.get('main')

// Client options object interface
interface ClientOptions {
	network: string,
	port: number
}

// Bcoin Client
const clientOptions: ClientOptions = {
	network: network.type,
	port: network.rpcPort
}

const client: typeof NodeClient = new NodeClient(clientOptions)