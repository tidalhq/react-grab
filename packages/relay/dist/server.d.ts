import { AgentHandler } from './protocol.js';

interface RelayServerOptions {
    port?: number;
    token?: string;
}
interface RelayServer {
    start: () => Promise<void>;
    stop: () => Promise<void>;
    registerHandler: (handler: AgentHandler) => void;
    unregisterHandler: (agentId: string) => void;
    getRegisteredHandlerIds: () => string[];
}
declare const createRelayServer: (options?: RelayServerOptions) => RelayServer;

export { type RelayServer, createRelayServer };
