'use strict';

var url = require('url');
var childProcess2 = require('child_process');
var string_decoder = require('string_decoder');
var util = require('util');
var process22 = require('process');
var tty = require('tty');
var path6 = require('path');
var promises$1 = require('timers/promises');
var os = require('os');
var events = require('events');
var v8 = require('v8');
var fs = require('fs');
var promises = require('stream/promises');
var stream = require('stream');
var buffer = require('buffer');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var childProcess2__default = /*#__PURE__*/_interopDefault(childProcess2);
var process22__default = /*#__PURE__*/_interopDefault(process22);
var tty__default = /*#__PURE__*/_interopDefault(tty);
var path6__default = /*#__PURE__*/_interopDefault(path6);
var os__default = /*#__PURE__*/_interopDefault(os);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a2, b) => (typeof require !== "undefined" ? require : a2)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require3() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }) ,
  mod
));

// ../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js
var require_windows = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js"(exports, module) {
    module.exports = isexe;
    isexe.sync = sync;
    var fs = __require("fs");
    function checkPathExt(path7, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i2 = 0; i2 < pathext.length; i2++) {
        var p = pathext[i2].toLowerCase();
        if (p && path7.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path7, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path7, options);
    }
    function isexe(path7, options, cb) {
      fs.stat(path7, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path7, options));
      });
    }
    function sync(path7, options) {
      return checkStat(fs.statSync(path7), path7, options);
    }
  }
});

// ../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js
var require_mode = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js"(exports, module) {
    module.exports = isexe;
    isexe.sync = sync;
    var fs = __require("fs");
    function isexe(path7, options, cb) {
      fs.stat(path7, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path7, options) {
      return checkStat(fs.statSync(path7), options);
    }
    function checkStat(stat, options) {
      return stat.isFile() && checkMode(stat, options);
    }
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u2 = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o2 = parseInt("001", 8);
      var ug = u2 | g;
      var ret = mod & o2 || mod & g && gid === myGid || mod & u2 && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});

// ../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js
var require_isexe = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js"(exports, module) {
    __require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module.exports = isexe;
    isexe.sync = sync;
    function isexe(path7, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path7, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path7, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path7, options) {
      try {
        return core.sync(path7, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});

// ../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js
var require_which = __commonJS({
  "../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js"(exports, module) {
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path7 = __require("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        // windows always checks the cwd first
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
        "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i2) => new Promise((resolve, reject) => {
        if (i2 === pathEnv.length)
          return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i2];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path7.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve(subStep(p, i2, 0));
      });
      const subStep = (p, i2, ii) => new Promise((resolve, reject) => {
        if (ii === pathExt.length)
          return resolve(step(i2 + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve(p + ext);
          }
          return resolve(subStep(p, i2, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i2 = 0; i2 < pathEnv.length; i2++) {
        const ppRaw = pathEnv[i2];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path7.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module.exports = which;
    which.sync = whichSync;
  }
});

// ../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js
var require_path_key = __commonJS({
  "../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js"(exports, module) {
    var pathKey3 = (options = {}) => {
      const environment = options.env || process.env;
      const platform2 = options.platform || process.platform;
      if (platform2 !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module.exports = pathKey3;
    module.exports.default = pathKey3;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/resolveCommand.js
var require_resolveCommand = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/resolveCommand.js"(exports, module) {
    var path7 = __require("path");
    var which = require_which();
    var getPathKey = require_path_key();
    function resolveCommandAttempt(parsed, withoutPathExt) {
      const env = parsed.options.env || process.env;
      const cwd = process.cwd();
      const hasCustomCwd = parsed.options.cwd != null;
      const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
      if (shouldSwitchCwd) {
        try {
          process.chdir(parsed.options.cwd);
        } catch (err) {
        }
      }
      let resolved;
      try {
        resolved = which.sync(parsed.command, {
          path: env[getPathKey({ env })],
          pathExt: withoutPathExt ? path7.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path7.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module.exports = resolveCommand;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/escape.js
var require_escape = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/escape.js"(exports, module) {
    var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
    function escapeCommand(arg) {
      arg = arg.replace(metaCharsRegExp, "^$1");
      return arg;
    }
    function escapeArgument(arg, doubleEscapeMetaChars) {
      arg = `${arg}`;
      arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');
      arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
      arg = `"${arg}"`;
      arg = arg.replace(metaCharsRegExp, "^$1");
      if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, "^$1");
      }
      return arg;
    }
    module.exports.command = escapeCommand;
    module.exports.argument = escapeArgument;
  }
});

// ../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js
var require_shebang_regex = __commonJS({
  "../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js"(exports, module) {
    module.exports = /^#!(.*)/;
  }
});

// ../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js
var require_shebang_command = __commonJS({
  "../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js"(exports, module) {
    var shebangRegex = require_shebang_regex();
    module.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path7, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path7.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/readShebang.js
var require_readShebang = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/readShebang.js"(exports, module) {
    var fs = __require("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs.openSync(command, "r");
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module.exports = readShebang;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/parse.js"(exports, module) {
    var path7 = __require("path");
    var resolveCommand = require_resolveCommand();
    var escape = require_escape();
    var readShebang = require_readShebang();
    var isWin = process.platform === "win32";
    var isExecutableRegExp = /\.(?:com|exe)$/i;
    var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function detectShebang(parsed) {
      parsed.file = resolveCommand(parsed);
      const shebang = parsed.file && readShebang(parsed.file);
      if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return resolveCommand(parsed);
      }
      return parsed.file;
    }
    function parseNonShell(parsed) {
      if (!isWin) {
        return parsed;
      }
      const commandFile = detectShebang(parsed);
      const needsShell = !isExecutableRegExp.test(commandFile);
      if (parsed.options.forceShell || needsShell) {
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
        parsed.command = path7.normalize(parsed.command);
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [parsed.command].concat(parsed.args).join(" ");
        parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
      }
      return parsed;
    }
    function parse(command, args, options) {
      if (args && !Array.isArray(args)) {
        options = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options = Object.assign({}, options);
      const parsed = {
        command,
        args,
        options,
        file: void 0,
        original: {
          command,
          args
        }
      };
      return options.shell ? parsed : parseNonShell(parsed);
    }
    module.exports = parse;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/enoent.js
var require_enoent = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/enoent.js"(exports, module) {
    var isWin = process.platform === "win32";
    function notFoundError(original, syscall) {
      return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
      });
    }
    function hookChildProcess(cp, parsed) {
      if (!isWin) {
        return;
      }
      const originalEmit = cp.emit;
      cp.emit = function(name, arg1) {
        if (name === "exit") {
          const err = verifyENOENT(arg1, parsed);
          if (err) {
            return originalEmit.call(cp, "error", err);
          }
        }
        return originalEmit.apply(cp, arguments);
      };
    }
    function verifyENOENT(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawn");
      }
      return null;
    }
    function verifyENOENTSync(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawnSync");
      }
      return null;
    }
    module.exports = {
      hookChildProcess,
      verifyENOENT,
      verifyENOENTSync,
      notFoundError
    };
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js
var require_cross_spawn = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js"(exports, module) {
    var cp = __require("child_process");
    var parse = require_parse();
    var enoent = require_enoent();
    function spawn2(command, args, options) {
      const parsed = parse(command, args, options);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    function spawnSync2(command, args, options) {
      const parsed = parse(command, args, options);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    module.exports = spawn2;
    module.exports.spawn = spawn2;
    module.exports.sync = spawnSync2;
    module.exports._parse = parse;
    module.exports._enoent = enoent;
  }
});

// ../../node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
var safeNormalizeFileUrl = (file, name) => {
  const fileString = normalizeFileUrl(normalizeDenoExecPath(file));
  if (typeof fileString !== "string") {
    throw new TypeError(`${name} must be a string or a file URL: ${fileString}.`);
  }
  return fileString;
};
var normalizeDenoExecPath = (file) => isDenoExecPath(file) ? file.toString() : file;
var isDenoExecPath = (file) => typeof file !== "string" && file && Object.getPrototypeOf(file) === String.prototype;
var normalizeFileUrl = (file) => file instanceof URL ? url.fileURLToPath(file) : file;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/parameters.js
var normalizeParameters = (rawFile, rawArguments = [], rawOptions = {}) => {
  const filePath = safeNormalizeFileUrl(rawFile, "First argument");
  const [commandArguments, options] = isPlainObject(rawArguments) ? [[], rawArguments] : [rawArguments, rawOptions];
  if (!Array.isArray(commandArguments)) {
    throw new TypeError(`Second argument must be either an array of arguments or an options object: ${commandArguments}`);
  }
  if (commandArguments.some((commandArgument) => typeof commandArgument === "object" && commandArgument !== null)) {
    throw new TypeError(`Second argument must be an array of strings: ${commandArguments}`);
  }
  const normalizedArguments = commandArguments.map(String);
  const nullByteArgument = normalizedArguments.find((normalizedArgument) => normalizedArgument.includes("\0"));
  if (nullByteArgument !== void 0) {
    throw new TypeError(`Arguments cannot contain null bytes ("\\0"): ${nullByteArgument}`);
  }
  if (!isPlainObject(options)) {
    throw new TypeError(`Last argument must be an options object: ${options}`);
  }
  return [filePath, normalizedArguments, options];
};
var { toString: objectToString } = Object.prototype;
var isArrayBuffer = (value) => objectToString.call(value) === "[object ArrayBuffer]";
var isUint8Array = (value) => objectToString.call(value) === "[object Uint8Array]";
var bufferToUint8Array = (buffer) => new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
var textEncoder = new TextEncoder();
var stringToUint8Array = (string) => textEncoder.encode(string);
var textDecoder = new TextDecoder();
var uint8ArrayToString = (uint8Array) => textDecoder.decode(uint8Array);
var joinToString = (uint8ArraysOrStrings, encoding) => {
  const strings = uint8ArraysToStrings(uint8ArraysOrStrings, encoding);
  return strings.join("");
};
var uint8ArraysToStrings = (uint8ArraysOrStrings, encoding) => {
  if (encoding === "utf8" && uint8ArraysOrStrings.every((uint8ArrayOrString) => typeof uint8ArrayOrString === "string")) {
    return uint8ArraysOrStrings;
  }
  const decoder = new string_decoder.StringDecoder(encoding);
  const strings = uint8ArraysOrStrings.map((uint8ArrayOrString) => typeof uint8ArrayOrString === "string" ? stringToUint8Array(uint8ArrayOrString) : uint8ArrayOrString).map((uint8Array) => decoder.write(uint8Array));
  const finalString = decoder.end();
  return finalString === "" ? strings : [...strings, finalString];
};
var joinToUint8Array = (uint8ArraysOrStrings) => {
  if (uint8ArraysOrStrings.length === 1 && isUint8Array(uint8ArraysOrStrings[0])) {
    return uint8ArraysOrStrings[0];
  }
  return concatUint8Arrays(stringsToUint8Arrays(uint8ArraysOrStrings));
};
var stringsToUint8Arrays = (uint8ArraysOrStrings) => uint8ArraysOrStrings.map((uint8ArrayOrString) => typeof uint8ArrayOrString === "string" ? stringToUint8Array(uint8ArrayOrString) : uint8ArrayOrString);
var concatUint8Arrays = (uint8Arrays) => {
  const result = new Uint8Array(getJoinLength(uint8Arrays));
  let index = 0;
  for (const uint8Array of uint8Arrays) {
    result.set(uint8Array, index);
    index += uint8Array.length;
  }
  return result;
};
var getJoinLength = (uint8Arrays) => {
  let joinLength = 0;
  for (const uint8Array of uint8Arrays) {
    joinLength += uint8Array.length;
  }
  return joinLength;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/template.js
var isTemplateString = (templates) => Array.isArray(templates) && Array.isArray(templates.raw);
var parseTemplates = (templates, expressions) => {
  let tokens = [];
  for (const [index, template] of templates.entries()) {
    tokens = parseTemplate({
      templates,
      expressions,
      tokens,
      index,
      template
    });
  }
  if (tokens.length === 0) {
    throw new TypeError("Template script must not be empty");
  }
  const [file, ...commandArguments] = tokens;
  return [file, commandArguments, {}];
};
var parseTemplate = ({ templates, expressions, tokens, index, template }) => {
  if (template === void 0) {
    throw new TypeError(`Invalid backslash sequence: ${templates.raw[index]}`);
  }
  const { nextTokens, leadingWhitespaces, trailingWhitespaces } = splitByWhitespaces(template, templates.raw[index]);
  const newTokens = concatTokens(tokens, nextTokens, leadingWhitespaces);
  if (index === expressions.length) {
    return newTokens;
  }
  const expression = expressions[index];
  const expressionTokens = Array.isArray(expression) ? expression.map((expression2) => parseExpression(expression2)) : [parseExpression(expression)];
  return concatTokens(newTokens, expressionTokens, trailingWhitespaces);
};
var splitByWhitespaces = (template, rawTemplate) => {
  if (rawTemplate.length === 0) {
    return { nextTokens: [], leadingWhitespaces: false, trailingWhitespaces: false };
  }
  const nextTokens = [];
  let templateStart = 0;
  const leadingWhitespaces = DELIMITERS.has(rawTemplate[0]);
  for (let templateIndex = 0, rawIndex = 0; templateIndex < template.length; templateIndex += 1, rawIndex += 1) {
    const rawCharacter = rawTemplate[rawIndex];
    if (DELIMITERS.has(rawCharacter)) {
      if (templateStart !== templateIndex) {
        nextTokens.push(template.slice(templateStart, templateIndex));
      }
      templateStart = templateIndex + 1;
    } else if (rawCharacter === "\\") {
      const nextRawCharacter = rawTemplate[rawIndex + 1];
      if (nextRawCharacter === "\n") {
        templateIndex -= 1;
        rawIndex += 1;
      } else if (nextRawCharacter === "u" && rawTemplate[rawIndex + 2] === "{") {
        rawIndex = rawTemplate.indexOf("}", rawIndex + 3);
      } else {
        rawIndex += ESCAPE_LENGTH[nextRawCharacter] ?? 1;
      }
    }
  }
  const trailingWhitespaces = templateStart === template.length;
  if (!trailingWhitespaces) {
    nextTokens.push(template.slice(templateStart));
  }
  return { nextTokens, leadingWhitespaces, trailingWhitespaces };
};
var DELIMITERS = /* @__PURE__ */ new Set([" ", "	", "\r", "\n"]);
var ESCAPE_LENGTH = { x: 3, u: 5 };
var concatTokens = (tokens, nextTokens, isSeparated) => isSeparated || tokens.length === 0 || nextTokens.length === 0 ? [...tokens, ...nextTokens] : [
  ...tokens.slice(0, -1),
  `${tokens.at(-1)}${nextTokens[0]}`,
  ...nextTokens.slice(1)
];
var parseExpression = (expression) => {
  const typeOfExpression = typeof expression;
  if (typeOfExpression === "string") {
    return expression;
  }
  if (typeOfExpression === "number") {
    return String(expression);
  }
  if (isPlainObject(expression) && ("stdout" in expression || "isMaxBuffer" in expression)) {
    return getSubprocessResult(expression);
  }
  if (expression instanceof childProcess2.ChildProcess || Object.prototype.toString.call(expression) === "[object Promise]") {
    throw new TypeError("Unexpected subprocess in template expression. Please use ${await subprocess} instead of ${subprocess}.");
  }
  throw new TypeError(`Unexpected "${typeOfExpression}" in template expression`);
};
var getSubprocessResult = ({ stdout }) => {
  if (typeof stdout === "string") {
    return stdout;
  }
  if (isUint8Array(stdout)) {
    return uint8ArrayToString(stdout);
  }
  if (stdout === void 0) {
    throw new TypeError(`Missing result.stdout in template expression. This is probably due to the previous subprocess' "stdout" option.`);
  }
  throw new TypeError(`Unexpected "${typeof stdout}" stdout in template expression`);
};
var isStandardStream = (stream) => STANDARD_STREAMS.includes(stream);
var STANDARD_STREAMS = [process22__default.default.stdin, process22__default.default.stdout, process22__default.default.stderr];
var STANDARD_STREAMS_ALIASES = ["stdin", "stdout", "stderr"];
var getStreamName = (fdNumber) => STANDARD_STREAMS_ALIASES[fdNumber] ?? `stdio[${fdNumber}]`;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/specific.js
var normalizeFdSpecificOptions = (options) => {
  const optionsCopy = { ...options };
  for (const optionName of FD_SPECIFIC_OPTIONS) {
    optionsCopy[optionName] = normalizeFdSpecificOption(options, optionName);
  }
  return optionsCopy;
};
var normalizeFdSpecificOption = (options, optionName) => {
  const optionBaseArray = Array.from({ length: getStdioLength(options) + 1 });
  const optionArray = normalizeFdSpecificValue(options[optionName], optionBaseArray, optionName);
  return addDefaultValue(optionArray, optionName);
};
var getStdioLength = ({ stdio }) => Array.isArray(stdio) ? Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length) : STANDARD_STREAMS_ALIASES.length;
var normalizeFdSpecificValue = (optionValue, optionArray, optionName) => isPlainObject(optionValue) ? normalizeOptionObject(optionValue, optionArray, optionName) : optionArray.fill(optionValue);
var normalizeOptionObject = (optionValue, optionArray, optionName) => {
  for (const fdName of Object.keys(optionValue).sort(compareFdName)) {
    for (const fdNumber of parseFdName(fdName, optionName, optionArray)) {
      optionArray[fdNumber] = optionValue[fdName];
    }
  }
  return optionArray;
};
var compareFdName = (fdNameA, fdNameB) => getFdNameOrder(fdNameA) < getFdNameOrder(fdNameB) ? 1 : -1;
var getFdNameOrder = (fdName) => {
  if (fdName === "stdout" || fdName === "stderr") {
    return 0;
  }
  return fdName === "all" ? 2 : 1;
};
var parseFdName = (fdName, optionName, optionArray) => {
  if (fdName === "ipc") {
    return [optionArray.length - 1];
  }
  const fdNumber = parseFd(fdName);
  if (fdNumber === void 0 || fdNumber === 0) {
    throw new TypeError(`"${optionName}.${fdName}" is invalid.
It must be "${optionName}.stdout", "${optionName}.stderr", "${optionName}.all", "${optionName}.ipc", or "${optionName}.fd3", "${optionName}.fd4" (and so on).`);
  }
  if (fdNumber >= optionArray.length) {
    throw new TypeError(`"${optionName}.${fdName}" is invalid: that file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
  }
  return fdNumber === "all" ? [1, 2] : [fdNumber];
};
var parseFd = (fdName) => {
  if (fdName === "all") {
    return fdName;
  }
  if (STANDARD_STREAMS_ALIASES.includes(fdName)) {
    return STANDARD_STREAMS_ALIASES.indexOf(fdName);
  }
  const regexpResult = FD_REGEXP.exec(fdName);
  if (regexpResult !== null) {
    return Number(regexpResult[1]);
  }
};
var FD_REGEXP = /^fd(\d+)$/;
var addDefaultValue = (optionArray, optionName) => optionArray.map((optionValue) => optionValue === void 0 ? DEFAULT_OPTIONS[optionName] : optionValue);
var verboseDefault = util.debuglog("execa").enabled ? "full" : "none";
var DEFAULT_OPTIONS = {
  lines: false,
  buffer: true,
  maxBuffer: 1e3 * 1e3 * 100,
  verbose: verboseDefault,
  stripFinalNewline: true
};
var FD_SPECIFIC_OPTIONS = ["lines", "buffer", "maxBuffer", "verbose", "stripFinalNewline"];
var getFdSpecificValue = (optionArray, fdNumber) => fdNumber === "ipc" ? optionArray.at(-1) : optionArray[fdNumber];

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/values.js
var isVerbose = ({ verbose }, fdNumber) => getFdVerbose(verbose, fdNumber) !== "none";
var isFullVerbose = ({ verbose }, fdNumber) => !["none", "short"].includes(getFdVerbose(verbose, fdNumber));
var getVerboseFunction = ({ verbose }, fdNumber) => {
  const fdVerbose = getFdVerbose(verbose, fdNumber);
  return isVerboseFunction(fdVerbose) ? fdVerbose : void 0;
};
var getFdVerbose = (verbose, fdNumber) => fdNumber === void 0 ? getFdGenericVerbose(verbose) : getFdSpecificValue(verbose, fdNumber);
var getFdGenericVerbose = (verbose) => verbose.find((fdVerbose) => isVerboseFunction(fdVerbose)) ?? VERBOSE_VALUES.findLast((fdVerbose) => verbose.includes(fdVerbose));
var isVerboseFunction = (fdVerbose) => typeof fdVerbose === "function";
var VERBOSE_VALUES = ["none", "short", "full"];
var joinCommand = (filePath, rawArguments) => {
  const fileAndArguments = [filePath, ...rawArguments];
  const command = fileAndArguments.join(" ");
  const escapedCommand = fileAndArguments.map((fileAndArgument) => quoteString(escapeControlCharacters(fileAndArgument))).join(" ");
  return { command, escapedCommand };
};
var escapeLines = (lines) => util.stripVTControlCharacters(lines).split("\n").map((line) => escapeControlCharacters(line)).join("\n");
var escapeControlCharacters = (line) => line.replaceAll(SPECIAL_CHAR_REGEXP, (character) => escapeControlCharacter(character));
var escapeControlCharacter = (character) => {
  const commonEscape = COMMON_ESCAPES[character];
  if (commonEscape !== void 0) {
    return commonEscape;
  }
  const codepoint = character.codePointAt(0);
  const codepointHex = codepoint.toString(16);
  return codepoint <= ASTRAL_START ? `\\u${codepointHex.padStart(4, "0")}` : `\\U${codepointHex}`;
};
var getSpecialCharRegExp = () => {
  try {
    return new RegExp("\\p{Separator}|\\p{Other}", "gu");
  } catch {
    return /[\s\u0000-\u001F\u007F-\u009F\u00AD]/g;
  }
};
var SPECIAL_CHAR_REGEXP = getSpecialCharRegExp();
var COMMON_ESCAPES = {
  " ": " ",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t"
};
var ASTRAL_START = 65535;
var quoteString = (escapedArgument) => {
  if (NO_ESCAPE_REGEXP.test(escapedArgument)) {
    return escapedArgument;
  }
  return process22.platform === "win32" ? `"${escapedArgument.replaceAll('"', '""')}"` : `'${escapedArgument.replaceAll("'", "'\\''")}'`;
};
var NO_ESCAPE_REGEXP = /^[\w./-]+$/;
function isUnicodeSupported() {
  const { env } = process22__default.default;
  const { TERM, TERM_PROGRAM } = env;
  if (process22__default.default.platform !== "win32") {
    return TERM !== "linux";
  }
  return Boolean(env.WT_SESSION) || Boolean(env.TERMINUS_SUBLIME) || env.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}

// ../../node_modules/.pnpm/figures@6.1.0/node_modules/figures/index.js
var common = {
  circleQuestionMark: "(?)",
  questionMarkPrefix: "(?)",
  square: "\u2588",
  squareDarkShade: "\u2593",
  squareMediumShade: "\u2592",
  squareLightShade: "\u2591",
  squareTop: "\u2580",
  squareBottom: "\u2584",
  squareLeft: "\u258C",
  squareRight: "\u2590",
  squareCenter: "\u25A0",
  bullet: "\u25CF",
  dot: "\u2024",
  ellipsis: "\u2026",
  pointerSmall: "\u203A",
  triangleUp: "\u25B2",
  triangleUpSmall: "\u25B4",
  triangleDown: "\u25BC",
  triangleDownSmall: "\u25BE",
  triangleLeftSmall: "\u25C2",
  triangleRightSmall: "\u25B8",
  home: "\u2302",
  heart: "\u2665",
  musicNote: "\u266A",
  musicNoteBeamed: "\u266B",
  arrowUp: "\u2191",
  arrowDown: "\u2193",
  arrowLeft: "\u2190",
  arrowRight: "\u2192",
  arrowLeftRight: "\u2194",
  arrowUpDown: "\u2195",
  almostEqual: "\u2248",
  notEqual: "\u2260",
  lessOrEqual: "\u2264",
  greaterOrEqual: "\u2265",
  identical: "\u2261",
  infinity: "\u221E",
  subscriptZero: "\u2080",
  subscriptOne: "\u2081",
  subscriptTwo: "\u2082",
  subscriptThree: "\u2083",
  subscriptFour: "\u2084",
  subscriptFive: "\u2085",
  subscriptSix: "\u2086",
  subscriptSeven: "\u2087",
  subscriptEight: "\u2088",
  subscriptNine: "\u2089",
  oneHalf: "\xBD",
  oneThird: "\u2153",
  oneQuarter: "\xBC",
  oneFifth: "\u2155",
  oneSixth: "\u2159",
  oneEighth: "\u215B",
  twoThirds: "\u2154",
  twoFifths: "\u2156",
  threeQuarters: "\xBE",
  threeFifths: "\u2157",
  threeEighths: "\u215C",
  fourFifths: "\u2158",
  fiveSixths: "\u215A",
  fiveEighths: "\u215D",
  sevenEighths: "\u215E",
  line: "\u2500",
  lineBold: "\u2501",
  lineDouble: "\u2550",
  lineDashed0: "\u2504",
  lineDashed1: "\u2505",
  lineDashed2: "\u2508",
  lineDashed3: "\u2509",
  lineDashed4: "\u254C",
  lineDashed5: "\u254D",
  lineDashed6: "\u2574",
  lineDashed7: "\u2576",
  lineDashed8: "\u2578",
  lineDashed9: "\u257A",
  lineDashed10: "\u257C",
  lineDashed11: "\u257E",
  lineDashed12: "\u2212",
  lineDashed13: "\u2013",
  lineDashed14: "\u2010",
  lineDashed15: "\u2043",
  lineVertical: "\u2502",
  lineVerticalBold: "\u2503",
  lineVerticalDouble: "\u2551",
  lineVerticalDashed0: "\u2506",
  lineVerticalDashed1: "\u2507",
  lineVerticalDashed2: "\u250A",
  lineVerticalDashed3: "\u250B",
  lineVerticalDashed4: "\u254E",
  lineVerticalDashed5: "\u254F",
  lineVerticalDashed6: "\u2575",
  lineVerticalDashed7: "\u2577",
  lineVerticalDashed8: "\u2579",
  lineVerticalDashed9: "\u257B",
  lineVerticalDashed10: "\u257D",
  lineVerticalDashed11: "\u257F",
  lineDownLeft: "\u2510",
  lineDownLeftArc: "\u256E",
  lineDownBoldLeftBold: "\u2513",
  lineDownBoldLeft: "\u2512",
  lineDownLeftBold: "\u2511",
  lineDownDoubleLeftDouble: "\u2557",
  lineDownDoubleLeft: "\u2556",
  lineDownLeftDouble: "\u2555",
  lineDownRight: "\u250C",
  lineDownRightArc: "\u256D",
  lineDownBoldRightBold: "\u250F",
  lineDownBoldRight: "\u250E",
  lineDownRightBold: "\u250D",
  lineDownDoubleRightDouble: "\u2554",
  lineDownDoubleRight: "\u2553",
  lineDownRightDouble: "\u2552",
  lineUpLeft: "\u2518",
  lineUpLeftArc: "\u256F",
  lineUpBoldLeftBold: "\u251B",
  lineUpBoldLeft: "\u251A",
  lineUpLeftBold: "\u2519",
  lineUpDoubleLeftDouble: "\u255D",
  lineUpDoubleLeft: "\u255C",
  lineUpLeftDouble: "\u255B",
  lineUpRight: "\u2514",
  lineUpRightArc: "\u2570",
  lineUpBoldRightBold: "\u2517",
  lineUpBoldRight: "\u2516",
  lineUpRightBold: "\u2515",
  lineUpDoubleRightDouble: "\u255A",
  lineUpDoubleRight: "\u2559",
  lineUpRightDouble: "\u2558",
  lineUpDownLeft: "\u2524",
  lineUpBoldDownBoldLeftBold: "\u252B",
  lineUpBoldDownBoldLeft: "\u2528",
  lineUpDownLeftBold: "\u2525",
  lineUpBoldDownLeftBold: "\u2529",
  lineUpDownBoldLeftBold: "\u252A",
  lineUpDownBoldLeft: "\u2527",
  lineUpBoldDownLeft: "\u2526",
  lineUpDoubleDownDoubleLeftDouble: "\u2563",
  lineUpDoubleDownDoubleLeft: "\u2562",
  lineUpDownLeftDouble: "\u2561",
  lineUpDownRight: "\u251C",
  lineUpBoldDownBoldRightBold: "\u2523",
  lineUpBoldDownBoldRight: "\u2520",
  lineUpDownRightBold: "\u251D",
  lineUpBoldDownRightBold: "\u2521",
  lineUpDownBoldRightBold: "\u2522",
  lineUpDownBoldRight: "\u251F",
  lineUpBoldDownRight: "\u251E",
  lineUpDoubleDownDoubleRightDouble: "\u2560",
  lineUpDoubleDownDoubleRight: "\u255F",
  lineUpDownRightDouble: "\u255E",
  lineDownLeftRight: "\u252C",
  lineDownBoldLeftBoldRightBold: "\u2533",
  lineDownLeftBoldRightBold: "\u252F",
  lineDownBoldLeftRight: "\u2530",
  lineDownBoldLeftBoldRight: "\u2531",
  lineDownBoldLeftRightBold: "\u2532",
  lineDownLeftRightBold: "\u252E",
  lineDownLeftBoldRight: "\u252D",
  lineDownDoubleLeftDoubleRightDouble: "\u2566",
  lineDownDoubleLeftRight: "\u2565",
  lineDownLeftDoubleRightDouble: "\u2564",
  lineUpLeftRight: "\u2534",
  lineUpBoldLeftBoldRightBold: "\u253B",
  lineUpLeftBoldRightBold: "\u2537",
  lineUpBoldLeftRight: "\u2538",
  lineUpBoldLeftBoldRight: "\u2539",
  lineUpBoldLeftRightBold: "\u253A",
  lineUpLeftRightBold: "\u2536",
  lineUpLeftBoldRight: "\u2535",
  lineUpDoubleLeftDoubleRightDouble: "\u2569",
  lineUpDoubleLeftRight: "\u2568",
  lineUpLeftDoubleRightDouble: "\u2567",
  lineUpDownLeftRight: "\u253C",
  lineUpBoldDownBoldLeftBoldRightBold: "\u254B",
  lineUpDownBoldLeftBoldRightBold: "\u2548",
  lineUpBoldDownLeftBoldRightBold: "\u2547",
  lineUpBoldDownBoldLeftRightBold: "\u254A",
  lineUpBoldDownBoldLeftBoldRight: "\u2549",
  lineUpBoldDownLeftRight: "\u2540",
  lineUpDownBoldLeftRight: "\u2541",
  lineUpDownLeftBoldRight: "\u253D",
  lineUpDownLeftRightBold: "\u253E",
  lineUpBoldDownBoldLeftRight: "\u2542",
  lineUpDownLeftBoldRightBold: "\u253F",
  lineUpBoldDownLeftBoldRight: "\u2543",
  lineUpBoldDownLeftRightBold: "\u2544",
  lineUpDownBoldLeftBoldRight: "\u2545",
  lineUpDownBoldLeftRightBold: "\u2546",
  lineUpDoubleDownDoubleLeftDoubleRightDouble: "\u256C",
  lineUpDoubleDownDoubleLeftRight: "\u256B",
  lineUpDownLeftDoubleRightDouble: "\u256A",
  lineCross: "\u2573",
  lineBackslash: "\u2572",
  lineSlash: "\u2571"
};
var specialMainSymbols = {
  tick: "\u2714",
  info: "\u2139",
  warning: "\u26A0",
  cross: "\u2718",
  squareSmall: "\u25FB",
  squareSmallFilled: "\u25FC",
  circle: "\u25EF",
  circleFilled: "\u25C9",
  circleDotted: "\u25CC",
  circleDouble: "\u25CE",
  circleCircle: "\u24DE",
  circleCross: "\u24E7",
  circlePipe: "\u24BE",
  radioOn: "\u25C9",
  radioOff: "\u25EF",
  checkboxOn: "\u2612",
  checkboxOff: "\u2610",
  checkboxCircleOn: "\u24E7",
  checkboxCircleOff: "\u24BE",
  pointer: "\u276F",
  triangleUpOutline: "\u25B3",
  triangleLeft: "\u25C0",
  triangleRight: "\u25B6",
  lozenge: "\u25C6",
  lozengeOutline: "\u25C7",
  hamburger: "\u2630",
  smiley: "\u32E1",
  mustache: "\u0DF4",
  star: "\u2605",
  play: "\u25B6",
  nodejs: "\u2B22",
  oneSeventh: "\u2150",
  oneNinth: "\u2151",
  oneTenth: "\u2152"
};
var specialFallbackSymbols = {
  tick: "\u221A",
  info: "i",
  warning: "\u203C",
  cross: "\xD7",
  squareSmall: "\u25A1",
  squareSmallFilled: "\u25A0",
  circle: "( )",
  circleFilled: "(*)",
  circleDotted: "( )",
  circleDouble: "( )",
  circleCircle: "(\u25CB)",
  circleCross: "(\xD7)",
  circlePipe: "(\u2502)",
  radioOn: "(*)",
  radioOff: "( )",
  checkboxOn: "[\xD7]",
  checkboxOff: "[ ]",
  checkboxCircleOn: "(\xD7)",
  checkboxCircleOff: "( )",
  pointer: ">",
  triangleUpOutline: "\u2206",
  triangleLeft: "\u25C4",
  triangleRight: "\u25BA",
  lozenge: "\u2666",
  lozengeOutline: "\u25CA",
  hamburger: "\u2261",
  smiley: "\u263A",
  mustache: "\u250C\u2500\u2510",
  star: "\u2736",
  play: "\u25BA",
  nodejs: "\u2666",
  oneSeventh: "1/7",
  oneNinth: "1/9",
  oneTenth: "1/10"
};
var mainSymbols = { ...common, ...specialMainSymbols };
var fallbackSymbols = { ...common, ...specialFallbackSymbols };
var shouldUseMain = isUnicodeSupported();
var figures = shouldUseMain ? mainSymbols : fallbackSymbols;
var figures_default = figures;
var hasColors = tty__default.default?.WriteStream?.prototype?.hasColors?.() ?? false;
var format = (open, close) => {
  if (!hasColors) {
    return (input) => input;
  }
  const openCode = `\x1B[${open}m`;
  const closeCode = `\x1B[${close}m`;
  return (input) => {
    const string = input + "";
    let index = string.indexOf(closeCode);
    if (index === -1) {
      return openCode + string + closeCode;
    }
    let result = openCode;
    let lastIndex = 0;
    const reopenOnNestedClose = close === 22;
    const replaceCode = (reopenOnNestedClose ? closeCode : "") + openCode;
    while (index !== -1) {
      result += string.slice(lastIndex, index) + replaceCode;
      lastIndex = index + closeCode.length;
      index = string.indexOf(closeCode, lastIndex);
    }
    result += string.slice(lastIndex) + closeCode;
    return result;
  };
};
var bold = format(1, 22);
var gray = format(90, 39);
var redBright = format(91, 39);
var yellowBright = format(93, 39);

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/default.js
var defaultVerboseFunction = ({
  type,
  message,
  timestamp,
  piped,
  commandId,
  result: { failed = false } = {},
  options: { reject = true }
}) => {
  const timestampString = serializeTimestamp(timestamp);
  const icon = ICONS[type]({ failed, reject, piped });
  const color = COLORS[type]({ reject });
  return `${gray(`[${timestampString}]`)} ${gray(`[${commandId}]`)} ${color(icon)} ${color(message)}`;
};
var serializeTimestamp = (timestamp) => `${padField(timestamp.getHours(), 2)}:${padField(timestamp.getMinutes(), 2)}:${padField(timestamp.getSeconds(), 2)}.${padField(timestamp.getMilliseconds(), 3)}`;
var padField = (field, padding) => String(field).padStart(padding, "0");
var getFinalIcon = ({ failed, reject }) => {
  if (!failed) {
    return figures_default.tick;
  }
  return reject ? figures_default.cross : figures_default.warning;
};
var ICONS = {
  command: ({ piped }) => piped ? "|" : "$",
  output: () => " ",
  ipc: () => "*",
  error: getFinalIcon,
  duration: getFinalIcon
};
var identity = (string) => string;
var COLORS = {
  command: () => bold,
  output: () => identity,
  ipc: () => identity,
  error: ({ reject }) => reject ? redBright : yellowBright,
  duration: () => gray
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/custom.js
var applyVerboseOnLines = (printedLines, verboseInfo, fdNumber) => {
  const verboseFunction = getVerboseFunction(verboseInfo, fdNumber);
  return printedLines.map(({ verboseLine, verboseObject }) => applyVerboseFunction(verboseLine, verboseObject, verboseFunction)).filter((printedLine) => printedLine !== void 0).map((printedLine) => appendNewline(printedLine)).join("");
};
var applyVerboseFunction = (verboseLine, verboseObject, verboseFunction) => {
  if (verboseFunction === void 0) {
    return verboseLine;
  }
  const printedLine = verboseFunction(verboseLine, verboseObject);
  if (typeof printedLine === "string") {
    return printedLine;
  }
};
var appendNewline = (printedLine) => printedLine.endsWith("\n") ? printedLine : `${printedLine}
`;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/log.js
var verboseLog = ({ type, verboseMessage, fdNumber, verboseInfo, result }) => {
  const verboseObject = getVerboseObject({ type, result, verboseInfo });
  const printedLines = getPrintedLines(verboseMessage, verboseObject);
  const finalLines = applyVerboseOnLines(printedLines, verboseInfo, fdNumber);
  if (finalLines !== "") {
    console.warn(finalLines.slice(0, -1));
  }
};
var getVerboseObject = ({
  type,
  result,
  verboseInfo: { escapedCommand, commandId, rawOptions: { piped = false, ...options } }
}) => ({
  type,
  escapedCommand,
  commandId: `${commandId}`,
  timestamp: /* @__PURE__ */ new Date(),
  piped,
  result,
  options
});
var getPrintedLines = (verboseMessage, verboseObject) => verboseMessage.split("\n").map((message) => getPrintedLine({ ...verboseObject, message }));
var getPrintedLine = (verboseObject) => {
  const verboseLine = defaultVerboseFunction(verboseObject);
  return { verboseLine, verboseObject };
};
var serializeVerboseMessage = (message) => {
  const messageString = typeof message === "string" ? message : util.inspect(message);
  const escapedMessage = escapeLines(messageString);
  return escapedMessage.replaceAll("	", " ".repeat(TAB_SIZE));
};
var TAB_SIZE = 2;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/start.js
var logCommand = (escapedCommand, verboseInfo) => {
  if (!isVerbose(verboseInfo)) {
    return;
  }
  verboseLog({
    type: "command",
    verboseMessage: escapedCommand,
    verboseInfo
  });
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/info.js
var getVerboseInfo = (verbose, escapedCommand, rawOptions) => {
  validateVerbose(verbose);
  const commandId = getCommandId(verbose);
  return {
    verbose,
    escapedCommand,
    commandId,
    rawOptions
  };
};
var getCommandId = (verbose) => isVerbose({ verbose }) ? COMMAND_ID++ : void 0;
var COMMAND_ID = 0n;
var validateVerbose = (verbose) => {
  for (const fdVerbose of verbose) {
    if (fdVerbose === false) {
      throw new TypeError(`The "verbose: false" option was renamed to "verbose: 'none'".`);
    }
    if (fdVerbose === true) {
      throw new TypeError(`The "verbose: true" option was renamed to "verbose: 'short'".`);
    }
    if (!VERBOSE_VALUES.includes(fdVerbose) && !isVerboseFunction(fdVerbose)) {
      const allowedValues = VERBOSE_VALUES.map((allowedValue) => `'${allowedValue}'`).join(", ");
      throw new TypeError(`The "verbose" option must not be ${fdVerbose}. Allowed values are: ${allowedValues} or a function.`);
    }
  }
};
var getStartTime = () => process22.hrtime.bigint();
var getDurationMs = (startTime) => Number(process22.hrtime.bigint() - startTime) / 1e6;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/command.js
var handleCommand = (filePath, rawArguments, rawOptions) => {
  const startTime = getStartTime();
  const { command, escapedCommand } = joinCommand(filePath, rawArguments);
  const verbose = normalizeFdSpecificOption(rawOptions, "verbose");
  const verboseInfo = getVerboseInfo(verbose, escapedCommand, { ...rawOptions });
  logCommand(escapedCommand, verboseInfo);
  return {
    command,
    escapedCommand,
    startTime,
    verboseInfo
  };
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/options.js
var import_cross_spawn = __toESM(require_cross_spawn());

// ../../node_modules/.pnpm/path-key@4.0.0/node_modules/path-key/index.js
function pathKey(options = {}) {
  const {
    env = process.env,
    platform: platform2 = process.platform
  } = options;
  if (platform2 !== "win32") {
    return "PATH";
  }
  return Object.keys(env).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
}
util.promisify(childProcess2.execFile);
function toPath(urlOrPath) {
  return urlOrPath instanceof URL ? url.fileURLToPath(urlOrPath) : urlOrPath;
}
function traversePathUp(startPath) {
  return {
    *[Symbol.iterator]() {
      let currentPath = path6__default.default.resolve(toPath(startPath));
      let previousPath;
      while (previousPath !== currentPath) {
        yield currentPath;
        previousPath = currentPath;
        currentPath = path6__default.default.resolve(currentPath, "..");
      }
    }
  };
}

// ../../node_modules/.pnpm/npm-run-path@6.0.0/node_modules/npm-run-path/index.js
var npmRunPath = ({
  cwd = process22__default.default.cwd(),
  path: pathOption = process22__default.default.env[pathKey()],
  preferLocal = true,
  execPath: execPath2 = process22__default.default.execPath,
  addExecPath = true
} = {}) => {
  const cwdPath = path6__default.default.resolve(toPath(cwd));
  const result = [];
  const pathParts = pathOption.split(path6__default.default.delimiter);
  if (preferLocal) {
    applyPreferLocal(result, pathParts, cwdPath);
  }
  if (addExecPath) {
    applyExecPath(result, pathParts, execPath2, cwdPath);
  }
  return pathOption === "" || pathOption === path6__default.default.delimiter ? `${result.join(path6__default.default.delimiter)}${pathOption}` : [...result, pathOption].join(path6__default.default.delimiter);
};
var applyPreferLocal = (result, pathParts, cwdPath) => {
  for (const directory of traversePathUp(cwdPath)) {
    const pathPart = path6__default.default.join(directory, "node_modules/.bin");
    if (!pathParts.includes(pathPart)) {
      result.push(pathPart);
    }
  }
};
var applyExecPath = (result, pathParts, execPath2, cwdPath) => {
  const pathPart = path6__default.default.resolve(cwdPath, toPath(execPath2), "..");
  if (!pathParts.includes(pathPart)) {
    result.push(pathPart);
  }
};
var npmRunPathEnv = ({ env = process22__default.default.env, ...options } = {}) => {
  env = { ...env };
  const pathName = pathKey({ env });
  options.path = env[pathName];
  env[pathName] = npmRunPath(options);
  return env;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/final-error.js
var getFinalError = (originalError, message, isSync) => {
  const ErrorClass = isSync ? ExecaSyncError : ExecaError;
  const options = originalError instanceof DiscardedError ? {} : { cause: originalError };
  return new ErrorClass(message, options);
};
var DiscardedError = class extends Error {
};
var setErrorName = (ErrorClass, value) => {
  Object.defineProperty(ErrorClass.prototype, "name", {
    value,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ErrorClass.prototype, execaErrorSymbol, {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false
  });
};
var isExecaError = (error) => isErrorInstance(error) && execaErrorSymbol in error;
var execaErrorSymbol = Symbol("isExecaError");
var isErrorInstance = (value) => Object.prototype.toString.call(value) === "[object Error]";
var ExecaError = class extends Error {
};
setErrorName(ExecaError, ExecaError.name);
var ExecaSyncError = class extends Error {
};
setErrorName(ExecaSyncError, ExecaSyncError.name);

// ../../node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/realtime.js
var getRealtimeSignals = () => {
  const length = SIGRTMAX - SIGRTMIN + 1;
  return Array.from({ length }, getRealtimeSignal);
};
var getRealtimeSignal = (value, index) => ({
  name: `SIGRT${index + 1}`,
  number: SIGRTMIN + index,
  action: "terminate",
  description: "Application-specific signal (realtime)",
  standard: "posix"
});
var SIGRTMIN = 34;
var SIGRTMAX = 64;

// ../../node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/core.js
var SIGNALS = [
  {
    name: "SIGHUP",
    number: 1,
    action: "terminate",
    description: "Terminal closed",
    standard: "posix"
  },
  {
    name: "SIGINT",
    number: 2,
    action: "terminate",
    description: "User interruption with CTRL-C",
    standard: "ansi"
  },
  {
    name: "SIGQUIT",
    number: 3,
    action: "core",
    description: "User interruption with CTRL-\\",
    standard: "posix"
  },
  {
    name: "SIGILL",
    number: 4,
    action: "core",
    description: "Invalid machine instruction",
    standard: "ansi"
  },
  {
    name: "SIGTRAP",
    number: 5,
    action: "core",
    description: "Debugger breakpoint",
    standard: "posix"
  },
  {
    name: "SIGABRT",
    number: 6,
    action: "core",
    description: "Aborted",
    standard: "ansi"
  },
  {
    name: "SIGIOT",
    number: 6,
    action: "core",
    description: "Aborted",
    standard: "bsd"
  },
  {
    name: "SIGBUS",
    number: 7,
    action: "core",
    description: "Bus error due to misaligned, non-existing address or paging error",
    standard: "bsd"
  },
  {
    name: "SIGEMT",
    number: 7,
    action: "terminate",
    description: "Command should be emulated but is not implemented",
    standard: "other"
  },
  {
    name: "SIGFPE",
    number: 8,
    action: "core",
    description: "Floating point arithmetic error",
    standard: "ansi"
  },
  {
    name: "SIGKILL",
    number: 9,
    action: "terminate",
    description: "Forced termination",
    standard: "posix",
    forced: true
  },
  {
    name: "SIGUSR1",
    number: 10,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGSEGV",
    number: 11,
    action: "core",
    description: "Segmentation fault",
    standard: "ansi"
  },
  {
    name: "SIGUSR2",
    number: 12,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGPIPE",
    number: 13,
    action: "terminate",
    description: "Broken pipe or socket",
    standard: "posix"
  },
  {
    name: "SIGALRM",
    number: 14,
    action: "terminate",
    description: "Timeout or timer",
    standard: "posix"
  },
  {
    name: "SIGTERM",
    number: 15,
    action: "terminate",
    description: "Termination",
    standard: "ansi"
  },
  {
    name: "SIGSTKFLT",
    number: 16,
    action: "terminate",
    description: "Stack is empty or overflowed",
    standard: "other"
  },
  {
    name: "SIGCHLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "posix"
  },
  {
    name: "SIGCLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "other"
  },
  {
    name: "SIGCONT",
    number: 18,
    action: "unpause",
    description: "Unpaused",
    standard: "posix",
    forced: true
  },
  {
    name: "SIGSTOP",
    number: 19,
    action: "pause",
    description: "Paused",
    standard: "posix",
    forced: true
  },
  {
    name: "SIGTSTP",
    number: 20,
    action: "pause",
    description: 'Paused using CTRL-Z or "suspend"',
    standard: "posix"
  },
  {
    name: "SIGTTIN",
    number: 21,
    action: "pause",
    description: "Background process cannot read terminal input",
    standard: "posix"
  },
  {
    name: "SIGBREAK",
    number: 21,
    action: "terminate",
    description: "User interruption with CTRL-BREAK",
    standard: "other"
  },
  {
    name: "SIGTTOU",
    number: 22,
    action: "pause",
    description: "Background process cannot write to terminal output",
    standard: "posix"
  },
  {
    name: "SIGURG",
    number: 23,
    action: "ignore",
    description: "Socket received out-of-band data",
    standard: "bsd"
  },
  {
    name: "SIGXCPU",
    number: 24,
    action: "core",
    description: "Process timed out",
    standard: "bsd"
  },
  {
    name: "SIGXFSZ",
    number: 25,
    action: "core",
    description: "File too big",
    standard: "bsd"
  },
  {
    name: "SIGVTALRM",
    number: 26,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGPROF",
    number: 27,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGWINCH",
    number: 28,
    action: "ignore",
    description: "Terminal window size changed",
    standard: "bsd"
  },
  {
    name: "SIGIO",
    number: 29,
    action: "terminate",
    description: "I/O is available",
    standard: "other"
  },
  {
    name: "SIGPOLL",
    number: 29,
    action: "terminate",
    description: "Watched event",
    standard: "other"
  },
  {
    name: "SIGINFO",
    number: 29,
    action: "ignore",
    description: "Request for process information",
    standard: "other"
  },
  {
    name: "SIGPWR",
    number: 30,
    action: "terminate",
    description: "Device running out of power",
    standard: "systemv"
  },
  {
    name: "SIGSYS",
    number: 31,
    action: "core",
    description: "Invalid system call",
    standard: "other"
  },
  {
    name: "SIGUNUSED",
    number: 31,
    action: "terminate",
    description: "Invalid system call",
    standard: "other"
  }
];

// ../../node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/signals.js
var getSignals = () => {
  const realtimeSignals = getRealtimeSignals();
  const signals3 = [...SIGNALS, ...realtimeSignals].map(normalizeSignal);
  return signals3;
};
var normalizeSignal = ({
  name,
  number: defaultNumber,
  description,
  action,
  forced = false,
  standard
}) => {
  const {
    signals: { [name]: constantSignal }
  } = os.constants;
  const supported = constantSignal !== void 0;
  const number = supported ? constantSignal : defaultNumber;
  return { name, number, description, supported, action, forced, standard };
};

// ../../node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/main.js
var getSignalsByName = () => {
  const signals3 = getSignals();
  return Object.fromEntries(signals3.map(getSignalByName));
};
var getSignalByName = ({
  name,
  number,
  description,
  supported,
  action,
  forced,
  standard
}) => [name, { name, number, description, supported, action, forced, standard }];
var signalsByName = getSignalsByName();
var getSignalsByNumber = () => {
  const signals3 = getSignals();
  const length = SIGRTMAX + 1;
  const signalsA = Array.from(
    { length },
    (value, number) => getSignalByNumber(number, signals3)
  );
  return Object.assign({}, ...signalsA);
};
var getSignalByNumber = (number, signals3) => {
  const signal = findSignalByNumber(number, signals3);
  if (signal === void 0) {
    return {};
  }
  const { name, description, supported, action, forced, standard } = signal;
  return {
    [number]: {
      name,
      number,
      description,
      supported,
      action,
      forced,
      standard
    }
  };
};
var findSignalByNumber = (number, signals3) => {
  const signal = signals3.find(({ name }) => os.constants.signals[name] === number);
  if (signal !== void 0) {
    return signal;
  }
  return signals3.find((signalA) => signalA.number === number);
};
getSignalsByNumber();

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/signal.js
var normalizeKillSignal = (killSignal) => {
  const optionName = "option `killSignal`";
  if (killSignal === 0) {
    throw new TypeError(`Invalid ${optionName}: 0 cannot be used.`);
  }
  return normalizeSignal2(killSignal, optionName);
};
var normalizeSignalArgument = (signal) => signal === 0 ? signal : normalizeSignal2(signal, "`subprocess.kill()`'s argument");
var normalizeSignal2 = (signalNameOrInteger, optionName) => {
  if (Number.isInteger(signalNameOrInteger)) {
    return normalizeSignalInteger(signalNameOrInteger, optionName);
  }
  if (typeof signalNameOrInteger === "string") {
    return normalizeSignalName(signalNameOrInteger, optionName);
  }
  throw new TypeError(`Invalid ${optionName} ${String(signalNameOrInteger)}: it must be a string or an integer.
${getAvailableSignals()}`);
};
var normalizeSignalInteger = (signalInteger, optionName) => {
  if (signalsIntegerToName.has(signalInteger)) {
    return signalsIntegerToName.get(signalInteger);
  }
  throw new TypeError(`Invalid ${optionName} ${signalInteger}: this signal integer does not exist.
${getAvailableSignals()}`);
};
var getSignalsIntegerToName = () => new Map(Object.entries(os.constants.signals).reverse().map(([signalName, signalInteger]) => [signalInteger, signalName]));
var signalsIntegerToName = getSignalsIntegerToName();
var normalizeSignalName = (signalName, optionName) => {
  if (signalName in os.constants.signals) {
    return signalName;
  }
  if (signalName.toUpperCase() in os.constants.signals) {
    throw new TypeError(`Invalid ${optionName} '${signalName}': please rename it to '${signalName.toUpperCase()}'.`);
  }
  throw new TypeError(`Invalid ${optionName} '${signalName}': this signal name does not exist.
${getAvailableSignals()}`);
};
var getAvailableSignals = () => `Available signal names: ${getAvailableSignalNames()}.
Available signal numbers: ${getAvailableSignalIntegers()}.`;
var getAvailableSignalNames = () => Object.keys(os.constants.signals).sort().map((signalName) => `'${signalName}'`).join(", ");
var getAvailableSignalIntegers = () => [...new Set(Object.values(os.constants.signals).sort((signalInteger, signalIntegerTwo) => signalInteger - signalIntegerTwo))].join(", ");
var getSignalDescription = (signal) => signalsByName[signal].description;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/kill.js
var normalizeForceKillAfterDelay = (forceKillAfterDelay) => {
  if (forceKillAfterDelay === false) {
    return forceKillAfterDelay;
  }
  if (forceKillAfterDelay === true) {
    return DEFAULT_FORCE_KILL_TIMEOUT;
  }
  if (!Number.isFinite(forceKillAfterDelay) || forceKillAfterDelay < 0) {
    throw new TypeError(`Expected the \`forceKillAfterDelay\` option to be a non-negative integer, got \`${forceKillAfterDelay}\` (${typeof forceKillAfterDelay})`);
  }
  return forceKillAfterDelay;
};
var DEFAULT_FORCE_KILL_TIMEOUT = 1e3 * 5;
var subprocessKill = ({ kill: kill2, options: { forceKillAfterDelay, killSignal }, onInternalError, context, controller }, signalOrError, errorArgument) => {
  const { signal, error } = parseKillArguments(signalOrError, errorArgument, killSignal);
  emitKillError(error, onInternalError);
  const killResult = kill2(signal);
  setKillTimeout({
    kill: kill2,
    signal,
    forceKillAfterDelay,
    killSignal,
    killResult,
    context,
    controller
  });
  return killResult;
};
var parseKillArguments = (signalOrError, errorArgument, killSignal) => {
  const [signal = killSignal, error] = isErrorInstance(signalOrError) ? [void 0, signalOrError] : [signalOrError, errorArgument];
  if (typeof signal !== "string" && !Number.isInteger(signal)) {
    throw new TypeError(`The first argument must be an error instance or a signal name string/integer: ${String(signal)}`);
  }
  if (error !== void 0 && !isErrorInstance(error)) {
    throw new TypeError(`The second argument is optional. If specified, it must be an error instance: ${error}`);
  }
  return { signal: normalizeSignalArgument(signal), error };
};
var emitKillError = (error, onInternalError) => {
  if (error !== void 0) {
    onInternalError.reject(error);
  }
};
var setKillTimeout = async ({ kill: kill2, signal, forceKillAfterDelay, killSignal, killResult, context, controller }) => {
  if (signal === killSignal && killResult) {
    killOnTimeout({
      kill: kill2,
      forceKillAfterDelay,
      context,
      controllerSignal: controller.signal
    });
  }
};
var killOnTimeout = async ({ kill: kill2, forceKillAfterDelay, context, controllerSignal }) => {
  if (forceKillAfterDelay === false) {
    return;
  }
  try {
    await promises$1.setTimeout(forceKillAfterDelay, void 0, { signal: controllerSignal });
    if (kill2("SIGKILL")) {
      context.isForcefullyTerminated ??= true;
    }
  } catch {
  }
};
var onAbortedSignal = async (mainSignal, stopSignal) => {
  if (!mainSignal.aborted) {
    await events.once(mainSignal, "abort", { signal: stopSignal });
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/cancel.js
var validateCancelSignal = ({ cancelSignal }) => {
  if (cancelSignal !== void 0 && Object.prototype.toString.call(cancelSignal) !== "[object AbortSignal]") {
    throw new Error(`The \`cancelSignal\` option must be an AbortSignal: ${String(cancelSignal)}`);
  }
};
var throwOnCancel = ({ subprocess, cancelSignal, gracefulCancel, context, controller }) => cancelSignal === void 0 || gracefulCancel ? [] : [terminateOnCancel(subprocess, cancelSignal, context, controller)];
var terminateOnCancel = async (subprocess, cancelSignal, context, { signal }) => {
  await onAbortedSignal(cancelSignal, signal);
  context.terminationReason ??= "cancel";
  subprocess.kill();
  throw cancelSignal.reason;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/validation.js
var validateIpcMethod = ({ methodName, isSubprocess, ipc, isConnected: isConnected2 }) => {
  validateIpcOption(methodName, isSubprocess, ipc);
  validateConnection(methodName, isSubprocess, isConnected2);
};
var validateIpcOption = (methodName, isSubprocess, ipc) => {
  if (!ipc) {
    throw new Error(`${getMethodName(methodName, isSubprocess)} can only be used if the \`ipc\` option is \`true\`.`);
  }
};
var validateConnection = (methodName, isSubprocess, isConnected2) => {
  if (!isConnected2) {
    throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} has already exited or disconnected.`);
  }
};
var throwOnEarlyDisconnect = (isSubprocess) => {
  throw new Error(`${getMethodName("getOneMessage", isSubprocess)} could not complete: the ${getOtherProcessName(isSubprocess)} exited or disconnected.`);
};
var throwOnStrictDeadlockError = (isSubprocess) => {
  throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is sending a message too, instead of listening to incoming messages.
This can be fixed by both sending a message and listening to incoming messages at the same time:

const [receivedMessage] = await Promise.all([
	${getMethodName("getOneMessage", isSubprocess)},
	${getMethodName("sendMessage", isSubprocess, "message, {strict: true}")},
]);`);
};
var getStrictResponseError = (error, isSubprocess) => new Error(`${getMethodName("sendMessage", isSubprocess)} failed when sending an acknowledgment response to the ${getOtherProcessName(isSubprocess)}.`, { cause: error });
var throwOnMissingStrict = (isSubprocess) => {
  throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is not listening to incoming messages.`);
};
var throwOnStrictDisconnect = (isSubprocess) => {
  throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} exited without listening to incoming messages.`);
};
var getAbortDisconnectError = () => new Error(`\`cancelSignal\` aborted: the ${getOtherProcessName(true)} disconnected.`);
var throwOnMissingParent = () => {
  throw new Error("`getCancelSignal()` cannot be used without setting the `cancelSignal` subprocess option.");
};
var handleEpipeError = ({ error, methodName, isSubprocess }) => {
  if (error.code === "EPIPE") {
    throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} is disconnecting.`, { cause: error });
  }
};
var handleSerializationError = ({ error, methodName, isSubprocess, message }) => {
  if (isSerializationError(error)) {
    throw new Error(`${getMethodName(methodName, isSubprocess)}'s argument type is invalid: the message cannot be serialized: ${String(message)}.`, { cause: error });
  }
};
var isSerializationError = ({ code, message }) => SERIALIZATION_ERROR_CODES.has(code) || SERIALIZATION_ERROR_MESSAGES.some((serializationErrorMessage) => message.includes(serializationErrorMessage));
var SERIALIZATION_ERROR_CODES = /* @__PURE__ */ new Set([
  // Message is `undefined`
  "ERR_MISSING_ARGS",
  // Message is a function, a bigint, a symbol
  "ERR_INVALID_ARG_TYPE"
]);
var SERIALIZATION_ERROR_MESSAGES = [
  // Message is a promise or a proxy, with `serialization: 'advanced'`
  "could not be cloned",
  // Message has cycles, with `serialization: 'json'`
  "circular structure",
  // Message has cycles inside toJSON(), with `serialization: 'json'`
  "call stack size exceeded"
];
var getMethodName = (methodName, isSubprocess, parameters = "") => methodName === "cancelSignal" ? "`cancelSignal`'s `controller.abort()`" : `${getNamespaceName(isSubprocess)}${methodName}(${parameters})`;
var getNamespaceName = (isSubprocess) => isSubprocess ? "" : "subprocess.";
var getOtherProcessName = (isSubprocess) => isSubprocess ? "parent process" : "subprocess";
var disconnect = (anyProcess) => {
  if (anyProcess.connected) {
    anyProcess.disconnect();
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/deferred.js
var createDeferred = () => {
  const methods = {};
  const promise = new Promise((resolve, reject) => {
    Object.assign(methods, { resolve, reject });
  });
  return Object.assign(promise, methods);
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/fd-options.js
var getToStream = (destination, to = "stdin") => {
  const isWritable = true;
  const { options, fileDescriptors } = SUBPROCESS_OPTIONS.get(destination);
  const fdNumber = getFdNumber(fileDescriptors, to, isWritable);
  const destinationStream = destination.stdio[fdNumber];
  if (destinationStream === null) {
    throw new TypeError(getInvalidStdioOptionMessage(fdNumber, to, options, isWritable));
  }
  return destinationStream;
};
var getFromStream = (source, from = "stdout") => {
  const isWritable = false;
  const { options, fileDescriptors } = SUBPROCESS_OPTIONS.get(source);
  const fdNumber = getFdNumber(fileDescriptors, from, isWritable);
  const sourceStream = fdNumber === "all" ? source.all : source.stdio[fdNumber];
  if (sourceStream === null || sourceStream === void 0) {
    throw new TypeError(getInvalidStdioOptionMessage(fdNumber, from, options, isWritable));
  }
  return sourceStream;
};
var SUBPROCESS_OPTIONS = /* @__PURE__ */ new WeakMap();
var getFdNumber = (fileDescriptors, fdName, isWritable) => {
  const fdNumber = parseFdNumber(fdName, isWritable);
  validateFdNumber(fdNumber, fdName, isWritable, fileDescriptors);
  return fdNumber;
};
var parseFdNumber = (fdName, isWritable) => {
  const fdNumber = parseFd(fdName);
  if (fdNumber !== void 0) {
    return fdNumber;
  }
  const { validOptions, defaultValue } = isWritable ? { validOptions: '"stdin"', defaultValue: "stdin" } : { validOptions: '"stdout", "stderr", "all"', defaultValue: "stdout" };
  throw new TypeError(`"${getOptionName(isWritable)}" must not be "${fdName}".
It must be ${validOptions} or "fd3", "fd4" (and so on).
It is optional and defaults to "${defaultValue}".`);
};
var validateFdNumber = (fdNumber, fdName, isWritable, fileDescriptors) => {
  const fileDescriptor = fileDescriptors[getUsedDescriptor(fdNumber)];
  if (fileDescriptor === void 0) {
    throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. That file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
  }
  if (fileDescriptor.direction === "input" && !isWritable) {
    throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a readable stream, not writable.`);
  }
  if (fileDescriptor.direction !== "input" && isWritable) {
    throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a writable stream, not readable.`);
  }
};
var getInvalidStdioOptionMessage = (fdNumber, fdName, options, isWritable) => {
  if (fdNumber === "all" && !options.all) {
    return `The "all" option must be true to use "from: 'all'".`;
  }
  const { optionName, optionValue } = getInvalidStdioOption(fdNumber, options);
  return `The "${optionName}: ${serializeOptionValue(optionValue)}" option is incompatible with using "${getOptionName(isWritable)}: ${serializeOptionValue(fdName)}".
Please set this option with "pipe" instead.`;
};
var getInvalidStdioOption = (fdNumber, { stdin, stdout, stderr, stdio }) => {
  const usedDescriptor = getUsedDescriptor(fdNumber);
  if (usedDescriptor === 0 && stdin !== void 0) {
    return { optionName: "stdin", optionValue: stdin };
  }
  if (usedDescriptor === 1 && stdout !== void 0) {
    return { optionName: "stdout", optionValue: stdout };
  }
  if (usedDescriptor === 2 && stderr !== void 0) {
    return { optionName: "stderr", optionValue: stderr };
  }
  return { optionName: `stdio[${usedDescriptor}]`, optionValue: stdio[usedDescriptor] };
};
var getUsedDescriptor = (fdNumber) => fdNumber === "all" ? 1 : fdNumber;
var getOptionName = (isWritable) => isWritable ? "to" : "from";
var serializeOptionValue = (value) => {
  if (typeof value === "string") {
    return `'${value}'`;
  }
  return typeof value === "number" ? `${value}` : "Stream";
};
var incrementMaxListeners = (eventEmitter, maxListenersIncrement, signal) => {
  const maxListeners = eventEmitter.getMaxListeners();
  if (maxListeners === 0 || maxListeners === Number.POSITIVE_INFINITY) {
    return;
  }
  eventEmitter.setMaxListeners(maxListeners + maxListenersIncrement);
  events.addAbortListener(signal, () => {
    eventEmitter.setMaxListeners(eventEmitter.getMaxListeners() - maxListenersIncrement);
  });
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/reference.js
var addReference = (channel, reference) => {
  if (reference) {
    addReferenceCount(channel);
  }
};
var addReferenceCount = (channel) => {
  channel.refCounted();
};
var removeReference = (channel, reference) => {
  if (reference) {
    removeReferenceCount(channel);
  }
};
var removeReferenceCount = (channel) => {
  channel.unrefCounted();
};
var undoAddedReferences = (channel, isSubprocess) => {
  if (isSubprocess) {
    removeReferenceCount(channel);
    removeReferenceCount(channel);
  }
};
var redoAddedReferences = (channel, isSubprocess) => {
  if (isSubprocess) {
    addReferenceCount(channel);
    addReferenceCount(channel);
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/incoming.js
var onMessage = async ({ anyProcess, channel, isSubprocess, ipcEmitter }, wrappedMessage) => {
  if (handleStrictResponse(wrappedMessage) || handleAbort(wrappedMessage)) {
    return;
  }
  if (!INCOMING_MESSAGES.has(anyProcess)) {
    INCOMING_MESSAGES.set(anyProcess, []);
  }
  const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
  incomingMessages.push(wrappedMessage);
  if (incomingMessages.length > 1) {
    return;
  }
  while (incomingMessages.length > 0) {
    await waitForOutgoingMessages(anyProcess, ipcEmitter, wrappedMessage);
    await promises$1.scheduler.yield();
    const message = await handleStrictRequest({
      wrappedMessage: incomingMessages[0],
      anyProcess,
      channel,
      isSubprocess,
      ipcEmitter
    });
    incomingMessages.shift();
    ipcEmitter.emit("message", message);
    ipcEmitter.emit("message:done");
  }
};
var onDisconnect = async ({ anyProcess, channel, isSubprocess, ipcEmitter, boundOnMessage }) => {
  abortOnDisconnect();
  const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
  while (incomingMessages?.length > 0) {
    await events.once(ipcEmitter, "message:done");
  }
  anyProcess.removeListener("message", boundOnMessage);
  redoAddedReferences(channel, isSubprocess);
  ipcEmitter.connected = false;
  ipcEmitter.emit("disconnect");
};
var INCOMING_MESSAGES = /* @__PURE__ */ new WeakMap();

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/forward.js
var getIpcEmitter = (anyProcess, channel, isSubprocess) => {
  if (IPC_EMITTERS.has(anyProcess)) {
    return IPC_EMITTERS.get(anyProcess);
  }
  const ipcEmitter = new events.EventEmitter();
  ipcEmitter.connected = true;
  IPC_EMITTERS.set(anyProcess, ipcEmitter);
  forwardEvents({
    ipcEmitter,
    anyProcess,
    channel,
    isSubprocess
  });
  return ipcEmitter;
};
var IPC_EMITTERS = /* @__PURE__ */ new WeakMap();
var forwardEvents = ({ ipcEmitter, anyProcess, channel, isSubprocess }) => {
  const boundOnMessage = onMessage.bind(void 0, {
    anyProcess,
    channel,
    isSubprocess,
    ipcEmitter
  });
  anyProcess.on("message", boundOnMessage);
  anyProcess.once("disconnect", onDisconnect.bind(void 0, {
    anyProcess,
    channel,
    isSubprocess,
    ipcEmitter,
    boundOnMessage
  }));
  undoAddedReferences(channel, isSubprocess);
};
var isConnected = (anyProcess) => {
  const ipcEmitter = IPC_EMITTERS.get(anyProcess);
  return ipcEmitter === void 0 ? anyProcess.channel !== null : ipcEmitter.connected;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/strict.js
var handleSendStrict = ({ anyProcess, channel, isSubprocess, message, strict }) => {
  if (!strict) {
    return message;
  }
  const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
  const hasListeners = hasMessageListeners(anyProcess, ipcEmitter);
  return {
    id: count++,
    type: REQUEST_TYPE,
    message,
    hasListeners
  };
};
var count = 0n;
var validateStrictDeadlock = (outgoingMessages, wrappedMessage) => {
  if (wrappedMessage?.type !== REQUEST_TYPE || wrappedMessage.hasListeners) {
    return;
  }
  for (const { id } of outgoingMessages) {
    if (id !== void 0) {
      STRICT_RESPONSES[id].resolve({ isDeadlock: true, hasListeners: false });
    }
  }
};
var handleStrictRequest = async ({ wrappedMessage, anyProcess, channel, isSubprocess, ipcEmitter }) => {
  if (wrappedMessage?.type !== REQUEST_TYPE || !anyProcess.connected) {
    return wrappedMessage;
  }
  const { id, message } = wrappedMessage;
  const response = { id, type: RESPONSE_TYPE, message: hasMessageListeners(anyProcess, ipcEmitter) };
  try {
    await sendMessage({
      anyProcess,
      channel,
      isSubprocess,
      ipc: true
    }, response);
  } catch (error) {
    ipcEmitter.emit("strict:error", error);
  }
  return message;
};
var handleStrictResponse = (wrappedMessage) => {
  if (wrappedMessage?.type !== RESPONSE_TYPE) {
    return false;
  }
  const { id, message: hasListeners } = wrappedMessage;
  STRICT_RESPONSES[id]?.resolve({ isDeadlock: false, hasListeners });
  return true;
};
var waitForStrictResponse = async (wrappedMessage, anyProcess, isSubprocess) => {
  if (wrappedMessage?.type !== REQUEST_TYPE) {
    return;
  }
  const deferred = createDeferred();
  STRICT_RESPONSES[wrappedMessage.id] = deferred;
  const controller = new AbortController();
  try {
    const { isDeadlock, hasListeners } = await Promise.race([
      deferred,
      throwOnDisconnect(anyProcess, isSubprocess, controller)
    ]);
    if (isDeadlock) {
      throwOnStrictDeadlockError(isSubprocess);
    }
    if (!hasListeners) {
      throwOnMissingStrict(isSubprocess);
    }
  } finally {
    controller.abort();
    delete STRICT_RESPONSES[wrappedMessage.id];
  }
};
var STRICT_RESPONSES = {};
var throwOnDisconnect = async (anyProcess, isSubprocess, { signal }) => {
  incrementMaxListeners(anyProcess, 1, signal);
  await events.once(anyProcess, "disconnect", { signal });
  throwOnStrictDisconnect(isSubprocess);
};
var REQUEST_TYPE = "execa:ipc:request";
var RESPONSE_TYPE = "execa:ipc:response";

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/outgoing.js
var startSendMessage = (anyProcess, wrappedMessage, strict) => {
  if (!OUTGOING_MESSAGES.has(anyProcess)) {
    OUTGOING_MESSAGES.set(anyProcess, /* @__PURE__ */ new Set());
  }
  const outgoingMessages = OUTGOING_MESSAGES.get(anyProcess);
  const onMessageSent = createDeferred();
  const id = strict ? wrappedMessage.id : void 0;
  const outgoingMessage = { onMessageSent, id };
  outgoingMessages.add(outgoingMessage);
  return { outgoingMessages, outgoingMessage };
};
var endSendMessage = ({ outgoingMessages, outgoingMessage }) => {
  outgoingMessages.delete(outgoingMessage);
  outgoingMessage.onMessageSent.resolve();
};
var waitForOutgoingMessages = async (anyProcess, ipcEmitter, wrappedMessage) => {
  while (!hasMessageListeners(anyProcess, ipcEmitter) && OUTGOING_MESSAGES.get(anyProcess)?.size > 0) {
    const outgoingMessages = [...OUTGOING_MESSAGES.get(anyProcess)];
    validateStrictDeadlock(outgoingMessages, wrappedMessage);
    await Promise.all(outgoingMessages.map(({ onMessageSent }) => onMessageSent));
  }
};
var OUTGOING_MESSAGES = /* @__PURE__ */ new WeakMap();
var hasMessageListeners = (anyProcess, ipcEmitter) => ipcEmitter.listenerCount("message") > getMinListenerCount(anyProcess);
var getMinListenerCount = (anyProcess) => SUBPROCESS_OPTIONS.has(anyProcess) && !getFdSpecificValue(SUBPROCESS_OPTIONS.get(anyProcess).options.buffer, "ipc") ? 1 : 0;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/send.js
var sendMessage = ({ anyProcess, channel, isSubprocess, ipc }, message, { strict = false } = {}) => {
  const methodName = "sendMessage";
  validateIpcMethod({
    methodName,
    isSubprocess,
    ipc,
    isConnected: anyProcess.connected
  });
  return sendMessageAsync({
    anyProcess,
    channel,
    methodName,
    isSubprocess,
    message,
    strict
  });
};
var sendMessageAsync = async ({ anyProcess, channel, methodName, isSubprocess, message, strict }) => {
  const wrappedMessage = handleSendStrict({
    anyProcess,
    channel,
    isSubprocess,
    message,
    strict
  });
  const outgoingMessagesState = startSendMessage(anyProcess, wrappedMessage, strict);
  try {
    await sendOneMessage({
      anyProcess,
      methodName,
      isSubprocess,
      wrappedMessage,
      message
    });
  } catch (error) {
    disconnect(anyProcess);
    throw error;
  } finally {
    endSendMessage(outgoingMessagesState);
  }
};
var sendOneMessage = async ({ anyProcess, methodName, isSubprocess, wrappedMessage, message }) => {
  const sendMethod = getSendMethod(anyProcess);
  try {
    await Promise.all([
      waitForStrictResponse(wrappedMessage, anyProcess, isSubprocess),
      sendMethod(wrappedMessage)
    ]);
  } catch (error) {
    handleEpipeError({ error, methodName, isSubprocess });
    handleSerializationError({
      error,
      methodName,
      isSubprocess,
      message
    });
    throw error;
  }
};
var getSendMethod = (anyProcess) => {
  if (PROCESS_SEND_METHODS.has(anyProcess)) {
    return PROCESS_SEND_METHODS.get(anyProcess);
  }
  const sendMethod = util.promisify(anyProcess.send.bind(anyProcess));
  PROCESS_SEND_METHODS.set(anyProcess, sendMethod);
  return sendMethod;
};
var PROCESS_SEND_METHODS = /* @__PURE__ */ new WeakMap();

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/graceful.js
var sendAbort = (subprocess, message) => {
  const methodName = "cancelSignal";
  validateConnection(methodName, false, subprocess.connected);
  return sendOneMessage({
    anyProcess: subprocess,
    methodName,
    isSubprocess: false,
    wrappedMessage: { type: GRACEFUL_CANCEL_TYPE, message },
    message
  });
};
var getCancelSignal = async ({ anyProcess, channel, isSubprocess, ipc }) => {
  await startIpc({
    anyProcess,
    channel,
    isSubprocess,
    ipc
  });
  return cancelController.signal;
};
var startIpc = async ({ anyProcess, channel, isSubprocess, ipc }) => {
  if (cancelListening) {
    return;
  }
  cancelListening = true;
  if (!ipc) {
    throwOnMissingParent();
    return;
  }
  if (channel === null) {
    abortOnDisconnect();
    return;
  }
  getIpcEmitter(anyProcess, channel, isSubprocess);
  await promises$1.scheduler.yield();
};
var cancelListening = false;
var handleAbort = (wrappedMessage) => {
  if (wrappedMessage?.type !== GRACEFUL_CANCEL_TYPE) {
    return false;
  }
  cancelController.abort(wrappedMessage.message);
  return true;
};
var GRACEFUL_CANCEL_TYPE = "execa:ipc:cancel";
var abortOnDisconnect = () => {
  cancelController.abort(getAbortDisconnectError());
};
var cancelController = new AbortController();

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/graceful.js
var validateGracefulCancel = ({ gracefulCancel, cancelSignal, ipc, serialization }) => {
  if (!gracefulCancel) {
    return;
  }
  if (cancelSignal === void 0) {
    throw new Error("The `cancelSignal` option must be defined when setting the `gracefulCancel` option.");
  }
  if (!ipc) {
    throw new Error("The `ipc` option cannot be false when setting the `gracefulCancel` option.");
  }
  if (serialization === "json") {
    throw new Error("The `serialization` option cannot be 'json' when setting the `gracefulCancel` option.");
  }
};
var throwOnGracefulCancel = ({
  subprocess,
  cancelSignal,
  gracefulCancel,
  forceKillAfterDelay,
  context,
  controller
}) => gracefulCancel ? [sendOnAbort({
  subprocess,
  cancelSignal,
  forceKillAfterDelay,
  context,
  controller
})] : [];
var sendOnAbort = async ({ subprocess, cancelSignal, forceKillAfterDelay, context, controller: { signal } }) => {
  await onAbortedSignal(cancelSignal, signal);
  const reason = getReason(cancelSignal);
  await sendAbort(subprocess, reason);
  killOnTimeout({
    kill: subprocess.kill,
    forceKillAfterDelay,
    context,
    controllerSignal: signal
  });
  context.terminationReason ??= "gracefulCancel";
  throw cancelSignal.reason;
};
var getReason = ({ reason }) => {
  if (!(reason instanceof DOMException)) {
    return reason;
  }
  const error = new Error(reason.message);
  Object.defineProperty(error, "stack", {
    value: reason.stack,
    enumerable: false,
    configurable: true,
    writable: true
  });
  return error;
};
var validateTimeout = ({ timeout }) => {
  if (timeout !== void 0 && (!Number.isFinite(timeout) || timeout < 0)) {
    throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
  }
};
var throwOnTimeout = (subprocess, timeout, context, controller) => timeout === 0 || timeout === void 0 ? [] : [killAfterTimeout(subprocess, timeout, context, controller)];
var killAfterTimeout = async (subprocess, timeout, context, { signal }) => {
  await promises$1.setTimeout(timeout, void 0, { signal });
  context.terminationReason ??= "timeout";
  subprocess.kill();
  throw new DiscardedError();
};
var mapNode = ({ options }) => {
  if (options.node === false) {
    throw new TypeError('The "node" option cannot be false with `execaNode()`.');
  }
  return { options: { ...options, node: true } };
};
var handleNodeOption = (file, commandArguments, {
  node: shouldHandleNode = false,
  nodePath = process22.execPath,
  nodeOptions = process22.execArgv.filter((nodeOption) => !nodeOption.startsWith("--inspect")),
  cwd,
  execPath: formerNodePath,
  ...options
}) => {
  if (formerNodePath !== void 0) {
    throw new TypeError('The "execPath" option has been removed. Please use the "nodePath" option instead.');
  }
  const normalizedNodePath = safeNormalizeFileUrl(nodePath, 'The "nodePath" option');
  const resolvedNodePath = path6__default.default.resolve(cwd, normalizedNodePath);
  const newOptions = {
    ...options,
    nodePath: resolvedNodePath,
    node: shouldHandleNode,
    cwd
  };
  if (!shouldHandleNode) {
    return [file, commandArguments, newOptions];
  }
  if (path6__default.default.basename(file, ".exe") === "node") {
    throw new TypeError('When the "node" option is true, the first argument does not need to be "node".');
  }
  return [
    resolvedNodePath,
    [...nodeOptions, file, ...commandArguments],
    { ipc: true, ...newOptions, shell: false }
  ];
};
var validateIpcInputOption = ({ ipcInput, ipc, serialization }) => {
  if (ipcInput === void 0) {
    return;
  }
  if (!ipc) {
    throw new Error("The `ipcInput` option cannot be set unless the `ipc` option is `true`.");
  }
  validateIpcInput[serialization](ipcInput);
};
var validateAdvancedInput = (ipcInput) => {
  try {
    v8.serialize(ipcInput);
  } catch (error) {
    throw new Error("The `ipcInput` option is not serializable with a structured clone.", { cause: error });
  }
};
var validateJsonInput = (ipcInput) => {
  try {
    JSON.stringify(ipcInput);
  } catch (error) {
    throw new Error("The `ipcInput` option is not serializable with JSON.", { cause: error });
  }
};
var validateIpcInput = {
  advanced: validateAdvancedInput,
  json: validateJsonInput
};
var sendIpcInput = async (subprocess, ipcInput) => {
  if (ipcInput === void 0) {
    return;
  }
  await subprocess.sendMessage(ipcInput);
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/encoding-option.js
var validateEncoding = ({ encoding }) => {
  if (ENCODINGS.has(encoding)) {
    return;
  }
  const correctEncoding = getCorrectEncoding(encoding);
  if (correctEncoding !== void 0) {
    throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to ${serializeEncoding(correctEncoding)}.`);
  }
  const correctEncodings = [...ENCODINGS].map((correctEncoding2) => serializeEncoding(correctEncoding2)).join(", ");
  throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to one of: ${correctEncodings}.`);
};
var TEXT_ENCODINGS = /* @__PURE__ */ new Set(["utf8", "utf16le"]);
var BINARY_ENCODINGS = /* @__PURE__ */ new Set(["buffer", "hex", "base64", "base64url", "latin1", "ascii"]);
var ENCODINGS = /* @__PURE__ */ new Set([...TEXT_ENCODINGS, ...BINARY_ENCODINGS]);
var getCorrectEncoding = (encoding) => {
  if (encoding === null) {
    return "buffer";
  }
  if (typeof encoding !== "string") {
    return;
  }
  const lowerEncoding = encoding.toLowerCase();
  if (lowerEncoding in ENCODING_ALIASES) {
    return ENCODING_ALIASES[lowerEncoding];
  }
  if (ENCODINGS.has(lowerEncoding)) {
    return lowerEncoding;
  }
};
var ENCODING_ALIASES = {
  // eslint-disable-next-line unicorn/text-encoding-identifier-case
  "utf-8": "utf8",
  "utf-16le": "utf16le",
  "ucs-2": "utf16le",
  ucs2: "utf16le",
  binary: "latin1"
};
var serializeEncoding = (encoding) => typeof encoding === "string" ? `"${encoding}"` : String(encoding);
var normalizeCwd = (cwd = getDefaultCwd()) => {
  const cwdString = safeNormalizeFileUrl(cwd, 'The "cwd" option');
  return path6__default.default.resolve(cwdString);
};
var getDefaultCwd = () => {
  try {
    return process22__default.default.cwd();
  } catch (error) {
    error.message = `The current directory does not exist.
${error.message}`;
    throw error;
  }
};
var fixCwdError = (originalMessage, cwd) => {
  if (cwd === getDefaultCwd()) {
    return originalMessage;
  }
  let cwdStat;
  try {
    cwdStat = fs.statSync(cwd);
  } catch (error) {
    return `The "cwd" option is invalid: ${cwd}.
${error.message}
${originalMessage}`;
  }
  if (!cwdStat.isDirectory()) {
    return `The "cwd" option is not a directory: ${cwd}.
${originalMessage}`;
  }
  return originalMessage;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/options.js
var normalizeOptions = (filePath, rawArguments, rawOptions) => {
  rawOptions.cwd = normalizeCwd(rawOptions.cwd);
  const [processedFile, processedArguments, processedOptions] = handleNodeOption(filePath, rawArguments, rawOptions);
  const { command: file, args: commandArguments, options: initialOptions } = import_cross_spawn.default._parse(processedFile, processedArguments, processedOptions);
  const fdOptions = normalizeFdSpecificOptions(initialOptions);
  const options = addDefaultOptions(fdOptions);
  validateTimeout(options);
  validateEncoding(options);
  validateIpcInputOption(options);
  validateCancelSignal(options);
  validateGracefulCancel(options);
  options.shell = normalizeFileUrl(options.shell);
  options.env = getEnv(options);
  options.killSignal = normalizeKillSignal(options.killSignal);
  options.forceKillAfterDelay = normalizeForceKillAfterDelay(options.forceKillAfterDelay);
  options.lines = options.lines.map((lines, fdNumber) => lines && !BINARY_ENCODINGS.has(options.encoding) && options.buffer[fdNumber]);
  if (process22__default.default.platform === "win32" && path6__default.default.basename(file, ".exe") === "cmd") {
    commandArguments.unshift("/q");
  }
  return { file, commandArguments, options };
};
var addDefaultOptions = ({
  extendEnv = true,
  preferLocal = false,
  cwd,
  localDir: localDirectory = cwd,
  encoding = "utf8",
  reject = true,
  cleanup = true,
  all = false,
  windowsHide = true,
  killSignal = "SIGTERM",
  forceKillAfterDelay = true,
  gracefulCancel = false,
  ipcInput,
  ipc = ipcInput !== void 0 || gracefulCancel,
  serialization = "advanced",
  ...options
}) => ({
  ...options,
  extendEnv,
  preferLocal,
  cwd,
  localDirectory,
  encoding,
  reject,
  cleanup,
  all,
  windowsHide,
  killSignal,
  forceKillAfterDelay,
  gracefulCancel,
  ipcInput,
  ipc,
  serialization
});
var getEnv = ({ env: envOption, extendEnv, preferLocal, node, localDirectory, nodePath }) => {
  const env = extendEnv ? { ...process22__default.default.env, ...envOption } : envOption;
  if (preferLocal || node) {
    return npmRunPathEnv({
      env,
      cwd: localDirectory,
      execPath: nodePath,
      preferLocal,
      addExecPath: node
    });
  }
  return env;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/shell.js
var concatenateShell = (file, commandArguments, options) => options.shell && commandArguments.length > 0 ? [[file, ...commandArguments].join(" "), [], options] : [file, commandArguments, options];

// ../../node_modules/.pnpm/strip-final-newline@4.0.0/node_modules/strip-final-newline/index.js
function stripFinalNewline(input) {
  if (typeof input === "string") {
    return stripFinalNewlineString(input);
  }
  if (!(ArrayBuffer.isView(input) && input.BYTES_PER_ELEMENT === 1)) {
    throw new Error("Input must be a string or a Uint8Array");
  }
  return stripFinalNewlineBinary(input);
}
var stripFinalNewlineString = (input) => input.at(-1) === LF ? input.slice(0, input.at(-2) === CR ? -2 : -1) : input;
var stripFinalNewlineBinary = (input) => input.at(-1) === LF_BINARY ? input.subarray(0, input.at(-2) === CR_BINARY ? -2 : -1) : input;
var LF = "\n";
var LF_BINARY = LF.codePointAt(0);
var CR = "\r";
var CR_BINARY = CR.codePointAt(0);

// ../../node_modules/.pnpm/is-stream@4.0.1/node_modules/is-stream/index.js
function isStream(stream, { checkOpen = true } = {}) {
  return stream !== null && typeof stream === "object" && (stream.writable || stream.readable || !checkOpen || stream.writable === void 0 && stream.readable === void 0) && typeof stream.pipe === "function";
}
function isWritableStream(stream, { checkOpen = true } = {}) {
  return isStream(stream, { checkOpen }) && (stream.writable || !checkOpen) && typeof stream.write === "function" && typeof stream.end === "function" && typeof stream.writable === "boolean" && typeof stream.writableObjectMode === "boolean" && typeof stream.destroy === "function" && typeof stream.destroyed === "boolean";
}
function isReadableStream(stream, { checkOpen = true } = {}) {
  return isStream(stream, { checkOpen }) && (stream.readable || !checkOpen) && typeof stream.read === "function" && typeof stream.readable === "boolean" && typeof stream.readableObjectMode === "boolean" && typeof stream.destroy === "function" && typeof stream.destroyed === "boolean";
}
function isDuplexStream(stream, options) {
  return isWritableStream(stream, options) && isReadableStream(stream, options);
}

// ../../node_modules/.pnpm/@sec-ant+readable-stream@0.4.1/node_modules/@sec-ant/readable-stream/dist/ponyfill/asyncIterator.js
var a = Object.getPrototypeOf(
  Object.getPrototypeOf(
    /* istanbul ignore next */
    async function* () {
    }
  ).prototype
);
var c = class {
  #t;
  #n;
  #r = false;
  #e = void 0;
  constructor(e, t) {
    this.#t = e, this.#n = t;
  }
  next() {
    const e = () => this.#s();
    return this.#e = this.#e ? this.#e.then(e, e) : e(), this.#e;
  }
  return(e) {
    const t = () => this.#i(e);
    return this.#e ? this.#e.then(t, t) : t();
  }
  async #s() {
    if (this.#r)
      return {
        done: true,
        value: void 0
      };
    let e;
    try {
      e = await this.#t.read();
    } catch (t) {
      throw this.#e = void 0, this.#r = true, this.#t.releaseLock(), t;
    }
    return e.done && (this.#e = void 0, this.#r = true, this.#t.releaseLock()), e;
  }
  async #i(e) {
    if (this.#r)
      return {
        done: true,
        value: e
      };
    if (this.#r = true, !this.#n) {
      const t = this.#t.cancel(e);
      return this.#t.releaseLock(), await t, {
        done: true,
        value: e
      };
    }
    return this.#t.releaseLock(), {
      done: true,
      value: e
    };
  }
};
var n = Symbol();
function i() {
  return this[n].next();
}
Object.defineProperty(i, "name", { value: "next" });
function o(r) {
  return this[n].return(r);
}
Object.defineProperty(o, "name", { value: "return" });
var u = Object.create(a, {
  next: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: i
  },
  return: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: o
  }
});
function h({ preventCancel: r = false } = {}) {
  const e = this.getReader(), t = new c(
    e,
    r
  ), s = Object.create(u);
  return s[n] = t, s;
}

// ../../node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/stream.js
var getAsyncIterable = (stream) => {
  if (isReadableStream(stream, { checkOpen: false }) && nodeImports.on !== void 0) {
    return getStreamIterable(stream);
  }
  if (typeof stream?.[Symbol.asyncIterator] === "function") {
    return stream;
  }
  if (toString.call(stream) === "[object ReadableStream]") {
    return h.call(stream);
  }
  throw new TypeError("The first argument must be a Readable, a ReadableStream, or an async iterable.");
};
var { toString } = Object.prototype;
var getStreamIterable = async function* (stream) {
  const controller = new AbortController();
  const state = {};
  handleStreamEnd(stream, controller, state);
  try {
    for await (const [chunk] of nodeImports.on(stream, "data", { signal: controller.signal })) {
      yield chunk;
    }
  } catch (error) {
    if (state.error !== void 0) {
      throw state.error;
    } else if (!controller.signal.aborted) {
      throw error;
    }
  } finally {
    stream.destroy();
  }
};
var handleStreamEnd = async (stream, controller, state) => {
  try {
    await nodeImports.finished(stream, {
      cleanup: true,
      readable: true,
      writable: false,
      error: false
    });
  } catch (error) {
    state.error = error;
  } finally {
    controller.abort();
  }
};
var nodeImports = {};

// ../../node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/contents.js
var getStreamContents = async (stream, { init, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, finalize }, { maxBuffer = Number.POSITIVE_INFINITY } = {}) => {
  const asyncIterable = getAsyncIterable(stream);
  const state = init();
  state.length = 0;
  try {
    for await (const chunk of asyncIterable) {
      const chunkType = getChunkType(chunk);
      const convertedChunk = convertChunk[chunkType](chunk, state);
      appendChunk({
        convertedChunk,
        state,
        getSize,
        truncateChunk,
        addChunk,
        maxBuffer
      });
    }
    appendFinalChunk({
      state,
      convertChunk,
      getSize,
      truncateChunk,
      addChunk,
      getFinalChunk,
      maxBuffer
    });
    return finalize(state);
  } catch (error) {
    const normalizedError = typeof error === "object" && error !== null ? error : new Error(error);
    normalizedError.bufferedData = finalize(state);
    throw normalizedError;
  }
};
var appendFinalChunk = ({ state, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer }) => {
  const convertedChunk = getFinalChunk(state);
  if (convertedChunk !== void 0) {
    appendChunk({
      convertedChunk,
      state,
      getSize,
      truncateChunk,
      addChunk,
      maxBuffer
    });
  }
};
var appendChunk = ({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer }) => {
  const chunkSize = getSize(convertedChunk);
  const newLength = state.length + chunkSize;
  if (newLength <= maxBuffer) {
    addNewChunk(convertedChunk, state, addChunk, newLength);
    return;
  }
  const truncatedChunk = truncateChunk(convertedChunk, maxBuffer - state.length);
  if (truncatedChunk !== void 0) {
    addNewChunk(truncatedChunk, state, addChunk, maxBuffer);
  }
  throw new MaxBufferError();
};
var addNewChunk = (convertedChunk, state, addChunk, newLength) => {
  state.contents = addChunk(convertedChunk, state, newLength);
  state.length = newLength;
};
var getChunkType = (chunk) => {
  const typeOfChunk = typeof chunk;
  if (typeOfChunk === "string") {
    return "string";
  }
  if (typeOfChunk !== "object" || chunk === null) {
    return "others";
  }
  if (globalThis.Buffer?.isBuffer(chunk)) {
    return "buffer";
  }
  const prototypeName = objectToString2.call(chunk);
  if (prototypeName === "[object ArrayBuffer]") {
    return "arrayBuffer";
  }
  if (prototypeName === "[object DataView]") {
    return "dataView";
  }
  if (Number.isInteger(chunk.byteLength) && Number.isInteger(chunk.byteOffset) && objectToString2.call(chunk.buffer) === "[object ArrayBuffer]") {
    return "typedArray";
  }
  return "others";
};
var { toString: objectToString2 } = Object.prototype;
var MaxBufferError = class extends Error {
  name = "MaxBufferError";
  constructor() {
    super("maxBuffer exceeded");
  }
};

// ../../node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/utils.js
var identity2 = (value) => value;
var noop = () => void 0;
var getContentsProperty = ({ contents }) => contents;
var throwObjectStream = (chunk) => {
  throw new Error(`Streams in object mode are not supported: ${String(chunk)}`);
};
var getLengthProperty = (convertedChunk) => convertedChunk.length;

// ../../node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/array.js
async function getStreamAsArray(stream, options) {
  return getStreamContents(stream, arrayMethods, options);
}
var initArray = () => ({ contents: [] });
var increment = () => 1;
var addArrayChunk = (convertedChunk, { contents }) => {
  contents.push(convertedChunk);
  return contents;
};
var arrayMethods = {
  init: initArray,
  convertChunk: {
    string: identity2,
    buffer: identity2,
    arrayBuffer: identity2,
    dataView: identity2,
    typedArray: identity2,
    others: identity2
  },
  getSize: increment,
  truncateChunk: noop,
  addChunk: addArrayChunk,
  getFinalChunk: noop,
  finalize: getContentsProperty
};

// ../../node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/array-buffer.js
async function getStreamAsArrayBuffer(stream, options) {
  return getStreamContents(stream, arrayBufferMethods, options);
}
var initArrayBuffer = () => ({ contents: new ArrayBuffer(0) });
var useTextEncoder = (chunk) => textEncoder2.encode(chunk);
var textEncoder2 = new TextEncoder();
var useUint8Array = (chunk) => new Uint8Array(chunk);
var useUint8ArrayWithOffset = (chunk) => new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
var truncateArrayBufferChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
var addArrayBufferChunk = (convertedChunk, { contents, length: previousLength }, length) => {
  const newContents = hasArrayBufferResize() ? resizeArrayBuffer(contents, length) : resizeArrayBufferSlow(contents, length);
  new Uint8Array(newContents).set(convertedChunk, previousLength);
  return newContents;
};
var resizeArrayBufferSlow = (contents, length) => {
  if (length <= contents.byteLength) {
    return contents;
  }
  const arrayBuffer = new ArrayBuffer(getNewContentsLength(length));
  new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
  return arrayBuffer;
};
var resizeArrayBuffer = (contents, length) => {
  if (length <= contents.maxByteLength) {
    contents.resize(length);
    return contents;
  }
  const arrayBuffer = new ArrayBuffer(length, { maxByteLength: getNewContentsLength(length) });
  new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
  return arrayBuffer;
};
var getNewContentsLength = (length) => SCALE_FACTOR ** Math.ceil(Math.log(length) / Math.log(SCALE_FACTOR));
var SCALE_FACTOR = 2;
var finalizeArrayBuffer = ({ contents, length }) => hasArrayBufferResize() ? contents : contents.slice(0, length);
var hasArrayBufferResize = () => "resize" in ArrayBuffer.prototype;
var arrayBufferMethods = {
  init: initArrayBuffer,
  convertChunk: {
    string: useTextEncoder,
    buffer: useUint8Array,
    arrayBuffer: useUint8Array,
    dataView: useUint8ArrayWithOffset,
    typedArray: useUint8ArrayWithOffset,
    others: throwObjectStream
  },
  getSize: getLengthProperty,
  truncateChunk: truncateArrayBufferChunk,
  addChunk: addArrayBufferChunk,
  getFinalChunk: noop,
  finalize: finalizeArrayBuffer
};

// ../../node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/string.js
async function getStreamAsString(stream, options) {
  return getStreamContents(stream, stringMethods, options);
}
var initString = () => ({ contents: "", textDecoder: new TextDecoder() });
var useTextDecoder = (chunk, { textDecoder: textDecoder2 }) => textDecoder2.decode(chunk, { stream: true });
var addStringChunk = (convertedChunk, { contents }) => contents + convertedChunk;
var truncateStringChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
var getFinalStringChunk = ({ textDecoder: textDecoder2 }) => {
  const finalChunk = textDecoder2.decode();
  return finalChunk === "" ? void 0 : finalChunk;
};
var stringMethods = {
  init: initString,
  convertChunk: {
    string: identity2,
    buffer: useTextDecoder,
    arrayBuffer: useTextDecoder,
    dataView: useTextDecoder,
    typedArray: useTextDecoder,
    others: throwObjectStream
  },
  getSize: getLengthProperty,
  truncateChunk: truncateStringChunk,
  addChunk: addStringChunk,
  getFinalChunk: getFinalStringChunk,
  finalize: getContentsProperty
};

// ../../node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/index.js
Object.assign(nodeImports, { on: events.on, finished: promises.finished });

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/max-buffer.js
var handleMaxBuffer = ({ error, stream, readableObjectMode, lines, encoding, fdNumber }) => {
  if (!(error instanceof MaxBufferError)) {
    throw error;
  }
  if (fdNumber === "all") {
    return error;
  }
  const unit = getMaxBufferUnit(readableObjectMode, lines, encoding);
  error.maxBufferInfo = { fdNumber, unit };
  stream.destroy();
  throw error;
};
var getMaxBufferUnit = (readableObjectMode, lines, encoding) => {
  if (readableObjectMode) {
    return "objects";
  }
  if (lines) {
    return "lines";
  }
  if (encoding === "buffer") {
    return "bytes";
  }
  return "characters";
};
var checkIpcMaxBuffer = (subprocess, ipcOutput, maxBuffer) => {
  if (ipcOutput.length !== maxBuffer) {
    return;
  }
  const error = new MaxBufferError();
  error.maxBufferInfo = { fdNumber: "ipc" };
  throw error;
};
var getMaxBufferMessage = (error, maxBuffer) => {
  const { streamName, threshold, unit } = getMaxBufferInfo(error, maxBuffer);
  return `Command's ${streamName} was larger than ${threshold} ${unit}`;
};
var getMaxBufferInfo = (error, maxBuffer) => {
  if (error?.maxBufferInfo === void 0) {
    return { streamName: "output", threshold: maxBuffer[1], unit: "bytes" };
  }
  const { maxBufferInfo: { fdNumber, unit } } = error;
  delete error.maxBufferInfo;
  const threshold = getFdSpecificValue(maxBuffer, fdNumber);
  if (fdNumber === "ipc") {
    return { streamName: "IPC output", threshold, unit: "messages" };
  }
  return { streamName: getStreamName(fdNumber), threshold, unit };
};
var isMaxBufferSync = (resultError, output, maxBuffer) => resultError?.code === "ENOBUFS" && output !== null && output.some((result) => result !== null && result.length > getMaxBufferSync(maxBuffer));
var truncateMaxBufferSync = (result, isMaxBuffer, maxBuffer) => {
  if (!isMaxBuffer) {
    return result;
  }
  const maxBufferValue = getMaxBufferSync(maxBuffer);
  return result.length > maxBufferValue ? result.slice(0, maxBufferValue) : result;
};
var getMaxBufferSync = ([, stdoutMaxBuffer]) => stdoutMaxBuffer;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/message.js
var createMessages = ({
  stdio,
  all,
  ipcOutput,
  originalError,
  signal,
  signalDescription,
  exitCode,
  escapedCommand,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  forceKillAfterDelay,
  killSignal,
  maxBuffer,
  timeout,
  cwd
}) => {
  const errorCode = originalError?.code;
  const prefix = getErrorPrefix({
    originalError,
    timedOut,
    timeout,
    isMaxBuffer,
    maxBuffer,
    errorCode,
    signal,
    signalDescription,
    exitCode,
    isCanceled,
    isGracefullyCanceled,
    isForcefullyTerminated,
    forceKillAfterDelay,
    killSignal
  });
  const originalMessage = getOriginalMessage(originalError, cwd);
  const suffix = originalMessage === void 0 ? "" : `
${originalMessage}`;
  const shortMessage = `${prefix}: ${escapedCommand}${suffix}`;
  const messageStdio = all === void 0 ? [stdio[2], stdio[1]] : [all];
  const message = [
    shortMessage,
    ...messageStdio,
    ...stdio.slice(3),
    ipcOutput.map((ipcMessage) => serializeIpcMessage(ipcMessage)).join("\n")
  ].map((messagePart) => escapeLines(stripFinalNewline(serializeMessagePart(messagePart)))).filter(Boolean).join("\n\n");
  return { originalMessage, shortMessage, message };
};
var getErrorPrefix = ({
  originalError,
  timedOut,
  timeout,
  isMaxBuffer,
  maxBuffer,
  errorCode,
  signal,
  signalDescription,
  exitCode,
  isCanceled,
  isGracefullyCanceled,
  isForcefullyTerminated,
  forceKillAfterDelay,
  killSignal
}) => {
  const forcefulSuffix = getForcefulSuffix(isForcefullyTerminated, forceKillAfterDelay);
  if (timedOut) {
    return `Command timed out after ${timeout} milliseconds${forcefulSuffix}`;
  }
  if (isGracefullyCanceled) {
    if (signal === void 0) {
      return `Command was gracefully canceled with exit code ${exitCode}`;
    }
    return isForcefullyTerminated ? `Command was gracefully canceled${forcefulSuffix}` : `Command was gracefully canceled with ${signal} (${signalDescription})`;
  }
  if (isCanceled) {
    return `Command was canceled${forcefulSuffix}`;
  }
  if (isMaxBuffer) {
    return `${getMaxBufferMessage(originalError, maxBuffer)}${forcefulSuffix}`;
  }
  if (errorCode !== void 0) {
    return `Command failed with ${errorCode}${forcefulSuffix}`;
  }
  if (isForcefullyTerminated) {
    return `Command was killed with ${killSignal} (${getSignalDescription(killSignal)})${forcefulSuffix}`;
  }
  if (signal !== void 0) {
    return `Command was killed with ${signal} (${signalDescription})`;
  }
  if (exitCode !== void 0) {
    return `Command failed with exit code ${exitCode}`;
  }
  return "Command failed";
};
var getForcefulSuffix = (isForcefullyTerminated, forceKillAfterDelay) => isForcefullyTerminated ? ` and was forcefully terminated after ${forceKillAfterDelay} milliseconds` : "";
var getOriginalMessage = (originalError, cwd) => {
  if (originalError instanceof DiscardedError) {
    return;
  }
  const originalMessage = isExecaError(originalError) ? originalError.originalMessage : String(originalError?.message ?? originalError);
  const escapedOriginalMessage = escapeLines(fixCwdError(originalMessage, cwd));
  return escapedOriginalMessage === "" ? void 0 : escapedOriginalMessage;
};
var serializeIpcMessage = (ipcMessage) => typeof ipcMessage === "string" ? ipcMessage : util.inspect(ipcMessage);
var serializeMessagePart = (messagePart) => Array.isArray(messagePart) ? messagePart.map((messageItem) => stripFinalNewline(serializeMessageItem(messageItem))).filter(Boolean).join("\n") : serializeMessageItem(messagePart);
var serializeMessageItem = (messageItem) => {
  if (typeof messageItem === "string") {
    return messageItem;
  }
  if (isUint8Array(messageItem)) {
    return uint8ArrayToString(messageItem);
  }
  return "";
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/result.js
var makeSuccessResult = ({
  command,
  escapedCommand,
  stdio,
  all,
  ipcOutput,
  options: { cwd },
  startTime
}) => omitUndefinedProperties({
  command,
  escapedCommand,
  cwd,
  durationMs: getDurationMs(startTime),
  failed: false,
  timedOut: false,
  isCanceled: false,
  isGracefullyCanceled: false,
  isTerminated: false,
  isMaxBuffer: false,
  isForcefullyTerminated: false,
  exitCode: 0,
  stdout: stdio[1],
  stderr: stdio[2],
  all,
  stdio,
  ipcOutput,
  pipedFrom: []
});
var makeEarlyError = ({
  error,
  command,
  escapedCommand,
  fileDescriptors,
  options,
  startTime,
  isSync
}) => makeError({
  error,
  command,
  escapedCommand,
  startTime,
  timedOut: false,
  isCanceled: false,
  isGracefullyCanceled: false,
  isMaxBuffer: false,
  isForcefullyTerminated: false,
  stdio: Array.from({ length: fileDescriptors.length }),
  ipcOutput: [],
  options,
  isSync
});
var makeError = ({
  error: originalError,
  command,
  escapedCommand,
  startTime,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  exitCode: rawExitCode,
  signal: rawSignal,
  stdio,
  all,
  ipcOutput,
  options: {
    timeoutDuration,
    timeout = timeoutDuration,
    forceKillAfterDelay,
    killSignal,
    cwd,
    maxBuffer
  },
  isSync
}) => {
  const { exitCode, signal, signalDescription } = normalizeExitPayload(rawExitCode, rawSignal);
  const { originalMessage, shortMessage, message } = createMessages({
    stdio,
    all,
    ipcOutput,
    originalError,
    signal,
    signalDescription,
    exitCode,
    escapedCommand,
    timedOut,
    isCanceled,
    isGracefullyCanceled,
    isMaxBuffer,
    isForcefullyTerminated,
    forceKillAfterDelay,
    killSignal,
    maxBuffer,
    timeout,
    cwd
  });
  const error = getFinalError(originalError, message, isSync);
  Object.assign(error, getErrorProperties({
    error,
    command,
    escapedCommand,
    startTime,
    timedOut,
    isCanceled,
    isGracefullyCanceled,
    isMaxBuffer,
    isForcefullyTerminated,
    exitCode,
    signal,
    signalDescription,
    stdio,
    all,
    ipcOutput,
    cwd,
    originalMessage,
    shortMessage
  }));
  return error;
};
var getErrorProperties = ({
  error,
  command,
  escapedCommand,
  startTime,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  exitCode,
  signal,
  signalDescription,
  stdio,
  all,
  ipcOutput,
  cwd,
  originalMessage,
  shortMessage
}) => omitUndefinedProperties({
  shortMessage,
  originalMessage,
  command,
  escapedCommand,
  cwd,
  durationMs: getDurationMs(startTime),
  failed: true,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isTerminated: signal !== void 0,
  isMaxBuffer,
  isForcefullyTerminated,
  exitCode,
  signal,
  signalDescription,
  code: error.cause?.code,
  stdout: stdio[1],
  stderr: stdio[2],
  all,
  stdio,
  ipcOutput,
  pipedFrom: []
});
var omitUndefinedProperties = (result) => Object.fromEntries(Object.entries(result).filter(([, value]) => value !== void 0));
var normalizeExitPayload = (rawExitCode, rawSignal) => {
  const exitCode = rawExitCode === null ? void 0 : rawExitCode;
  const signal = rawSignal === null ? void 0 : rawSignal;
  const signalDescription = signal === void 0 ? void 0 : getSignalDescription(rawSignal);
  return { exitCode, signal, signalDescription };
};

// ../../node_modules/.pnpm/parse-ms@4.0.0/node_modules/parse-ms/index.js
var toZeroIfInfinity = (value) => Number.isFinite(value) ? value : 0;
function parseNumber(milliseconds) {
  return {
    days: Math.trunc(milliseconds / 864e5),
    hours: Math.trunc(milliseconds / 36e5 % 24),
    minutes: Math.trunc(milliseconds / 6e4 % 60),
    seconds: Math.trunc(milliseconds / 1e3 % 60),
    milliseconds: Math.trunc(milliseconds % 1e3),
    microseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e3) % 1e3),
    nanoseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e6) % 1e3)
  };
}
function parseBigint(milliseconds) {
  return {
    days: milliseconds / 86400000n,
    hours: milliseconds / 3600000n % 24n,
    minutes: milliseconds / 60000n % 60n,
    seconds: milliseconds / 1000n % 60n,
    milliseconds: milliseconds % 1000n,
    microseconds: 0n,
    nanoseconds: 0n
  };
}
function parseMilliseconds(milliseconds) {
  switch (typeof milliseconds) {
    case "number": {
      if (Number.isFinite(milliseconds)) {
        return parseNumber(milliseconds);
      }
      break;
    }
    case "bigint": {
      return parseBigint(milliseconds);
    }
  }
  throw new TypeError("Expected a finite number or bigint");
}

// ../../node_modules/.pnpm/pretty-ms@9.3.0/node_modules/pretty-ms/index.js
var isZero = (value) => value === 0 || value === 0n;
var pluralize = (word, count2) => count2 === 1 || count2 === 1n ? word : `${word}s`;
var SECOND_ROUNDING_EPSILON = 1e-7;
var ONE_DAY_IN_MILLISECONDS = 24n * 60n * 60n * 1000n;
function prettyMilliseconds(milliseconds, options) {
  const isBigInt = typeof milliseconds === "bigint";
  if (!isBigInt && !Number.isFinite(milliseconds)) {
    throw new TypeError("Expected a finite number or bigint");
  }
  options = { ...options };
  const sign = milliseconds < 0 ? "-" : "";
  milliseconds = milliseconds < 0 ? -milliseconds : milliseconds;
  if (options.colonNotation) {
    options.compact = false;
    options.formatSubMilliseconds = false;
    options.separateMilliseconds = false;
    options.verbose = false;
  }
  if (options.compact) {
    options.unitCount = 1;
    options.secondsDecimalDigits = 0;
    options.millisecondsDecimalDigits = 0;
  }
  let result = [];
  const floorDecimals = (value, decimalDigits) => {
    const flooredInterimValue = Math.floor(value * 10 ** decimalDigits + SECOND_ROUNDING_EPSILON);
    const flooredValue = Math.round(flooredInterimValue) / 10 ** decimalDigits;
    return flooredValue.toFixed(decimalDigits);
  };
  const add = (value, long, short, valueString) => {
    if ((result.length === 0 || !options.colonNotation) && isZero(value) && !(options.colonNotation && short === "m")) {
      return;
    }
    valueString ??= String(value);
    if (options.colonNotation) {
      const wholeDigits = valueString.includes(".") ? valueString.split(".")[0].length : valueString.length;
      const minLength = result.length > 0 ? 2 : 1;
      valueString = "0".repeat(Math.max(0, minLength - wholeDigits)) + valueString;
    } else {
      valueString += options.verbose ? " " + pluralize(long, value) : short;
    }
    result.push(valueString);
  };
  const parsed = parseMilliseconds(milliseconds);
  const days = BigInt(parsed.days);
  if (options.hideYearAndDays) {
    add(BigInt(days) * 24n + BigInt(parsed.hours), "hour", "h");
  } else {
    if (options.hideYear) {
      add(days, "day", "d");
    } else {
      add(days / 365n, "year", "y");
      add(days % 365n, "day", "d");
    }
    add(Number(parsed.hours), "hour", "h");
  }
  add(Number(parsed.minutes), "minute", "m");
  if (!options.hideSeconds) {
    if (options.separateMilliseconds || options.formatSubMilliseconds || !options.colonNotation && milliseconds < 1e3 && !options.subSecondsAsDecimals) {
      const seconds = Number(parsed.seconds);
      const milliseconds2 = Number(parsed.milliseconds);
      const microseconds = Number(parsed.microseconds);
      const nanoseconds = Number(parsed.nanoseconds);
      add(seconds, "second", "s");
      if (options.formatSubMilliseconds) {
        add(milliseconds2, "millisecond", "ms");
        add(microseconds, "microsecond", "\xB5s");
        add(nanoseconds, "nanosecond", "ns");
      } else {
        const millisecondsAndBelow = milliseconds2 + microseconds / 1e3 + nanoseconds / 1e6;
        const millisecondsDecimalDigits = typeof options.millisecondsDecimalDigits === "number" ? options.millisecondsDecimalDigits : 0;
        const roundedMilliseconds = millisecondsAndBelow >= 1 ? Math.round(millisecondsAndBelow) : Math.ceil(millisecondsAndBelow);
        const millisecondsString = millisecondsDecimalDigits ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits) : roundedMilliseconds;
        add(
          Number.parseFloat(millisecondsString),
          "millisecond",
          "ms",
          millisecondsString
        );
      }
    } else {
      const seconds = (isBigInt ? Number(milliseconds % ONE_DAY_IN_MILLISECONDS) : milliseconds) / 1e3 % 60;
      const secondsDecimalDigits = typeof options.secondsDecimalDigits === "number" ? options.secondsDecimalDigits : 1;
      const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
      const secondsString = options.keepDecimalsOnWholeSeconds ? secondsFixed : secondsFixed.replace(/\.0+$/, "");
      add(Number.parseFloat(secondsString), "second", "s", secondsString);
    }
  }
  if (result.length === 0) {
    return sign + "0" + (options.verbose ? " milliseconds" : "ms");
  }
  const separator = options.colonNotation ? ":" : " ";
  if (typeof options.unitCount === "number") {
    result = result.slice(0, Math.max(options.unitCount, 1));
  }
  return sign + result.join(separator);
}

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/error.js
var logError = (result, verboseInfo) => {
  if (result.failed) {
    verboseLog({
      type: "error",
      verboseMessage: result.shortMessage,
      verboseInfo,
      result
    });
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/complete.js
var logResult = (result, verboseInfo) => {
  if (!isVerbose(verboseInfo)) {
    return;
  }
  logError(result, verboseInfo);
  logDuration(result, verboseInfo);
};
var logDuration = (result, verboseInfo) => {
  const verboseMessage = `(done in ${prettyMilliseconds(result.durationMs)})`;
  verboseLog({
    type: "duration",
    verboseMessage,
    verboseInfo,
    result
  });
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/reject.js
var handleResult = (result, verboseInfo, { reject }) => {
  logResult(result, verboseInfo);
  if (result.failed && reject) {
    throw result;
  }
  return result;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/type.js
var getStdioItemType = (value, optionName) => {
  if (isAsyncGenerator(value)) {
    return "asyncGenerator";
  }
  if (isSyncGenerator(value)) {
    return "generator";
  }
  if (isUrl(value)) {
    return "fileUrl";
  }
  if (isFilePathObject(value)) {
    return "filePath";
  }
  if (isWebStream(value)) {
    return "webStream";
  }
  if (isStream(value, { checkOpen: false })) {
    return "native";
  }
  if (isUint8Array(value)) {
    return "uint8Array";
  }
  if (isAsyncIterableObject(value)) {
    return "asyncIterable";
  }
  if (isIterableObject(value)) {
    return "iterable";
  }
  if (isTransformStream(value)) {
    return getTransformStreamType({ }, optionName);
  }
  if (isTransformOptions(value)) {
    return getTransformObjectType(value, optionName);
  }
  return "native";
};
var getTransformObjectType = (value, optionName) => {
  if (isDuplexStream(value.transform, { checkOpen: false })) {
    return getDuplexType(value, optionName);
  }
  if (isTransformStream(value.transform)) {
    return getTransformStreamType(value, optionName);
  }
  return getGeneratorObjectType(value, optionName);
};
var getDuplexType = (value, optionName) => {
  validateNonGeneratorType(value, optionName, "Duplex stream");
  return "duplex";
};
var getTransformStreamType = (value, optionName) => {
  validateNonGeneratorType(value, optionName, "web TransformStream");
  return "webTransform";
};
var validateNonGeneratorType = ({ final, binary, objectMode }, optionName, typeName) => {
  checkUndefinedOption(final, `${optionName}.final`, typeName);
  checkUndefinedOption(binary, `${optionName}.binary`, typeName);
  checkBooleanOption(objectMode, `${optionName}.objectMode`);
};
var checkUndefinedOption = (value, optionName, typeName) => {
  if (value !== void 0) {
    throw new TypeError(`The \`${optionName}\` option can only be defined when using a generator, not a ${typeName}.`);
  }
};
var getGeneratorObjectType = ({ transform, final, binary, objectMode }, optionName) => {
  if (transform !== void 0 && !isGenerator(transform)) {
    throw new TypeError(`The \`${optionName}.transform\` option must be a generator, a Duplex stream or a web TransformStream.`);
  }
  if (isDuplexStream(final, { checkOpen: false })) {
    throw new TypeError(`The \`${optionName}.final\` option must not be a Duplex stream.`);
  }
  if (isTransformStream(final)) {
    throw new TypeError(`The \`${optionName}.final\` option must not be a web TransformStream.`);
  }
  if (final !== void 0 && !isGenerator(final)) {
    throw new TypeError(`The \`${optionName}.final\` option must be a generator.`);
  }
  checkBooleanOption(binary, `${optionName}.binary`);
  checkBooleanOption(objectMode, `${optionName}.objectMode`);
  return isAsyncGenerator(transform) || isAsyncGenerator(final) ? "asyncGenerator" : "generator";
};
var checkBooleanOption = (value, optionName) => {
  if (value !== void 0 && typeof value !== "boolean") {
    throw new TypeError(`The \`${optionName}\` option must use a boolean.`);
  }
};
var isGenerator = (value) => isAsyncGenerator(value) || isSyncGenerator(value);
var isAsyncGenerator = (value) => Object.prototype.toString.call(value) === "[object AsyncGeneratorFunction]";
var isSyncGenerator = (value) => Object.prototype.toString.call(value) === "[object GeneratorFunction]";
var isTransformOptions = (value) => isPlainObject(value) && (value.transform !== void 0 || value.final !== void 0);
var isUrl = (value) => Object.prototype.toString.call(value) === "[object URL]";
var isRegularUrl = (value) => isUrl(value) && value.protocol !== "file:";
var isFilePathObject = (value) => isPlainObject(value) && Object.keys(value).length > 0 && Object.keys(value).every((key) => FILE_PATH_KEYS.has(key)) && isFilePathString(value.file);
var FILE_PATH_KEYS = /* @__PURE__ */ new Set(["file", "append"]);
var isFilePathString = (file) => typeof file === "string";
var isUnknownStdioString = (type, value) => type === "native" && typeof value === "string" && !KNOWN_STDIO_STRINGS.has(value);
var KNOWN_STDIO_STRINGS = /* @__PURE__ */ new Set(["ipc", "ignore", "inherit", "overlapped", "pipe"]);
var isReadableStream2 = (value) => Object.prototype.toString.call(value) === "[object ReadableStream]";
var isWritableStream2 = (value) => Object.prototype.toString.call(value) === "[object WritableStream]";
var isWebStream = (value) => isReadableStream2(value) || isWritableStream2(value);
var isTransformStream = (value) => isReadableStream2(value?.readable) && isWritableStream2(value?.writable);
var isAsyncIterableObject = (value) => isObject(value) && typeof value[Symbol.asyncIterator] === "function";
var isIterableObject = (value) => isObject(value) && typeof value[Symbol.iterator] === "function";
var isObject = (value) => typeof value === "object" && value !== null;
var TRANSFORM_TYPES = /* @__PURE__ */ new Set(["generator", "asyncGenerator", "duplex", "webTransform"]);
var FILE_TYPES = /* @__PURE__ */ new Set(["fileUrl", "filePath", "fileNumber"]);
var SPECIAL_DUPLICATE_TYPES_SYNC = /* @__PURE__ */ new Set(["fileUrl", "filePath"]);
var SPECIAL_DUPLICATE_TYPES = /* @__PURE__ */ new Set([...SPECIAL_DUPLICATE_TYPES_SYNC, "webStream", "nodeStream"]);
var FORBID_DUPLICATE_TYPES = /* @__PURE__ */ new Set(["webTransform", "duplex"]);
var TYPE_TO_MESSAGE = {
  generator: "a generator",
  asyncGenerator: "an async generator",
  fileUrl: "a file URL",
  filePath: "a file path string",
  fileNumber: "a file descriptor number",
  webStream: "a web stream",
  nodeStream: "a Node.js stream",
  webTransform: "a web TransformStream",
  duplex: "a Duplex stream",
  native: "any value",
  iterable: "an iterable",
  asyncIterable: "an async iterable",
  string: "a string",
  uint8Array: "a Uint8Array"
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/object-mode.js
var getTransformObjectModes = (objectMode, index, newTransforms, direction) => direction === "output" ? getOutputObjectModes(objectMode, index, newTransforms) : getInputObjectModes(objectMode, index, newTransforms);
var getOutputObjectModes = (objectMode, index, newTransforms) => {
  const writableObjectMode = index !== 0 && newTransforms[index - 1].value.readableObjectMode;
  const readableObjectMode = objectMode ?? writableObjectMode;
  return { writableObjectMode, readableObjectMode };
};
var getInputObjectModes = (objectMode, index, newTransforms) => {
  const writableObjectMode = index === 0 ? objectMode === true : newTransforms[index - 1].value.readableObjectMode;
  const readableObjectMode = index !== newTransforms.length - 1 && (objectMode ?? writableObjectMode);
  return { writableObjectMode, readableObjectMode };
};
var getFdObjectMode = (stdioItems, direction) => {
  const lastTransform = stdioItems.findLast(({ type }) => TRANSFORM_TYPES.has(type));
  if (lastTransform === void 0) {
    return false;
  }
  return direction === "input" ? lastTransform.value.writableObjectMode : lastTransform.value.readableObjectMode;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/normalize.js
var normalizeTransforms = (stdioItems, optionName, direction, options) => [
  ...stdioItems.filter(({ type }) => !TRANSFORM_TYPES.has(type)),
  ...getTransforms(stdioItems, optionName, direction, options)
];
var getTransforms = (stdioItems, optionName, direction, { encoding }) => {
  const transforms = stdioItems.filter(({ type }) => TRANSFORM_TYPES.has(type));
  const newTransforms = Array.from({ length: transforms.length });
  for (const [index, stdioItem] of Object.entries(transforms)) {
    newTransforms[index] = normalizeTransform({
      stdioItem,
      index: Number(index),
      newTransforms,
      optionName,
      direction,
      encoding
    });
  }
  return sortTransforms(newTransforms, direction);
};
var normalizeTransform = ({ stdioItem, stdioItem: { type }, index, newTransforms, optionName, direction, encoding }) => {
  if (type === "duplex") {
    return normalizeDuplex({ stdioItem, optionName });
  }
  if (type === "webTransform") {
    return normalizeTransformStream({
      stdioItem,
      index,
      newTransforms,
      direction
    });
  }
  return normalizeGenerator({
    stdioItem,
    index,
    newTransforms,
    direction,
    encoding
  });
};
var normalizeDuplex = ({
  stdioItem,
  stdioItem: {
    value: {
      transform,
      transform: { writableObjectMode, readableObjectMode },
      objectMode = readableObjectMode
    }
  },
  optionName
}) => {
  if (objectMode && !readableObjectMode) {
    throw new TypeError(`The \`${optionName}.objectMode\` option can only be \`true\` if \`new Duplex({objectMode: true})\` is used.`);
  }
  if (!objectMode && readableObjectMode) {
    throw new TypeError(`The \`${optionName}.objectMode\` option cannot be \`false\` if \`new Duplex({objectMode: true})\` is used.`);
  }
  return {
    ...stdioItem,
    value: { transform, writableObjectMode, readableObjectMode }
  };
};
var normalizeTransformStream = ({ stdioItem, stdioItem: { value }, index, newTransforms, direction }) => {
  const { transform, objectMode } = isPlainObject(value) ? value : { transform: value };
  const { writableObjectMode, readableObjectMode } = getTransformObjectModes(objectMode, index, newTransforms, direction);
  return {
    ...stdioItem,
    value: { transform, writableObjectMode, readableObjectMode }
  };
};
var normalizeGenerator = ({ stdioItem, stdioItem: { value }, index, newTransforms, direction, encoding }) => {
  const {
    transform,
    final,
    binary: binaryOption = false,
    preserveNewlines = false,
    objectMode
  } = isPlainObject(value) ? value : { transform: value };
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const { writableObjectMode, readableObjectMode } = getTransformObjectModes(objectMode, index, newTransforms, direction);
  return {
    ...stdioItem,
    value: {
      transform,
      final,
      binary,
      preserveNewlines,
      writableObjectMode,
      readableObjectMode
    }
  };
};
var sortTransforms = (newTransforms, direction) => direction === "input" ? newTransforms.reverse() : newTransforms;
var getStreamDirection = (stdioItems, fdNumber, optionName) => {
  const directions = stdioItems.map((stdioItem) => getStdioItemDirection(stdioItem, fdNumber));
  if (directions.includes("input") && directions.includes("output")) {
    throw new TypeError(`The \`${optionName}\` option must not be an array of both readable and writable values.`);
  }
  return directions.find(Boolean) ?? DEFAULT_DIRECTION;
};
var getStdioItemDirection = ({ type, value }, fdNumber) => KNOWN_DIRECTIONS[fdNumber] ?? guessStreamDirection[type](value);
var KNOWN_DIRECTIONS = ["input", "output", "output"];
var anyDirection = () => void 0;
var alwaysInput = () => "input";
var guessStreamDirection = {
  generator: anyDirection,
  asyncGenerator: anyDirection,
  fileUrl: anyDirection,
  filePath: anyDirection,
  iterable: alwaysInput,
  asyncIterable: alwaysInput,
  uint8Array: alwaysInput,
  webStream: (value) => isWritableStream2(value) ? "output" : "input",
  nodeStream(value) {
    if (!isReadableStream(value, { checkOpen: false })) {
      return "output";
    }
    return isWritableStream(value, { checkOpen: false }) ? void 0 : "input";
  },
  webTransform: anyDirection,
  duplex: anyDirection,
  native(value) {
    const standardStreamDirection = getStandardStreamDirection(value);
    if (standardStreamDirection !== void 0) {
      return standardStreamDirection;
    }
    if (isStream(value, { checkOpen: false })) {
      return guessStreamDirection.nodeStream(value);
    }
  }
};
var getStandardStreamDirection = (value) => {
  if ([0, process22__default.default.stdin].includes(value)) {
    return "input";
  }
  if ([1, 2, process22__default.default.stdout, process22__default.default.stderr].includes(value)) {
    return "output";
  }
};
var DEFAULT_DIRECTION = "output";

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/array.js
var normalizeIpcStdioArray = (stdioArray, ipc) => ipc && !stdioArray.includes("ipc") ? [...stdioArray, "ipc"] : stdioArray;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/stdio-option.js
var normalizeStdioOption = ({ stdio, ipc, buffer, ...options }, verboseInfo, isSync) => {
  const stdioArray = getStdioArray(stdio, options).map((stdioOption, fdNumber) => addDefaultValue2(stdioOption, fdNumber));
  return isSync ? normalizeStdioSync(stdioArray, buffer, verboseInfo) : normalizeIpcStdioArray(stdioArray, ipc);
};
var getStdioArray = (stdio, options) => {
  if (stdio === void 0) {
    return STANDARD_STREAMS_ALIASES.map((alias) => options[alias]);
  }
  if (hasAlias(options)) {
    throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${STANDARD_STREAMS_ALIASES.map((alias) => `\`${alias}\``).join(", ")}`);
  }
  if (typeof stdio === "string") {
    return [stdio, stdio, stdio];
  }
  if (!Array.isArray(stdio)) {
    throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
  }
  const length = Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length);
  return Array.from({ length }, (_, fdNumber) => stdio[fdNumber]);
};
var hasAlias = (options) => STANDARD_STREAMS_ALIASES.some((alias) => options[alias] !== void 0);
var addDefaultValue2 = (stdioOption, fdNumber) => {
  if (Array.isArray(stdioOption)) {
    return stdioOption.map((item) => addDefaultValue2(item, fdNumber));
  }
  if (stdioOption === null || stdioOption === void 0) {
    return fdNumber >= STANDARD_STREAMS_ALIASES.length ? "ignore" : "pipe";
  }
  return stdioOption;
};
var normalizeStdioSync = (stdioArray, buffer, verboseInfo) => stdioArray.map((stdioOption, fdNumber) => !buffer[fdNumber] && fdNumber !== 0 && !isFullVerbose(verboseInfo, fdNumber) && isOutputPipeOnly(stdioOption) ? "ignore" : stdioOption);
var isOutputPipeOnly = (stdioOption) => stdioOption === "pipe" || Array.isArray(stdioOption) && stdioOption.every((item) => item === "pipe");
var handleNativeStream = ({ stdioItem, stdioItem: { type }, isStdioArray, fdNumber, direction, isSync }) => {
  if (!isStdioArray || type !== "native") {
    return stdioItem;
  }
  return isSync ? handleNativeStreamSync({ stdioItem, fdNumber, direction }) : handleNativeStreamAsync({ stdioItem, fdNumber });
};
var handleNativeStreamSync = ({ stdioItem, stdioItem: { value, optionName }, fdNumber, direction }) => {
  const targetFd = getTargetFd({
    value,
    optionName,
    fdNumber,
    direction
  });
  if (targetFd !== void 0) {
    return targetFd;
  }
  if (isStream(value, { checkOpen: false })) {
    throw new TypeError(`The \`${optionName}: Stream\` option cannot both be an array and include a stream with synchronous methods.`);
  }
  return stdioItem;
};
var getTargetFd = ({ value, optionName, fdNumber, direction }) => {
  const targetFdNumber = getTargetFdNumber(value, fdNumber);
  if (targetFdNumber === void 0) {
    return;
  }
  if (direction === "output") {
    return { type: "fileNumber", value: targetFdNumber, optionName };
  }
  if (tty__default.default.isatty(targetFdNumber)) {
    throw new TypeError(`The \`${optionName}: ${serializeOptionValue(value)}\` option is invalid: it cannot be a TTY with synchronous methods.`);
  }
  return { type: "uint8Array", value: bufferToUint8Array(fs.readFileSync(targetFdNumber)), optionName };
};
var getTargetFdNumber = (value, fdNumber) => {
  if (value === "inherit") {
    return fdNumber;
  }
  if (typeof value === "number") {
    return value;
  }
  const standardStreamIndex = STANDARD_STREAMS.indexOf(value);
  if (standardStreamIndex !== -1) {
    return standardStreamIndex;
  }
};
var handleNativeStreamAsync = ({ stdioItem, stdioItem: { value, optionName }, fdNumber }) => {
  if (value === "inherit") {
    return { type: "nodeStream", value: getStandardStream(fdNumber, value, optionName), optionName };
  }
  if (typeof value === "number") {
    return { type: "nodeStream", value: getStandardStream(value, value, optionName), optionName };
  }
  if (isStream(value, { checkOpen: false })) {
    return { type: "nodeStream", value, optionName };
  }
  return stdioItem;
};
var getStandardStream = (fdNumber, value, optionName) => {
  const standardStream = STANDARD_STREAMS[fdNumber];
  if (standardStream === void 0) {
    throw new TypeError(`The \`${optionName}: ${value}\` option is invalid: no such standard stream.`);
  }
  return standardStream;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/input-option.js
var handleInputOptions = ({ input, inputFile }, fdNumber) => fdNumber === 0 ? [
  ...handleInputOption(input),
  ...handleInputFileOption(inputFile)
] : [];
var handleInputOption = (input) => input === void 0 ? [] : [{
  type: getInputType(input),
  value: input,
  optionName: "input"
}];
var getInputType = (input) => {
  if (isReadableStream(input, { checkOpen: false })) {
    return "nodeStream";
  }
  if (typeof input === "string") {
    return "string";
  }
  if (isUint8Array(input)) {
    return "uint8Array";
  }
  throw new Error("The `input` option must be a string, a Uint8Array or a Node.js Readable stream.");
};
var handleInputFileOption = (inputFile) => inputFile === void 0 ? [] : [{
  ...getInputFileType(inputFile),
  optionName: "inputFile"
}];
var getInputFileType = (inputFile) => {
  if (isUrl(inputFile)) {
    return { type: "fileUrl", value: inputFile };
  }
  if (isFilePathString(inputFile)) {
    return { type: "filePath", value: { file: inputFile } };
  }
  throw new Error("The `inputFile` option must be a file path string or a file URL.");
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/duplicate.js
var filterDuplicates = (stdioItems) => stdioItems.filter((stdioItemOne, indexOne) => stdioItems.every((stdioItemTwo, indexTwo) => stdioItemOne.value !== stdioItemTwo.value || indexOne >= indexTwo || stdioItemOne.type === "generator" || stdioItemOne.type === "asyncGenerator"));
var getDuplicateStream = ({ stdioItem: { type, value, optionName }, direction, fileDescriptors, isSync }) => {
  const otherStdioItems = getOtherStdioItems(fileDescriptors, type);
  if (otherStdioItems.length === 0) {
    return;
  }
  if (isSync) {
    validateDuplicateStreamSync({
      otherStdioItems,
      type,
      value,
      optionName,
      direction
    });
    return;
  }
  if (SPECIAL_DUPLICATE_TYPES.has(type)) {
    return getDuplicateStreamInstance({
      otherStdioItems,
      type,
      value,
      optionName,
      direction
    });
  }
  if (FORBID_DUPLICATE_TYPES.has(type)) {
    validateDuplicateTransform({
      otherStdioItems,
      type,
      value,
      optionName
    });
  }
};
var getOtherStdioItems = (fileDescriptors, type) => fileDescriptors.flatMap(({ direction, stdioItems }) => stdioItems.filter((stdioItem) => stdioItem.type === type).map(((stdioItem) => ({ ...stdioItem, direction }))));
var validateDuplicateStreamSync = ({ otherStdioItems, type, value, optionName, direction }) => {
  if (SPECIAL_DUPLICATE_TYPES_SYNC.has(type)) {
    getDuplicateStreamInstance({
      otherStdioItems,
      type,
      value,
      optionName,
      direction
    });
  }
};
var getDuplicateStreamInstance = ({ otherStdioItems, type, value, optionName, direction }) => {
  const duplicateStdioItems = otherStdioItems.filter((stdioItem) => hasSameValue(stdioItem, value));
  if (duplicateStdioItems.length === 0) {
    return;
  }
  const differentStdioItem = duplicateStdioItems.find((stdioItem) => stdioItem.direction !== direction);
  throwOnDuplicateStream(differentStdioItem, optionName, type);
  return direction === "output" ? duplicateStdioItems[0].stream : void 0;
};
var hasSameValue = ({ type, value }, secondValue) => {
  if (type === "filePath") {
    return value.file === secondValue.file;
  }
  if (type === "fileUrl") {
    return value.href === secondValue.href;
  }
  return value === secondValue;
};
var validateDuplicateTransform = ({ otherStdioItems, type, value, optionName }) => {
  const duplicateStdioItem = otherStdioItems.find(({ value: { transform } }) => transform === value.transform);
  throwOnDuplicateStream(duplicateStdioItem, optionName, type);
};
var throwOnDuplicateStream = (stdioItem, optionName, type) => {
  if (stdioItem !== void 0) {
    throw new TypeError(`The \`${stdioItem.optionName}\` and \`${optionName}\` options must not target ${TYPE_TO_MESSAGE[type]} that is the same.`);
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/handle.js
var handleStdio = (addProperties3, options, verboseInfo, isSync) => {
  const stdio = normalizeStdioOption(options, verboseInfo, isSync);
  const initialFileDescriptors = stdio.map((stdioOption, fdNumber) => getFileDescriptor({
    stdioOption,
    fdNumber,
    options,
    isSync
  }));
  const fileDescriptors = getFinalFileDescriptors({
    initialFileDescriptors,
    addProperties: addProperties3,
    options,
    isSync
  });
  options.stdio = fileDescriptors.map(({ stdioItems }) => forwardStdio(stdioItems));
  return fileDescriptors;
};
var getFileDescriptor = ({ stdioOption, fdNumber, options, isSync }) => {
  const optionName = getStreamName(fdNumber);
  const { stdioItems: initialStdioItems, isStdioArray } = initializeStdioItems({
    stdioOption,
    fdNumber,
    options,
    optionName
  });
  const direction = getStreamDirection(initialStdioItems, fdNumber, optionName);
  const stdioItems = initialStdioItems.map((stdioItem) => handleNativeStream({
    stdioItem,
    isStdioArray,
    fdNumber,
    direction,
    isSync
  }));
  const normalizedStdioItems = normalizeTransforms(stdioItems, optionName, direction, options);
  const objectMode = getFdObjectMode(normalizedStdioItems, direction);
  validateFileObjectMode(normalizedStdioItems, objectMode);
  return { direction, objectMode, stdioItems: normalizedStdioItems };
};
var initializeStdioItems = ({ stdioOption, fdNumber, options, optionName }) => {
  const values = Array.isArray(stdioOption) ? stdioOption : [stdioOption];
  const initialStdioItems = [
    ...values.map((value) => initializeStdioItem(value, optionName)),
    ...handleInputOptions(options, fdNumber)
  ];
  const stdioItems = filterDuplicates(initialStdioItems);
  const isStdioArray = stdioItems.length > 1;
  validateStdioArray(stdioItems, isStdioArray, optionName);
  validateStreams(stdioItems);
  return { stdioItems, isStdioArray };
};
var initializeStdioItem = (value, optionName) => ({
  type: getStdioItemType(value, optionName),
  value,
  optionName
});
var validateStdioArray = (stdioItems, isStdioArray, optionName) => {
  if (stdioItems.length === 0) {
    throw new TypeError(`The \`${optionName}\` option must not be an empty array.`);
  }
  if (!isStdioArray) {
    return;
  }
  for (const { value, optionName: optionName2 } of stdioItems) {
    if (INVALID_STDIO_ARRAY_OPTIONS.has(value)) {
      throw new Error(`The \`${optionName2}\` option must not include \`${value}\`.`);
    }
  }
};
var INVALID_STDIO_ARRAY_OPTIONS = /* @__PURE__ */ new Set(["ignore", "ipc"]);
var validateStreams = (stdioItems) => {
  for (const stdioItem of stdioItems) {
    validateFileStdio(stdioItem);
  }
};
var validateFileStdio = ({ type, value, optionName }) => {
  if (isRegularUrl(value)) {
    throw new TypeError(`The \`${optionName}: URL\` option must use the \`file:\` scheme.
For example, you can use the \`pathToFileURL()\` method of the \`url\` core module.`);
  }
  if (isUnknownStdioString(type, value)) {
    throw new TypeError(`The \`${optionName}: { file: '...' }\` option must be used instead of \`${optionName}: '...'\`.`);
  }
};
var validateFileObjectMode = (stdioItems, objectMode) => {
  if (!objectMode) {
    return;
  }
  const fileStdioItem = stdioItems.find(({ type }) => FILE_TYPES.has(type));
  if (fileStdioItem !== void 0) {
    throw new TypeError(`The \`${fileStdioItem.optionName}\` option cannot use both files and transforms in objectMode.`);
  }
};
var getFinalFileDescriptors = ({ initialFileDescriptors, addProperties: addProperties3, options, isSync }) => {
  const fileDescriptors = [];
  try {
    for (const fileDescriptor of initialFileDescriptors) {
      fileDescriptors.push(getFinalFileDescriptor({
        fileDescriptor,
        fileDescriptors,
        addProperties: addProperties3,
        options,
        isSync
      }));
    }
    return fileDescriptors;
  } catch (error) {
    cleanupCustomStreams(fileDescriptors);
    throw error;
  }
};
var getFinalFileDescriptor = ({
  fileDescriptor: { direction, objectMode, stdioItems },
  fileDescriptors,
  addProperties: addProperties3,
  options,
  isSync
}) => {
  const finalStdioItems = stdioItems.map((stdioItem) => addStreamProperties({
    stdioItem,
    addProperties: addProperties3,
    direction,
    options,
    fileDescriptors,
    isSync
  }));
  return { direction, objectMode, stdioItems: finalStdioItems };
};
var addStreamProperties = ({ stdioItem, addProperties: addProperties3, direction, options, fileDescriptors, isSync }) => {
  const duplicateStream = getDuplicateStream({
    stdioItem,
    direction,
    fileDescriptors,
    isSync
  });
  if (duplicateStream !== void 0) {
    return { ...stdioItem, stream: duplicateStream };
  }
  return {
    ...stdioItem,
    ...addProperties3[direction][stdioItem.type](stdioItem, options)
  };
};
var cleanupCustomStreams = (fileDescriptors) => {
  for (const { stdioItems } of fileDescriptors) {
    for (const { stream } of stdioItems) {
      if (stream !== void 0 && !isStandardStream(stream)) {
        stream.destroy();
      }
    }
  }
};
var forwardStdio = (stdioItems) => {
  if (stdioItems.length > 1) {
    return stdioItems.some(({ value: value2 }) => value2 === "overlapped") ? "overlapped" : "pipe";
  }
  const [{ type, value }] = stdioItems;
  return type === "native" ? value : "pipe";
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/handle-sync.js
var handleStdioSync = (options, verboseInfo) => handleStdio(addPropertiesSync, options, verboseInfo, true);
var forbiddenIfSync = ({ type, optionName }) => {
  throwInvalidSyncValue(optionName, TYPE_TO_MESSAGE[type]);
};
var forbiddenNativeIfSync = ({ optionName, value }) => {
  if (value === "ipc" || value === "overlapped") {
    throwInvalidSyncValue(optionName, `"${value}"`);
  }
  return {};
};
var throwInvalidSyncValue = (optionName, value) => {
  throw new TypeError(`The \`${optionName}\` option cannot be ${value} with synchronous methods.`);
};
var addProperties = {
  generator() {
  },
  asyncGenerator: forbiddenIfSync,
  webStream: forbiddenIfSync,
  nodeStream: forbiddenIfSync,
  webTransform: forbiddenIfSync,
  duplex: forbiddenIfSync,
  asyncIterable: forbiddenIfSync,
  native: forbiddenNativeIfSync
};
var addPropertiesSync = {
  input: {
    ...addProperties,
    fileUrl: ({ value }) => ({ contents: [bufferToUint8Array(fs.readFileSync(value))] }),
    filePath: ({ value: { file } }) => ({ contents: [bufferToUint8Array(fs.readFileSync(file))] }),
    fileNumber: forbiddenIfSync,
    iterable: ({ value }) => ({ contents: [...value] }),
    string: ({ value }) => ({ contents: [value] }),
    uint8Array: ({ value }) => ({ contents: [value] })
  },
  output: {
    ...addProperties,
    fileUrl: ({ value }) => ({ path: value }),
    filePath: ({ value: { file, append } }) => ({ path: file, append }),
    fileNumber: ({ value }) => ({ path: value }),
    iterable: forbiddenIfSync,
    string: forbiddenIfSync,
    uint8Array: forbiddenIfSync
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/strip-newline.js
var stripNewline = (value, { stripFinalNewline: stripFinalNewline3 }, fdNumber) => getStripFinalNewline(stripFinalNewline3, fdNumber) && value !== void 0 && !Array.isArray(value) ? stripFinalNewline(value) : value;
var getStripFinalNewline = (stripFinalNewline3, fdNumber) => fdNumber === "all" ? stripFinalNewline3[1] || stripFinalNewline3[2] : stripFinalNewline3[fdNumber];

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/split.js
var getSplitLinesGenerator = (binary, preserveNewlines, skipped, state) => binary || skipped ? void 0 : initializeSplitLines(preserveNewlines, state);
var splitLinesSync = (chunk, preserveNewlines, objectMode) => objectMode ? chunk.flatMap((item) => splitLinesItemSync(item, preserveNewlines)) : splitLinesItemSync(chunk, preserveNewlines);
var splitLinesItemSync = (chunk, preserveNewlines) => {
  const { transform, final } = initializeSplitLines(preserveNewlines, {});
  return [...transform(chunk), ...final()];
};
var initializeSplitLines = (preserveNewlines, state) => {
  state.previousChunks = "";
  return {
    transform: splitGenerator.bind(void 0, state, preserveNewlines),
    final: linesFinal.bind(void 0, state)
  };
};
var splitGenerator = function* (state, preserveNewlines, chunk) {
  if (typeof chunk !== "string") {
    yield chunk;
    return;
  }
  let { previousChunks } = state;
  let start = -1;
  for (let end = 0; end < chunk.length; end += 1) {
    if (chunk[end] === "\n") {
      const newlineLength = getNewlineLength(chunk, end, preserveNewlines, state);
      let line = chunk.slice(start + 1, end + 1 - newlineLength);
      if (previousChunks.length > 0) {
        line = concatString(previousChunks, line);
        previousChunks = "";
      }
      yield line;
      start = end;
    }
  }
  if (start !== chunk.length - 1) {
    previousChunks = concatString(previousChunks, chunk.slice(start + 1));
  }
  state.previousChunks = previousChunks;
};
var getNewlineLength = (chunk, end, preserveNewlines, state) => {
  if (preserveNewlines) {
    return 0;
  }
  state.isWindowsNewline = end !== 0 && chunk[end - 1] === "\r";
  return state.isWindowsNewline ? 2 : 1;
};
var linesFinal = function* ({ previousChunks }) {
  if (previousChunks.length > 0) {
    yield previousChunks;
  }
};
var getAppendNewlineGenerator = ({ binary, preserveNewlines, readableObjectMode, state }) => binary || preserveNewlines || readableObjectMode ? void 0 : { transform: appendNewlineGenerator.bind(void 0, state) };
var appendNewlineGenerator = function* ({ isWindowsNewline = false }, chunk) {
  const { unixNewline, windowsNewline, LF: LF2, concatBytes } = typeof chunk === "string" ? linesStringInfo : linesUint8ArrayInfo;
  if (chunk.at(-1) === LF2) {
    yield chunk;
    return;
  }
  const newline = isWindowsNewline ? windowsNewline : unixNewline;
  yield concatBytes(chunk, newline);
};
var concatString = (firstChunk, secondChunk) => `${firstChunk}${secondChunk}`;
var linesStringInfo = {
  windowsNewline: "\r\n",
  unixNewline: "\n",
  LF: "\n",
  concatBytes: concatString
};
var concatUint8Array = (firstChunk, secondChunk) => {
  const chunk = new Uint8Array(firstChunk.length + secondChunk.length);
  chunk.set(firstChunk, 0);
  chunk.set(secondChunk, firstChunk.length);
  return chunk;
};
var linesUint8ArrayInfo = {
  windowsNewline: new Uint8Array([13, 10]),
  unixNewline: new Uint8Array([10]),
  LF: 10,
  concatBytes: concatUint8Array
};
var getValidateTransformInput = (writableObjectMode, optionName) => writableObjectMode ? void 0 : validateStringTransformInput.bind(void 0, optionName);
var validateStringTransformInput = function* (optionName, chunk) {
  if (typeof chunk !== "string" && !isUint8Array(chunk) && !buffer.Buffer.isBuffer(chunk)) {
    throw new TypeError(`The \`${optionName}\` option's transform must use "objectMode: true" to receive as input: ${typeof chunk}.`);
  }
  yield chunk;
};
var getValidateTransformReturn = (readableObjectMode, optionName) => readableObjectMode ? validateObjectTransformReturn.bind(void 0, optionName) : validateStringTransformReturn.bind(void 0, optionName);
var validateObjectTransformReturn = function* (optionName, chunk) {
  validateEmptyReturn(optionName, chunk);
  yield chunk;
};
var validateStringTransformReturn = function* (optionName, chunk) {
  validateEmptyReturn(optionName, chunk);
  if (typeof chunk !== "string" && !isUint8Array(chunk)) {
    throw new TypeError(`The \`${optionName}\` option's function must yield a string or an Uint8Array, not ${typeof chunk}.`);
  }
  yield chunk;
};
var validateEmptyReturn = (optionName, chunk) => {
  if (chunk === null || chunk === void 0) {
    throw new TypeError(`The \`${optionName}\` option's function must not call \`yield ${chunk}\`.
Instead, \`yield\` should either be called with a value, or not be called at all. For example:
  if (condition) { yield value; }`);
  }
};
var getEncodingTransformGenerator = (binary, encoding, skipped) => {
  if (skipped) {
    return;
  }
  if (binary) {
    return { transform: encodingUint8ArrayGenerator.bind(void 0, new TextEncoder()) };
  }
  const stringDecoder = new string_decoder.StringDecoder(encoding);
  return {
    transform: encodingStringGenerator.bind(void 0, stringDecoder),
    final: encodingStringFinal.bind(void 0, stringDecoder)
  };
};
var encodingUint8ArrayGenerator = function* (textEncoder4, chunk) {
  if (buffer.Buffer.isBuffer(chunk)) {
    yield bufferToUint8Array(chunk);
  } else if (typeof chunk === "string") {
    yield textEncoder4.encode(chunk);
  } else {
    yield chunk;
  }
};
var encodingStringGenerator = function* (stringDecoder, chunk) {
  yield isUint8Array(chunk) ? stringDecoder.write(chunk) : chunk;
};
var encodingStringFinal = function* (stringDecoder) {
  const lastChunk = stringDecoder.end();
  if (lastChunk !== "") {
    yield lastChunk;
  }
};
var pushChunks = util.callbackify(async (getChunks, state, getChunksArguments, transformStream) => {
  state.currentIterable = getChunks(...getChunksArguments);
  try {
    for await (const chunk of state.currentIterable) {
      transformStream.push(chunk);
    }
  } finally {
    delete state.currentIterable;
  }
});
var transformChunk = async function* (chunk, generators, index) {
  if (index === generators.length) {
    yield chunk;
    return;
  }
  const { transform = identityGenerator } = generators[index];
  for await (const transformedChunk of transform(chunk)) {
    yield* transformChunk(transformedChunk, generators, index + 1);
  }
};
var finalChunks = async function* (generators) {
  for (const [index, { final }] of Object.entries(generators)) {
    yield* generatorFinalChunks(final, Number(index), generators);
  }
};
var generatorFinalChunks = async function* (final, index, generators) {
  if (final === void 0) {
    return;
  }
  for await (const finalChunk of final()) {
    yield* transformChunk(finalChunk, generators, index + 1);
  }
};
var destroyTransform = util.callbackify(async ({ currentIterable }, error) => {
  if (currentIterable !== void 0) {
    await (error ? currentIterable.throw(error) : currentIterable.return());
    return;
  }
  if (error) {
    throw error;
  }
});
var identityGenerator = function* (chunk) {
  yield chunk;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/run-sync.js
var pushChunksSync = (getChunksSync, getChunksArguments, transformStream, done) => {
  try {
    for (const chunk of getChunksSync(...getChunksArguments)) {
      transformStream.push(chunk);
    }
    done();
  } catch (error) {
    done(error);
  }
};
var runTransformSync = (generators, chunks) => [
  ...chunks.flatMap((chunk) => [...transformChunkSync(chunk, generators, 0)]),
  ...finalChunksSync(generators)
];
var transformChunkSync = function* (chunk, generators, index) {
  if (index === generators.length) {
    yield chunk;
    return;
  }
  const { transform = identityGenerator2 } = generators[index];
  for (const transformedChunk of transform(chunk)) {
    yield* transformChunkSync(transformedChunk, generators, index + 1);
  }
};
var finalChunksSync = function* (generators) {
  for (const [index, { final }] of Object.entries(generators)) {
    yield* generatorFinalChunksSync(final, Number(index), generators);
  }
};
var generatorFinalChunksSync = function* (final, index, generators) {
  if (final === void 0) {
    return;
  }
  for (const finalChunk of final()) {
    yield* transformChunkSync(finalChunk, generators, index + 1);
  }
};
var identityGenerator2 = function* (chunk) {
  yield chunk;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/generator.js
var generatorToStream = ({
  value,
  value: { transform, final, writableObjectMode, readableObjectMode },
  optionName
}, { encoding }) => {
  const state = {};
  const generators = addInternalGenerators(value, encoding, optionName);
  const transformAsync = isAsyncGenerator(transform);
  const finalAsync = isAsyncGenerator(final);
  const transformMethod = transformAsync ? pushChunks.bind(void 0, transformChunk, state) : pushChunksSync.bind(void 0, transformChunkSync);
  const finalMethod = transformAsync || finalAsync ? pushChunks.bind(void 0, finalChunks, state) : pushChunksSync.bind(void 0, finalChunksSync);
  const destroyMethod = transformAsync || finalAsync ? destroyTransform.bind(void 0, state) : void 0;
  const stream$1 = new stream.Transform({
    writableObjectMode,
    writableHighWaterMark: stream.getDefaultHighWaterMark(writableObjectMode),
    readableObjectMode,
    readableHighWaterMark: stream.getDefaultHighWaterMark(readableObjectMode),
    transform(chunk, encoding2, done) {
      transformMethod([chunk, generators, 0], this, done);
    },
    flush(done) {
      finalMethod([generators], this, done);
    },
    destroy: destroyMethod
  });
  return { stream: stream$1 };
};
var runGeneratorsSync = (chunks, stdioItems, encoding, isInput) => {
  const generators = stdioItems.filter(({ type }) => type === "generator");
  const reversedGenerators = isInput ? generators.reverse() : generators;
  for (const { value, optionName } of reversedGenerators) {
    const generators2 = addInternalGenerators(value, encoding, optionName);
    chunks = runTransformSync(generators2, chunks);
  }
  return chunks;
};
var addInternalGenerators = ({ transform, final, binary, writableObjectMode, readableObjectMode, preserveNewlines }, encoding, optionName) => {
  const state = {};
  return [
    { transform: getValidateTransformInput(writableObjectMode, optionName) },
    getEncodingTransformGenerator(binary, encoding, writableObjectMode),
    getSplitLinesGenerator(binary, preserveNewlines, writableObjectMode, state),
    { transform, final },
    { transform: getValidateTransformReturn(readableObjectMode, optionName) },
    getAppendNewlineGenerator({
      binary,
      preserveNewlines,
      readableObjectMode,
      state
    })
  ].filter(Boolean);
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/input-sync.js
var addInputOptionsSync = (fileDescriptors, options) => {
  for (const fdNumber of getInputFdNumbers(fileDescriptors)) {
    addInputOptionSync(fileDescriptors, fdNumber, options);
  }
};
var getInputFdNumbers = (fileDescriptors) => new Set(Object.entries(fileDescriptors).filter(([, { direction }]) => direction === "input").map(([fdNumber]) => Number(fdNumber)));
var addInputOptionSync = (fileDescriptors, fdNumber, options) => {
  const { stdioItems } = fileDescriptors[fdNumber];
  const allStdioItems = stdioItems.filter(({ contents }) => contents !== void 0);
  if (allStdioItems.length === 0) {
    return;
  }
  if (fdNumber !== 0) {
    const [{ type, optionName }] = allStdioItems;
    throw new TypeError(`Only the \`stdin\` option, not \`${optionName}\`, can be ${TYPE_TO_MESSAGE[type]} with synchronous methods.`);
  }
  const allContents = allStdioItems.map(({ contents }) => contents);
  const transformedContents = allContents.map((contents) => applySingleInputGeneratorsSync(contents, stdioItems));
  options.input = joinToUint8Array(transformedContents);
};
var applySingleInputGeneratorsSync = (contents, stdioItems) => {
  const newContents = runGeneratorsSync(contents, stdioItems, "utf8", true);
  validateSerializable(newContents);
  return joinToUint8Array(newContents);
};
var validateSerializable = (newContents) => {
  const invalidItem = newContents.find((item) => typeof item !== "string" && !isUint8Array(item));
  if (invalidItem !== void 0) {
    throw new TypeError(`The \`stdin\` option is invalid: when passing objects as input, a transform must be used to serialize them to strings or Uint8Arrays: ${invalidItem}.`);
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/output.js
var shouldLogOutput = ({ stdioItems, encoding, verboseInfo, fdNumber }) => fdNumber !== "all" && isFullVerbose(verboseInfo, fdNumber) && !BINARY_ENCODINGS.has(encoding) && fdUsesVerbose(fdNumber) && (stdioItems.some(({ type, value }) => type === "native" && PIPED_STDIO_VALUES.has(value)) || stdioItems.every(({ type }) => TRANSFORM_TYPES.has(type)));
var fdUsesVerbose = (fdNumber) => fdNumber === 1 || fdNumber === 2;
var PIPED_STDIO_VALUES = /* @__PURE__ */ new Set(["pipe", "overlapped"]);
var logLines = async (linesIterable, stream, fdNumber, verboseInfo) => {
  for await (const line of linesIterable) {
    if (!isPipingStream(stream)) {
      logLine(line, fdNumber, verboseInfo);
    }
  }
};
var logLinesSync = (linesArray, fdNumber, verboseInfo) => {
  for (const line of linesArray) {
    logLine(line, fdNumber, verboseInfo);
  }
};
var isPipingStream = (stream) => stream._readableState.pipes.length > 0;
var logLine = (line, fdNumber, verboseInfo) => {
  const verboseMessage = serializeVerboseMessage(line);
  verboseLog({
    type: "output",
    verboseMessage,
    fdNumber,
    verboseInfo
  });
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/output-sync.js
var transformOutputSync = ({ fileDescriptors, syncResult: { output }, options, isMaxBuffer, verboseInfo }) => {
  if (output === null) {
    return { output: Array.from({ length: 3 }) };
  }
  const state = {};
  const outputFiles = /* @__PURE__ */ new Set([]);
  const transformedOutput = output.map((result, fdNumber) => transformOutputResultSync({
    result,
    fileDescriptors,
    fdNumber,
    state,
    outputFiles,
    isMaxBuffer,
    verboseInfo
  }, options));
  return { output: transformedOutput, ...state };
};
var transformOutputResultSync = ({ result, fileDescriptors, fdNumber, state, outputFiles, isMaxBuffer, verboseInfo }, { buffer, encoding, lines, stripFinalNewline: stripFinalNewline3, maxBuffer }) => {
  if (result === null) {
    return;
  }
  const truncatedResult = truncateMaxBufferSync(result, isMaxBuffer, maxBuffer);
  const uint8ArrayResult = bufferToUint8Array(truncatedResult);
  const { stdioItems, objectMode } = fileDescriptors[fdNumber];
  const chunks = runOutputGeneratorsSync([uint8ArrayResult], stdioItems, encoding, state);
  const { serializedResult, finalResult = serializedResult } = serializeChunks({
    chunks,
    objectMode,
    encoding,
    lines,
    stripFinalNewline: stripFinalNewline3,
    fdNumber
  });
  logOutputSync({
    serializedResult,
    fdNumber,
    state,
    verboseInfo,
    encoding,
    stdioItems,
    objectMode
  });
  const returnedResult = buffer[fdNumber] ? finalResult : void 0;
  try {
    if (state.error === void 0) {
      writeToFiles(serializedResult, stdioItems, outputFiles);
    }
    return returnedResult;
  } catch (error) {
    state.error = error;
    return returnedResult;
  }
};
var runOutputGeneratorsSync = (chunks, stdioItems, encoding, state) => {
  try {
    return runGeneratorsSync(chunks, stdioItems, encoding, false);
  } catch (error) {
    state.error = error;
    return chunks;
  }
};
var serializeChunks = ({ chunks, objectMode, encoding, lines, stripFinalNewline: stripFinalNewline3, fdNumber }) => {
  if (objectMode) {
    return { serializedResult: chunks };
  }
  if (encoding === "buffer") {
    return { serializedResult: joinToUint8Array(chunks) };
  }
  const serializedResult = joinToString(chunks, encoding);
  if (lines[fdNumber]) {
    return { serializedResult, finalResult: splitLinesSync(serializedResult, !stripFinalNewline3[fdNumber], objectMode) };
  }
  return { serializedResult };
};
var logOutputSync = ({ serializedResult, fdNumber, state, verboseInfo, encoding, stdioItems, objectMode }) => {
  if (!shouldLogOutput({
    stdioItems,
    encoding,
    verboseInfo,
    fdNumber
  })) {
    return;
  }
  const linesArray = splitLinesSync(serializedResult, false, objectMode);
  try {
    logLinesSync(linesArray, fdNumber, verboseInfo);
  } catch (error) {
    state.error ??= error;
  }
};
var writeToFiles = (serializedResult, stdioItems, outputFiles) => {
  for (const { path: path7, append } of stdioItems.filter(({ type }) => FILE_TYPES.has(type))) {
    const pathString = typeof path7 === "string" ? path7 : path7.toString();
    if (append || outputFiles.has(pathString)) {
      fs.appendFileSync(path7, serializedResult);
    } else {
      outputFiles.add(pathString);
      fs.writeFileSync(path7, serializedResult);
    }
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/all-sync.js
var getAllSync = ([, stdout, stderr], options) => {
  if (!options.all) {
    return;
  }
  if (stdout === void 0) {
    return stderr;
  }
  if (stderr === void 0) {
    return stdout;
  }
  if (Array.isArray(stdout)) {
    return Array.isArray(stderr) ? [...stdout, ...stderr] : [...stdout, stripNewline(stderr, options, "all")];
  }
  if (Array.isArray(stderr)) {
    return [stripNewline(stdout, options, "all"), ...stderr];
  }
  if (isUint8Array(stdout) && isUint8Array(stderr)) {
    return concatUint8Arrays([stdout, stderr]);
  }
  return `${stdout}${stderr}`;
};
var waitForExit = async (subprocess, context) => {
  const [exitCode, signal] = await waitForExitOrError(subprocess);
  context.isForcefullyTerminated ??= false;
  return [exitCode, signal];
};
var waitForExitOrError = async (subprocess) => {
  const [spawnPayload, exitPayload] = await Promise.allSettled([
    events.once(subprocess, "spawn"),
    events.once(subprocess, "exit")
  ]);
  if (spawnPayload.status === "rejected") {
    return [];
  }
  return exitPayload.status === "rejected" ? waitForSubprocessExit(subprocess) : exitPayload.value;
};
var waitForSubprocessExit = async (subprocess) => {
  try {
    return await events.once(subprocess, "exit");
  } catch {
    return waitForSubprocessExit(subprocess);
  }
};
var waitForSuccessfulExit = async (exitPromise) => {
  const [exitCode, signal] = await exitPromise;
  if (!isSubprocessErrorExit(exitCode, signal) && isFailedExit(exitCode, signal)) {
    throw new DiscardedError();
  }
  return [exitCode, signal];
};
var isSubprocessErrorExit = (exitCode, signal) => exitCode === void 0 && signal === void 0;
var isFailedExit = (exitCode, signal) => exitCode !== 0 || signal !== null;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/exit-sync.js
var getExitResultSync = ({ error, status: exitCode, signal, output }, { maxBuffer }) => {
  const resultError = getResultError(error, exitCode, signal);
  const timedOut = resultError?.code === "ETIMEDOUT";
  const isMaxBuffer = isMaxBufferSync(resultError, output, maxBuffer);
  return {
    resultError,
    exitCode,
    signal,
    timedOut,
    isMaxBuffer
  };
};
var getResultError = (error, exitCode, signal) => {
  if (error !== void 0) {
    return error;
  }
  return isFailedExit(exitCode, signal) ? new DiscardedError() : void 0;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/main-sync.js
var execaCoreSync = (rawFile, rawArguments, rawOptions) => {
  const { file, commandArguments, command, escapedCommand, startTime, verboseInfo, options, fileDescriptors } = handleSyncArguments(rawFile, rawArguments, rawOptions);
  const result = spawnSubprocessSync({
    file,
    commandArguments,
    options,
    command,
    escapedCommand,
    verboseInfo,
    fileDescriptors,
    startTime
  });
  return handleResult(result, verboseInfo, options);
};
var handleSyncArguments = (rawFile, rawArguments, rawOptions) => {
  const { command, escapedCommand, startTime, verboseInfo } = handleCommand(rawFile, rawArguments, rawOptions);
  const syncOptions = normalizeSyncOptions(rawOptions);
  const { file, commandArguments, options } = normalizeOptions(rawFile, rawArguments, syncOptions);
  validateSyncOptions(options);
  const fileDescriptors = handleStdioSync(options, verboseInfo);
  return {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors
  };
};
var normalizeSyncOptions = (options) => options.node && !options.ipc ? { ...options, ipc: false } : options;
var validateSyncOptions = ({ ipc, ipcInput, detached, cancelSignal }) => {
  if (ipcInput) {
    throwInvalidSyncOption("ipcInput");
  }
  if (ipc) {
    throwInvalidSyncOption("ipc: true");
  }
  if (detached) {
    throwInvalidSyncOption("detached: true");
  }
  if (cancelSignal) {
    throwInvalidSyncOption("cancelSignal");
  }
};
var throwInvalidSyncOption = (value) => {
  throw new TypeError(`The "${value}" option cannot be used with synchronous methods.`);
};
var spawnSubprocessSync = ({ file, commandArguments, options, command, escapedCommand, verboseInfo, fileDescriptors, startTime }) => {
  const syncResult = runSubprocessSync({
    file,
    commandArguments,
    options,
    command,
    escapedCommand,
    fileDescriptors,
    startTime
  });
  if (syncResult.failed) {
    return syncResult;
  }
  const { resultError, exitCode, signal, timedOut, isMaxBuffer } = getExitResultSync(syncResult, options);
  const { output, error = resultError } = transformOutputSync({
    fileDescriptors,
    syncResult,
    options,
    isMaxBuffer,
    verboseInfo
  });
  const stdio = output.map((stdioOutput, fdNumber) => stripNewline(stdioOutput, options, fdNumber));
  const all = stripNewline(getAllSync(output, options), options, "all");
  return getSyncResult({
    error,
    exitCode,
    signal,
    timedOut,
    isMaxBuffer,
    stdio,
    all,
    options,
    command,
    escapedCommand,
    startTime
  });
};
var runSubprocessSync = ({ file, commandArguments, options, command, escapedCommand, fileDescriptors, startTime }) => {
  try {
    addInputOptionsSync(fileDescriptors, options);
    const normalizedOptions = normalizeSpawnSyncOptions(options);
    return childProcess2.spawnSync(...concatenateShell(file, commandArguments, normalizedOptions));
  } catch (error) {
    return makeEarlyError({
      error,
      command,
      escapedCommand,
      fileDescriptors,
      options,
      startTime,
      isSync: true
    });
  }
};
var normalizeSpawnSyncOptions = ({ encoding, maxBuffer, ...options }) => ({ ...options, encoding: "buffer", maxBuffer: getMaxBufferSync(maxBuffer) });
var getSyncResult = ({ error, exitCode, signal, timedOut, isMaxBuffer, stdio, all, options, command, escapedCommand, startTime }) => error === void 0 ? makeSuccessResult({
  command,
  escapedCommand,
  stdio,
  all,
  ipcOutput: [],
  options,
  startTime
}) : makeError({
  error,
  command,
  escapedCommand,
  timedOut,
  isCanceled: false,
  isGracefullyCanceled: false,
  isMaxBuffer,
  isForcefullyTerminated: false,
  exitCode,
  signal,
  stdio,
  all,
  ipcOutput: [],
  options,
  startTime,
  isSync: true
});
var getOneMessage = ({ anyProcess, channel, isSubprocess, ipc }, { reference = true, filter } = {}) => {
  validateIpcMethod({
    methodName: "getOneMessage",
    isSubprocess,
    ipc,
    isConnected: isConnected(anyProcess)
  });
  return getOneMessageAsync({
    anyProcess,
    channel,
    isSubprocess,
    filter,
    reference
  });
};
var getOneMessageAsync = async ({ anyProcess, channel, isSubprocess, filter, reference }) => {
  addReference(channel, reference);
  const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
  const controller = new AbortController();
  try {
    return await Promise.race([
      getMessage(ipcEmitter, filter, controller),
      throwOnDisconnect2(ipcEmitter, isSubprocess, controller),
      throwOnStrictError(ipcEmitter, isSubprocess, controller)
    ]);
  } catch (error) {
    disconnect(anyProcess);
    throw error;
  } finally {
    controller.abort();
    removeReference(channel, reference);
  }
};
var getMessage = async (ipcEmitter, filter, { signal }) => {
  if (filter === void 0) {
    const [message] = await events.once(ipcEmitter, "message", { signal });
    return message;
  }
  for await (const [message] of events.on(ipcEmitter, "message", { signal })) {
    if (filter(message)) {
      return message;
    }
  }
};
var throwOnDisconnect2 = async (ipcEmitter, isSubprocess, { signal }) => {
  await events.once(ipcEmitter, "disconnect", { signal });
  throwOnEarlyDisconnect(isSubprocess);
};
var throwOnStrictError = async (ipcEmitter, isSubprocess, { signal }) => {
  const [error] = await events.once(ipcEmitter, "strict:error", { signal });
  throw getStrictResponseError(error, isSubprocess);
};
var getEachMessage = ({ anyProcess, channel, isSubprocess, ipc }, { reference = true } = {}) => loopOnMessages({
  anyProcess,
  channel,
  isSubprocess,
  ipc,
  shouldAwait: !isSubprocess,
  reference
});
var loopOnMessages = ({ anyProcess, channel, isSubprocess, ipc, shouldAwait, reference }) => {
  validateIpcMethod({
    methodName: "getEachMessage",
    isSubprocess,
    ipc,
    isConnected: isConnected(anyProcess)
  });
  addReference(channel, reference);
  const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
  const controller = new AbortController();
  const state = {};
  stopOnDisconnect(anyProcess, ipcEmitter, controller);
  abortOnStrictError({
    ipcEmitter,
    isSubprocess,
    controller,
    state
  });
  return iterateOnMessages({
    anyProcess,
    channel,
    ipcEmitter,
    isSubprocess,
    shouldAwait,
    controller,
    state,
    reference
  });
};
var stopOnDisconnect = async (anyProcess, ipcEmitter, controller) => {
  try {
    await events.once(ipcEmitter, "disconnect", { signal: controller.signal });
    controller.abort();
  } catch {
  }
};
var abortOnStrictError = async ({ ipcEmitter, isSubprocess, controller, state }) => {
  try {
    const [error] = await events.once(ipcEmitter, "strict:error", { signal: controller.signal });
    state.error = getStrictResponseError(error, isSubprocess);
    controller.abort();
  } catch {
  }
};
var iterateOnMessages = async function* ({ anyProcess, channel, ipcEmitter, isSubprocess, shouldAwait, controller, state, reference }) {
  try {
    for await (const [message] of events.on(ipcEmitter, "message", { signal: controller.signal })) {
      throwIfStrictError(state);
      yield message;
    }
  } catch {
    throwIfStrictError(state);
  } finally {
    controller.abort();
    removeReference(channel, reference);
    if (!isSubprocess) {
      disconnect(anyProcess);
    }
    if (shouldAwait) {
      await anyProcess;
    }
  }
};
var throwIfStrictError = ({ error }) => {
  if (error) {
    throw error;
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/methods.js
var addIpcMethods = (subprocess, { ipc }) => {
  Object.assign(subprocess, getIpcMethods(subprocess, false, ipc));
};
var getIpcExport = () => {
  const anyProcess = process22__default.default;
  const isSubprocess = true;
  const ipc = process22__default.default.channel !== void 0;
  return {
    ...getIpcMethods(anyProcess, isSubprocess, ipc),
    getCancelSignal: getCancelSignal.bind(void 0, {
      anyProcess,
      channel: anyProcess.channel,
      isSubprocess,
      ipc
    })
  };
};
var getIpcMethods = (anyProcess, isSubprocess, ipc) => ({
  sendMessage: sendMessage.bind(void 0, {
    anyProcess,
    channel: anyProcess.channel,
    isSubprocess,
    ipc
  }),
  getOneMessage: getOneMessage.bind(void 0, {
    anyProcess,
    channel: anyProcess.channel,
    isSubprocess,
    ipc
  }),
  getEachMessage: getEachMessage.bind(void 0, {
    anyProcess,
    channel: anyProcess.channel,
    isSubprocess,
    ipc
  })
});
var handleEarlyError = ({ error, command, escapedCommand, fileDescriptors, options, startTime, verboseInfo }) => {
  cleanupCustomStreams(fileDescriptors);
  const subprocess = new childProcess2.ChildProcess();
  createDummyStreams(subprocess, fileDescriptors);
  Object.assign(subprocess, { readable, writable, duplex });
  const earlyError = makeEarlyError({
    error,
    command,
    escapedCommand,
    fileDescriptors,
    options,
    startTime,
    isSync: false
  });
  const promise = handleDummyPromise(earlyError, verboseInfo, options);
  return { subprocess, promise };
};
var createDummyStreams = (subprocess, fileDescriptors) => {
  const stdin = createDummyStream();
  const stdout = createDummyStream();
  const stderr = createDummyStream();
  const extraStdio = Array.from({ length: fileDescriptors.length - 3 }, createDummyStream);
  const all = createDummyStream();
  const stdio = [stdin, stdout, stderr, ...extraStdio];
  Object.assign(subprocess, {
    stdin,
    stdout,
    stderr,
    all,
    stdio
  });
};
var createDummyStream = () => {
  const stream$1 = new stream.PassThrough();
  stream$1.end();
  return stream$1;
};
var readable = () => new stream.Readable({ read() {
} });
var writable = () => new stream.Writable({ write() {
} });
var duplex = () => new stream.Duplex({ read() {
}, write() {
} });
var handleDummyPromise = async (error, verboseInfo, options) => handleResult(error, verboseInfo, options);
var handleStdioAsync = (options, verboseInfo) => handleStdio(addPropertiesAsync, options, verboseInfo, false);
var forbiddenIfAsync = ({ type, optionName }) => {
  throw new TypeError(`The \`${optionName}\` option cannot be ${TYPE_TO_MESSAGE[type]}.`);
};
var addProperties2 = {
  fileNumber: forbiddenIfAsync,
  generator: generatorToStream,
  asyncGenerator: generatorToStream,
  nodeStream: ({ value }) => ({ stream: value }),
  webTransform({ value: { transform, writableObjectMode, readableObjectMode } }) {
    const objectMode = writableObjectMode || readableObjectMode;
    const stream$1 = stream.Duplex.fromWeb(transform, { objectMode });
    return { stream: stream$1 };
  },
  duplex: ({ value: { transform } }) => ({ stream: transform }),
  native() {
  }
};
var addPropertiesAsync = {
  input: {
    ...addProperties2,
    fileUrl: ({ value }) => ({ stream: fs.createReadStream(value) }),
    filePath: ({ value: { file } }) => ({ stream: fs.createReadStream(file) }),
    webStream: ({ value }) => ({ stream: stream.Readable.fromWeb(value) }),
    iterable: ({ value }) => ({ stream: stream.Readable.from(value) }),
    asyncIterable: ({ value }) => ({ stream: stream.Readable.from(value) }),
    string: ({ value }) => ({ stream: stream.Readable.from(value) }),
    uint8Array: ({ value }) => ({ stream: stream.Readable.from(buffer.Buffer.from(value)) })
  },
  output: {
    ...addProperties2,
    fileUrl: ({ value }) => ({ stream: fs.createWriteStream(value) }),
    filePath: ({ value: { file, append } }) => ({ stream: fs.createWriteStream(file, append ? { flags: "a" } : {}) }),
    webStream: ({ value }) => ({ stream: stream.Writable.fromWeb(value) }),
    iterable: forbiddenIfAsync,
    asyncIterable: forbiddenIfAsync,
    string: forbiddenIfAsync,
    uint8Array: forbiddenIfAsync
  }
};
function mergeStreams(streams) {
  if (!Array.isArray(streams)) {
    throw new TypeError(`Expected an array, got \`${typeof streams}\`.`);
  }
  for (const stream of streams) {
    validateStream(stream);
  }
  const objectMode = streams.some(({ readableObjectMode }) => readableObjectMode);
  const highWaterMark = getHighWaterMark(streams, objectMode);
  const passThroughStream = new MergedStream({
    objectMode,
    writableHighWaterMark: highWaterMark,
    readableHighWaterMark: highWaterMark
  });
  for (const stream of streams) {
    passThroughStream.add(stream);
  }
  return passThroughStream;
}
var getHighWaterMark = (streams, objectMode) => {
  if (streams.length === 0) {
    return stream.getDefaultHighWaterMark(objectMode);
  }
  const highWaterMarks = streams.filter(({ readableObjectMode }) => readableObjectMode === objectMode).map(({ readableHighWaterMark }) => readableHighWaterMark);
  return Math.max(...highWaterMarks);
};
var MergedStream = class extends stream.PassThrough {
  #streams = /* @__PURE__ */ new Set([]);
  #ended = /* @__PURE__ */ new Set([]);
  #aborted = /* @__PURE__ */ new Set([]);
  #onFinished;
  #unpipeEvent = Symbol("unpipe");
  #streamPromises = /* @__PURE__ */ new WeakMap();
  add(stream) {
    validateStream(stream);
    if (this.#streams.has(stream)) {
      return;
    }
    this.#streams.add(stream);
    this.#onFinished ??= onMergedStreamFinished(this, this.#streams, this.#unpipeEvent);
    const streamPromise = endWhenStreamsDone({
      passThroughStream: this,
      stream,
      streams: this.#streams,
      ended: this.#ended,
      aborted: this.#aborted,
      onFinished: this.#onFinished,
      unpipeEvent: this.#unpipeEvent
    });
    this.#streamPromises.set(stream, streamPromise);
    stream.pipe(this, { end: false });
  }
  async remove(stream) {
    validateStream(stream);
    if (!this.#streams.has(stream)) {
      return false;
    }
    const streamPromise = this.#streamPromises.get(stream);
    if (streamPromise === void 0) {
      return false;
    }
    this.#streamPromises.delete(stream);
    stream.unpipe(this);
    await streamPromise;
    return true;
  }
};
var onMergedStreamFinished = async (passThroughStream, streams, unpipeEvent) => {
  updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_COUNT);
  const controller = new AbortController();
  try {
    await Promise.race([
      onMergedStreamEnd(passThroughStream, controller),
      onInputStreamsUnpipe(passThroughStream, streams, unpipeEvent, controller)
    ]);
  } finally {
    controller.abort();
    updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_COUNT);
  }
};
var onMergedStreamEnd = async (passThroughStream, { signal }) => {
  try {
    await promises.finished(passThroughStream, { signal, cleanup: true });
  } catch (error) {
    errorOrAbortStream(passThroughStream, error);
    throw error;
  }
};
var onInputStreamsUnpipe = async (passThroughStream, streams, unpipeEvent, { signal }) => {
  for await (const [unpipedStream] of events.on(passThroughStream, "unpipe", { signal })) {
    if (streams.has(unpipedStream)) {
      unpipedStream.emit(unpipeEvent);
    }
  }
};
var validateStream = (stream) => {
  if (typeof stream?.pipe !== "function") {
    throw new TypeError(`Expected a readable stream, got: \`${typeof stream}\`.`);
  }
};
var endWhenStreamsDone = async ({ passThroughStream, stream, streams, ended, aborted: aborted2, onFinished, unpipeEvent }) => {
  updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_PER_STREAM);
  const controller = new AbortController();
  try {
    await Promise.race([
      afterMergedStreamFinished(onFinished, stream, controller),
      onInputStreamEnd({
        passThroughStream,
        stream,
        streams,
        ended,
        aborted: aborted2,
        controller
      }),
      onInputStreamUnpipe({
        stream,
        streams,
        ended,
        aborted: aborted2,
        unpipeEvent,
        controller
      })
    ]);
  } finally {
    controller.abort();
    updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_PER_STREAM);
  }
  if (streams.size > 0 && streams.size === ended.size + aborted2.size) {
    if (ended.size === 0 && aborted2.size > 0) {
      abortStream(passThroughStream);
    } else {
      endStream(passThroughStream);
    }
  }
};
var afterMergedStreamFinished = async (onFinished, stream, { signal }) => {
  try {
    await onFinished;
    if (!signal.aborted) {
      abortStream(stream);
    }
  } catch (error) {
    if (!signal.aborted) {
      errorOrAbortStream(stream, error);
    }
  }
};
var onInputStreamEnd = async ({ passThroughStream, stream, streams, ended, aborted: aborted2, controller: { signal } }) => {
  try {
    await promises.finished(stream, {
      signal,
      cleanup: true,
      readable: true,
      writable: false
    });
    if (streams.has(stream)) {
      ended.add(stream);
    }
  } catch (error) {
    if (signal.aborted || !streams.has(stream)) {
      return;
    }
    if (isAbortError(error)) {
      aborted2.add(stream);
    } else {
      errorStream(passThroughStream, error);
    }
  }
};
var onInputStreamUnpipe = async ({ stream, streams, ended, aborted: aborted2, unpipeEvent, controller: { signal } }) => {
  await events.once(stream, unpipeEvent, { signal });
  if (!stream.readable) {
    return events.once(signal, "abort", { signal });
  }
  streams.delete(stream);
  ended.delete(stream);
  aborted2.delete(stream);
};
var endStream = (stream) => {
  if (stream.writable) {
    stream.end();
  }
};
var errorOrAbortStream = (stream, error) => {
  if (isAbortError(error)) {
    abortStream(stream);
  } else {
    errorStream(stream, error);
  }
};
var isAbortError = (error) => error?.code === "ERR_STREAM_PREMATURE_CLOSE";
var abortStream = (stream) => {
  if (stream.readable || stream.writable) {
    stream.destroy();
  }
};
var errorStream = (stream, error) => {
  if (!stream.destroyed) {
    stream.once("error", noop2);
    stream.destroy(error);
  }
};
var noop2 = () => {
};
var updateMaxListeners = (passThroughStream, increment2) => {
  const maxListeners = passThroughStream.getMaxListeners();
  if (maxListeners !== 0 && maxListeners !== Number.POSITIVE_INFINITY) {
    passThroughStream.setMaxListeners(maxListeners + increment2);
  }
};
var PASSTHROUGH_LISTENERS_COUNT = 2;
var PASSTHROUGH_LISTENERS_PER_STREAM = 1;
var pipeStreams = (source, destination) => {
  source.pipe(destination);
  onSourceFinish(source, destination);
  onDestinationFinish(source, destination);
};
var onSourceFinish = async (source, destination) => {
  if (isStandardStream(source) || isStandardStream(destination)) {
    return;
  }
  try {
    await promises.finished(source, { cleanup: true, readable: true, writable: false });
  } catch {
  }
  endDestinationStream(destination);
};
var endDestinationStream = (destination) => {
  if (destination.writable) {
    destination.end();
  }
};
var onDestinationFinish = async (source, destination) => {
  if (isStandardStream(source) || isStandardStream(destination)) {
    return;
  }
  try {
    await promises.finished(destination, { cleanup: true, readable: false, writable: true });
  } catch {
  }
  abortSourceStream(source);
};
var abortSourceStream = (source) => {
  if (source.readable) {
    source.destroy();
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/output-async.js
var pipeOutputAsync = (subprocess, fileDescriptors, controller) => {
  const pipeGroups = /* @__PURE__ */ new Map();
  for (const [fdNumber, { stdioItems, direction }] of Object.entries(fileDescriptors)) {
    for (const { stream } of stdioItems.filter(({ type }) => TRANSFORM_TYPES.has(type))) {
      pipeTransform(subprocess, stream, direction, fdNumber);
    }
    for (const { stream } of stdioItems.filter(({ type }) => !TRANSFORM_TYPES.has(type))) {
      pipeStdioItem({
        subprocess,
        stream,
        direction,
        fdNumber,
        pipeGroups,
        controller
      });
    }
  }
  for (const [outputStream, inputStreams] of pipeGroups.entries()) {
    const inputStream = inputStreams.length === 1 ? inputStreams[0] : mergeStreams(inputStreams);
    pipeStreams(inputStream, outputStream);
  }
};
var pipeTransform = (subprocess, stream, direction, fdNumber) => {
  if (direction === "output") {
    pipeStreams(subprocess.stdio[fdNumber], stream);
  } else {
    pipeStreams(stream, subprocess.stdio[fdNumber]);
  }
  const streamProperty = SUBPROCESS_STREAM_PROPERTIES[fdNumber];
  if (streamProperty !== void 0) {
    subprocess[streamProperty] = stream;
  }
  subprocess.stdio[fdNumber] = stream;
};
var SUBPROCESS_STREAM_PROPERTIES = ["stdin", "stdout", "stderr"];
var pipeStdioItem = ({ subprocess, stream, direction, fdNumber, pipeGroups, controller }) => {
  if (stream === void 0) {
    return;
  }
  setStandardStreamMaxListeners(stream, controller);
  const [inputStream, outputStream] = direction === "output" ? [stream, subprocess.stdio[fdNumber]] : [subprocess.stdio[fdNumber], stream];
  const outputStreams = pipeGroups.get(inputStream) ?? [];
  pipeGroups.set(inputStream, [...outputStreams, outputStream]);
};
var setStandardStreamMaxListeners = (stream, { signal }) => {
  if (isStandardStream(stream)) {
    incrementMaxListeners(stream, MAX_LISTENERS_INCREMENT, signal);
  }
};
var MAX_LISTENERS_INCREMENT = 2;

// ../../node_modules/.pnpm/signal-exit@4.1.0/node_modules/signal-exit/dist/mjs/signals.js
var signals = [];
signals.push("SIGHUP", "SIGINT", "SIGTERM");
if (process.platform !== "win32") {
  signals.push(
    "SIGALRM",
    "SIGABRT",
    "SIGVTALRM",
    "SIGXCPU",
    "SIGXFSZ",
    "SIGUSR2",
    "SIGTRAP",
    "SIGSYS",
    "SIGQUIT",
    "SIGIOT"
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
  );
}
if (process.platform === "linux") {
  signals.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
}

// ../../node_modules/.pnpm/signal-exit@4.1.0/node_modules/signal-exit/dist/mjs/index.js
var processOk = (process10) => !!process10 && typeof process10 === "object" && typeof process10.removeListener === "function" && typeof process10.emit === "function" && typeof process10.reallyExit === "function" && typeof process10.listeners === "function" && typeof process10.kill === "function" && typeof process10.pid === "number" && typeof process10.on === "function";
var kExitEmitter = Symbol.for("signal-exit emitter");
var global2 = globalThis;
var ObjectDefineProperty = Object.defineProperty.bind(Object);
var Emitter = class {
  emitted = {
    afterExit: false,
    exit: false
  };
  listeners = {
    afterExit: [],
    exit: []
  };
  count = 0;
  id = Math.random();
  constructor() {
    if (global2[kExitEmitter]) {
      return global2[kExitEmitter];
    }
    ObjectDefineProperty(global2, kExitEmitter, {
      value: this,
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
  on(ev, fn) {
    this.listeners[ev].push(fn);
  }
  removeListener(ev, fn) {
    const list = this.listeners[ev];
    const i2 = list.indexOf(fn);
    if (i2 === -1) {
      return;
    }
    if (i2 === 0 && list.length === 1) {
      list.length = 0;
    } else {
      list.splice(i2, 1);
    }
  }
  emit(ev, code, signal) {
    if (this.emitted[ev]) {
      return false;
    }
    this.emitted[ev] = true;
    let ret = false;
    for (const fn of this.listeners[ev]) {
      ret = fn(code, signal) === true || ret;
    }
    if (ev === "exit") {
      ret = this.emit("afterExit", code, signal) || ret;
    }
    return ret;
  }
};
var SignalExitBase = class {
};
var signalExitWrap = (handler) => {
  return {
    onExit(cb, opts) {
      return handler.onExit(cb, opts);
    },
    load() {
      return handler.load();
    },
    unload() {
      return handler.unload();
    }
  };
};
var SignalExitFallback = class extends SignalExitBase {
  onExit() {
    return () => {
    };
  }
  load() {
  }
  unload() {
  }
};
var SignalExit = class extends SignalExitBase {
  // "SIGHUP" throws an `ENOSYS` error on Windows,
  // so use a supported signal instead
  /* c8 ignore start */
  #hupSig = process9.platform === "win32" ? "SIGINT" : "SIGHUP";
  /* c8 ignore stop */
  #emitter = new Emitter();
  #process;
  #originalProcessEmit;
  #originalProcessReallyExit;
  #sigListeners = {};
  #loaded = false;
  constructor(process10) {
    super();
    this.#process = process10;
    this.#sigListeners = {};
    for (const sig of signals) {
      this.#sigListeners[sig] = () => {
        const listeners = this.#process.listeners(sig);
        let { count: count2 } = this.#emitter;
        const p = process10;
        if (typeof p.__signal_exit_emitter__ === "object" && typeof p.__signal_exit_emitter__.count === "number") {
          count2 += p.__signal_exit_emitter__.count;
        }
        if (listeners.length === count2) {
          this.unload();
          const ret = this.#emitter.emit("exit", null, sig);
          const s = sig === "SIGHUP" ? this.#hupSig : sig;
          if (!ret)
            process10.kill(process10.pid, s);
        }
      };
    }
    this.#originalProcessReallyExit = process10.reallyExit;
    this.#originalProcessEmit = process10.emit;
  }
  onExit(cb, opts) {
    if (!processOk(this.#process)) {
      return () => {
      };
    }
    if (this.#loaded === false) {
      this.load();
    }
    const ev = opts?.alwaysLast ? "afterExit" : "exit";
    this.#emitter.on(ev, cb);
    return () => {
      this.#emitter.removeListener(ev, cb);
      if (this.#emitter.listeners["exit"].length === 0 && this.#emitter.listeners["afterExit"].length === 0) {
        this.unload();
      }
    };
  }
  load() {
    if (this.#loaded) {
      return;
    }
    this.#loaded = true;
    this.#emitter.count += 1;
    for (const sig of signals) {
      try {
        const fn = this.#sigListeners[sig];
        if (fn)
          this.#process.on(sig, fn);
      } catch (_) {
      }
    }
    this.#process.emit = (ev, ...a2) => {
      return this.#processEmit(ev, ...a2);
    };
    this.#process.reallyExit = (code) => {
      return this.#processReallyExit(code);
    };
  }
  unload() {
    if (!this.#loaded) {
      return;
    }
    this.#loaded = false;
    signals.forEach((sig) => {
      const listener = this.#sigListeners[sig];
      if (!listener) {
        throw new Error("Listener not defined for signal: " + sig);
      }
      try {
        this.#process.removeListener(sig, listener);
      } catch (_) {
      }
    });
    this.#process.emit = this.#originalProcessEmit;
    this.#process.reallyExit = this.#originalProcessReallyExit;
    this.#emitter.count -= 1;
  }
  #processReallyExit(code) {
    if (!processOk(this.#process)) {
      return 0;
    }
    this.#process.exitCode = code || 0;
    this.#emitter.emit("exit", this.#process.exitCode, null);
    return this.#originalProcessReallyExit.call(this.#process, this.#process.exitCode);
  }
  #processEmit(ev, ...args) {
    const og = this.#originalProcessEmit;
    if (ev === "exit" && processOk(this.#process)) {
      if (typeof args[0] === "number") {
        this.#process.exitCode = args[0];
      }
      const ret = og.call(this.#process, ev, ...args);
      this.#emitter.emit("exit", this.#process.exitCode, null);
      return ret;
    } else {
      return og.call(this.#process, ev, ...args);
    }
  }
};
var process9 = globalThis.process;
var {
  /**
   * Called when the process is exiting, whether via signal, explicit
   * exit, or running out of stuff to do.
   *
   * If the global process object is not suitable for instrumentation,
   * then this will be a no-op.
   *
   * Returns a function that may be used to unload signal-exit.
   */
  onExit} = signalExitWrap(processOk(process9) ? new SignalExit(process9) : new SignalExitFallback());

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/cleanup.js
var cleanupOnExit = (subprocess, { cleanup, detached }, { signal }) => {
  if (!cleanup || detached) {
    return;
  }
  const removeExitHandler = onExit(() => {
    subprocess.kill();
  });
  events.addAbortListener(signal, () => {
    removeExitHandler();
  });
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/pipe-arguments.js
var normalizePipeArguments = ({ source, sourcePromise, boundOptions, createNested }, ...pipeArguments) => {
  const startTime = getStartTime();
  const {
    destination,
    destinationStream,
    destinationError,
    from,
    unpipeSignal
  } = getDestinationStream(boundOptions, createNested, pipeArguments);
  const { sourceStream, sourceError } = getSourceStream(source, from);
  const { options: sourceOptions, fileDescriptors } = SUBPROCESS_OPTIONS.get(source);
  return {
    sourcePromise,
    sourceStream,
    sourceOptions,
    sourceError,
    destination,
    destinationStream,
    destinationError,
    unpipeSignal,
    fileDescriptors,
    startTime
  };
};
var getDestinationStream = (boundOptions, createNested, pipeArguments) => {
  try {
    const {
      destination,
      pipeOptions: { from, to, unpipeSignal } = {}
    } = getDestination(boundOptions, createNested, ...pipeArguments);
    const destinationStream = getToStream(destination, to);
    return {
      destination,
      destinationStream,
      from,
      unpipeSignal
    };
  } catch (error) {
    return { destinationError: error };
  }
};
var getDestination = (boundOptions, createNested, firstArgument, ...pipeArguments) => {
  if (Array.isArray(firstArgument)) {
    const destination = createNested(mapDestinationArguments, boundOptions)(firstArgument, ...pipeArguments);
    return { destination, pipeOptions: boundOptions };
  }
  if (typeof firstArgument === "string" || firstArgument instanceof URL || isDenoExecPath(firstArgument)) {
    if (Object.keys(boundOptions).length > 0) {
      throw new TypeError('Please use .pipe("file", ..., options) or .pipe(execa("file", ..., options)) instead of .pipe(options)("file", ...).');
    }
    const [rawFile, rawArguments, rawOptions] = normalizeParameters(firstArgument, ...pipeArguments);
    const destination = createNested(mapDestinationArguments)(rawFile, rawArguments, rawOptions);
    return { destination, pipeOptions: rawOptions };
  }
  if (SUBPROCESS_OPTIONS.has(firstArgument)) {
    if (Object.keys(boundOptions).length > 0) {
      throw new TypeError("Please use .pipe(options)`command` or .pipe($(options)`command`) instead of .pipe(options)($`command`).");
    }
    return { destination: firstArgument, pipeOptions: pipeArguments[0] };
  }
  throw new TypeError(`The first argument must be a template string, an options object, or an Execa subprocess: ${firstArgument}`);
};
var mapDestinationArguments = ({ options }) => ({ options: { ...options, stdin: "pipe", piped: true } });
var getSourceStream = (source, from) => {
  try {
    const sourceStream = getFromStream(source, from);
    return { sourceStream };
  } catch (error) {
    return { sourceError: error };
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/throw.js
var handlePipeArgumentsError = ({
  sourceStream,
  sourceError,
  destinationStream,
  destinationError,
  fileDescriptors,
  sourceOptions,
  startTime
}) => {
  const error = getPipeArgumentsError({
    sourceStream,
    sourceError,
    destinationStream,
    destinationError
  });
  if (error !== void 0) {
    throw createNonCommandError({
      error,
      fileDescriptors,
      sourceOptions,
      startTime
    });
  }
};
var getPipeArgumentsError = ({ sourceStream, sourceError, destinationStream, destinationError }) => {
  if (sourceError !== void 0 && destinationError !== void 0) {
    return destinationError;
  }
  if (destinationError !== void 0) {
    abortSourceStream(sourceStream);
    return destinationError;
  }
  if (sourceError !== void 0) {
    endDestinationStream(destinationStream);
    return sourceError;
  }
};
var createNonCommandError = ({ error, fileDescriptors, sourceOptions, startTime }) => makeEarlyError({
  error,
  command: PIPE_COMMAND_MESSAGE,
  escapedCommand: PIPE_COMMAND_MESSAGE,
  fileDescriptors,
  options: sourceOptions,
  startTime,
  isSync: false
});
var PIPE_COMMAND_MESSAGE = "source.pipe(destination)";

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/sequence.js
var waitForBothSubprocesses = async (subprocessPromises) => {
  const [
    { status: sourceStatus, reason: sourceReason, value: sourceResult = sourceReason },
    { status: destinationStatus, reason: destinationReason, value: destinationResult = destinationReason }
  ] = await subprocessPromises;
  if (!destinationResult.pipedFrom.includes(sourceResult)) {
    destinationResult.pipedFrom.push(sourceResult);
  }
  if (destinationStatus === "rejected") {
    throw destinationResult;
  }
  if (sourceStatus === "rejected") {
    throw sourceResult;
  }
  return destinationResult;
};
var pipeSubprocessStream = (sourceStream, destinationStream, maxListenersController) => {
  const mergedStream = MERGED_STREAMS.has(destinationStream) ? pipeMoreSubprocessStream(sourceStream, destinationStream) : pipeFirstSubprocessStream(sourceStream, destinationStream);
  incrementMaxListeners(sourceStream, SOURCE_LISTENERS_PER_PIPE, maxListenersController.signal);
  incrementMaxListeners(destinationStream, DESTINATION_LISTENERS_PER_PIPE, maxListenersController.signal);
  cleanupMergedStreamsMap(destinationStream);
  return mergedStream;
};
var pipeFirstSubprocessStream = (sourceStream, destinationStream) => {
  const mergedStream = mergeStreams([sourceStream]);
  pipeStreams(mergedStream, destinationStream);
  MERGED_STREAMS.set(destinationStream, mergedStream);
  return mergedStream;
};
var pipeMoreSubprocessStream = (sourceStream, destinationStream) => {
  const mergedStream = MERGED_STREAMS.get(destinationStream);
  mergedStream.add(sourceStream);
  return mergedStream;
};
var cleanupMergedStreamsMap = async (destinationStream) => {
  try {
    await promises.finished(destinationStream, { cleanup: true, readable: false, writable: true });
  } catch {
  }
  MERGED_STREAMS.delete(destinationStream);
};
var MERGED_STREAMS = /* @__PURE__ */ new WeakMap();
var SOURCE_LISTENERS_PER_PIPE = 2;
var DESTINATION_LISTENERS_PER_PIPE = 1;
var unpipeOnAbort = (unpipeSignal, unpipeContext) => unpipeSignal === void 0 ? [] : [unpipeOnSignalAbort(unpipeSignal, unpipeContext)];
var unpipeOnSignalAbort = async (unpipeSignal, { sourceStream, mergedStream, fileDescriptors, sourceOptions, startTime }) => {
  await util.aborted(unpipeSignal, sourceStream);
  await mergedStream.remove(sourceStream);
  const error = new Error("Pipe canceled by `unpipeSignal` option.");
  throw createNonCommandError({
    error,
    fileDescriptors,
    sourceOptions,
    startTime
  });
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/setup.js
var pipeToSubprocess = (sourceInfo, ...pipeArguments) => {
  if (isPlainObject(pipeArguments[0])) {
    return pipeToSubprocess.bind(void 0, {
      ...sourceInfo,
      boundOptions: { ...sourceInfo.boundOptions, ...pipeArguments[0] }
    });
  }
  const { destination, ...normalizedInfo } = normalizePipeArguments(sourceInfo, ...pipeArguments);
  const promise = handlePipePromise({ ...normalizedInfo, destination });
  promise.pipe = pipeToSubprocess.bind(void 0, {
    ...sourceInfo,
    source: destination,
    sourcePromise: promise,
    boundOptions: {}
  });
  return promise;
};
var handlePipePromise = async ({
  sourcePromise,
  sourceStream,
  sourceOptions,
  sourceError,
  destination,
  destinationStream,
  destinationError,
  unpipeSignal,
  fileDescriptors,
  startTime
}) => {
  const subprocessPromises = getSubprocessPromises(sourcePromise, destination);
  handlePipeArgumentsError({
    sourceStream,
    sourceError,
    destinationStream,
    destinationError,
    fileDescriptors,
    sourceOptions,
    startTime
  });
  const maxListenersController = new AbortController();
  try {
    const mergedStream = pipeSubprocessStream(sourceStream, destinationStream, maxListenersController);
    return await Promise.race([
      waitForBothSubprocesses(subprocessPromises),
      ...unpipeOnAbort(unpipeSignal, {
        sourceStream,
        mergedStream,
        sourceOptions,
        fileDescriptors,
        startTime
      })
    ]);
  } finally {
    maxListenersController.abort();
  }
};
var getSubprocessPromises = (sourcePromise, destination) => Promise.allSettled([sourcePromise, destination]);
var iterateOnSubprocessStream = ({ subprocessStdout, subprocess, binary, shouldEncode, encoding, preserveNewlines }) => {
  const controller = new AbortController();
  stopReadingOnExit(subprocess, controller);
  return iterateOnStream({
    stream: subprocessStdout,
    controller,
    binary,
    shouldEncode: !subprocessStdout.readableObjectMode && shouldEncode,
    encoding,
    shouldSplit: !subprocessStdout.readableObjectMode,
    preserveNewlines
  });
};
var stopReadingOnExit = async (subprocess, controller) => {
  try {
    await subprocess;
  } catch {
  } finally {
    controller.abort();
  }
};
var iterateForResult = ({ stream, onStreamEnd, lines, encoding, stripFinalNewline: stripFinalNewline3, allMixed }) => {
  const controller = new AbortController();
  stopReadingOnStreamEnd(onStreamEnd, controller, stream);
  const objectMode = stream.readableObjectMode && !allMixed;
  return iterateOnStream({
    stream,
    controller,
    binary: encoding === "buffer",
    shouldEncode: !objectMode,
    encoding,
    shouldSplit: !objectMode && lines,
    preserveNewlines: !stripFinalNewline3
  });
};
var stopReadingOnStreamEnd = async (onStreamEnd, controller, stream) => {
  try {
    await onStreamEnd;
  } catch {
    stream.destroy();
  } finally {
    controller.abort();
  }
};
var iterateOnStream = ({ stream, controller, binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) => {
  const onStdoutChunk = events.on(stream, "data", {
    signal: controller.signal,
    highWaterMark: HIGH_WATER_MARK,
    // Backward compatibility with older name for this option
    // See https://github.com/nodejs/node/pull/52080#discussion_r1525227861
    // @todo Remove after removing support for Node 21
    highWatermark: HIGH_WATER_MARK
  });
  return iterateOnData({
    onStdoutChunk,
    controller,
    binary,
    shouldEncode,
    encoding,
    shouldSplit,
    preserveNewlines
  });
};
var DEFAULT_OBJECT_HIGH_WATER_MARK = stream.getDefaultHighWaterMark(true);
var HIGH_WATER_MARK = DEFAULT_OBJECT_HIGH_WATER_MARK;
var iterateOnData = async function* ({ onStdoutChunk, controller, binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) {
  const generators = getGenerators({
    binary,
    shouldEncode,
    encoding,
    shouldSplit,
    preserveNewlines
  });
  try {
    for await (const [chunk] of onStdoutChunk) {
      yield* transformChunkSync(chunk, generators, 0);
    }
  } catch (error) {
    if (!controller.signal.aborted) {
      throw error;
    }
  } finally {
    yield* finalChunksSync(generators);
  }
};
var getGenerators = ({ binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) => [
  getEncodingTransformGenerator(binary, encoding, !shouldEncode),
  getSplitLinesGenerator(binary, preserveNewlines, !shouldSplit, {})
].filter(Boolean);

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/contents.js
var getStreamOutput = async ({ stream, onStreamEnd, fdNumber, encoding, buffer, maxBuffer, lines, allMixed, stripFinalNewline: stripFinalNewline3, verboseInfo, streamInfo }) => {
  const logPromise = logOutputAsync({
    stream,
    onStreamEnd,
    fdNumber,
    encoding,
    allMixed,
    verboseInfo,
    streamInfo
  });
  if (!buffer) {
    await Promise.all([resumeStream(stream), logPromise]);
    return;
  }
  const stripFinalNewlineValue = getStripFinalNewline(stripFinalNewline3, fdNumber);
  const iterable = iterateForResult({
    stream,
    onStreamEnd,
    lines,
    encoding,
    stripFinalNewline: stripFinalNewlineValue,
    allMixed
  });
  const [output] = await Promise.all([
    getStreamContents2({
      stream,
      iterable,
      fdNumber,
      encoding,
      maxBuffer,
      lines
    }),
    logPromise
  ]);
  return output;
};
var logOutputAsync = async ({ stream, onStreamEnd, fdNumber, encoding, allMixed, verboseInfo, streamInfo: { fileDescriptors } }) => {
  if (!shouldLogOutput({
    stdioItems: fileDescriptors[fdNumber]?.stdioItems,
    encoding,
    verboseInfo,
    fdNumber
  })) {
    return;
  }
  const linesIterable = iterateForResult({
    stream,
    onStreamEnd,
    lines: true,
    encoding,
    stripFinalNewline: true,
    allMixed
  });
  await logLines(linesIterable, stream, fdNumber, verboseInfo);
};
var resumeStream = async (stream) => {
  await promises$1.setImmediate();
  if (stream.readableFlowing === null) {
    stream.resume();
  }
};
var getStreamContents2 = async ({ stream, stream: { readableObjectMode }, iterable, fdNumber, encoding, maxBuffer, lines }) => {
  try {
    if (readableObjectMode || lines) {
      return await getStreamAsArray(iterable, { maxBuffer });
    }
    if (encoding === "buffer") {
      return new Uint8Array(await getStreamAsArrayBuffer(iterable, { maxBuffer }));
    }
    return await getStreamAsString(iterable, { maxBuffer });
  } catch (error) {
    return handleBufferedData(handleMaxBuffer({
      error,
      stream,
      readableObjectMode,
      lines,
      encoding,
      fdNumber
    }));
  }
};
var getBufferedData = async (streamPromise) => {
  try {
    return await streamPromise;
  } catch (error) {
    return handleBufferedData(error);
  }
};
var handleBufferedData = ({ bufferedData }) => isArrayBuffer(bufferedData) ? new Uint8Array(bufferedData) : bufferedData;
var waitForStream = async (stream, fdNumber, streamInfo, { isSameDirection, stopOnExit = false } = {}) => {
  const state = handleStdinDestroy(stream, streamInfo);
  const abortController = new AbortController();
  try {
    await Promise.race([
      ...stopOnExit ? [streamInfo.exitPromise] : [],
      promises.finished(stream, { cleanup: true, signal: abortController.signal })
    ]);
  } catch (error) {
    if (!state.stdinCleanedUp) {
      handleStreamError(error, fdNumber, streamInfo, isSameDirection);
    }
  } finally {
    abortController.abort();
  }
};
var handleStdinDestroy = (stream, { originalStreams: [originalStdin], subprocess }) => {
  const state = { stdinCleanedUp: false };
  if (stream === originalStdin) {
    spyOnStdinDestroy(stream, subprocess, state);
  }
  return state;
};
var spyOnStdinDestroy = (subprocessStdin, subprocess, state) => {
  const { _destroy } = subprocessStdin;
  subprocessStdin._destroy = (...destroyArguments) => {
    setStdinCleanedUp(subprocess, state);
    _destroy.call(subprocessStdin, ...destroyArguments);
  };
};
var setStdinCleanedUp = ({ exitCode, signalCode }, state) => {
  if (exitCode !== null || signalCode !== null) {
    state.stdinCleanedUp = true;
  }
};
var handleStreamError = (error, fdNumber, streamInfo, isSameDirection) => {
  if (!shouldIgnoreStreamError(error, fdNumber, streamInfo, isSameDirection)) {
    throw error;
  }
};
var shouldIgnoreStreamError = (error, fdNumber, streamInfo, isSameDirection = true) => {
  if (streamInfo.propagating) {
    return isStreamEpipe(error) || isStreamAbort(error);
  }
  streamInfo.propagating = true;
  return isInputFileDescriptor(streamInfo, fdNumber) === isSameDirection ? isStreamEpipe(error) : isStreamAbort(error);
};
var isInputFileDescriptor = ({ fileDescriptors }, fdNumber) => fdNumber !== "all" && fileDescriptors[fdNumber].direction === "input";
var isStreamAbort = (error) => error?.code === "ERR_STREAM_PREMATURE_CLOSE";
var isStreamEpipe = (error) => error?.code === "EPIPE";

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/stdio.js
var waitForStdioStreams = ({ subprocess, encoding, buffer, maxBuffer, lines, stripFinalNewline: stripFinalNewline3, verboseInfo, streamInfo }) => subprocess.stdio.map((stream, fdNumber) => waitForSubprocessStream({
  stream,
  fdNumber,
  encoding,
  buffer: buffer[fdNumber],
  maxBuffer: maxBuffer[fdNumber],
  lines: lines[fdNumber],
  allMixed: false,
  stripFinalNewline: stripFinalNewline3,
  verboseInfo,
  streamInfo
}));
var waitForSubprocessStream = async ({ stream, fdNumber, encoding, buffer, maxBuffer, lines, allMixed, stripFinalNewline: stripFinalNewline3, verboseInfo, streamInfo }) => {
  if (!stream) {
    return;
  }
  const onStreamEnd = waitForStream(stream, fdNumber, streamInfo);
  if (isInputFileDescriptor(streamInfo, fdNumber)) {
    await onStreamEnd;
    return;
  }
  const [output] = await Promise.all([
    getStreamOutput({
      stream,
      onStreamEnd,
      fdNumber,
      encoding,
      buffer,
      maxBuffer,
      lines,
      allMixed,
      stripFinalNewline: stripFinalNewline3,
      verboseInfo,
      streamInfo
    }),
    onStreamEnd
  ]);
  return output;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/all-async.js
var makeAllStream = ({ stdout, stderr }, { all }) => all && (stdout || stderr) ? mergeStreams([stdout, stderr].filter(Boolean)) : void 0;
var waitForAllStream = ({ subprocess, encoding, buffer, maxBuffer, lines, stripFinalNewline: stripFinalNewline3, verboseInfo, streamInfo }) => waitForSubprocessStream({
  ...getAllStream(subprocess, buffer),
  fdNumber: "all",
  encoding,
  maxBuffer: maxBuffer[1] + maxBuffer[2],
  lines: lines[1] || lines[2],
  allMixed: getAllMixed(subprocess),
  stripFinalNewline: stripFinalNewline3,
  verboseInfo,
  streamInfo
});
var getAllStream = ({ stdout, stderr, all }, [, bufferStdout, bufferStderr]) => {
  const buffer = bufferStdout || bufferStderr;
  if (!buffer) {
    return { stream: all, buffer };
  }
  if (!bufferStdout) {
    return { stream: stderr, buffer };
  }
  if (!bufferStderr) {
    return { stream: stdout, buffer };
  }
  return { stream: all, buffer };
};
var getAllMixed = ({ all, stdout, stderr }) => all && stdout && stderr && stdout.readableObjectMode !== stderr.readableObjectMode;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/ipc.js
var shouldLogIpc = (verboseInfo) => isFullVerbose(verboseInfo, "ipc");
var logIpcOutput = (message, verboseInfo) => {
  const verboseMessage = serializeVerboseMessage(message);
  verboseLog({
    type: "ipc",
    verboseMessage,
    fdNumber: "ipc",
    verboseInfo
  });
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/buffer-messages.js
var waitForIpcOutput = async ({
  subprocess,
  buffer: bufferArray,
  maxBuffer: maxBufferArray,
  ipc,
  ipcOutput,
  verboseInfo
}) => {
  if (!ipc) {
    return ipcOutput;
  }
  const isVerbose2 = shouldLogIpc(verboseInfo);
  const buffer = getFdSpecificValue(bufferArray, "ipc");
  const maxBuffer = getFdSpecificValue(maxBufferArray, "ipc");
  for await (const message of loopOnMessages({
    anyProcess: subprocess,
    channel: subprocess.channel,
    isSubprocess: false,
    ipc,
    shouldAwait: false,
    reference: true
  })) {
    if (buffer) {
      checkIpcMaxBuffer(subprocess, ipcOutput, maxBuffer);
      ipcOutput.push(message);
    }
    if (isVerbose2) {
      logIpcOutput(message, verboseInfo);
    }
  }
  return ipcOutput;
};
var getBufferedIpcOutput = async (ipcOutputPromise, ipcOutput) => {
  await Promise.allSettled([ipcOutputPromise]);
  return ipcOutput;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/wait-subprocess.js
var waitForSubprocessResult = async ({
  subprocess,
  options: {
    encoding,
    buffer,
    maxBuffer,
    lines,
    timeoutDuration: timeout,
    cancelSignal,
    gracefulCancel,
    forceKillAfterDelay,
    stripFinalNewline: stripFinalNewline3,
    ipc,
    ipcInput
  },
  context,
  verboseInfo,
  fileDescriptors,
  originalStreams,
  onInternalError,
  controller
}) => {
  const exitPromise = waitForExit(subprocess, context);
  const streamInfo = {
    originalStreams,
    fileDescriptors,
    subprocess,
    exitPromise,
    propagating: false
  };
  const stdioPromises = waitForStdioStreams({
    subprocess,
    encoding,
    buffer,
    maxBuffer,
    lines,
    stripFinalNewline: stripFinalNewline3,
    verboseInfo,
    streamInfo
  });
  const allPromise = waitForAllStream({
    subprocess,
    encoding,
    buffer,
    maxBuffer,
    lines,
    stripFinalNewline: stripFinalNewline3,
    verboseInfo,
    streamInfo
  });
  const ipcOutput = [];
  const ipcOutputPromise = waitForIpcOutput({
    subprocess,
    buffer,
    maxBuffer,
    ipc,
    ipcOutput,
    verboseInfo
  });
  const originalPromises = waitForOriginalStreams(originalStreams, subprocess, streamInfo);
  const customStreamsEndPromises = waitForCustomStreamsEnd(fileDescriptors, streamInfo);
  try {
    return await Promise.race([
      Promise.all([
        {},
        waitForSuccessfulExit(exitPromise),
        Promise.all(stdioPromises),
        allPromise,
        ipcOutputPromise,
        sendIpcInput(subprocess, ipcInput),
        ...originalPromises,
        ...customStreamsEndPromises
      ]),
      onInternalError,
      throwOnSubprocessError(subprocess, controller),
      ...throwOnTimeout(subprocess, timeout, context, controller),
      ...throwOnCancel({
        subprocess,
        cancelSignal,
        gracefulCancel,
        context,
        controller
      }),
      ...throwOnGracefulCancel({
        subprocess,
        cancelSignal,
        gracefulCancel,
        forceKillAfterDelay,
        context,
        controller
      })
    ]);
  } catch (error) {
    context.terminationReason ??= "other";
    return Promise.all([
      { error },
      exitPromise,
      Promise.all(stdioPromises.map((stdioPromise) => getBufferedData(stdioPromise))),
      getBufferedData(allPromise),
      getBufferedIpcOutput(ipcOutputPromise, ipcOutput),
      Promise.allSettled(originalPromises),
      Promise.allSettled(customStreamsEndPromises)
    ]);
  }
};
var waitForOriginalStreams = (originalStreams, subprocess, streamInfo) => originalStreams.map((stream, fdNumber) => stream === subprocess.stdio[fdNumber] ? void 0 : waitForStream(stream, fdNumber, streamInfo));
var waitForCustomStreamsEnd = (fileDescriptors, streamInfo) => fileDescriptors.flatMap(({ stdioItems }, fdNumber) => stdioItems.filter(({ value, stream = value }) => isStream(stream, { checkOpen: false }) && !isStandardStream(stream)).map(({ type, value, stream = value }) => waitForStream(stream, fdNumber, streamInfo, {
  isSameDirection: TRANSFORM_TYPES.has(type),
  stopOnExit: type === "native"
})));
var throwOnSubprocessError = async (subprocess, { signal }) => {
  const [error] = await events.once(subprocess, "error", { signal });
  throw error;
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/concurrent.js
var initializeConcurrentStreams = () => ({
  readableDestroy: /* @__PURE__ */ new WeakMap(),
  writableFinal: /* @__PURE__ */ new WeakMap(),
  writableDestroy: /* @__PURE__ */ new WeakMap()
});
var addConcurrentStream = (concurrentStreams, stream, waitName) => {
  const weakMap = concurrentStreams[waitName];
  if (!weakMap.has(stream)) {
    weakMap.set(stream, []);
  }
  const promises = weakMap.get(stream);
  const promise = createDeferred();
  promises.push(promise);
  const resolve = promise.resolve.bind(promise);
  return { resolve, promises };
};
var waitForConcurrentStreams = async ({ resolve, promises }, subprocess) => {
  resolve();
  const [isSubprocessExit] = await Promise.race([
    Promise.allSettled([true, subprocess]),
    Promise.all([false, ...promises])
  ]);
  return !isSubprocessExit;
};
var safeWaitForSubprocessStdin = async (subprocessStdin) => {
  if (subprocessStdin === void 0) {
    return;
  }
  try {
    await waitForSubprocessStdin(subprocessStdin);
  } catch {
  }
};
var safeWaitForSubprocessStdout = async (subprocessStdout) => {
  if (subprocessStdout === void 0) {
    return;
  }
  try {
    await waitForSubprocessStdout(subprocessStdout);
  } catch {
  }
};
var waitForSubprocessStdin = async (subprocessStdin) => {
  await promises.finished(subprocessStdin, { cleanup: true, readable: false, writable: true });
};
var waitForSubprocessStdout = async (subprocessStdout) => {
  await promises.finished(subprocessStdout, { cleanup: true, readable: true, writable: false });
};
var waitForSubprocess = async (subprocess, error) => {
  await subprocess;
  if (error) {
    throw error;
  }
};
var destroyOtherStream = (stream, isOpen, error) => {
  if (error && !isStreamAbort(error)) {
    stream.destroy(error);
  } else if (isOpen) {
    stream.destroy();
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/readable.js
var createReadable = ({ subprocess, concurrentStreams, encoding }, { from, binary: binaryOption = true, preserveNewlines = true } = {}) => {
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const { subprocessStdout, waitReadableDestroy } = getSubprocessStdout(subprocess, from, concurrentStreams);
  const { readableEncoding, readableObjectMode, readableHighWaterMark } = getReadableOptions(subprocessStdout, binary);
  const { read, onStdoutDataDone } = getReadableMethods({
    subprocessStdout,
    subprocess,
    binary,
    encoding,
    preserveNewlines
  });
  const readable2 = new stream.Readable({
    read,
    destroy: util.callbackify(onReadableDestroy.bind(void 0, { subprocessStdout, subprocess, waitReadableDestroy })),
    highWaterMark: readableHighWaterMark,
    objectMode: readableObjectMode,
    encoding: readableEncoding
  });
  onStdoutFinished({
    subprocessStdout,
    onStdoutDataDone,
    readable: readable2,
    subprocess
  });
  return readable2;
};
var getSubprocessStdout = (subprocess, from, concurrentStreams) => {
  const subprocessStdout = getFromStream(subprocess, from);
  const waitReadableDestroy = addConcurrentStream(concurrentStreams, subprocessStdout, "readableDestroy");
  return { subprocessStdout, waitReadableDestroy };
};
var getReadableOptions = ({ readableEncoding, readableObjectMode, readableHighWaterMark }, binary) => binary ? { readableEncoding, readableObjectMode, readableHighWaterMark } : { readableEncoding, readableObjectMode: true, readableHighWaterMark: DEFAULT_OBJECT_HIGH_WATER_MARK };
var getReadableMethods = ({ subprocessStdout, subprocess, binary, encoding, preserveNewlines }) => {
  const onStdoutDataDone = createDeferred();
  const onStdoutData = iterateOnSubprocessStream({
    subprocessStdout,
    subprocess,
    binary,
    shouldEncode: !binary,
    encoding,
    preserveNewlines
  });
  return {
    read() {
      onRead(this, onStdoutData, onStdoutDataDone);
    },
    onStdoutDataDone
  };
};
var onRead = async (readable2, onStdoutData, onStdoutDataDone) => {
  try {
    const { value, done } = await onStdoutData.next();
    if (done) {
      onStdoutDataDone.resolve();
    } else {
      readable2.push(value);
    }
  } catch {
  }
};
var onStdoutFinished = async ({ subprocessStdout, onStdoutDataDone, readable: readable2, subprocess, subprocessStdin }) => {
  try {
    await waitForSubprocessStdout(subprocessStdout);
    await subprocess;
    await safeWaitForSubprocessStdin(subprocessStdin);
    await onStdoutDataDone;
    if (readable2.readable) {
      readable2.push(null);
    }
  } catch (error) {
    await safeWaitForSubprocessStdin(subprocessStdin);
    destroyOtherReadable(readable2, error);
  }
};
var onReadableDestroy = async ({ subprocessStdout, subprocess, waitReadableDestroy }, error) => {
  if (await waitForConcurrentStreams(waitReadableDestroy, subprocess)) {
    destroyOtherReadable(subprocessStdout, error);
    await waitForSubprocess(subprocess, error);
  }
};
var destroyOtherReadable = (stream, error) => {
  destroyOtherStream(stream, stream.readable, error);
};
var createWritable = ({ subprocess, concurrentStreams }, { to } = {}) => {
  const { subprocessStdin, waitWritableFinal, waitWritableDestroy } = getSubprocessStdin(subprocess, to, concurrentStreams);
  const writable2 = new stream.Writable({
    ...getWritableMethods(subprocessStdin, subprocess, waitWritableFinal),
    destroy: util.callbackify(onWritableDestroy.bind(void 0, {
      subprocessStdin,
      subprocess,
      waitWritableFinal,
      waitWritableDestroy
    })),
    highWaterMark: subprocessStdin.writableHighWaterMark,
    objectMode: subprocessStdin.writableObjectMode
  });
  onStdinFinished(subprocessStdin, writable2);
  return writable2;
};
var getSubprocessStdin = (subprocess, to, concurrentStreams) => {
  const subprocessStdin = getToStream(subprocess, to);
  const waitWritableFinal = addConcurrentStream(concurrentStreams, subprocessStdin, "writableFinal");
  const waitWritableDestroy = addConcurrentStream(concurrentStreams, subprocessStdin, "writableDestroy");
  return { subprocessStdin, waitWritableFinal, waitWritableDestroy };
};
var getWritableMethods = (subprocessStdin, subprocess, waitWritableFinal) => ({
  write: onWrite.bind(void 0, subprocessStdin),
  final: util.callbackify(onWritableFinal.bind(void 0, subprocessStdin, subprocess, waitWritableFinal))
});
var onWrite = (subprocessStdin, chunk, encoding, done) => {
  if (subprocessStdin.write(chunk, encoding)) {
    done();
  } else {
    subprocessStdin.once("drain", done);
  }
};
var onWritableFinal = async (subprocessStdin, subprocess, waitWritableFinal) => {
  if (await waitForConcurrentStreams(waitWritableFinal, subprocess)) {
    if (subprocessStdin.writable) {
      subprocessStdin.end();
    }
    await subprocess;
  }
};
var onStdinFinished = async (subprocessStdin, writable2, subprocessStdout) => {
  try {
    await waitForSubprocessStdin(subprocessStdin);
    if (writable2.writable) {
      writable2.end();
    }
  } catch (error) {
    await safeWaitForSubprocessStdout(subprocessStdout);
    destroyOtherWritable(writable2, error);
  }
};
var onWritableDestroy = async ({ subprocessStdin, subprocess, waitWritableFinal, waitWritableDestroy }, error) => {
  await waitForConcurrentStreams(waitWritableFinal, subprocess);
  if (await waitForConcurrentStreams(waitWritableDestroy, subprocess)) {
    destroyOtherWritable(subprocessStdin, error);
    await waitForSubprocess(subprocess, error);
  }
};
var destroyOtherWritable = (stream, error) => {
  destroyOtherStream(stream, stream.writable, error);
};
var createDuplex = ({ subprocess, concurrentStreams, encoding }, { from, to, binary: binaryOption = true, preserveNewlines = true } = {}) => {
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const { subprocessStdout, waitReadableDestroy } = getSubprocessStdout(subprocess, from, concurrentStreams);
  const { subprocessStdin, waitWritableFinal, waitWritableDestroy } = getSubprocessStdin(subprocess, to, concurrentStreams);
  const { readableEncoding, readableObjectMode, readableHighWaterMark } = getReadableOptions(subprocessStdout, binary);
  const { read, onStdoutDataDone } = getReadableMethods({
    subprocessStdout,
    subprocess,
    binary,
    encoding,
    preserveNewlines
  });
  const duplex2 = new stream.Duplex({
    read,
    ...getWritableMethods(subprocessStdin, subprocess, waitWritableFinal),
    destroy: util.callbackify(onDuplexDestroy.bind(void 0, {
      subprocessStdout,
      subprocessStdin,
      subprocess,
      waitReadableDestroy,
      waitWritableFinal,
      waitWritableDestroy
    })),
    readableHighWaterMark,
    writableHighWaterMark: subprocessStdin.writableHighWaterMark,
    readableObjectMode,
    writableObjectMode: subprocessStdin.writableObjectMode,
    encoding: readableEncoding
  });
  onStdoutFinished({
    subprocessStdout,
    onStdoutDataDone,
    readable: duplex2,
    subprocess,
    subprocessStdin
  });
  onStdinFinished(subprocessStdin, duplex2, subprocessStdout);
  return duplex2;
};
var onDuplexDestroy = async ({ subprocessStdout, subprocessStdin, subprocess, waitReadableDestroy, waitWritableFinal, waitWritableDestroy }, error) => {
  await Promise.all([
    onReadableDestroy({ subprocessStdout, subprocess, waitReadableDestroy }, error),
    onWritableDestroy({
      subprocessStdin,
      subprocess,
      waitWritableFinal,
      waitWritableDestroy
    }, error)
  ]);
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/iterable.js
var createIterable = (subprocess, encoding, {
  from,
  binary: binaryOption = false,
  preserveNewlines = false
} = {}) => {
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const subprocessStdout = getFromStream(subprocess, from);
  const onStdoutData = iterateOnSubprocessStream({
    subprocessStdout,
    subprocess,
    binary,
    shouldEncode: true,
    encoding,
    preserveNewlines
  });
  return iterateOnStdoutData(onStdoutData, subprocessStdout, subprocess);
};
var iterateOnStdoutData = async function* (onStdoutData, subprocessStdout, subprocess) {
  try {
    yield* onStdoutData;
  } finally {
    if (subprocessStdout.readable) {
      subprocessStdout.destroy();
    }
    await subprocess;
  }
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/add.js
var addConvertedStreams = (subprocess, { encoding }) => {
  const concurrentStreams = initializeConcurrentStreams();
  subprocess.readable = createReadable.bind(void 0, { subprocess, concurrentStreams, encoding });
  subprocess.writable = createWritable.bind(void 0, { subprocess, concurrentStreams });
  subprocess.duplex = createDuplex.bind(void 0, { subprocess, concurrentStreams, encoding });
  subprocess.iterable = createIterable.bind(void 0, subprocess, encoding);
  subprocess[Symbol.asyncIterator] = createIterable.bind(void 0, subprocess, encoding, {});
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/promise.js
var mergePromise = (subprocess, promise) => {
  for (const [property, descriptor] of descriptors) {
    const value = descriptor.value.bind(promise);
    Reflect.defineProperty(subprocess, property, { ...descriptor, value });
  }
};
var nativePromisePrototype = (async () => {
})().constructor.prototype;
var descriptors = ["then", "catch", "finally"].map((property) => [
  property,
  Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)
]);

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/main-async.js
var execaCoreAsync = (rawFile, rawArguments, rawOptions, createNested) => {
  const { file, commandArguments, command, escapedCommand, startTime, verboseInfo, options, fileDescriptors } = handleAsyncArguments(rawFile, rawArguments, rawOptions);
  const { subprocess, promise } = spawnSubprocessAsync({
    file,
    commandArguments,
    options,
    startTime,
    verboseInfo,
    command,
    escapedCommand,
    fileDescriptors
  });
  subprocess.pipe = pipeToSubprocess.bind(void 0, {
    source: subprocess,
    sourcePromise: promise,
    boundOptions: {},
    createNested
  });
  mergePromise(subprocess, promise);
  SUBPROCESS_OPTIONS.set(subprocess, { options, fileDescriptors });
  return subprocess;
};
var handleAsyncArguments = (rawFile, rawArguments, rawOptions) => {
  const { command, escapedCommand, startTime, verboseInfo } = handleCommand(rawFile, rawArguments, rawOptions);
  const { file, commandArguments, options: normalizedOptions } = normalizeOptions(rawFile, rawArguments, rawOptions);
  const options = handleAsyncOptions(normalizedOptions);
  const fileDescriptors = handleStdioAsync(options, verboseInfo);
  return {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors
  };
};
var handleAsyncOptions = ({ timeout, signal, ...options }) => {
  if (signal !== void 0) {
    throw new TypeError('The "signal" option has been renamed to "cancelSignal" instead.');
  }
  return { ...options, timeoutDuration: timeout };
};
var spawnSubprocessAsync = ({ file, commandArguments, options, startTime, verboseInfo, command, escapedCommand, fileDescriptors }) => {
  let subprocess;
  try {
    subprocess = childProcess2.spawn(...concatenateShell(file, commandArguments, options));
  } catch (error) {
    return handleEarlyError({
      error,
      command,
      escapedCommand,
      fileDescriptors,
      options,
      startTime,
      verboseInfo
    });
  }
  const controller = new AbortController();
  events.setMaxListeners(Number.POSITIVE_INFINITY, controller.signal);
  const originalStreams = [...subprocess.stdio];
  pipeOutputAsync(subprocess, fileDescriptors, controller);
  cleanupOnExit(subprocess, options, controller);
  const context = {};
  const onInternalError = createDeferred();
  subprocess.kill = subprocessKill.bind(void 0, {
    kill: subprocess.kill.bind(subprocess),
    options,
    onInternalError,
    context,
    controller
  });
  subprocess.all = makeAllStream(subprocess, options);
  addConvertedStreams(subprocess, options);
  addIpcMethods(subprocess, options);
  const promise = handlePromise({
    subprocess,
    options,
    startTime,
    verboseInfo,
    fileDescriptors,
    originalStreams,
    command,
    escapedCommand,
    context,
    onInternalError,
    controller
  });
  return { subprocess, promise };
};
var handlePromise = async ({ subprocess, options, startTime, verboseInfo, fileDescriptors, originalStreams, command, escapedCommand, context, onInternalError, controller }) => {
  const [
    errorInfo,
    [exitCode, signal],
    stdioResults,
    allResult,
    ipcOutput
  ] = await waitForSubprocessResult({
    subprocess,
    options,
    context,
    verboseInfo,
    fileDescriptors,
    originalStreams,
    onInternalError,
    controller
  });
  controller.abort();
  onInternalError.resolve();
  const stdio = stdioResults.map((stdioResult, fdNumber) => stripNewline(stdioResult, options, fdNumber));
  const all = stripNewline(allResult, options, "all");
  const result = getAsyncResult({
    errorInfo,
    exitCode,
    signal,
    stdio,
    all,
    ipcOutput,
    context,
    options,
    command,
    escapedCommand,
    startTime
  });
  return handleResult(result, verboseInfo, options);
};
var getAsyncResult = ({ errorInfo, exitCode, signal, stdio, all, ipcOutput, context, options, command, escapedCommand, startTime }) => "error" in errorInfo ? makeError({
  error: errorInfo.error,
  command,
  escapedCommand,
  timedOut: context.terminationReason === "timeout",
  isCanceled: context.terminationReason === "cancel" || context.terminationReason === "gracefulCancel",
  isGracefullyCanceled: context.terminationReason === "gracefulCancel",
  isMaxBuffer: errorInfo.error instanceof MaxBufferError,
  isForcefullyTerminated: context.isForcefullyTerminated,
  exitCode,
  signal,
  stdio,
  all,
  ipcOutput,
  options,
  startTime,
  isSync: false
}) : makeSuccessResult({
  command,
  escapedCommand,
  stdio,
  all,
  ipcOutput,
  options,
  startTime
});

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/bind.js
var mergeOptions = (boundOptions, options) => {
  const newOptions = Object.fromEntries(
    Object.entries(options).map(([optionName, optionValue]) => [
      optionName,
      mergeOption(optionName, boundOptions[optionName], optionValue)
    ])
  );
  return { ...boundOptions, ...newOptions };
};
var mergeOption = (optionName, boundOptionValue, optionValue) => {
  if (DEEP_OPTIONS.has(optionName) && isPlainObject(boundOptionValue) && isPlainObject(optionValue)) {
    return { ...boundOptionValue, ...optionValue };
  }
  return optionValue;
};
var DEEP_OPTIONS = /* @__PURE__ */ new Set(["env", ...FD_SPECIFIC_OPTIONS]);

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/create.js
var createExeca = (mapArguments, boundOptions, deepOptions, setBoundExeca) => {
  const createNested = (mapArguments2, boundOptions2, setBoundExeca2) => createExeca(mapArguments2, boundOptions2, deepOptions, setBoundExeca2);
  const boundExeca = (...execaArguments) => callBoundExeca({
    mapArguments,
    deepOptions,
    boundOptions,
    setBoundExeca,
    createNested
  }, ...execaArguments);
  if (setBoundExeca !== void 0) {
    setBoundExeca(boundExeca, createNested, boundOptions);
  }
  return boundExeca;
};
var callBoundExeca = ({ mapArguments, deepOptions = {}, boundOptions = {}, setBoundExeca, createNested }, firstArgument, ...nextArguments) => {
  if (isPlainObject(firstArgument)) {
    return createNested(mapArguments, mergeOptions(boundOptions, firstArgument), setBoundExeca);
  }
  const { file, commandArguments, options, isSync } = parseArguments({
    mapArguments,
    firstArgument,
    nextArguments,
    deepOptions,
    boundOptions
  });
  return isSync ? execaCoreSync(file, commandArguments, options) : execaCoreAsync(file, commandArguments, options, createNested);
};
var parseArguments = ({ mapArguments, firstArgument, nextArguments, deepOptions, boundOptions }) => {
  const callArguments = isTemplateString(firstArgument) ? parseTemplates(firstArgument, nextArguments) : [firstArgument, ...nextArguments];
  const [initialFile, initialArguments, initialOptions] = normalizeParameters(...callArguments);
  const mergedOptions = mergeOptions(mergeOptions(deepOptions, boundOptions), initialOptions);
  const {
    file = initialFile,
    commandArguments = initialArguments,
    options = mergedOptions,
    isSync = false
  } = mapArguments({ file: initialFile, commandArguments: initialArguments, options: mergedOptions });
  return {
    file,
    commandArguments,
    options,
    isSync
  };
};

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/command.js
var mapCommandAsync = ({ file, commandArguments }) => parseCommand(file, commandArguments);
var mapCommandSync = ({ file, commandArguments }) => ({ ...parseCommand(file, commandArguments), isSync: true });
var parseCommand = (command, unusedArguments) => {
  if (unusedArguments.length > 0) {
    throw new TypeError(`The command and its arguments must be passed as a single string: ${command} ${unusedArguments}.`);
  }
  const [file, ...commandArguments] = parseCommandString(command);
  return { file, commandArguments };
};
var parseCommandString = (command) => {
  if (typeof command !== "string") {
    throw new TypeError(`The command must be a string: ${String(command)}.`);
  }
  const trimmedCommand = command.trim();
  if (trimmedCommand === "") {
    return [];
  }
  const tokens = [];
  for (const token of trimmedCommand.split(SPACES_REGEXP)) {
    const previousToken = tokens.at(-1);
    if (previousToken && previousToken.endsWith("\\")) {
      tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
    } else {
      tokens.push(token);
    }
  }
  return tokens;
};
var SPACES_REGEXP = / +/g;

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/script.js
var setScriptSync = (boundExeca, createNested, boundOptions) => {
  boundExeca.sync = createNested(mapScriptSync, boundOptions);
  boundExeca.s = boundExeca.sync;
};
var mapScriptAsync = ({ options }) => getScriptOptions(options);
var mapScriptSync = ({ options }) => ({ ...getScriptOptions(options), isSync: true });
var getScriptOptions = (options) => ({ options: { ...getScriptStdinOption(options), ...options } });
var getScriptStdinOption = ({ input, inputFile, stdio }) => input === void 0 && inputFile === void 0 && stdio === void 0 ? { stdin: "inherit" } : {};
var deepScriptOptions = { preferLocal: true };

// ../../node_modules/.pnpm/execa@9.6.1/node_modules/execa/index.js
var execa = createExeca(() => ({}));
createExeca(() => ({ isSync: true }));
createExeca(mapCommandAsync);
createExeca(mapCommandSync);
createExeca(mapNode);
createExeca(mapScriptAsync, {}, deepScriptOptions, setScriptSync);
getIpcExport();
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __require2 = /* @__PURE__ */ ((x) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a2, b) => (typeof __require !== "undefined" ? __require : a2)[b]
}) : x)(function(x) {
  if (typeof __require !== "undefined") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
var __commonJS2 = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp2(target, "default", { value: mod, enumerable: true }),
  mod
));
var require_constants = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/constants.js"(exports, module) {
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob) BINARY_TYPES.push("blob");
    module.exports = {
      BINARY_TYPES,
      CLOSE_TIMEOUT: 3e4,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
      kListener: Symbol("kListener"),
      kStatusCode: Symbol("status-code"),
      kWebSocket: Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});
var require_buffer_util = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/buffer-util.js"(exports, module) {
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i2 = 0; i2 < list.length; i2++) {
        const buf = list[i2];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i2 = 0; i2 < length; i2++) {
        output[offset + i2] = source[i2] ^ mask[i2 & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i2 = 0; i2 < buffer.length; i2++) {
        buffer[i2] ^= mask[i2 & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data)) return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = __require2("bufferutil");
        module.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48) _mask(source, mask, output, offset, length);
          else bufferUtil.mask(source, mask, output, offset, length);
        };
        module.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});
var require_limiter = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/limiter.js"(exports, module) {
    var kDone = Symbol("kDone");
    var kRun = Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module.exports = Limiter;
  }
});
var require_permessage_deflate = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/permessage-deflate.js"(exports, module) {
    var zlib = __require2("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = Symbol("permessage-deflate");
    var kTotalLength = Symbol("total-length");
    var kCallback = Symbol("callback");
    var kBuffers = Symbol("buffers");
    var kError = Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       * @param {Boolean} [isServer=false] Create the instance in either server or
       *     client mode
       * @param {Number} [maxPayload=0] The maximum allowed message length
       */
      constructor(options, isServer, maxPayload) {
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module.exports = PerMessageDeflate;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});
var require_validation = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/validation.js"(exports, module) {
    var { isUtf8 } = __require2("buffer");
    var { hasBlob } = require_constants();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i2 = 0;
      while (i2 < len) {
        if ((buf[i2] & 128) === 0) {
          i2++;
        } else if ((buf[i2] & 224) === 192) {
          if (i2 + 1 === len || (buf[i2 + 1] & 192) !== 128 || (buf[i2] & 254) === 192) {
            return false;
          }
          i2 += 2;
        } else if ((buf[i2] & 240) === 224) {
          if (i2 + 2 >= len || (buf[i2 + 1] & 192) !== 128 || (buf[i2 + 2] & 192) !== 128 || buf[i2] === 224 && (buf[i2 + 1] & 224) === 128 || // Overlong
          buf[i2] === 237 && (buf[i2 + 1] & 224) === 160) {
            return false;
          }
          i2 += 3;
        } else if ((buf[i2] & 248) === 240) {
          if (i2 + 3 >= len || (buf[i2 + 1] & 192) !== 128 || (buf[i2 + 2] & 192) !== 128 || (buf[i2 + 3] & 192) !== 128 || buf[i2] === 240 && (buf[i2 + 1] & 240) === 128 || // Overlong
          buf[i2] === 244 && buf[i2 + 1] > 143 || buf[i2] > 244) {
            return false;
          }
          i2 += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob(value) {
      return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
    }
    module.exports = {
      isBlob,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = __require2("utf-8-validate");
        module.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});
var require_receiver = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/receiver.js"(exports, module) {
    var { Writable: Writable4 } = __require2("stream");
    var PerMessageDeflate = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver2 = class extends Writable4 {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n2) {
        this._bufferedBytes -= n2;
        if (n2 === this._buffers[0].length) return this._buffers.shift();
        if (n2 < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n2,
            buf.length - n2
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n2);
        }
        const dst = Buffer.allocUnsafe(n2);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n2;
          if (n2 >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n2), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n2,
              buf.length - n2
            );
          }
          n2 -= buf.length;
        } while (n2 > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored) cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (!this._fragmented) {
            const error = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error);
            return;
          }
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error);
            return;
          }
        } else {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error);
            return;
          }
        } else if (this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error);
          return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO) this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module.exports = Receiver2;
  }
});
var require_sender = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/sender.js"(exports, module) {
    var { Duplex: Duplex4 } = __require2("stream");
    var { randomFillSync } = __require2("crypto");
    var PerMessageDeflate = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
    var { isBlob, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender2 = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else {
            buf.set(data, 2);
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module.exports = Sender2;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function") cb(err);
      for (let i2 = 0; i2 < sender._queue.length; i2++) {
        const params = sender._queue[i2];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});
var require_event_target = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/event-target.js"(exports, module) {
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = Symbol("kCode");
    var kData = Symbol("kData");
    var kError = Symbol("kError");
    var kMessage = Symbol("kMessage");
    var kReason = Symbol("kReason");
    var kTarget = Symbol("kTarget");
    var kType = Symbol("kType");
    var kWasClean = Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage2(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});
var require_extension = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/extension.js"(exports, module) {
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0) dest[name] = [elem];
      else dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i2 = 0;
      for (; i2 < header.length; i2++) {
        code = header.charCodeAt(i2);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i2;
          } else if (i2 !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i2;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i2}`);
            }
            if (end === -1) end = i2;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i2}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i2;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i2;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i2}`);
            }
            if (end === -1) end = i2;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i2);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i2}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i2}`);
            }
            if (start === -1) start = i2;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i2;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i2;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i2}`);
            }
          } else if (code === 34 && header.charCodeAt(i2 - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i2;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i2;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i2}`);
            }
            if (end === -1) end = i2;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i2}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i2;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format2(extensions) {
      return Object.keys(extensions).map((extension) => {
        let configurations = extensions[extension];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations.map((params) => {
          return [extension].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values)) values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module.exports = { format: format2, parse };
  }
});
var require_websocket = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/websocket.js"(exports, module) {
    var EventEmitter2 = __require2("events");
    var https = __require2("https");
    var http = __require2("http");
    var net = __require2("net");
    var tls = __require2("tls");
    var { randomBytes, createHash } = __require2("crypto");
    var { Duplex: Duplex4, Readable: Readable4 } = __require2("stream");
    var { URL: URL2 } = __require2("url");
    var PerMessageDeflate = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var { isBlob } = require_validation();
    var {
      BINARY_TYPES,
      CLOSE_TIMEOUT,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format: format2, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var kAborted = Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket3 = class _WebSocket extends EventEmitter2 {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._autoPong = options.autoPong;
          this._closeTimeout = options.closeTimeout;
          this._isServer = true;
        }
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        if (this._receiver) this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
          this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err) return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket3, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket3.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket3, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket3.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket3, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket3.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket3, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket3.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket3.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket3.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function") return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket3.prototype.addEventListener = addEventListener;
    WebSocket3.prototype.removeEventListener = removeEventListener;
    module.exports = WebSocket3;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      websocket._autoPong = opts.autoPong;
      websocket._closeTimeout = opts.closeTimeout;
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL2) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL2(address);
        } catch (e) {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(
          opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
          false,
          opts.maxPayload
        );
        opts.headers["Sec-WebSocket-Extensions"] = format2({
          [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost) delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL2(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket3.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket3.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket3.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = isBlob(data) ? data.size : toBuffer(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0) return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused) websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket3.CLOSED) return;
      if (websocket.readyState === WebSocket3.OPEN) {
        websocket._readyState = WebSocket3.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        websocket._closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket3.CLOSING;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket3.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket3.CLOSING;
        this.destroy();
      }
    }
  }
});
var require_stream = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/stream.js"(exports, module) {
    require_websocket();
    var { Duplex: Duplex4 } = __require2("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex2 = new Duplex4({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex2._readableState.objectMode ? msg.toString() : msg;
        if (!duplex2.push(data)) ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex2.destroyed) return;
        terminateOnDestroy = false;
        duplex2.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex2.destroyed) return;
        duplex2.push(null);
      });
      duplex2._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex2);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex2);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex2._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex2._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex2._readableState.endEmitted) duplex2.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex2._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex2._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex2._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex2.on("end", duplexOnEnd);
      duplex2.on("error", duplexOnError);
      return duplex2;
    }
    module.exports = createWebSocketStream2;
  }
});
var require_subprotocol = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/subprotocol.js"(exports, module) {
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i2 = 0;
      for (i2; i2 < header.length; i2++) {
        const code = header.charCodeAt(i2);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i2;
        } else if (i2 !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i2;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i2}`);
          }
          if (end === -1) end = i2;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i2}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i2);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module.exports = { parse };
  }
});
var require_websocket_server = __commonJS2({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/websocket-server.js"(exports, module) {
    var EventEmitter2 = __require2("events");
    var http = __require2("http");
    var { Duplex: Duplex4 } = __require2("stream");
    var { createHash } = __require2("crypto");
    var extension = require_extension();
    var PerMessageDeflate = require_permessage_deflate();
    var subprotocol = require_subprotocol();
    var WebSocket3 = require_websocket();
    var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter2 {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
       *     wait for the closing handshake to finish after `websocket.close()` is
       *     called
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          closeTimeout: CLOSE_TIMEOUT,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket3,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path) return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate(
            this.options.perMessageDeflate,
            true,
            this.options.maxPayload
          );
          try {
            const offers = extension.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
              extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
          const params = extensions[PerMessageDeflate.extensionName].params;
          const value = extension.format({
            [PerMessageDeflate.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module.exports = WebSocketServer2;
    function addListeners(server, map) {
      for (const event of Object.keys(map)) server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h2) => `${h2}: ${headers[h2]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});
var wrapper_exports = {};
__export(wrapper_exports, {
  Receiver: () => import_receiver.default,
  Sender: () => import_sender.default,
  WebSocket: () => import_websocket.default,
  WebSocketServer: () => import_websocket_server.default,
  createWebSocketStream: () => import_stream3.default,
  default: () => wrapper_default
});
var import_stream3;
var import_receiver;
var import_sender;
var import_websocket;
var import_websocket_server;
var wrapper_default;
var init_wrapper = __esm({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/wrapper.mjs"() {
    import_stream3 = __toESM2(require_stream());
    import_receiver = __toESM2(require_receiver());
    import_sender = __toESM2(require_sender());
    import_websocket = __toESM2(require_websocket());
    import_websocket_server = __toESM2(require_websocket_server());
    wrapper_default = import_websocket.default;
  }
});
var require_picocolors = __commonJS2({
  "../../node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.js"(exports, module) {
    var p = process || {};
    var argv = p.argv || [];
    var env = p.env || {};
    var isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input, index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "", cursor = 0;
      do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
      } while (~index);
      return result + string.substring(cursor);
    };
    var createColors = (enabled = isColorSupported) => {
      let f = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: f("\x1B[0m", "\x1B[0m"),
        bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: f("\x1B[3m", "\x1B[23m"),
        underline: f("\x1B[4m", "\x1B[24m"),
        inverse: f("\x1B[7m", "\x1B[27m"),
        hidden: f("\x1B[8m", "\x1B[28m"),
        strikethrough: f("\x1B[9m", "\x1B[29m"),
        black: f("\x1B[30m", "\x1B[39m"),
        red: f("\x1B[31m", "\x1B[39m"),
        green: f("\x1B[32m", "\x1B[39m"),
        yellow: f("\x1B[33m", "\x1B[39m"),
        blue: f("\x1B[34m", "\x1B[39m"),
        magenta: f("\x1B[35m", "\x1B[39m"),
        cyan: f("\x1B[36m", "\x1B[39m"),
        white: f("\x1B[37m", "\x1B[39m"),
        gray: f("\x1B[90m", "\x1B[39m"),
        bgBlack: f("\x1B[40m", "\x1B[49m"),
        bgRed: f("\x1B[41m", "\x1B[49m"),
        bgGreen: f("\x1B[42m", "\x1B[49m"),
        bgYellow: f("\x1B[43m", "\x1B[49m"),
        bgBlue: f("\x1B[44m", "\x1B[49m"),
        bgMagenta: f("\x1B[45m", "\x1B[49m"),
        bgCyan: f("\x1B[46m", "\x1B[49m"),
        bgWhite: f("\x1B[47m", "\x1B[49m"),
        blackBright: f("\x1B[90m", "\x1B[39m"),
        redBright: f("\x1B[91m", "\x1B[39m"),
        greenBright: f("\x1B[92m", "\x1B[39m"),
        yellowBright: f("\x1B[93m", "\x1B[39m"),
        blueBright: f("\x1B[94m", "\x1B[39m"),
        magentaBright: f("\x1B[95m", "\x1B[39m"),
        cyanBright: f("\x1B[96m", "\x1B[39m"),
        whiteBright: f("\x1B[97m", "\x1B[39m"),
        bgBlackBright: f("\x1B[100m", "\x1B[49m"),
        bgRedBright: f("\x1B[101m", "\x1B[49m"),
        bgGreenBright: f("\x1B[102m", "\x1B[49m"),
        bgYellowBright: f("\x1B[103m", "\x1B[49m"),
        bgBlueBright: f("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
        bgCyanBright: f("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: f("\x1B[107m", "\x1B[49m")
      };
    };
    module.exports = createColors();
    module.exports.createColors = createColors;
  }
});
var require_windows2 = __commonJS2({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js"(exports, module) {
    module.exports = isexe;
    isexe.sync = sync;
    var fs = __require2("fs");
    function checkPathExt(path52, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i2 = 0; i2 < pathext.length; i2++) {
        var p = pathext[i2].toLowerCase();
        if (p && path52.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path52, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path52, options);
    }
    function isexe(path52, options, cb) {
      fs.stat(path52, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path52, options));
      });
    }
    function sync(path52, options) {
      return checkStat(fs.statSync(path52), path52, options);
    }
  }
});
var require_mode2 = __commonJS2({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js"(exports, module) {
    module.exports = isexe;
    isexe.sync = sync;
    var fs = __require2("fs");
    function isexe(path52, options, cb) {
      fs.stat(path52, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path52, options) {
      return checkStat(fs.statSync(path52), options);
    }
    function checkStat(stat, options) {
      return stat.isFile() && checkMode(stat, options);
    }
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u2 = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o2 = parseInt("001", 8);
      var ug = u2 | g;
      var ret = mod & o2 || mod & g && gid === myGid || mod & u2 && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});
var require_isexe2 = __commonJS2({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js"(exports, module) {
    __require2("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows2();
    } else {
      core = require_mode2();
    }
    module.exports = isexe;
    isexe.sync = sync;
    function isexe(path52, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path52, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path52, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path52, options) {
      try {
        return core.sync(path52, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});
var require_which2 = __commonJS2({
  "../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js"(exports, module) {
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path52 = __require2("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe2();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        // windows always checks the cwd first
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
        "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i2) => new Promise((resolve, reject) => {
        if (i2 === pathEnv.length)
          return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i2];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path52.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve(subStep(p, i2, 0));
      });
      const subStep = (p, i2, ii) => new Promise((resolve, reject) => {
        if (ii === pathExt.length)
          return resolve(step(i2 + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve(p + ext);
          }
          return resolve(subStep(p, i2, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i2 = 0; i2 < pathEnv.length; i2++) {
        const ppRaw = pathEnv[i2];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path52.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module.exports = which;
    which.sync = whichSync;
  }
});
var require_path_key2 = __commonJS2({
  "../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js"(exports, module) {
    var pathKey22 = (options = {}) => {
      const environment = options.env || process.env;
      const platform2 = options.platform || process.platform;
      if (platform2 !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module.exports = pathKey22;
    module.exports.default = pathKey22;
  }
});
var require_resolveCommand2 = __commonJS2({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/resolveCommand.js"(exports, module) {
    var path52 = __require2("path");
    var which = require_which2();
    var getPathKey = require_path_key2();
    function resolveCommandAttempt(parsed, withoutPathExt) {
      const env = parsed.options.env || process.env;
      const cwd = process.cwd();
      const hasCustomCwd = parsed.options.cwd != null;
      const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
      if (shouldSwitchCwd) {
        try {
          process.chdir(parsed.options.cwd);
        } catch (err) {
        }
      }
      let resolved;
      try {
        resolved = which.sync(parsed.command, {
          path: env[getPathKey({ env })],
          pathExt: withoutPathExt ? path52.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path52.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module.exports = resolveCommand;
  }
});
var require_escape2 = __commonJS2({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/escape.js"(exports, module) {
    var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
    function escapeCommand(arg) {
      arg = arg.replace(metaCharsRegExp, "^$1");
      return arg;
    }
    function escapeArgument(arg, doubleEscapeMetaChars) {
      arg = `${arg}`;
      arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');
      arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
      arg = `"${arg}"`;
      arg = arg.replace(metaCharsRegExp, "^$1");
      if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, "^$1");
      }
      return arg;
    }
    module.exports.command = escapeCommand;
    module.exports.argument = escapeArgument;
  }
});
var require_shebang_regex2 = __commonJS2({
  "../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js"(exports, module) {
    module.exports = /^#!(.*)/;
  }
});
var require_shebang_command2 = __commonJS2({
  "../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js"(exports, module) {
    var shebangRegex = require_shebang_regex2();
    module.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path52, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path52.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});
var require_readShebang2 = __commonJS2({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/readShebang.js"(exports, module) {
    var fs = __require2("fs");
    var shebangCommand = require_shebang_command2();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs.openSync(command, "r");
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module.exports = readShebang;
  }
});
var require_parse2 = __commonJS2({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/parse.js"(exports, module) {
    var path52 = __require2("path");
    var resolveCommand = require_resolveCommand2();
    var escape = require_escape2();
    var readShebang = require_readShebang2();
    var isWin = process.platform === "win32";
    var isExecutableRegExp = /\.(?:com|exe)$/i;
    var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function detectShebang(parsed) {
      parsed.file = resolveCommand(parsed);
      const shebang = parsed.file && readShebang(parsed.file);
      if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return resolveCommand(parsed);
      }
      return parsed.file;
    }
    function parseNonShell(parsed) {
      if (!isWin) {
        return parsed;
      }
      const commandFile = detectShebang(parsed);
      const needsShell = !isExecutableRegExp.test(commandFile);
      if (parsed.options.forceShell || needsShell) {
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
        parsed.command = path52.normalize(parsed.command);
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [parsed.command].concat(parsed.args).join(" ");
        parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
      }
      return parsed;
    }
    function parse(command, args, options) {
      if (args && !Array.isArray(args)) {
        options = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options = Object.assign({}, options);
      const parsed = {
        command,
        args,
        options,
        file: void 0,
        original: {
          command,
          args
        }
      };
      return options.shell ? parsed : parseNonShell(parsed);
    }
    module.exports = parse;
  }
});
var require_enoent2 = __commonJS2({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/enoent.js"(exports, module) {
    var isWin = process.platform === "win32";
    function notFoundError(original, syscall) {
      return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
      });
    }
    function hookChildProcess(cp, parsed) {
      if (!isWin) {
        return;
      }
      const originalEmit = cp.emit;
      cp.emit = function(name, arg1) {
        if (name === "exit") {
          const err = verifyENOENT(arg1, parsed);
          if (err) {
            return originalEmit.call(cp, "error", err);
          }
        }
        return originalEmit.apply(cp, arguments);
      };
    }
    function verifyENOENT(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawn");
      }
      return null;
    }
    function verifyENOENTSync(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawnSync");
      }
      return null;
    }
    module.exports = {
      hookChildProcess,
      verifyENOENT,
      verifyENOENTSync,
      notFoundError
    };
  }
});
var require_cross_spawn2 = __commonJS2({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js"(exports, module) {
    var cp = __require2("child_process");
    var parse = require_parse2();
    var enoent = require_enoent2();
    function spawn2(command, args, options) {
      const parsed = parse(command, args, options);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    function spawnSync2(command, args, options) {
      const parsed = parse(command, args, options);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    module.exports = spawn2;
    module.exports.spawn = spawn2;
    module.exports.sync = spawnSync2;
    module.exports._parse = parse;
    module.exports._enoent = enoent;
  }
});
var require_signals = __commonJS2({
  "../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/signals.js"(exports, module) {
    module.exports = [
      "SIGABRT",
      "SIGALRM",
      "SIGHUP",
      "SIGINT",
      "SIGTERM"
    ];
    if (process.platform !== "win32") {
      module.exports.push(
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT"
        // should detect profiler and enable/disable accordingly.
        // see #21
        // 'SIGPROF'
      );
    }
    if (process.platform === "linux") {
      module.exports.push(
        "SIGIO",
        "SIGPOLL",
        "SIGPWR",
        "SIGSTKFLT",
        "SIGUNUSED"
      );
    }
  }
});
var require_signal_exit = __commonJS2({
  "../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/index.js"(exports, module) {
    var process13 = global.process;
    var processOk22 = function(process14) {
      return process14 && typeof process14 === "object" && typeof process14.removeListener === "function" && typeof process14.emit === "function" && typeof process14.reallyExit === "function" && typeof process14.listeners === "function" && typeof process14.kill === "function" && typeof process14.pid === "number" && typeof process14.on === "function";
    };
    if (!processOk22(process13)) {
      module.exports = function() {
        return function() {
        };
      };
    } else {
      assert = __require2("assert");
      signals22 = require_signals();
      isWin = /^win/i.test(process13.platform);
      EE = __require2("events");
      if (typeof EE !== "function") {
        EE = EE.EventEmitter;
      }
      if (process13.__signal_exit_emitter__) {
        emitter = process13.__signal_exit_emitter__;
      } else {
        emitter = process13.__signal_exit_emitter__ = new EE();
        emitter.count = 0;
        emitter.emitted = {};
      }
      if (!emitter.infinite) {
        emitter.setMaxListeners(Infinity);
        emitter.infinite = true;
      }
      module.exports = function(cb, opts) {
        if (!processOk22(global.process)) {
          return function() {
          };
        }
        assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
        if (loaded === false) {
          load2();
        }
        var ev = "exit";
        if (opts && opts.alwaysLast) {
          ev = "afterexit";
        }
        var remove = function() {
          emitter.removeListener(ev, cb);
          if (emitter.listeners("exit").length === 0 && emitter.listeners("afterexit").length === 0) {
            unload2();
          }
        };
        emitter.on(ev, cb);
        return remove;
      };
      unload2 = function unload3() {
        if (!loaded || !processOk22(global.process)) {
          return;
        }
        loaded = false;
        signals22.forEach(function(sig) {
          try {
            process13.removeListener(sig, sigListeners[sig]);
          } catch (er) {
          }
        });
        process13.emit = originalProcessEmit;
        process13.reallyExit = originalProcessReallyExit;
        emitter.count -= 1;
      };
      module.exports.unload = unload2;
      emit = function emit2(event, code, signal) {
        if (emitter.emitted[event]) {
          return;
        }
        emitter.emitted[event] = true;
        emitter.emit(event, code, signal);
      };
      sigListeners = {};
      signals22.forEach(function(sig) {
        sigListeners[sig] = function listener() {
          if (!processOk22(global.process)) {
            return;
          }
          var listeners = process13.listeners(sig);
          if (listeners.length === emitter.count) {
            unload2();
            emit("exit", null, sig);
            emit("afterexit", null, sig);
            if (isWin && sig === "SIGHUP") {
              sig = "SIGINT";
            }
            process13.kill(process13.pid, sig);
          }
        };
      });
      module.exports.signals = function() {
        return signals22;
      };
      loaded = false;
      load2 = function load3() {
        if (loaded || !processOk22(global.process)) {
          return;
        }
        loaded = true;
        emitter.count += 1;
        signals22 = signals22.filter(function(sig) {
          try {
            process13.on(sig, sigListeners[sig]);
            return true;
          } catch (er) {
            return false;
          }
        });
        process13.emit = processEmit;
        process13.reallyExit = processReallyExit;
      };
      module.exports.load = load2;
      originalProcessReallyExit = process13.reallyExit;
      processReallyExit = function processReallyExit2(code) {
        if (!processOk22(global.process)) {
          return;
        }
        process13.exitCode = code || /* istanbul ignore next */
        0;
        emit("exit", process13.exitCode, null);
        emit("afterexit", process13.exitCode, null);
        originalProcessReallyExit.call(process13, process13.exitCode);
      };
      originalProcessEmit = process13.emit;
      processEmit = function processEmit2(ev, arg) {
        if (ev === "exit" && processOk22(global.process)) {
          if (arg !== void 0) {
            process13.exitCode = arg;
          }
          var ret = originalProcessEmit.apply(this, arguments);
          emit("exit", process13.exitCode, null);
          emit("afterexit", process13.exitCode, null);
          return ret;
        } else {
          return originalProcessEmit.apply(this, arguments);
        }
      };
    }
    var assert;
    var signals22;
    var isWin;
    var EE;
    var emitter;
    var unload2;
    var emit;
    var sigListeners;
    var loaded;
    var load2;
    var originalProcessReallyExit;
    var processReallyExit;
    var originalProcessEmit;
    var processEmit;
  }
});
var require_buffer_stream = __commonJS2({
  "../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/buffer-stream.js"(exports, module) {
    var { PassThrough: PassThroughStream2 } = __require2("stream");
    module.exports = (options) => {
      options = { ...options };
      const { array } = options;
      let { encoding } = options;
      const isBuffer = encoding === "buffer";
      let objectMode = false;
      if (array) {
        objectMode = !(encoding || isBuffer);
      } else {
        encoding = encoding || "utf8";
      }
      if (isBuffer) {
        encoding = null;
      }
      const stream = new PassThroughStream2({ objectMode });
      if (encoding) {
        stream.setEncoding(encoding);
      }
      let length = 0;
      const chunks = [];
      stream.on("data", (chunk) => {
        chunks.push(chunk);
        if (objectMode) {
          length = chunks.length;
        } else {
          length += chunk.length;
        }
      });
      stream.getBufferedValue = () => {
        if (array) {
          return chunks;
        }
        return isBuffer ? Buffer.concat(chunks, length) : chunks.join("");
      };
      stream.getBufferedLength = () => length;
      return stream;
    };
  }
});
var require_get_stream = __commonJS2({
  "../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/index.js"(exports, module) {
    var { constants: BufferConstants } = __require2("buffer");
    var stream = __require2("stream");
    var { promisify: promisify22 } = __require2("util");
    var bufferStream = require_buffer_stream();
    var streamPipelinePromisified = promisify22(stream.pipeline);
    var MaxBufferError22 = class extends Error {
      constructor() {
        super("maxBuffer exceeded");
        this.name = "MaxBufferError";
      }
    };
    async function getStream2(inputStream, options) {
      if (!inputStream) {
        throw new Error("Expected a stream");
      }
      options = {
        maxBuffer: Infinity,
        ...options
      };
      const { maxBuffer } = options;
      const stream2 = bufferStream(options);
      await new Promise((resolve, reject) => {
        const rejectPromise = (error) => {
          if (error && stream2.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
            error.bufferedData = stream2.getBufferedValue();
          }
          reject(error);
        };
        (async () => {
          try {
            await streamPipelinePromisified(inputStream, stream2);
            resolve();
          } catch (error) {
            rejectPromise(error);
          }
        })();
        stream2.on("data", () => {
          if (stream2.getBufferedLength() > maxBuffer) {
            rejectPromise(new MaxBufferError22());
          }
        });
      });
      return stream2.getBufferedValue();
    }
    module.exports = getStream2;
    module.exports.buffer = (stream2, options) => getStream2(stream2, { ...options, encoding: "buffer" });
    module.exports.array = (stream2, options) => getStream2(stream2, { ...options, array: true });
    module.exports.MaxBufferError = MaxBufferError22;
  }
});
var require_merge_stream = __commonJS2({
  "../../node_modules/.pnpm/merge-stream@2.0.0/node_modules/merge-stream/index.js"(exports, module) {
    var { PassThrough: PassThrough2 } = __require2("stream");
    module.exports = function() {
      var sources = [];
      var output = new PassThrough2({ objectMode: true });
      output.setMaxListeners(0);
      output.add = add;
      output.isEmpty = isEmpty;
      output.on("unpipe", remove);
      Array.prototype.slice.call(arguments).forEach(add);
      return output;
      function add(source) {
        if (Array.isArray(source)) {
          source.forEach(add);
          return this;
        }
        sources.push(source);
        source.once("end", remove.bind(null, source));
        source.once("error", output.emit.bind(output, "error"));
        source.pipe(output, { end: false });
        return this;
      }
      function isEmpty() {
        return sources.length == 0;
      }
      function remove(source) {
        sources = sources.filter(function(it) {
          return it !== source;
        });
        if (!sources.length && output.readable) {
          output.end();
        }
      }
    };
  }
});
var COMPLETED_STATUS = "Completed";
init_wrapper();
__toESM2(require_picocolors());
var import_cross_spawn2 = __toESM2(require_cross_spawn2());
function stripFinalNewline2(input) {
  const LF2 = typeof input === "string" ? "\n" : "\n".charCodeAt();
  const CR2 = typeof input === "string" ? "\r" : "\r".charCodeAt();
  if (input[input.length - 1] === LF2) {
    input = input.slice(0, -1);
  }
  if (input[input.length - 1] === CR2) {
    input = input.slice(0, -1);
  }
  return input;
}
function pathKey2(options = {}) {
  const {
    env = process.env,
    platform: platform2 = process.platform
  } = options;
  if (platform2 !== "win32") {
    return "PATH";
  }
  return Object.keys(env).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
}
var npmRunPath2 = ({
  cwd = process22__default.default.cwd(),
  path: pathOption = process22__default.default.env[pathKey2()],
  preferLocal = true,
  execPath: execPath2 = process22__default.default.execPath,
  addExecPath = true
} = {}) => {
  const cwdString = cwd instanceof URL ? url.fileURLToPath(cwd) : cwd;
  const cwdPath = path6__default.default.resolve(cwdString);
  const result = [];
  if (preferLocal) {
    applyPreferLocal2(result, cwdPath);
  }
  if (addExecPath) {
    applyExecPath2(result, execPath2, cwdPath);
  }
  return [...result, pathOption].join(path6__default.default.delimiter);
};
var applyPreferLocal2 = (result, cwdPath) => {
  let previous;
  while (previous !== cwdPath) {
    result.push(path6__default.default.join(cwdPath, "node_modules/.bin"));
    previous = cwdPath;
    cwdPath = path6__default.default.resolve(cwdPath, "..");
  }
};
var applyExecPath2 = (result, execPath2, cwdPath) => {
  const execPathString = execPath2 instanceof URL ? url.fileURLToPath(execPath2) : execPath2;
  result.push(path6__default.default.resolve(cwdPath, execPathString, ".."));
};
var npmRunPathEnv2 = ({ env = process22__default.default.env, ...options } = {}) => {
  env = { ...env };
  const pathName = pathKey2({ env });
  options.path = env[pathName];
  env[pathName] = npmRunPath2(options);
  return env;
};
var copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
var canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
var changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
var changeToString = (to, from, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  Object.defineProperty(to, "toString", { ...toStringDescriptor, value: newToString });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}
var calledFunctions = /* @__PURE__ */ new WeakMap();
var onetime = (function_, options = {}) => {
  if (typeof function_ !== "function") {
    throw new TypeError("Expected a function");
  }
  let returnValue;
  let callCount = 0;
  const functionName = function_.displayName || function_.name || "<anonymous>";
  const onetime2 = function(...arguments_) {
    calledFunctions.set(onetime2, ++callCount);
    if (callCount === 1) {
      returnValue = function_.apply(this, arguments_);
      function_ = null;
    } else if (options.throw === true) {
      throw new Error(`Function \`${functionName}\` can only be called once`);
    }
    return returnValue;
  };
  mimicFunction(onetime2, function_);
  calledFunctions.set(onetime2, callCount);
  return onetime2;
};
onetime.callCount = (function_) => {
  if (!calledFunctions.has(function_)) {
    throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
  }
  return calledFunctions.get(function_);
};
var onetime_default = onetime;
var getRealtimeSignals2 = function() {
  const length = SIGRTMAX2 - SIGRTMIN2 + 1;
  return Array.from({ length }, getRealtimeSignal2);
};
var getRealtimeSignal2 = function(value, index) {
  return {
    name: `SIGRT${index + 1}`,
    number: SIGRTMIN2 + index,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix"
  };
};
var SIGRTMIN2 = 34;
var SIGRTMAX2 = 64;
var SIGNALS2 = [
  {
    name: "SIGHUP",
    number: 1,
    action: "terminate",
    description: "Terminal closed",
    standard: "posix"
  },
  {
    name: "SIGINT",
    number: 2,
    action: "terminate",
    description: "User interruption with CTRL-C",
    standard: "ansi"
  },
  {
    name: "SIGQUIT",
    number: 3,
    action: "core",
    description: "User interruption with CTRL-\\",
    standard: "posix"
  },
  {
    name: "SIGILL",
    number: 4,
    action: "core",
    description: "Invalid machine instruction",
    standard: "ansi"
  },
  {
    name: "SIGTRAP",
    number: 5,
    action: "core",
    description: "Debugger breakpoint",
    standard: "posix"
  },
  {
    name: "SIGABRT",
    number: 6,
    action: "core",
    description: "Aborted",
    standard: "ansi"
  },
  {
    name: "SIGIOT",
    number: 6,
    action: "core",
    description: "Aborted",
    standard: "bsd"
  },
  {
    name: "SIGBUS",
    number: 7,
    action: "core",
    description: "Bus error due to misaligned, non-existing address or paging error",
    standard: "bsd"
  },
  {
    name: "SIGEMT",
    number: 7,
    action: "terminate",
    description: "Command should be emulated but is not implemented",
    standard: "other"
  },
  {
    name: "SIGFPE",
    number: 8,
    action: "core",
    description: "Floating point arithmetic error",
    standard: "ansi"
  },
  {
    name: "SIGKILL",
    number: 9,
    action: "terminate",
    description: "Forced termination",
    standard: "posix",
    forced: true
  },
  {
    name: "SIGUSR1",
    number: 10,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGSEGV",
    number: 11,
    action: "core",
    description: "Segmentation fault",
    standard: "ansi"
  },
  {
    name: "SIGUSR2",
    number: 12,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGPIPE",
    number: 13,
    action: "terminate",
    description: "Broken pipe or socket",
    standard: "posix"
  },
  {
    name: "SIGALRM",
    number: 14,
    action: "terminate",
    description: "Timeout or timer",
    standard: "posix"
  },
  {
    name: "SIGTERM",
    number: 15,
    action: "terminate",
    description: "Termination",
    standard: "ansi"
  },
  {
    name: "SIGSTKFLT",
    number: 16,
    action: "terminate",
    description: "Stack is empty or overflowed",
    standard: "other"
  },
  {
    name: "SIGCHLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "posix"
  },
  {
    name: "SIGCLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "other"
  },
  {
    name: "SIGCONT",
    number: 18,
    action: "unpause",
    description: "Unpaused",
    standard: "posix",
    forced: true
  },
  {
    name: "SIGSTOP",
    number: 19,
    action: "pause",
    description: "Paused",
    standard: "posix",
    forced: true
  },
  {
    name: "SIGTSTP",
    number: 20,
    action: "pause",
    description: 'Paused using CTRL-Z or "suspend"',
    standard: "posix"
  },
  {
    name: "SIGTTIN",
    number: 21,
    action: "pause",
    description: "Background process cannot read terminal input",
    standard: "posix"
  },
  {
    name: "SIGBREAK",
    number: 21,
    action: "terminate",
    description: "User interruption with CTRL-BREAK",
    standard: "other"
  },
  {
    name: "SIGTTOU",
    number: 22,
    action: "pause",
    description: "Background process cannot write to terminal output",
    standard: "posix"
  },
  {
    name: "SIGURG",
    number: 23,
    action: "ignore",
    description: "Socket received out-of-band data",
    standard: "bsd"
  },
  {
    name: "SIGXCPU",
    number: 24,
    action: "core",
    description: "Process timed out",
    standard: "bsd"
  },
  {
    name: "SIGXFSZ",
    number: 25,
    action: "core",
    description: "File too big",
    standard: "bsd"
  },
  {
    name: "SIGVTALRM",
    number: 26,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGPROF",
    number: 27,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGWINCH",
    number: 28,
    action: "ignore",
    description: "Terminal window size changed",
    standard: "bsd"
  },
  {
    name: "SIGIO",
    number: 29,
    action: "terminate",
    description: "I/O is available",
    standard: "other"
  },
  {
    name: "SIGPOLL",
    number: 29,
    action: "terminate",
    description: "Watched event",
    standard: "other"
  },
  {
    name: "SIGINFO",
    number: 29,
    action: "ignore",
    description: "Request for process information",
    standard: "other"
  },
  {
    name: "SIGPWR",
    number: 30,
    action: "terminate",
    description: "Device running out of power",
    standard: "systemv"
  },
  {
    name: "SIGSYS",
    number: 31,
    action: "core",
    description: "Invalid system call",
    standard: "other"
  },
  {
    name: "SIGUNUSED",
    number: 31,
    action: "terminate",
    description: "Invalid system call",
    standard: "other"
  }
];
var getSignals2 = function() {
  const realtimeSignals = getRealtimeSignals2();
  const signals22 = [...SIGNALS2, ...realtimeSignals].map(normalizeSignal3);
  return signals22;
};
var normalizeSignal3 = function({
  name,
  number: defaultNumber,
  description,
  action,
  forced = false,
  standard
}) {
  const {
    signals: { [name]: constantSignal }
  } = os.constants;
  const supported = constantSignal !== void 0;
  const number = supported ? constantSignal : defaultNumber;
  return { name, number, description, supported, action, forced, standard };
};
var getSignalsByName2 = function() {
  const signals22 = getSignals2();
  return signals22.reduce(getSignalByName2, {});
};
var getSignalByName2 = function(signalByNameMemo, { name, number, description, supported, action, forced, standard }) {
  return {
    ...signalByNameMemo,
    [name]: { name, number, description, supported, action, forced, standard }
  };
};
var signalsByName2 = getSignalsByName2();
var getSignalsByNumber2 = function() {
  const signals22 = getSignals2();
  const length = SIGRTMAX2 + 1;
  const signalsA = Array.from({ length }, (value, number) => getSignalByNumber2(number, signals22));
  return Object.assign({}, ...signalsA);
};
var getSignalByNumber2 = function(number, signals22) {
  const signal = findSignalByNumber2(number, signals22);
  if (signal === void 0) {
    return {};
  }
  const { name, description, supported, action, forced, standard } = signal;
  return {
    [number]: {
      name,
      number,
      description,
      supported,
      action,
      forced,
      standard
    }
  };
};
var findSignalByNumber2 = function(number, signals22) {
  const signal = signals22.find(({ name }) => os.constants.signals[name] === number);
  if (signal !== void 0) {
    return signal;
  }
  return signals22.find((signalA) => signalA.number === number);
};
getSignalsByNumber2();
var getErrorPrefix2 = ({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled }) => {
  if (timedOut) {
    return `timed out after ${timeout} milliseconds`;
  }
  if (isCanceled) {
    return "was canceled";
  }
  if (errorCode !== void 0) {
    return `failed with ${errorCode}`;
  }
  if (signal !== void 0) {
    return `was killed with ${signal} (${signalDescription})`;
  }
  if (exitCode !== void 0) {
    return `failed with exit code ${exitCode}`;
  }
  return "failed";
};
var makeError2 = ({
  stdout,
  stderr,
  all,
  error,
  signal,
  exitCode,
  command,
  escapedCommand,
  timedOut,
  isCanceled,
  killed,
  parsed: { options: { timeout } }
}) => {
  exitCode = exitCode === null ? void 0 : exitCode;
  signal = signal === null ? void 0 : signal;
  const signalDescription = signal === void 0 ? void 0 : signalsByName2[signal].description;
  const errorCode = error && error.code;
  const prefix = getErrorPrefix2({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled });
  const execaMessage = `Command ${prefix}: ${command}`;
  const isError = Object.prototype.toString.call(error) === "[object Error]";
  const shortMessage = isError ? `${execaMessage}
${error.message}` : execaMessage;
  const message = [shortMessage, stderr, stdout].filter(Boolean).join("\n");
  if (isError) {
    error.originalMessage = error.message;
    error.message = message;
  } else {
    error = new Error(message);
  }
  error.shortMessage = shortMessage;
  error.command = command;
  error.escapedCommand = escapedCommand;
  error.exitCode = exitCode;
  error.signal = signal;
  error.signalDescription = signalDescription;
  error.stdout = stdout;
  error.stderr = stderr;
  if (all !== void 0) {
    error.all = all;
  }
  if ("bufferedData" in error) {
    delete error.bufferedData;
  }
  error.failed = true;
  error.timedOut = Boolean(timedOut);
  error.isCanceled = isCanceled;
  error.killed = killed && !timedOut;
  return error;
};
var aliases = ["stdin", "stdout", "stderr"];
var hasAlias2 = (options) => aliases.some((alias) => options[alias] !== void 0);
var normalizeStdio = (options) => {
  if (!options) {
    return;
  }
  const { stdio } = options;
  if (stdio === void 0) {
    return aliases.map((alias) => options[alias]);
  }
  if (hasAlias2(options)) {
    throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${aliases.map((alias) => `\`${alias}\``).join(", ")}`);
  }
  if (typeof stdio === "string") {
    return stdio;
  }
  if (!Array.isArray(stdio)) {
    throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
  }
  const length = Math.max(stdio.length, aliases.length);
  return Array.from({ length }, (value, index) => stdio[index]);
};
var import_signal_exit2 = __toESM2(require_signal_exit());
var DEFAULT_FORCE_KILL_TIMEOUT2 = 1e3 * 5;
var spawnedKill = (kill2, signal = "SIGTERM", options = {}) => {
  const killResult = kill2(signal);
  setKillTimeout2(kill2, signal, options, killResult);
  return killResult;
};
var setKillTimeout2 = (kill2, signal, options, killResult) => {
  if (!shouldForceKill(signal, options, killResult)) {
    return;
  }
  const timeout = getForceKillAfterTimeout(options);
  const t = setTimeout(() => {
    kill2("SIGKILL");
  }, timeout);
  if (t.unref) {
    t.unref();
  }
};
var shouldForceKill = (signal, { forceKillAfterTimeout }, killResult) => isSigterm(signal) && forceKillAfterTimeout !== false && killResult;
var isSigterm = (signal) => signal === os__default.default.constants.signals.SIGTERM || typeof signal === "string" && signal.toUpperCase() === "SIGTERM";
var getForceKillAfterTimeout = ({ forceKillAfterTimeout = true }) => {
  if (forceKillAfterTimeout === true) {
    return DEFAULT_FORCE_KILL_TIMEOUT2;
  }
  if (!Number.isFinite(forceKillAfterTimeout) || forceKillAfterTimeout < 0) {
    throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout}\` (${typeof forceKillAfterTimeout})`);
  }
  return forceKillAfterTimeout;
};
var spawnedCancel = (spawned, context) => {
  const killResult = spawned.kill();
  if (killResult) {
    context.isCanceled = true;
  }
};
var timeoutKill = (spawned, signal, reject) => {
  spawned.kill(signal);
  reject(Object.assign(new Error("Timed out"), { timedOut: true, signal }));
};
var setupTimeout = (spawned, { timeout, killSignal = "SIGTERM" }, spawnedPromise) => {
  if (timeout === 0 || timeout === void 0) {
    return spawnedPromise;
  }
  let timeoutId;
  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      timeoutKill(spawned, killSignal, reject);
    }, timeout);
  });
  const safeSpawnedPromise = spawnedPromise.finally(() => {
    clearTimeout(timeoutId);
  });
  return Promise.race([timeoutPromise, safeSpawnedPromise]);
};
var validateTimeout2 = ({ timeout }) => {
  if (timeout !== void 0 && (!Number.isFinite(timeout) || timeout < 0)) {
    throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
  }
};
var setExitHandler = async (spawned, { cleanup, detached }, timedPromise) => {
  if (!cleanup || detached) {
    return timedPromise;
  }
  const removeExitHandler = (0, import_signal_exit2.default)(() => {
    spawned.kill();
  });
  return timedPromise.finally(() => {
    removeExitHandler();
  });
};
function isStream2(stream) {
  return stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
}
function isWritableStream3(stream) {
  return isStream2(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
}
var import_get_stream4 = __toESM2(require_get_stream());
var import_merge_stream = __toESM2(require_merge_stream());
var handleInput = (spawned, input) => {
  if (input === void 0 || spawned.stdin === void 0) {
    return;
  }
  if (isStream2(input)) {
    input.pipe(spawned.stdin);
  } else {
    spawned.stdin.end(input);
  }
};
var makeAllStream2 = (spawned, { all }) => {
  if (!all || !spawned.stdout && !spawned.stderr) {
    return;
  }
  const mixed = (0, import_merge_stream.default)();
  if (spawned.stdout) {
    mixed.add(spawned.stdout);
  }
  if (spawned.stderr) {
    mixed.add(spawned.stderr);
  }
  return mixed;
};
var getBufferedData2 = async (stream, streamPromise) => {
  if (!stream) {
    return;
  }
  stream.destroy();
  try {
    return await streamPromise;
  } catch (error) {
    return error.bufferedData;
  }
};
var getStreamPromise = (stream, { encoding, buffer, maxBuffer }) => {
  if (!stream || !buffer) {
    return;
  }
  if (encoding) {
    return (0, import_get_stream4.default)(stream, { encoding, maxBuffer });
  }
  return import_get_stream4.default.buffer(stream, { maxBuffer });
};
var getSpawnedResult = async ({ stdout, stderr, all }, { encoding, buffer, maxBuffer }, processDone) => {
  const stdoutPromise = getStreamPromise(stdout, { encoding, buffer, maxBuffer });
  const stderrPromise = getStreamPromise(stderr, { encoding, buffer, maxBuffer });
  const allPromise = getStreamPromise(all, { encoding, buffer, maxBuffer: maxBuffer * 2 });
  try {
    return await Promise.all([processDone, stdoutPromise, stderrPromise, allPromise]);
  } catch (error) {
    return Promise.all([
      { error, signal: error.signal, timedOut: error.timedOut },
      getBufferedData2(stdout, stdoutPromise),
      getBufferedData2(stderr, stderrPromise),
      getBufferedData2(all, allPromise)
    ]);
  }
};
var nativePromisePrototype2 = (async () => {
})().constructor.prototype;
var descriptors2 = ["then", "catch", "finally"].map((property) => [
  property,
  Reflect.getOwnPropertyDescriptor(nativePromisePrototype2, property)
]);
var mergePromise2 = (spawned, promise) => {
  for (const [property, descriptor] of descriptors2) {
    const value = typeof promise === "function" ? (...args) => Reflect.apply(descriptor.value, promise(), args) : descriptor.value.bind(promise);
    Reflect.defineProperty(spawned, property, { ...descriptor, value });
  }
  return spawned;
};
var getSpawnedPromise = (spawned) => new Promise((resolve, reject) => {
  spawned.on("exit", (exitCode, signal) => {
    resolve({ exitCode, signal });
  });
  spawned.on("error", (error) => {
    reject(error);
  });
  if (spawned.stdin) {
    spawned.stdin.on("error", (error) => {
      reject(error);
    });
  }
});
var normalizeArgs = (file, args = []) => {
  if (!Array.isArray(args)) {
    return [file];
  }
  return [file, ...args];
};
var NO_ESCAPE_REGEXP2 = /^[\w.-]+$/;
var DOUBLE_QUOTES_REGEXP = /"/g;
var escapeArg = (arg) => {
  if (typeof arg !== "string" || NO_ESCAPE_REGEXP2.test(arg)) {
    return arg;
  }
  return `"${arg.replace(DOUBLE_QUOTES_REGEXP, '\\"')}"`;
};
var joinCommand2 = (file, args) => normalizeArgs(file, args).join(" ");
var getEscapedCommand = (file, args) => normalizeArgs(file, args).map((arg) => escapeArg(arg)).join(" ");
var DEFAULT_MAX_BUFFER = 1e3 * 1e3 * 100;
var getEnv2 = ({ env: envOption, extendEnv, preferLocal, localDir, execPath: execPath2 }) => {
  const env = extendEnv ? { ...process22__default.default.env, ...envOption } : envOption;
  if (preferLocal) {
    return npmRunPathEnv2({ env, cwd: localDir, execPath: execPath2 });
  }
  return env;
};
var handleArguments = (file, args, options = {}) => {
  const parsed = import_cross_spawn2.default._parse(file, args, options);
  file = parsed.command;
  args = parsed.args;
  options = parsed.options;
  options = {
    maxBuffer: DEFAULT_MAX_BUFFER,
    buffer: true,
    stripFinalNewline: true,
    extendEnv: true,
    preferLocal: false,
    localDir: options.cwd || process22__default.default.cwd(),
    execPath: process22__default.default.execPath,
    encoding: "utf8",
    reject: true,
    cleanup: true,
    all: false,
    windowsHide: true,
    ...options
  };
  options.env = getEnv2(options);
  options.stdio = normalizeStdio(options);
  if (process22__default.default.platform === "win32" && path6__default.default.basename(file, ".exe") === "cmd") {
    args.unshift("/q");
  }
  return { file, args, options, parsed };
};
var handleOutput = (options, value, error) => {
  if (typeof value !== "string" && !buffer.Buffer.isBuffer(value)) {
    return error === void 0 ? void 0 : "";
  }
  if (options.stripFinalNewline) {
    return stripFinalNewline2(value);
  }
  return value;
};
function execa2(file, args, options) {
  const parsed = handleArguments(file, args, options);
  const command = joinCommand2(file, args);
  const escapedCommand = getEscapedCommand(file, args);
  validateTimeout2(parsed.options);
  let spawned;
  try {
    spawned = childProcess2__default.default.spawn(parsed.file, parsed.args, parsed.options);
  } catch (error) {
    const dummySpawned = new childProcess2__default.default.ChildProcess();
    const errorPromise = Promise.reject(makeError2({
      error,
      stdout: "",
      stderr: "",
      all: "",
      command,
      escapedCommand,
      parsed,
      timedOut: false,
      isCanceled: false,
      killed: false
    }));
    return mergePromise2(dummySpawned, errorPromise);
  }
  const spawnedPromise = getSpawnedPromise(spawned);
  const timedPromise = setupTimeout(spawned, parsed.options, spawnedPromise);
  const processDone = setExitHandler(spawned, parsed.options, timedPromise);
  const context = { isCanceled: false };
  spawned.kill = spawnedKill.bind(null, spawned.kill.bind(spawned));
  spawned.cancel = spawnedCancel.bind(null, spawned, context);
  const handlePromise2 = async () => {
    const [{ error, exitCode, signal, timedOut }, stdoutResult, stderrResult, allResult] = await getSpawnedResult(spawned, parsed.options, processDone);
    const stdout = handleOutput(parsed.options, stdoutResult);
    const stderr = handleOutput(parsed.options, stderrResult);
    const all = handleOutput(parsed.options, allResult);
    if (error || exitCode !== 0 || signal !== null) {
      const returnedError = makeError2({
        error,
        exitCode,
        signal,
        stdout,
        stderr,
        all,
        command,
        escapedCommand,
        parsed,
        timedOut,
        isCanceled: context.isCanceled || (parsed.options.signal ? parsed.options.signal.aborted : false),
        killed: spawned.killed
      });
      if (!parsed.options.reject) {
        return returnedError;
      }
      throw returnedError;
    }
    return {
      command,
      escapedCommand,
      exitCode: 0,
      stdout,
      stderr,
      all,
      failed: false,
      timedOut: false,
      isCanceled: false,
      killed: false
    };
  };
  const handlePromiseOnce = onetime_default(handlePromise2);
  handleInput(spawned, parsed.options.input);
  spawned.all = makeAllStream2(spawned, parsed.options);
  return mergePromise2(spawned, handlePromiseOnce);
}
function parseArgs(input, options) {
  if (process22__default.default.platform !== "win32") {
    throw new Error("Windows only");
  }
  input = [input].flat();
  if (input.length === 0) {
    throw new Error("PID or image name required");
  }
  const arguments_ = [];
  if (options.system && options.username && options.password) {
    arguments_.push("/s", options.system, "/u", options.username, "/p", options.password);
  }
  if (options.filter) {
    arguments_.push("/fi", options.filter);
  }
  if (options.force) {
    arguments_.push("/f");
  }
  if (options.tree) {
    arguments_.push("/t");
  }
  for (const element of input) {
    arguments_.push(typeof element === "number" ? "/pid" : "/im", element);
  }
  return arguments_;
}
async function taskkill(input, options = {}) {
  await execa2("taskkill", parseArgs(input, options));
}
var import_cross_spawn22 = __toESM2(require_cross_spawn2());
var getRealtimeSignals22 = () => {
  const length = SIGRTMAX22 - SIGRTMIN22 + 1;
  return Array.from({ length }, getRealtimeSignal22);
};
var getRealtimeSignal22 = (value, index) => ({
  name: `SIGRT${index + 1}`,
  number: SIGRTMIN22 + index,
  action: "terminate",
  description: "Application-specific signal (realtime)",
  standard: "posix"
});
var SIGRTMIN22 = 34;
var SIGRTMAX22 = 64;
var SIGNALS22 = [
  {
    name: "SIGHUP",
    number: 1,
    action: "terminate",
    description: "Terminal closed",
    standard: "posix"
  },
  {
    name: "SIGINT",
    number: 2,
    action: "terminate",
    description: "User interruption with CTRL-C",
    standard: "ansi"
  },
  {
    name: "SIGQUIT",
    number: 3,
    action: "core",
    description: "User interruption with CTRL-\\",
    standard: "posix"
  },
  {
    name: "SIGILL",
    number: 4,
    action: "core",
    description: "Invalid machine instruction",
    standard: "ansi"
  },
  {
    name: "SIGTRAP",
    number: 5,
    action: "core",
    description: "Debugger breakpoint",
    standard: "posix"
  },
  {
    name: "SIGABRT",
    number: 6,
    action: "core",
    description: "Aborted",
    standard: "ansi"
  },
  {
    name: "SIGIOT",
    number: 6,
    action: "core",
    description: "Aborted",
    standard: "bsd"
  },
  {
    name: "SIGBUS",
    number: 7,
    action: "core",
    description: "Bus error due to misaligned, non-existing address or paging error",
    standard: "bsd"
  },
  {
    name: "SIGEMT",
    number: 7,
    action: "terminate",
    description: "Command should be emulated but is not implemented",
    standard: "other"
  },
  {
    name: "SIGFPE",
    number: 8,
    action: "core",
    description: "Floating point arithmetic error",
    standard: "ansi"
  },
  {
    name: "SIGKILL",
    number: 9,
    action: "terminate",
    description: "Forced termination",
    standard: "posix",
    forced: true
  },
  {
    name: "SIGUSR1",
    number: 10,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGSEGV",
    number: 11,
    action: "core",
    description: "Segmentation fault",
    standard: "ansi"
  },
  {
    name: "SIGUSR2",
    number: 12,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGPIPE",
    number: 13,
    action: "terminate",
    description: "Broken pipe or socket",
    standard: "posix"
  },
  {
    name: "SIGALRM",
    number: 14,
    action: "terminate",
    description: "Timeout or timer",
    standard: "posix"
  },
  {
    name: "SIGTERM",
    number: 15,
    action: "terminate",
    description: "Termination",
    standard: "ansi"
  },
  {
    name: "SIGSTKFLT",
    number: 16,
    action: "terminate",
    description: "Stack is empty or overflowed",
    standard: "other"
  },
  {
    name: "SIGCHLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "posix"
  },
  {
    name: "SIGCLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "other"
  },
  {
    name: "SIGCONT",
    number: 18,
    action: "unpause",
    description: "Unpaused",
    standard: "posix",
    forced: true
  },
  {
    name: "SIGSTOP",
    number: 19,
    action: "pause",
    description: "Paused",
    standard: "posix",
    forced: true
  },
  {
    name: "SIGTSTP",
    number: 20,
    action: "pause",
    description: 'Paused using CTRL-Z or "suspend"',
    standard: "posix"
  },
  {
    name: "SIGTTIN",
    number: 21,
    action: "pause",
    description: "Background process cannot read terminal input",
    standard: "posix"
  },
  {
    name: "SIGBREAK",
    number: 21,
    action: "terminate",
    description: "User interruption with CTRL-BREAK",
    standard: "other"
  },
  {
    name: "SIGTTOU",
    number: 22,
    action: "pause",
    description: "Background process cannot write to terminal output",
    standard: "posix"
  },
  {
    name: "SIGURG",
    number: 23,
    action: "ignore",
    description: "Socket received out-of-band data",
    standard: "bsd"
  },
  {
    name: "SIGXCPU",
    number: 24,
    action: "core",
    description: "Process timed out",
    standard: "bsd"
  },
  {
    name: "SIGXFSZ",
    number: 25,
    action: "core",
    description: "File too big",
    standard: "bsd"
  },
  {
    name: "SIGVTALRM",
    number: 26,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGPROF",
    number: 27,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGWINCH",
    number: 28,
    action: "ignore",
    description: "Terminal window size changed",
    standard: "bsd"
  },
  {
    name: "SIGIO",
    number: 29,
    action: "terminate",
    description: "I/O is available",
    standard: "other"
  },
  {
    name: "SIGPOLL",
    number: 29,
    action: "terminate",
    description: "Watched event",
    standard: "other"
  },
  {
    name: "SIGINFO",
    number: 29,
    action: "ignore",
    description: "Request for process information",
    standard: "other"
  },
  {
    name: "SIGPWR",
    number: 30,
    action: "terminate",
    description: "Device running out of power",
    standard: "systemv"
  },
  {
    name: "SIGSYS",
    number: 31,
    action: "core",
    description: "Invalid system call",
    standard: "other"
  },
  {
    name: "SIGUNUSED",
    number: 31,
    action: "terminate",
    description: "Invalid system call",
    standard: "other"
  }
];
var getSignals22 = () => {
  const realtimeSignals = getRealtimeSignals22();
  const signals22 = [...SIGNALS22, ...realtimeSignals].map(normalizeSignal22);
  return signals22;
};
var normalizeSignal22 = ({
  name,
  number: defaultNumber,
  description,
  action,
  forced = false,
  standard
}) => {
  const {
    signals: { [name]: constantSignal }
  } = os.constants;
  const supported = constantSignal !== void 0;
  const number = supported ? constantSignal : defaultNumber;
  return { name, number, description, supported, action, forced, standard };
};
var getSignalsByName22 = () => {
  const signals22 = getSignals22();
  return Object.fromEntries(signals22.map(getSignalByName22));
};
var getSignalByName22 = ({
  name,
  number,
  description,
  supported,
  action,
  forced,
  standard
}) => [name, { name, number, description, supported, action, forced, standard }];
var signalsByName22 = getSignalsByName22();
var getSignalsByNumber22 = () => {
  const signals22 = getSignals22();
  const length = SIGRTMAX22 + 1;
  const signalsA = Array.from(
    { length },
    (value, number) => getSignalByNumber22(number, signals22)
  );
  return Object.assign({}, ...signalsA);
};
var getSignalByNumber22 = (number, signals22) => {
  const signal = findSignalByNumber22(number, signals22);
  if (signal === void 0) {
    return {};
  }
  const { name, description, supported, action, forced, standard } = signal;
  return {
    [number]: {
      name,
      number,
      description,
      supported,
      action,
      forced,
      standard
    }
  };
};
var findSignalByNumber22 = (number, signals22) => {
  const signal = signals22.find(({ name }) => os.constants.signals[name] === number);
  if (signal !== void 0) {
    return signal;
  }
  return signals22.find((signalA) => signalA.number === number);
};
getSignalsByNumber22();
var getErrorPrefix22 = ({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled }) => {
  if (timedOut) {
    return `timed out after ${timeout} milliseconds`;
  }
  if (isCanceled) {
    return "was canceled";
  }
  if (errorCode !== void 0) {
    return `failed with ${errorCode}`;
  }
  if (signal !== void 0) {
    return `was killed with ${signal} (${signalDescription})`;
  }
  if (exitCode !== void 0) {
    return `failed with exit code ${exitCode}`;
  }
  return "failed";
};
var makeError22 = ({
  stdout,
  stderr,
  all,
  error,
  signal,
  exitCode,
  command,
  escapedCommand,
  timedOut,
  isCanceled,
  killed,
  parsed: { options: { timeout, cwd = process22__default.default.cwd() } }
}) => {
  exitCode = exitCode === null ? void 0 : exitCode;
  signal = signal === null ? void 0 : signal;
  const signalDescription = signal === void 0 ? void 0 : signalsByName22[signal].description;
  const errorCode = error && error.code;
  const prefix = getErrorPrefix22({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled });
  const execaMessage = `Command ${prefix}: ${command}`;
  const isError = Object.prototype.toString.call(error) === "[object Error]";
  const shortMessage = isError ? `${execaMessage}
${error.message}` : execaMessage;
  const message = [shortMessage, stderr, stdout].filter(Boolean).join("\n");
  if (isError) {
    error.originalMessage = error.message;
    error.message = message;
  } else {
    error = new Error(message);
  }
  error.shortMessage = shortMessage;
  error.command = command;
  error.escapedCommand = escapedCommand;
  error.exitCode = exitCode;
  error.signal = signal;
  error.signalDescription = signalDescription;
  error.stdout = stdout;
  error.stderr = stderr;
  error.cwd = cwd;
  if (all !== void 0) {
    error.all = all;
  }
  if ("bufferedData" in error) {
    delete error.bufferedData;
  }
  error.failed = true;
  error.timedOut = Boolean(timedOut);
  error.isCanceled = isCanceled;
  error.killed = killed && !timedOut;
  return error;
};
var aliases2 = ["stdin", "stdout", "stderr"];
var hasAlias22 = (options) => aliases2.some((alias) => options[alias] !== void 0);
var normalizeStdio2 = (options) => {
  if (!options) {
    return;
  }
  const { stdio } = options;
  if (stdio === void 0) {
    return aliases2.map((alias) => options[alias]);
  }
  if (hasAlias22(options)) {
    throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${aliases2.map((alias) => `\`${alias}\``).join(", ")}`);
  }
  if (typeof stdio === "string") {
    return stdio;
  }
  if (!Array.isArray(stdio)) {
    throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
  }
  const length = Math.max(stdio.length, aliases2.length);
  return Array.from({ length }, (value, index) => stdio[index]);
};
var signals2 = [];
signals2.push("SIGHUP", "SIGINT", "SIGTERM");
if (process.platform !== "win32") {
  signals2.push(
    "SIGALRM",
    "SIGABRT",
    "SIGVTALRM",
    "SIGXCPU",
    "SIGXFSZ",
    "SIGUSR2",
    "SIGTRAP",
    "SIGSYS",
    "SIGQUIT",
    "SIGIOT"
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
  );
}
if (process.platform === "linux") {
  signals2.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
}
var processOk2 = (process13) => !!process13 && typeof process13 === "object" && typeof process13.removeListener === "function" && typeof process13.emit === "function" && typeof process13.reallyExit === "function" && typeof process13.listeners === "function" && typeof process13.kill === "function" && typeof process13.pid === "number" && typeof process13.on === "function";
var kExitEmitter2 = Symbol.for("signal-exit emitter");
var global22 = globalThis;
var ObjectDefineProperty2 = Object.defineProperty.bind(Object);
var Emitter2 = class {
  emitted = {
    afterExit: false,
    exit: false
  };
  listeners = {
    afterExit: [],
    exit: []
  };
  count = 0;
  id = Math.random();
  constructor() {
    if (global22[kExitEmitter2]) {
      return global22[kExitEmitter2];
    }
    ObjectDefineProperty2(global22, kExitEmitter2, {
      value: this,
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
  on(ev, fn) {
    this.listeners[ev].push(fn);
  }
  removeListener(ev, fn) {
    const list = this.listeners[ev];
    const i2 = list.indexOf(fn);
    if (i2 === -1) {
      return;
    }
    if (i2 === 0 && list.length === 1) {
      list.length = 0;
    } else {
      list.splice(i2, 1);
    }
  }
  emit(ev, code, signal) {
    if (this.emitted[ev]) {
      return false;
    }
    this.emitted[ev] = true;
    let ret = false;
    for (const fn of this.listeners[ev]) {
      ret = fn(code, signal) === true || ret;
    }
    if (ev === "exit") {
      ret = this.emit("afterExit", code, signal) || ret;
    }
    return ret;
  }
};
var SignalExitBase2 = class {
};
var signalExitWrap2 = (handler) => {
  return {
    onExit(cb, opts) {
      return handler.onExit(cb, opts);
    },
    load() {
      return handler.load();
    },
    unload() {
      return handler.unload();
    }
  };
};
var SignalExitFallback2 = class extends SignalExitBase2 {
  onExit() {
    return () => {
    };
  }
  load() {
  }
  unload() {
  }
};
var SignalExit2 = class extends SignalExitBase2 {
  // "SIGHUP" throws an `ENOSYS` error on Windows,
  // so use a supported signal instead
  /* c8 ignore start */
  #hupSig = process62.platform === "win32" ? "SIGINT" : "SIGHUP";
  /* c8 ignore stop */
  #emitter = new Emitter2();
  #process;
  #originalProcessEmit;
  #originalProcessReallyExit;
  #sigListeners = {};
  #loaded = false;
  constructor(process13) {
    super();
    this.#process = process13;
    this.#sigListeners = {};
    for (const sig of signals2) {
      this.#sigListeners[sig] = () => {
        const listeners = this.#process.listeners(sig);
        let { count: count2 } = this.#emitter;
        const p = process13;
        if (typeof p.__signal_exit_emitter__ === "object" && typeof p.__signal_exit_emitter__.count === "number") {
          count2 += p.__signal_exit_emitter__.count;
        }
        if (listeners.length === count2) {
          this.unload();
          const ret = this.#emitter.emit("exit", null, sig);
          const s = sig === "SIGHUP" ? this.#hupSig : sig;
          if (!ret)
            process13.kill(process13.pid, s);
        }
      };
    }
    this.#originalProcessReallyExit = process13.reallyExit;
    this.#originalProcessEmit = process13.emit;
  }
  onExit(cb, opts) {
    if (!processOk2(this.#process)) {
      return () => {
      };
    }
    if (this.#loaded === false) {
      this.load();
    }
    const ev = opts?.alwaysLast ? "afterExit" : "exit";
    this.#emitter.on(ev, cb);
    return () => {
      this.#emitter.removeListener(ev, cb);
      if (this.#emitter.listeners["exit"].length === 0 && this.#emitter.listeners["afterExit"].length === 0) {
        this.unload();
      }
    };
  }
  load() {
    if (this.#loaded) {
      return;
    }
    this.#loaded = true;
    this.#emitter.count += 1;
    for (const sig of signals2) {
      try {
        const fn = this.#sigListeners[sig];
        if (fn)
          this.#process.on(sig, fn);
      } catch (_) {
      }
    }
    this.#process.emit = (ev, ...a2) => {
      return this.#processEmit(ev, ...a2);
    };
    this.#process.reallyExit = (code) => {
      return this.#processReallyExit(code);
    };
  }
  unload() {
    if (!this.#loaded) {
      return;
    }
    this.#loaded = false;
    signals2.forEach((sig) => {
      const listener = this.#sigListeners[sig];
      if (!listener) {
        throw new Error("Listener not defined for signal: " + sig);
      }
      try {
        this.#process.removeListener(sig, listener);
      } catch (_) {
      }
    });
    this.#process.emit = this.#originalProcessEmit;
    this.#process.reallyExit = this.#originalProcessReallyExit;
    this.#emitter.count -= 1;
  }
  #processReallyExit(code) {
    if (!processOk2(this.#process)) {
      return 0;
    }
    this.#process.exitCode = code || 0;
    this.#emitter.emit("exit", this.#process.exitCode, null);
    return this.#originalProcessReallyExit.call(this.#process, this.#process.exitCode);
  }
  #processEmit(ev, ...args) {
    const og = this.#originalProcessEmit;
    if (ev === "exit" && processOk2(this.#process)) {
      if (typeof args[0] === "number") {
        this.#process.exitCode = args[0];
      }
      const ret = og.call(this.#process, ev, ...args);
      this.#emitter.emit("exit", this.#process.exitCode, null);
      return ret;
    } else {
      return og.call(this.#process, ev, ...args);
    }
  }
};
var process62 = globalThis.process;
var {
  /**
   * Called when the process is exiting, whether via signal, explicit
   * exit, or running out of stuff to do.
   *
   * If the global process object is not suitable for instrumentation,
   * then this will be a no-op.
   *
   * Returns a function that may be used to unload signal-exit.
   */
  onExit: onExit2
} = signalExitWrap2(processOk2(process62) ? new SignalExit2(process62) : new SignalExitFallback2());
var DEFAULT_FORCE_KILL_TIMEOUT22 = 1e3 * 5;
var spawnedKill2 = (kill2, signal = "SIGTERM", options = {}) => {
  const killResult = kill2(signal);
  setKillTimeout22(kill2, signal, options, killResult);
  return killResult;
};
var setKillTimeout22 = (kill2, signal, options, killResult) => {
  if (!shouldForceKill2(signal, options, killResult)) {
    return;
  }
  const timeout = getForceKillAfterTimeout2(options);
  const t = setTimeout(() => {
    kill2("SIGKILL");
  }, timeout);
  if (t.unref) {
    t.unref();
  }
};
var shouldForceKill2 = (signal, { forceKillAfterTimeout }, killResult) => isSigterm2(signal) && forceKillAfterTimeout !== false && killResult;
var isSigterm2 = (signal) => signal === os__default.default.constants.signals.SIGTERM || typeof signal === "string" && signal.toUpperCase() === "SIGTERM";
var getForceKillAfterTimeout2 = ({ forceKillAfterTimeout = true }) => {
  if (forceKillAfterTimeout === true) {
    return DEFAULT_FORCE_KILL_TIMEOUT22;
  }
  if (!Number.isFinite(forceKillAfterTimeout) || forceKillAfterTimeout < 0) {
    throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout}\` (${typeof forceKillAfterTimeout})`);
  }
  return forceKillAfterTimeout;
};
var spawnedCancel2 = (spawned, context) => {
  const killResult = spawned.kill();
  if (killResult) {
    context.isCanceled = true;
  }
};
var timeoutKill2 = (spawned, signal, reject) => {
  spawned.kill(signal);
  reject(Object.assign(new Error("Timed out"), { timedOut: true, signal }));
};
var setupTimeout2 = (spawned, { timeout, killSignal = "SIGTERM" }, spawnedPromise) => {
  if (timeout === 0 || timeout === void 0) {
    return spawnedPromise;
  }
  let timeoutId;
  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      timeoutKill2(spawned, killSignal, reject);
    }, timeout);
  });
  const safeSpawnedPromise = spawnedPromise.finally(() => {
    clearTimeout(timeoutId);
  });
  return Promise.race([timeoutPromise, safeSpawnedPromise]);
};
var validateTimeout22 = ({ timeout }) => {
  if (timeout !== void 0 && (!Number.isFinite(timeout) || timeout < 0)) {
    throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
  }
};
var setExitHandler2 = async (spawned, { cleanup, detached }, timedPromise) => {
  if (!cleanup || detached) {
    return timedPromise;
  }
  const removeExitHandler = onExit2(() => {
    spawned.kill();
  });
  return timedPromise.finally(() => {
    removeExitHandler();
  });
};
var isExecaChildProcess = (target) => target instanceof childProcess2.ChildProcess && typeof target.then === "function";
var pipeToTarget = (spawned, streamName, target) => {
  if (typeof target === "string") {
    spawned[streamName].pipe(fs.createWriteStream(target));
    return spawned;
  }
  if (isWritableStream3(target)) {
    spawned[streamName].pipe(target);
    return spawned;
  }
  if (!isExecaChildProcess(target)) {
    throw new TypeError("The second argument must be a string, a stream or an Execa child process.");
  }
  if (!isWritableStream3(target.stdin)) {
    throw new TypeError("The target child process's stdin must be available.");
  }
  spawned[streamName].pipe(target.stdin);
  return target;
};
var addPipeMethods = (spawned) => {
  if (spawned.stdout !== null) {
    spawned.pipeStdout = pipeToTarget.bind(void 0, spawned, "stdout");
  }
  if (spawned.stderr !== null) {
    spawned.pipeStderr = pipeToTarget.bind(void 0, spawned, "stderr");
  }
  if (spawned.all !== void 0) {
    spawned.pipeAll = pipeToTarget.bind(void 0, spawned, "all");
  }
};
var getStreamContents3 = async (stream, { init, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, finalize }, { maxBuffer = Number.POSITIVE_INFINITY } = {}) => {
  if (!isAsyncIterable(stream)) {
    throw new Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
  }
  const state = init();
  state.length = 0;
  try {
    for await (const chunk of stream) {
      const chunkType = getChunkType2(chunk);
      const convertedChunk = convertChunk[chunkType](chunk, state);
      appendChunk2({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer });
    }
    appendFinalChunk2({ state, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer });
    return finalize(state);
  } catch (error) {
    error.bufferedData = finalize(state);
    throw error;
  }
};
var appendFinalChunk2 = ({ state, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer }) => {
  const convertedChunk = getFinalChunk(state);
  if (convertedChunk !== void 0) {
    appendChunk2({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer });
  }
};
var appendChunk2 = ({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer }) => {
  const chunkSize = getSize(convertedChunk);
  const newLength = state.length + chunkSize;
  if (newLength <= maxBuffer) {
    addNewChunk2(convertedChunk, state, addChunk, newLength);
    return;
  }
  const truncatedChunk = truncateChunk(convertedChunk, maxBuffer - state.length);
  if (truncatedChunk !== void 0) {
    addNewChunk2(truncatedChunk, state, addChunk, maxBuffer);
  }
  throw new MaxBufferError2();
};
var addNewChunk2 = (convertedChunk, state, addChunk, newLength) => {
  state.contents = addChunk(convertedChunk, state, newLength);
  state.length = newLength;
};
var isAsyncIterable = (stream) => typeof stream === "object" && stream !== null && typeof stream[Symbol.asyncIterator] === "function";
var getChunkType2 = (chunk) => {
  const typeOfChunk = typeof chunk;
  if (typeOfChunk === "string") {
    return "string";
  }
  if (typeOfChunk !== "object" || chunk === null) {
    return "others";
  }
  if (globalThis.Buffer?.isBuffer(chunk)) {
    return "buffer";
  }
  const prototypeName = objectToString3.call(chunk);
  if (prototypeName === "[object ArrayBuffer]") {
    return "arrayBuffer";
  }
  if (prototypeName === "[object DataView]") {
    return "dataView";
  }
  if (Number.isInteger(chunk.byteLength) && Number.isInteger(chunk.byteOffset) && objectToString3.call(chunk.buffer) === "[object ArrayBuffer]") {
    return "typedArray";
  }
  return "others";
};
var { toString: objectToString3 } = Object.prototype;
var MaxBufferError2 = class extends Error {
  name = "MaxBufferError";
  constructor() {
    super("maxBuffer exceeded");
  }
};
var identity3 = (value) => value;
var noop3 = () => void 0;
var getContentsProp = ({ contents }) => contents;
var throwObjectStream2 = (chunk) => {
  throw new Error(`Streams in object mode are not supported: ${String(chunk)}`);
};
var getLengthProp = (convertedChunk) => convertedChunk.length;
async function getStreamAsArrayBuffer2(stream, options) {
  return getStreamContents3(stream, arrayBufferMethods2, options);
}
var initArrayBuffer2 = () => ({ contents: new ArrayBuffer(0) });
var useTextEncoder2 = (chunk) => textEncoder3.encode(chunk);
var textEncoder3 = new TextEncoder();
var useUint8Array2 = (chunk) => new Uint8Array(chunk);
var useUint8ArrayWithOffset2 = (chunk) => new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
var truncateArrayBufferChunk2 = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
var addArrayBufferChunk2 = (convertedChunk, { contents, length: previousLength }, length) => {
  const newContents = hasArrayBufferResize2() ? resizeArrayBuffer2(contents, length) : resizeArrayBufferSlow2(contents, length);
  new Uint8Array(newContents).set(convertedChunk, previousLength);
  return newContents;
};
var resizeArrayBufferSlow2 = (contents, length) => {
  if (length <= contents.byteLength) {
    return contents;
  }
  const arrayBuffer = new ArrayBuffer(getNewContentsLength2(length));
  new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
  return arrayBuffer;
};
var resizeArrayBuffer2 = (contents, length) => {
  if (length <= contents.maxByteLength) {
    contents.resize(length);
    return contents;
  }
  const arrayBuffer = new ArrayBuffer(length, { maxByteLength: getNewContentsLength2(length) });
  new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
  return arrayBuffer;
};
var getNewContentsLength2 = (length) => SCALE_FACTOR2 ** Math.ceil(Math.log(length) / Math.log(SCALE_FACTOR2));
var SCALE_FACTOR2 = 2;
var finalizeArrayBuffer2 = ({ contents, length }) => hasArrayBufferResize2() ? contents : contents.slice(0, length);
var hasArrayBufferResize2 = () => "resize" in ArrayBuffer.prototype;
var arrayBufferMethods2 = {
  init: initArrayBuffer2,
  convertChunk: {
    string: useTextEncoder2,
    buffer: useUint8Array2,
    arrayBuffer: useUint8Array2,
    dataView: useUint8ArrayWithOffset2,
    typedArray: useUint8ArrayWithOffset2,
    others: throwObjectStream2
  },
  getSize: getLengthProp,
  truncateChunk: truncateArrayBufferChunk2,
  addChunk: addArrayBufferChunk2,
  getFinalChunk: noop3,
  finalize: finalizeArrayBuffer2
};
async function getStreamAsBuffer2(stream, options) {
  if (!("Buffer" in globalThis)) {
    throw new Error("getStreamAsBuffer() is only supported in Node.js");
  }
  try {
    return arrayBufferToNodeBuffer(await getStreamAsArrayBuffer2(stream, options));
  } catch (error) {
    if (error.bufferedData !== void 0) {
      error.bufferedData = arrayBufferToNodeBuffer(error.bufferedData);
    }
    throw error;
  }
}
var arrayBufferToNodeBuffer = (arrayBuffer) => globalThis.Buffer.from(arrayBuffer);
async function getStreamAsString2(stream, options) {
  return getStreamContents3(stream, stringMethods2, options);
}
var initString2 = () => ({ contents: "", textDecoder: new TextDecoder() });
var useTextDecoder2 = (chunk, { textDecoder: textDecoder2 }) => textDecoder2.decode(chunk, { stream: true });
var addStringChunk2 = (convertedChunk, { contents }) => contents + convertedChunk;
var truncateStringChunk2 = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
var getFinalStringChunk2 = ({ textDecoder: textDecoder2 }) => {
  const finalChunk = textDecoder2.decode();
  return finalChunk === "" ? void 0 : finalChunk;
};
var stringMethods2 = {
  init: initString2,
  convertChunk: {
    string: identity3,
    buffer: useTextDecoder2,
    arrayBuffer: useTextDecoder2,
    dataView: useTextDecoder2,
    typedArray: useTextDecoder2,
    others: throwObjectStream2
  },
  getSize: getLengthProp,
  truncateChunk: truncateStringChunk2,
  addChunk: addStringChunk2,
  getFinalChunk: getFinalStringChunk2,
  finalize: getContentsProp
};
var import_merge_stream2 = __toESM2(require_merge_stream());
var validateInputOptions = (input) => {
  if (input !== void 0) {
    throw new TypeError("The `input` and `inputFile` options cannot be both set.");
  }
};
var getInput = ({ input, inputFile }) => {
  if (typeof inputFile !== "string") {
    return input;
  }
  validateInputOptions(input);
  return fs.createReadStream(inputFile);
};
var handleInput2 = (spawned, options) => {
  const input = getInput(options);
  if (input === void 0) {
    return;
  }
  if (isStream2(input)) {
    input.pipe(spawned.stdin);
  } else {
    spawned.stdin.end(input);
  }
};
var makeAllStream22 = (spawned, { all }) => {
  if (!all || !spawned.stdout && !spawned.stderr) {
    return;
  }
  const mixed = (0, import_merge_stream2.default)();
  if (spawned.stdout) {
    mixed.add(spawned.stdout);
  }
  if (spawned.stderr) {
    mixed.add(spawned.stderr);
  }
  return mixed;
};
var getBufferedData22 = async (stream, streamPromise) => {
  if (!stream || streamPromise === void 0) {
    return;
  }
  await promises$1.setTimeout(0);
  stream.destroy();
  try {
    return await streamPromise;
  } catch (error) {
    return error.bufferedData;
  }
};
var getStreamPromise2 = (stream, { encoding, buffer, maxBuffer }) => {
  if (!stream || !buffer) {
    return;
  }
  if (encoding === "utf8" || encoding === "utf-8") {
    return getStreamAsString2(stream, { maxBuffer });
  }
  if (encoding === null || encoding === "buffer") {
    return getStreamAsBuffer2(stream, { maxBuffer });
  }
  return applyEncoding(stream, maxBuffer, encoding);
};
var applyEncoding = async (stream, maxBuffer, encoding) => {
  const buffer = await getStreamAsBuffer2(stream, { maxBuffer });
  return buffer.toString(encoding);
};
var getSpawnedResult2 = async ({ stdout, stderr, all }, { encoding, buffer, maxBuffer }, processDone) => {
  const stdoutPromise = getStreamPromise2(stdout, { encoding, buffer, maxBuffer });
  const stderrPromise = getStreamPromise2(stderr, { encoding, buffer, maxBuffer });
  const allPromise = getStreamPromise2(all, { encoding, buffer, maxBuffer: maxBuffer * 2 });
  try {
    return await Promise.all([processDone, stdoutPromise, stderrPromise, allPromise]);
  } catch (error) {
    return Promise.all([
      { error, signal: error.signal, timedOut: error.timedOut },
      getBufferedData22(stdout, stdoutPromise),
      getBufferedData22(stderr, stderrPromise),
      getBufferedData22(all, allPromise)
    ]);
  }
};
var nativePromisePrototype22 = (async () => {
})().constructor.prototype;
var descriptors22 = ["then", "catch", "finally"].map((property) => [
  property,
  Reflect.getOwnPropertyDescriptor(nativePromisePrototype22, property)
]);
var mergePromise22 = (spawned, promise) => {
  for (const [property, descriptor] of descriptors22) {
    const value = typeof promise === "function" ? (...args) => Reflect.apply(descriptor.value, promise(), args) : descriptor.value.bind(promise);
    Reflect.defineProperty(spawned, property, { ...descriptor, value });
  }
};
var getSpawnedPromise2 = (spawned) => new Promise((resolve, reject) => {
  spawned.on("exit", (exitCode, signal) => {
    resolve({ exitCode, signal });
  });
  spawned.on("error", (error) => {
    reject(error);
  });
  if (spawned.stdin) {
    spawned.stdin.on("error", (error) => {
      reject(error);
    });
  }
});
var normalizeArgs2 = (file, args = []) => {
  if (!Array.isArray(args)) {
    return [file];
  }
  return [file, ...args];
};
var NO_ESCAPE_REGEXP22 = /^[\w.-]+$/;
var escapeArg2 = (arg) => {
  if (typeof arg !== "string" || NO_ESCAPE_REGEXP22.test(arg)) {
    return arg;
  }
  return `"${arg.replaceAll('"', '\\"')}"`;
};
var joinCommand22 = (file, args) => normalizeArgs2(file, args).join(" ");
var getEscapedCommand2 = (file, args) => normalizeArgs2(file, args).map((arg) => escapeArg2(arg)).join(" ");
var verboseDefault2 = util.debuglog("execa").enabled;
var padField2 = (field, padding) => String(field).padStart(padding, "0");
var getTimestamp = () => {
  const date = /* @__PURE__ */ new Date();
  return `${padField2(date.getHours(), 2)}:${padField2(date.getMinutes(), 2)}:${padField2(date.getSeconds(), 2)}.${padField2(date.getMilliseconds(), 3)}`;
};
var logCommand2 = (escapedCommand, { verbose }) => {
  if (!verbose) {
    return;
  }
  process22__default.default.stderr.write(`[${getTimestamp()}] ${escapedCommand}
`);
};
var DEFAULT_MAX_BUFFER2 = 1e3 * 1e3 * 100;
var getEnv22 = ({ env: envOption, extendEnv, preferLocal, localDir, execPath: execPath2 }) => {
  const env = extendEnv ? { ...process22__default.default.env, ...envOption } : envOption;
  if (preferLocal) {
    return npmRunPathEnv2({ env, cwd: localDir, execPath: execPath2 });
  }
  return env;
};
var handleArguments2 = (file, args, options = {}) => {
  const parsed = import_cross_spawn22.default._parse(file, args, options);
  file = parsed.command;
  args = parsed.args;
  options = parsed.options;
  options = {
    maxBuffer: DEFAULT_MAX_BUFFER2,
    buffer: true,
    stripFinalNewline: true,
    extendEnv: true,
    preferLocal: false,
    localDir: options.cwd || process22__default.default.cwd(),
    execPath: process22__default.default.execPath,
    encoding: "utf8",
    reject: true,
    cleanup: true,
    all: false,
    windowsHide: true,
    verbose: verboseDefault2,
    ...options
  };
  options.env = getEnv22(options);
  options.stdio = normalizeStdio2(options);
  if (process22__default.default.platform === "win32" && path6__default.default.basename(file, ".exe") === "cmd") {
    args.unshift("/q");
  }
  return { file, args, options, parsed };
};
var handleOutput2 = (options, value, error) => {
  if (typeof value !== "string" && !buffer.Buffer.isBuffer(value)) {
    return error === void 0 ? void 0 : "";
  }
  if (options.stripFinalNewline) {
    return stripFinalNewline2(value);
  }
  return value;
};
function execa22(file, args, options) {
  const parsed = handleArguments2(file, args, options);
  const command = joinCommand22(file, args);
  const escapedCommand = getEscapedCommand2(file, args);
  logCommand2(escapedCommand, parsed.options);
  validateTimeout22(parsed.options);
  let spawned;
  try {
    spawned = childProcess2__default.default.spawn(parsed.file, parsed.args, parsed.options);
  } catch (error) {
    const dummySpawned = new childProcess2__default.default.ChildProcess();
    const errorPromise = Promise.reject(makeError22({
      error,
      stdout: "",
      stderr: "",
      all: "",
      command,
      escapedCommand,
      parsed,
      timedOut: false,
      isCanceled: false,
      killed: false
    }));
    mergePromise22(dummySpawned, errorPromise);
    return dummySpawned;
  }
  const spawnedPromise = getSpawnedPromise2(spawned);
  const timedPromise = setupTimeout2(spawned, parsed.options, spawnedPromise);
  const processDone = setExitHandler2(spawned, parsed.options, timedPromise);
  const context = { isCanceled: false };
  spawned.kill = spawnedKill2.bind(null, spawned.kill.bind(spawned));
  spawned.cancel = spawnedCancel2.bind(null, spawned, context);
  const handlePromise2 = async () => {
    const [{ error, exitCode, signal, timedOut }, stdoutResult, stderrResult, allResult] = await getSpawnedResult2(spawned, parsed.options, processDone);
    const stdout = handleOutput2(parsed.options, stdoutResult);
    const stderr = handleOutput2(parsed.options, stderrResult);
    const all = handleOutput2(parsed.options, allResult);
    if (error || exitCode !== 0 || signal !== null) {
      const returnedError = makeError22({
        error,
        exitCode,
        signal,
        stdout,
        stderr,
        all,
        command,
        escapedCommand,
        parsed,
        timedOut,
        isCanceled: context.isCanceled || (parsed.options.signal ? parsed.options.signal.aborted : false),
        killed: spawned.killed
      });
      if (!parsed.options.reject) {
        return returnedError;
      }
      throw returnedError;
    }
    return {
      command,
      escapedCommand,
      exitCode: 0,
      stdout,
      stderr,
      all,
      failed: false,
      timedOut: false,
      isCanceled: false,
      killed: false
    };
  };
  const handlePromiseOnce = onetime_default(handlePromise2);
  handleInput2(spawned, parsed.options);
  spawned.all = makeAllStream22(spawned, parsed.options);
  addPipeMethods(spawned);
  mergePromise22(spawned, handlePromiseOnce);
  return spawned;
}
var netstat = async (type) => {
  const { stdout } = await execa22("netstat", ["-anv", "-p", type]);
  return stdout;
};
var macos = async () => {
  const result = await Promise.all([
    netstat("tcp"),
    netstat("udp")
  ]);
  const tcp = result[0];
  const headerStart = tcp.indexOf("\n") + 1;
  const header = tcp.slice(headerStart, tcp.indexOf("\n", headerStart));
  return {
    stdout: result.join("\n"),
    addressColumn: 3,
    // Some versions of macOS print two extra columns for rxbytes and
    // txbytes before pid. Unfortunately headers can't be parsed because
    // they're space separated but some contain spaces, so we use this
    // heuristic to distinguish the two netstat versions.
    pidColumn: header.includes("rxbytes") ? 10 : 8
  };
};
var linux = async () => {
  const { stdout } = await execa22("ss", ["-tunlp"]);
  return {
    stdout,
    addressColumn: 4,
    pidColumn: 6
  };
};
var windows = async () => {
  const { stdout } = await execa22("netstat", ["-ano"]);
  return {
    stdout,
    addressColumn: 1,
    pidColumn: 4
  };
};
process22__default.default.platform === "darwin" ? macos : process22__default.default.platform === "linux" ? linux : windows;
var __dirname$1 = path6__default.default.dirname(url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('handler.cjs', document.baseURI).href))));
var TEN_MEGABYTES = 1e3 * 1e3 * 10;
var execFile = util.promisify(childProcess2__default.default.execFile);
var windows2 = async () => {
  let binary;
  switch (process22__default.default.arch) {
    case "x64":
      binary = "fastlist-0.3.0-x64.exe";
      break;
    case "ia32":
      binary = "fastlist-0.3.0-x86.exe";
      break;
    default:
      throw new Error(`Unsupported architecture: ${process22__default.default.arch}`);
  }
  const binaryPath = path6__default.default.join(__dirname$1, "vendor", binary);
  const { stdout } = await execFile(binaryPath, {
    maxBuffer: TEN_MEGABYTES,
    windowsHide: true
  });
  return stdout.trim().split("\r\n").map((line) => line.split("	")).map(([pid, ppid, name]) => ({
    pid: Number.parseInt(pid, 10),
    ppid: Number.parseInt(ppid, 10),
    name
  }));
};
var nonWindowsMultipleCalls = async (options = {}) => {
  const flags = (options.all === false ? "" : "a") + "wwxo";
  const returnValue = {};
  await Promise.all(["comm", "args", "ppid", "uid", "%cpu", "%mem"].map(async (cmd) => {
    const { stdout } = await execFile("ps", [flags, `pid,${cmd}`], { maxBuffer: TEN_MEGABYTES });
    for (let line of stdout.trim().split("\n").slice(1)) {
      line = line.trim();
      const [pid] = line.split(" ", 1);
      const value = line.slice(pid.length + 1).trim();
      if (returnValue[pid] === void 0) {
        returnValue[pid] = {};
      }
      returnValue[pid][cmd] = value;
    }
  }));
  return Object.entries(returnValue).filter(([, value]) => value.comm && value.args && value.ppid && value.uid && value["%cpu"] && value["%mem"]).map(([key, value]) => ({
    pid: Number.parseInt(key, 10),
    name: path6__default.default.basename(value.comm),
    cmd: value.args,
    ppid: Number.parseInt(value.ppid, 10),
    uid: Number.parseInt(value.uid, 10),
    cpu: Number.parseFloat(value["%cpu"]),
    memory: Number.parseFloat(value["%mem"])
  }));
};
var ERROR_MESSAGE_PARSING_FAILED = "ps output parsing failed";
var psOutputRegex = /^[ \t]*(?<pid>\d+)[ \t]+(?<ppid>\d+)[ \t]+(?<uid>[-\d]+)[ \t]+(?<cpu>\d+\.\d+)[ \t]+(?<memory>\d+\.\d+)[ \t]+(?<comm>.*)?/;
var nonWindowsCall = async (options = {}) => {
  const flags = options.all === false ? "wwxo" : "awwxo";
  const psPromises = [
    execFile("ps", [flags, "pid,ppid,uid,%cpu,%mem,comm"], { maxBuffer: TEN_MEGABYTES }),
    execFile("ps", [flags, "pid,args"], { maxBuffer: TEN_MEGABYTES })
  ];
  const [psLines, psArgsLines] = (await Promise.all(psPromises)).map(({ stdout }) => stdout.trim().split("\n"));
  const psPids = new Set(psPromises.map((promise) => promise.child.pid));
  psLines.shift();
  psArgsLines.shift();
  const processCmds = {};
  for (const line of psArgsLines) {
    const [pid, cmds] = line.trim().split(" ");
    processCmds[pid] = cmds.join(" ");
  }
  const processes = psLines.map((line) => {
    const match = psOutputRegex.exec(line);
    if (match === null) {
      throw new Error(ERROR_MESSAGE_PARSING_FAILED);
    }
    const { pid, ppid, uid, cpu, memory, comm } = match.groups;
    const processInfo = {
      pid: Number.parseInt(pid, 10),
      ppid: Number.parseInt(ppid, 10),
      uid: Number.parseInt(uid, 10),
      cpu: Number.parseFloat(cpu),
      memory: Number.parseFloat(memory),
      name: path6__default.default.basename(comm),
      cmd: processCmds[pid]
    };
    return processInfo;
  }).filter((processInfo) => !psPids.has(processInfo.pid));
  return processes;
};
var nonWindows = async (options = {}) => {
  try {
    return await nonWindowsCall(options);
  } catch {
    return nonWindowsMultipleCalls(options);
  }
};
process22__default.default.platform === "win32" ? windows2 : nonWindows;
var linuxProcessMatchesName = (wantedProcessName, process13) => {
  if (typeof wantedProcessName === "string") {
    return process13.name === wantedProcessName || process13.cmd.split(" ")[0] === wantedProcessName;
  }
  return process13.pid === wantedProcessName;
};
var nonLinuxProcessMatchesName = (wantedProcessName, process13) => {
  if (typeof wantedProcessName === "string") {
    return process13.name === wantedProcessName;
  }
  return process13.pid === wantedProcessName;
};
process22__default.default.platform === "linux" ? linuxProcessMatchesName : nonLinuxProcessMatchesName;
var TASKKILL_EXIT_CODE_FOR_PROCESS_FILTERING_SIGTERM = 255;
var missingBinaryError = async (command, arguments_) => {
  try {
    return await execa22(command, arguments_);
  } catch (error) {
    if (error.code === "ENOENT") {
      const newError = new Error(`\`${command}\` doesn't seem to be installed and is required by fkill`);
      newError.sourceError = error;
      throw newError;
    }
    throw error;
  }
};
var windowsKill = async (input, options) => {
  try {
    return await taskkill(input, {
      force: options.force,
      tree: options.tree === void 0 ? true : options.tree
    });
  } catch (error) {
    if (error.exitCode === TASKKILL_EXIT_CODE_FOR_PROCESS_FILTERING_SIGTERM && !options.force) {
      return;
    }
    throw error;
  }
};
var macosKill = (input, options) => {
  const killByName = typeof input === "string";
  const command = killByName ? "pkill" : "kill";
  const arguments_ = [input];
  if (killByName && options.ignoreCase) {
    arguments_.unshift("-i");
  }
  if (killByName) {
    arguments_.unshift("-x");
  }
  if (options.force) {
    if (killByName) {
      arguments_.unshift("-KILL");
    } else {
      arguments_.unshift("-9");
    }
  }
  return missingBinaryError(command, arguments_);
};
var defaultKill = (input, options) => {
  const killByName = typeof input === "string";
  const command = killByName ? "killall" : "kill";
  const arguments_ = [input];
  if (options.force) {
    arguments_.unshift("-9");
  }
  if (killByName && options.ignoreCase) {
    arguments_.unshift("-I");
  }
  return missingBinaryError(command, arguments_);
};
(() => {
  if (process22__default.default.platform === "darwin") {
    return macosKill;
  }
  if (process22__default.default.platform === "win32") {
    return windowsKill;
  }
  return defaultKill;
})();

// ../utils/dist/server.js
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

// src/handler.ts
var droidSessionMap = /* @__PURE__ */ new Map();
var activeProcesses = /* @__PURE__ */ new Map();
var lastDroidSessionId;
var parseStreamLine = (line) => {
  const trimmed = line.trim();
  if (!trimmed) return null;
  try {
    return JSON.parse(trimmed);
  } catch {
    return null;
  }
};
var runDroidAgent = async function* (prompt, options) {
  const droidArgs = ["exec", "--output-format", "stream-json"];
  const autoLevel = options?.autoLevel ?? "low";
  droidArgs.push("--auto", autoLevel);
  if (options?.model) {
    droidArgs.push("--model", options.model);
  }
  if (options?.reasoningEffort) {
    droidArgs.push("--reasoning-effort", options.reasoningEffort);
  }
  const workspacePath = options?.workspace ?? options?.cwd ?? process.env.REACT_GRAB_CWD ?? process.cwd();
  droidArgs.push("--cwd", workspacePath);
  const droidSessionId = options?.sessionId ? droidSessionMap.get(options.sessionId) : void 0;
  if (droidSessionId) {
    droidArgs.push("--session-id", droidSessionId);
  }
  let droidProcess;
  let stderrBuffer = "";
  try {
    yield { type: "status", content: "Thinking\u2026" };
    droidProcess = execa("droid", droidArgs, {
      stdin: "pipe",
      stdout: "pipe",
      stderr: "pipe",
      env: { ...process.env }
    });
    if (options?.sessionId) {
      activeProcesses.set(options.sessionId, droidProcess);
    }
    if (droidProcess.stderr) {
      droidProcess.stderr.on("data", (chunk) => {
        stderrBuffer += chunk.toString();
      });
    }
    const messageQueue = [];
    let resolveWait = null;
    let processEnded = false;
    let capturedDroidSessionId;
    const enqueueMessage = (message) => {
      messageQueue.push(message);
      if (resolveWait) {
        resolveWait();
        resolveWait = null;
      }
    };
    const processLine = (line) => {
      const event = parseStreamLine(line);
      if (!event) return;
      if (!capturedDroidSessionId && event.session_id) {
        capturedDroidSessionId = event.session_id;
      }
      switch (event.type) {
        case "message": {
          if (event.role === "assistant" && event.text) {
            enqueueMessage({ type: "status", content: event.text });
          }
          break;
        }
        case "tool_call": {
          if (event.toolName) {
            enqueueMessage({
              type: "status",
              content: `Running ${event.toolName}\u2026`
            });
          }
          break;
        }
        case "completion": {
          if (event.is_error) {
            enqueueMessage({
              type: "error",
              content: event.finalText || "Unknown error"
            });
          } else {
            enqueueMessage({ type: "status", content: COMPLETED_STATUS });
          }
          break;
        }
      }
    };
    let buffer = "";
    if (droidProcess.stdout) {
      droidProcess.stdout.on("data", (chunk) => {
        buffer += chunk.toString();
        let newlineIndex;
        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          const line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);
          processLine(line);
        }
      });
    }
    if (droidProcess.stdin) {
      droidProcess.stdin.write(prompt);
      droidProcess.stdin.end();
    }
    const childProcess = droidProcess;
    childProcess.on("close", (code) => {
      if (options?.sessionId) {
        activeProcesses.delete(options.sessionId);
      }
      if (buffer.trim()) {
        processLine(buffer);
      }
      if (options?.sessionId && capturedDroidSessionId) {
        droidSessionMap.set(options.sessionId, capturedDroidSessionId);
      }
      if (capturedDroidSessionId) {
        lastDroidSessionId = capturedDroidSessionId;
      }
      processEnded = true;
      if (code !== 0 && !childProcess.killed) {
        enqueueMessage({
          type: "error",
          content: `droid exec exited with code ${code}`
        });
      }
      enqueueMessage({ type: "done", content: "" });
      if (resolveWait) {
        resolveWait();
        resolveWait = null;
      }
    });
    childProcess.on("error", (error) => {
      if (options?.sessionId) {
        activeProcesses.delete(options.sessionId);
      }
      processEnded = true;
      const isNotInstalled = "code" in error && error.code === "ENOENT";
      if (isNotInstalled) {
        enqueueMessage({
          type: "error",
          content: "droid CLI is not installed. Please install Factory CLI to use this provider.\n\nInstallation: curl -fsSL https://app.factory.ai/cli | sh"
        });
      } else {
        const errorMessage = formatSpawnError(error, "droid");
        const stderrContent = stderrBuffer.trim();
        const fullError = stderrContent ? `${errorMessage}

stderr:
${stderrContent}` : errorMessage;
        enqueueMessage({ type: "error", content: fullError });
      }
      enqueueMessage({ type: "done", content: "" });
      if (resolveWait) {
        resolveWait();
        resolveWait = null;
      }
    });
    while (true) {
      if (options?.signal?.aborted) {
        if (droidProcess && !droidProcess.killed) {
          droidProcess.kill("SIGTERM");
        }
        return;
      }
      if (messageQueue.length > 0) {
        const message = messageQueue.shift();
        if (message.type === "done") {
          yield message;
          return;
        }
        yield message;
      } else if (processEnded) {
        return;
      } else {
        await new Promise((resolve) => {
          resolveWait = resolve;
        });
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? formatSpawnError(error, "droid") : "Unknown error";
    const stderrContent = stderrBuffer.trim();
    const fullError = stderrContent ? `${errorMessage}

stderr:
${stderrContent}` : errorMessage;
    yield { type: "error", content: fullError };
    yield { type: "done", content: "" };
  }
};
var abortDroidAgent = (sessionId) => {
  const activeProcess = activeProcesses.get(sessionId);
  if (activeProcess && !activeProcess.killed) {
    activeProcess.kill("SIGTERM");
  }
  activeProcesses.delete(sessionId);
};
var undoDroidAgent = async () => {
  if (!lastDroidSessionId) {
    return;
  }
  try {
    const droidArgs = [
      "exec",
      "--output-format",
      "stream-json",
      "--auto",
      "low",
      "--session-id",
      lastDroidSessionId
    ];
    const workspacePath = process.env.REACT_GRAB_CWD ?? process.cwd();
    const droidProcess = execa("droid", droidArgs, {
      stdin: "pipe",
      stdout: "pipe",
      stderr: "pipe",
      env: { ...process.env },
      cwd: workspacePath
    });
    if (droidProcess.stdin) {
      droidProcess.stdin.write("undo the last change you made");
      droidProcess.stdin.end();
    }
    await droidProcess;
  } catch (error) {
    const errorMessage = error instanceof Error ? formatSpawnError(error, "droid") : "Unknown error";
    throw new Error(`Undo failed: ${errorMessage}`);
  }
};
var droidAgentHandler = {
  agentId: "droid",
  run: runDroidAgent,
  abort: abortDroidAgent,
  undo: undoDroidAgent
};

exports.droidAgentHandler = droidAgentHandler;
