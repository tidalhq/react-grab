#!/usr/bin/env node
'use strict';

var child_process = require('child_process');
var fs = require('fs');
var path = require('path');

var realScriptPath = fs.realpathSync(process.argv[1]);
var scriptDir = path.dirname(realScriptPath);
var serverPath = path.join(scriptDir, "server.cjs");
var child = child_process.spawn(process.execPath, [serverPath], {
  detached: true,
  stdio: "inherit"
});
child.unref();
process.exit(0);
