import { init } from 'react-grab/core';
export { AgentCompleteResult } from 'react-grab/core';
import { RelayClient, AgentProvider } from '@react-grab/relay/client';

interface ClaudeAgentProviderOptions {
    relayClient?: RelayClient;
}
declare const createClaudeAgentProvider: (providerOptions?: ClaudeAgentProviderOptions) => AgentProvider;
declare global {
    interface Window {
        __REACT_GRAB__?: ReturnType<typeof init>;
    }
}
declare const attachAgent: () => Promise<void>;

export { attachAgent, createClaudeAgentProvider };
