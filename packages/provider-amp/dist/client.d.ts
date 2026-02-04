import { init } from 'react-grab/core';
export { AgentCompleteResult } from 'react-grab/core';
import { RelayClient, AgentProvider } from '@react-grab/relay/client';

interface AmpAgentProviderOptions {
    relayClient?: RelayClient;
}
declare const createAmpAgentProvider: (providerOptions?: AmpAgentProviderOptions) => AgentProvider;
declare global {
    interface Window {
        __REACT_GRAB__?: ReturnType<typeof init>;
    }
}
declare const attachAgent: () => Promise<void>;

export { attachAgent, createAmpAgentProvider };
