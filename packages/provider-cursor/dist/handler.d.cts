import { AgentRunOptions, AgentHandler } from '@react-grab/relay';

interface CursorAgentOptions extends AgentRunOptions {
    model?: string;
    workspace?: string;
}
declare const cursorAgentHandler: AgentHandler;

export { type CursorAgentOptions, cursorAgentHandler };
