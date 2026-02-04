import { init, AgentProvider } from 'react-grab/core';
export { AgentCompleteResult } from 'react-grab/core';

declare const createAmiAgentProvider: () => AgentProvider;
declare global {
    interface Window {
        __REACT_GRAB__?: ReturnType<typeof init>;
    }
}
declare const attachAgent: () => void;

export { attachAgent, createAmiAgentProvider };
