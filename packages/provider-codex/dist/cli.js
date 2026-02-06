#!/usr/bin/env node
import { spawn } from 'child_process';
import { realpathSync } from 'fs';
import { dirname, join } from 'path';

var realScriptPath = realpathSync(process.argv[1]);
var scriptDir = dirname(realScriptPath);
var serverPath = join(scriptDir, "server.cjs");
var child = spawn(process.execPath, [serverPath], {
  detached: true,
  stdio: "inherit"
});
child.unref();
process.exit(0);
