import { AgentContext, RelayToBrowserMessage } from './protocol.cjs';
export { AgentHandler, AgentMessage, AgentRunOptions, BrowserToRelayMessage, COMPLETED_STATUS, DEFAULT_RECONNECT_INTERVAL_MS, DEFAULT_RELAY_PORT, HEALTH_CHECK_TIMEOUT_MS, HandlerRegistrationMessage, HandlerToRelayMessage, HandlerUnregisterMessage, POST_KILL_DELAY_MS, RELAY_TOKEN_PARAM, RelayToHandlerMessage } from './protocol.cjs';
export { RelayServer, createRelayServer } from './server.cjs';
export { connectRelay } from './connection.cjs';

interface RelayClient {
    connect: () => Promise<void>;
    disconnect: () => void;
    isConnected: () => boolean;
    sendAgentRequest: (agentId: string, context: AgentContext) => boolean;
    abortAgent: (agentId: string, sessionId: string) => void;
    undoAgent: (agentId: string, sessionId: string) => boolean;
    redoAgent: (agentId: string, sessionId: string) => boolean;
    onMessage: (callback: (message: RelayToBrowserMessage) => void) => () => void;
    onHandlersChange: (callback: (handlers: string[]) => void) => () => void;
    onConnectionChange: (callback: (connected: boolean) => void) => () => void;
    getAvailableHandlers: () => string[];
}
interface RelayClientOptions {
    serverUrl?: string;
    autoReconnect?: boolean;
    reconnectIntervalMs?: number;
    token?: string;
}
declare const createRelayClient: (options?: RelayClientOptions) => RelayClient;
interface AgentProvider {
    send: (context: AgentContext, signal: AbortSignal) => AsyncIterable<string>;
    abort?: (sessionId: string) => Promise<void>;
    undo?: () => Promise<void>;
    redo?: () => Promise<void>;
    checkConnection?: () => Promise<boolean>;
    supportsResume?: boolean;
    supportsFollowUp?: boolean;
}
interface CreateRelayAgentProviderOptions {
    relayClient: RelayClient;
    agentId: string;
}
declare const createRelayAgentProvider: (options: CreateRelayAgentProviderOptions) => AgentProvider;
declare global {
    interface Window {
        __REACT_GRAB_RELAY__?: RelayClient;
    }
}
declare const getDefaultRelayClient: () => RelayClient | null;

export { AgentContext, type AgentProvider, type RelayClient, RelayToBrowserMessage, createRelayAgentProvider, createRelayClient, getDefaultRelayClient };
