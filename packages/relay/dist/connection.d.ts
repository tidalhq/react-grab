import { AgentHandler } from './protocol.js';

interface ConnectRelayOptions {
    port?: number;
    handler: AgentHandler;
    token?: string;
}
interface RelayConnection {
    disconnect: () => Promise<void>;
}
declare const connectRelay: (options: ConnectRelayOptions) => Promise<RelayConnection>;

export { connectRelay };
