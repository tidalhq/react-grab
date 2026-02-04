#!/usr/bin/env node
'use strict';

var http = require('http');
var process2 = require('process');
var buffer = require('buffer');
var path = require('path');
var childProcess2 = require('child_process');
var url = require('url');
var os = require('os');
var fs = require('fs');
var promises = require('timers/promises');
var util = require('util');
var readline = require('readline');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var process2__default = /*#__PURE__*/_interopDefault(process2);
var path__default = /*#__PURE__*/_interopDefault(path);
var childProcess2__default = /*#__PURE__*/_interopDefault(childProcess2);
var os__default = /*#__PURE__*/_interopDefault(os);
var readline__default = /*#__PURE__*/_interopDefault(readline);

var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require2 = /* @__PURE__ */ ((x) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof __require !== "undefined" ? __require : a)[b]
}) : x)(function(x) {
  if (typeof __require !== "undefined") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
  __defProp(target, "default", { value: mod, enumerable: true }),
  mod
));
var require_constants = __commonJS({
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
var require_buffer_util = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/buffer-util.js"(exports, module) {
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
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
var require_limiter = __commonJS({
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
var require_permessage_deflate = __commonJS({
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
var require_validation = __commonJS({
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
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
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
var require_receiver = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/receiver.js"(exports, module) {
    var { Writable } = __require2("stream");
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
    var Receiver2 = class extends Writable {
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
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
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
var require_sender = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/sender.js"(exports, module) {
    var { Duplex } = __require2("stream");
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
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
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
var require_event_target = __commonJS({
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
          wrapper = function onMessage(data, isBinary) {
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
var require_extension = __commonJS({
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
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
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
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i;
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
    function format(extensions) {
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
    module.exports = { format, parse };
  }
});
var require_websocket = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/websocket.js"(exports, module) {
    var EventEmitter = __require2("events");
    var https = __require2("https");
    var http = __require2("http");
    var net = __require2("net");
    var tls = __require2("tls");
    var { randomBytes, createHash } = __require2("crypto");
    var { Duplex, Readable } = __require2("stream");
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
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var kAborted = Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket3 = class _WebSocket extends EventEmitter {
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
        opts.headers["Sec-WebSocket-Extensions"] = format({
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
var require_stream = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/stream.js"(exports, module) {
    require_websocket();
    var { Duplex } = __require2("stream");
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
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module.exports = createWebSocketStream2;
  }
});
var require_subprotocol = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/subprotocol.js"(exports, module) {
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module.exports = { parse };
  }
});
var require_websocket_server = __commonJS({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/lib/websocket-server.js"(exports, module) {
    var EventEmitter = __require2("events");
    var http = __require2("http");
    var { Duplex } = __require2("stream");
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
    var WebSocketServer2 = class extends EventEmitter {
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
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
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
  createWebSocketStream: () => import_stream.default,
  default: () => wrapper_default
});
var import_stream;
var import_receiver;
var import_sender;
var import_websocket;
var import_websocket_server;
var wrapper_default;
var init_wrapper = __esm({
  "../../node_modules/.pnpm/ws@8.19.0/node_modules/ws/wrapper.mjs"() {
    import_stream = __toESM(require_stream());
    import_receiver = __toESM(require_receiver());
    import_sender = __toESM(require_sender());
    import_websocket = __toESM(require_websocket());
    import_websocket_server = __toESM(require_websocket_server());
    wrapper_default = import_websocket.default;
  }
});
var require_picocolors = __commonJS({
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
var require_windows = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js"(exports, module) {
    module.exports = isexe;
    isexe.sync = sync;
    var fs2 = __require2("fs");
    function checkPathExt(path5, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path5.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path5, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path5, options);
    }
    function isexe(path5, options, cb) {
      fs2.stat(path5, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path5, options));
      });
    }
    function sync(path5, options) {
      return checkStat(fs2.statSync(path5), path5, options);
    }
  }
});
var require_mode = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js"(exports, module) {
    module.exports = isexe;
    isexe.sync = sync;
    var fs2 = __require2("fs");
    function isexe(path5, options, cb) {
      fs2.stat(path5, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path5, options) {
      return checkStat(fs2.statSync(path5), options);
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
      var u = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o = parseInt("001", 8);
      var ug = u | g;
      var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});
var require_isexe = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js"(exports, module) {
    __require2("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module.exports = isexe;
    isexe.sync = sync;
    function isexe(path5, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path5, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path5, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path5, options) {
      try {
        return core.sync(path5, options || {});
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
var require_which = __commonJS({
  "../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js"(exports, module) {
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path5 = __require2("path");
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
      const step = (i) => new Promise((resolve, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path5.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve(subStep(p, i, 0));
      });
      const subStep = (p, i, ii) => new Promise((resolve, reject) => {
        if (ii === pathExt.length)
          return resolve(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve(p + ext);
          }
          return resolve(subStep(p, i, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i = 0; i < pathEnv.length; i++) {
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path5.join(pathPart, cmd);
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
var require_path_key = __commonJS({
  "../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js"(exports, module) {
    var pathKey2 = (options = {}) => {
      const environment = options.env || process.env;
      const platform = options.platform || process.platform;
      if (platform !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module.exports = pathKey2;
    module.exports.default = pathKey2;
  }
});
var require_resolveCommand = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/resolveCommand.js"(exports, module) {
    var path5 = __require2("path");
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
          pathExt: withoutPathExt ? path5.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path5.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module.exports = resolveCommand;
  }
});
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
var require_shebang_regex = __commonJS({
  "../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js"(exports, module) {
    module.exports = /^#!(.*)/;
  }
});
var require_shebang_command = __commonJS({
  "../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js"(exports, module) {
    var shebangRegex = require_shebang_regex();
    module.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path5, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path5.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});
var require_readShebang = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/readShebang.js"(exports, module) {
    var fs2 = __require2("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs2.openSync(command, "r");
        fs2.readSync(fd, buffer, 0, size, 0);
        fs2.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module.exports = readShebang;
  }
});
var require_parse = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/parse.js"(exports, module) {
    var path5 = __require2("path");
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
        parsed.command = path5.normalize(parsed.command);
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
var require_cross_spawn = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js"(exports, module) {
    var cp = __require2("child_process");
    var parse = require_parse();
    var enoent = require_enoent();
    function spawn2(command, args, options) {
      const parsed = parse(command, args, options);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    function spawnSync(command, args, options) {
      const parsed = parse(command, args, options);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    module.exports = spawn2;
    module.exports.spawn = spawn2;
    module.exports.sync = spawnSync;
    module.exports._parse = parse;
    module.exports._enoent = enoent;
  }
});
var require_signals = __commonJS({
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
var require_signal_exit = __commonJS({
  "../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/index.js"(exports, module) {
    var process13 = global.process;
    var processOk2 = function(process14) {
      return process14 && typeof process14 === "object" && typeof process14.removeListener === "function" && typeof process14.emit === "function" && typeof process14.reallyExit === "function" && typeof process14.listeners === "function" && typeof process14.kill === "function" && typeof process14.pid === "number" && typeof process14.on === "function";
    };
    if (!processOk2(process13)) {
      module.exports = function() {
        return function() {
        };
      };
    } else {
      assert = __require2("assert");
      signals2 = require_signals();
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
        if (!processOk2(global.process)) {
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
        if (!loaded || !processOk2(global.process)) {
          return;
        }
        loaded = false;
        signals2.forEach(function(sig) {
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
      signals2.forEach(function(sig) {
        sigListeners[sig] = function listener() {
          if (!processOk2(global.process)) {
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
        return signals2;
      };
      loaded = false;
      load2 = function load3() {
        if (loaded || !processOk2(global.process)) {
          return;
        }
        loaded = true;
        emitter.count += 1;
        signals2 = signals2.filter(function(sig) {
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
        if (!processOk2(global.process)) {
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
        if (ev === "exit" && processOk2(global.process)) {
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
    var signals2;
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
var require_buffer_stream = __commonJS({
  "../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/buffer-stream.js"(exports, module) {
    var { PassThrough: PassThroughStream } = __require2("stream");
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
      const stream = new PassThroughStream({ objectMode });
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
var require_get_stream = __commonJS({
  "../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/index.js"(exports, module) {
    var { constants: BufferConstants } = __require2("buffer");
    var stream = __require2("stream");
    var { promisify: promisify2 } = __require2("util");
    var bufferStream = require_buffer_stream();
    var streamPipelinePromisified = promisify2(stream.pipeline);
    var MaxBufferError2 = class extends Error {
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
            rejectPromise(new MaxBufferError2());
          }
        });
      });
      return stream2.getBufferedValue();
    }
    module.exports = getStream2;
    module.exports.buffer = (stream2, options) => getStream2(stream2, { ...options, encoding: "buffer" });
    module.exports.array = (stream2, options) => getStream2(stream2, { ...options, array: true });
    module.exports.MaxBufferError = MaxBufferError2;
  }
});
var require_merge_stream = __commonJS({
  "../../node_modules/.pnpm/merge-stream@2.0.0/node_modules/merge-stream/index.js"(exports, module) {
    var { PassThrough } = __require2("stream");
    module.exports = function() {
      var sources = [];
      var output = new PassThrough({ objectMode: true });
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
var DEFAULT_RELAY_PORT = 4722;
var HEALTH_CHECK_TIMEOUT_MS = 1e3;
var POST_KILL_DELAY_MS = 100;
var RELAY_TOKEN_PARAM = "token";
var COMPLETED_STATUS = "Completed";
init_wrapper();
var createSessionMessageQueue = () => {
  const pendingMessages = [];
  let resolveNextMessage = null;
  let isClosed = false;
  return {
    push: (message) => {
      if (isClosed) return;
      if (resolveNextMessage) {
        resolveNextMessage({ value: message, done: false });
        resolveNextMessage = null;
      } else {
        pendingMessages.push(message);
      }
    },
    close: () => {
      isClosed = true;
      if (resolveNextMessage) {
        resolveNextMessage({
          value: void 0,
          done: true
        });
        resolveNextMessage = null;
      }
    },
    [Symbol.asyncIterator]: () => ({
      next: () => {
        if (pendingMessages.length > 0) {
          return Promise.resolve({
            value: pendingMessages.shift(),
            done: false
          });
        }
        if (isClosed) {
          return Promise.resolve({
            value: void 0,
            done: true
          });
        }
        return new Promise((resolve) => {
          resolveNextMessage = resolve;
        });
      }
    })
  };
};
var createRelayServer = (options = {}) => {
  const port = options.port ?? DEFAULT_RELAY_PORT;
  const token = options.token;
  const registeredHandlers = /* @__PURE__ */ new Map();
  const activeSessions = /* @__PURE__ */ new Map();
  const browserSockets = /* @__PURE__ */ new Set();
  const handlerSockets = /* @__PURE__ */ new Map();
  const sessionMessageQueues = /* @__PURE__ */ new Map();
  const undoRedoSessionOwners = /* @__PURE__ */ new Map();
  let httpServer = null;
  let webSocketServer = null;
  const broadcastHandlerList = () => {
    const handlerIds = Array.from(registeredHandlers.keys());
    const message = {
      type: "handlers",
      handlers: handlerIds
    };
    const serializedMessage = JSON.stringify(message);
    for (const socket of browserSockets) {
      if (socket.readyState === import_websocket.default.OPEN) {
        socket.send(serializedMessage);
      }
    }
  };
  const sendToBrowser = (socket, message) => {
    if (socket.readyState === import_websocket.default.OPEN) {
      socket.send(JSON.stringify(message));
    }
  };
  const handleBrowserMessage = async (socket, message) => {
    const { type, agentId, sessionId, context } = message;
    if (type === "health") {
      sendToBrowser(socket, { type: "health" });
      return;
    }
    const registered = registeredHandlers.get(agentId);
    if (!registered) {
      sendToBrowser(socket, {
        type: "agent-error",
        agentId,
        sessionId,
        content: `Agent "${agentId}" is not registered`
      });
      return;
    }
    const effectiveSessionId = sessionId ?? `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    if (type === "agent-request") {
      if (!context || typeof context.prompt !== "string" || !Array.isArray(context.content)) {
        sendToBrowser(socket, {
          type: "agent-error",
          agentId,
          sessionId: effectiveSessionId,
          content: "Invalid context: missing or malformed prompt/content"
        });
        return;
      }
      const abortController = new AbortController();
      activeSessions.set(effectiveSessionId, {
        sessionId: effectiveSessionId,
        agentId,
        browserSocket: socket,
        handlerSocket: registered.socket,
        abortController
      });
      runAgentTask(
        registered.handler,
        context,
        effectiveSessionId,
        socket,
        abortController.signal
      );
    } else if (type === "agent-abort") {
      const session = activeSessions.get(effectiveSessionId);
      if (session) {
        session.abortController.abort();
        registered.handler.abort?.(effectiveSessionId);
        activeSessions.delete(effectiveSessionId);
      }
    } else if (type === "agent-undo") {
      try {
        await registered.handler.undo?.();
        sendToBrowser(socket, {
          type: "agent-done",
          agentId,
          sessionId: effectiveSessionId
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        sendToBrowser(socket, {
          type: "agent-error",
          agentId,
          sessionId: effectiveSessionId,
          content: `Undo failed: ${errorMessage}`
        });
      }
    } else if (type === "agent-redo") {
      try {
        await registered.handler.redo?.();
        sendToBrowser(socket, {
          type: "agent-done",
          agentId,
          sessionId: effectiveSessionId
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        sendToBrowser(socket, {
          type: "agent-error",
          agentId,
          sessionId: effectiveSessionId,
          content: `Redo failed: ${errorMessage}`
        });
      }
    }
  };
  const runAgentTask = async (handler, context, sessionId, browserSocket, signal) => {
    const combinedPrompt = `${context.prompt}

${context.content.join("\n\n")}`;
    try {
      let didComplete = false;
      for await (const message of handler.run(combinedPrompt, {
        sessionId,
        signal
      })) {
        if (signal.aborted) break;
        const getBrowserMessageType = (messageType) => {
          if (messageType === "status") return "agent-status";
          if (messageType === "error") return "agent-error";
          return "agent-done";
        };
        sendToBrowser(browserSocket, {
          type: getBrowserMessageType(message.type),
          agentId: handler.agentId,
          sessionId,
          content: message.content
        });
        if (message.type === "done" || message.type === "error") {
          didComplete = true;
          break;
        }
      }
      if (!signal.aborted && !didComplete) {
        sendToBrowser(browserSocket, {
          type: "agent-done",
          agentId: handler.agentId,
          sessionId
        });
      }
    } catch (error) {
      if (!signal.aborted) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        sendToBrowser(browserSocket, {
          type: "agent-error",
          agentId: handler.agentId,
          sessionId,
          content: errorMessage
        });
      }
    } finally {
      activeSessions.delete(sessionId);
    }
  };
  const createRemoteHandler = (agentId, socket) => {
    return {
      agentId,
      run: async function* (userPrompt, options2) {
        const sessionId = options2?.sessionId ?? `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const signal = options2?.signal;
        const messageQueue = createSessionMessageQueue();
        sessionMessageQueues.set(sessionId, messageQueue);
        const cleanupQueue = () => {
          messageQueue.close();
          sessionMessageQueues.delete(sessionId);
        };
        if (signal) {
          signal.addEventListener("abort", cleanupQueue, { once: true });
          if (signal.aborted) {
            cleanupQueue();
            return;
          }
        }
        const invokeMessage = {
          type: "invoke-handler",
          method: "run",
          sessionId,
          payload: { prompt: userPrompt }
        };
        if (socket.readyState !== import_websocket.default.OPEN) {
          yield { type: "error", content: "Handler disconnected" };
          cleanupQueue();
          return;
        }
        socket.send(JSON.stringify(invokeMessage));
        try {
          for await (const message of messageQueue) {
            if (signal?.aborted) break;
            yield message;
            if (message.type === "done" || message.type === "error") {
              break;
            }
          }
        } finally {
          if (signal) {
            signal.removeEventListener("abort", cleanupQueue);
          }
          cleanupQueue();
        }
      },
      abort: (sessionId) => {
        if (socket.readyState === import_websocket.default.OPEN) {
          const abortMessage = {
            type: "invoke-handler",
            method: "abort",
            sessionId
          };
          socket.send(JSON.stringify(abortMessage));
        }
      },
      undo: async () => {
        if (socket.readyState !== import_websocket.default.OPEN) {
          throw new Error("Handler disconnected");
        }
        const sessionId = `undo-${agentId}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const messageQueue = createSessionMessageQueue();
        sessionMessageQueues.set(sessionId, messageQueue);
        undoRedoSessionOwners.set(sessionId, socket);
        const undoMessage = {
          type: "invoke-handler",
          method: "undo",
          sessionId
        };
        socket.send(JSON.stringify(undoMessage));
        try {
          for await (const message of messageQueue) {
            if (message.type === "error") {
              throw new Error(message.content);
            }
            if (message.type === "done") {
              return;
            }
          }
        } finally {
          messageQueue.close();
          sessionMessageQueues.delete(sessionId);
          undoRedoSessionOwners.delete(sessionId);
        }
      },
      redo: async () => {
        if (socket.readyState !== import_websocket.default.OPEN) {
          throw new Error("Handler disconnected");
        }
        const sessionId = `redo-${agentId}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const messageQueue = createSessionMessageQueue();
        sessionMessageQueues.set(sessionId, messageQueue);
        undoRedoSessionOwners.set(sessionId, socket);
        const redoMessage = {
          type: "invoke-handler",
          method: "redo",
          sessionId
        };
        socket.send(JSON.stringify(redoMessage));
        try {
          for await (const message of messageQueue) {
            if (message.type === "error") {
              throw new Error(message.content);
            }
            if (message.type === "done") {
              return;
            }
          }
        } finally {
          messageQueue.close();
          sessionMessageQueues.delete(sessionId);
          undoRedoSessionOwners.delete(sessionId);
        }
      }
    };
  };
  const cleanupSessionsByHandlerSocket = (socket) => {
    for (const [sessionId, session] of activeSessions) {
      if (session.handlerSocket === socket) {
        const queue = sessionMessageQueues.get(sessionId);
        if (queue) {
          queue.push({
            type: "error",
            content: "Handler disconnected"
          });
          queue.close();
          sessionMessageQueues.delete(sessionId);
        }
        session.abortController.abort();
        activeSessions.delete(sessionId);
      }
    }
    for (const [sessionId, ownerSocket] of undoRedoSessionOwners) {
      if (ownerSocket === socket) {
        const queue = sessionMessageQueues.get(sessionId);
        if (queue) {
          queue.push({
            type: "error",
            content: "Handler disconnected"
          });
          queue.close();
          sessionMessageQueues.delete(sessionId);
        }
        undoRedoSessionOwners.delete(sessionId);
      }
    }
  };
  const handleHandlerMessage = (socket, message) => {
    if (message.type === "register-handler") {
      const remoteHandler = createRemoteHandler(message.agentId, socket);
      registeredHandlers.set(message.agentId, {
        agentId: message.agentId,
        handler: remoteHandler,
        socket
      });
      handlerSockets.set(socket, message.agentId);
      broadcastHandlerList();
    } else if (message.type === "unregister-handler") {
      const agentId = handlerSockets.get(socket);
      if (agentId) {
        const registeredHandler = registeredHandlers.get(agentId);
        const isCurrentHandler = registeredHandler?.socket === socket;
        cleanupSessionsByHandlerSocket(socket);
        if (isCurrentHandler) {
          registeredHandlers.delete(agentId);
          broadcastHandlerList();
        }
        handlerSockets.delete(socket);
      }
    } else if (message.type === "agent-status" || message.type === "agent-done" || message.type === "agent-error") {
      const messageQueue = sessionMessageQueues.get(message.sessionId);
      if (messageQueue) {
        const getQueueMessageType = (handlerMessageType) => {
          if (handlerMessageType === "agent-status") return "status";
          if (handlerMessageType === "agent-done") return "done";
          return "error";
        };
        messageQueue.push({
          type: getQueueMessageType(message.type),
          content: message.content ?? ""
        });
        if (message.type === "agent-done" || message.type === "agent-error") {
          messageQueue.close();
        }
      }
    }
  };
  const start = async () => {
    return new Promise((resolve, reject) => {
      httpServer = http.createServer((req, res) => {
        const requestUrl = new URL(req.url ?? "", `http://localhost:${port}`);
        if (requestUrl.pathname === "/health") {
          if (token) {
            const clientToken = requestUrl.searchParams.get(RELAY_TOKEN_PARAM);
            if (clientToken !== token) {
              res.writeHead(401, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ error: "Unauthorized" }));
              return;
            }
          }
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              status: "ok",
              handlers: getRegisteredHandlerIds()
            })
          );
          return;
        }
        res.writeHead(404);
        res.end();
      });
      httpServer.on("error", (error) => {
        reject(error);
      });
      webSocketServer = new import_websocket_server.default({ server: httpServer });
      webSocketServer.on("error", (error) => {
        reject(error);
      });
      webSocketServer.on("connection", (socket, request) => {
        if (token) {
          const connectionUrl = new URL(
            request.url ?? "",
            `http://localhost:${port}`
          );
          const clientToken = connectionUrl.searchParams.get(RELAY_TOKEN_PARAM);
          if (clientToken !== token) {
            socket.close(4001, "Unauthorized");
            return;
          }
        }
        const isHandlerConnection = request.headers["x-relay-handler"] === "true";
        if (isHandlerConnection) {
          socket.on("message", (data) => {
            try {
              const message = JSON.parse(data.toString());
              handleHandlerMessage(socket, message);
            } catch {
            }
          });
          const cleanupHandlerSocket = () => {
            const agentId = handlerSockets.get(socket);
            if (agentId) {
              const registeredHandler = registeredHandlers.get(agentId);
              const isCurrentHandler = registeredHandler?.socket === socket;
              cleanupSessionsByHandlerSocket(socket);
              if (isCurrentHandler) {
                registeredHandlers.delete(agentId);
                broadcastHandlerList();
              }
              handlerSockets.delete(socket);
            }
          };
          socket.on("close", cleanupHandlerSocket);
          socket.on("error", () => {
            cleanupHandlerSocket();
          });
        } else {
          browserSockets.add(socket);
          sendToBrowser(socket, {
            type: "handlers",
            handlers: getRegisteredHandlerIds()
          });
          socket.on("message", (data) => {
            try {
              const message = JSON.parse(
                data.toString()
              );
              handleBrowserMessage(socket, message);
            } catch {
            }
          });
          socket.on("close", () => {
            browserSockets.delete(socket);
            for (const [sessionId, session] of activeSessions) {
              if (session.browserSocket === socket) {
                session.abortController.abort();
                const handler = registeredHandlers.get(session.agentId);
                handler?.handler.abort?.(sessionId);
                activeSessions.delete(sessionId);
              }
            }
          });
        }
      });
      httpServer.listen(port, () => {
        resolve();
      });
    });
  };
  const stop = async () => {
    for (const session of activeSessions.values()) {
      session.abortController.abort();
    }
    activeSessions.clear();
    for (const queue of sessionMessageQueues.values()) {
      queue.close();
    }
    sessionMessageQueues.clear();
    undoRedoSessionOwners.clear();
    for (const socket of browserSockets) {
      socket.close();
    }
    browserSockets.clear();
    for (const socket of handlerSockets.keys()) {
      socket.close();
    }
    handlerSockets.clear();
    webSocketServer?.close();
    httpServer?.close();
  };
  const registerHandler = (handler) => {
    registeredHandlers.set(handler.agentId, {
      agentId: handler.agentId,
      handler
    });
    broadcastHandlerList();
  };
  const unregisterHandler = (agentId) => {
    registeredHandlers.delete(agentId);
    broadcastHandlerList();
  };
  const getRegisteredHandlerIds = () => {
    return Array.from(registeredHandlers.keys());
  };
  return {
    start,
    stop,
    registerHandler,
    unregisterHandler,
    getRegisteredHandlerIds
  };
};
var import_picocolors = __toESM(require_picocolors());
var import_cross_spawn = __toESM(require_cross_spawn());
function stripFinalNewline(input) {
  const LF = typeof input === "string" ? "\n" : "\n".charCodeAt();
  const CR = typeof input === "string" ? "\r" : "\r".charCodeAt();
  if (input[input.length - 1] === LF) {
    input = input.slice(0, -1);
  }
  if (input[input.length - 1] === CR) {
    input = input.slice(0, -1);
  }
  return input;
}
function pathKey(options = {}) {
  const {
    env = process.env,
    platform = process.platform
  } = options;
  if (platform !== "win32") {
    return "PATH";
  }
  return Object.keys(env).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
}
var npmRunPath = ({
  cwd = process2__default.default.cwd(),
  path: pathOption = process2__default.default.env[pathKey()],
  preferLocal = true,
  execPath = process2__default.default.execPath,
  addExecPath = true
} = {}) => {
  const cwdString = cwd instanceof URL ? url.fileURLToPath(cwd) : cwd;
  const cwdPath = path__default.default.resolve(cwdString);
  const result = [];
  if (preferLocal) {
    applyPreferLocal(result, cwdPath);
  }
  if (addExecPath) {
    applyExecPath(result, execPath, cwdPath);
  }
  return [...result, pathOption].join(path__default.default.delimiter);
};
var applyPreferLocal = (result, cwdPath) => {
  let previous;
  while (previous !== cwdPath) {
    result.push(path__default.default.join(cwdPath, "node_modules/.bin"));
    previous = cwdPath;
    cwdPath = path__default.default.resolve(cwdPath, "..");
  }
};
var applyExecPath = (result, execPath, cwdPath) => {
  const execPathString = execPath instanceof URL ? url.fileURLToPath(execPath) : execPath;
  result.push(path__default.default.resolve(cwdPath, execPathString, ".."));
};
var npmRunPathEnv = ({ env = process2__default.default.env, ...options } = {}) => {
  env = { ...env };
  const pathName = pathKey({ env });
  options.path = env[pathName];
  env[pathName] = npmRunPath(options);
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
var getRealtimeSignals = function() {
  const length = SIGRTMAX - SIGRTMIN + 1;
  return Array.from({ length }, getRealtimeSignal);
};
var getRealtimeSignal = function(value, index) {
  return {
    name: `SIGRT${index + 1}`,
    number: SIGRTMIN + index,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix"
  };
};
var SIGRTMIN = 34;
var SIGRTMAX = 64;
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
var getSignals = function() {
  const realtimeSignals = getRealtimeSignals();
  const signals2 = [...SIGNALS, ...realtimeSignals].map(normalizeSignal);
  return signals2;
};
var normalizeSignal = function({
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
var getSignalsByName = function() {
  const signals2 = getSignals();
  return signals2.reduce(getSignalByName, {});
};
var getSignalByName = function(signalByNameMemo, { name, number, description, supported, action, forced, standard }) {
  return {
    ...signalByNameMemo,
    [name]: { name, number, description, supported, action, forced, standard }
  };
};
var signalsByName = getSignalsByName();
var getSignalsByNumber = function() {
  const signals2 = getSignals();
  const length = SIGRTMAX + 1;
  const signalsA = Array.from({ length }, (value, number) => getSignalByNumber(number, signals2));
  return Object.assign({}, ...signalsA);
};
var getSignalByNumber = function(number, signals2) {
  const signal = findSignalByNumber(number, signals2);
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
var findSignalByNumber = function(number, signals2) {
  const signal = signals2.find(({ name }) => os.constants.signals[name] === number);
  if (signal !== void 0) {
    return signal;
  }
  return signals2.find((signalA) => signalA.number === number);
};
getSignalsByNumber();
var getErrorPrefix = ({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled }) => {
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
var makeError = ({
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
  const signalDescription = signal === void 0 ? void 0 : signalsByName[signal].description;
  const errorCode = error && error.code;
  const prefix = getErrorPrefix({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled });
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
var hasAlias = (options) => aliases.some((alias) => options[alias] !== void 0);
var normalizeStdio = (options) => {
  if (!options) {
    return;
  }
  const { stdio } = options;
  if (stdio === void 0) {
    return aliases.map((alias) => options[alias]);
  }
  if (hasAlias(options)) {
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
var import_signal_exit = __toESM(require_signal_exit());
var DEFAULT_FORCE_KILL_TIMEOUT = 1e3 * 5;
var spawnedKill = (kill2, signal = "SIGTERM", options = {}) => {
  const killResult = kill2(signal);
  setKillTimeout(kill2, signal, options, killResult);
  return killResult;
};
var setKillTimeout = (kill2, signal, options, killResult) => {
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
    return DEFAULT_FORCE_KILL_TIMEOUT;
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
var validateTimeout = ({ timeout }) => {
  if (timeout !== void 0 && (!Number.isFinite(timeout) || timeout < 0)) {
    throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
  }
};
var setExitHandler = async (spawned, { cleanup, detached }, timedPromise) => {
  if (!cleanup || detached) {
    return timedPromise;
  }
  const removeExitHandler = (0, import_signal_exit.default)(() => {
    spawned.kill();
  });
  return timedPromise.finally(() => {
    removeExitHandler();
  });
};
function isStream(stream) {
  return stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
}
function isWritableStream(stream) {
  return isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
}
var import_get_stream = __toESM(require_get_stream());
var import_merge_stream = __toESM(require_merge_stream());
var handleInput = (spawned, input) => {
  if (input === void 0 || spawned.stdin === void 0) {
    return;
  }
  if (isStream(input)) {
    input.pipe(spawned.stdin);
  } else {
    spawned.stdin.end(input);
  }
};
var makeAllStream = (spawned, { all }) => {
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
var getBufferedData = async (stream, streamPromise) => {
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
    return (0, import_get_stream.default)(stream, { encoding, maxBuffer });
  }
  return import_get_stream.default.buffer(stream, { maxBuffer });
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
      getBufferedData(stdout, stdoutPromise),
      getBufferedData(stderr, stderrPromise),
      getBufferedData(all, allPromise)
    ]);
  }
};
var nativePromisePrototype = (async () => {
})().constructor.prototype;
var descriptors = ["then", "catch", "finally"].map((property) => [
  property,
  Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)
]);
var mergePromise = (spawned, promise) => {
  for (const [property, descriptor] of descriptors) {
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
var NO_ESCAPE_REGEXP = /^[\w.-]+$/;
var DOUBLE_QUOTES_REGEXP = /"/g;
var escapeArg = (arg) => {
  if (typeof arg !== "string" || NO_ESCAPE_REGEXP.test(arg)) {
    return arg;
  }
  return `"${arg.replace(DOUBLE_QUOTES_REGEXP, '\\"')}"`;
};
var joinCommand = (file, args) => normalizeArgs(file, args).join(" ");
var getEscapedCommand = (file, args) => normalizeArgs(file, args).map((arg) => escapeArg(arg)).join(" ");
var DEFAULT_MAX_BUFFER = 1e3 * 1e3 * 100;
var getEnv = ({ env: envOption, extendEnv, preferLocal, localDir, execPath }) => {
  const env = extendEnv ? { ...process2__default.default.env, ...envOption } : envOption;
  if (preferLocal) {
    return npmRunPathEnv({ env, cwd: localDir, execPath });
  }
  return env;
};
var handleArguments = (file, args, options = {}) => {
  const parsed = import_cross_spawn.default._parse(file, args, options);
  file = parsed.command;
  args = parsed.args;
  options = parsed.options;
  options = {
    maxBuffer: DEFAULT_MAX_BUFFER,
    buffer: true,
    stripFinalNewline: true,
    extendEnv: true,
    preferLocal: false,
    localDir: options.cwd || process2__default.default.cwd(),
    execPath: process2__default.default.execPath,
    encoding: "utf8",
    reject: true,
    cleanup: true,
    all: false,
    windowsHide: true,
    ...options
  };
  options.env = getEnv(options);
  options.stdio = normalizeStdio(options);
  if (process2__default.default.platform === "win32" && path__default.default.basename(file, ".exe") === "cmd") {
    args.unshift("/q");
  }
  return { file, args, options, parsed };
};
var handleOutput = (options, value, error) => {
  if (typeof value !== "string" && !buffer.Buffer.isBuffer(value)) {
    return error === void 0 ? void 0 : "";
  }
  if (options.stripFinalNewline) {
    return stripFinalNewline(value);
  }
  return value;
};
function execa(file, args, options) {
  const parsed = handleArguments(file, args, options);
  const command = joinCommand(file, args);
  const escapedCommand = getEscapedCommand(file, args);
  validateTimeout(parsed.options);
  let spawned;
  try {
    spawned = childProcess2__default.default.spawn(parsed.file, parsed.args, parsed.options);
  } catch (error) {
    const dummySpawned = new childProcess2__default.default.ChildProcess();
    const errorPromise = Promise.reject(makeError({
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
    return mergePromise(dummySpawned, errorPromise);
  }
  const spawnedPromise = getSpawnedPromise(spawned);
  const timedPromise = setupTimeout(spawned, parsed.options, spawnedPromise);
  const processDone = setExitHandler(spawned, parsed.options, timedPromise);
  const context = { isCanceled: false };
  spawned.kill = spawnedKill.bind(null, spawned.kill.bind(spawned));
  spawned.cancel = spawnedCancel.bind(null, spawned, context);
  const handlePromise = async () => {
    const [{ error, exitCode, signal, timedOut }, stdoutResult, stderrResult, allResult] = await getSpawnedResult(spawned, parsed.options, processDone);
    const stdout = handleOutput(parsed.options, stdoutResult);
    const stderr = handleOutput(parsed.options, stderrResult);
    const all = handleOutput(parsed.options, allResult);
    if (error || exitCode !== 0 || signal !== null) {
      const returnedError = makeError({
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
  const handlePromiseOnce = onetime_default(handlePromise);
  handleInput(spawned, parsed.options.input);
  spawned.all = makeAllStream(spawned, parsed.options);
  return mergePromise(spawned, handlePromiseOnce);
}
function parseArgs(input, options) {
  if (process2__default.default.platform !== "win32") {
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
  await execa("taskkill", parseArgs(input, options));
}
var import_cross_spawn2 = __toESM(require_cross_spawn());
var getRealtimeSignals2 = () => {
  const length = SIGRTMAX2 - SIGRTMIN2 + 1;
  return Array.from({ length }, getRealtimeSignal2);
};
var getRealtimeSignal2 = (value, index) => ({
  name: `SIGRT${index + 1}`,
  number: SIGRTMIN2 + index,
  action: "terminate",
  description: "Application-specific signal (realtime)",
  standard: "posix"
});
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
var getSignals2 = () => {
  const realtimeSignals = getRealtimeSignals2();
  const signals2 = [...SIGNALS2, ...realtimeSignals].map(normalizeSignal2);
  return signals2;
};
var normalizeSignal2 = ({
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
var getSignalsByName2 = () => {
  const signals2 = getSignals2();
  return Object.fromEntries(signals2.map(getSignalByName2));
};
var getSignalByName2 = ({
  name,
  number,
  description,
  supported,
  action,
  forced,
  standard
}) => [name, { name, number, description, supported, action, forced, standard }];
var signalsByName2 = getSignalsByName2();
var getSignalsByNumber2 = () => {
  const signals2 = getSignals2();
  const length = SIGRTMAX2 + 1;
  const signalsA = Array.from(
    { length },
    (value, number) => getSignalByNumber2(number, signals2)
  );
  return Object.assign({}, ...signalsA);
};
var getSignalByNumber2 = (number, signals2) => {
  const signal = findSignalByNumber2(number, signals2);
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
var findSignalByNumber2 = (number, signals2) => {
  const signal = signals2.find(({ name }) => os.constants.signals[name] === number);
  if (signal !== void 0) {
    return signal;
  }
  return signals2.find((signalA) => signalA.number === number);
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
  parsed: { options: { timeout, cwd = process2__default.default.cwd() } }
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
var hasAlias2 = (options) => aliases2.some((alias) => options[alias] !== void 0);
var normalizeStdio2 = (options) => {
  if (!options) {
    return;
  }
  const { stdio } = options;
  if (stdio === void 0) {
    return aliases2.map((alias) => options[alias]);
  }
  if (hasAlias2(options)) {
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
var processOk = (process13) => !!process13 && typeof process13 === "object" && typeof process13.removeListener === "function" && typeof process13.emit === "function" && typeof process13.reallyExit === "function" && typeof process13.listeners === "function" && typeof process13.kill === "function" && typeof process13.pid === "number" && typeof process13.on === "function";
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
    const i = list.indexOf(fn);
    if (i === -1) {
      return;
    }
    if (i === 0 && list.length === 1) {
      list.length = 0;
    } else {
      list.splice(i, 1);
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
  #hupSig = process6.platform === "win32" ? "SIGINT" : "SIGHUP";
  /* c8 ignore stop */
  #emitter = new Emitter();
  #process;
  #originalProcessEmit;
  #originalProcessReallyExit;
  #sigListeners = {};
  #loaded = false;
  constructor(process13) {
    super();
    this.#process = process13;
    this.#sigListeners = {};
    for (const sig of signals) {
      this.#sigListeners[sig] = () => {
        const listeners = this.#process.listeners(sig);
        let { count } = this.#emitter;
        const p = process13;
        if (typeof p.__signal_exit_emitter__ === "object" && typeof p.__signal_exit_emitter__.count === "number") {
          count += p.__signal_exit_emitter__.count;
        }
        if (listeners.length === count) {
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
    this.#process.emit = (ev, ...a) => {
      return this.#processEmit(ev, ...a);
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
var process6 = globalThis.process;
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
} = signalExitWrap(processOk(process6) ? new SignalExit(process6) : new SignalExitFallback());
var DEFAULT_FORCE_KILL_TIMEOUT2 = 1e3 * 5;
var spawnedKill2 = (kill2, signal = "SIGTERM", options = {}) => {
  const killResult = kill2(signal);
  setKillTimeout2(kill2, signal, options, killResult);
  return killResult;
};
var setKillTimeout2 = (kill2, signal, options, killResult) => {
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
    return DEFAULT_FORCE_KILL_TIMEOUT2;
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
var validateTimeout2 = ({ timeout }) => {
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
  if (isWritableStream(target)) {
    spawned[streamName].pipe(target);
    return spawned;
  }
  if (!isExecaChildProcess(target)) {
    throw new TypeError("The second argument must be a string, a stream or an Execa child process.");
  }
  if (!isWritableStream(target.stdin)) {
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
var getStreamContents = async (stream, { init, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, finalize }, { maxBuffer = Number.POSITIVE_INFINITY } = {}) => {
  if (!isAsyncIterable(stream)) {
    throw new Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
  }
  const state = init();
  state.length = 0;
  try {
    for await (const chunk of stream) {
      const chunkType = getChunkType(chunk);
      const convertedChunk = convertChunk[chunkType](chunk, state);
      appendChunk({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer });
    }
    appendFinalChunk({ state, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer });
    return finalize(state);
  } catch (error) {
    error.bufferedData = finalize(state);
    throw error;
  }
};
var appendFinalChunk = ({ state, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer }) => {
  const convertedChunk = getFinalChunk(state);
  if (convertedChunk !== void 0) {
    appendChunk({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer });
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
var isAsyncIterable = (stream) => typeof stream === "object" && stream !== null && typeof stream[Symbol.asyncIterator] === "function";
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
  const prototypeName = objectToString.call(chunk);
  if (prototypeName === "[object ArrayBuffer]") {
    return "arrayBuffer";
  }
  if (prototypeName === "[object DataView]") {
    return "dataView";
  }
  if (Number.isInteger(chunk.byteLength) && Number.isInteger(chunk.byteOffset) && objectToString.call(chunk.buffer) === "[object ArrayBuffer]") {
    return "typedArray";
  }
  return "others";
};
var { toString: objectToString } = Object.prototype;
var MaxBufferError = class extends Error {
  name = "MaxBufferError";
  constructor() {
    super("maxBuffer exceeded");
  }
};
var identity = (value) => value;
var noop = () => void 0;
var getContentsProp = ({ contents }) => contents;
var throwObjectStream = (chunk) => {
  throw new Error(`Streams in object mode are not supported: ${String(chunk)}`);
};
var getLengthProp = (convertedChunk) => convertedChunk.length;
async function getStreamAsArrayBuffer(stream, options) {
  return getStreamContents(stream, arrayBufferMethods, options);
}
var initArrayBuffer = () => ({ contents: new ArrayBuffer(0) });
var useTextEncoder = (chunk) => textEncoder.encode(chunk);
var textEncoder = new TextEncoder();
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
  getSize: getLengthProp,
  truncateChunk: truncateArrayBufferChunk,
  addChunk: addArrayBufferChunk,
  getFinalChunk: noop,
  finalize: finalizeArrayBuffer
};
async function getStreamAsBuffer(stream, options) {
  if (!("Buffer" in globalThis)) {
    throw new Error("getStreamAsBuffer() is only supported in Node.js");
  }
  try {
    return arrayBufferToNodeBuffer(await getStreamAsArrayBuffer(stream, options));
  } catch (error) {
    if (error.bufferedData !== void 0) {
      error.bufferedData = arrayBufferToNodeBuffer(error.bufferedData);
    }
    throw error;
  }
}
var arrayBufferToNodeBuffer = (arrayBuffer) => globalThis.Buffer.from(arrayBuffer);
async function getStreamAsString(stream, options) {
  return getStreamContents(stream, stringMethods, options);
}
var initString = () => ({ contents: "", textDecoder: new TextDecoder() });
var useTextDecoder = (chunk, { textDecoder }) => textDecoder.decode(chunk, { stream: true });
var addStringChunk = (convertedChunk, { contents }) => contents + convertedChunk;
var truncateStringChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
var getFinalStringChunk = ({ textDecoder }) => {
  const finalChunk = textDecoder.decode();
  return finalChunk === "" ? void 0 : finalChunk;
};
var stringMethods = {
  init: initString,
  convertChunk: {
    string: identity,
    buffer: useTextDecoder,
    arrayBuffer: useTextDecoder,
    dataView: useTextDecoder,
    typedArray: useTextDecoder,
    others: throwObjectStream
  },
  getSize: getLengthProp,
  truncateChunk: truncateStringChunk,
  addChunk: addStringChunk,
  getFinalChunk: getFinalStringChunk,
  finalize: getContentsProp
};
var import_merge_stream2 = __toESM(require_merge_stream());
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
  if (isStream(input)) {
    input.pipe(spawned.stdin);
  } else {
    spawned.stdin.end(input);
  }
};
var makeAllStream2 = (spawned, { all }) => {
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
var getBufferedData2 = async (stream, streamPromise) => {
  if (!stream || streamPromise === void 0) {
    return;
  }
  await promises.setTimeout(0);
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
    return getStreamAsString(stream, { maxBuffer });
  }
  if (encoding === null || encoding === "buffer") {
    return getStreamAsBuffer(stream, { maxBuffer });
  }
  return applyEncoding(stream, maxBuffer, encoding);
};
var applyEncoding = async (stream, maxBuffer, encoding) => {
  const buffer = await getStreamAsBuffer(stream, { maxBuffer });
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
var NO_ESCAPE_REGEXP2 = /^[\w.-]+$/;
var escapeArg2 = (arg) => {
  if (typeof arg !== "string" || NO_ESCAPE_REGEXP2.test(arg)) {
    return arg;
  }
  return `"${arg.replaceAll('"', '\\"')}"`;
};
var joinCommand2 = (file, args) => normalizeArgs2(file, args).join(" ");
var getEscapedCommand2 = (file, args) => normalizeArgs2(file, args).map((arg) => escapeArg2(arg)).join(" ");
var verboseDefault = util.debuglog("execa").enabled;
var padField = (field, padding) => String(field).padStart(padding, "0");
var getTimestamp = () => {
  const date = /* @__PURE__ */ new Date();
  return `${padField(date.getHours(), 2)}:${padField(date.getMinutes(), 2)}:${padField(date.getSeconds(), 2)}.${padField(date.getMilliseconds(), 3)}`;
};
var logCommand = (escapedCommand, { verbose }) => {
  if (!verbose) {
    return;
  }
  process2__default.default.stderr.write(`[${getTimestamp()}] ${escapedCommand}
`);
};
var DEFAULT_MAX_BUFFER2 = 1e3 * 1e3 * 100;
var getEnv2 = ({ env: envOption, extendEnv, preferLocal, localDir, execPath }) => {
  const env = extendEnv ? { ...process2__default.default.env, ...envOption } : envOption;
  if (preferLocal) {
    return npmRunPathEnv({ env, cwd: localDir, execPath });
  }
  return env;
};
var handleArguments2 = (file, args, options = {}) => {
  const parsed = import_cross_spawn2.default._parse(file, args, options);
  file = parsed.command;
  args = parsed.args;
  options = parsed.options;
  options = {
    maxBuffer: DEFAULT_MAX_BUFFER2,
    buffer: true,
    stripFinalNewline: true,
    extendEnv: true,
    preferLocal: false,
    localDir: options.cwd || process2__default.default.cwd(),
    execPath: process2__default.default.execPath,
    encoding: "utf8",
    reject: true,
    cleanup: true,
    all: false,
    windowsHide: true,
    verbose: verboseDefault,
    ...options
  };
  options.env = getEnv2(options);
  options.stdio = normalizeStdio2(options);
  if (process2__default.default.platform === "win32" && path__default.default.basename(file, ".exe") === "cmd") {
    args.unshift("/q");
  }
  return { file, args, options, parsed };
};
var handleOutput2 = (options, value, error) => {
  if (typeof value !== "string" && !buffer.Buffer.isBuffer(value)) {
    return error === void 0 ? void 0 : "";
  }
  if (options.stripFinalNewline) {
    return stripFinalNewline(value);
  }
  return value;
};
function execa2(file, args, options) {
  const parsed = handleArguments2(file, args, options);
  const command = joinCommand2(file, args);
  const escapedCommand = getEscapedCommand2(file, args);
  logCommand(escapedCommand, parsed.options);
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
    mergePromise2(dummySpawned, errorPromise);
    return dummySpawned;
  }
  const spawnedPromise = getSpawnedPromise2(spawned);
  const timedPromise = setupTimeout2(spawned, parsed.options, spawnedPromise);
  const processDone = setExitHandler2(spawned, parsed.options, timedPromise);
  const context = { isCanceled: false };
  spawned.kill = spawnedKill2.bind(null, spawned.kill.bind(spawned));
  spawned.cancel = spawnedCancel2.bind(null, spawned, context);
  const handlePromise = async () => {
    const [{ error, exitCode, signal, timedOut }, stdoutResult, stderrResult, allResult] = await getSpawnedResult2(spawned, parsed.options, processDone);
    const stdout = handleOutput2(parsed.options, stdoutResult);
    const stderr = handleOutput2(parsed.options, stderrResult);
    const all = handleOutput2(parsed.options, allResult);
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
  const handlePromiseOnce = onetime_default(handlePromise);
  handleInput2(spawned, parsed.options);
  spawned.all = makeAllStream2(spawned, parsed.options);
  addPipeMethods(spawned);
  mergePromise2(spawned, handlePromiseOnce);
  return spawned;
}
function indentString(string, count = 1, options = {}) {
  const {
    indent = " ",
    includeEmptyLines = false
  } = options;
  if (typeof string !== "string") {
    throw new TypeError(
      `Expected \`input\` to be a \`string\`, got \`${typeof string}\``
    );
  }
  if (typeof count !== "number") {
    throw new TypeError(
      `Expected \`count\` to be a \`number\`, got \`${typeof count}\``
    );
  }
  if (count < 0) {
    throw new RangeError(
      `Expected \`count\` to be at least 0, got \`${count}\``
    );
  }
  if (typeof indent !== "string") {
    throw new TypeError(
      `Expected \`options.indent\` to be a \`string\`, got \`${typeof indent}\``
    );
  }
  if (count === 0) {
    return string;
  }
  const regex = includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
  return string.replace(regex, indent.repeat(count));
}
function escapeStringRegexp(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var getHomeDirectory = () => os__default.default.homedir().replace(/\\/g, "/");
var home_directory_default = getHomeDirectory;
var extractPathRegex = /\s+at.*[(\s](.*)\)?/;
var pathRegex = /^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/;
function cleanStack(stack, { pretty = false, basePath, pathFilter } = {}) {
  const basePathRegex = basePath && new RegExp(`(file://)?${escapeStringRegexp(basePath.replace(/\\/g, "/"))}/?`, "g");
  const homeDirectory = pretty ? home_directory_default() : "";
  if (typeof stack !== "string") {
    return void 0;
  }
  return stack.replace(/\\/g, "/").split("\n").filter((line) => {
    const pathMatches = line.match(extractPathRegex);
    if (pathMatches === null || !pathMatches[1]) {
      return true;
    }
    const match = pathMatches[1];
    if (match.includes(".app/Contents/Resources/electron.asar") || match.includes(".app/Contents/Resources/default_app.asar") || match.includes("node_modules/electron/dist/resources/electron.asar") || match.includes("node_modules/electron/dist/resources/default_app.asar")) {
      return false;
    }
    return pathFilter ? !pathRegex.test(match) && pathFilter(match) : !pathRegex.test(match);
  }).filter((line) => line.trim() !== "").map((line) => {
    if (basePathRegex) {
      line = line.replace(basePathRegex, "");
    }
    if (pretty) {
      line = line.replace(extractPathRegex, (m, p1) => {
        let filePath = p1;
        if (filePath.startsWith("file://")) {
          filePath = url.fileURLToPath(filePath);
        }
        filePath = filePath.replace(homeDirectory, "~");
        return m.replace(p1, filePath);
      });
    }
    return line;
  }).join("\n");
}
var cleanInternalStack = (stack) => stack.replaceAll(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
var AggregateError = class extends Error {
  #errors;
  name = "AggregateError";
  constructor(errors) {
    if (!Array.isArray(errors)) {
      throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
    }
    errors = errors.map((error) => {
      if (error instanceof Error) {
        return error;
      }
      if (error !== null && typeof error === "object") {
        return Object.assign(new Error(error.message), error);
      }
      return new Error(error);
    });
    let message = errors.map(
      (error) => (
        // The `stack` property is not standardized, so we can't assume it exists
        typeof error.stack === "string" && error.stack.length > 0 ? cleanInternalStack(cleanStack(error.stack)) : String(error)
      )
    ).join("\n");
    message = "\n" + indentString(message, 4);
    super(message);
    this.#errors = errors;
  }
  get errors() {
    return [...this.#errors];
  }
};
var netstat = async (type) => {
  const { stdout } = await execa2("netstat", ["-anv", "-p", type]);
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
  const { stdout } = await execa2("ss", ["-tunlp"]);
  return {
    stdout,
    addressColumn: 4,
    pidColumn: 6
  };
};
var windows = async () => {
  const { stdout } = await execa2("netstat", ["-ano"]);
  return {
    stdout,
    addressColumn: 1,
    pidColumn: 4
  };
};
var isProtocol = (value) => /^\s*(tcp|udp)/i.test(value);
var parsePid = (pid) => {
  if (typeof pid !== "string") {
    return;
  }
  const { groups } = /(?:^|",|",pid=)(?<pid>\d+)/.exec(pid) || {};
  if (groups) {
    return Number.parseInt(groups.pid, 10);
  }
};
var getPort = (port, { lines, addressColumn, pidColumn }) => {
  const regex = new RegExp(`[.:]${port}$`);
  const foundPort = lines.find((line) => regex.test(line[addressColumn]));
  if (!foundPort) {
    throw new Error(`Could not find a process that uses port \`${port}\``);
  }
  return parsePid(foundPort[pidColumn]);
};
var implementation = process2__default.default.platform === "darwin" ? macos : process2__default.default.platform === "linux" ? linux : windows;
var getList = async () => {
  const { stdout, addressColumn, pidColumn } = await implementation();
  const lines = stdout.split("\n").filter((line) => isProtocol(line)).map((line) => line.match(/\S+/g) || []);
  return { lines, addressColumn, pidColumn };
};
async function portToPid(port) {
  if (Array.isArray(port)) {
    const list = await getList();
    const tuples = await Promise.all(port.map((port_) => [port_, getPort(port_, list)]));
    return new Map(tuples);
  }
  if (!Number.isInteger(port)) {
    throw new TypeError(`Expected an integer, got ${typeof port}`);
  }
  return getPort(port, await getList());
}
var __dirname$1 = path__default.default.dirname(url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('cli.cjs', document.baseURI).href))));
var TEN_MEGABYTES = 1e3 * 1e3 * 10;
var execFile = util.promisify(childProcess2__default.default.execFile);
var windows2 = async () => {
  let binary;
  switch (process2__default.default.arch) {
    case "x64":
      binary = "fastlist-0.3.0-x64.exe";
      break;
    case "ia32":
      binary = "fastlist-0.3.0-x86.exe";
      break;
    default:
      throw new Error(`Unsupported architecture: ${process2__default.default.arch}`);
  }
  const binaryPath = path__default.default.join(__dirname$1, "vendor", binary);
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
    name: path__default.default.basename(value.comm),
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
      name: path__default.default.basename(comm),
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
var psList = process2__default.default.platform === "win32" ? windows2 : nonWindows;
var ps_list_default = psList;
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
var processMatchesName = process2__default.default.platform === "linux" ? linuxProcessMatchesName : nonLinuxProcessMatchesName;
async function processExistsMultiple(processNames) {
  const processes = await ps_list_default();
  return new Map(processNames.map((processName) => [processName, processes.some((y) => processMatchesName(processName, y))]));
}
async function filterExistingProcesses(processNames) {
  const processes = await ps_list_default();
  return processNames.filter((processName) => processes.some((process_) => processMatchesName(processName, process_)));
}
var ALIVE_CHECK_MIN_INTERVAL = 5;
var ALIVE_CHECK_MAX_INTERVAL = 1280;
var TASKKILL_EXIT_CODE_FOR_PROCESS_FILTERING_SIGTERM = 255;
var delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});
var missingBinaryError = async (command, arguments_) => {
  try {
    return await execa2(command, arguments_);
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
var kill = (() => {
  if (process2__default.default.platform === "darwin") {
    return macosKill;
  }
  if (process2__default.default.platform === "win32") {
    return windowsKill;
  }
  return defaultKill;
})();
var parseInput = async (input) => {
  if (typeof input === "string" && input[0] === ":") {
    return portToPid(Number.parseInt(input.slice(1), 10));
  }
  return input;
};
var getCurrentProcessParentsPID = (processes) => {
  const processMap = new Map(processes.map((ps) => [ps.pid, ps.ppid]));
  const pids = [];
  let currentId = process2__default.default.pid;
  while (currentId) {
    pids.push(currentId);
    currentId = processMap.get(currentId);
  }
  return pids;
};
var killWithLimits = async (input, options) => {
  input = await parseInput(input);
  if (input === process2__default.default.pid) {
    return;
  }
  if (input === "node" || input === "node.exe") {
    const processes = await ps_list_default();
    const pids = getCurrentProcessParentsPID(processes);
    await Promise.all(processes.map(async (ps) => {
      if ((ps.name === "node" || ps.name === "node.exe") && !pids.includes(ps.pid)) {
        await kill(ps.pid, options);
      }
    }));
    return;
  }
  await kill(input, options);
};
async function fkill(inputs, options = {}) {
  inputs = [inputs].flat();
  const exists = await processExistsMultiple(inputs);
  const errors = [];
  const handleKill = async (input) => {
    try {
      await killWithLimits(input, options);
    } catch (error) {
      if (!exists.get(input)) {
        errors.push(`Killing process ${input} failed: Process doesn't exist`);
        return;
      }
      errors.push(`Killing process ${input} failed: ${error.message.replace(/.*\n/, "").replace(/kill: \d+: /, "").trim()}`);
    }
  };
  await Promise.all(inputs.map((input) => handleKill(input)));
  if (errors.length > 0 && !options.silent) {
    throw new AggregateError(errors);
  }
  if (options.forceAfterTimeout !== void 0 && !options.force) {
    const endTime = Date.now() + options.forceAfterTimeout;
    let interval = ALIVE_CHECK_MIN_INTERVAL;
    if (interval > options.forceAfterTimeout) {
      interval = options.forceAfterTimeout;
    }
    let alive = inputs;
    do {
      await delay(interval);
      alive = await filterExistingProcesses(alive);
      interval *= 2;
      if (interval > ALIVE_CHECK_MAX_INTERVAL) {
        interval = ALIVE_CHECK_MAX_INTERVAL;
      }
    } while (Date.now() < endTime && alive.length > 0);
    if (alive.length > 0) {
      await Promise.all(alive.map(async (input) => {
        try {
          await killWithLimits(input, { ...options, force: true });
        } catch {
        }
      }));
    }
  }
}
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var VERSION = "0.1.1";
var checkIfRelayServerIsRunning = async (port, token) => {
  try {
    const healthUrl = token ? `http://localhost:${port}/health?${RELAY_TOKEN_PARAM}=${encodeURIComponent(token)}` : `http://localhost:${port}/health`;
    const response = await fetch(healthUrl, {
      method: "GET",
      signal: AbortSignal.timeout(HEALTH_CHECK_TIMEOUT_MS)
    });
    return response.ok;
  } catch {
    return false;
  }
};
var connectRelay = async (options) => {
  const relayPort = options.port ?? DEFAULT_RELAY_PORT;
  const { handler, token } = options;
  let relayServer = null;
  let isRelayHost = false;
  const isRelayServerRunning = await checkIfRelayServerIsRunning(
    relayPort,
    token
  );
  if (isRelayServerRunning) {
    relayServer = await connectToExistingRelay(relayPort, handler, token);
  } else {
    await fkill(`:${relayPort}`, { force: true, silent: true }).catch(() => {
    });
    await sleep(POST_KILL_DELAY_MS);
    relayServer = createRelayServer({ port: relayPort, token });
    relayServer.registerHandler(handler);
    try {
      await relayServer.start();
      isRelayHost = true;
    } catch (error) {
      const isAddressInUse = error instanceof Error && "code" in error && error.code === "EADDRINUSE";
      if (!isAddressInUse) throw error;
      await sleep(POST_KILL_DELAY_MS);
      const isNowRunning = await checkIfRelayServerIsRunning(relayPort, token);
      if (!isNowRunning) throw error;
      relayServer = await connectToExistingRelay(relayPort, handler, token);
    }
  }
  printStartupMessage(handler.agentId, relayPort);
  const handleShutdown = async () => {
    if (isRelayHost) {
      await relayServer?.stop();
    } else {
      relayServer?.unregisterHandler(handler.agentId);
    }
    process.exit(0);
  };
  process.on("SIGTERM", handleShutdown);
  process.on("SIGINT", handleShutdown);
  return {
    disconnect: async () => {
      process.off("SIGTERM", handleShutdown);
      process.off("SIGINT", handleShutdown);
      if (isRelayHost) {
        await relayServer?.stop();
      } else {
        relayServer?.unregisterHandler(handler.agentId);
      }
    }
  };
};
var connectToExistingRelay = async (port, handler, token) => {
  const { WebSocket: WebSocket3 } = await Promise.resolve().then(() => (init_wrapper(), wrapper_exports));
  return new Promise((resolve, reject) => {
    const connectionUrl = token ? `ws://localhost:${port}?${RELAY_TOKEN_PARAM}=${encodeURIComponent(token)}` : `ws://localhost:${port}`;
    const socket = new WebSocket3(connectionUrl, {
      headers: { "x-relay-handler": "true" }
    });
    socket.on("open", () => {
      let isSocketClosed = false;
      const activeSessionIds = /* @__PURE__ */ new Set();
      const sendData = (data) => {
        if (isSocketClosed || socket.readyState !== WebSocket3.OPEN) {
          return false;
        }
        try {
          socket.send(data);
          return true;
        } catch {
          return false;
        }
      };
      socket.on("close", () => {
        isSocketClosed = true;
        for (const sessionId of activeSessionIds) {
          try {
            handler.abort?.(sessionId);
          } catch {
          }
        }
        activeSessionIds.clear();
      });
      socket.send(
        JSON.stringify({
          type: "register-handler",
          agentId: handler.agentId
        })
      );
      socket.on("message", async (data) => {
        try {
          const message = JSON.parse(data.toString());
          if (message.type === "invoke-handler") {
            const { method, sessionId, payload } = message;
            if (method === "run" && payload?.prompt) {
              activeSessionIds.add(sessionId);
              try {
                let didComplete = false;
                for await (const agentMessage of handler.run(payload.prompt, {
                  sessionId
                })) {
                  if (isSocketClosed) {
                    break;
                  }
                  sendData(
                    JSON.stringify({
                      type: agentMessage.type === "status" ? "agent-status" : agentMessage.type === "error" ? "agent-error" : "agent-done",
                      sessionId,
                      agentId: handler.agentId,
                      content: agentMessage.content
                    })
                  );
                  if (agentMessage.type === "done" || agentMessage.type === "error") {
                    didComplete = true;
                  }
                }
                if (!didComplete && !isSocketClosed) {
                  sendData(
                    JSON.stringify({
                      type: "agent-done",
                      sessionId,
                      agentId: handler.agentId,
                      content: ""
                    })
                  );
                }
              } catch (error) {
                sendData(
                  JSON.stringify({
                    type: "agent-error",
                    sessionId,
                    agentId: handler.agentId,
                    content: error instanceof Error ? error.message : "Unknown error"
                  })
                );
              } finally {
                activeSessionIds.delete(sessionId);
              }
            } else if (method === "abort") {
              handler.abort?.(sessionId);
            } else if (method === "undo") {
              try {
                await handler.undo?.();
                sendData(
                  JSON.stringify({
                    type: "agent-done",
                    sessionId,
                    agentId: handler.agentId,
                    content: ""
                  })
                );
              } catch (error) {
                sendData(
                  JSON.stringify({
                    type: "agent-error",
                    sessionId,
                    agentId: handler.agentId,
                    content: error instanceof Error ? error.message : "Unknown error"
                  })
                );
              }
            } else if (method === "redo") {
              try {
                await handler.redo?.();
                sendData(
                  JSON.stringify({
                    type: "agent-done",
                    sessionId,
                    agentId: handler.agentId,
                    content: ""
                  })
                );
              } catch (error) {
                sendData(
                  JSON.stringify({
                    type: "agent-error",
                    sessionId,
                    agentId: handler.agentId,
                    content: error instanceof Error ? error.message : "Unknown error"
                  })
                );
              }
            }
          }
        } catch {
        }
      });
      const proxyServer = {
        start: async () => {
        },
        stop: async () => {
          socket.close();
        },
        registerHandler: () => {
        },
        unregisterHandler: (agentId) => {
          sendData(
            JSON.stringify({
              type: "unregister-handler",
              agentId
            })
          );
          socket.close();
        },
        getRegisteredHandlerIds: () => [handler.agentId]
      };
      resolve(proxyServer);
    });
    socket.on("error", (error) => {
      reject(error);
    });
  });
};
var printStartupMessage = (agentId, port) => {
  console.log(
    `${import_picocolors.default.magenta("\u273F")} ${import_picocolors.default.bold("React Grab")} ${import_picocolors.default.gray(VERSION)} ${import_picocolors.default.dim(`(${agentId})`)}`
  );
  console.log(`- Local:    ${import_picocolors.default.cyan(`ws://localhost:${port}`)}`);
};
async function createOutputSchemaFile(schema) {
  if (schema === void 0) {
    return { cleanup: async () => {
    } };
  }
  if (!isJsonObject(schema)) {
    throw new Error("outputSchema must be a plain JSON object");
  }
  const schemaDir = await fs.promises.mkdtemp(path__default.default.join(os__default.default.tmpdir(), "codex-output-schema-"));
  const schemaPath = path__default.default.join(schemaDir, "schema.json");
  const cleanup = async () => {
    try {
      await fs.promises.rm(schemaDir, { recursive: true, force: true });
    } catch {
    }
  };
  try {
    await fs.promises.writeFile(schemaPath, JSON.stringify(schema), "utf8");
    return { schemaPath, cleanup };
  } catch (error) {
    await cleanup();
    throw error;
  }
}
function isJsonObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
var Thread = class {
  _exec;
  _options;
  _id;
  _threadOptions;
  /** Returns the ID of the thread. Populated after the first turn starts. */
  get id() {
    return this._id;
  }
  /* @internal */
  constructor(exec, options, threadOptions, id = null) {
    this._exec = exec;
    this._options = options;
    this._id = id;
    this._threadOptions = threadOptions;
  }
  /** Provides the input to the agent and streams events as they are produced during the turn. */
  async runStreamed(input, turnOptions = {}) {
    return { events: this.runStreamedInternal(input, turnOptions) };
  }
  async *runStreamedInternal(input, turnOptions = {}) {
    const { schemaPath, cleanup } = await createOutputSchemaFile(turnOptions.outputSchema);
    const options = this._threadOptions;
    const { prompt, images } = normalizeInput(input);
    const generator = this._exec.run({
      input: prompt,
      baseUrl: this._options.baseUrl,
      apiKey: this._options.apiKey,
      threadId: this._id,
      images,
      model: options?.model,
      sandboxMode: options?.sandboxMode,
      workingDirectory: options?.workingDirectory,
      skipGitRepoCheck: options?.skipGitRepoCheck,
      outputSchemaFile: schemaPath,
      modelReasoningEffort: options?.modelReasoningEffort,
      signal: turnOptions.signal,
      networkAccessEnabled: options?.networkAccessEnabled,
      webSearchEnabled: options?.webSearchEnabled,
      approvalPolicy: options?.approvalPolicy,
      additionalDirectories: options?.additionalDirectories
    });
    try {
      for await (const item of generator) {
        let parsed;
        try {
          parsed = JSON.parse(item);
        } catch (error) {
          throw new Error(`Failed to parse item: ${item}`, { cause: error });
        }
        if (parsed.type === "thread.started") {
          this._id = parsed.thread_id;
        }
        yield parsed;
      }
    } finally {
      await cleanup();
    }
  }
  /** Provides the input to the agent and returns the completed turn. */
  async run(input, turnOptions = {}) {
    const generator = this.runStreamedInternal(input, turnOptions);
    const items = [];
    let finalResponse = "";
    let usage = null;
    let turnFailure = null;
    for await (const event of generator) {
      if (event.type === "item.completed") {
        if (event.item.type === "agent_message") {
          finalResponse = event.item.text;
        }
        items.push(event.item);
      } else if (event.type === "turn.completed") {
        usage = event.usage;
      } else if (event.type === "turn.failed") {
        turnFailure = event.error;
        break;
      }
    }
    if (turnFailure) {
      throw new Error(turnFailure.message);
    }
    return { items, finalResponse, usage };
  }
};
function normalizeInput(input) {
  if (typeof input === "string") {
    return { prompt: input, images: [] };
  }
  const promptParts = [];
  const images = [];
  for (const item of input) {
    if (item.type === "text") {
      promptParts.push(item.text);
    } else if (item.type === "local_image") {
      images.push(item.path);
    }
  }
  return { prompt: promptParts.join("\n\n"), images };
}
var INTERNAL_ORIGINATOR_ENV = "CODEX_INTERNAL_ORIGINATOR_OVERRIDE";
var TYPESCRIPT_SDK_ORIGINATOR = "codex_sdk_ts";
var CodexExec = class {
  executablePath;
  envOverride;
  constructor(executablePath = null, env) {
    this.executablePath = executablePath || findCodexPath();
    this.envOverride = env;
  }
  async *run(args) {
    const commandArgs = ["exec", "--experimental-json"];
    if (args.model) {
      commandArgs.push("--model", args.model);
    }
    if (args.sandboxMode) {
      commandArgs.push("--sandbox", args.sandboxMode);
    }
    if (args.workingDirectory) {
      commandArgs.push("--cd", args.workingDirectory);
    }
    if (args.additionalDirectories?.length) {
      for (const dir of args.additionalDirectories) {
        commandArgs.push("--add-dir", dir);
      }
    }
    if (args.skipGitRepoCheck) {
      commandArgs.push("--skip-git-repo-check");
    }
    if (args.outputSchemaFile) {
      commandArgs.push("--output-schema", args.outputSchemaFile);
    }
    if (args.modelReasoningEffort) {
      commandArgs.push("--config", `model_reasoning_effort="${args.modelReasoningEffort}"`);
    }
    if (args.networkAccessEnabled !== void 0) {
      commandArgs.push(
        "--config",
        `sandbox_workspace_write.network_access=${args.networkAccessEnabled}`
      );
    }
    if (args.webSearchEnabled !== void 0) {
      commandArgs.push("--config", `features.web_search_request=${args.webSearchEnabled}`);
    }
    if (args.approvalPolicy) {
      commandArgs.push("--config", `approval_policy="${args.approvalPolicy}"`);
    }
    if (args.images?.length) {
      for (const image of args.images) {
        commandArgs.push("--image", image);
      }
    }
    if (args.threadId) {
      commandArgs.push("resume", args.threadId);
    }
    const env = {};
    if (this.envOverride) {
      Object.assign(env, this.envOverride);
    } else {
      for (const [key, value] of Object.entries(process.env)) {
        if (value !== void 0) {
          env[key] = value;
        }
      }
    }
    if (!env[INTERNAL_ORIGINATOR_ENV]) {
      env[INTERNAL_ORIGINATOR_ENV] = TYPESCRIPT_SDK_ORIGINATOR;
    }
    if (args.baseUrl) {
      env.OPENAI_BASE_URL = args.baseUrl;
    }
    if (args.apiKey) {
      env.CODEX_API_KEY = args.apiKey;
    }
    const child = childProcess2.spawn(this.executablePath, commandArgs, {
      env,
      signal: args.signal
    });
    let spawnError = null;
    child.once("error", (err) => spawnError = err);
    if (!child.stdin) {
      child.kill();
      throw new Error("Child process has no stdin");
    }
    child.stdin.write(args.input);
    child.stdin.end();
    if (!child.stdout) {
      child.kill();
      throw new Error("Child process has no stdout");
    }
    const stderrChunks = [];
    if (child.stderr) {
      child.stderr.on("data", (data) => {
        stderrChunks.push(data);
      });
    }
    const rl = readline__default.default.createInterface({
      input: child.stdout,
      crlfDelay: Infinity
    });
    try {
      for await (const line of rl) {
        yield line;
      }
      const exitCode = new Promise((resolve, reject) => {
        child.once("exit", (code) => {
          if (code === 0) {
            resolve(code);
          } else {
            const stderrBuffer = Buffer.concat(stderrChunks);
            reject(
              new Error(`Codex Exec exited with code ${code}: ${stderrBuffer.toString("utf8")}`)
            );
          }
        });
      });
      if (spawnError) throw spawnError;
      await exitCode;
    } finally {
      rl.close();
      child.removeAllListeners();
      try {
        if (!child.killed) child.kill();
      } catch {
      }
    }
  }
};
var scriptFileName = url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('cli.cjs', document.baseURI).href)));
var scriptDirName = path__default.default.dirname(scriptFileName);
function findCodexPath() {
  const { platform, arch } = process;
  let targetTriple = null;
  switch (platform) {
    case "linux":
    case "android":
      switch (arch) {
        case "x64":
          targetTriple = "x86_64-unknown-linux-musl";
          break;
        case "arm64":
          targetTriple = "aarch64-unknown-linux-musl";
          break;
      }
      break;
    case "darwin":
      switch (arch) {
        case "x64":
          targetTriple = "x86_64-apple-darwin";
          break;
        case "arm64":
          targetTriple = "aarch64-apple-darwin";
          break;
      }
      break;
    case "win32":
      switch (arch) {
        case "x64":
          targetTriple = "x86_64-pc-windows-msvc";
          break;
        case "arm64":
          targetTriple = "aarch64-pc-windows-msvc";
          break;
      }
      break;
  }
  if (!targetTriple) {
    throw new Error(`Unsupported platform: ${platform} (${arch})`);
  }
  const vendorRoot = path__default.default.join(scriptDirName, "..", "vendor");
  const archRoot = path__default.default.join(vendorRoot, targetTriple);
  const codexBinaryName = process.platform === "win32" ? "codex.exe" : "codex";
  const binaryPath = path__default.default.join(archRoot, "codex", codexBinaryName);
  return binaryPath;
}
var Codex = class {
  exec;
  options;
  constructor(options = {}) {
    this.exec = new CodexExec(options.codexPathOverride, options.env);
    this.options = options;
  }
  /**
   * Starts a new conversation with an agent.
   * @returns A new thread instance.
   */
  startThread(options = {}) {
    return new Thread(this.exec, this.options, options);
  }
  /**
   * Resumes a conversation with an agent based on the thread id.
   * Threads are persisted in ~/.codex/sessions.
   *
   * @param id The id of the thread to resume.
   * @returns A new thread instance.
   */
  resumeThread(id, options = {}) {
    return new Thread(this.exec, this.options, options, id);
  }
};

// src/handler.ts
var codexInstance = null;
var threadMap = /* @__PURE__ */ new Map();
var abortControllers = /* @__PURE__ */ new Map();
var lastSessionId;
var getCodexInstance = () => {
  if (!codexInstance) {
    codexInstance = new Codex();
  }
  return codexInstance;
};
var getOrCreateThread = (sessionId, options) => {
  const codex = getCodexInstance();
  if (sessionId && threadMap.has(sessionId)) {
    return { thread: threadMap.get(sessionId).thread, isExisting: true };
  }
  const thread = codex.startThread({
    workingDirectory: options?.workingDirectory ?? process.env.REACT_GRAB_CWD ?? process.cwd()
  });
  return { thread, isExisting: false };
};
var formatStreamEvent = (event) => {
  switch (event.type) {
    case "item.completed":
      if (event.item?.type === "agent_message" && event.item.text) {
        return event.item.text;
      }
      if (event.item?.type === "command_execution" && event.item.command) {
        return `Executed: ${event.item.command}`;
      }
      return void 0;
    case "turn.completed":
      return void 0;
    default:
      return void 0;
  }
};
var runCodexAgent = async function* (prompt, options) {
  const sessionId = options?.sessionId;
  const abortController = new AbortController();
  if (sessionId) {
    abortControllers.set(sessionId, abortController);
  }
  const isAborted = () => {
    if (options?.signal?.aborted) return true;
    if (abortController.signal.aborted) return true;
    return false;
  };
  try {
    yield { type: "status", content: "Thinking\u2026" };
    const { thread } = getOrCreateThread(sessionId, {
      ...options,
      workingDirectory: options?.workingDirectory ?? options?.cwd
    });
    const result = await thread.runStreamed(prompt);
    if (!result || !result.events) {
      throw new Error(
        "Codex SDK returned an unexpected response: missing events stream"
      );
    }
    for await (const event of result.events) {
      if (isAborted()) break;
      const statusText = formatStreamEvent(event);
      if (statusText && !isAborted()) {
        yield { type: "status", content: statusText };
      }
    }
    if (sessionId && !isAborted() && thread.id) {
      threadMap.set(sessionId, { thread, threadId: thread.id });
      lastSessionId = sessionId;
    }
    if (!isAborted()) {
      yield { type: "status", content: COMPLETED_STATUS };
      yield { type: "done", content: "" };
    }
  } catch (error) {
    if (!isAborted()) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      yield { type: "error", content: errorMessage };
      yield { type: "done", content: "" };
    }
  } finally {
    if (sessionId) {
      abortControllers.delete(sessionId);
    }
  }
};
var abortCodexAgent = (sessionId) => {
  const abortController = abortControllers.get(sessionId);
  if (abortController) {
    abortController.abort();
    abortControllers.delete(sessionId);
    threadMap.delete(sessionId);
  }
};
var undoCodexAgent = async () => {
  if (!lastSessionId) {
    return;
  }
  const threadState = threadMap.get(lastSessionId);
  if (!threadState) {
    return;
  }
  const codex = getCodexInstance();
  const thread = codex.resumeThread(threadState.threadId);
  await thread.run("Please undo the last change you made.");
};
var codexAgentHandler = {
  agentId: "codex",
  run: runCodexAgent,
  abort: abortCodexAgent,
  undo: undoCodexAgent
};

// src/cli.ts
try {
  fetch(
    `https://www.react-grab.com/api/version?source=codex&t=${Date.now()}`
  ).catch(() => {
  });
} catch {
}
(async () => {
  await connectRelay({ handler: codexAgentHandler });
})().catch((error) => {
  throw error;
});
