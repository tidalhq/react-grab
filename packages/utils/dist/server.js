// src/server.ts
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var COMMAND_INSTALL_MAP = {
  "cursor-agent": "Install Cursor (https://cursor.com) and ensure 'cursor-agent' is in your PATH.",
  gemini: "Install the Gemini CLI: npm install -g @anthropic-ai/gemini-cli\nOr see: https://github.com/google-gemini/gemini-cli",
  claude: "Install Claude Code: npm install -g @anthropic-ai/claude-code\nOr see: https://github.com/anthropics/claude-code"
};
var formatSpawnError = (error, commandName) => {
  const spawnError = error;
  const isNotFound = spawnError.code === "ENOENT" || spawnError.message && spawnError.message.includes("ENOENT");
  if (isNotFound) {
    const installInfo = COMMAND_INSTALL_MAP[commandName];
    const baseMessage = `Command '${commandName}' not found.`;
    if (installInfo) {
      return `${baseMessage}

${installInfo}`;
    }
    return `${baseMessage}

Make sure '${commandName}' is installed and available in your PATH.`;
  }
  const isPermissionDenied = spawnError.code === "EACCES" || spawnError.message && spawnError.message.includes("EACCES");
  if (isPermissionDenied) {
    return `Permission denied when trying to run '${commandName}'.

Check that the command is executable: chmod +x $(which ${commandName})`;
  }
  return error.message;
};

export { formatSpawnError, sleep };
