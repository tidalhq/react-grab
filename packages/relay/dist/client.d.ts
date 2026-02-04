import { AgentContext, RelayToBrowserMessage } from './protocol.js';

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

export { type AgentProvider, type RelayClient, createRelayAgentProvider, createRelayClient, getDefaultRelayClient };
