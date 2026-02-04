import { Options } from '@anthropic-ai/claude-agent-sdk';
import { AgentRunOptions, AgentHandler } from '@react-grab/relay';

interface ClaudeAgentOptions extends AgentRunOptions, Omit<Options, "cwd"> {
}
declare const claudeAgentHandler: AgentHandler;

export { type ClaudeAgentOptions, claudeAgentHandler };
