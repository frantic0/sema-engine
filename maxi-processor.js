

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Maximilian !== 'undefined' ? Maximilian : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    return binary ? ret : ret.toString();
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js
  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 536870912;

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// end include: runtime_stack_check.js
// include: runtime_assertions.js


// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABxAVcYAF/AX9gAAF/YAF/AGACf3wAYAN/f38AYAJ/fwBgAn9/AX9gA39/fwF/YAR/f39/AGABfwF8YAF8AXxgBX9/f39/AGACfHwBfGAGf39/f39/AGADf398AGACf38BfGADf3x8AXxgAn98AXxgAABgAX0BfWAEf39/fwF/YAN/fH8AYAV/f39/fwF/YAF/AX1gA39/fwF8YAR/f3x8AXxgBH9/f3wAYAZ/fH98fHwBfGAEf3x8fAF8YAZ/fHx8fHwBfGAGf39/f3x8AGADf31/AX9gA39/fAF8YAN8fHwBfGAEf398fwBgBH98f3wAYAV/fH98fABgBn98f3x8fABgA398fABgBX98fHx/AGABfQF/YAF8AX9gBH9/f3wBf2ACfn8Bf2ABfAF+YAN/fn8BfmABfAF9YAV/fH9/fwF9YAd/f3x/fHx8AXxgB39/fHx8fHwBfGADf3x/AXxgBH98fH8BfGAGf3x8f3x8AXxgBn98fHx/fwF8YAh/fHx8fHx/fwF8YAJ8fwF8YAN8fH8BfGAHf39/f39/fwBgCH9/f39/f39/AGAKf39/f39/f39/fwBgDX9/f39/f39/f39/f38AYAd/f39/f3x8AGAEf39/fQBgA39/fQBgBX9/fH98AGAGf398f3x8AGAHf398f3x8fABgBH9/fHwAYAZ/f3x8fH8AYAd/f39/f39/AX9gBH9/f30Bf2AEf399fwF/YAR/fn9/AX9gAn98AX9gBn98f39/fwF/YAN+f38Bf2ACfX8Bf2ACfH8Bf2AEf39+fwF+YAJ/fwF9YAR/f39/AX1gBn9/fH9/fwF9YAJ9fwF9YAJ9fQF9YAR/f39/AXxgBH9/fH8BfGAFf398fH8BfGAHf398fH98fAF8YAV/f3x8fAF8YAd/f3x8fH9/AXxgCX9/fHx8fHx/fwF8YAR/fH98AXwCjgcgA2VudhZfZW1iaW5kX3JlZ2lzdGVyX2NsYXNzADwDZW52Il9lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY29uc3RydWN0b3IADQNlbnYlX2VtYmluZF9yZWdpc3Rlcl9jbGFzc19jbGFzc19mdW5jdGlvbgA5A2Vudh9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2Z1bmN0aW9uADoDZW52H19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfcHJvcGVydHkAOwNlbnYVX2VtYmluZF9yZWdpc3Rlcl9lbnVtAAgDZW52G19lbWJpbmRfcmVnaXN0ZXJfZW51bV92YWx1ZQAEA2VudhFfZW12YWxfdGFrZV92YWx1ZQAGA2VudhhfX2N4YV9hbGxvY2F0ZV9leGNlcHRpb24AAANlbnYLX19jeGFfdGhyb3cABANlbnYSX2VtdmFsX25ld19jc3RyaW5nAAADZW52E19lbXZhbF9nZXRfcHJvcGVydHkABgNlbnYNX2VtdmFsX2RlY3JlZgACA2VudglfZW12YWxfYXMAGANlbnYWX2VtdmFsX3J1bl9kZXN0cnVjdG9ycwACA2Vudg1fZW12YWxfaW5jcmVmAAIDZW52BGV4aXQAAgNlbnYVX2VtYmluZF9yZWdpc3Rlcl92b2lkAAUDZW52FV9lbWJpbmRfcmVnaXN0ZXJfYm9vbAALA2VudhtfZW1iaW5kX3JlZ2lzdGVyX3N0ZF9zdHJpbmcABQNlbnYcX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZwAEA2VudhZfZW1iaW5kX3JlZ2lzdGVyX2VtdmFsAAUDZW52GF9lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcgALA2VudhZfZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0AAQDZW52HF9lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXcABBZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxCGZkX2Nsb3NlAAAWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQhmZF93cml0ZQAUA2VudgVhYm9ydAASA2VudhZlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwAAADZW52FWVtc2NyaXB0ZW5fbWVtY3B5X2JpZwAHA2VudgtzZXRUZW1wUmV0MAACFndhc2lfc25hcHNob3RfcHJldmlldzEHZmRfc2VlawAWA84GzAYSAAICAgICAAIAAQUCBQIAAggEAAEAAgABVBoJAw8OAAUGBAACAAFAQUIAAgABESAnRAMOAAYAAioaHCEAAgABJkMDDgkPCQMPDgkDAwACAAFXMSAOAAIAAVlaVQ4ABQYEAAIAAQ8PChERAAIAARAZAAIAARswAAIAARswAAIAARAZAAIAAQMOAx0xAAIAARAMDAwMDAwMDAwKDAACAAEFDgQABgAFBgQABQAFCQUPCQUABQYABQACAAEzVgMOCQ8AAgYAEBkVIgUEDxgABgAAAAIGABAZFSIFBA8YAAYAAgABBQQECAAGBAcHFAACAAEFDgQaAAYEBwcqAAIAAQUEBAgABgQHBxQAAgABBQQECAAGBAcHFAACAAEFPwQ+AAYEBwdGAAACBgAHBgYGFAcGBgYAAAAGBgYGBgYGBgYAAQ8JCUkpAAIAARAZAAACAAEgAAIAAVgAAAIAAQgLH0cXTxcFBgUFAAYAAAAAAgABCAsvUQACAAEePQQHBR4CBgQVBAQEBAUFABIACRERGA4AWxAcIyQlNB0RAwMDAzU2MgMDAwMJAAAAABEAHAADAgUIHwAXFwhQDQgEBQAIDQQNDQUAAAIAAQkPDgMDAwMDAwMDAwMDAwMICAACERIAAAMAAgIAAwMDAAMDBQIAAwUFAgAFBQACAgMFAwMDAAAAAAMDBQIEBAQECAsABQAEBAQEAAIAAAMDIRYAAAACBQICAwACAwUDAgADAwADAwMDAwQFBAQFAAIAAwAAEgEBAgICAgICAgICAgIBAQEBAQECAgICAgICAgICAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBEgABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBEgEKNwoKEwoTCiwKLk0uDEwKEwosCgo4ChZSDDgKExMoUygTLQEAAAcAFkUEAAhLKysLBwcABwYBBwAGAAACAgAGAAYAAgABAAIAAAAAAAIAAAIAAAICAgICAgICBwcGBwcUCAgICAgHBwYGCwgLDQsLCw0NDQACAAwKEwo3BwcHAAcAAgABAgAFThZIBAcBcAHMA8wDBQcBAYBAgIACBgkBfwFB0KfCAgsH5gENBm1lbW9yeQIAGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBABFfX3dhc21fY2FsbF9jdG9ycwAgBm1hbGxvYwDVBgRmcmVlANYGDV9fZ2V0VHlwZU5hbWUA2QQqX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzANsEEF9fZXJybm9fbG9jYXRpb24AhAYJc3RhY2tTYXZlAOUGDHN0YWNrUmVzdG9yZQDmBgpzdGFja0FsbG9jAOcGCHNldFRocmV3AOgGDGR5bkNhbGxfamlqaQDqBgnEBgEAQQELywMnKCkqKywtLi8wMTIzNDU2NzitAzmuAzo7PD0+P0BBQkNERUazA0e0A0i1A0lKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3C2A3G3A3K4A3O5A3S6A7sDvAN1dnd4vQN5vgN6vwN7wAN8wQPDA8IDfX5/gAGBAYIBgwGEAcQDhQGGAYcBiAGJAYoBiwGMAY0BjgGPAZABkQGSAZMBlAGVAZYBlwGYAZkBmgGbAZwBnQGeAZ8BoAGhAaIBowGkAaUBpgGnAagBqQGqAasBrAGtAa4BrwGwAbEBsgGzAbQBtQG2AbcBuAG5AboBuwG8Ab0BvgHOA78BzQPAAc8DwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHUAdUB1gHXAdgB2QHaAdsB3AHdAd4B3wHgAeEB4gHjAeQB5QHmAecB6AHpAeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+Af8BgAKBAoICgwKEAoUChgKHAogCiQKKAosCjAKNAo4CjwKQApECkgKTApQClQKWApcCmAKZApoCmwKcAp0CngKfAqACoQKiAqMCpAKlAqYCpwKoAqkCqgKrAqwCrQKuAq8CsAKxArICswK0ArUCtgK3ArgCuQK6ArsCvAK9Ar4CvwLAAsECwgLDAsUCxgLHAsgCyQLKAssCzALNAs4CzwLQAtEC0gLTAtQC1QLWAtcC2ALZAtoC2wLcAt0C3gLfAuAC4QLiAuMC5ALsAu0C7gLvAskD8ALxAvIC8wL0AssD9QL3AvgC+QL6AvsC/AL9Av4C/wKAA4EDggODA4QDhQOGA4cDiAOJA4oDiwOMA40DjgOPA5ADkQOSA5MDlAOVA5YDlwOYA5kDmgOqBuUC5gLnAugC6QLqAuMD5APlA+YD5wPoA8gE6QPqA8sE6wPJBOwDzATNBO0D7gPvA/AD8QPOBPID8wP0A/UD9gPSBPcD0wTQBPgDzwS2BYYGhwaDBqcGqAapBq4GrwaxBrMGtga0BrUGvAa3Br8GuAbABtQG0QbDBrkG0wbQBsQGugbSBs0Gxga7BsgGCvaqBswGCwAQqAMQ/AMQ3wULqSQBAn9BgAgQIkGKCBAjQZcIECRBoggQJUGuCBAmQZQhQawhQcwhQQBBwBVBAUHDFUEAQcMVQQBBughBxRVBAhAAQZQhQQFB3CFBwBVBA0EEEAFBlCFBxghBAkHgIUHoIUEFQQYQAkGUIUHVCEECQewhQeghQQdBCBACQYQiQZwiQcAiQQBBwBVBCUHDFUEAQcMVQQBB5ghBxRVBChAAQYQiQfMIQQRB0CJB8BVBC0EMEAJBhCJB+QhBAUHgIkHAFUENQQ4QAkH0IkGMI0GwI0EAQcAVQQ9BwxVBAEHDFUEAQYcJQcUVQRAQAEH0IkEBQcAjQcAVQRFBEhABQQgQmwYiAUEANgIEIAFBEzYCAEH0IkGUCUEEQdAjQeAjQRQgAUEAEANBCBCbBiIBQQA2AgQgAUEVNgIAQfQiQZkJQQRB8CNB8BhBFiABQQAQA0EIEJsGIgFBADYCBCABQRc2AgBBCBCbBiICQQA2AgQgAkEYNgIAQfQiQaEJQYD1AEGAJEEZIAFBgPUAQdgYQRogAhAEQQgQmwYiAUEANgIEIAFBGzYCAEEIEJsGIgJBADYCBCACQRw2AgBB9CJBqwlBxPQAQYAWQR0gAUHE9ABB2BVBHiACEARBkCRBpCRBwCRBAEHAFUEfQcMVQQBBwxVBAEG0CUHFFUEgEABBkCRBAUHQJEHAFUEhQSIQAUEIEJsGIgFBADYCBCABQSM2AgBBkCRBvAlBBUHgJEH0JEEkIAFBABADQQgQmwYiAUEANgIEIAFBJTYCAEGQJEHDCUEGQYAlQZglQSYgAUEAEANBCBCbBiIBQQA2AgQgAUEnNgIAQZAkQcgJQQdBoCVBvCVBKCABQQAQA0HQJUHkJUGAJkEAQcAVQSlBwxVBAEHDFUEAQdIJQcUVQSoQAEHQJUEBQZAmQcAVQStBLBABQQgQmwYiAUEANgIEIAFBLTYCAEHQJUHbCUEDQZQmQaAmQS4gAUEAEANBCBCbBiIBQQA2AgQgAUEvNgIAQdAlQeAJQQZBsCZByCZBMCABQQAQA0EIEJsGIgFBADYCBCABQTE2AgBB0CVB6AlBA0HQJkHYGEEyIAFBABADQQgQmwYiAUEANgIEIAFBMzYCAEHQJUH2CUECQdwmQYAWQTQgAUEAEANB8CZBhCdBpCdBAEHAFUE1QcMVQQBBwxVBAEGFCkHFFUE2EABB8CZBjwpBBEHAJ0GgGUE3QTgQAkHwJkGPCkEEQdAnQeAnQTlBOhACQfgnQZQoQbgoQQBBwBVBO0HDFUEAQcMVQQBBlQpBxRVBPBAAQfgnQQFByChBwBVBPUE+EAFBCBCbBiIBQQA2AgQgAUE/NgIAQfgnQaAKQQRB0ChB4ChBwAAgAUEAEANBCBCbBiIBQQA2AgQgAUHBADYCAEH4J0GlCkEDQegoQdgYQcIAIAFBABADQQgQmwYiAUEANgIEIAFBwwA2AgBB+CdBrwpBAkH0KEGAJEHEACABQQAQA0EIEJsGIgFBADYCBCABQcUANgIAQQgQmwYiAkEANgIEIAJBxgA2AgBB+CdBtQpBgPUAQYAkQccAIAFBgPUAQdgYQcgAIAIQBEEIEJsGIgFBADYCBCABQckANgIAQQgQmwYiAkEANgIEIAJBygA2AgBB+CdBuwpBgPUAQYAkQccAIAFBgPUAQdgYQcgAIAIQBEEIEJsGIgFBADYCBCABQcMANgIAQQgQmwYiAkEANgIEIAJBywA2AgBB+CdBywpBgPUAQYAkQccAIAFBgPUAQdgYQcgAIAIQBEGIKUGcKUG4KUEAQcAVQcwAQcMVQQBBwxVBAEHPCkHFFUHNABAAQYgpQQFByClBwBVBzgBBzwAQAUEIEJsGIgFBADYCBCABQdAANgIAQYgpQdcKQQdB0ClB7ClB0QAgAUEAEANBCBCbBiIBQQA2AgQgAUHSADYCAEGIKUHcCkEHQYAqQZwqQdMAIAFBABADQQgQmwYiAUEANgIEIAFB1AA2AgBBiClB5wpBA0GoKkGgJkHVACABQQAQA0EIEJsGIgFBADYCBCABQdYANgIAQYgpQfAKQQNBtCpB2BhB1wAgAUEAEANBCBCbBiIBQQA2AgQgAUHYADYCAEGIKUH6CkEDQbQqQdgYQdcAIAFBABADQQgQmwYiAUEANgIEIAFB2QA2AgBBiClBhQtBA0G0KkHYGEHXACABQQAQA0EIEJsGIgFBADYCBCABQdoANgIAQYgpQZILQQNBtCpB2BhB1wAgAUEAEANBzCpB4CpB/CpBAEHAFUHbAEHDFUEAQcMVQQBBmwtBxRVB3AAQAEHMKkEBQYwrQcAVQd0AQd4AEAFBCBCbBiIBQQA2AgQgAUHfADYCAEHMKkGjC0EHQZArQawrQeAAIAFBABADQQgQmwYiAUEANgIEIAFB4QA2AgBBzCpBpgtBCUHAK0HkK0HiACABQQAQA0EIEJsGIgFBADYCBCABQeMANgIAQcwqQaYLQQRB8CtBgCxB5AAgAUEAEANBCBCbBiIBQQA2AgQgAUHlADYCAEHMKkHwCkEDQYgsQdgYQeYAIAFBABADQQgQmwYiAUEANgIEIAFB5wA2AgBBzCpB+gpBA0GILEHYGEHmACABQQAQA0EIEJsGIgFBADYCBCABQegANgIAQcwqQasLQQNBiCxB2BhB5gAgAUEAEANBCBCbBiIBQQA2AgQgAUHpADYCAEHMKkG0C0EDQYgsQdgYQeYAIAFBABADQQgQmwYiAUEANgIEIAFB6gA2AgBBCBCbBiICQQA2AgQgAkHrADYCAEHMKkGZCUHE9ABBgBZB7AAgAUHE9ABB2BVB7QAgAhAEQaAsQbQsQdAsQQBBwBVB7gBBwxVBAEHDFUEAQb8LQcUVQe8AEABBoCxBAUHgLEHAFUHwAEHxABABQQQQmwYiAUHyADYCAEGgLEHHC0ECQeQsQYAkQfMAIAFBABADQaAsQccLQQJB5CxBgCRB9ABB8gAQAkEEEJsGIgFB9QA2AgBBoCxBzAtBAkHsLEH0LEH2ACABQQAQA0GgLEHMC0ECQewsQfQsQfcAQfUAEAJBjC1BrC1B1C1BAEHAFUH4AEHDFUEAQcMVQQBB1gtBxRVB+QAQAEGMLUEBQeQtQcAVQfoAQfsAEAFBCBCbBiIBQQA2AgQgAUH8ADYCAEGMLUHoC0EEQfAtQYAuQf0AIAFBABADQZQuQawuQcwuQQBBwBVB/gBBwxVBAEHDFUEAQewLQcUVQf8AEABBlC5BAUHcLkHAFUGAAUGBARABQQgQmwYiAUEANgIEIAFBggE2AgBBlC5B+AtBB0HgLkH8LkGDASABQQAQA0GUL0GsL0HML0EAQcAVQYQBQcMVQQBBwxVBAEH/C0HFFUGFARAAQZQvQQFB3C9BwBVBhgFBhwEQAUEIEJsGIgFBADYCBCABQYgBNgIAQZQvQYoMQQdB4C9B/C5BiQEgAUEAEANBjDBBqDBBzDBBAEHAFUGKAUHDFUEAQcMVQQBBkQxBxRVBiwEQAEGMMEEBQdwwQcAVQYwBQY0BEAFBCBCbBiIBQQA2AgQgAUGOATYCAEGMMEHbCUEEQeAwQYAuQY8BIAFBABADQfwwQZAxQawxQQBBwBVBkAFBwxVBAEHDFUEAQZ8MQcUVQZEBEABB/DBBAUG8MUHAFUGSAUGTARABQQgQmwYiAUEANgIEIAFBlAE2AgBB/DBBpwxBA0HAMUHYGEGVASABQQAQA0EIEJsGIgFBADYCBCABQZYBNgIAQfwwQbEMQQNBwDFB2BhBlQEgAUEAEANBCBCbBiIBQQA2AgQgAUGXATYCAEH8MEHbCUEHQdAxQZwqQZgBIAFBABADQfgxQYwyQagyQQBBwBVBmQFBwxVBAEHDFUEAQb4MQcUVQZoBEABB+DFBAUG4MkHAFUGbAUGcARABQfgxQccMQQNBvDJByDJBnQFBngEQAkH4MUHLDEEDQbwyQcgyQZ0BQZ8BEAJB+DFBzwxBA0G8MkHIMkGdAUGgARACQfgxQdMMQQNBvDJByDJBnQFBoQEQAkH4MUHXDEEDQbwyQcgyQZ0BQaIBEAJB+DFB2gxBA0G8MkHIMkGdAUGjARACQfgxQd0MQQNBvDJByDJBnQFBpAEQAkH4MUHhDEEDQbwyQcgyQZ0BQaUBEAJB+DFB5QxBA0G8MkHIMkGdAUGmARACQfgxQekMQQJB7CxB9CxB9wBBpwEQAkH4MUHtDEEDQbwyQcgyQZ0BQagBEAJB2DJB7DJBjDNBAEHAFUGpAUHDFUEAQcMVQQBB8QxBxRVBqgEQAEHYMkEBQZwzQcAVQasBQawBEAFBCBCbBiIBQQA2AgQgAUGtATYCAEHYMkH7DEECQaAzQeghQa4BIAFBABADQQgQmwYiAUEANgIEIAFBrwE2AgBB2DJBgg1BA0GoM0HYGEGwASABQQAQA0EIEJsGIgFBADYCBCABQbEBNgIAQdgyQYsNQQNBtDNB2BVBsgEgAUEAEANBCBCbBiIBQQA2AgQgAUGzATYCAEHYMkGbDUECQcAzQYAWQbQBIAFBABADQQgQmwYiAUEANgIEIAFBtQE2AgBBCBCbBiICQQA2AgQgAkG2ATYCAEHYMkGiDUHE9ABBgBZBtwEgAUHE9ABB2BVBuAEgAhAEQQgQmwYiAUEANgIEIAFBuQE2AgBBCBCbBiICQQA2AgQgAkG6ATYCAEHYMkGiDUHE9ABBgBZBtwEgAUHE9ABB2BVBuAEgAhAEQQgQmwYiAUEANgIEIAFBuwE2AgBBCBCbBiICQQA2AgQgAkG8ATYCAEHYMkGvDUHE9ABBgBZBtwEgAUHE9ABB2BVBuAEgAhAEQQgQmwYiAUEANgIEIAFBvQE2AgBBCBCbBiICQQA2AgQgAkG+ATYCAEHYMkG4DUGA9QBBgCRBvwEgAUHE9ABB2BVBuAEgAhAEQQgQmwYiAUEANgIEIAFBwAE2AgBBCBCbBiICQQA2AgQgAkHBATYCAEHYMkG8DUGA9QBBgCRBvwEgAUHE9ABB2BVBuAEgAhAEQQgQmwYiAUEANgIEIAFBwgE2AgBBCBCbBiICQQA2AgQgAkHDATYCAEHYMkHADUH88wBBgBZBxAEgAUHE9ABB2BVBuAEgAhAEQQgQmwYiAUEANgIEIAFBxQE2AgBBCBCbBiICQQA2AgQgAkHGATYCAEHYMkHFDUHE9ABBgBZBtwEgAUHE9ABB2BVBuAEgAhAEQeQzQYg0QbQ0QQBBwBVBxwFBwxVBAEHDFUEAQcsNQcUVQcgBEABB5DNBAUHENEHAFUHJAUHKARABQQgQmwYiAUEANgIEIAFBywE2AgBB5DNB2wlBBUHQNEHkNEHMASABQQAQA0EIEJsGIgFBADYCBCABQc0BNgIAQeQzQeINQQNB7DRB2BhBzgEgAUEAEANBCBCbBiIBQQA2AgQgAUHPATYCAEHkM0HrDUECQfg0QYAkQdABIAFBABADQZw1QcQ1QfQ1QQBBwBVB0QFBwxVBAEHDFUEAQfQNQcUVQdIBEABBnDVBAkGENkGAFkHTAUHUARABQQgQmwYiAUEANgIEIAFB1QE2AgBBnDVB2wlBBEGQNkGALkHWASABQQAQA0EIEJsGIgFBADYCBCABQdcBNgIAQZw1QeINQQRBoDZBsDZB2AEgAUEAEANBCBCbBiIBQQA2AgQgAUHZATYCAEGcNUGODkEDQbg2QdgVQdoBIAFBABADQQgQmwYiAUEANgIEIAFB2wE2AgBBnDVB6w1BA0HENkHQNkHcASABQQAQA0EIEJsGIgFBADYCBCABQd0BNgIAQZw1QZgOQQJB2DZBgBZB3gEgAUEAEANBgDdBrDdB3DdBnDVBwBVB3wFBwBVB4AFBwBVB4QFBnQ5BxRVB4gEQAEGAN0ECQew3QYAWQeMBQeQBEAFBCBCbBiIBQQA2AgQgAUHlATYCAEGAN0HbCUEEQYA4QYAuQeYBIAFBABADQQgQmwYiAUEANgIEIAFB5wE2AgBBgDdB4g1BBEGQOEGwNkHoASABQQAQA0EIEJsGIgFBADYCBCABQekBNgIAQYA3QY4OQQNBoDhB2BVB6gEgAUEAEANBCBCbBiIBQQA2AgQgAUHrATYCAEGAN0HrDUEDQaw4QdA2QewBIAFBABADQQgQmwYiAUEANgIEIAFB7QE2AgBBgDdBmA5BAkG4OEGAFkHuASABQQAQAyAAC4MCAEG4FEH4FEGwFUEAQcAVQe8BQcMVQQBBwxVBACAAQcUVQfABEABBuBRBAUHIFUHAFUHxAUHyARABQQgQmwYiAEEANgIEIABB8wE2AgBBuBRBiBNBA0HMFUHYFUH0ASAAQQAQA0EIEJsGIgBBADYCBCAAQfUBNgIAQbgUQZITQQRB4BVB8BVB9gEgAEEAEANBCBCbBiIAQQA2AgQgAEH3ATYCAEG4FEGYDkECQfgVQYAWQfgBIABBABADQQQQmwYiAEH5ATYCAEG4FEGZE0EDQYQWQawWQfoBIABBABADQQQQmwYiAEH7ATYCAEG4FEGdE0EEQcAWQdAWQfwBIABBABADC4MCAEHAF0GAGEG4GEEAQcAVQf0BQcMVQQBBwxVBACAAQcUVQf4BEABBwBdBAUHIGEHAFUH/AUGAAhABQQgQmwYiAEEANgIEIABBgQI2AgBBwBdBiBNBA0HMGEHYGEGCAiAAQQAQA0EIEJsGIgBBADYCBCAAQYMCNgIAQcAXQZITQQRB4BhB8BhBhAIgAEEAEANBCBCbBiIAQQA2AgQgAEGFAjYCAEHAF0GYDkECQfgYQYAWQYYCIABBABADQQQQmwYiAEGHAjYCAEHAF0GZE0EDQYAZQawWQYgCIABBABADQQQQmwYiAEGJAjYCAEHAF0GdE0EEQZAZQaAZQYoCIABBABADC4MCAEGQGkHQGkGIG0EAQcAVQYsCQcMVQQBBwxVBACAAQcUVQYwCEABBkBpBAUGYG0HAFUGNAkGOAhABQQgQmwYiAEEANgIEIABBjwI2AgBBkBpBiBNBA0GcG0HYFUGQAiAAQQAQA0EIEJsGIgBBADYCBCAAQZECNgIAQZAaQZITQQRBsBtB8BVBkgIgAEEAEANBCBCbBiIAQQA2AgQgAEGTAjYCAEGQGkGYDkECQcAbQYAWQZQCIABBABADQQQQmwYiAEGVAjYCAEGQGkGZE0EDQcgbQawWQZYCIABBABADQQQQmwYiAEGXAjYCAEGQGkGdE0EEQeAbQdAWQZgCIABBABADC4MCAEHYHEGYHUHQHUEAQcAVQZkCQcMVQQBBwxVBACAAQcUVQZoCEABB2BxBAUHgHUHAFUGbAkGcAhABQQgQmwYiAEEANgIEIABBnQI2AgBB2BxBiBNBA0HkHUHYFUGeAiAAQQAQA0EIEJsGIgBBADYCBCAAQZ8CNgIAQdgcQZITQQRB8B1B8BVBoAIgAEEAEANBCBCbBiIAQQA2AgQgAEGhAjYCAEHYHEGYDkECQYAeQYAWQaICIABBABADQQQQmwYiAEGjAjYCAEHYHEGZE0EDQYgeQawWQaQCIABBABADQQQQmwYiAEGlAjYCAEHYHEGdE0EEQaAeQdAWQaYCIABBABADC4MCAEGYH0HYH0GQIEEAQcAVQacCQcMVQQBBwxVBACAAQcUVQagCEABBmB9BAUGgIEHAFUGpAkGqAhABQQgQmwYiAEEANgIEIABBqwI2AgBBmB9BiBNBA0GkIEGwIEGsAiAAQQAQA0EIEJsGIgBBADYCBCAAQa0CNgIAQZgfQZITQQRBwCBB0CBBrgIgAEEAEANBCBCbBiIAQQA2AgQgAEGvAjYCAEGYH0GYDkECQdggQYAWQbACIABBABADQQQQmwYiAEGxAjYCAEGYH0GZE0EDQeAgQawWQbICIABBABADQQQQmwYiAEGzAjYCAEGYH0GdE0EEQfAgQYAhQbQCIABBABADCwUAQZQhCwwAIAAEQCAAEJ0GCwsHACAAEQEACwcAQQEQmwYLCQAgASAAEQIACwwAIAAgACgCADYCBAsJACABIAARAgALDAAgACAAKAIANgIECwUAQYQiCwwAIAAEQCAAEJ0GCwsNACABIAIgAyAAEQQACx0AQdSXASABNgIAQdCXASAANgIAQdiXASACNgIACwcAIAARAQALCQBB0JcBKAIACwUAQfQiCwwAIAAEQCAAEJ0GCwsHACAAEQEACwcAQTgQmwYLPQEBfyABIAAoAgQiBEEBdWohASAAKAIAIQAgASACIAMCfyAEQQFxBEAgASgCACAAaigCACEACyAACxEYAAs9AQF/IAEgACgCBCIEQQF1aiEBIAAoAgAhACABIAIgAwJ/IARBAXEEQCABKAIAIABqKAIAIQALIAALEQ4ACwcAIAArAzALCQAgACABOQMwCzkBAX8gASAAKAIEIgJBAXVqIQEgACgCACEAIAECfyACQQFxBEAgASgCACAAaigCACEACyAACxEJAAs7AQF/IAEgACgCBCIDQQF1aiEBIAAoAgAhACABIAICfyADQQFxBEAgASgCACAAaigCACEACyAACxEDAAsHACAAKAIsCwkAIAAgATYCLAs5AQF/IAEgACgCBCICQQF1aiEBIAAoAgAhACABAn8gAkEBcQRAIAEoAgAgAGooAgAhAAsgAAsRAAALOwEBfyABIAAoAgQiA0EBdWohASAAKAIAIQAgASACAn8gA0EBcQRAIAEoAgAgAGooAgAhAAsgAAsRBQALBQBBkCQLDAAgAARAIAAQnQYLCwcAIAARAQALEABB+AAQmwZBAEH4ABDeBgs/AQF/IAEgACgCBCIFQQF1aiEBIAAoAgAhACABIAIgAyAEAn8gBUEBcQRAIAEoAgAgAGooAgAhAAsgAAsRIwALQQEBfyABIAAoAgQiBkEBdWohASAAKAIAIQAgASACIAMgBCAFAn8gBkEBcQRAIAEoAgAgAGooAgAhAAsgAAsRJAALQwEBfyABIAAoAgQiB0EBdWohASAAKAIAIQAgASACIAMgBCAFIAYCfyAHQQFxBEAgASgCACAAaigCACEACyAACxElAAsFAEHQJQsMACAABEAgABCdBgsLBwAgABEBAAteAQF/QdAAEJsGIgBCADcDACAAQgA3AyAgAEKAgICAgICA+L9/NwMYIABCADcDOCAAQQE6AEggAEIANwMQIABCADcDCCAAQgA3AyggAEEAOgAwIABBQGtCADcDACAAC5ACAgF/A3wgAC0AMEUEQCAAKwMoIQMCQCAAKwMgRAAAAAAAAAAAYQ0AIANEAAAAAAAAAABiDQBEAAAAAAAAAAAhAyABRAAAAAAAAAAAZEEBc0UEQEQAAAAAAADwP0QAAAAAAAAAACAAKwMYRAAAAAAAAAAAZRshAwsgACADOQMoIAAgACsDODkDCAsCQCADRAAAAAAAAAAAYQ0AIAAgACsDECIDIAArAwigIgQ5AwggACsDQCEFAkAgA0QAAAAAAAAAAGVFBEAgACAEIAVmIgI6ADAgAg0BDAILIAAgBCAFZSICOgAwIAJBAXMNAQsgAC0ASA0AIABBADoAMCAAQgA3AygLIAAgATkDGAsgACsDCAs7AQF/IAEgACgCBCIDQQF1aiEBIAAoAgAhACABIAICfyADQQFxBEAgASgCACAAaigCACEACyAACxERAAtbAgF/AXwgACACOQNAIAArAzghBiAAIAE5AzggACAGOQMIQdCXASgCACEFIAAgBDoASCAAQQA6ADAgAEIANwMoIAAgAiABoSADRAAAAAAAQI9AoyAFt6KjOQMQC0EBAX8gASAAKAIEIgZBAXVqIQEgACgCACEAIAEgAiADIAQgBQJ/IAZBAXEEQCABKAIAIABqKAIAIQALIAALEScACyYAIABEAAAAAAAA8D9EAAAAAAAAAAAgAUQAAAAAAAAAAGQbOQMgCzsBAX8gASAAKAIEIgNBAXVqIQEgACgCACEAIAEgAgJ/IANBAXEEQCABKAIAIABqKAIAIQALIAALEQMACwcAIAAtADALOQEBfyABIAAoAgQiAkEBdWohASAAKAIAIQAgAQJ/IAJBAXEEQCABKAIAIABqKAIAIQALIAALEQAACwUAQfAmCwwAIAAEQCAAEJ0GCwtGAQF/IwBBEGsiBCQAIAQgASACIAMgABEaAEEMEJsGIgAgBCgCADYCACAAIAQoAgQ2AgQgACAEKAIINgIIIARBEGokACAAC6EDAgd/AXwCfEQAAAAAAADwPyILIANEAAAAAAAA8D9kDQAaIAMiCyADRAAAAAAAAPC/Y0EBcw0AGkQAAAAAAADwvwshCyABKAIAIQcgASgCBCEEIABBADYCCCAAQgA3AgACQAJAIAQgB2siBUUNACAFQQN1IgFBgICAgAJPDQEgACAFEJsGIgg2AgAgACAIIAFBA3QiCWoiBjYCCEEAIQEgCEEAIAcgBGsiBCAFIAQgBUobQQN2IAVBfyAFQX9KGyIKQQEgCkEBSBtsQQN0EN4GIQUgACAGNgIEIAlFDQAgC0QAAAAAAADwP6REAAAAAAAA8L+lRAAAAAAAAPA/oEQAAAAAAADgP6JEAAAAAAAAAACgIgufIQNEAAAAAAAA8D8gC6GfIQsgBiAFayIAQX8gAEF/ShsiBEEBIARBAUgbIAUgBmsiBCAAIAAgBEgbQQN2bCIAQQEgAEEBSxshBCACKAIAIQYDQCAFIAFBA3QiAGogCyAAIAdqKwMAoiADIAAgBmorAwCioDkDACABQQFqIgEgBEcNAAsLDwsgABCkBgALDQAgASACIAMgABEhAAu2AQEDfyMAQTBrIgMkACADQQgQmwYiBDYCICADIARBCGoiBTYCKCAEIAA5AwAgAyAFNgIkIANBCBCbBiIENgIQIAMgBEEIaiIFNgIYIAQgATkDACADIAU2AhQgAyADQSBqIANBEGogAhBZIAMoAgAiBCsDACECIAMgBDYCBCAEEJ0GIAMoAhAiBARAIAMgBDYCFCAEEJ0GCyADKAIgIgQEQCADIAQ2AiQgBBCdBgsgA0EwaiQAIAILBQBB+CcLDAAgAARAIAAQnQYLCwcAIAARAQALMAEBf0EYEJsGIgBCADcDECAAQoCAgICAgIDwPzcDCCAAQoCAgICAgIDwPzcDACAACyEAIAAgAjkDECAAIAE5AwAgAEQAAAAAAADwPyABoTkDCAs9AQF/IAEgACgCBCIEQQF1aiEBIAAoAgAhACABIAIgAwJ/IARBAXEEQCABKAIAIABqKAIAIQALIAALESYACxsAIAAgACsDACABoiAAKwMIIAArAxCioDkDEAs7AQF/IAEgACgCBCIDQQF1aiEBIAAoAgAhACABIAICfyADQQFxBEAgASgCACAAaigCACEACyAACxEDAAsHACAAKwMQCzkBAX8gASAAKAIEIgJBAXVqIQEgACgCACEAIAECfyACQQFxBEAgASgCACAAaigCACEACyAACxEJAAsHACAAKwMACwkAIAAgATkDAAs5AQF/IAEgACgCBCICQQF1aiEBIAAoAgAhACABAn8gAkEBcQRAIAEoAgAgAGooAgAhAAsgAAsRCQALOwEBfyABIAAoAgQiA0EBdWohASAAKAIAIQAgASACAn8gA0EBcQRAIAEoAgAgAGooAgAhAAsgAAsRAwALBwAgACsDCAsJACAAIAE5AwgLCQAgACABOQMQCwUAQYgpCwwAIAAEQCAAEJ0GCwsHACAAEQEACxAAQdgAEJsGQQBB2AAQ3gYLQwEBfyABIAAoAgQiB0EBdWohASAAKAIAIQAgASACIAMgBCAFIAYCfyAHQQFxBEAgASgCACAAaigCACEACyAACxE0AAtDAQF/IAEgACgCBCIHQQF1aiEBIAAoAgAhACABIAIgAyAEIAUgBgJ/IAdBAXEEQCABKAIAIABqKAIAIQALIAALER0ACzsBAX8gASAAKAIEIgNBAXVqIQEgACgCACEAIAEgAgJ/IANBAXEEQCABKAIAIABqKAIAIQALIAALEREACzsBAX8gASAAKAIEIgNBAXVqIQEgACgCACEAIAEgAgJ/IANBAXEEQCABKAIAIABqKAIAIQALIAALEQMACwUAQcwqCwwAIAAEQCAAEJ0GCwsHACAAEQEACxsBAX9B2AAQmwZBAEHYABDeBiIAQQE2AjwgAAtDAQF/IAEgACgCBCIHQQF1aiEBIAAoAgAhACABIAIgAyAEIAUgBgJ/IAdBAXEEQCABKAIAIABqKAIAIQALIAALETUAC0cBAX8gASAAKAIEIglBAXVqIQEgACgCACEAIAEgAiADIAQgBSAGIAcgCAJ/IAlBAXEEQCABKAIAIABqKAIAIQALIAALETYACz0BAX8gASAAKAIEIgRBAXVqIQEgACgCACEAIAEgAiADAn8gBEEBcQRAIAEoAgAgAGooAgAhAAsgAAsRMgALOwEBfyABIAAoAgQiA0EBdWohASAAKAIAIQAgASACAn8gA0EBcQRAIAEoAgAgAGooAgAhAAsgAAsRAwALBwAgACgCOAsJACAAIAE2AjgLOQEBfyABIAAoAgQiAkEBdWohASAAKAIAIQAgAQJ/IAJBAXEEQCABKAIAIABqKAIAIQALIAALEQAACzsBAX8gASAAKAIEIgNBAXVqIQEgACgCACEAIAEgAgJ/IANBAXEEQCABKAIAIABqKAIAIQALIAALEQUACwUAQaAsCwwAIAAEQCAAEJ0GCwsHACAAEQEACwcAQQEQmwYLDAAgASAAKAIAEQkACwkAIAEgABEJAAsXACAARAAAAAAAQI9Ao0HQlwEoAgC3ogsMACABIAAoAgARCgALCQAgASAAEQoACwUAQYwtCwwAIAAEQCAAEJ0GCwsHACAAEQEACywBAn9BGBCbBiIAIgFBEGpCADcDACAAQgA3AwAgAEIANwMIIAFBAToAECAAC2EBAXwCQCAAKwMAIgMgAkQAAAAAAECPQKNB0JcBKAIAt6IiAqEgAyACIANlGyIDRAAAAAAAAPA/Y0UEQCAAKwMIIQEMAQsgACABOQMICyAAIANEAAAAAAAA8D+gOQMAIAELPQEBfyABIAAoAgQiBEEBdWohASAAKAIAIQAgASACIAMCfyAEQQFxBEAgASgCACAAaigCACEACyAACxEQAAsFAEGULgsMACAABEAgABCdBgsLBwAgABEBAAsqAQF/QdiR1gAQmwZBAEHYkdYAEN4GIgAQrwMaIABBqJHWAGoQqQMaIAALawAgACABAn8gAEGokdYAaiAEEKwDIAWiIAK4IgSiIASgRAAAAAAAAPA/oCIEmUQAAAAAAADgQWMEQCAEqgwBC0GAgICAeAsiAiADELADIgNEAAAAAAAA8D8gA5mhoiABoEQAAAAAAADgP6ILQwEBfyABIAAoAgQiB0EBdWohASAAKAIAIQAgASACIAMgBCAFIAYCfyAHQQFxBEAgASgCACAAaigCACEACyAACxEbAAsFAEGULwsMACAABEAgABCdBgsLBwAgABEBAAtCAQF/QfCkrAEQmwZBAEHwpKwBEN4GIgAQrwMaIABBqJHWAGoQrwMaIABB0KKsAWoQqQMaIABBgKOsAWoQxgMaIAAL9wEBAXwgACABAn8gAEGAo6wBaiAAQdCirAFqEKoDIAREAAAAAAAA8D8QsgMiBCAEoCAFoiACuCIFoiIEIAWgRAAAAAAAAPA/oCIGmUQAAAAAAADgQWMEQCAGqgwBC0GAgICAeAsiAiADELADIgZEAAAAAAAA8D8gBpmhoiIGIABBqJHWAGogAQJ/IAREUrgehetR8D+iIAWgRAAAAAAAAPA/oERcj8L1KFzvP6IiBZlEAAAAAAAA4EFjBEAgBaoMAQtBgICAgHgLIgIgA0SuR+F6FK7vP6IQsAMiA0QAAAAAAADwPyADmaGioCABoEQAAAAAAAAIQKMLQwEBfyABIAAoAgQiB0EBdWohASAAKAIAIQAgASACIAMgBCAFIAYCfyAHQQFxBEAgASgCACAAaigCACEACyAACxEbAAsFAEGMMAsMACAABEAgABCdBgsLBwAgABEBAAsZAQF/QRAQmwYiAEIANwMAIABCADcDCCAACykBAXwgACsDACEDIAAgATkDACAAIAEgA6EgACsDCCACoqAiATkDCCABCz0BAX8gASAAKAIEIgRBAXVqIQEgACgCACEAIAEgAiADAn8gBEEBcQRAIAEoAgAgAGooAgAhAAsgAAsREAALBQBB/DALDAAgAARAIAAQnQYLCwcAIAARAQALzQECAn8DfEHoABCbBiIAQoCAgICAgID4PzcDYCAAQoCAgICAgNDHwAA3A1ggAEIANwMAIABCADcDECAAQgA3AwhB0JcBKAIAIQEgAEKAgICAgICA+D83AyggAEKAgICAgICA+D83AyAgAEQJlEpwL4uoQCABt6MQ/AUiAzkDGCAAIAMgAyADRAAAAAAAAPA/oCIEokQAAAAAAADwP6CjIgI5AzggACACOQMwIAAgAiACoDkDUCAAIAMgAqI5A0ggACAEIASgIAKiOQNAIAALqwECAX8CfCAAIAE5A1hB0JcBKAIAIQIgAEQAAAAAAAAAAEQAAAAAAADwPyAAKwNgIgOjIANEAAAAAAAAAABhGyIEOQMoIAAgBDkDICAAIAFEGC1EVPshCUCiIAK3oxD8BSIDOQMYIAAgAyADIAQgA6AiBKJEAAAAAAAA8D+goyIBOQM4IAAgATkDMCAAIAEgAaA5A1AgACADIAGiOQNIIAAgBCAEoCABojkDQAs7AQF/IAEgACgCBCIDQQF1aiEBIAAoAgAhACABIAICfyADQQFxBEAgASgCACAAaigCACEACyAACxEDAAutAQIBfwJ8IAAgATkDYCAAKwNYIQNB0JcBKAIAIQIgAEQAAAAAAAAAAEQAAAAAAADwPyABoyABRAAAAAAAAAAAYRsiATkDKCAAIAE5AyAgACADRBgtRFT7IQlAoiACt6MQ/AUiAzkDGCAAIAMgAyABIAOgIgSiRAAAAAAAAPA/oKMiATkDOCAAIAE5AzAgACABIAGgOQNQIAAgAyABojkDSCAAIAQgBKAgAaI5A0ALggEBBHwgACsDACEHIAAgATkDACAAIAArAwgiBiAAKwM4IAcgAaAgACsDECIHIAegoSIJoiAGIAArA0CioaAiCDkDCCAAIAcgCSAAKwNIoiAGIAArA1CioKAiBjkDECABIAggACsDKKKhIgEgBaIgCCADoiAGIAKioCABIAahIASioKALQwEBfyABIAAoAgQiB0EBdWohASAAKAIAIQAgASACIAMgBCAFIAYCfyAHQQFxBEAgASgCACAAaigCACEACyAACxEdAAsFAEH4MQsMACAABEAgABCdBgsLBwAgABEBAAsHAEEBEJsGCwsAIAEgAiAAEQwACwcAIAAgAaALBwAgACABoQsHACAAIAGiCwcAIAAgAaMLGgBEAAAAAAAA8D9EAAAAAAAAAAAgACABZBsLGgBEAAAAAAAA8D9EAAAAAAAAAAAgACABYxsLGgBEAAAAAAAA8D9EAAAAAAAAAAAgACABZhsLGgBEAAAAAAAA8D9EAAAAAAAAAAAgACABZRsLCQAgACABENgGCwUAIACZCwkAIAAgARDuBQsFAEHYMgsMACAABEAgABCdBgsLBwAgABEBAAsLAEHYABCbBhDMAws5AQF/IAEgACgCBCICQQF1aiEBIAAoAgAhACABAn8gAkEBcQRAIAEoAgAgAGooAgAhAAsgAAsRAgALOwEBfyABIAAoAgQiA0EBdWohASAAKAIAIQAgASACAn8gA0EBcQRAIAEoAgAgAGooAgAhAAsgAAsRAwALOwEBfyABIAAoAgQiA0EBdWohASAAKAIAIQAgASACAn8gA0EBcQRAIAEoAgAgAGooAgAhAAsgAAsRBQALBwAgAC0AVAs5AQF/IAEgACgCBCICQQF1aiEBIAAoAgAhACABAn8gAkEBcQRAIAEoAgAgAGooAgAhAAsgAAsRAAALBwAgACgCMAsJACAAIAE2AjALOQEBfyABIAAoAgQiAkEBdWohASAAKAIAIQAgAQJ/IAJBAXEEQCABKAIAIABqKAIAIQALIAALEQAACzsBAX8gASAAKAIEIgNBAXVqIQEgACgCACEAIAEgAgJ/IANBAXEEQCABKAIAIABqKAIAIQALIAALEQUACwcAIAAoAjQLCQAgACABNgI0CwcAIAAoAjgLCQAgACABNgI4CwcAIAArA0ALCgAgACABtzkDQAs5AQF/IAEgACgCBCICQQF1aiEBIAAoAgAhACABAn8gAkEBcQRAIAEoAgAgAGooAgAhAAsgAAsRCQALBwAgACsDSAsKACAAIAG3OQNICwcAIAAtAFQLDAAgACABQQBHOgBUCzkBAX8gASAAKAIEIgJBAXVqIQEgACgCACEAIAECfyACQQFxBEAgASgCACAAaigCACEACyAACxEAAAsHACAAKAJQCwkAIAAgATYCUAsFAEHkMwsMACAABEAgABCdBgsLBwAgABEBAAspAQF/QRAQmwYiAEIANwMAIABEGC1EVPshGUBB0JcBKAIAt6M5AwggAAusAQICfwJ8IAArAwAhByADKAIAIgQgAygCBCIFRwRAIAQhAwNAIAYgAysDACAHoRDkBaAhBiADQQhqIgMgBUcNAAsLIAAgByACIAUgBGtBA3W4oyAGoiABoCAAKwMIoqAiBjkDAAJAIAAgBkQYLURU+yEZQGZBAXMEfCAGRAAAAAAAAAAAY0EBcw0BIAZEGC1EVPshGUCgBSAGRBgtRFT7IRnAoAsiBjkDAAsgBgvWAQEEfyMAQRBrIgUkACABIAAoAgQiBkEBdWohByAAKAIAIQAgBkEBcQRAIAcoAgAgAGooAgAhAAsgBUEANgIIIAVCADcDAAJAIAQoAgQgBCgCACIGayIEBEAgBEEDdSIIQYCAgIACTw0BIAUgBBCbBiIBNgIAIAUgASAIQQN0ajYCCCAEQQFOBEAgASAGIAQQ3QYgBGohAQsgBSABNgIECyAHIAIgAyAFIAARMwAhAiAFKAIAIgQEQCAFIAQ2AgQgBBCdBgsgBUEQaiQAIAIPCyAFEKQGAAsJACAAIAE5AwALOwEBfyABIAAoAgQiA0EBdWohASAAKAIAIQAgASACAn8gA0EBcQRAIAEoAgAgAGooAgAhAAsgAAsRAwALBwAgACsDAAs5AQF/IAEgACgCBCICQQF1aiEBIAAoAgAhACABAn8gAkEBcQRAIAEoAgAgAGooAgAhAAsgAAsRCQALBQBBnDULOgEBfyAABEAgACgCDCIBBEAgACABNgIQIAEQnQYLIAAoAgAiAQRAIAAgATYCBCABEJ0GCyAAEJ0GCwspAQF/IwBBEGsiAiQAIAIgATYCDCACQQxqIAARAAAhACACQRBqJAAgAAt+AQN/QRgQmwYhASAAKAIAIQAgAUIANwIQIAFCADcCCCABQgA3AgACfyAARQRAQQAMAQsgASAAEKUDIAEoAgwhAiABKAIQCyIDIAJrQQN1IgMgAEkEQCABQQxqIAAgA2sQpgMgAQ8LIAAgA0kEQCABIAIgAEEDdGo2AhALIAELnAQCCH8DfCMAQRBrIggkACAAKAIAIQUgACgCECIJIAAoAgwiBkcEQCAJIAZrIgNBfyADQX9KGyIEQQEgBEEBSBsgBiAJayIEIAMgAyAESBtBA3ZsIgNBASADQQFLGyEEQQAhAwNAIAYgA0EDdGogBSADQQR0aisDADkDACADQQFqIgMgBEcNAAsLAkAgACgCBCIKIAVGBEAMAQsDQEEAIQcgCEEANgIIIAhCADcDAEEAIQQCQAJAAkACQCAJIAZrIgNFDQAgA0EDdSIEQYCAgIACTw0CIAggAxCbBiIHNgIAIAggBzYCBCAIIAcgBEEDdGo2AgggA0EBSARAIAchBAwBCyAHIAYgAxDdBiIGIANqIQQgAw0BCyAFKwMAIQxEAAAAAAAAAAAhCwwCCyAFKwMAIQxEAAAAAAAAAAAhCyAGIQMDQCALIAMrAwAgDKEQ5AWgIQsgA0EIaiIDIARHDQALDAELIAgQpAYACyAFIAwgBSsDCCACIAQgB2tBA3W4oyALoiABoKKgIgs5AwBEGC1EVPshGcAhDAJAIAtEGC1EVPshGUBmQQFzBEBEGC1EVPshGUAhDCALRAAAAAAAAAAAY0EBcw0BCyAFIAsgDKAiCzkDAAsgBwRAIAggBzYCBCAHEJ0GCyANIAugIQ0gACgCDCEGIAAoAhAhCSAFQRBqIgUgCkcNAAsLIAhBEGokACANIAkgBmtBA3W4ows9AQF/IAEgACgCBCIEQQF1aiEBIAAoAgAhACABIAIgAwJ/IARBAXEEQCABKAIAIABqKAIAIQALIAALERAACxIAIAAoAgAgAkEEdGogATkDAAs9AQF/IAEgACgCBCIEQQF1aiEBIAAoAgAhACABIAIgAwJ/IARBAXEEQCABKAIAIABqKAIAIQALIAALERUAC0cBAn8gASgCACICIAEoAgQiA0cEQCAAKAIAIQBBACEBA0AgACABQQR0aiACKwMAOQMAIAFBAWohASACQQhqIgIgA0cNAAsLCzsBAX8gASAAKAIEIgNBAXVqIQEgACgCACEAIAEgAgJ/IANBAXEEQCABKAIAIABqKAIAIQALIAALEQUACxAAIAAoAgAgAUEEdGorAwALOwEBfyABIAAoAgQiA0EBdWohASAAKAIAIQAgASACAn8gA0EBcQRAIAEoAgAgAGooAgAhAAsgAAsRDwALEAAgACgCBCAAKAIAa0EEdQs5AQF/IAEgACgCBCICQQF1aiEBIAAoAgAhACABAn8gAkEBcQRAIAEoAgAgAGooAgAhAAsgAAsRAAALBQBBgDcLBAAgAAsEACAACzoBAX8gAARAIAAoAgwiAQRAIAAgATYCECABEJ0GCyAAKAIAIgEEQCAAIAE2AgQgARCdBgsgABCdBgsLKQEBfyMAQRBrIgIkACACIAE2AgwgAkEMaiAAEQAAIQAgAkEQaiQAIAALhgEBA39BHBCbBiEBIAAoAgAhACABQgA3AhAgAUIANwIIIAFCADcCAAJAAn8gAEUEQEEADAELIAEgABClAyABKAIMIQIgASgCEAsiAyACa0EDdSIDIABJBEAgAUEMaiAAIANrEKYDDAELIAAgA08NACABIAIgAEEDdGo2AhALIAFBADoAGCABC9IEAgh/A3wjAEEQayIHJAACQCAALQAYIglFDQAgACgCECIEIAAoAgwiBUYNACAEIAVrIgNBfyADQX9KGyIGQQEgBkEBSBsgBSAEayIEIAMgAyAESBtBA3ZsIgNBASADQQFLGyEEIAAoAgAhBkEAIQMDQCAFIANBA3RqIAYgA0EEdGorAwA5AwAgA0EBaiIDIARHDQALCwJAIAAoAgAiBiAAKAIEIgpGBEAMAQsDQEEAIQQgB0EANgIIIAdCADcDAEEAIQUCQAJAAkACQCAAKAIQIAAoAgwiCGsiA0UNACADQQN1IgVBgICAgAJPDQIgByADEJsGIgQ2AgAgByAENgIEIAcgBCAFQQN0ajYCCCADQQFIBEAgBCEFDAELIAQgCCADEN0GIgggA2ohBSADDQELIAYrAwAhDEQAAAAAAAAAACELDAILIAYrAwAhDEQAAAAAAAAAACELIAghAwNAIAsgAysDACAMoRDkBaAhCyADQQhqIgMgBUcNAAsMAQsgBxCkBgALIAYgDCAGKwMIIAJEAAAAAAAAAAAgCRsgBSAEa0EDdbijIAuiIAGgoqAiCzkDAEQYLURU+yEZwCEMAkAgC0QYLURU+yEZQGZBAXMEQEQYLURU+yEZQCEMIAtEAAAAAAAAAABjQQFzDQELIAYgCyAMoCILOQMACyAEBEAgByAENgIEIAQQnQYLIA0gC6AhDSAGQRBqIgYgCkYNASAALQAYIQkMAAsACyAAQQA6ABggACgCECEDIAAoAgwhBSAHQRBqJAAgDSADIAVrQQN1uKMLPQEBfyABIAAoAgQiBEEBdWohASAAKAIAIQAgASACIAMCfyAEQQFxBEAgASgCACAAaigCACEACyAACxEQAAsZACAAKAIAIAJBBHRqIAE5AwAgAEEBOgAYCz0BAX8gASAAKAIEIgRBAXVqIQEgACgCACEAIAEgAiADAn8gBEEBcQRAIAEoAgAgAGooAgAhAAsgAAsRFQALTgEDfyABKAIAIgIgASgCBCIDRwRAIAAoAgAhBEEAIQEDQCAEIAFBBHRqIAIrAwA5AwAgAUEBaiEBIAJBCGoiAiADRw0ACwsgAEEBOgAYCzsBAX8gASAAKAIEIgNBAXVqIQEgACgCACEAIAEgAgJ/IANBAXEEQCABKAIAIABqKAIAIQALIAALEQUACxAAIAAoAgAgAUEEdGorAwALOwEBfyABIAAoAgQiA0EBdWohASAAKAIAIQAgASACAn8gA0EBcQRAIAEoAgAgAGooAgAhAAsgAAsRDwALEAAgACgCBCAAKAIAa0EEdQs5AQF/IAEgACgCBCICQQF1aiEBIAAoAgAhACABAn8gAkEBcQRAIAEoAgAgAGooAgAhAAsgAAsRAAALBQBBuBQLJAEBfyAABEAgACgCACIBBEAgACABNgIEIAEQnQYLIAAQnQYLCwcAIAARAQALGQEBf0EMEJsGIgBBADYCCCAAQgA3AgAgAAvrAQEFfyAAKAIEIgIgACgCCEcEQCACIAEoAgA2AgAgACACQQRqNgIEDwsCQCACIAAoAgAiBWsiBkECdSIEQQFqIgJBgICAgARJBEACf0EAIAIgBkEBdSIDIAIgA0sbQf////8DIARB/////wFJGyIDRQ0AGiADQYCAgIAETw0CIANBAnQQmwYLIgIgBEECdGoiBCABKAIANgIAIAIgA0ECdGohASAEQQRqIQMgBkEBTgRAIAIgBSAGEN0GGgsgACABNgIIIAAgAzYCBCAAIAI2AgAgBQRAIAUQnQYLDwsgABCkBgALQeoREJ0DAAtSAQJ/IwBBEGsiAyQAIAEgACgCBCIEQQF1aiEBIAAoAgAhACAEQQFxBEAgASgCACAAaigCACEACyADIAI2AgwgASADQQxqIAARBQAgA0EQaiQACz4BAn8gASAAKAIEIAAoAgAiBGtBAnUiA0sEQCAAIAEgA2sgAhChAw8LIAEgA0kEQCAAIAQgAUECdGo2AgQLC1QBAn8jAEEQayIEJAAgASAAKAIEIgVBAXVqIQEgACgCACEAIAVBAXEEQCABKAIAIABqKAIAIQALIAQgAzYCDCABIAIgBEEMaiAAEQQAIARBEGokAAsQACAAKAIEIAAoAgBrQQJ1CzkBAX8gASAAKAIEIgJBAXVqIQEgACgCACEAIAECfyACQQFxBEAgASgCACAAaigCACEACyAACxEAAAtSAQJ/IwBBEGsiAyQAQQEhBCACIAEoAgQgASgCACIBa0ECdUkEQCADIAEgAkECdGooAgA2AghBxPQAIANBCGoQByEECyAAIAQ2AgAgA0EQaiQACzcBAX8jAEEQayIDJAAgA0EIaiABIAIgACgCABEEACADKAIIEA8gAygCCCIBEAwgA0EQaiQAIAELFwAgACgCACABQQJ0aiACKAIANgIAQQELNAEBfyMAQRBrIgQkACAAKAIAIQAgBCADNgIMIAEgAiAEQQxqIAARBwAhASAEQRBqJAAgAQsFAEHAFwskAQF/IAAEQCAAKAIAIgEEQCAAIAE2AgQgARCdBgsgABCdBgsLBwAgABEBAAsZAQF/QQwQmwYiAEEANgIIIABCADcCACAAC+sBAQV/IAAoAgQiAiAAKAIIRwRAIAIgASsDADkDACAAIAJBCGo2AgQPCwJAIAIgACgCACIFayIGQQN1IgRBAWoiAkGAgICAAkkEQAJ/QQAgAiAGQQJ1IgMgAiADSxtB/////wEgBEH/////AEkbIgNFDQAaIANBgICAgAJPDQIgA0EDdBCbBgsiAiAEQQN0aiIEIAErAwA5AwAgAiADQQN0aiEBIARBCGohAyAGQQFOBEAgAiAFIAYQ3QYaCyAAIAE2AgggACADNgIEIAAgAjYCACAFBEAgBRCdBgsPCyAAEKQGAAtB6hEQnQMAC1IBAn8jAEEQayIDJAAgASAAKAIEIgRBAXVqIQEgACgCACEAIARBAXEEQCABKAIAIABqKAIAIQALIAMgAjkDCCABIANBCGogABEFACADQRBqJAALPgECfyABIAAoAgQgACgCACIEa0EDdSIDSwRAIAAgASADayACEJ8DDwsgASADSQRAIAAgBCABQQN0ajYCBAsLVAECfyMAQRBrIgQkACABIAAoAgQiBUEBdWohASAAKAIAIQAgBUEBcQRAIAEoAgAgAGooAgAhAAsgBCADOQMIIAEgAiAEQQhqIAARBAAgBEEQaiQACxAAIAAoAgQgACgCAGtBA3ULOQEBfyABIAAoAgQiAkEBdWohASAAKAIAIQAgAQJ/IAJBAXEEQCABKAIAIABqKAIAIQALIAALEQAAC1IBAn8jAEEQayIDJABBASEEIAIgASgCBCABKAIAIgFrQQN1SQRAIAMgASACQQN0aisDADkDCEGA9QAgA0EIahAHIQQLIAAgBDYCACADQRBqJAALNwEBfyMAQRBrIgMkACADQQhqIAEgAiAAKAIAEQQAIAMoAggQDyADKAIIIgEQDCADQRBqJAAgAQsXACAAKAIAIAFBA3RqIAIrAwA5AwBBAQs0AQF/IwBBEGsiBCQAIAAoAgAhACAEIAM5AwggASACIARBCGogABEHACEBIARBEGokACABCwUAQZAaCyQBAX8gAARAIAAoAgAiAQRAIAAgATYCBCABEJ0GCyAAEJ0GCwsHACAAEQEACxkBAX9BDBCbBiIAQQA2AgggAEIANwIAIAALxAEBBX8gACgCBCICIAAoAghHBEAgAiABLQAAOgAAIAAgAkEBajYCBA8LIAIgACgCACIFayICQQFqIgNBf0oEQAJ/QQAgAyACQQF0IgQgAyAESxtB/////wcgAkH/////A0kbIgRFDQAaIAQQmwYLIgMgAmoiBiABLQAAOgAAIAMgBGohASAGQQFqIQQgAkEBTgRAIAMgBSACEN0GGgsgACABNgIIIAAgBDYCBCAAIAM2AgAgBQRAIAUQnQYLDwsgABCkBgALUgECfyMAQRBrIgMkACABIAAoAgQiBEEBdWohASAAKAIAIQAgBEEBcQRAIAEoAgAgAGooAgAhAAsgAyACOgAPIAEgA0EPaiAAEQUAIANBEGokAAs4AQJ/IAEgACgCBCAAKAIAIgRrIgNLBEAgACABIANrIAIQogMPCyABIANJBEAgACABIARqNgIECwtUAQJ/IwBBEGsiBCQAIAEgACgCBCIFQQF1aiEBIAAoAgAhACAFQQFxBEAgASgCACAAaigCACEACyAEIAM6AA8gASACIARBD2ogABEEACAEQRBqJAALDQAgACgCBCAAKAIAaws5AQF/IAEgACgCBCICQQF1aiEBIAAoAgAhACABAn8gAkEBcQRAIAEoAgAgAGooAgAhAAsgAAsRAAALTAECfyMAQRBrIgMkAEEBIQQgAiABKAIEIAEoAgAiAWtJBEAgAyABIAJqLAAANgIIQYj0ACADQQhqEAchBAsgACAENgIAIANBEGokAAs3AQF/IwBBEGsiAyQAIANBCGogASACIAAoAgARBAAgAygCCBAPIAMoAggiARAMIANBEGokACABCxQAIAAoAgAgAWogAi0AADoAAEEBCzQBAX8jAEEQayIEJAAgACgCACEAIAQgAzoADyABIAIgBEEPaiAAEQcAIQEgBEEQaiQAIAELBQBB2BwLJAEBfyAABEAgACgCACIBBEAgACABNgIEIAEQnQYLIAAQnQYLCwcAIAARAQALGQEBf0EMEJsGIgBBADYCCCAAQgA3AgAgAAvEAQEFfyAAKAIE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A8DMASAAQdDMAWpCgICAgICAsLHAADcDACAAQcjMAWpCgICAgICAwKzAADcDACAAC44CACAAEMcDGiAAQdjMAWpCgICAgICA48jAADcDACAAQdDMAWpCgICAgICA5sfAADcDACAAQcjMAWpCgICAgICAisbAADcDACAAQoCAgICAgJTEwAA3A8DMASAAQcDQAWpBkMIAKQMANwMAIABByNABakGYwgApAwA3AwAgAEHQ0AFqQaDCACkDADcDACAAQdjQAWpBqMIAKQMANwMAIABB0M4BakKAgICAgICAlMAANwMAIABByM4BakKAgICAgIDAosAANwMAIABCgICAgICA0K/AADcDwM4BIABBwNIBakGwwgApAwA3AwAgAEHI0gFqQbjCACkDADcDACAAQdDSAWpBwMIAKQMANwMAIAAL3QgCCH8CfCAAQgA3A9jYASAAQdTIAGoiAgJ/IAArA8DMASIKmUQAAAAAAADgQWMEQCAKqgwBC0GAgICAeAsiAzYCACAAQdjIAGoiBSAAKALASCAAQdDIAGoiBigCACICQQN0aiIEKwMARDMzMzMzM+s/oiABoCIKOQMAIAQgCjkDACAGQQAgAkEBaiACIANBAWtGGzYCACAAIAUrAwAgACsD2NgBoDkD2NgBIABB9MoAaiICAn8gAEHIzAFqKwMAIgqZRAAAAAAAAOBBYwRAIAqqDAELQYCAgIB4CyIDNgIAIABB+MoAaiIFIABB4MoAaigCACAAQfDKAGoiBigCACICQQN0aiIEKwMARDMzMzMzM+s/oiABoCIKOQMAIAQgCjkDACAGQQAgAkEBaiACIANBAWtGGzYCACAAIAUrAwAgACsD2NgBoDkD2NgBIABBlM0AaiICAn8gAEHQzAFqKwMAIgqZRAAAAAAAAOBBYwRAIAqqDAELQYCAgIB4CyIDNgIAIABBmM0AaiIFIABBgM0AaigCACAAQZDNAGoiBigCACICQQN0aiIEKwMARDMzMzMzM+s/oiABoCIKOQMAIAQgCjkDACAGQQAgAkEBaiACIANBAWtGGzYCACAAIAUrAwAgACsD2NgBoDkD2NgBIABBtM8AaiICAn8gAEHYzAFqKwMAIgqZRAAAAAAAAOBBYwRAIAqqDAELQYCAgIB4CyIDNgIAIABBuM8AaiIFIABBoM8AaigCACAAQbDPAGoiBigCACICQQN0aiIEKwMARDMzMzMzM+s/oiABoCIBOQMAIAQgATkDACAGQQAgAkEBaiACIANBAWtGGzYCACAAIAUrAwAgACsD2NgBoCIBOQPY2AEgAEHUAGohAiAAAn8gACsDwM4BIgqZRAAAAAAAAOBBYwRAIAqqDAELQYCAgIB4CyIDNgJUIAAiCEHYAGoiBSAAKAJAIABB0ABqIgYoAgAiAkEDdGoiBCsDACIKIAArA2giCyABIAogC6KgIgGioTkDACAEIAE5AwAgAEEAIAJBAWogAiADQQFrRhs2AlAgAEH0AmohAiAAAn8gAEHIzgFqKwMAIgGZRAAAAAAAAOBBYwRAIAGqDAELQYCAgIB4CyIDNgL0AiAAIglB+AJqIgYgACgC4AIgAEHwAmoiBCgCACICQQN0aiIHKwMAIgEgACsDiAMiCiAIKwNYIAEgCqKgIgGioTkDACAHIAE5AwAgAEEAIAJBAWogAiADQQFrRhs2AvACIABBlAVqIQIgAAJ/IABB0M4BaisDACIBmUQAAAAAAADgQWMEQCABqgwBC0GAgICAeAsiAzYClAUgAEGYBWoiBSAAKAKABSAAQZAFaiIEKAIAIgJBA3RqIgcrAwAiASAAKwOoBSIKIAkrA/gCIAEgCqKgIgGioTkDACAHIAE5AwAgAEEAIAJBAWogAiADQQFrRhs2ApAFIAAgACsDmAUiATkDwNgBIAEL/gQAIAAQxwMaIABB+NQBakKas+bMmbPm5D83AwAgAEHw1AFqQpqz5syZs+bkPzcDACAAQejUAWpCmrPmzJmz5uQ/NwMAIABB4NQBakKas+bMmbPm5D83AwAgAEHY1AFqQpqz5syZs+bkPzcDACAAQdDUAWpCmrPmzJmz5uQ/NwMAIABByNQBakKas+bMmbPm5D83AwAgAEKas+bMmbPm5D83A8DUASAAQfjQAWpC4fXR8PqouPU/NwMAIABB8NABakLh9dHw+qi49T83AwAgAEHo0AFqQuH10fD6qLj1PzcDACAAQeDQAWpC4fXR8PqouPU/NwMAIABB2NABakLh9dHw+qi49T83AwAgAEHQ0AFqQuH10fD6qLj1PzcDACAAQcjQAWpC4fXR8PqouPU/NwMAIABC4fXR8PqouPU/NwPA0AEgAEH4zAFqQoCAgICAgNzIwAA3AwAgAEHwzAFqQoCAgICAgKTJwAA3AwAgAEHozAFqQoCAgICAgMzKwAA3AwAgAEHgzAFqQoCAgICAgP3JwAA3AwAgAEHYzAFqQoCAgICAgI7LwAA3AwAgAEHQzAFqQoCAgICAgNPLwAA3AwAgAEHIzAFqQoCAgICAgNHMwAA3AwAgAEKAgICAgICVzMAANwPAzAEgAEHYzgFqQoCAgICAgNS6wAA3AwAgAEHQzgFqQoCAgICAgOS9wAA3AwAgAEHIzgFqQoCAgICAgNjAwAA3AwAgAEKAgICAgICItsAANwPAzgEgAEHA0gFqQdDCACkDADcDACAAQcjSAWpB2MIAKQMANwMAIABB0NIBakHgwgApAwA3AwAgAEHY0gFqQejCACkDADcDACAAC5QKAgh/AXwgAEIANwPY2AEgAEG41gFqIANEAAAAAAAA8D+kRAAAAAAAAAAApSIDOQMAIABBsNYBaiADOQMAIABBqNYBaiADOQMAIABBoNYBaiADOQMAIABBmNYBaiADOQMAIABBkNYBaiADOQMAIABBiNYBaiADOQMAIABBgNYBaiADOQMAIABB+NUBaiADOQMAIABB8NUBaiADOQMAIABB6NUBaiADOQMAIABB4NUBaiADOQMAIABB2NUBaiADOQMAIABB0NUBaiADOQMAIABByNUBaiADOQMAIABBwNUBaiADOQMAIABBuNUBaiADOQMAIABBsNUBaiADOQMAIABBqNUBaiADOQMAIABBoNUBaiADOQMAIABBmNUBaiADOQMAIABBkNUBaiADOQMAIABBiNUBaiADOQMAIABBgNUBaiADOQMAIABB+NQBaiADOQMAIABB8NQBaiADOQMAIABB6NQBaiADOQMAIABB4NQBaiADOQMAIABB2NQBaiADOQMAIABB0NQBaiADOQMAIABByNQBaiADOQMAIAAgAzkDwNQBIABBuNIBaiACRJqZmZmZmbk/okThehSuR+HqP6BEAAAAAAAA8D+kRAAAAAAAAAAApSICOQMAIABBsNIBaiACOQMAIABBqNIBaiACOQMAIABBoNIBaiACOQMAIABBmNIBaiACOQMAIABBkNIBaiACOQMAIABBiNIBaiACOQMAIABBgNIBaiACOQMAIABB+NEBaiACOQMAIABB8NEBaiACOQMAIABB6NEBaiACOQMAIABB4NEBaiACOQMAIABB2NEBaiACOQMAIABB0NEBaiACOQMAIABByNEBaiACOQMAIABBwNEBaiACOQMAIABBuNEBaiACOQMAIABBsNEBaiACOQMAIABBqNEBaiACOQMAIABBoNEBaiACOQMAIABBmNEBaiACOQMAIABBkNEBaiACOQMAIABBiNEBaiACOQMAIABBgNEBaiACOQMAIABB+NABaiACOQMAIABB8NABaiACOQMAIABB6NABaiACOQMAIABB4NABaiACOQMAIABB2NABaiACOQMAIABB0NABaiACOQMAIABByNABaiACOQMAIAAgAjkDwNABA3wgACAEQQN0aiIGQcDQAWorAwAhAiAAIARBoAJsaiIFQdTIAGoiBwJ/IAZBwMwBaisDACIMmUQAAAAAAADgQWMEQCAMqgwBC0GAgICAeAsiBjYCACAFQdjIAGoiCSACIAVB8MgAaiAFQcDIAGoiCCgCACAFQdDIAGoiBigCAEEDdGorAwBEAAAAAAAA8D8gA6EQsQOiIAGgIgM5AwAgCCgCACAGKAIAIghBA3RqIAM5AwBBACEFIAZBACAIQQFqIAggBygCAEEBa0YbNgIAIAAgCSsDACAAKwPY2AGgIgM5A9jYASAEQQFqIgRBCEYEfANAIAAgBUGgAmxqIgQiCkHUAGohByAKAn8gACAFQQN0akHAzgFqKwMAIgKZRAAAAAAAAOBBYwRAIAKqDAELQYCAgIB4CyIGNgJUIARB2ABqIgggBEFAaygCACAEQdAAaiIJKAIAIgdBA3RqIgsrAwAiAiAEKwNoIgwgAyACIAyioCIDoqE5AwAgCyADOQMAIARBACAHQQFqIAcgBkEBa0YbNgJQIAQrA1ghAyAFQQFqIgVBH0cNAAsgACADOQPA2AEgAwUgACAEQQN0akHA1AFqKwMAIQMMAQsLCz8AIAAQqQMaIABBATYCUCAAQgA3AzAgAEEANgI4IABCgICAgICAgK/AADcDSCAAQoCAgICAgICAwAA3A0AgAAshACAAIAE5A0ggACABRAAAAAAAAE5AoyAAKAJQt6I5A0ALXAIBfwF8IABBADoAVCAAAn8gACAAKwNAEKsDnCICmUQAAAAAAADgQWMEQCACqgwBC0GAgICAeAsiATYCMCABIAAoAjRHBEAgAEEBOgBUIAAgACgCOEEBajYCOAsLIQAgACABNgJQIAAgACsDSEQAAAAAAABOQKMg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ACANOQPAhxoLIABByIcaaiAAKwOwhxogDaIgAEHohxpqKwMAojkDACAAQciLGmoiAiAAKwPAixogAisDAKIiDjkDACAAQYiNGmoiAiAOIAArA4CNGiACKwMAIA6hoqAiDTkDACAAQaiNGmoiAiAORAAAAAAAAAAAIAArA9isGiIPRAAAAAAAAAAAZBsiECAAKwOgjRogAisDACAQoaKgIhA5AwAgACsDgKwaIREgACsDoKwaIAArA+isGiANoiAAKwOYrBqhoiAPIAArA/CsGiAQoqKgENsGIQ0gAEH4hxpqIQYgESANoiINIABB6IgaaisDAGIEQCAARAAAAAAAAGlAIA1EAAAAAACI00CkIA1EAAAAAAAAaUBjGzkD6IgaIAYQ+gMLIABBqIsaagJ8IABB6IoaaisDACINIABB0IoaaisDAGVBAXNFBEAgACANIABB+IoaaisDAKA5A+iKGiAAQaiLGmorAwAiDSAAQZCLGmorAwAgAEGIixpqKwMAIABB+IkaaisDAKIgDaGioAwBCyANIABB2IoaaisDAGVBAXNFBEAgACANIABB+IoaaisDAKA5A+iKGiAAQaiLGmorAwAiDSAAQZiLGmorAwAgAEGAihpqKwMAIA2hoqAMAQsgAEGoixpqKwMAIQ8gAEG5ixpqLQAABEAgDyAAQZiLGmorAwAgAEGAihpqKwMAIA+hoqAMAQsgACANIABB+IoaaisDAKA5A+iKGiAPIABBoIsaaisDACAAQYiKGmorAwAgD6GioAsiDTkDACAAQbmLGmotAAAEQCANIA4gACsD2KwaRAAAAAAAABBAokTNzMzMzMzcP6CioCENCyAAQcCMGmoiAisDACEOIAIgAEG4jBpqIgErAwAiDzkDACAAQdCMGmoiAisDACEQIAIgAEHIjBpqIgQrAwAiETkDACABIA05AwAgBCANIAArA5CMGqIgDyAAQZiMGmorAwCioCAOIABBoIwaaisDAKKgIBEgAEGojBpqKwMAoqAgECAAQbCMGmorAwCioEQAAAAAAAAQOKAiGjkDACAAQaiQGmohByAAQaCQGmohCUEBIQIDQEQAAAAAAAAAACENAkAgACgC8IcaIgFFDQAgACgC9IcaIgNFDQAgACkDyIcaIgxCNIinQf8PcSIEQf0HayEFIAArA7iHGiINIAArA7CHGiIOZkEB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IABCADcCnAEgAEEANgCvASAAQgA3AqgBIABBADYAuwEgAEIANwK0ASAAQoCAgICAgIDwPzcDyAEgAEEQNgLAASAAC5ACACAAEP0DGiAAQdABahD9AxogAEGgA2oQ/QMaIABB8ARqEP0DGiAAQcAGahD9AxogAEGQCGoQ/QMaIABB4AlqEP0DGiAAQbALahD9AxogAEGADWoQ/QMaIABB0A5qEP0DGiAAQaAQahD9AxogAEHwEWoQ/QMaIABBwBNqEP0DGiAAQZAVahD9AxogAEHgFmoQ/QMaIABBsBhqEP0DGiAAQoCAgICAgOCwwAA3A5AaIABCgICAgICQ4vLAADcDiBogAEIANwOoGiAAQQA2AqAaIABCADcDmBogAEEANgKAGiAAQbAaakKBgoSIkKDAgAE3AAAgAEEAOwGEGiAAQbUaakKBgoSIkKDAgAE3AAAgAAsdACABRAAAAAAAAAAAZEEBc0UEQCAAIAE5A4gaCwsWAQF/IAAtAIUaIQEgAEEAOgCFGiABCx4AIABCADcDqBogAEL/////DzcDmBogAEEBOgCEGgsKACAAQQA6AIQaC9UCACAAQgA3AyggAEKAgICAgICA+D83AwggAEIANwMAIABCgICAgICQ4vLAADcDwAEgAEKAgICAgICA+D83A4ABIABCADcDeCAAQgA3AxggAEKAgICAgICA8D83AxAgAEKAgICAgICA+D83A5gBIABCgICAgICAgPg/NwOQASAAQs6LmJXvic7LPzcDiAEgAEKAgICAgICA+D83A1ggAEKAgICAgICA+D83A1AgAEKAgICAgICA+D83A0ggAEKAgICAgICA+D83A0AgAEEBOwHIASAAQgA3A7gBIABCgICAgICAgPg/NwOgASAAQgA3AyAgAEKspfCLnIX+5D83A6gBIABCmrPmzJmz5tw/NwMwIABCgb3VpMXzq/Y/NwOwASAAQvuouL2U3J7CPzcDOCAAQqm4vZTcnorePzcDcCAAQpqz5syZs+bcPzcDaCAAQgA3A2AgAAuaAQECfEQAAAAAAADwPyEDIAFEAAAAAAAAAABkQQFzRQRARAAAAAAAAPA/RAAAAAAAAPC/IAArA5ABIAArA8ABRPyp8dJNYlA/oiABoqIgACsDgAGjoxDoBaEhAyABIQILIAAgAzkDoAEgACACOQMgIAAgAiAAKwMo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ASsDOCIToCIUoTkDKCABIAErAwAiFSABKwMQIhCgIhcgASsDICIYIAErAzAiFqAiGqE5AyAgASAOIBSgOQMIIAEgFyAaoDkDACABIBIgD6EiEiAYIBahIg+hOQM4IAEgFSAQoSIOIBEgE6EiEaA5AzAgASASIA+gOQMYIAEgDiARoTkDECACKwMQIRIgASABKwNAIhQgASsDUCIVoCIQIAErA2AiFyABKwNwIhigIhagOQNAIAErA2ghDyABKwN4IQ4gASsDSCERIAErA1ghEyABIBAgFqE5A2ggASAPIA6gIhAgESAToCIWoTkDYCABIBYgEKA5A0ggASASIBcgGKEiECARIBOhIhGhIhMgFCAVoSIUIA8gDqEiD6AiDqCiOQN4IAEgEiATIA6hojkDcCABIBIgESAQoCIOIBQgD6EiD6CiOQNYIAEgEiAPIA6hojkDUCAAQRFOBEBBECEHA0AgAiADQQJqIgtBBHQiBGorAwAhDiACIARBCHJqKwMAIREgAiALQQN0aisDACESIANBA3QgAmorAxghDyABIAdBA3QiA0EYcmoiCCsDACETIAEgA0EIcmoiCSsDACEUIAEgA0E4cmoiCisDACEVIAEgA0EocmoiBSsDACEQIAEgA2oiBiAGKwMAIhcgASADQRByaiIGKwMAIhigIhYgASADQSByaiIMKwMAIhogASADQTByaiINKwMAIhugIhmgOQMAIAkgFCAToCIcIBAgFaAiHaA5AwAgDCASIBYgGaEiFqIgDyAcIB2hIhmioTkDACAFIA8gFqIgEiAZoqA5AwAgBiAOIBcgGKEiFyAQIBWhIhWhIhCiIBEgFCAToSITIBogG6EiFKAiGKKhOQMAIAggDiAYoiARIBCioDkDACANIA4gESAPIA+gIhCioSIYIBcgFaAiFaIgECAOoiARoSIOIBMgFKEiEaKhOQMAIAogGCARoiAOIBWioDkDACACIARBEHJqKwMAIQ4gAiAEQRhyaisDACERIAEgA0HYAHJqIgQrAwAhEyABIANByAByaiIIKwMAIRQgASADQfgAcmoiCSsDACEVIAEgA0HoAHJqIgorAwAhECABIANBwAByaiIFIAUrAwAiFyABIANB0AByaiIFKwMAIhigIhYgASADQeAAcmoiBisDACIaIAEgA0HwAHJqIgMrAwAiG6AiGaA5AwAg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IAI2AhALIAIgBDYCGCACIAI2AgwgAiACNgIIDAELIAQoAggiACACNgIMIAQgAjYCCCACQQA2AhggAiAENgIMIAIgADYCCAtB8KMCQfCjAigCAEEBayICNgIAIAINAEGYpwIhAgNAIAIoAgAiAEEIaiECIAANAAtB8KMCQX82AgALDwsgAiAAQQFyNgIEIAAgAmogADYCAAtUAQJ/QdyiASgCACIBIABBA2pBfHEiAmohAAJAIAJBAU5BACAAIAFNGw0APwBBEHQgAEkEQCAAEBxFDQELQdyiASAANgIAIAEPCxCEBkEwNgIAQX8LiwQCAn8EfgJAAkAgAb0iBkIBhiIEUA0AIAZC////////////AINCgICAgICAgPj/AFYNACAAvSIHQjSIp0H/D3EiAkH/D0cNAQsgACABoiIBIAGjDwsgBCAHQgGGIgVUBEAgBkI0iKdB/w9xIQMCfiACRQRAQQAhAiAHQgyGIgRCAFkEQANAIAJBAWshAiAEQgGGIgRCf1UNAAsLIAdBASACa62GDAELIAdC/////////weDQoCAgICAgIAIhAshBAJ+IANFBEBBACEDIAZCDIYiBUIAWQRAA0AgA0EBayEDIAVCAYYiBUJ/VQ0ACwsgBkEBIANrrYYMAQsgBkL/////////B4NCgICAgICAgAiECyEGIAIgA0oEQANAAkAgBCAGfSIFQgBTDQAgBSIEQgBSDQAgAEQAAAAAAAAAAKIPCyAEQgGGIQQgAkEBayICIANKDQALIAMhAgsCQCAEIAZ9IgVCAFMNACAFIgRCAFINACAARAAAAAAAAAAAog8LAkAgBEL/////////B1YEQCAEIQUMAQsDQCACQQFrIQIgBEKAgICAgICABFQhAyAEQgGGIgUhBCADDQALCyAHQoCAgICAgICAgH+DIgQgAkEBTgR+IAVCgICAgICAgAh9IAKtQjSGhAUgBUEBIAJrrYgLIgWEvw8LIABEAAAAAAAAAACiIAAgBCAFURsL5gMDA38BfgZ8AkACQAJAAkAgAL0iBEIAWQRAIARCIIinIgFB//8/Sw0BCyAEQv///////////wCDUARARAAAAAAAAPC/IAAgAKKjDwsgBEJ/VQ0BIAAgAKFEAAAAAAAAAACjDwsgAUH//7//B0sNAkGAgMD/AyECQYF4IQMgAUGAgMD/A0cEQCABIQIMAgsgBKcNAUQAAAAAAAAAAA8LIABEAAAAAAAAUEOivSIEQiCIpyECQct3IQMLIAMgAkHiviVqIgFBFHZqtyIIRABgn1ATRNM/oiIFIARC/////w+DIAFB//8/cUGewZr/A2qtQiCGhL9EAAAAAAAA8L+gIgAgACAARAAAAAAAAOA/oqIiBqG9QoCAgIBwg78iB0QAACAVe8vbP6IiCaAiCiAJIAUgCqGgIAAgB6EgBqEgACAARAAAAAAAAABAoKMiACAGIAAgAKIiBSAFoiIAIAAgAESfxnjQCZrDP6JEr3iOHcVxzD+gokQE+peZmZnZP6CiIAUgACAAIABERFI+3xLxwj+iRN4Dy5ZkRsc/oKJEWZMilCRJ0j+gokSTVVVVVVXlP6CioKCioCIARAAAIBV7y9s/oiAIRDYr8RHz/lk9oiAAIAegRNWtmso4lLs9oqCgoKAhAAsgAAu7AgICfwN9AkACQCAAvCIBQYCAgARPQQAgAUF/ShtFBEAgAUH/////B3FFBEBDAACAvyAAIACUlQ8LIAFBf0wEQCAAIACTQwAAAACVDwsgAEMAAABMlLwhAUHofiECDAELIAFB////+wdLDQFBgX8hAkMAAAAAIQAgAUGAgID8A0YNAQsgAiABQY32qwJqIgFBF3ZqsiIFQ4Agmj6UIAFB////A3FB84nU+QNqvkMAAIC/kiIAIAAgAEMAAAA/lJQiA5O8QYBgcb4iBEMAYN4+lCAAIASTIAOTIAAgAEMAAABAkpUiACADIAAgAJQiACAAIACUIgBD7umRPpRDqqoqP5KUIAAgAEMmnng+lEMTzsw+kpSSkpSSIgBDAGDePpQgBUPbJ1Q1lCAAIASSQ9nqBLiUkpKSkiEACyAAC7oCAwJ/AX4CfAJAAnwgAL0iA0IgiKdB/////wdxIgFBgOC/hARPBEACQCADQgBTDQAgAUGAgMCEBEkNACAARAAAAAAAAOB/og8LIAFBgIDA/wdPBEBEAAAAAAAA8L8gAKMPCyAARAAAAAAAzJDAZUEBcw0CRAAAAAAAAAAAIANCf1cNARoMAgsgAUH//7/kA0sNASAARAAAAAAAAPA/oAsiBA8LIABEAAAAAAAAuEKgIgS9p0GAAWoiAUEEdEHwH3EiAkHQ9wBqKwMAIgUgBSAAIAREAAAAAAAAuMKgoSACQQhyQdD3AGorAwChIgCiIAAgACAAIABEdFyHA4DYVT+iRAAE94irsoM/oKJEpqAE1whrrD+gokR1xYL/vb/OP6CiRO85+v5CLuY/oKKgIAFBgH5xQYACbRDcBguoAQACQCABQYAITgRAIABEAAAAAAAA4H+iIQAgAUH/D0gEQCABQf8HayEBDAILIABEAAAAAAAA4H+iIQAgAUH9FyABQf0XSBtB/g9rIQEMAQsgAUGBeEoNACAARAAAAAAAABAAoiEAIAFBg3BKBEAgAUH+B2ohAQwBCyAARAAAAAAAABAAoiEAIAFBhmggAUGGaEobQfwPaiEBCyAAIAFB/wdqrUI0hr+iC4IEAQN/IAJBgARPBEAgACABIAIQHRogAA8LIAAgAmohAwJAIAAgAXNBA3FFBEACQCACQQFIBEAgACECDAELIABBA3FFBEAgACECDAELIAAhAgNAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANPDQEgAkEDcQ0ACwsCQCADQXxxIgRBwABJDQAgAiAEQUBqIgVLDQADQCACIAEoAgA2AgAgAiABKAIENgIEIAIgASgCCDYCCCACIAEoAgw2AgwgAiABKAIQNgIQIAIgASgCFDYCFCACIAEoAhg2AhggAiABKAIcNgIcIAIgASgCIDYCICACIAEoAiQ2AiQgAiABKAIoNgIoIAIgASgCLDYCLCACIAEoAjA2AjAgAiABKAI0NgI0IAIgASgCODYCOCACIAEoAjw2AjwgAUFAayEBIAJBQGsiAiAFTQ0ACwsgAiAETw0BA0AgAiABKAIANgIAIAFBBGohASACQQRqIgIgBEkNAAsMAQsgA0EESQRAIAAhAgwBCyAAIANBBGsiBEsEQCAAIQIMAQsgACECA0AgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAFBBGohASACQQRqIgIgBE0NAAsLIAIgA0kEQANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANHDQALCyAAC/MCAgN/AX4CQCACRQ0AIAAgAmoiA0EBayABOgAAIAAgAToAACACQQNJDQAgA0ECayABOgAAIAAgAToAASADQQNrIAE6AAAgACABOgACIAJBB0kNACADQQRrIAE6AAAgACABOgADIAJBCUkNACAAQQAgAGtBA3EiBGoiAyABQf8BcUGBgoQIbCIBNgIAIAMgAiAEa0F8cSIEaiICQQRrIAE2AgAgBEEJSQ0AIAMgATYCCCADIAE2AgQgAkEIayABNgIAIAJBDGsgATYCACAEQRlJDQAgAyABNgIYIAMgATYCFCADIAE2AhAgAyABNgIMIAJBEGsgATYCACACQRRrIAE2AgAgAkEYayABNgIAIAJBHGsgATYCACAEIANBBHFBGHIiBWsiAkEgSQ0AIAGtIgZCIIYgBoQhBiADIAVqIQEDQCABIAY3AxggASAGNwMQIAEgBjcDCCABIAY3AwAgAUEgaiEBIAJBIGsiAkEfSw0ACwsgAAvqAgEBfwJAIAAgAUYNACABIABrIAJrQQAgAkEBdGtNBEAgACABIAIQ3QYPCyAAIAFzQQNxIQMCQAJAIAAgAUkEQCADBEAgACEDDAMLIABBA3FFBEAgACEDDAILIAAhAwNAIAJFDQQgAyABLQAAOgAAIAFBAWohASACQQFrIQIgA0EBaiIDQQNxDQALDAELAkAgAw0AIAAgAmpBA3EEQANAIAJFDQUgACACQQFrIgJqIgMgASACai0AADoAACADQQNxDQALCyACQQNNDQADQCAAIAJBBGsiAmogASACaigCADYCACACQQNLDQALCyACRQ0CA0AgACACQQFrIgJqIAEgAmotAAA6AAAgAg0ACwwCCyACQQNNDQADQCADIAEoAgA2AgAgAUEEaiEBIANBBGohAyACQQRrIgJBA0sNAAsLIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQQFrIgINAAsLIAALWQEBfyAAIAAtAEoiAUEBayABcjoASiAAKAIAIgFBCHEEQCAAIAFBIHI2AgBBfw8LIABCADcCBCAAIAAoAiwiATYCHCAAIAE2AhQgACABIAAoAjBqNgIQQQALxwEBA38CQAJ/IAIoAhAiA0UEQCACEOAGDQIgAigCECEDCyABIAMgAigCFCIFa0sLBEAgAiAAIAEgAigCJBEHAA8LAkAgAiwAS0EASARAQQAhAwwBCyABIQQDQCAEIgNFBEBBACEDDAILIAAgA0EBayIEai0AAEEKRw0ACyACIAAgAyACKAIkEQcAIgQgA0kNASAAIANqIQAgASADayEBIAIoAhQhBQsgBSAAIAEQ3QYaIAIgAigCFCABajYCFCABIANqIQQLIAQLBABBAQsDAAELkAEBA38gACEBAkACQCAAQQNxRQ0AIAAtAABFBEBBAA8LA0AgAUEBaiIBQQNxRQ0BIAEtAAANAAsMAQsDQCABIgJBBGohASACKAIAIgNBf3MgA0GBgoQIa3FBgIGChHhxRQ0ACyADQf8BcUUEQCACIABrDwsDQCACLQABIQMgAkEBaiIBIQIgAw0ACwsgASAAawsEACMACwYAIAAkAAsSAQF/IwAgAGtBcHEiASQAIAELHwBBwKcCKAIARQRAQcSnAiABNgIAQcCnAiAANgIACwsNACABIAIgAyAAES0ACyIBAX4gACABIAKtIAOtQiCGhCAEEOkGIgVCIIinEB4gBacLEwAgACABpyABQiCIpyACIAMQHwsLkZYBLwBBgAgLsA5WZWN0b3JJbnQAVmVjdG9yRG91YmxlAFZlY3RvckNoYXIAVmVjdG9yVUNoYXIAVmVjdG9yRmxvYXQAdmVjdG9yVG9vbHMAY2xlYXJWZWN0b3JEYmwAY2xlYXJWZWN0b3JGbG9hdABtYXhpU2V0dGluZ3MAc2V0dXAAZ2V0U2FtcGxlUmF0ZQBtYXhpRW52ZWxvcGUAbGluZQB0cmlnZ2VyAGFtcGxpdHVkZQB2YWxpbmRleABtYXhpTWl4AHN0ZXJlbwBxdWFkAGFtYmlzb25pYwBtYXhpTGluZQBwbGF5AHByZXBhcmUAdHJpZ2dlckVuYWJsZQBpc0xpbmVDb21wbGV0ZQBtYXhpWEZhZGUAeGZhZGUAbWF4aUxhZ0V4cABpbml0AGFkZFNhbXBsZQB2YWx1ZQBhbHBoYQBhbHBoYVJlY2lwcm9jYWwAdmFsAG1heGlEeW4AZ2F0ZQBjb21wcmVzc29yAGNvbXByZXNzAHNldEF0dGFjawBzZXRSZWxlYXNlAHNldFRocmVzaG9sZABzZXRSYXRpbwBtYXhpRW52AGFyAGFkc3IAc2V0RGVjYXkAc2V0U3VzdGFpbgBjb252ZXJ0AG10b2YAbXNUb1NhbXBzAG1heGlTYW1wbGVBbmRIb2xkAHNhaABtYXhpRmxhbmdlcgBmbGFuZ2UAbWF4aUNob3J1cwBjaG9ydXMAbWF4aURDQmxvY2tlcgBtYXhpU1ZGAHNldEN1dG9mZgBzZXRSZXNvbmFuY2UAbWF4aU1hdGgAYWRkAHN1YgBtdWwAZGl2AGd0AGx0AGd0ZQBsdGUAbW9kAGFicwBwb3cAbWF4aUNsb2NrAHRpY2tlcgBzZXRUZW1wbwBzZXRUaWNrc1BlckJlYXQAaXNUaWNrAGN1cnJlbnRDb3VudABwbGF5SGVhZABicHMAYnBtAHRpY2sAdGlja3MAbWF4aUt1cmFtb3RvT3NjaWxsYXRvcgBzZXRQaGFzZQBnZXRQaGFzZQBtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0AHNldFBoYXNlcwBzaXplAG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvcgBtYXhpQml0cwBzaWcAYXQAc2hsAHNocgByAGxhbmQAbG9yAGx4b3IAbmVnAGluYwBkZWMAZXEAbm9pc2UAdG9TaWduYWwAdG9UcmlnU2lnbmFsAGZyb21TaWduYWwAbWF4aUNvdW50ZXIAY291bnQAbWF4aVNhdFJldmVyYgBtYXhpRnJlZVZlcmIAbWF4aUZGVEFkYXB0b3IAcHJvY2VzcwBzcGVjdHJhbEZsYXRuZXNzAHNwZWN0cmFsQ2VudHJvaWQAZ2V0TWFnbml0dWRlc0FzSlNBcnJheQBnZXRNYWduaXR1ZGVzREJBc0pTQXJyYXkAZ2V0UGhhc2VzQXNKU0FycmF5AGdldE51bUJpbnMAZ2V0RkZUU2l6ZQBnZXRIb3BTaXplAGdldFdpbmRvd1NpemUAbWF4aUZGVE1vZGVzAFdJVEhfUE9MQVJfQ09OVkVSU0lPTgBOT19QT0xBUl9DT05WRVJTSU9OAG1heGlJRkZUQWRhcHRvcgBtYXhpSUZGVE1vZGVzAFNQRUNUUlVNAENPTVBMRVgAbWF4aU1GQ0NBZGFwdG9yAG1mY2MAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lmRUUAAAAA3DoAAC4JAABsZW5ndGgATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZEVFAAAA3DoAAF8JAABwdXNoX2JhY2sAcmVzaXplAGdldABzZXQATlN0M19fMjZ2ZWN0b3JJaU5TXzlhbGxvY2F0b3JJaUVFRUUATlN0M19fMjEzX192ZWN0b3JfYmFzZUlpTlNfOWFsbG9jYXRvcklpRUVFRQBOU3QzX18yMjBfX3ZlY3Rvcl9iYXNlX2NvbW1vbklMYjFFRUUAAADcOgAA8QkAAGA7AADFCQAAAAAAAAEAAAAYCgAAAAAAAGA7AAChCQAAAAAAAAEAAAAgCgAAAAAAAFBOU3QzX18yNnZlY3RvcklpTlNfOWFsbG9jYXRvcklpRUVFRQAAAAC8OwAAUAoAAAAAAAA4CgAAUEtOU3QzX18yNnZlY3RvcklpTlNfOWFsbG9jYXRvcklpRUVFRQAAALw7AACICgAAAQAAADgKAABpaQB2AHZpAHgKAADkOQAAeAoAAEQ6AAB2aWlpAAAAAOQ5AAB4CgAAaDoAAEQ6AAB2aWlpaQAAAGg6AACwCgAAaWlpACQLAAA4CgAAaDoAAE4xMGVtc2NyaXB0ZW4zdmFsRQAA3DoAABALAABpaWlpAEHAFgvmBPw5AAA4CgAAaDoAAEQ6AABpaWlpaQBOU3QzX18yNnZlY3RvcklkTlNfOWFsbG9jYXRvcklkRUVFRQBOU3QzX18yMTNfX3ZlY3Rvcl9iYXNlSWROU185YWxsb2NhdG9ySWRFRUVFAAAAYDsAAHoLAAAAAAAAAQAAABgKAAAAAAAAYDsAAFYLAAAAAAAAAQAAAKgLAAAAAAAAUE5TdDNfXzI2dmVjdG9ySWROU185YWxsb2NhdG9ySWRFRUVFAAAAALw7AADYCwAAAAAAAMALAABQS05TdDNfXzI2dmVjdG9ySWROU185YWxsb2NhdG9ySWRFRUVFAAAAvDsAABAMAAABAAAAwAsAAAAMAADkOQAAAAwAAIA6AAB2aWlkAAAAAOQ5AAAADAAAaDoAAIA6AAB2aWlpZAAAAGg6AAA4DAAAJAsAAMALAABoOgAAAAAAAPw5AADACwAAaDoAAIA6AABpaWlpZABOU3QzX18yNnZlY3RvckljTlNfOWFsbG9jYXRvckljRUVFRQBOU3QzX18yMTNfX3ZlY3Rvcl9iYXNlSWNOU185YWxsb2NhdG9ySWNFRUVFAAAAYDsAAMoMAAAAAAAAAQAAABgKAAAAAAAAYDsAAKYMAAAAAAAAAQAAAPgMAAAAAAAAUE5TdDNfXzI2dmVjdG9ySWNOU185YWxsb2NhdG9ySWNFRUVFAAAAALw7AAAoDQAAAAAAABANAABQS05TdDNfXzI2dmVj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OgAAsB4AADE1bWF4aUlGRlRBZGFwdG9yADhtYXhpSUZGVADcOgAAch8AAAQ7AABgHwAAfB8AAFAxNW1heGlJRkZUQWRhcHRvcgAAvDsAAJAfAAAAAAAAhB8AAFBLMTVtYXhpSUZGVEFkYXB0b3IAvDsAALQfAAABAAAAhB8AAKQfAAAAAAAA5DkAAKQfAABEOgAARDoAAEQ6AEGAwAALxgF0OgAApB8AAIA6AAAkCwAAJAsAADAgAABOOG1heGlJRkZUOGZmdE1vZGVzRQAAAACQOgAAGCAAAGZpaWRpaWkAMTVtYXhpTUZDQ0FkYXB0b3IAMTZtYXhpTUZDQ0FuYWx5c2VySWRFANw6AABSIAAABDsAAEAgAABoIAAAUDE1bWF4aU1GQ0NBZGFwdG9yAAC8OwAAfCAAAAAAAABwIAAAUEsxNW1heGlNRkNDQWRhcHRvcgC8OwAAoCAAAAEAAABwIAAAkCAAQdDBAAsy5DkAAJAgAABQOgAAUDoAAFA6AACAOgAAgDoAAHZpaWlpaWRkAAAAACQLAACQIAAAJAsAQZDCAAs4w/UoXI/C6T8QWDm0yHbqP3WTGARWDuk/ppvEILBy6D9mZmZmZmbmP2ZmZmZmZuY/ZmZmZmZm5j8AQdbCAAuABOA/AAAAAAAA4D8AAAAAAADgPwAAAAAAAOA/JWQgaXMgbm90IGEgcG93ZXIgb2YgdHdvCgBPcGVuMzAzAHBsYXkAc2V0U2FtcGxlUmF0ZQBzZXRXYXZlZm9ybQBzZXRDdXRvZmYAc2V0UmVzb25hbmNlAHNldEVudk1vZABzZXREZWNheQBzZXRBY2NlbnQAc2V0Vm9sdW1lAHNldEFtcFN1c3RhaW4Ac2V0UHJlRmlsdGVySGlnaHBhc3MAc2V0RmVlZGJhY2tIaWdocGFzcwBzZXRQb3N0RmlsdGVySGlnaHBhc3MAc2V0U3F1YXJlUGhhc2VTaGlmdABzZXRTbGlkZVRpbWUAc2V0Tm9ybWFsQXR0YWNrAHNldEFjY2VudEF0dGFjawBzZXRBY2NlbnREZWNheQBzZXRBbXBEZWNheQBzZXRBbXBSZWxlYXNlAHRyaWdnZXJOb3RlAHNsaWRlVG9Ob3RlAHJlbGVhc2VOb3RlAG5vdGVPbgBzZXRQaXRjaEJlbmQATjVyb3NpYzdPcGVuMzAzRQAA3DoAAN4iAABQTjVyb3NpYzdPcGVuMzAzRQAAALw7AAD4IgAAAAAAAPAiAABQS041cm9zaWM3T3BlbjMwM0UAALw7AAAcIwAAAQAAAPAiAAAMIwAAgDoAAAwjAADkOQAADCMAAIA6AEHgxgALlA3kOQAADCMAAEQ6AAD8OQAA5DkAAAwjAABEOgAARDoAAHZvaWQAYm9vbABjaGFyAHNpZ25lZCBjaGFyAHVuc2lnbmVkIGNoYXIAc2hvcnQAdW5zaWduZWQgc2hvcnQAaW50AHVuc2lnbmVkIGludABsb25nAHVuc2lnbmVkIGxvbmcAZmxvYXQAZG91YmxlAHN0ZDo6c3RyaW5nAHN0ZDo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXI+AHN0ZDo6d3N0cmluZwBzdGQ6OnUxNnN0cmluZwBzdGQ6OnUzMnN0cmluZwBlbXNjcmlwdGVuOjp2YWwAZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8Y2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxmbG9hdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgBOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQBOU3QzX18yMjFfX2Jhc2ljX3N0cmluZ19jb21tb25JTGIxRUVFAADcOgAA1SYAAGA7AACWJgAAAAAAAAEAAAD8JgAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0loTlNfMTFjaGFyX3RyYWl0c0loRUVOU185YWxsb2NhdG9ySWhFRUVFAABgOwAAHCcAAAAAAAABAAAA/CYAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQAAYDsAAHQnAAAAAAAAAQAAAPwmAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURzTlNfMTFjaGFyX3RyYWl0c0lEc0VFTlNfOWFsbG9jYXRvcklEc0VFRUUAAABgOwAAzCcAAAAAAAABAAAA/CYAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJRGlOU18xMWNoYXJfdHJhaXRzSURpRUVOU185YWxsb2NhdG9ySURpRUVFRQAAAGA7AAAoKAAAAAAAAAEAAAD8JgAAAAAAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQAA3DoAAIQoAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lhRUUAANw6AACsKAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaEVFAADcOgAA1CgAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQAA3DoAAPwoAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l0RUUAANw6AAAkKQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaUVFAADcOgAATCkAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQAA3DoAAHQpAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lsRUUAANw6AACcKQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbUVFAADcOgAAxCkAAAAAAD8AAAC/AEGG1AALKuA/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dmFsX25ld19jc3RyaW5nCxNfZW12YWxfZ2V0X3Byb3BlcnR5DA1fZW12YWxfZGVjcmVmDQlfZW12YWxfYXMOFl9lbXZhbF9ydW5fZGVzdHJ1Y3RvcnMPDV9lbXZhbF9pbmNyZWYQBGV4aXQRFV9lbWJpbmRfcmVnaXN0ZXJfdm9pZBIVX2VtYmluZF9yZWdpc3Rlcl9ib29sExtfZW1iaW5kX3JlZ2lzdGVyX3N0ZF9zdHJpbmcUHF9lbWJpbmRfcmVnaXN0ZXJfc3RkX3dzdHJpbmcVFl9lbWJpbmRfcmVnaXN0ZXJfZW12YWwWGF9lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlchcWX2VtYmluZF9yZWdpc3Rlcl9mbG9hdBgcX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldxkPX193YXNpX2ZkX2Nsb3NlGg9fX3dhc2lfZmRfd3JpdGUbBWFib3J0HBZlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwHRVlbXNjcmlwdGVuX21lbWNweV9iaWceC3NldFRlbXBSZXQwHxpsZWdhbGltcG9ydCRfX3dhc2lfZmRfc2VlayARX193YXNtX2NhbGxfY3RvcnMhUEVtc2NyaXB0ZW5CaW5kaW5nSW5pdGlhbGl6ZXJfbXlfbW9kdWxlOjpFbXNjcmlwdGVuQmluZGluZ0luaXRpYWxpemVyX215X21vZHVsZSgpIpUBZW1zY3JpcHRlbjo6Y2xhc3NfPHN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPiwgZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok5vQmFzZUNsYXNzPiBlbXNjcmlwdGVuOjpyZWdpc3Rlcl92ZWN0b3I8aW50PihjaGFyIGNvbnN0KikjngFlbXNjcmlwdGVuOjpjbGFzc188c3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+LCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6Tm9CYXNlQ2xhc3M+IGVtc2NyaXB0ZW46OnJlZ2lzdGVyX3ZlY3Rvcjxkb3VibGU+KGNoYXIgY29uc3QqKSSYAWVtc2NyaXB0ZW46OmNsYXNzXzxzdGQ6Ol9fMjo6dmVjdG9yPGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok5vQmFzZUNsYXNzPiBlbXNjcmlwdGVuOjpyZWdpc3Rlcl92ZWN0b3I8Y2hhcj4oY2hhciBjb25zdCopJbMBZW1zY3JpcHRlbjo6Y2xhc3NfPHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+LCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6Tm9CYXNlQ2xhc3M+IGVtc2NyaXB0ZW46OnJlZ2lzdGVyX3ZlY3Rvcjx1bnNpZ25lZCBjaGFyPihjaGFyIGNvbnN0KikmmwFlbXNjcmlwdGVuOjpjbGFzc188c3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiwgZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok5vQmFzZUNsYXNzPiBlbXNjcmlwdGVuOjpyZWdpc3Rlcl92ZWN0b3I8ZmxvYXQ+KGNoYXIgY29uc3QqKSdKdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8dmVjdG9yVG9vbHM+KHZlY3RvclRvb2xzKikoRHZvaWQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OnJhd19kZXN0cnVjdG9yPHZlY3RvclRvb2xzPih2ZWN0b3JUb29scyopKUdlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjx2ZWN0b3JUb29scyo+OjppbnZva2UodmVjdG9yVG9vbHMqICgqKSgpKSo+dmVjdG9yVG9vbHMqIGVtc2NyaXB0ZW46OmludGVybmFsOjpvcGVyYXRvcl9uZXc8dmVjdG9yVG9vbHM+KCkr4AFlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjx2b2lkLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4mPjo6aW52b2tlKHZvaWQgKCopKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYpLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4qKSxUdmVjdG9yVG9vbHM6OmNsZWFyVmVjdG9yRGJsKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYpLdoBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8dm9pZCwgc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiY+OjppbnZva2Uodm9pZCAoKikoc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiYpLCBzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+KikuVHZlY3RvclRvb2xzOjpjbGVhclZlY3RvckZsb2F0KHN0ZDo6X18yOjp2ZWN0b3I8ZmxvYXQsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZmxvYXQ+ID4mKS9Mdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aVNldHRpbmdzPihtYXhpU2V0dGluZ3MqKTBGdm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8bWF4aVNldHRpbmdzPihtYXhpU2V0dGluZ3MqKTFiZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8dm9pZCwgaW50LCBpbnQsIGludD46Omludm9rZSh2b2lkICgqKShpbnQsIGludCwgaW50KSwgaW50LCBpbnQsIGludCkyIm1heGlTZXR0aW5nczo6c2V0dXAoaW50LCBpbnQsIGludCkzNWVtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPGludD46Omludm9rZShpbnQgKCopKCkpNB1tYXhpU2V0dGluZ3M6OmdldFNhbXBsZVJhdGUoKTVMdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aUVudmVsb3BlPihtYXhpRW52ZWxvcGUqKTZGdm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8bWF4aUVudmVsb3BlPihtYXhpRW52ZWxvcGUqKTdJZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8bWF4aUVudmVsb3BlKj46Omludm9rZShtYXhpRW52ZWxvcGUqICgqKSgpKThAbWF4aUVudmVsb3BlKiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6b3BlcmF0b3JfbmV3PG1heGlFbnZlbG9wZT4oKTmEA2Vtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPGRvdWJsZSAobWF4aUVudmVsb3BlOjoqKShpbnQsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYpLCBkb3VibGUsIG1heGlFbnZlbG9wZSosIGludCwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+Jj46Omludm9rZShkb3VibGUgKG1heGlFbnZlbG9wZTo6KiBjb25zdCYpKGludCwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+JiksIG1heGlFbnZlbG9wZSosIGludCwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+Kik6ugFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChtYXhpRW52ZWxvcGU6OiopKGludCwgZG91YmxlKSwgdm9pZCwgbWF4aUVudmVsb3BlKiwgaW50LCBkb3VibGU+OjppbnZva2Uodm9pZCAobWF4aUVudmVsb3BlOjoqIGNvbnN0JikoaW50LCBkb3VibGUpLCBtYXhpRW52ZWxvcGUqLCBpbnQsIGRvdWJsZSk7Im1heGlFbnZlbG9wZTo6Z2V0QW1wbGl0dWRlKCkgY29uc3Q8Im1heGlFbnZlbG9wZTo6c2V0QW1wbGl0dWRlKGRvdWJsZSk9nAFkb3VibGUgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkdldHRlclBvbGljeTxkb3VibGUgKG1heGlFbnZlbG9wZTo6KikoKSBjb25zdD46OmdldDxtYXhpRW52ZWxvcGU+KGRvdWJsZSAobWF4aUVudmVsb3BlOjoqIGNvbnN0JikoKSBjb25zdCwgbWF4aUVudmVsb3BlIGNvbnN0Jik+mAF2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpTZXR0ZXJQb2xpY3k8dm9pZCAobWF4aUVudmVsb3BlOjoqKShkb3VibGUpPjo6c2V0PG1heGlFbnZlbG9wZT4odm9pZCAobWF4aUVudmVsb3BlOjoqIGNvbnN0JikoZG91YmxlKSwgbWF4aUVudmVsb3BlJiwgZG91YmxlKT8hbWF4aUVudmVsb3BlOjpnZXRWYWxpbmRleCgpIGNvbnN0QB5tYXhpRW52ZWxvcGU6OnNldFZhbGluZGV4KGludClBkwFpbnQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkdldHRlclBvbGljeTxpbnQgKG1heGlFbnZlbG9wZTo6KikoKSBjb25zdD46OmdldDxtYXhpRW52ZWxvcGU+KGludCAobWF4aUVudmVsb3BlOjoqIGNvbnN0JikoKSBjb25zdCwgbWF4aUVudmVsb3BlIGNvbnN0JilCjwF2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpTZXR0ZXJQb2xpY3k8dm9pZCAobWF4aUVudmVsb3BlOjoqKShpbnQpPjo6c2V0PG1heGlFbnZlbG9wZT4odm9pZCAobWF4aUVudmVsb3BlOjoqIGNvbnN0JikoaW50KSwgbWF4aUVudmVsb3BlJiwgaW50KUNCdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aU1peD4obWF4aU1peCopRDx2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpTWl4PihtYXhpTWl4KilFP2Vtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPG1heGlNaXgqPjo6aW52b2tlKG1heGlNaXgqICgqKSgpKUY2bWF4aU1peCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxtYXhpTWl4PigpR5YDZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dm9pZCAobWF4aU1peDo6KikoZG91YmxlLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4mLCBkb3VibGUpLCB2b2lkLCBtYXhpTWl4KiwgZG91YmxlLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4mLCBkb3VibGU+OjppbnZva2Uodm9pZCAobWF4aU1peDo6KiBjb25zdCYpKGRvdWJsZSwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+JiwgZG91YmxlKSwgbWF4aU1peCosIGRvdWJsZSwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+KiwgZG91YmxlKUi2A2Vtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKG1heGlNaXg6OiopKGRvdWJsZSwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+JiwgZG91YmxlLCBkb3VibGUpLCB2b2lkLCBtYXhpTWl4KiwgZG91YmxlLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4mLCBkb3VibGUsIGRvdWJsZT46Omludm9rZSh2b2lkIChtYXhpTWl4OjoqIGNvbnN0JikoZG91YmxlLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4mLCBkb3VibGUsIGRvdWJsZSksIG1heGlNaXgqLCBkb3VibGUsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiosIGRvdWJsZSwgZG91YmxlKUnWA2Vtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKG1heGlNaXg6OiopKGRvdWJsZSwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+JiwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSksIHZvaWQsIG1heGlNaXgqLCBkb3VibGUsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIGRvdWJsZSwgZG91YmxlLCBkb3VibGU+OjppbnZva2Uodm9pZCAobWF4aU1peDo6KiBjb25zdCYpKGRvdWJsZSwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+JiwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSksIG1heGlNaXgqLCBkb3VibGUsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiosIGRvdWJsZSwgZG91YmxlLCBkb3VibGUpSkR2b2lkIGNvbnN0KiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6Z2V0QWN0dWFsVHlwZTxtYXhpTGluZT4obWF4aUxpbmUqKUs+dm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8bWF4aUxpbmU+KG1heGlMaW5lKilMQWVtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPG1heGlMaW5lKj46Omludm9rZShtYXhpTGluZSogKCopKCkpTThtYXhpTGluZSogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxtYXhpTGluZT4oKU4WbWF4aUxpbmU6OnBsYXkoZG91YmxlKU+cAWVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPGRvdWJsZSAobWF4aUxpbmU6OiopKGRvdWJsZSksIGRvdWJsZSwgbWF4aUxpbmUqLCBkb3VibGU+OjppbnZva2UoZG91YmxlIChtYXhpTGluZTo6KiBjb25zdCYpKGRvdWJsZSksIG1heGlMaW5lKiwgZG91YmxlKVAvbWF4aUxpbmU6OnByZXBhcmUoZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgYm9vbClR7gFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChtYXhpTGluZTo6KikoZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgYm9vbCksIHZvaWQsIG1heGlMaW5lKiwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgYm9vbD46Omludm9rZSh2b2lkIChtYXhpTGluZTo6KiBjb25zdCYpKGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGJvb2wpLCBtYXhpTGluZSosIGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGJvb2wpUh9tYXhpTGluZTo6dHJpZ2dlckVuYWJsZShkb3VibGUpU5YBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dm9pZCAobWF4aUxpbmU6OiopKGRvdWJsZSksIHZvaWQsIG1heGlMaW5lKiwgZG91YmxlPjo6aW52b2tlKHZvaWQgKG1heGlMaW5lOjoqIGNvbnN0JikoZG91YmxlKSwgbWF4aUxpbmUqLCBkb3VibGUpVBptYXhpTGluZTo6aXNMaW5lQ29tcGxldGUoKVV6ZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8Ym9vbCAobWF4aUxpbmU6OiopKCksIGJvb2wsIG1heGlMaW5lKj46Omludm9rZShib29sIChtYXhpTGluZTo6KiBjb25zdCYpKCksIG1heGlMaW5lKilWRnZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPG1heGlYRmFkZT4obWF4aVhGYWRlKilXQHZvaWQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OnJhd19kZXN0cnVjdG9yPG1heGlYRmFkZT4obWF4aVhGYWRlKilYhwRlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4sIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIGRvdWJsZT46Omludm9rZShzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4gKCopKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIGRvdWJsZSksIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiosIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiosIGRvdWJsZSlZigFtYXhpWEZhZGU6OnhmYWRlKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIGRvdWJsZSlagQFlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGU+OjppbnZva2UoZG91YmxlICgqKShkb3VibGUsIGRvdWJsZSwgZG91YmxlKSwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSlbKG1heGlYRmFkZTo6eGZhZGUoZG91YmxlLCBkb3VibGUsIGRvdWJsZSlcWXZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPG1heGlMYWdFeHA8ZG91YmxlPiA+KG1heGlMYWdFeHA8ZG91YmxlPiopXVN2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpTGFnRXhwPGRvdWJsZT4gPihtYXhpTGFnRXhwPGRvdWJsZT4qKV5VZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8bWF4aUxhZ0V4cDxkb3VibGU+Kj46Omludm9rZShtYXhpTGFnRXhwPGRvdWJsZT4qICgqKSgpKV9NbWF4aUxhZ0V4cDxkb3VibGU+KiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6b3BlcmF0b3JfbmV3PG1heGlMYWdFeHA8ZG91YmxlPiA+KClgKG1heGlMYWdFeHA8ZG91YmxlPjo6aW5pdChkb3VibGUsIGRvdWJsZSlh3gFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChtYXhpTGFnRXhwPGRvdWJsZT46OiopKGRvdWJsZSwgZG91YmxlKSwgdm9pZCwgbWF4aUxhZ0V4cDxkb3VibGU+KiwgZG91YmxlLCBkb3VibGU+OjppbnZva2Uodm9pZCAobWF4aUxhZ0V4cDxkb3VibGU+OjoqIGNvbnN0JikoZG91YmxlLCBkb3VibGUpLCBtYXhpTGFnRXhwPGRvdWJsZT4qLCBkb3VibGUsIGRvdWJsZSliJW1heGlMYWdFeHA8ZG91YmxlPjo6YWRkU2FtcGxlKGRvdWJsZSljvgFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChtYXhpTGFnRXhwPGRvdWJsZT46OiopKGRvdWJsZSksIHZvaWQsIG1heGlMYWdFeHA8ZG91YmxlPiosIGRvdWJsZT46Omludm9rZSh2b2lkIChtYXhpTGFnRXhwPGRvdWJsZT46OiogY29uc3QmKShkb3VibGUpLCBtYXhpTGFnRXhwPGRvdWJsZT4qLCBkb3VibGUpZCFtYXhpTGFnRXhwPGRvdWJsZT46OnZhbHVlKCkgY29uc3RlwAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlMYWdFeHA8ZG91YmxlPjo6KikoKSBjb25zdCwgZG91YmxlLCBtYXhpTGFnRXhwPGRvdWJsZT4gY29uc3QqPjo6aW52b2tlKGRvdWJsZSAobWF4aUxhZ0V4cDxkb3VibGU+OjoqIGNvbnN0JikoKSBjb25zdCwgbWF4aUxhZ0V4cDxkb3VibGU+IGNvbnN0KilmJG1heGlMYWdFeHA8ZG91YmxlPjo6Z2V0QWxwaGEoKSBjb25zdGckbWF4aUxhZ0V4cDxkb3VibGU+OjpzZXRBbHBoYShkb3VibGUpaLUBZG91YmxlIGVtc2NyaXB0ZW46OmludGVybmFsOjpHZXR0ZXJQb2xpY3k8ZG91YmxlIChtYXhpTGFnRXhwPGRvdWJsZT46OiopKCkgY29uc3Q+OjpnZXQ8bWF4aUxhZ0V4cDxkb3VibGU+ID4oZG91YmxlIChtYXhpTGFnRXhwPGRvdWJsZT46OiogY29uc3QmKSgpIGNvbnN0LCBtYXhpTGFnRXhwPGRvdWJsZT4gY29uc3QmKWmxAXZvaWQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlNldHRlclBvbGljeTx2b2lkIChtYXhpTGFnRXhwPGRvdWJsZT46OiopKGRvdWJsZSk+OjpzZXQ8bWF4aUxhZ0V4cDxkb3VibGU+ID4odm9pZCAobWF4aUxhZ0V4cDxkb3VibGU+OjoqIGNvbnN0JikoZG91YmxlKSwgbWF4aUxhZ0V4cDxkb3VibGU+JiwgZG91YmxlKWoubWF4aUxhZ0V4cDxkb3VibGU+OjpnZXRBbHBoYVJlY2lwcm9jYWwoKSBjb25zdGsubWF4aUxhZ0V4cDxkb3VibGU+OjpzZXRBbHBoYVJlY2lwcm9jYWwoZG91YmxlKWwibWF4aUxhZ0V4cDxkb3VibGU+OjpzZXRWYWwoZG91YmxlKW1Cdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aUR5bj4obWF4aUR5biopbjx2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpRHluPihtYXhpRHluKilvP2Vtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPG1heGlEeW4qPjo6aW52b2tlKG1heGlEeW4qICgqKSgpKXA2bWF4aUR5biogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxtYXhpRHluPigpcZACZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8ZG91YmxlIChtYXhpRHluOjoqKShkb3VibGUsIGRvdWJsZSwgbG9uZywgZG91YmxlLCBkb3VibGUpLCBkb3VibGUsIG1heGlEeW4qLCBkb3VibGUsIGRvdWJsZSwgbG9uZywgZG91YmxlLCBkb3VibGU+OjppbnZva2UoZG91YmxlIChtYXhpRHluOjoqIGNvbnN0JikoZG91YmxlLCBkb3VibGUsIGxvbmcsIGRvdWJsZSwgZG91YmxlKSwgbWF4aUR5biosIGRvdWJsZSwgZG91YmxlLCBsb25nLCBkb3VibGUsIGRvdWJsZSlymAJlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlEeW46OiopKGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlKSwgZG91YmxlLCBtYXhpRHluKiwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGU+OjppbnZva2UoZG91YmxlIChtYXhpRHluOjoqIGNvbnN0JikoZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUpLCBtYXhpRHluKiwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUpc5gBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8ZG91YmxlIChtYXhpRHluOjoqKShkb3VibGUpLCBkb3VibGUsIG1heGlEeW4qLCBkb3VibGU+OjppbnZva2UoZG91YmxlIChtYXhpRHluOjoqIGNvbnN0JikoZG91YmxlKSwgbWF4aUR5biosIGRvdWJsZSl0kgFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChtYXhpRHluOjoqKShkb3VibGUpLCB2b2lkLCBtYXhpRHluKiwgZG91YmxlPjo6aW52b2tlKHZvaWQgKG1heGlEeW46OiogY29uc3QmKShkb3VibGUpLCBtYXhpRHluKiwgZG91YmxlKXVCdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aUVudj4obWF4aUVudiopdjx2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpRW52PihtYXhpRW52Kil3P2Vtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPG1heGlFbnYqPjo6aW52b2tlKG1heGlFbnYqICgqKSgpKXg2bWF4aUVudiogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxtYXhpRW52PigpeYQCZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8ZG91YmxlIChtYXhpRW52OjoqKShkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBsb25nLCBpbnQpLCBkb3VibGUsIG1heGlFbnYqLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBsb25nLCBpbnQ+OjppbnZva2UoZG91YmxlIChtYXhpRW52OjoqIGNvbnN0JikoZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgbG9uZywgaW50KSwgbWF4aUVudiosIGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGxvbmcsIGludCl6xAJlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlFbnY6OiopKGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBsb25nLCBpbnQpLCBkb3VibGUsIG1heGlFbnYqLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgbG9uZywgaW50Pjo6aW52b2tlKGRvdWJsZSAobWF4aUVudjo6KiBjb25zdCYpKGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBsb25nLCBpbnQpLCBtYXhpRW52KiwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGxvbmcsIGludCl7rAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlFbnY6OiopKGRvdWJsZSwgaW50KSwgZG91YmxlLCBtYXhpRW52KiwgZG91YmxlLCBpbnQ+OjppbnZva2UoZG91YmxlIChtYXhpRW52OjoqIGNvbnN0JikoZG91YmxlLCBpbnQpLCBtYXhpRW52KiwgZG91YmxlLCBpbnQpfJIBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dm9pZCAobWF4aUVudjo6KikoZG91YmxlKSwgdm9pZCwgbWF4aUVudiosIGRvdWJsZT46Omludm9rZSh2b2lkIChtYXhpRW52OjoqIGNvbnN0JikoZG91YmxlKSwgbWF4aUVudiosIGRvdWJsZSl9G21heGlFbnY6OmdldFRyaWdnZXIoKSBjb25zdH4YbWF4aUVudjo6c2V0VHJpZ2dlcihpbnQpf39pbnQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkdldHRlclBvbGljeTxpbnQgKG1heGlFbnY6OiopKCkgY29uc3Q+OjpnZXQ8bWF4aUVudj4oaW50IChtYXhpRW52OjoqIGNvbnN0JikoKSBjb25zdCwgbWF4aUVudiBjb25zdCYpgAF7dm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6U2V0dGVyUG9saWN5PHZvaWQgKG1heGlFbnY6OiopKGludCk+OjpzZXQ8bWF4aUVudj4odm9pZCAobWF4aUVudjo6KiBjb25zdCYpKGludCksIG1heGlFbnYmLCBpbnQpgQFCdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8Y29udmVydD4oY29udmVydCopggE8dm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8Y29udmVydD4oY29udmVydCopgwE/ZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8Y29udmVydCo+OjppbnZva2UoY29udmVydCogKCopKCkphAE2Y29udmVydCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxjb252ZXJ0PigphQFiZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkZ1bmN0aW9uSW52b2tlcjxkb3VibGUgKCopKGludCksIGRvdWJsZSwgaW50Pjo6aW52b2tlKGRvdWJsZSAoKiopKGludCksIGludCmGAUhlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxkb3VibGUsIGludD46Omludm9rZShkb3VibGUgKCopKGludCksIGludCmHARpjb252ZXJ0Ojptc1RvU2FtcHMoZG91YmxlKYgBbmVtc2NyaXB0ZW46OmludGVybmFsOjpGdW5jdGlvbkludm9rZXI8ZG91YmxlICgqKShkb3VibGUpLCBkb3VibGUsIGRvdWJsZT46Omludm9rZShkb3VibGUgKCoqKShkb3VibGUpLCBkb3VibGUpiQFRZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8ZG91YmxlLCBkb3VibGU+OjppbnZva2UoZG91YmxlICgqKShkb3VibGUpLCBkb3VibGUpigFWdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aVNhbXBsZUFuZEhvbGQ+KG1heGlTYW1wbGVBbmRIb2xkKimLAVB2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpU2FtcGxlQW5kSG9sZD4obWF4aVNhbXBsZUFuZEhvbGQqKYwBU2Vtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPG1heGlTYW1wbGVBbmRIb2xkKj46Omludm9rZShtYXhpU2FtcGxlQW5kSG9sZCogKCopKCkpjQFKbWF4aVNhbXBsZUFuZEhvbGQqIGVtc2NyaXB0ZW46OmludGVybmFsOjpvcGVyYXRvcl9uZXc8bWF4aVNhbXBsZUFuZEhvbGQ+KCmOASZtYXhpU2FtcGxlQW5kSG9sZDo6c2FoKGRvdWJsZSwgZG91YmxlKY8B4AFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlTYW1wbGVBbmRIb2xkOjoqKShkb3VibGUsIGRvdWJsZSksIGRvdWJsZSwgbWF4aVNhbXBsZUFuZEhvbGQqLCBkb3VibGUsIGRvdWJsZT46Omludm9rZShkb3VibGUgKG1heGlTYW1wbGVBbmRIb2xkOjoqIGNvbnN0JikoZG91YmxlLCBkb3VibGUpLCBtYXhpU2FtcGxlQW5kSG9sZCosIGRvdWJsZSwgZG91YmxlKZABSnZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPG1heGlGbGFuZ2VyPihtYXhpRmxhbmdlciopkQFEdm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8bWF4aUZsYW5nZXI+KG1heGlGbGFuZ2VyKimSAUdlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxtYXhpRmxhbmdlcio+OjppbnZva2UobWF4aUZsYW5nZXIqICgqKSgpKZMBPm1heGlGbGFuZ2VyKiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6b3BlcmF0b3JfbmV3PG1heGlGbGFuZ2VyPigplAFBbWF4aUZsYW5nZXI6OmZsYW5nZShkb3VibGUsIHVuc2lnbmVkIGludCwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSmVAcACZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8ZG91YmxlIChtYXhpRmxhbmdlcjo6KikoZG91YmxlLCB1bnNpZ25lZCBpbnQsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUpLCBkb3VibGUsIG1heGlGbGFuZ2VyKiwgZG91YmxlLCB1bnNpZ25lZCBpbnQsIGRvdWJsZSwgZG91YmxlLCBkb3VibGU+OjppbnZva2UoZG91YmxlIChtYXhpRmxhbmdlcjo6KiBjb25zdCYpKGRvdWJsZSwgdW5zaWduZWQgaW50LCBkb3VibGUsIGRvdWJsZSwgZG91YmxlKSwgbWF4aUZsYW5nZXIqLCBkb3VibGUsIHVuc2lnbmVkIGludCwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSmWAUh2b2lkIGNvbnN0KiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6Z2V0QWN0dWFsVHlwZTxtYXhpQ2hvcnVzPihtYXhpQ2hvcnVzKimXAUJ2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpQ2hvcnVzPihtYXhpQ2hvcnVzKimYAUVlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxtYXhpQ2hvcnVzKj46Omludm9rZShtYXhpQ2hvcnVzKiAoKikoKSmZATxtYXhpQ2hvcnVzKiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6b3BlcmF0b3JfbmV3PG1heGlDaG9ydXM+KCmaAUBtYXhpQ2hvcnVzOjpjaG9ydXMoZG91YmxlLCB1bnNpZ25lZCBpbnQsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUpmwG8AmVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPGRvdWJsZSAobWF4aUNob3J1czo6KikoZG91YmxlLCB1bnNpZ25lZCBpbnQsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUpLCBkb3VibGUsIG1heGlDaG9ydXMqLCBkb3VibGUsIHVuc2lnbmVkIGludCwgZG91YmxlLCBkb3VibGUsIGRvdWJsZT46Omludm9rZShkb3VibGUgKG1heGlDaG9ydXM6OiogY29uc3QmKShkb3VibGUsIHVuc2lnbmVkIGludCwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSksIG1heGlDaG9ydXMqLCBkb3VibGUsIHVuc2lnbmVkIGludCwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSmcAU52b2lkIGNvbnN0KiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6Z2V0QWN0dWFsVHlwZTxtYXhpRENCbG9ja2VyPihtYXhpRENCbG9ja2VyKimdAUh2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpRENCbG9ja2VyPihtYXhpRENCbG9ja2VyKimeAUtlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxtYXhpRENCbG9ja2VyKj46Omludm9rZShtYXhpRENCbG9ja2VyKiAoKikoKSmfAUJtYXhpRENCbG9ja2VyKiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6b3BlcmF0b3JfbmV3PG1heGlEQ0Jsb2NrZXI+KCmgASNtYXhpRENCbG9ja2VyOjpwbGF5KGRvdWJsZSwgZG91YmxlKaEB0AFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlEQ0Jsb2NrZXI6OiopKGRvdWJsZSwgZG91YmxlKSwgZG91YmxlLCBtYXhpRENCbG9ja2VyKiwgZG91YmxlLCBkb3VibGU+OjppbnZva2UoZG91YmxlIChtYXhpRENCbG9ja2VyOjoqIGNvbnN0JikoZG91YmxlLCBkb3VibGUpLCBtYXhpRENCbG9ja2VyKiwgZG91YmxlLCBkb3VibGUpogFCdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aVNWRj4obWF4aVNWRiopowE8dm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8bWF4aVNWRj4obWF4aVNWRioppAE/ZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8bWF4aVNWRio+OjppbnZva2UobWF4aVNWRiogKCopKCkppQE2bWF4aVNWRiogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxtYXhpU1ZGPigppgEabWF4aVNWRjo6c2V0Q3V0b2ZmKGRvdWJsZSmnAZIBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dm9pZCAobWF4aVNWRjo6KikoZG91YmxlKSwgdm9pZCwgbWF4aVNWRiosIGRvdWJsZT46Omludm9rZSh2b2lkIChtYXhpU1ZGOjoqIGNvbnN0JikoZG91YmxlKSwgbWF4aVNWRiosIGRvdWJsZSmoAR1tYXhpU1ZGOjpzZXRSZXNvbmFuY2UoZG91YmxlKakBNW1heGlTVkY6OnBsYXkoZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUpqgGYAmVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPGRvdWJsZSAobWF4aVNWRjo6KikoZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUpLCBkb3VibGUsIG1heGlTVkYqLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGRvdWJsZT46Omludm9rZShkb3VibGUgKG1heGlTVkY6OiogY29uc3QmKShkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSksIG1heGlTVkYqLCBkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSmrAUR2b2lkIGNvbnN0KiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6Z2V0QWN0dWFsVHlwZTxtYXhpTWF0aD4obWF4aU1hdGgqKawBPnZvaWQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OnJhd19kZXN0cnVjdG9yPG1heGlNYXRoPihtYXhpTWF0aCoprQFBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8bWF4aU1hdGgqPjo6aW52b2tlKG1heGlNYXRoKiAoKikoKSmuAThtYXhpTWF0aCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxtYXhpTWF0aD4oKa8BaWVtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPGRvdWJsZSwgZG91YmxlLCBkb3VibGU+OjppbnZva2UoZG91YmxlICgqKShkb3VibGUsIGRvdWJsZSksIGRvdWJsZSwgZG91YmxlKbABHW1heGlNYXRoOjphZGQoZG91YmxlLCBkb3VibGUpsQEdbWF4aU1hdGg6OnN1Yihkb3VibGUsIGRvdWJsZSmyAR1tYXhpTWF0aDo6bXVsKGRvdWJsZSwgZG91YmxlKbMBHW1heGlNYXRoOjpkaXYoZG91YmxlLCBkb3VibGUptAEcbWF4aU1hdGg6Omd0KGRvdWJsZSwgZG91YmxlKbUBHG1heGlNYXRoOjpsdChkb3VibGUsIGRvdWJsZSm2AR1tYXhpTWF0aDo6Z3RlKGRvdWJsZSwgZG91YmxlKbcBHW1heGlNYXRoOjpsdGUoZG91YmxlLCBkb3VibGUpuAEdbWF4aU1hdGg6Om1vZChkb3VibGUsIGRvdWJsZSm5ARVtYXhpTWF0aDo6YWJzKGRvdWJsZSm6AR9tYXhpTWF0aDo6eHBvd3koZG91YmxlLCBkb3VibGUpuwFGdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aUNsb2NrPihtYXhpQ2xvY2sqKbwBQHZvaWQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OnJhd19kZXN0cnVjdG9yPG1heGlDbG9jaz4obWF4aUNsb2NrKim9AUNlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxtYXhpQ2xvY2sqPjo6aW52b2tlKG1heGlDbG9jayogKCopKCkpvgE6bWF4aUNsb2NrKiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6b3BlcmF0b3JfbmV3PG1heGlDbG9jaz4oKb8BfmVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKG1heGlDbG9jazo6KikoKSwgdm9pZCwgbWF4aUNsb2NrKj46Omludm9rZSh2b2lkIChtYXhpQ2xvY2s6OiogY29uc3QmKSgpLCBtYXhpQ2xvY2sqKcABmgFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChtYXhpQ2xvY2s6OiopKGRvdWJsZSksIHZvaWQsIG1heGlDbG9jayosIGRvdWJsZT46Omludm9rZSh2b2lkIChtYXhpQ2xvY2s6OiogY29uc3QmKShkb3VibGUpLCBtYXhpQ2xvY2sqLCBkb3VibGUpwQGOAWVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKG1heGlDbG9jazo6KikoaW50KSwgdm9pZCwgbWF4aUNsb2NrKiwgaW50Pjo6aW52b2tlKHZvaWQgKG1heGlDbG9jazo6KiBjb25zdCYpKGludCksIG1heGlDbG9jayosIGludCnCARltYXhpQ2xvY2s6OmlzVGljaygpIGNvbnN0wwGTAWVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPGludCAobWF4aUNsb2NrOjoqKSgpIGNvbnN0LCBpbnQsIG1heGlDbG9jayBjb25zdCo+OjppbnZva2UoaW50IChtYXhpQ2xvY2s6OiogY29uc3QmKSgpIGNvbnN0LCBtYXhpQ2xvY2sgY29uc3QqKcQBIm1heGlDbG9jazo6Z2V0Q3VycmVudENvdW50KCkgY29uc3TFAR9tYXhpQ2xvY2s6OnNldEN1cnJlbnRDb3VudChpbnQpxgGHAWludCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6R2V0dGVyUG9saWN5PGludCAobWF4aUNsb2NrOjoqKSgpIGNvbnN0Pjo6Z2V0PG1heGlDbG9jaz4oaW50IChtYXhpQ2xvY2s6OiogY29uc3QmKSgpIGNvbnN0LCBtYXhpQ2xvY2sgY29uc3QmKccBgwF2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpTZXR0ZXJQb2xpY3k8dm9pZCAobWF4aUNsb2NrOjoqKShpbnQpPjo6c2V0PG1heGlDbG9jaz4odm9pZCAobWF4aUNsb2NrOjoqIGNvbnN0JikoaW50KSwgbWF4aUNsb2NrJiwgaW50KcgBH21heGlDbG9jazo6Z2V0TGFzdENvdW50KCkgY29uc3TJARxtYXhpQ2xvY2s6OnNldExhc3RDb3VudChpbnQpygEebWF4aUNsb2NrOjpnZXRQbGF5SGVhZCgpIGNvbnN0ywEbbWF4aUNsb2NrOjpzZXRQbGF5SGVhZChpbnQpzAEZbWF4aUNsb2NrOjpnZXRCcHMoKSBjb25zdM0BFm1heGlDbG9jazo6c2V0QnBzKGludCnOAZABZG91YmxlIGVtc2NyaXB0ZW46OmludGVybmFsOjpHZXR0ZXJQb2xpY3k8ZG91YmxlIChtYXhpQ2xvY2s6OiopKCkgY29uc3Q+OjpnZXQ8bWF4aUNsb2NrPihkb3VibGUgKG1heGlDbG9jazo6KiBjb25zdCYpKCkgY29uc3QsIG1heGlDbG9jayBjb25zdCYpzwEZbWF4aUNsb2NrOjpnZXRCcG0oKSBjb25zdNABFm1heGlDbG9jazo6c2V0QnBtKGludCnRARptYXhpQ2xvY2s6OmdldFRpY2soKSBjb25zdNIBF21heGlDbG9jazo6c2V0VGljayhpbnQp0wGKAWJvb2wgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkdldHRlclBvbGljeTxib29sIChtYXhpQ2xvY2s6OiopKCkgY29uc3Q+OjpnZXQ8bWF4aUNsb2NrPihib29sIChtYXhpQ2xvY2s6OiogY29uc3QmKSgpIGNvbnN0LCBtYXhpQ2xvY2sgY29uc3QmKdQBG21heGlDbG9jazo6Z2V0VGlja3MoKSBjb25zdNUBGG1heGlDbG9jazo6c2V0VGlja3MoaW50KdYBYHZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPG1heGlLdXJhbW90b09zY2lsbGF0b3I+KG1heGlLdXJhbW90b09zY2lsbGF0b3IqKdcBWnZvaWQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OnJhd19kZXN0cnVjdG9yPG1heGlLdXJhbW90b09zY2lsbGF0b3I+KG1heGlLdXJhbW90b09zY2lsbGF0b3IqKdgBXWVtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPG1heGlLdXJhbW90b09zY2lsbGF0b3IqPjo6aW52b2tlKG1heGlLdXJhbW90b09zY2lsbGF0b3IqICgqKSgpKdkBVG1heGlLdXJhbW90b09zY2lsbGF0b3IqIGVtc2NyaXB0ZW46OmludGVybmFsOjpvcGVyYXRvcl9uZXc8bWF4aUt1cmFtb3RvT3NjaWxsYXRvcj4oKdoBZG1heGlLdXJhbW90b09zY2lsbGF0b3I6OnBsYXkoZG91YmxlLCBkb3VibGUsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPinbAdYDZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8ZG91YmxlIChtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yOjoqKShkb3VibGUsIGRvdWJsZSwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+KSwgZG91YmxlLCBtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yKiwgZG91YmxlLCBkb3VibGUsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiA+OjppbnZva2UoZG91YmxlIChtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yOjoqIGNvbnN0JikoZG91YmxlLCBkb3VibGUsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiksIG1heGlLdXJhbW90b09zY2lsbGF0b3IqLCBkb3VibGUsIGRvdWJsZSwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+KincAShtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yOjpzZXRQaGFzZShkb3VibGUp3QHOAWVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKG1heGlLdXJhbW90b09zY2lsbGF0b3I6OiopKGRvdWJsZSksIHZvaWQsIG1heGlLdXJhbW90b09zY2lsbGF0b3IqLCBkb3VibGU+OjppbnZva2Uodm9pZCAobWF4aUt1cmFtb3RvT3NjaWxsYXRvcjo6KiBjb25zdCYpKGRvdWJsZSksIG1heGlLdXJhbW90b09zY2lsbGF0b3IqLCBkb3VibGUp3gEibWF4aUt1cmFtb3RvT3NjaWxsYXRvcjo6Z2V0UGhhc2UoKd8BuAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlLdXJhbW90b09zY2lsbGF0b3I6OiopKCksIGRvdWJsZSwgbWF4aUt1cmFtb3RvT3NjaWxsYXRvcio+OjppbnZva2UoZG91YmxlIChtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yOjoqIGNvbnN0JikoKSwgbWF4aUt1cmFtb3RvT3NjaWxsYXRvciop4AFmdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldD4obWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldCop4QFgdm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8bWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldD4obWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldCop4gGeAWVtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQqLCB1bnNpZ25lZCBsb25nIGNvbnN0JiY+OjppbnZva2UobWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldCogKCopKHVuc2lnbmVkIGxvbmcgY29uc3QmJiksIHVuc2lnbmVkIGxvbmcp4wGEAW1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQqIGVtc2NyaXB0ZW46OmludGVybmFsOjpvcGVyYXRvcl9uZXc8bWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldCwgdW5zaWduZWQgbG9uZyBjb25zdD4odW5zaWduZWQgbG9uZyBjb25zdCYmKeQBL21heGlLdXJhbW90b09zY2lsbGF0b3JTZXQ6OnBsYXkoZG91YmxlLCBkb3VibGUp5QGAAmVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPGRvdWJsZSAobWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldDo6KikoZG91YmxlLCBkb3VibGUpLCBkb3VibGUsIG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQqLCBkb3VibGUsIGRvdWJsZT46Omludm9rZShkb3VibGUgKG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQ6OiogY29uc3QmKShkb3VibGUsIGRvdWJsZSksIG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQqLCBkb3VibGUsIGRvdWJsZSnmATptYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0OjpzZXRQaGFzZShkb3VibGUsIHVuc2lnbmVkIGxvbmcp5wGWAmVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQ6OiopKGRvdWJsZSwgdW5zaWduZWQgbG9uZyksIHZvaWQsIG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQqLCBkb3VibGUsIHVuc2lnbmVkIGxvbmc+OjppbnZva2Uodm9pZCAobWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldDo6KiBjb25zdCYpKGRvdWJsZSwgdW5zaWduZWQgbG9uZyksIG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQqLCBkb3VibGUsIHVuc2lnbmVkIGxvbmcp6AFjbWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldDo6c2V0UGhhc2VzKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiBjb25zdCYp6QGwA2Vtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQ6OiopKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiBjb25zdCYpLCB2b2lkLCBtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0Kiwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+IGNvbnN0Jj46Omludm9rZSh2b2lkIChtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0OjoqIGNvbnN0Jikoc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+IGNvbnN0JiksIG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQqLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4qKeoBMm1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQ6OmdldFBoYXNlKHVuc2lnbmVkIGxvbmcp6wH8AWVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPGRvdWJsZSAobWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldDo6KikodW5zaWduZWQgbG9uZyksIGRvdWJsZSwgbWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldCosIHVuc2lnbmVkIGxvbmc+OjppbnZva2UoZG91YmxlIChtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0OjoqIGNvbnN0JikodW5zaWduZWQgbG9uZyksIG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQqLCB1bnNpZ25lZCBsb25nKewBIW1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQ6OnNpemUoKe0B2QFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx1bnNpZ25lZCBsb25nIChtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0OjoqKSgpLCB1bnNpZ25lZCBsb25nLCBtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0Kj46Omludm9rZSh1bnNpZ25lZCBsb25nIChtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0OjoqIGNvbnN0JikoKSwgbWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldCop7gFqdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yPihtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3IqKe8BrAFtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0KiBlbXNjcmlwdGVuOjpiYXNlPG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQ+Ojpjb252ZXJ0UG9pbnRlcjxtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3IsIG1heGlLdXJhbW90b09zY2lsbGF0b3JTZXQ+KG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvciop8AGsAW1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvciogZW1zY3JpcHRlbjo6YmFzZTxtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0Pjo6Y29udmVydFBvaW50ZXI8bWF4aUt1cmFtb3RvT3NjaWxsYXRvclNldCwgbWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yPihtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yU2V0KinxAWR2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3I+KG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvciop8gGiAWVtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvciosIHVuc2lnbmVkIGxvbmcgY29uc3QmJj46Omludm9rZShtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3IqICgqKSh1bnNpZ25lZCBsb25nIGNvbnN0JiYpLCB1bnNpZ25lZCBsb25nKfMBiAFtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3IqIGVtc2NyaXB0ZW46OmludGVybmFsOjpvcGVyYXRvcl9uZXc8bWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yLCB1bnNpZ25lZCBsb25nIGNvbnN0Pih1bnNpZ25lZCBsb25nIGNvbnN0JiYp9AExbWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yOjpwbGF5KGRvdWJsZSwgZG91YmxlKfUBiAJlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvcjo6KikoZG91YmxlLCBkb3VibGUpLCBkb3VibGUsIG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvciosIGRvdWJsZSwgZG91YmxlPjo6aW52b2tlKGRvdWJsZSAobWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yOjoqIGNvbnN0JikoZG91YmxlLCBkb3VibGUpLCBtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3IqLCBkb3VibGUsIGRvdWJsZSn2ATxtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3I6OnNldFBoYXNlKGRvdWJsZSwgdW5zaWduZWQgbG9uZyn3AZ4CZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dm9pZCAobWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yOjoqKShkb3VibGUsIHVuc2lnbmVkIGxvbmcpLCB2b2lkLCBtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3IqLCBkb3VibGUsIHVuc2lnbmVkIGxvbmc+OjppbnZva2Uodm9pZCAobWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yOjoqIGNvbnN0JikoZG91YmxlLCB1bnNpZ25lZCBsb25nKSwgbWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yKiwgZG91YmxlLCB1bnNpZ25lZCBsb25nKfgBZW1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvcjo6c2V0UGhhc2VzKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiBjb25zdCYp+QG4A2Vtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvcjo6Kikoc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+IGNvbnN0JiksIHZvaWQsIG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvciosIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiBjb25zdCY+OjppbnZva2Uodm9pZCAobWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yOjoqIGNvbnN0Jikoc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+IGNvbnN0JiksIG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvciosIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiop+gE0bWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yOjpnZXRQaGFzZSh1bnNpZ25lZCBsb25nKfsBhAJlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvcjo6KikodW5zaWduZWQgbG9uZyksIGRvdWJsZSwgbWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yKiwgdW5zaWduZWQgbG9uZz46Omludm9rZShkb3VibGUgKG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvcjo6KiBjb25zdCYpKHVuc2lnbmVkIGxvbmcpLCBtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3IqLCB1bnNpZ25lZCBsb25nKfwBI21heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvcjo6c2l6ZSgp/QHhAWVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHVuc2lnbmVkIGxvbmcgKG1heGlBc3luY0t1cmFtb3RvT3NjaWxsYXRvcjo6KikoKSwgdW5zaWduZWQgbG9uZywgbWF4aUFzeW5jS3VyYW1vdG9Pc2NpbGxhdG9yKj46Omludm9rZSh1bnNpZ25lZCBsb25nIChtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3I6OiogY29uc3QmKSgpLCBtYXhpQXN5bmNLdXJhbW90b09zY2lsbGF0b3IqKf4BlQF2b2lkIGNvbnN0KiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6Z2V0QWN0dWFsVHlwZTxzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4gPihzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4qKf8BjwF2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4gPihzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4qKYACkQFlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4qPjo6aW52b2tlKHN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPiogKCopKCkpgQKJAXN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPiogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4gPigpggJHc3RkOjpfXzI6OnZlY3RvcjxpbnQsIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50PiA+OjpwdXNoX2JhY2soaW50IGNvbnN0JimDAr8CZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dm9pZCAoc3RkOjpfXzI6OnZlY3RvcjxpbnQsIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50PiA+OjoqKShpbnQgY29uc3QmKSwgdm9pZCwgc3RkOjpfXzI6OnZlY3RvcjxpbnQsIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50PiA+KiwgaW50IGNvbnN0Jj46Omludm9rZSh2b2lkIChzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID46OiogY29uc3QmKShpbnQgY29uc3QmKSwgc3RkOjpfXzI6OnZlY3RvcjxpbnQsIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50PiA+KiwgaW50KYQCU3N0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPjo6cmVzaXplKHVuc2lnbmVkIGxvbmcsIGludCBjb25zdCYphQL7AmVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKHN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPjo6KikodW5zaWduZWQgbG9uZywgaW50IGNvbnN0JiksIHZvaWQsIHN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPiosIHVuc2lnbmVkIGxvbmcsIGludCBjb25zdCY+OjppbnZva2Uodm9pZCAoc3RkOjpfXzI6OnZlY3RvcjxpbnQsIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50PiA+OjoqIGNvbnN0JikodW5zaWduZWQgbG9uZywgaW50IGNvbnN0JiksIHN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPiosIHVuc2lnbmVkIGxvbmcsIGludCmGAj5zdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID46OnNpemUoKSBjb25zdIcCzQJlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx1bnNpZ25lZCBsb25nIChzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID46OiopKCkgY29uc3QsIHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPiBjb25zdCo+OjppbnZva2UodW5zaWduZWQgbG9uZyAoc3RkOjpfXzI6OnZlY3RvcjxpbnQsIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50PiA+OjoqIGNvbnN0JikoKSBjb25zdCwgc3RkOjpfXzI6OnZlY3RvcjxpbnQsIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50PiA+IGNvbnN0KimIAqIBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlZlY3RvckFjY2VzczxzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4gPjo6Z2V0KHN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPiBjb25zdCYsIHVuc2lnbmVkIGxvbmcpiQKDA2Vtc2NyaXB0ZW46OmludGVybmFsOjpGdW5jdGlvbkludm9rZXI8ZW1zY3JpcHRlbjo6dmFsICgqKShzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4gY29uc3QmLCB1bnNpZ25lZCBsb25nKSwgZW1zY3JpcHRlbjo6dmFsLCBzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4gY29uc3QmLCB1bnNpZ25lZCBsb25nPjo6aW52b2tlKGVtc2NyaXB0ZW46OnZhbCAoKiopKHN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPiBjb25zdCYsIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4qLCB1bnNpZ25lZCBsb25nKYoCqAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6VmVjdG9yQWNjZXNzPHN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPiA+OjpzZXQoc3RkOjpfXzI6OnZlY3RvcjxpbnQsIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50PiA+JiwgdW5zaWduZWQgbG9uZywgaW50IGNvbnN0JimLAvkCZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkZ1bmN0aW9uSW52b2tlcjxib29sICgqKShzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID4mLCB1bnNpZ25lZCBsb25nLCBpbnQgY29uc3QmKSwgYm9vbCwgc3RkOjpfXzI6OnZlY3RvcjxpbnQsIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50PiA+JiwgdW5zaWduZWQgbG9uZywgaW50IGNvbnN0Jj46Omludm9rZShib29sICgqKikoc3RkOjpfXzI6OnZlY3RvcjxpbnQsIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50PiA+JiwgdW5zaWduZWQgbG9uZywgaW50IGNvbnN0JiksIHN0ZDo6X18yOjp2ZWN0b3I8aW50LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludD4gPiosIHVuc2lnbmVkIGxvbmcsIGludCmMAqEBdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8c3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+ID4oc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+KimNApsBdm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8c3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+ID4oc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+KimOAp0BZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8c3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+Kj46Omludm9rZShzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4qICgqKSgpKY8ClQFzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4qIGVtc2NyaXB0ZW46OmludGVybmFsOjpvcGVyYXRvcl9uZXc8c3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+ID4oKZACUHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPjo6cHVzaF9iYWNrKGRvdWJsZSBjb25zdCYpkQLjAmVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPjo6KikoZG91YmxlIGNvbnN0JiksIHZvaWQsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiosIGRvdWJsZSBjb25zdCY+OjppbnZva2Uodm9pZCAoc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+OjoqIGNvbnN0JikoZG91YmxlIGNvbnN0JiksIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiosIGRvdWJsZSmSAlxzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID46OnJlc2l6ZSh1bnNpZ25lZCBsb25nLCBkb3VibGUgY29uc3QmKZMCnwNlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID46OiopKHVuc2lnbmVkIGxvbmcsIGRvdWJsZSBjb25zdCYpLCB2b2lkLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4qLCB1bnNpZ25lZCBsb25nLCBkb3VibGUgY29uc3QmPjo6aW52b2tlKHZvaWQgKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPjo6KiBjb25zdCYpKHVuc2lnbmVkIGxvbmcsIGRvdWJsZSBjb25zdCYpLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4qLCB1bnNpZ25lZCBsb25nLCBkb3VibGUplAJEc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+OjpzaXplKCkgY29uc3SVAuUCZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dW5zaWduZWQgbG9uZyAoc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+OjoqKSgpIGNvbnN0LCB1bnNpZ25lZCBsb25nLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4gY29uc3QqPjo6aW52b2tlKHVuc2lnbmVkIGxvbmcgKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPjo6KiBjb25zdCYpKCkgY29uc3QsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiBjb25zdCoplgKuAWVtc2NyaXB0ZW46OmludGVybmFsOjpWZWN0b3JBY2Nlc3M8c3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+ID46OmdldChzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4gY29uc3QmLCB1bnNpZ25lZCBsb25nKZcCmwNlbXNjcmlwdGVuOjppbnRlcm5hbDo6RnVuY3Rpb25JbnZva2VyPGVtc2NyaXB0ZW46OnZhbCAoKikoc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+IGNvbnN0JiwgdW5zaWduZWQgbG9uZyksIGVtc2NyaXB0ZW46OnZhbCwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+IGNvbnN0JiwgdW5zaWduZWQgbG9uZz46Omludm9rZShlbXNjcmlwdGVuOjp2YWwgKCoqKShzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4gY29uc3QmLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+KiwgdW5zaWduZWQgbG9uZymYArcBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlZlY3RvckFjY2VzczxzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4gPjo6c2V0KHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIHVuc2lnbmVkIGxvbmcsIGRvdWJsZSBjb25zdCYpmQKdA2Vtc2NyaXB0ZW46OmludGVybmFsOjpGdW5jdGlvbkludm9rZXI8Ym9vbCAoKikoc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+JiwgdW5zaWduZWQgbG9uZywgZG91YmxlIGNvbnN0JiksIGJvb2wsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIHVuc2lnbmVkIGxvbmcsIGRvdWJsZSBjb25zdCY+OjppbnZva2UoYm9vbCAoKiopKHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIHVuc2lnbmVkIGxvbmcsIGRvdWJsZSBjb25zdCYpLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4qLCB1bnNpZ25lZCBsb25nLCBkb3VibGUpmgKZAXZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4oc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKZsCkwF2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6dmVjdG9yPGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+KHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KimcApUBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8c3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPjo6aW52b2tlKHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiAoKikoKSmdAo0Bc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qIGVtc2NyaXB0ZW46OmludGVybmFsOjpvcGVyYXRvcl9uZXc8c3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPigpngJKc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OnB1c2hfYmFjayhjaGFyIGNvbnN0JimfAssCZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dm9pZCAoc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OiopKGNoYXIgY29uc3QmKSwgdm9pZCwgc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBjaGFyIGNvbnN0Jj46Omludm9rZSh2b2lkIChzdGQ6Ol9fMjo6dmVjdG9yPGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6KiBjb25zdCYpKGNoYXIgY29uc3QmKSwgc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBjaGFyKaACVnN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpyZXNpemUodW5zaWduZWQgbG9uZywgY2hhciBjb25zdCYpoQKHA2Vtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjoqKSh1bnNpZ25lZCBsb25nLCBjaGFyIGNvbnN0JiksIHZvaWQsIHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiwgdW5zaWduZWQgbG9uZywgY2hhciBjb25zdCY+OjppbnZva2Uodm9pZCAoc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OiogY29uc3QmKSh1bnNpZ25lZCBsb25nLCBjaGFyIGNvbnN0JiksIHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiwgdW5zaWduZWQgbG9uZywgY2hhcimiAkBzdGQ6Ol9fMjo6dmVjdG9yPGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6c2l6ZSgpIGNvbnN0owLVAmVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHVuc2lnbmVkIGxvbmcgKHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjoqKSgpIGNvbnN0LCB1bnNpZ25lZCBsb25nLCBzdGQ6Ol9fMjo6dmVjdG9yPGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCo+OjppbnZva2UodW5zaWduZWQgbG9uZyAoc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OiogY29uc3QmKSgpIGNvbnN0LCBzdGQ6Ol9fMjo6dmVjdG9yPGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCoppAKmAWVtc2NyaXB0ZW46OmludGVybmFsOjpWZWN0b3JBY2Nlc3M8c3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPjo6Z2V0KHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JiwgdW5zaWduZWQgbG9uZymlAosDZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkZ1bmN0aW9uSW52b2tlcjxlbXNjcmlwdGVuOjp2YWwgKCopKHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JiwgdW5zaWduZWQgbG9uZyksIGVtc2NyaXB0ZW46OnZhbCwgc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmLCB1bnNpZ25lZCBsb25nPjo6aW52b2tlKGVtc2NyaXB0ZW46OnZhbCAoKiopKHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiwgdW5zaWduZWQgbG9uZymmAq0BZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlZlY3RvckFjY2VzczxzdGQ6Ol9fMjo6dmVjdG9yPGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+OjpzZXQoc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCB1bnNpZ25lZCBsb25nLCBjaGFyIGNvbnN0JimnAoUDZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkZ1bmN0aW9uSW52b2tlcjxib29sICgqKShzdGQ6Ol9fMjo6dmVjdG9yPGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYsIHVuc2lnbmVkIGxvbmcsIGNoYXIgY29uc3QmKSwgYm9vbCwgc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCB1bnNpZ25lZCBsb25nLCBjaGFyIGNvbnN0Jj46Omludm9rZShib29sICgqKikoc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCB1bnNpZ25lZCBsb25nLCBjaGFyIGNvbnN0JiksIHN0ZDo6X18yOjp2ZWN0b3I8Y2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiwgdW5zaWduZWQgbG9uZywgY2hhcimoAr0Bdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8c3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gPihzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiopqQK3AXZvaWQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OnJhd19kZXN0cnVjdG9yPHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+ID4oc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4qKaoCuQFlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPio+OjppbnZva2Uoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4qICgqKSgpKasCsQFzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiA+KCmsAmVzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6cHVzaF9iYWNrKHVuc2lnbmVkIGNoYXIgY29uc3QmKa0CtwNlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6KikodW5zaWduZWQgY2hhciBjb25zdCYpLCB2b2lkLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiosIHVuc2lnbmVkIGNoYXIgY29uc3QmPjo6aW52b2tlKHZvaWQgKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjoqIGNvbnN0JikodW5zaWduZWQgY2hhciBjb25zdCYpLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiosIHVuc2lnbmVkIGNoYXIprgJxc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OnJlc2l6ZSh1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyIGNvbnN0JimvAvMDZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dm9pZCAoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OiopKHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGNoYXIgY29uc3QmKSwgdm9pZCwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4qLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyIGNvbnN0Jj46Omludm9rZSh2b2lkIChzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6KiBjb25zdCYpKHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGNoYXIgY29uc3QmKSwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4qLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyKbACUnN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpzaXplKCkgY29uc3SxAp0DZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dW5zaWduZWQgbG9uZyAoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OiopKCkgY29uc3QsIHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Kj46Omludm9rZSh1bnNpZ25lZCBsb25nIChzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6KiBjb25zdCYpKCkgY29uc3QsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0KimyAsoBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlZlY3RvckFjY2VzczxzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiA+OjpnZXQoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCB1bnNpZ25lZCBsb25nKbMC0wNlbXNjcmlwdGVuOjppbnRlcm5hbDo6RnVuY3Rpb25JbnZva2VyPGVtc2NyaXB0ZW46OnZhbCAoKikoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCB1bnNpZ25lZCBsb25nKSwgZW1zY3JpcHRlbjo6dmFsLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHVuc2lnbmVkIGxvbmc+OjppbnZva2UoZW1zY3JpcHRlbjo6dmFsICgqKikoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4qLCB1bnNpZ25lZCBsb25nKbQC2gFlbXNjcmlwdGVuOjppbnRlcm5hbDo6VmVjdG9yQWNjZXNzPHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+ID46OnNldChzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiYsIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGNoYXIgY29uc3QmKbUC8QNlbXNjcmlwdGVuOjppbnRlcm5hbDo6RnVuY3Rpb25JbnZva2VyPGJvb2wgKCopKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+JiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgY2hhciBjb25zdCYpLCBib29sLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiYsIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGNoYXIgY29uc3QmPjo6aW52b2tlKGJvb2wgKCoqKShzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiYsIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGNoYXIgY29uc3QmKSwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4qLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyKbYCnQF2b2lkIGNvbnN0KiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6Z2V0QWN0dWFsVHlwZTxzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+ID4oc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPioptwKXAXZvaWQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OnJhd19kZXN0cnVjdG9yPHN0ZDo6X18yOjp2ZWN0b3I8ZmxvYXQsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZmxvYXQ+ID4gPihzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+Kim4ApkBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8c3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPio+OjppbnZva2Uoc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiogKCopKCkpuQKRAXN0ZDo6X18yOjp2ZWN0b3I8ZmxvYXQsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZmxvYXQ+ID4qIGVtc2NyaXB0ZW46OmludGVybmFsOjpvcGVyYXRvcl9uZXc8c3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiA+KCm6Ak1zdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+OjpwdXNoX2JhY2soZmxvYXQgY29uc3QmKbsC1wJlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+OjoqKShmbG9hdCBjb25zdCYpLCB2b2lkLCBzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+KiwgZmxvYXQgY29uc3QmPjo6aW52b2tlKHZvaWQgKHN0ZDo6X18yOjp2ZWN0b3I8ZmxvYXQsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZmxvYXQ+ID46OiogY29uc3QmKShmbG9hdCBjb25zdCYpLCBzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+KiwgZmxvYXQpvAJZc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPjo6cmVzaXplKHVuc2lnbmVkIGxvbmcsIGZsb2F0IGNvbnN0Jim9ApMDZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dm9pZCAoc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPjo6KikodW5zaWduZWQgbG9uZywgZmxvYXQgY29uc3QmKSwgdm9pZCwgc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiosIHVuc2lnbmVkIGxvbmcsIGZsb2F0IGNvbnN0Jj46Omludm9rZSh2b2lkIChzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+OjoqIGNvbnN0JikodW5zaWduZWQgbG9uZywgZmxvYXQgY29uc3QmKSwgc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiosIHVuc2lnbmVkIGxvbmcsIGZsb2F0Kb4CQnN0ZDo6X18yOjp2ZWN0b3I8ZmxvYXQsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZmxvYXQ+ID46OnNpemUoKSBjb25zdL8C3QJlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx1bnNpZ25lZCBsb25nIChzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+OjoqKSgpIGNvbnN0LCB1bnNpZ25lZCBsb25nLCBzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+IGNvbnN0Kj46Omludm9rZSh1bnNpZ25lZCBsb25nIChzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+OjoqIGNvbnN0JikoKSBjb25zdCwgc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiBjb25zdCopwAKqAWVtc2NyaXB0ZW46OmludGVybmFsOjpWZWN0b3JBY2Nlc3M8c3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiA+OjpnZXQoc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiBjb25zdCYsIHVuc2lnbmVkIGxvbmcpwQKTA2Vtc2NyaXB0ZW46OmludGVybmFsOjpGdW5jdGlvbkludm9rZXI8ZW1zY3JpcHRlbjo6dmFsICgqKShzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+IGNvbnN0JiwgdW5zaWduZWQgbG9uZyksIGVtc2NyaXB0ZW46OnZhbCwgc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiBjb25zdCYsIHVuc2lnbmVkIGxvbmc+OjppbnZva2UoZW1zY3JpcHRlbjo6dmFsICgqKikoc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiBjb25zdCYsIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+KiwgdW5zaWduZWQgbG9uZynCArIBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlZlY3RvckFjY2VzczxzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+ID46OnNldChzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+JiwgdW5zaWduZWQgbG9uZywgZmxvYXQgY29uc3QmKcMCkQNlbXNjcmlwdGVuOjppbnRlcm5hbDo6RnVuY3Rpb25JbnZva2VyPGJvb2wgKCopKHN0ZDo6X18yOjp2ZWN0b3I8ZmxvYXQsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZmxvYXQ+ID4mLCB1bnNpZ25lZCBsb25nLCBmbG9hdCBjb25zdCYpLCBib29sLCBzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+JiwgdW5zaWduZWQgbG9uZywgZmxvYXQgY29uc3QmPjo6aW52b2tlKGJvb2wgKCoqKShzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+JiwgdW5zaWduZWQgbG9uZywgZmxvYXQgY29uc3QmKSwgc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiosIHVuc2lnbmVkIGxvbmcsIGZsb2F0KcQCYkVtc2NyaXB0ZW5CaW5kaW5nSW5pdGlhbGl6ZXJfbXlfbW9kdWxlX21heGliaXRzOjpFbXNjcmlwdGVuQmluZGluZ0luaXRpYWxpemVyX215X21vZHVsZV9tYXhpYml0cygpxQJEdm9pZCBjb25zdCogZW1zY3JpcHRlbjo6aW50ZXJuYWw6OmdldEFjdHVhbFR5cGU8bWF4aUJpdHM+KG1heGlCaXRzKinGAj52b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpQml0cz4obWF4aUJpdHMqKccCb2Vtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50Pjo6aW52b2tlKHVuc2lnbmVkIGludCAoKikodW5zaWduZWQgaW50KSwgdW5zaWduZWQgaW50KcgCG21heGlCaXRzOjpzaWcodW5zaWduZWQgaW50KckCmQFlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjx1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50Pjo6aW52b2tlKHVuc2lnbmVkIGludCAoKikodW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQpLCB1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCnKAihtYXhpQml0czo6YXQodW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQpywIpbWF4aUJpdHM6OnNobCh1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCnMAiltYXhpQml0czo6c2hyKHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50Kc0CwwFlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjx1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQ+OjppbnZva2UodW5zaWduZWQgaW50ICgqKSh1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50KSwgdW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCnOAjVtYXhpQml0czo6cih1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50Kc8CKm1heGlCaXRzOjpsYW5kKHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50KdACKW1heGlCaXRzOjpsb3IodW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQp0QIqbWF4aUJpdHM6Omx4b3IodW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQp0gIbbWF4aUJpdHM6Om5lZyh1bnNpZ25lZCBpbnQp0wIbbWF4aUJpdHM6OmluYyh1bnNpZ25lZCBpbnQp1AIbbWF4aUJpdHM6OmRlYyh1bnNpZ25lZCBpbnQp1QIpbWF4aUJpdHM6OmFkZCh1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCnWAiltYXhpQml0czo6c3ViKHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50KdcCKW1heGlCaXRzOjptdWwodW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQp2AIpbWF4aUJpdHM6OmRpdih1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCnZAihtYXhpQml0czo6Z3QodW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQp2gIobWF4aUJpdHM6Omx0KHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50KdsCKW1heGlCaXRzOjpndGUodW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQp3AIpbWF4aUJpdHM6Omx0ZSh1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCndAihtYXhpQml0czo6ZXEodW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQp3gJHZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8dW5zaWduZWQgaW50Pjo6aW52b2tlKHVuc2lnbmVkIGludCAoKikoKSnfAhFtYXhpQml0czo6bm9pc2UoKeACY2Vtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPGRvdWJsZSwgdW5zaWduZWQgaW50Pjo6aW52b2tlKGRvdWJsZSAoKikodW5zaWduZWQgaW50KSwgdW5zaWduZWQgaW50KeECIG1heGlCaXRzOjp0b1NpZ25hbCh1bnNpZ25lZCBpbnQp4gIkbWF4aUJpdHM6OnRvVHJpZ1NpZ25hbCh1bnNpZ25lZCBpbnQp4wJdZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8dW5zaWduZWQgaW50LCBkb3VibGU+OjppbnZva2UodW5zaWduZWQgaW50ICgqKShkb3VibGUpLCBkb3VibGUp5AIcbWF4aUJpdHM6OmZyb21TaWduYWwoZG91YmxlKeUCSnZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPG1heGlDb3VudGVyPihtYXhpQ291bnRlciop5gJEdm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8bWF4aUNvdW50ZXI+KG1heGlDb3VudGVyKinnAkdlbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxtYXhpQ291bnRlcio+OjppbnZva2UobWF4aUNvdW50ZXIqICgqKSgpKegCPm1heGlDb3VudGVyKiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6b3BlcmF0b3JfbmV3PG1heGlDb3VudGVyPigp6QIibWF4aUNvdW50ZXI6OmNvdW50KGRvdWJsZSwgZG91YmxlKeoCyAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlDb3VudGVyOjoqKShkb3VibGUsIGRvdWJsZSksIGRvdWJsZSwgbWF4aUNvdW50ZXIqLCBkb3VibGUsIGRvdWJsZT46Omludm9rZShkb3VibGUgKG1heGlDb3VudGVyOjoqIGNvbnN0JikoZG91YmxlLCBkb3VibGUpLCBtYXhpQ291bnRlciosIGRvdWJsZSwgZG91YmxlKesCTkVtc2NyaXB0ZW5CaW5kaW5nSW5pdGlhbGl6ZXJfbWF4aVZlcmI6OkVtc2NyaXB0ZW5CaW5kaW5nSW5pdGlhbGl6ZXJfbWF4aVZlcmIoKewCTnZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPG1heGlTYXRSZXZlcmI+KG1heGlTYXRSZXZlcmIqKe0CSHZvaWQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OnJhd19kZXN0cnVjdG9yPG1heGlTYXRSZXZlcmI+KG1heGlTYXRSZXZlcmIqKe4CS2Vtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPG1heGlTYXRSZXZlcmIqPjo6aW52b2tlKG1heGlTYXRSZXZlcmIqICgqKSgpKe8CQm1heGlTYXRSZXZlcmIqIGVtc2NyaXB0ZW46OmludGVybmFsOjpvcGVyYXRvcl9uZXc8bWF4aVNhdFJldmVyYj4oKfACsAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKG1heGlTYXRSZXZlcmI6OiopKGRvdWJsZSksIGRvdWJsZSwgbWF4aVNhdFJldmVyYiosIGRvdWJsZT46Omludm9rZShkb3VibGUgKG1heGlTYXRSZXZlcmI6OiogY29uc3QmKShkb3VibGUpLCBtYXhpU2F0UmV2ZXJiKiwgZG91YmxlKfECTHZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPG1heGlGcmVlVmVyYj4obWF4aUZyZWVWZXJiKinyAkZ2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpRnJlZVZlcmI+KG1heGlGcmVlVmVyYiop8wJJZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8bWF4aUZyZWVWZXJiKj46Omludm9rZShtYXhpRnJlZVZlcmIqICgqKSgpKfQCQG1heGlGcmVlVmVyYiogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxtYXhpRnJlZVZlcmI+KCn1AuwBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8ZG91YmxlIChtYXhpRnJlZVZlcmI6OiopKGRvdWJsZSwgZG91YmxlLCBkb3VibGUpLCBkb3VibGUsIG1heGlGcmVlVmVyYiosIGRvdWJsZSwgZG91YmxlLCBkb3VibGU+OjppbnZva2UoZG91YmxlIChtYXhpRnJlZVZlcmI6OiogY29uc3QmKShkb3VibGUsIGRvdWJsZSwgZG91YmxlKSwgbWF4aUZyZWVWZXJiKiwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSn2AlZFbXNjcmlwdGVuQmluZGluZ0luaXRpYWxpemVyX21heGlTcGVjdHJhbDo6RW1zY3JpcHRlbkJpbmRpbmdJbml0aWFsaXplcl9tYXhpU3BlY3RyYWwoKfcCUHZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPG1heGlGRlRBZGFwdG9yPihtYXhpRkZUQWRhcHRvciop+AJKdm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8bWF4aUZGVEFkYXB0b3I+KG1heGlGRlRBZGFwdG9yKin5Ak1lbXNjcmlwdGVuOjppbnRlcm5hbDo6SW52b2tlcjxtYXhpRkZUQWRhcHRvcio+OjppbnZva2UobWF4aUZGVEFkYXB0b3IqICgqKSgpKfoCRG1heGlGRlRBZGFwdG9yKiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6b3BlcmF0b3JfbmV3PG1heGlGRlRBZGFwdG9yPigp+wIkbWF4aUZGVEFkYXB0b3I6OnNldHVwKGludCwgaW50LCBpbnQp/ALKAWVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKG1heGlGRlRBZGFwdG9yOjoqKShpbnQsIGludCwgaW50KSwgdm9pZCwgbWF4aUZGVEFkYXB0b3IqLCBpbnQsIGludCwgaW50Pjo6aW52b2tlKHZvaWQgKG1heGlGRlRBZGFwdG9yOjoqIGNvbnN0JikoaW50LCBpbnQsIGludCksIG1heGlGRlRBZGFwdG9yKiwgaW50LCBpbnQsIGludCn9AjFtYXhpRkZUQWRhcHRvcjo6cHJvY2VzcyhmbG9hdCwgbWF4aUZGVDo6ZmZ0TW9kZXMp/gL2AWVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPGJvb2wgKG1heGlGRlRBZGFwdG9yOjoqKShmbG9hdCwgbWF4aUZGVDo6ZmZ0TW9kZXMpLCBib29sLCBtYXhpRkZUQWRhcHRvciosIGZsb2F0LCBtYXhpRkZUOjpmZnRNb2Rlcz46Omludm9rZShib29sIChtYXhpRkZUQWRhcHRvcjo6KiBjb25zdCYpKGZsb2F0LCBtYXhpRkZUOjpmZnRNb2RlcyksIG1heGlGRlRBZGFwdG9yKiwgZmxvYXQsIG1heGlGRlQ6OmZmdE1vZGVzKf8CIm1heGlGRlRBZGFwdG9yOjpzcGVjdHJhbEZsYXRuZXNzKCmAA5UBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8ZmxvYXQgKG1heGlGRlRBZGFwdG9yOjoqKSgpLCBmbG9hdCwgbWF4aUZGVEFkYXB0b3IqPjo6aW52b2tlKGZsb2F0IChtYXhpRkZUQWRhcHRvcjo6KiBjb25zdCYpKCksIG1heGlGRlRBZGFwdG9yKimBAyJtYXhpRkZUQWRhcHRvcjo6c3BlY3RyYWxDZW50cm9pZCgpggMobWF4aUZGVEFkYXB0b3I6OmdldE1hZ25pdHVkZXNBc0pTQXJyYXkoKYMDswFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxlbXNjcmlwdGVuOjp2YWwgKG1heGlGRlRBZGFwdG9yOjoqKSgpLCBlbXNjcmlwdGVuOjp2YWwsIG1heGlGRlRBZGFwdG9yKj46Omludm9rZShlbXNjcmlwdGVuOjp2YWwgKG1heGlGRlRBZGFwdG9yOjoqIGNvbnN0JikoKSwgbWF4aUZGVEFkYXB0b3IqKYQDKm1heGlGRlRBZGFwdG9yOjpnZXRNYWduaXR1ZGVzREJBc0pTQXJyYXkoKYUDJG1heGlGRlRBZGFwdG9yOjpnZXRQaGFzZXNBc0pTQXJyYXkoKYYDHG1heGlGRlRBZGFwdG9yOjpnZXROdW1CaW5zKCmHA48BZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8aW50IChtYXhpRkZUQWRhcHRvcjo6KikoKSwgaW50LCBtYXhpRkZUQWRhcHRvcio+OjppbnZva2UoaW50IChtYXhpRkZUQWRhcHRvcjo6KiBjb25zdCYpKCksIG1heGlGRlRBZGFwdG9yKimIAxxtYXhpRkZUQWRhcHRvcjo6Z2V0RkZUU2l6ZSgpiQMcbWF4aUZGVEFkYXB0b3I6OmdldEhvcFNpemUoKYoDH21heGlGRlRBZGFwdG9yOjpnZXRXaW5kb3dTaXplKCmLA1J2b2lkIGNvbnN0KiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6Z2V0QWN0dWFsVHlwZTxtYXhpSUZGVEFkYXB0b3I+KG1heGlJRkZUQWRhcHRvciopjANMdm9pZCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6cmF3X2Rlc3RydWN0b3I8bWF4aUlGRlRBZGFwdG9yPihtYXhpSUZGVEFkYXB0b3IqKY0DT2Vtc2NyaXB0ZW46OmludGVybmFsOjpJbnZva2VyPG1heGlJRkZUQWRhcHRvcio+OjppbnZva2UobWF4aUlGRlRBZGFwdG9yKiAoKikoKSmOA0ZtYXhpSUZGVEFkYXB0b3IqIGVtc2NyaXB0ZW46OmludGVybmFsOjpvcGVyYXRvcl9uZXc8bWF4aUlGRlRBZGFwdG9yPigpjwMlbWF4aUlGRlRBZGFwdG9yOjpzZXR1cChpbnQsIGludCwgaW50KZADzgFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChtYXhpSUZGVEFkYXB0b3I6OiopKGludCwgaW50LCBpbnQpLCB2b2lkLCBtYXhpSUZGVEFkYXB0b3IqLCBpbnQsIGludCwgaW50Pjo6aW52b2tlKHZvaWQgKG1heGlJRkZUQWRhcHRvcjo6KiBjb25zdCYpKGludCwgaW50LCBpbnQpLCBtYXhpSUZGVEFkYXB0b3IqLCBpbnQsIGludCwgaW50KZEDZG1heGlJRkZUQWRhcHRvcjo6cHJvY2Vzcyhkb3VibGUsIGVtc2NyaXB0ZW46OnZhbCBjb25zdCYsIGVtc2NyaXB0ZW46OnZhbCBjb25zdCYsIG1heGlJRkZUOjpmZnRNb2RlcymSA9UDZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8ZmxvYXQgKG1heGlJRkZUQWRhcHRvcjo6KikoZG91YmxlLCBlbXNjcmlwdGVuOjp2YWwgY29uc3QmLCBlbXNjcmlwdGVuOjp2YWwgY29uc3QmLCBtYXhpSUZGVDo6ZmZ0TW9kZXMpLCBmbG9hdCwgbWF4aUlGRlRBZGFwdG9yKiwgZG91YmxlLCBlbXNjcmlwdGVuOjp2YWwgY29uc3QmLCBlbXNjcmlwdGVuOjp2YWwgY29uc3QmLCBtYXhpSUZGVDo6ZmZ0TW9kZXM+OjppbnZva2UoZmxvYXQgKG1heGlJRkZUQWRhcHRvcjo6KiBjb25zdCYpKGRvdWJsZSwgZW1zY3JpcHRlbjo6dmFsIGNvbnN0JiwgZW1zY3JpcHRlbjo6dmFsIGNvbnN0JiwgbWF4aUlGRlQ6OmZmdE1vZGVzKSwgbWF4aUlGRlRBZGFwdG9yKiwgZG91YmxlLCBlbXNjcmlwdGVuOjppbnRlcm5hbDo6X0VNX1ZBTCosIGVtc2NyaXB0ZW46OmludGVybmFsOjpfRU1fVkFMKiwgbWF4aUlGRlQ6OmZmdE1vZGVzKZMDUnZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPG1heGlNRkNDQWRhcHRvcj4obWF4aU1GQ0NBZGFwdG9yKimUA0x2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3RvcjxtYXhpTUZDQ0FkYXB0b3I+KG1heGlNRkNDQWRhcHRvcioplQNPZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8bWF4aU1GQ0NBZGFwdG9yKj46Omludm9rZShtYXhpTUZDQ0FkYXB0b3IqICgqKSgpKZYDRm1heGlNRkNDQWRhcHRvciogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxtYXhpTUZDQ0FkYXB0b3I+KCmXA1BtYXhpTUZDQ0FkYXB0b3I6OnNldHVwKHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQsIGRvdWJsZSwgZG91YmxlKZgD+gJlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChtYXhpTUZDQ0FkYXB0b3I6OiopKHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQsIGRvdWJsZSwgZG91YmxlKSwgdm9pZCwgbWF4aU1GQ0NBZGFwdG9yKiwgdW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCwgZG91YmxlLCBkb3VibGU+OjppbnZva2Uodm9pZCAobWF4aU1GQ0NBZGFwdG9yOjoqIGNvbnN0JikodW5zaWduZWQgaW50LCB1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCwgZG91YmxlLCBkb3VibGUpLCBtYXhpTUZDQ0FkYXB0b3IqLCB1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50LCBkb3VibGUsIGRvdWJsZSmZAy1tYXhpTUZDQ0FkYXB0b3I6Om1mY2MoZW1zY3JpcHRlbjo6dmFsIGNvbnN0JimaA5sCZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8ZW1zY3JpcHRlbjo6dmFsIChtYXhpTUZDQ0FkYXB0b3I6OiopKGVtc2NyaXB0ZW46OnZhbCBjb25zdCYpLCBlbXNjcmlwdGVuOjp2YWwsIG1heGlNRkNDQWRhcHRvciosIGVtc2NyaXB0ZW46OnZhbCBjb25zdCY+OjppbnZva2UoZW1zY3JpcHRlbjo6dmFsIChtYXhpTUZDQ0FkYXB0b3I6OiogY29uc3QmKShlbXNjcmlwdGVuOjp2YWwgY29uc3QmKSwgbWF4aU1GQ0NBZGFwdG9yKiwgZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ol9FTV9WQUwqKZsDbnN0ZDo6X18yOjp2ZWN0b3I8ZmxvYXQsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZmxvYXQ+ID4gZW1zY3JpcHRlbjo6dmVjRnJvbUpTQXJyYXk8ZmxvYXQ+KGVtc2NyaXB0ZW46OnZhbCBjb25zdCYpnANZbWF4aU1GQ0NBbmFseXNlcjxkb3VibGU+OjpzZXR1cCh1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50LCBkb3VibGUsIGRvdWJsZSmdAytzdGQ6Ol9fMjo6X190aHJvd19sZW5ndGhfZXJyb3IoY2hhciBjb25zdCopngMsc3RkOjpsZW5ndGhfZXJyb3I6Omxlbmd0aF9lcnJvcihjaGFyIGNvbnN0KimfA15zdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID46Ol9fYXBwZW5kKHVuc2lnbmVkIGxvbmcsIGRvdWJsZSBjb25zdCYpoAM4bWF4aU1GQ0NBbmFseXNlcjxkb3VibGU+OjpjYWxjTWVsRmlsdGVyQmFuayhkb3VibGUsIGludCmhA1VzdGQ6Ol9fMjo6dmVjdG9yPGludCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQ+ID46Ol9fYXBwZW5kKHVuc2lnbmVkIGxvbmcsIGludCBjb25zdCYpogNYc3RkOjpfXzI6OnZlY3RvcjxjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fYXBwZW5kKHVuc2lnbmVkIGxvbmcsIGNoYXIgY29uc3QmKaMDc3N0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2FwcGVuZCh1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyIGNvbnN0JimkA1tzdGQ6Ol9fMjo6dmVjdG9yPGZsb2F0LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGZsb2F0PiA+OjpfX2FwcGVuZCh1bnNpZ25lZCBsb25nLCBmbG9hdCBjb25zdCYppQNvc3RkOjpfXzI6OnZlY3RvcjxtYXhpS3VyYW1vdG9Pc2NpbGxhdG9yLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPG1heGlLdXJhbW90b09zY2lsbGF0b3I+ID46Ol9fYXBwZW5kKHVuc2lnbmVkIGxvbmcppgNPc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+OjpfX2FwcGVuZCh1bnNpZ25lZCBsb25nKacDE21heGlGRlQ6On5tYXhpRkZUKCmoAyRfR0xPQkFMX19zdWJfSV9tYXhpbWlsaWFuLmVtYmluZC5jcHCpAxJtYXhpT3NjOjptYXhpT3NjKCmqAxBtYXhpT3NjOjpub2lzZSgpqwMXbWF4aU9zYzo6cGhhc29yKGRvdWJsZSmsAxltYXhpT3NjOjp0cmlhbmdsZShkb3VibGUprQNQbWF4aUVudmVsb3BlOjpsaW5lKGludCwgc3RkOjpfXzI6OnZlY3Rvcjxkb3VibGUsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZG91YmxlPiA+JimuAyJtYXhpRW52ZWxvcGU6OnRyaWdnZXIoaW50LCBkb3VibGUprwMebWF4aURlbGF5bGluZTo6bWF4aURlbGF5bGluZSgpsAMmbWF4aURlbGF5bGluZTo6ZGwoZG91YmxlLCBpbnQsIGRvdWJsZSmxAyJtYXhpRmlsdGVyOjpsb3Bhc3MoZG91YmxlLCBkb3VibGUpsgMpbWF4aUZpbHRlcjo6bG9yZXMoZG91YmxlLCBkb3VibGUsIGRvdWJsZSmzA1htYXhpTWl4OjpzdGVyZW8oZG91YmxlLCBzdGQ6Ol9fMjo6dmVjdG9yPGRvdWJsZSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxkb3VibGU+ID4mLCBkb3VibGUptANebWF4aU1peDo6cXVhZChkb3VibGUsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIGRvdWJsZSwgZG91YmxlKbUDa21heGlNaXg6OmFtYmlzb25pYyhkb3VibGUsIHN0ZDo6X18yOjp2ZWN0b3I8ZG91YmxlLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGRvdWJsZT4gPiYsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUptgMzbWF4aUR5bjo6Z2F0ZShkb3VibGUsIGRvdWJsZSwgbG9uZywgZG91YmxlLCBkb3VibGUptwM7bWF4aUR5bjo6Y29tcHJlc3Nvcihkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSm4AxltYXhpRHluOjpjb21wcmVzcyhkb3VibGUpuQMabWF4aUR5bjo6c2V0QXR0YWNrKGRvdWJsZSm6AxttYXhpRHluOjpzZXRSZWxlYXNlKGRvdWJsZSm7Ax1tYXhpRHluOjpzZXRUaHJlc2hvbGQoZG91YmxlKbwDGW1heGlEeW46OnNldFJhdGlvKGRvdWJsZSm9Ay5tYXhpRW52Ojphcihkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBsb25nLCBpbnQpvgNAbWF4aUVudjo6YWRzcihkb3VibGUsIGRvdWJsZSwgZG91YmxlLCBkb3VibGUsIGRvdWJsZSwgbG9uZywgaW50Kb8DGm1heGlFbnY6OmFkc3IoZG91YmxlLCBpbnQpwAMabWF4aUVudjo6c2V0QXR0YWNrKGRvdWJsZSnBAxttYXhpRW52OjpzZXRSZWxlYXNlKGRvdWJsZSnCAxttYXhpRW52OjpzZXRTdXN0YWluKGRvdWJsZSnDAxltYXhpRW52OjpzZXREZWNheShkb3VibGUpxAMSY29udmVydDo6bXRvZihpbnQpxQMabWF4aVRyaWdnZXI6Om1heGlUcmlnZ2VyKCnGAxhtYXhpRmlsdGVyOjptYXhpRmlsdGVyKCnHAyBtYXhpUmV2ZXJiQmFzZTo6bWF4aVJldmVyYkJhc2UoKcgDHm1heGlTYXRSZXZlcmI6Om1heGlTYXRSZXZlcmIoKckDG21heGlTYXRSZXZlcmI6OnBsYXkoZG91YmxlKcoDHG1heGlGcmVlVmVyYjo6bWF4aUZyZWVWZXJiKCnLAyptYXhpRnJlZVZlcmI6OnBsYXkoZG91YmxlLCBkb3VibGUsIGRvdWJsZSnMAxZtYXhpQ2xvY2s6Om1heGlDbG9jaygpzQMbbWF4aUNsb2NrOjpzZXRUZW1wbyhkb3VibGUpzgMTbWF4aUNsb2NrOjp0aWNrZXIoKc8DH21heGlDbG9jazo6c2V0VGlja3NQZXJCZWF0KGludCnQAx1tYXhpRkZUOjpzZXR1cChpbnQsIGludCwgaW50KdEDKm1heGlGRlQ6OnByb2Nlc3MoZmxvYXQsIG1heGlGRlQ6OmZmdE1vZGVzKdIDE21heGlGRlQ6Om1hZ3NUb0RCKCnTAxttYXhpRkZUOjpzcGVjdHJhbEZsYXRuZXNzKCnUAxttYXhpRkZUOjpzcGVjdHJhbENlbnRyb2lkKCnVAx5tYXhpSUZGVDo6c2V0dXAoaW50LCBpbnQsIGludCnWA5MBbWF4aUlGRlQ6OnByb2Nlc3Moc3RkOjpfXzI6OnZlY3RvcjxmbG9hdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxmbG9hdD4gPiYsIHN0ZDo6X18yOjp2ZWN0b3I8ZmxvYXQsIHN0ZDo6X18yOjphbGxvY2F0b3I8ZmxvYXQ+ID4mLCBtYXhpSUZGVDo6ZmZ0TW9kZXMp1wMuRkZUKGludCwgYm9vbCwgZmxvYXQqLCBmbG9hdCosIGZsb2F0KiwgZmxvYXQqKdgDJFJlYWxGRlQoaW50LCBmbG9hdCosIGZsb2F0KiwgZmxvYXQqKdkDIGZmdDo6Z2VuV2luZG93KGludCwgaW50LCBmbG9hdCop2gMPZmZ0OjpzZXR1cChpbnQp2wMLZmZ0Ojp+ZmZ0KCncAyFmZnQ6OmNhbGNGRlQoaW50LCBmbG9hdCosIGZsb2F0KindAzdmZnQ6OnBvd2VyU3BlY3RydW0oaW50LCBmbG9hdCosIGZsb2F0KiwgZmxvYXQqLCBmbG9hdCop3gMdZmZ0Ojpjb252VG9EQihmbG9hdCosIGZsb2F0KinfAztmZnQ6OmludmVyc2VGRlRDb21wbGV4KGludCwgZmxvYXQqLCBmbG9hdCosIGZsb2F0KiwgZmxvYXQqKeADPmZmdDo6aW52ZXJzZVBvd2VyU3BlY3RydW0oaW50LCBmbG9hdCosIGZsb2F0KiwgZmxvYXQqLCBmbG9hdCop4QM3bWF4aU1GQ0NBbmFseXNlcjxkb3VibGU+OjptZWxGaWx0ZXJBbmRMb2dTcXVhcmUoZmxvYXQqKeIDTEVtc2NyaXB0ZW5CaW5kaW5nSW5pdGlhbGl6ZXJfT3BlbjMwMzo6RW1zY3JpcHRlbkJpbmRpbmdJbml0aWFsaXplcl9PcGVuMzAzKCnjA1B2b2lkIGNvbnN0KiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6Z2V0QWN0dWFsVHlwZTxyb3NpYzo6T3BlbjMwMz4ocm9zaWM6Ok9wZW4zMDMqKeQDSnZvaWQgZW1zY3JpcHRlbjo6aW50ZXJuYWw6OnJhd19kZXN0cnVjdG9yPHJvc2ljOjpPcGVuMzAzPihyb3NpYzo6T3BlbjMwMyop5QNNZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8cm9zaWM6Ok9wZW4zMDMqPjo6aW52b2tlKHJvc2ljOjpPcGVuMzAzKiAoKikoKSnmA0Ryb3NpYzo6T3BlbjMwMyogZW1zY3JpcHRlbjo6aW50ZXJuYWw6Om9wZXJhdG9yX25ldzxyb3NpYzo6T3BlbjMwMz4oKecDG3Jvc2ljOjpPcGVuMzAzOjpnZXRTYW1wbGUoKegDmAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKHJvc2ljOjpPcGVuMzAzOjoqKSgpLCBkb3VibGUsIHJvc2ljOjpPcGVuMzAzKj46Omludm9rZShkb3VibGUgKHJvc2ljOjpPcGVuMzAzOjoqIGNvbnN0JikoKSwgcm9zaWM6Ok9wZW4zMDMqKekDrgFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChyb3NpYzo6T3BlbjMwMzo6KikoZG91YmxlKSwgdm9pZCwgcm9zaWM6Ok9wZW4zMDMqLCBkb3VibGU+OjppbnZva2Uodm9pZCAocm9zaWM6Ok9wZW4zMDM6OiogY29uc3QmKShkb3VibGUpLCByb3NpYzo6T3BlbjMwMyosIGRvdWJsZSnqAyNyb3NpYzo6T3BlbjMwMzo6c2V0V2F2ZWZvcm0oZG91YmxlKesDJHJvc2ljOjpPcGVuMzAzOjpzZXRSZXNvbmFuY2UoZG91YmxlKewDIHJvc2ljOjpPcGVuMzAzOjpzZXREZWNheShkb3VibGUp7QMlcm9zaWM6Ok9wZW4zMDM6OnNldEFtcFN1c3RhaW4oZG91YmxlKe4DLHJvc2ljOjpPcGVuMzAzOjpzZXRQcmVGaWx0ZXJIaWdocGFzcyhkb3VibGUp7wMrcm9zaWM6Ok9wZW4zMDM6OnNldEZlZWRiYWNrSGlnaHBhc3MoZG91YmxlKfADLXJvc2ljOjpPcGVuMzAzOjpzZXRQb3N0RmlsdGVySGlnaHBhc3MoZG91YmxlKfEDK3Jvc2ljOjpPcGVuMzAzOjpzZXRTcXVhcmVQaGFzZVNoaWZ0KGRvdWJsZSnyAydyb3NpYzo6T3BlbjMwMzo6c2V0Tm9ybWFsQXR0YWNrKGRvdWJsZSnzAydyb3NpYzo6T3BlbjMwMzo6c2V0QWNjZW50QXR0YWNrKGRvdWJsZSn0AyZyb3NpYzo6T3BlbjMwMzo6c2V0QWNjZW50RGVjYXkoZG91YmxlKfUDI3Jvc2ljOjpPcGVuMzAzOjpzZXRBbXBEZWNheShkb3VibGUp9gMlcm9zaWM6Ok9wZW4zMDM6OnNldEFtcFJlbGVhc2UoZG91YmxlKfcDugFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChyb3NpYzo6T3BlbjMwMzo6KikoaW50LCBib29sKSwgdm9pZCwgcm9zaWM6Ok9wZW4zMDMqLCBpbnQsIGJvb2w+OjppbnZva2Uodm9pZCAocm9zaWM6Ok9wZW4zMDM6OiogY29uc3QmKShpbnQsIGJvb2wpLCByb3NpYzo6T3BlbjMwMyosIGludCwgYm9vbCn4A7YBZW1zY3JpcHRlbjo6aW50ZXJuYWw6Ok1ldGhvZEludm9rZXI8dm9pZCAocm9zaWM6Ok9wZW4zMDM6OiopKGludCwgaW50KSwgdm9pZCwgcm9zaWM6Ok9wZW4zMDMqLCBpbnQsIGludD46Omludm9rZSh2b2lkIChyb3NpYzo6T3BlbjMwMzo6KiBjb25zdCYpKGludCwgaW50KSwgcm9zaWM6Ok9wZW4zMDMqLCBpbnQsIGludCn5Ax9yb3NpYzo6QWNpZFNlcXVlbmNlcjo6Z2V0Tm90ZSgp+gMzcm9zaWM6OlRlZUJlZUZpbHRlcjo6Y2FsY3VsYXRlQ29lZmZpY2llbnRzQXBwcm94NCgp+wMmcm9zaWM6OlRlZUJlZUZpbHRlcjo6Z2V0U2FtcGxlKGRvdWJsZSn8AyFfR0xPQkFMX19zdWJfSV9vcGVuMzAzLmVtYmluZC5jcHD9AyFyb3NpYzo6QWNpZFBhdHRlcm46OkFjaWRQYXR0ZXJuKCn+AyVyb3NpYzo6QWNpZFNlcXVlbmNlcjo6QWNpZFNlcXVlbmNlcigp/wMrcm9zaWM6OkFjaWRTZXF1ZW5jZXI6OnNldFNhbXBsZVJhdGUoZG91YmxlKYAEJnJvc2ljOjpBY2lkU2VxdWVuY2VyOjptb2RlV2FzQ2hhbmdlZCgpgQQdcm9zaWM6OkFjaWRTZXF1ZW5jZXI6OnN0YXJ0KCmCBBxyb3NpYzo6QWNpZFNlcXVlbmNlcjo6c3RvcCgpgwQncm9zaWM6OkFuYWxvZ0VudmVsb3BlOjpBbmFsb2dFbnZlbG9wZSgphAQocm9zaWM6OkFuYWxvZ0VudmVsb3BlOjpzZXRBdHRhY2soZG91YmxlKYUEJ3Jvc2ljOjpBbmFsb2dFbnZlbG9wZTo6c2V0RGVjYXkoZG91YmxlKYYEKXJvc2ljOjpBbmFsb2dFbnZlbG9wZTo6c2V0UmVsZWFzZShkb3VibGUphwQocm9zaWM6OkFuYWxvZ0VudmVsb3BlOjp+QW5hbG9nRW52ZWxvcGUoKYgELHJvc2ljOjpBbmFsb2dFbnZlbG9wZTo6c2V0U2FtcGxlUmF0ZShkb3VibGUpiQQqcm9zaWM6OkFuYWxvZ0VudmVsb3BlOjpzZXRUYXVTY2FsZShkb3VibGUpigQjcm9zaWM6OkFuYWxvZ0VudmVsb3BlOjpub3RlT24oYm9vbCmLBCByb3NpYzo6QW5hbG9nRW52ZWxvcGU6Om5vdGVPZmYoKYwEKXJvc2ljOjpCbGVuZE9zY2lsbGF0b3I6OkJsZW5kT3NjaWxsYXRvcigpjQQtcm9zaWM6OkJsZW5kT3NjaWxsYXRvcjo6c2V0U2FtcGxlUmF0ZShkb3VibGUpjgQpcm9zaWM6OkJsZW5kT3NjaWxsYXRvcjo6c2V0V2F2ZUZvcm0xKGludCmPBClyb3NpYzo6QmxlbmRPc2NpbGxhdG9yOjpzZXRXYXZlRm9ybTIoaW50KZAEJHJvc2ljOjpCbGVuZE9zY2lsbGF0b3I6OnJlc2V0UGhhc2UoKZEEKnJvc2ljOjpCbGVuZE9zY2lsbGF0b3I6On5CbGVuZE9zY2lsbGF0b3IoKZIEQXJvc2ljOjpCbGVuZE9zY2lsbGF0b3I6OnNldFdhdmVUYWJsZTEocm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZSopkwRBcm9zaWM6OkJsZW5kT3NjaWxsYXRvcjo6c2V0V2F2ZVRhYmxlMihyb3NpYzo6TWlwTWFwcGVkV2F2ZVRhYmxlKimUBCNyb3NpYzo6QmlxdWFkRmlsdGVyOjpCaXF1YWRGaWx0ZXIoKZUEIXJvc2ljOjpCaXF1YWRGaWx0ZXI6OmNhbGNDb2VmZnMoKZYEHHJvc2ljOjpCaXF1YWRGaWx0ZXI6OnJlc2V0KCmXBCpyb3NpYzo6QmlxdWFkRmlsdGVyOjpzZXRTYW1wbGVSYXRlKGRvdWJsZSmYBCFyb3NpYzo6QmlxdWFkRmlsdGVyOjpzZXRNb2RlKGludCmZBClyb3NpYzo6QmlxdWFkRmlsdGVyOjpzZXRGcmVxdWVuY3koZG91YmxlKZoEJHJvc2ljOjpCaXF1YWRGaWx0ZXI6OnNldEdhaW4oZG91YmxlKZsEKXJvc2ljOjpCaXF1YWRGaWx0ZXI6OnNldEJhbmR3aWR0aChkb3VibGUpnAQZcm9zaWM6OkNvbXBsZXg6OkNvbXBsZXgoKZ0EGnJvc2ljOjpDb21wbGV4Ojp+Q29tcGxleCgpngQlcm9zaWM6OkRlY2F5RW52ZWxvcGU6OkRlY2F5RW52ZWxvcGUoKZ8EJnJvc2ljOjpEZWNheUVudmVsb3BlOjp+RGVjYXlFbnZlbG9wZSgpoAQrcm9zaWM6OkRlY2F5RW52ZWxvcGU6OnNldFNhbXBsZVJhdGUoZG91YmxlKaEEMnJvc2ljOjpEZWNheUVudmVsb3BlOjpzZXREZWNheVRpbWVDb25zdGFudChkb3VibGUpogQrcm9zaWM6OkRlY2F5RW52ZWxvcGU6OnNldE5vcm1hbGl6ZVN1bShib29sKaMEH3Jvc2ljOjpEZWNheUVudmVsb3BlOjp0cmlnZ2VyKCmkBBpiaXRydjIoaW50LCBpbnQqLCBkb3VibGUqKaUEHmNmdGZzdWIoaW50LCBkb3VibGUqLCBkb3VibGUqKaYEHmNmdGJzdWIoaW50LCBkb3VibGUqLCBkb3VibGUqKacEHWNmdDFzdChpbnQsIGRvdWJsZSosIGRvdWJsZSopqAQiY2Z0bWRsKGludCwgaW50LCBkb3VibGUqLCBkb3VibGUqKakEJnJkZnQoaW50LCBpbnQsIGRvdWJsZSosIGludCosIGRvdWJsZSopqgQ7cm9zaWM6OkZvdXJpZXJUcmFuc2Zvcm1lclJhZGl4Mjo6Rm91cmllclRyYW5zZm9ybWVyUmFkaXgyKCmrBDJyb3NpYzo6Rm91cmllclRyYW5zZm9ybWVyUmFkaXgyOjpzZXRCbG9ja1NpemUoaW50KawEPHJvc2ljOjpGb3VyaWVyVHJhbnNmb3JtZXJSYWRpeDI6On5Gb3VyaWVyVHJhbnNmb3JtZXJSYWRpeDIoKa0ETnJvc2ljOjpGb3VyaWVyVHJhbnNmb3JtZXJSYWRpeDI6OnRyYW5zZm9ybVJlYWxTaWduYWwoZG91YmxlKiwgcm9zaWM6OkNvbXBsZXgqKa4ERnJvc2ljOjpGb3VyaWVyVHJhbnNmb3JtZXJSYWRpeDI6OnRyYW5zZm9ybVJlYWxTaWduYWwoZG91YmxlKiwgZG91YmxlKimvBFVyb3NpYzo6Rm91cmllclRyYW5zZm9ybWVyUmFkaXgyOjp0cmFuc2Zvcm1TeW1tZXRyaWNTcGVjdHJ1bShyb3NpYzo6Q29tcGxleCosIGRvdWJsZSopsARNcm9zaWM6OkZvdXJpZXJUcmFuc2Zvcm1lclJhZGl4Mjo6dHJhbnNmb3JtU3ltbWV0cmljU3BlY3RydW0oZG91YmxlKiwgZG91YmxlKimxBD1yb3NpYzo6RWxsaXB0aWNRdWFydGVyQmFuZEZpbHRlcjo6RWxsaXB0aWNRdWFydGVyQmFuZEZpbHRlcigpsgQpcm9zaWM6OkVsbGlwdGljUXVhcnRlckJhbmRGaWx0ZXI6OnJlc2V0KCmzBClyb3NpYzo6TGVha3lJbnRlZ3JhdG9yOjpMZWFreUludGVncmF0b3IoKbQEKnJvc2ljOjpMZWFreUludGVncmF0b3I6On5MZWFreUludGVncmF0b3IoKbUELXJvc2ljOjpMZWFreUludGVncmF0b3I6OnNldFNhbXBsZVJhdGUoZG91YmxlKbYEL3Jvc2ljOjpMZWFreUludGVncmF0b3I6OnNldFRpbWVDb25zdGFudChkb3VibGUptwQ9cm9zaWM6OkxlYWt5SW50ZWdyYXRvcjo6Z2V0Tm9ybWFsaXplcihkb3VibGUsIGRvdWJsZSwgZG91YmxlKbgEN3Jvc2ljOjpNaWRpTm90ZUV2ZW50OjpNaWRpTm90ZUV2ZW50KGludCwgaW50LCBpbnQsIGludCm5BCZyb3NpYzo6TWlkaU5vdGVFdmVudDo6fk1pZGlOb3RlRXZlbnQoKboEL3Jvc2ljOjpNaXBNYXBwZWRXYXZlVGFibGU6Ok1pcE1hcHBlZFdhdmVUYWJsZSgpuwQwcm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZTo6fk1pcE1hcHBlZFdhdmVUYWJsZSgpvAQrcm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZTo6Z2VuZXJhdGVNaXBNYXAoKb0EK3Jvc2ljOjpNaXBNYXBwZWRXYXZlVGFibGU6OnNldFdhdmVmb3JtKGludCm+BCtyb3NpYzo6TWlwTWFwcGVkV2F2ZVRhYmxlOjpyZW5kZXJXYXZlZm9ybSgpvwQucm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZTo6ZmlsbFdpdGhTcXVhcmUzMDMoKcAELnJvc2ljOjpNaXBNYXBwZWRXYXZlVGFibGU6OnNldFN5bW1ldHJ5KGRvdWJsZSnBBCVyb3NpYzo6T25lUG9sZUZpbHRlcjo6T25lUG9sZUZpbHRlcigpwgQicm9zaWM6Ok9uZVBvbGVGaWx0ZXI6OmNhbGNDb2VmZnMoKcMEK3Jvc2ljOjpPbmVQb2xlRmlsdGVyOjpzZXRTYW1wbGVSYXRlKGRvdWJsZSnEBCJyb3NpYzo6T25lUG9sZUZpbHRlcjo6c2V0TW9kZShpbnQpxQQncm9zaWM6Ok9uZVBvbGVGaWx0ZXI6OnNldEN1dG9mZihkb3VibGUpxgQdcm9zaWM6Ok9uZVBvbGVGaWx0ZXI6OnJlc2V0KCnHBBlyb3NpYzo6T3BlbjMwMzo6T3BlbjMwMygpyAQlcm9zaWM6Ok9wZW4zMDM6OnNldFNhbXBsZVJhdGUoZG91YmxlKckEIXJvc2ljOjpPcGVuMzAzOjpzZXRFbnZNb2QoZG91YmxlKcoEGnJvc2ljOjpPcGVuMzAzOjp+T3BlbjMwMygpywQhcm9zaWM6Ok9wZW4zMDM6OnNldEN1dG9mZihkb3VibGUpzAQhcm9zaWM6Ok9wZW4zMDM6OnNldEFjY2VudChkb3VibGUpzQQhcm9zaWM6Ok9wZW4zMDM6OnNldFZvbHVtZShkb3VibGUpzgQkcm9zaWM6Ok9wZW4zMDM6OnNldFNsaWRlVGltZShkb3VibGUpzwQkcm9zaWM6Ok9wZW4zMDM6OnNldFBpdGNoQmVuZChkb3VibGUp0AQgcm9zaWM6Ok9wZW4zMDM6Om5vdGVPbihpbnQsIGludCnRBHVzdGQ6Ol9fMjo6bGlzdDxyb3NpYzo6TWlkaU5vdGVFdmVudCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxyb3NpYzo6TWlkaU5vdGVFdmVudD4gPjo6cmVtb3ZlKHJvc2ljOjpNaWRpTm90ZUV2ZW50IGNvbnN0JinSBCZyb3NpYzo6T3BlbjMwMzo6dHJpZ2dlck5vdGUoaW50LCBib29sKdMEJnJvc2ljOjpPcGVuMzAzOjpzbGlkZVRvTm90ZShpbnQsIGJvb2wp1AQgcm9zaWM6Ok9wZW4zMDM6OnJlbGVhc2VOb3RlKGludCnVBCNyb3NpYzo6VGVlQmVlRmlsdGVyOjpUZWVCZWVGaWx0ZXIoKdYEHHJvc2ljOjpUZWVCZWVGaWx0ZXI6OnJlc2V0KCnXBCRyb3NpYzo6VGVlQmVlRmlsdGVyOjp+VGVlQmVlRmlsdGVyKCnYBCpyb3NpYzo6VGVlQmVlRmlsdGVyOjpzZXRTYW1wbGVSYXRlKGRvdWJsZSnZBA1fX2dldFR5cGVOYW1l2gQcc3RkOjp0eXBlX2luZm86Om5hbWUoKSBjb25zdNsEKl9fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlc9wEL2Vtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8dm9pZCwgdm9pZD46OmdldCgp3QQvZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxib29sLCB2b2lkPjo6Z2V0KCneBD92b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfaW50ZWdlcjxjaGFyPihjaGFyIGNvbnN0KinfBEZ2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfaW50ZWdlcjxzaWduZWQgY2hhcj4oY2hhciBjb25zdCop4ARIdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX2ludGVnZXI8dW5zaWduZWQgY2hhcj4oY2hhciBjb25zdCop4QRAdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX2ludGVnZXI8c2hvcnQ+KGNoYXIgY29uc3QqKeIESXZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9pbnRlZ2VyPHVuc2lnbmVkIHNob3J0PihjaGFyIGNvbnN0KinjBD52b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfaW50ZWdlcjxpbnQ+KGNoYXIgY29uc3QqKeQER3ZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9pbnRlZ2VyPHVuc2lnbmVkIGludD4oY2hhciBjb25zdCop5QQ/dm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX2ludGVnZXI8bG9uZz4oY2hhciBjb25zdCop5gRIdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX2ludGVnZXI8dW5zaWduZWQgbG9uZz4oY2hhciBjb25zdCop5wQ+dm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX2Zsb2F0PGZsb2F0PihjaGFyIGNvbnN0KinoBD92b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfZmxvYXQ8ZG91YmxlPihjaGFyIGNvbnN0KinpBIABZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCB2b2lkPjo6Z2V0KCnqBJsBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx1bnNpZ25lZCBjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+LCB2b2lkPjo6Z2V0KCnrBIkBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+LCB2b2lkPjo6Z2V0KCnsBIwBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIxNl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcjE2X3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXIxNl90PiA+LCB2b2lkPjo6Z2V0KCntBIwBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIzMl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcjMyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXIzMl90PiA+LCB2b2lkPjo6Z2V0KCnuBDplbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGVtc2NyaXB0ZW46OnZhbCwgdm9pZD46OmdldCgp7wRDdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX21lbW9yeV92aWV3PGNoYXI+KGNoYXIgY29uc3QqKfAESnZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9tZW1vcnlfdmlldzxzaWduZWQgY2hhcj4oY2hhciBjb25zdCop8QRMdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX21lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+KGNoYXIgY29uc3QqKfIERHZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9tZW1vcnlfdmlldzxzaG9ydD4oY2hhciBjb25zdCop8wRNdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX21lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PihjaGFyIGNvbnN0Kin0BEJ2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfbWVtb3J5X3ZpZXc8aW50PihjaGFyIGNvbnN0Kin1BEt2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfbWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PihjaGFyIGNvbnN0Kin2BEN2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfbWVtb3J5X3ZpZXc8bG9uZz4oY2hhciBjb25zdCop9wRMdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX21lbW9yeV92aWV3PHVuc2lnbmVkIGxvbmc+KGNoYXIgY29uc3QqKfgERHZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9tZW1vcnlfdmlldzxmbG9hdD4oY2hhciBjb25zdCop+QRFdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX21lbW9yeV92aWV3PGRvdWJsZT4oY2hhciBjb25zdCop+gQuZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHZvaWQ+OjpnZXQoKfsELmVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxib29sPjo6Z2V0KCn8BC9lbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGNoYXIsIHZvaWQ+OjpnZXQoKf0EJXN0ZDo6X18yOjpudW1lcmljX2xpbWl0czxjaGFyPjo6bWluKCn+BCVzdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8Y2hhcj46Om1heCgp/wQ2ZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxzaWduZWQgY2hhciwgdm9pZD46OmdldCgpgAUsc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPHNpZ25lZCBjaGFyPjo6bWluKCmBBSxzdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8c2lnbmVkIGNoYXI+OjptYXgoKYIFOGVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8dW5zaWduZWQgY2hhciwgdm9pZD46OmdldCgpgwUuc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPHVuc2lnbmVkIGNoYXI+OjptaW4oKYQFLnN0ZDo6X18yOjpudW1lcmljX2xpbWl0czx1bnNpZ25lZCBjaGFyPjo6bWF4KCmFBTBlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPHNob3J0LCB2b2lkPjo6Z2V0KCmGBSZzdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8c2hvcnQ+OjptaW4oKYcFJnN0ZDo6X18yOjpudW1lcmljX2xpbWl0czxzaG9ydD46Om1heCgpiAU5ZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDx1bnNpZ25lZCBzaG9ydCwgdm9pZD46OmdldCgpiQUvc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPHVuc2lnbmVkIHNob3J0Pjo6bWluKCmKBS9zdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8dW5zaWduZWQgc2hvcnQ+OjptYXgoKYsFLmVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8aW50LCB2b2lkPjo6Z2V0KCmMBSRzdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8aW50Pjo6bWluKCmNBSRzdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8aW50Pjo6bWF4KCmOBTdlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPHVuc2lnbmVkIGludCwgdm9pZD46OmdldCgpjwUtc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPHVuc2lnbmVkIGludD46Om1pbigpkAUtc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPHVuc2lnbmVkIGludD46Om1heCgpkQUvZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxsb25nLCB2b2lkPjo6Z2V0KCmSBSVzdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8bG9uZz46Om1pbigpkwUlc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPGxvbmc+OjptYXgoKZQFOGVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8dW5zaWduZWQgbG9uZywgdm9pZD46OmdldCgplQUuc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPHVuc2lnbmVkIGxvbmc+OjptaW4oKZYFLnN0ZDo6X18yOjpudW1lcmljX2xpbWl0czx1bnNpZ25lZCBsb25nPjo6bWF4KCmXBTBlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGZsb2F0LCB2b2lkPjo6Z2V0KCmYBTFlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGRvdWJsZSwgdm9pZD46OmdldCgpmQWAAWVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID46OmdldCgpmgWbAWVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx1bnNpZ25lZCBjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+ID46OmdldCgpmwWJAWVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+ID46OmdldCgpnAWMAWVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIxNl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcjE2X3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXIxNl90PiA+ID46OmdldCgpnQWMAWVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIzMl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcjMyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXIzMl90PiA+ID46OmdldCgpngU5ZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGVtc2NyaXB0ZW46OnZhbD46OmdldCgpnwVIZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPiwgdm9pZD46OmdldCgpoAVYKGFub255bW91cyBuYW1lc3BhY2UpOjpUeXBlZEFycmF5SW5kZXggKGFub255bW91cyBuYW1lc3BhY2UpOjpnZXRUeXBlZEFycmF5SW5kZXg8Y2hhcj4oKaEFT2Vtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2lnbmVkIGNoYXI+LCB2b2lkPjo6Z2V0KCmiBV8oYW5vbnltb3VzIG5hbWVzcGFjZSk6OlR5cGVkQXJyYXlJbmRleCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OmdldFR5cGVkQXJyYXlJbmRleDxzaWduZWQgY2hhcj4oKaMFUWVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4sIHZvaWQ+OjpnZXQoKaQFYShhbm9ueW1vdXMgbmFtZXNwYWNlKTo6VHlwZWRBcnJheUluZGV4IChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6Z2V0VHlwZWRBcnJheUluZGV4PHVuc2lnbmVkIGNoYXI+KCmlBUllbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0Piwgdm9pZD46OmdldCgppgVZKGFub255bW91cyBuYW1lc3BhY2UpOjpUeXBlZEFycmF5SW5kZXggKGFub255bW91cyBuYW1lc3BhY2UpOjpnZXRUeXBlZEFycmF5SW5kZXg8c2hvcnQ+KCmnBVJlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0Piwgdm9pZD46OmdldCgpqAViKGFub255bW91cyBuYW1lc3BhY2UpOjpUeXBlZEFycmF5SW5kZXggKGFub255bW91cyBuYW1lc3BhY2UpOjpnZXRUeXBlZEFycmF5SW5kZXg8dW5zaWduZWQgc2hvcnQ+KCmpBUdlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4sIHZvaWQ+OjpnZXQoKaoFVyhhbm9ueW1vdXMgbmFtZXNwYWNlKTo6VHlwZWRBcnJheUluZGV4IChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6Z2V0VHlwZWRBcnJheUluZGV4PGludD4oKasFUGVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50Piwgdm9pZD46OmdldCgprAVgKGFub255bW91cyBuYW1lc3BhY2UpOjpUeXBlZEFycmF5SW5kZXggKGFub255bW91cyBuYW1lc3BhY2UpOjpnZXRUeXBlZEFycmF5SW5kZXg8dW5zaWduZWQgaW50PigprQVIZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPiwgdm9pZD46OmdldCgprgVYKGFub255bW91cyBuYW1lc3BhY2UpOjpUeXBlZEFycmF5SW5kZXggKGFub255bW91cyBuYW1lc3BhY2UpOjpnZXRUeXBlZEFycmF5SW5kZXg8bG9uZz4oKa8FUWVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4sIHZvaWQ+OjpnZXQoKbAFYShhbm9ueW1vdXMgbmFtZXNwYWNlKTo6VHlwZWRBcnJheUluZGV4IChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6Z2V0VHlwZWRBcnJheUluZGV4PHVuc2lnbmVkIGxvbmc+KCmxBUllbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0Piwgdm9pZD46OmdldCgpsgVZKGFub255bW91cyBuYW1lc3BhY2UpOjpUeXBlZEFycmF5SW5kZXggKGFub255bW91cyBuYW1lc3BhY2UpOjpnZXRUeXBlZEFycmF5SW5kZXg8ZmxvYXQ+KCmzBUplbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4sIHZvaWQ+OjpnZXQoKbQFWihhbm9ueW1vdXMgbmFtZXNwYWNlKTo6VHlwZWRBcnJheUluZGV4IChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6Z2V0VHlwZWRBcnJheUluZGV4PGRvdWJsZT4oKbUFFV9fY3h4X2dsb2JhbF92YXJfaW5pdLYFbkVtc2NyaXB0ZW5CaW5kaW5nSW5pdGlhbGl6ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzOjpFbXNjcmlwdGVuQmluZGluZ0luaXRpYWxpemVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcygptwUuZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGNoYXI+OjpnZXQoKbgFNHN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czxjaGFyLCB0cnVlPjo6bWluKCm5BTRzdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8Y2hhciwgdHJ1ZT46Om1heCgpugU1ZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHNpZ25lZCBjaGFyPjo6Z2V0KCm7BTtzdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8c2lnbmVkIGNoYXIsIHRydWU+OjptaW4oKbwFO3N0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czxzaWduZWQgY2hhciwgdHJ1ZT46Om1heCgpvQU3ZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHVuc2lnbmVkIGNoYXI+OjpnZXQoKb4FPXN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czx1bnNpZ25lZCBjaGFyLCB0cnVlPjo6bWluKCm/BT1zdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8dW5zaWduZWQgY2hhciwgdHJ1ZT46Om1heCgpwAUvZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHNob3J0Pjo6Z2V0KCnBBTVzdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8c2hvcnQsIHRydWU+OjptaW4oKcIFNXN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czxzaG9ydCwgdHJ1ZT46Om1heCgpwwU4ZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHVuc2lnbmVkIHNob3J0Pjo6Z2V0KCnEBT5zdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8dW5zaWduZWQgc2hvcnQsIHRydWU+OjptaW4oKcUFPnN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czx1bnNpZ25lZCBzaG9ydCwgdHJ1ZT46Om1heCgpxgUtZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGludD46OmdldCgpxwUzc3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPGludCwgdHJ1ZT46Om1pbigpyAUzc3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPGludCwgdHJ1ZT46Om1heCgpyQU2ZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHVuc2lnbmVkIGludD46OmdldCgpygU8c3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPHVuc2lnbmVkIGludCwgdHJ1ZT46Om1pbigpywU8c3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPHVuc2lnbmVkIGludCwgdHJ1ZT46Om1heCgpzAUuZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGxvbmc+OjpnZXQoKc0FNHN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czxsb25nLCB0cnVlPjo6bWluKCnOBTRzdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8bG9uZywgdHJ1ZT46Om1heCgpzwU3ZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHVuc2lnbmVkIGxvbmc+OjpnZXQoKdAFPXN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czx1bnNpZ25lZCBsb25nLCB0cnVlPjo6bWluKCnRBT1zdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8dW5zaWduZWQgbG9uZywgdHJ1ZT46Om1heCgp0gUvZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGZsb2F0Pjo6Z2V0KCnTBTBlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZG91YmxlPjo6Z2V0KCnUBUhlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8Y2hhcj4gPjo6Z2V0KCnVBU9lbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2lnbmVkIGNoYXI+ID46OmdldCgp1gVRZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+ID46OmdldCgp1wVJZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0PiA+OjpnZXQoKdgFUmVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4gPjo6Z2V0KCnZBUdlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PiA+OjpnZXQoKdoFUGVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+ID46OmdldCgp2wVIZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmc+ID46OmdldCgp3AVRZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGxvbmc+ID46OmdldCgp3QVJZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PiA+OjpnZXQoKd4FSmVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxkb3VibGU+ID46OmdldCgp3wUXX0dMT0JBTF9fc3ViX0lfYmluZC5jcHDgBQRyYW5k4QUDbG9n4gUFbGRleHDjBQRzaW5o5AUDc2lu5QUEZXhwZuYFA2Nvc+cFBHNpbmboBQNleHDpBQ1fX0RPVUJMRV9CSVRT6gUEZmFic+sFB19fY29zZGbsBQpfX3JlbV9waW8y7QUHX19zaW5kZu4FA3Bvd+8FC19fcmVtX3BpbzJm8AUEc3FydPEFBGxvZ2byBQVleHBtMfMFD19fRE9VQkxFX0JJVFMuMfQFB19fZXhwbzL1BQR0YW5o9gUFX19zaW73BQVmbG9vcvgFEF9fcmVtX3BpbzJfbGFyZ2X5BQdzY2FsYm5m+gUFX19jb3P7BQVfX3RhbvwFA3Rhbv0FBWZhYnNm/gUFYXRhbmb/BQxfX0ZMT0FUX0JJVFOABgZhdGFuMmaBBg5fX0ZMT0FUX0JJVFMuMYIGBGNvc2aDBgxfX3N0ZGlvX3NlZWuEBhBfX2Vycm5vX2xvY2F0aW9uhQYFZHVtbXmGBg1fX3N0ZGlvX2Nsb3NlhwYNX19zdGRpb193cml0ZYgGB2lzZGlnaXSJBhNfX3ZmcHJpbnRmX2ludGVybmFsigYLcHJpbnRmX2NvcmWLBgNvdXSMBgZnZXRpbnSNBgdwb3BfYXJnjgYFZm10X3iPBgVmbXRfb5AGBWZtdF91kQYDcGFkkgYJdmZpcHJpbnRmkwYIZmlwcmludGaUBghfX3N0cmR1cJUGBm1lbWNocpYGBndjdG9tYpcGDl9fcHRocmVhZF9zZWxmmAYHd2NydG9tYpkGEl9fd2FzaV9zeXNjYWxsX3JldJoGBnN0cmNtcJsGG29wZXJhdG9yIG5ldyh1bnNpZ25lZCBsb25nKZwGHW9wZXJhdG9yIG5ld1tdKHVuc2lnbmVkIGxvbmcpnQYWb3BlcmF0b3IgZGVsZXRlKHZvaWQqKZ4GGG9wZXJhdG9yIGRlbGV0ZVtdKHZvaWQqKZ8GG3N0ZDo6ZXhjZXB0aW9uOjpleGNlcHRpb24oKaAGPXN0ZDo6X18yOjpfX2xpYmNwcF9yZWZzdHJpbmc6Ol9fbGliY3BwX3JlZnN0cmluZyhjaGFyIGNvbnN0KimhBn1zdGQ6Ol9fMjo6X19yZWZzdHJpbmdfaW1wOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6OmRhdGFfZnJvbV9yZXAoc3RkOjpfXzI6Ol9fcmVmc3RyaW5nX2ltcDo6KGFub255bW91cyBuYW1lc3BhY2UpOjpfUmVwX2Jhc2UqKaIGKnN0ZDo6bG9naWNfZXJyb3I6OmxvZ2ljX2Vycm9yKGNoYXIgY29uc3QqKaMGNXN0ZDo6X18yOjpfX2xpYmNwcF9yZWZzdHJpbmc6Ol9fdXNlc19yZWZjb3VudCgpIGNvbnN0pAZCc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2VfY29tbW9uPHRydWU+OjpfX3Rocm93X2xlbmd0aF9lcnJvcigpIGNvbnN0pQZjdm9pZCAoKnN0ZDo6X18yOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6Ol9fbGliY3BwX2F0b21pY19sb2FkPHZvaWQgKCopKCk+KHZvaWQgKCogY29uc3QqKSgpLCBpbnQpKSgppgYWc3RkOjpnZXRfbmV3X2hhbmRsZXIoKacGHHN0ZDo6ZXhjZXB0aW9uOjp+ZXhjZXB0aW9uKCmoBh5zdGQ6OmV4Y2VwdGlvbjo6fmV4Y2VwdGlvbigpLjGpBhxzdGQ6OmV4Y2VwdGlvbjo6d2hhdCgpIGNvbnN0qgYgc3RkOjpsb2dpY19lcnJvcjo6fmxvZ2ljX2Vycm9yKCmrBjNzdGQ6Ol9fMjo6X19saWJjcHBfcmVmc3RyaW5nOjp+X19saWJjcHBfcmVmc3RyaW5nKCmsBkxzdGQ6Ol9fMjo6X19yZWZzdHJpbmdfaW1wOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlcF9mcm9tX2RhdGEoY2hhciBjb25zdCoprQZSaW50IHN0ZDo6X18yOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6Ol9fbGliY3BwX2F0b21pY19hZGQ8aW50LCBpbnQ+KGludCosIGludCwgaW50Ka4GInN0ZDo6bG9naWNfZXJyb3I6On5sb2dpY19lcnJvcigpLjGvBh5zdGQ6OmxvZ2ljX2Vycm9yOjp3aGF0KCkgY29uc3SwBitzdGQ6Ol9fMjo6X19saWJjcHBfcmVmc3RyaW5nOjpjX3N0cigpIGNvbnN0sQYic3RkOjpsZW5ndGhfZXJyb3I6On5sZW5ndGhfZXJyb3IoKbIGHHN0ZDo6dHlwZV9pbmZvOjp+dHlwZV9pbmZvKCmzBjFfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvOjp+X19zaGltX3R5cGVfaW5mbygptAYrX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbzo6bm9vcDEoKSBjb25zdLUGK19fY3h4YWJpdjE6Ol9fc2hpbV90eXBlX2luZm86Om5vb3AyKCkgY29uc3S2Bj9fX2N4eGFiaXYxOjpfX2Z1bmRhbWVudGFsX3R5cGVfaW5mbzo6fl9fZnVuZGFtZW50YWxfdHlwZV9pbmZvKCm3BjFfX2N4eGFiaXYxOjpfX2VudW1fdHlwZV9pbmZvOjp+X19lbnVtX3R5cGVfaW5mbygpuAYzX19jeHhhYml2MTo6X19jbGFzc190eXBlX2luZm86On5fX2NsYXNzX3R5cGVfaW5mbygpuQY5X19jeHhhYml2MTo6X19zaV9jbGFzc190eXBlX2luZm86On5fX3NpX2NsYXNzX3R5cGVfaW5mbygpugY7X19jeHhhYml2MTo6X192bWlfY2xhc3NfdHlwZV9pbmZvOjp+X192bWlfY2xhc3NfdHlwZV9pbmZvKCm7BjdfX2N4eGFiaXYxOjpfX3BvaW50ZXJfdHlwZV9pbmZvOjp+X19wb2ludGVyX3R5cGVfaW5mbygpvAZhX19jeHhhYml2MTo6X19mdW5kYW1lbnRhbF90eXBlX2luZm86OmNhbl9jYXRjaChfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvIGNvbnN0Kiwgdm9pZComKSBjb25zdL0GPGlzX2VxdWFsKHN0ZDo6dHlwZV9pbmZvIGNvbnN0Kiwgc3RkOjp0eXBlX2luZm8gY29uc3QqLCBib29sKb4GN3N0ZDo6dHlwZV9pbmZvOjpvcGVyYXRvcj09KHN0ZDo6dHlwZV9pbmZvIGNvbnN0JikgY29uc3S/BlpfX2N4eGFiaXYxOjpfX2VudW1fdHlwZV9pbmZvOjpjYW5fY2F0Y2goX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCosIHZvaWQqJikgY29uc3TABltfX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6Y2FuX2NhdGNoKF9fY3h4YWJpdjE6Ol9fc2hpbV90eXBlX2luZm8gY29uc3QqLCB2b2lkKiYpIGNvbnN0wQYOX19keW5hbWljX2Nhc3TCBmtfX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6cHJvY2Vzc19mb3VuZF9iYXNlX2NsYXNzKF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkKiwgaW50KSBjb25zdMMGbl9fY3h4YWJpdjE6Ol9fY2xhc3NfdHlwZV9pbmZvOjpoYXNfdW5hbWJpZ3VvdXNfcHVibGljX2Jhc2UoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQqLCBpbnQpIGNvbnN0xAZxX19jeHhhYml2MTo6X19zaV9jbGFzc190eXBlX2luZm86Omhhc191bmFtYmlndW91c19wdWJsaWNfYmFzZShfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCosIGludCkgY29uc3TFBnNfX2N4eGFiaXYxOjpfX2Jhc2VfY2xhc3NfdHlwZV9pbmZvOjpoYXNfdW5hbWJpZ3VvdXNfcHVibGljX2Jhc2UoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQqLCBpbnQpIGNvbnN0xgZyX19jeHhhYml2MTo6X192bWlfY2xhc3NfdHlwZV9pbmZvOjpoYXNfdW5hbWJpZ3VvdXNfcHVibGljX2Jhc2UoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQqLCBpbnQpIGNvbnN0xwZbX19jeHhhYml2MTo6X19wYmFzZV90eXBlX2luZm86OmNhbl9jYXRjaChfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvIGNvbnN0Kiwgdm9pZComKSBjb25zdMgGXV9fY3h4YWJpdjE6Ol9fcG9pbnRlcl90eXBlX2luZm86OmNhbl9jYXRjaChfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvIGNvbnN0Kiwgdm9pZComKSBjb25zdMkGXF9fY3h4YWJpdjE6Ol9fcG9pbnRlcl90eXBlX2luZm86OmNhbl9jYXRjaF9uZXN0ZWQoX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCopIGNvbnN0ygZmX19jeHhhYml2MTo6X19wb2ludGVyX3RvX21lbWJlcl90eXBlX2luZm86OmNhbl9jYXRjaF9uZXN0ZWQoX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCopIGNvbnN0ywaDAV9fY3h4YWJpdjE6Ol9fY2xhc3NfdHlwZV9pbmZvOjpwcm9jZXNzX3N0YXRpY190eXBlX2Fib3ZlX2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCBpbnQpIGNvbnN0zAZ2X19jeHhhYml2MTo6X19jbGFzc190eXBlX2luZm86OnByb2Nlc3Nfc3RhdGljX3R5cGVfYmVsb3dfZHN0KF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkIGNvbnN0KiwgaW50KSBjb25zdM0Gc19fY3h4YWJpdjE6Ol9fdm1pX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TOBoEBX19jeHhhYml2MTo6X19iYXNlX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2Fib3ZlX2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN0zwZ0X19jeHhhYml2MTo6X19iYXNlX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TQBnJfX2N4eGFiaXYxOjpfX3NpX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TRBm9fX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TSBoABX19jeHhhYml2MTo6X192bWlfY2xhc3NfdHlwZV9pbmZvOjpzZWFyY2hfYWJvdmVfZHN0KF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkIGNvbnN0Kiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TTBn9fX2N4eGFiaXYxOjpfX3NpX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2Fib3ZlX2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN01AZ8X19jeHhhYml2MTo6X19jbGFzc190eXBlX2luZm86OnNlYXJjaF9hYm92ZV9kc3QoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQgY29uc3QqLCB2b2lkIGNvbnN0KiwgaW50LCBib29sKSBjb25zdNUGCGRsbWFsbG9j1gYGZGxmcmVl1wYEc2Jya9gGBGZtb2TZBgVsb2cxMNoGBmxvZzEwZtsGBGV4cDLcBgZzY2FsYm7dBgZtZW1jcHneBgZtZW1zZXTfBgdtZW1tb3Zl4AYJX190b3dyaXRl4QYJX19md3JpdGV44gYKX19sb2NrZmlsZeMGDF9fdW5sb2NrZmlsZeQGBnN0cmxlbuUGCXN0YWNrU2F2ZeYGDHN0YWNrUmVzdG9yZecGCnN0YWNrQWxsb2PoBghzZXRUaHJld+kGDGR5bkNhbGxfamlqaeoGFmxlZ2Fsc3R1YiRkeW5DYWxsX2ppamnrBhhsZWdhbGZ1bmMkX193YXNpX2ZkX3NlZWsCEwHpBgQABGZwdHIBATACATEDATIHEgEAD19fc3RhY2tfcG9pbnRlcg==';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary(wasmBinaryFile);
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

function instantiateSync(file, info) {
  var instance;
  var module;
  var binary;
  try {
    binary = getBinary(file);
    module = new WebAssembly.Module(binary);
    instance = new WebAssembly.Instance(module, info);
  } catch (e) {
    var str = e.toString();
    err('failed to compile wasm module: ' + str);
    if (str.indexOf('imported Memory') >= 0 ||
        str.indexOf('memory import') >= 0) {
      err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
    }
    throw e;
  }
  return [instance, module];
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  var result = instantiateSync(wasmBinaryFile, info);
  receiveInstance(result[0], result[1]);
  return Module['asm']; // exports were assigned here
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  var ExceptionInfoAttrs={DESTRUCTOR_OFFSET:0,REFCOUNT_OFFSET:4,TYPE_OFFSET:8,CAUGHT_OFFSET:12,RETHROWN_OFFSET:13,SIZE:16};
  function ___cxa_allocate_exception(size) {
      // Thrown object is prepended by exception metadata block
      return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE;
    }

  function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - ExceptionInfoAttrs.SIZE;
  
      this.set_type = function(type) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)]=type;
      };
  
      this.get_type = function() {
        return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)];
      };
  
      this.set_destructor = function(destructor) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)]=destructor;
      };
  
      this.get_destructor = function() {
        return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)];
      };
  
      this.set_refcount = function(refcount) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=refcount;
      };
  
      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)]=caught;
      };
  
      this.get_caught = function () {
        return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)] != 0;
      };
  
      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)]=rethrown;
      };
  
      this.get_rethrown = function () {
        return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)] != 0;
      };
  
      // Initialize native structure fields. Should be called once after allocated.
      this.init = function(type, destructor) {
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      }
  
      this.add_ref = function() {
        var value = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=value + 1;
      };
  
      // Returns true if last reference released.
      this.release_ref = function() {
        var prev = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=prev - 1;
        return prev === 1;
      };
    }
  
  var exceptionLast=0;
  
  var uncaughtExceptionCount=0;
  function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw ptr;
    }

  function getShiftFromSize(size) {
      switch (size) {
          case 1: return 0;
          case 2: return 1;
          case 4: return 2;
          case 8: return 3;
          default:
              throw new TypeError('Unknown type size: ' + size);
      }
    }
  
  function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
          codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }
  var embind_charCodes=undefined;
  function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
          ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
  
  var awaitingDependencies={};
  
  var registeredTypes={};
  
  var typeDependencies={};
  
  var char_0=48;
  
  var char_9=57;
  function makeLegalFunctionName(name) {
      if (undefined === name) {
          return '_unknown';
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, '$');
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
          return '_' + name;
      } else {
          return name;
      }
    }
  function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      /*jshint evil:true*/
      return new Function(
          "body",
          "return function " + name + "() {\n" +
          "    \"use strict\";" +
          "    return body.apply(this, arguments);\n" +
          "};\n"
      )(body);
    }
  function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function(message) {
          this.name = errorName;
          this.message = message;
  
          var stack = (new Error(message)).stack;
          if (stack !== undefined) {
              this.stack = this.toString() + '\n' +
                  stack.replace(/^Error(:[^\n]*)?\n/, '');
          }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
          if (this.message === undefined) {
              return this.name;
          } else {
              return this.name + ': ' + this.message;
          }
      };
  
      return errorClass;
    }
  var BindingError=undefined;
  function throwBindingError(message) {
      throw new BindingError(message);
    }
  
  var InternalError=undefined;
  function throwInternalError(message) {
      throw new InternalError(message);
    }
  function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function(type) {
          typeDependencies[type] = dependentTypes;
      });
  
      function onComplete(typeConverters) {
          var myTypeConverters = getTypeConverters(typeConverters);
          if (myTypeConverters.length !== myTypes.length) {
              throwInternalError('Mismatched type converter count');
          }
          for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
          }
      }
  
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function(dt, i) {
          if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
          } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                  awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(function() {
                  typeConverters[i] = registeredTypes[dt];
                  ++registered;
                  if (registered === unregisteredTypes.length) {
                      onComplete(typeConverters);
                  }
              });
          }
      });
      if (0 === unregisteredTypes.length) {
          onComplete(typeConverters);
      }
    }
  /** @param {Object=} options */
  function registerType(rawType, registeredInstance, options) {
      options = options || {};
  
      if (!('argPackAdvance' in registeredInstance)) {
          throw new TypeError('registerType registeredInstance requires argPackAdvance');
      }
  
      var name = registeredInstance.name;
      if (!rawType) {
          throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
          if (options.ignoreDuplicateRegistrations) {
              return;
          } else {
              throwBindingError("Cannot register type '" + name + "' twice");
          }
      }
  
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
  
      if (awaitingDependencies.hasOwnProperty(rawType)) {
          var callbacks = awaitingDependencies[rawType];
          delete awaitingDependencies[rawType];
          callbacks.forEach(function(cb) {
              cb();
          });
      }
    }
  function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(wt) {
              // ambiguous emscripten ABI: sometimes return values are
              // true or false, and sometimes integers (0 or 1)
              return !!wt;
          },
          'toWireType': function(destructors, o) {
              return o ? trueValue : falseValue;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': function(pointer) {
              // TODO: if heap is fixed (like in asm.js) this could be executed outside
              var heap;
              if (size === 1) {
                  heap = HEAP8;
              } else if (size === 2) {
                  heap = HEAP16;
              } else if (size === 4) {
                  heap = HEAP32;
              } else {
                  throw new TypeError("Unknown boolean type size: " + name);
              }
              return this['fromWireType'](heap[pointer >> shift]);
          },
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
          return false;
      }
      if (!(other instanceof ClassHandle)) {
          return false;
      }
  
      var leftClass = this.$$.ptrType.registeredClass;
      var left = this.$$.ptr;
      var rightClass = other.$$.ptrType.registeredClass;
      var right = other.$$.ptr;
  
      while (leftClass.baseClass) {
          left = leftClass.upcast(left);
          leftClass = leftClass.baseClass;
      }
  
      while (rightClass.baseClass) {
          right = rightClass.upcast(right);
          rightClass = rightClass.baseClass;
      }
  
      return leftClass === rightClass && left === right;
    }
  
  function shallowCopyInternalPointer(o) {
      return {
          count: o.count,
          deleteScheduled: o.deleteScheduled,
          preservePointerOnDelete: o.preservePointerOnDelete,
          ptr: o.ptr,
          ptrType: o.ptrType,
          smartPtr: o.smartPtr,
          smartPtrType: o.smartPtrType,
      };
    }
  
  function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(getInstanceTypeName(obj) + ' instance already deleted');
    }
  
  var finalizationGroup=false;
  
  function detachFinalizer(handle) {}
  
  function runDestructor($$) {
      if ($$.smartPtr) {
          $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
          $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    }
  function releaseClassHandle($$) {
      $$.count.value -= 1;
      var toDelete = 0 === $$.count.value;
      if (toDelete) {
          runDestructor($$);
      }
    }
  function attachFinalizer(handle) {
      if ('undefined' === typeof FinalizationGroup) {
          attachFinalizer = function (handle) { return handle; };
          return handle;
      }
      // If the running environment has a FinalizationGroup (see
      // https://github.com/tc39/proposal-weakrefs), then attach finalizers
      // for class handles.  We check for the presence of FinalizationGroup
      // at run-time, not build-time.
      finalizationGroup = new FinalizationGroup(function (iter) {
          for (var result = iter.next(); !result.done; result = iter.next()) {
              var $$ = result.value;
              if (!$$.ptr) {
                  console.warn('object already deleted: ' + $$.ptr);
              } else {
                  releaseClassHandle($$);
              }
          }
      });
      attachFinalizer = function(handle) {
          finalizationGroup.register(handle, handle.$$, handle.$$);
          return handle;
      };
      detachFinalizer = function(handle) {
          finalizationGroup.unregister(handle.$$);
      };
      return attachFinalizer(handle);
    }
  function ClassHandle_clone() {
      if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
      }
  
      if (this.$$.preservePointerOnDelete) {
          this.$$.count.value += 1;
          return this;
      } else {
          var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
              $$: {
                  value: shallowCopyInternalPointer(this.$$),
              }
          }));
  
          clone.$$.count.value += 1;
          clone.$$.deleteScheduled = false;
          return clone;
      }
    }
  
  function ClassHandle_delete() {
      if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
      }
  
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
          throwBindingError('Object already scheduled for deletion');
      }
  
      detachFinalizer(this);
      releaseClassHandle(this.$$);
  
      if (!this.$$.preservePointerOnDelete) {
          this.$$.smartPtr = undefined;
          this.$$.ptr = undefined;
      }
    }
  
  function ClassHandle_isDeleted() {
      return !this.$$.ptr;
    }
  
  var delayFunction=undefined;
  
  var deletionQueue=[];
  
  function flushPendingDeletes() {
      while (deletionQueue.length) {
          var obj = deletionQueue.pop();
          obj.$$.deleteScheduled = false;
          obj['delete']();
      }
    }
  function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
          throwBindingError('Object already scheduled for deletion');
      }
      deletionQueue.push(this);
      if (deletionQueue.length === 1 && delayFunction) {
          delayFunction(flushPendingDeletes);
      }
      this.$$.deleteScheduled = true;
      return this;
    }
  function init_ClassHandle() {
      ClassHandle.prototype['isAliasOf'] = ClassHandle_isAliasOf;
      ClassHandle.prototype['clone'] = ClassHandle_clone;
      ClassHandle.prototype['delete'] = ClassHandle_delete;
      ClassHandle.prototype['isDeleted'] = ClassHandle_isDeleted;
      ClassHandle.prototype['deleteLater'] = ClassHandle_deleteLater;
    }
  function ClassHandle() {
    }
  
  var registeredPointers={};
  
  function ensureOverloadTable(proto, methodName, humanName) {
      if (undefined === proto[methodName].overloadTable) {
          var prevFunc = proto[methodName];
          // Inject an overload resolver function that routes to the appropriate overload based on the number of arguments.
          proto[methodName] = function() {
              // TODO This check can be removed in -O3 level "unsafe" optimizations.
              if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                  throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
              }
              return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
          };
          // Move the previous function into the overload table.
          proto[methodName].overloadTable = [];
          proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    }
  /** @param {number=} numArguments */
  function exposePublicSymbol(name, value, numArguments) {
      if (Module.hasOwnProperty(name)) {
          if (undefined === numArguments || (undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments])) {
              throwBindingError("Cannot register public name '" + name + "' twice");
          }
  
          // We are exposing a function with the same name as an existing function. Create an overload table and a function selector
          // that routes between the two.
          ensureOverloadTable(Module, name, name);
          if (Module.hasOwnProperty(numArguments)) {
              throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
          }
          // Add the new function into the overload table.
          Module[name].overloadTable[numArguments] = value;
      }
      else {
          Module[name] = value;
          if (undefined !== numArguments) {
              Module[name].numArguments = numArguments;
          }
      }
    }
  
  /** @constructor */
  function RegisteredClass(
      name,
      constructor,
      instancePrototype,
      rawDestructor,
      baseClass,
      getActualType,
      upcast,
      downcast
    ) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }
  
  function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
          if (!ptrClass.upcast) {
              throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
          }
          ptr = ptrClass.upcast(ptr);
          ptrClass = ptrClass.baseClass;
      }
      return ptr;
    }
  function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
          if (this.isReference) {
              throwBindingError('null is not a valid ' + this.name);
          }
          return 0;
      }
  
      if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
          throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
  
  function genericPointerToWireType(destructors, handle) {
      var ptr;
      if (handle === null) {
          if (this.isReference) {
              throwBindingError('null is not a valid ' + this.name);
          }
  
          if (this.isSmartPointer) {
              ptr = this.rawConstructor();
              if (destructors !== null) {
                  destructors.push(this.rawDestructor, ptr);
              }
              return ptr;
          } else {
              return 0;
          }
      }
  
      if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
          throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
          throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
  
      if (this.isSmartPointer) {
          // TODO: this is not strictly true
          // We could support BY_EMVAL conversions from raw pointers to smart pointers
          // because the smart pointer can hold a reference to the handle
          if (undefined === handle.$$.smartPtr) {
              throwBindingError('Passing raw pointer to smart pointer is illegal');
          }
  
          switch (this.sharingPolicy) {
              case 0: // NONE
                  // no upcasting
                  if (handle.$$.smartPtrType === this) {
                      ptr = handle.$$.smartPtr;
                  } else {
                      throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
                  }
                  break;
  
              case 1: // INTRUSIVE
                  ptr = handle.$$.smartPtr;
                  break;
  
              case 2: // BY_EMVAL
                  if (handle.$$.smartPtrType === this) {
                      ptr = handle.$$.smartPtr;
                  } else {
                      var clonedHandle = handle['clone']();
                      ptr = this.rawShare(
                          ptr,
                          __emval_register(function() {
                              clonedHandle['delete']();
                          })
                      );
                      if (destructors !== null) {
                          destructors.push(this.rawDestructor, ptr);
                      }
                  }
                  break;
  
              default:
                  throwBindingError('Unsupporting sharing policy');
          }
      }
      return ptr;
    }
  
  function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
          if (this.isReference) {
              throwBindingError('null is not a valid ' + this.name);
          }
          return 0;
      }
  
      if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
          throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      if (handle.$$.ptrType.isConst) {
          throwBindingError('Cannot convert argument of type ' + handle.$$.ptrType.name + ' to parameter type ' + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
  
  function simpleReadValueFromPointer(pointer) {
      return this['fromWireType'](HEAPU32[pointer >> 2]);
    }
  
  function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
          ptr = this.rawGetPointee(ptr);
      }
      return ptr;
    }
  
  function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
          this.rawDestructor(ptr);
      }
    }
  
  function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
          handle['delete']();
      }
    }
  
  function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
          return ptr;
      }
      if (undefined === desiredClass.baseClass) {
          return null; // no conversion
      }
  
      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
          return null;
      }
      return desiredClass.downcast(rv);
    }
  
  function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length;
    }
  
  function getLiveInheritedInstances() {
      var rv = [];
      for (var k in registeredInstances) {
          if (registeredInstances.hasOwnProperty(k)) {
              rv.push(registeredInstances[k]);
          }
      }
      return rv;
    }
  
  function setDelayFunction(fn) {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
          delayFunction(flushPendingDeletes);
      }
    }
  function init_embind() {
      Module['getInheritedInstanceCount'] = getInheritedInstanceCount;
      Module['getLiveInheritedInstances'] = getLiveInheritedInstances;
      Module['flushPendingDeletes'] = flushPendingDeletes;
      Module['setDelayFunction'] = setDelayFunction;
    }
  var registeredInstances={};
  
  function getBasestPointer(class_, ptr) {
      if (ptr === undefined) {
          throwBindingError('ptr should not be undefined');
      }
      while (class_.baseClass) {
          ptr = class_.upcast(ptr);
          class_ = class_.baseClass;
      }
      return ptr;
    }
  function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    }
  
  function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
          throwInternalError('makeClassHandle requires ptr and ptrType');
      }
      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
          throwInternalError('Both smartPtrType and smartPtr must be specified');
      }
      record.count = { value: 1 };
      return attachFinalizer(Object.create(prototype, {
          $$: {
              value: record,
          },
      }));
    }
  function RegisteredPointer_fromWireType(ptr) {
      // ptr is a raw pointer (or a raw smartpointer)
  
      // rawPointer is a maybe-null raw pointer
      var rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
          this.destructor(ptr);
          return null;
      }
  
      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
      if (undefined !== registeredInstance) {
          // JS object has been neutered, time to repopulate it
          if (0 === registeredInstance.$$.count.value) {
              registeredInstance.$$.ptr = rawPointer;
              registeredInstance.$$.smartPtr = ptr;
              return registeredInstance['clone']();
          } else {
              // else, just increment reference count on existing object
              // it already has a reference to the smart pointer
              var rv = registeredInstance['clone']();
              this.destructor(ptr);
              return rv;
          }
      }
  
      function makeDefaultHandle() {
          if (this.isSmartPointer) {
              return makeClassHandle(this.registeredClass.instancePrototype, {
                  ptrType: this.pointeeType,
                  ptr: rawPointer,
                  smartPtrType: this,
                  smartPtr: ptr,
              });
          } else {
              return makeClassHandle(this.registeredClass.instancePrototype, {
                  ptrType: this,
                  ptr: ptr,
              });
          }
      }
  
      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
          return makeDefaultHandle.call(this);
      }
  
      var toType;
      if (this.isConst) {
          toType = registeredPointerRecord.constPointerType;
      } else {
          toType = registeredPointerRecord.pointerType;
      }
      var dp = downcastPointer(
          rawPointer,
          this.registeredClass,
          toType.registeredClass);
      if (dp === null) {
          return makeDefaultHandle.call(this);
      }
      if (this.isSmartPointer) {
          return makeClassHandle(toType.registeredClass.instancePrototype, {
              ptrType: toType,
              ptr: dp,
              smartPtrType: this,
              smartPtr: ptr,
          });
      } else {
          return makeClassHandle(toType.registeredClass.instancePrototype, {
              ptrType: toType,
              ptr: dp,
          });
      }
    }
  function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype['argPackAdvance'] = 8;
      RegisteredPointer.prototype['readValueFromPointer'] = simpleReadValueFromPointer;
      RegisteredPointer.prototype['deleteObject'] = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype['fromWireType'] = RegisteredPointer_fromWireType;
    }
  /** @constructor
      @param {*=} pointeeType,
      @param {*=} sharingPolicy,
      @param {*=} rawGetPointee,
      @param {*=} rawConstructor,
      @param {*=} rawShare,
      @param {*=} rawDestructor,
       */
  function RegisteredPointer(
      name,
      registeredClass,
      isReference,
      isConst,
  
      // smart pointer properties
      isSmartPointer,
      pointeeType,
      sharingPolicy,
      rawGetPointee,
      rawConstructor,
      rawShare,
      rawDestructor
    ) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
  
      // smart pointer properties
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
  
      if (!isSmartPointer && registeredClass.baseClass === undefined) {
          if (isConst) {
              this['toWireType'] = constNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
          } else {
              this['toWireType'] = nonConstNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
          }
      } else {
          this['toWireType'] = genericPointerToWireType;
          // Here we must leave this.destructorFunction undefined, since whether genericPointerToWireType returns
          // a pointer that needs to be freed up is runtime-dependent, and cannot be evaluated at registration time.
          // TODO: Create an alternative mechanism that allows removing the use of var destructors = []; array in
          //       craftInvokerFunction altogether.
      }
    }
  
  /** @param {number=} numArguments */
  function replacePublicSymbol(name, value, numArguments) {
      if (!Module.hasOwnProperty(name)) {
          throwInternalError('Replacing nonexistant public symbol');
      }
      // If there's an overload table for this symbol, replace the symbol in the overload table instead.
      if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
          Module[name].overloadTable[numArguments] = value;
      }
      else {
          Module[name] = value;
          Module[name].argCount = numArguments;
      }
    }
  
  function dynCallLegacy(sig, ptr, args) {
      if (args && args.length) {
        return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
      }
      return Module['dynCall_' + sig].call(null, ptr);
    }
  function dynCall(sig, ptr, args) {
      // Without WASM_BIGINT support we cannot directly call function with i64 as
      // part of thier signature, so we rely the dynCall functions generated by
      // wasm-emscripten-finalize
      if (sig.indexOf('j') != -1) {
        return dynCallLegacy(sig, ptr, args);
      }
      return wasmTable.get(ptr).apply(null, args)
    }
  function getDynCaller(sig, ptr) {
      assert(sig.indexOf('j') >= 0, 'getDynCaller should only be called with i64 sigs')
      var argCache = [];
      return function() {
        argCache.length = arguments.length;
        for (var i = 0; i < arguments.length; i++) {
          argCache[i] = arguments[i];
        }
        return dynCall(sig, ptr, argCache);
      };
    }
  function embind__requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);
  
      function makeDynCaller() {
        if (signature.indexOf('j') != -1) {
          return getDynCaller(signature, rawFunction);
        }
        return wasmTable.get(rawFunction);
      }
  
      var fp = makeDynCaller();
      if (typeof fp !== "function") {
          throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
      }
      return fp;
    }
  
  var UnboundTypeError=undefined;
  
  function getTypeName(type) {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    }
  function throwUnboundTypeError(message, types) {
      var unboundTypes = [];
      var seen = {};
      function visit(type) {
          if (seen[type]) {
              return;
          }
          if (registeredTypes[type]) {
              return;
          }
          if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
          }
          unboundTypes.push(type);
          seen[type] = true;
      }
      types.forEach(visit);
  
      throw new UnboundTypeError(message + ': ' + unboundTypes.map(getTypeName).join([', ']));
    }
  function __embind_register_class(
      rawType,
      rawPointerType,
      rawConstPointerType,
      baseClassRawType,
      getActualTypeSignature,
      getActualType,
      upcastSignature,
      upcast,
      downcastSignature,
      downcast,
      name,
      destructorSignature,
      rawDestructor
    ) {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
      if (upcast) {
          upcast = embind__requireFunction(upcastSignature, upcast);
      }
      if (downcast) {
          downcast = embind__requireFunction(downcastSignature, downcast);
      }
      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
  
      exposePublicSymbol(legalFunctionName, function() {
          // this code cannot run if baseClassRawType is zero
          throwUnboundTypeError('Cannot construct ' + name + ' due to unbound types', [baseClassRawType]);
      });
  
      whenDependentTypesAreResolved(
          [rawType, rawPointerType, rawConstPointerType],
          baseClassRawType ? [baseClassRawType] : [],
          function(base) {
              base = base[0];
  
              var baseClass;
              var basePrototype;
              if (baseClassRawType) {
                  baseClass = base.registeredClass;
                  basePrototype = baseClass.instancePrototype;
              } else {
                  basePrototype = ClassHandle.prototype;
              }
  
              var constructor = createNamedFunction(legalFunctionName, function() {
                  if (Object.getPrototypeOf(this) !== instancePrototype) {
                      throw new BindingError("Use 'new' to construct " + name);
                  }
                  if (undefined === registeredClass.constructor_body) {
                      throw new BindingError(name + " has no accessible constructor");
                  }
                  var body = registeredClass.constructor_body[arguments.length];
                  if (undefined === body) {
                      throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
                  }
                  return body.apply(this, arguments);
              });
  
              var instancePrototype = Object.create(basePrototype, {
                  constructor: { value: constructor },
              });
  
              constructor.prototype = instancePrototype;
  
              var registeredClass = new RegisteredClass(
                  name,
                  constructor,
                  instancePrototype,
                  rawDestructor,
                  baseClass,
                  getActualType,
                  upcast,
                  downcast);
  
              var referenceConverter = new RegisteredPointer(
                  name,
                  registeredClass,
                  true,
                  false,
                  false);
  
              var pointerConverter = new RegisteredPointer(
                  name + '*',
                  registeredClass,
                  false,
                  false,
                  false);
  
              var constPointerConverter = new RegisteredPointer(
                  name + ' const*',
                  registeredClass,
                  false,
                  true,
                  false);
  
              registeredPointers[rawType] = {
                  pointerType: pointerConverter,
                  constPointerType: constPointerConverter
              };
  
              replacePublicSymbol(legalFunctionName, constructor);
  
              return [referenceConverter, pointerConverter, constPointerConverter];
          }
      );
    }

  function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
          throw new TypeError('new_ called with constructor type ' + typeof(constructor) + " which is not a function");
      }
  
      /*
       * Previously, the following line was just:
  
       function dummy() {};
  
       * Unfortunately, Chrome was preserving 'dummy' as the object's name, even though at creation, the 'dummy' has the
       * correct constructor name.  Thus, objects created with IMVU.new would show up in the debugger as 'dummy', which
       * isn't very helpful.  Using IMVU.createNamedFunction addresses the issue.  Doublely-unfortunately, there's no way
       * to write a test for this behavior.  -NRD 2013.02.22
       */
      var dummy = createNamedFunction(constructor.name || 'unknownFunctionName', function(){});
      dummy.prototype = constructor.prototype;
      var obj = new dummy;
  
      var r = constructor.apply(obj, argumentList);
      return (r instanceof Object) ? r : obj;
    }
  
  function runDestructors(destructors) {
      while (destructors.length) {
          var ptr = destructors.pop();
          var del = destructors.pop();
          del(ptr);
      }
    }
  function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      // humanName: a human-readable string name for the function to be generated.
      // argTypes: An array that contains the embind type objects for all types in the function signature.
      //    argTypes[0] is the type object for the function return value.
      //    argTypes[1] is the type object for function this object/class type, or null if not crafting an invoker for a class method.
      //    argTypes[2...] are the actual function parameters.
      // classType: The embind type object for the class to be bound, or null if this is not a method of a class.
      // cppInvokerFunc: JS Function object to the C++-side function that interops into C++ code.
      // cppTargetFunc: Function pointer (an integer to FUNCTION_TABLE) to the target C++ function the cppInvokerFunc will end up calling.
      var argCount = argTypes.length;
  
      if (argCount < 2) {
          throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
      }
  
      var isClassMethodFunc = (argTypes[1] !== null && classType !== null);
  
      // Free functions with signature "void function()" do not need an invoker that marshalls between wire types.
  // TODO: This omits argument count check - enable only at -O3 or similar.
  //    if (ENABLE_UNSAFE_OPTS && argCount == 2 && argTypes[0].name == "void" && !isClassMethodFunc) {
  //       return FUNCTION_TABLE[fn];
  //    }
  
      // Determine if we need to use a dynamic stack to store the destructors for the function parameters.
      // TODO: Remove this completely once all function invokers are being dynamically generated.
      var needsDestructorStack = false;
  
      for(var i = 1; i < argTypes.length; ++i) { // Skip return value at index 0 - it's not deleted here.
          if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) { // The type does not define a destructor function - must use dynamic stack
              needsDestructorStack = true;
              break;
          }
      }
  
      var returns = (argTypes[0].name !== "void");
  
      var argsList = "";
      var argsListWired = "";
      for(var i = 0; i < argCount - 2; ++i) {
          argsList += (i!==0?", ":"")+"arg"+i;
          argsListWired += (i!==0?", ":"")+"arg"+i+"Wired";
      }
  
      var invokerFnBody =
          "return function "+makeLegalFunctionName(humanName)+"("+argsList+") {\n" +
          "if (arguments.length !== "+(argCount - 2)+") {\n" +
              "throwBindingError('function "+humanName+" called with ' + arguments.length + ' arguments, expected "+(argCount - 2)+" args!');\n" +
          "}\n";
  
      if (needsDestructorStack) {
          invokerFnBody +=
              "var destructors = [];\n";
      }
  
      var dtorStack = needsDestructorStack ? "destructors" : "null";
      var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
      var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
  
      if (isClassMethodFunc) {
          invokerFnBody += "var thisWired = classParam.toWireType("+dtorStack+", this);\n";
      }
  
      for(var i = 0; i < argCount - 2; ++i) {
          invokerFnBody += "var arg"+i+"Wired = argType"+i+".toWireType("+dtorStack+", arg"+i+"); // "+argTypes[i+2].name+"\n";
          args1.push("argType"+i);
          args2.push(argTypes[i+2]);
      }
  
      if (isClassMethodFunc) {
          argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
      }
  
      invokerFnBody +=
          (returns?"var rv = ":"") + "invoker(fn"+(argsListWired.length>0?", ":"")+argsListWired+");\n";
  
      if (needsDestructorStack) {
          invokerFnBody += "runDestructors(destructors);\n";
      } else {
          for(var i = isClassMethodFunc?1:2; i < argTypes.length; ++i) { // Skip return value at index 0 - it's not deleted here. Also skip class type if not a method.
              var paramName = (i === 1 ? "thisWired" : ("arg"+(i - 2)+"Wired"));
              if (argTypes[i].destructorFunction !== null) {
                  invokerFnBody += paramName+"_dtor("+paramName+"); // "+argTypes[i].name+"\n";
                  args1.push(paramName+"_dtor");
                  args2.push(argTypes[i].destructorFunction);
              }
          }
      }
  
      if (returns) {
          invokerFnBody += "var ret = retType.fromWireType(rv);\n" +
                           "return ret;\n";
      } else {
      }
      invokerFnBody += "}\n";
  
      args1.push(invokerFnBody);
  
      var invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction;
    }
  
  function heap32VectorToArray(count, firstElement) {
      var array = [];
      for (var i = 0; i < count; i++) {
          array.push(HEAP32[(firstElement >> 2) + i]);
      }
      return array;
    }
  function __embind_register_class_class_function(
      rawClassType,
      methodName,
      argCount,
      rawArgTypesAddr,
      invokerSignature,
      rawInvoker,
      fn
    ) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
          classType = classType[0];
          var humanName = classType.name + '.' + methodName;
  
          function unboundTypesHandler() {
              throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
          }
  
          var proto = classType.registeredClass.constructor;
          if (undefined === proto[methodName]) {
              // This is the first function to be registered with this name.
              unboundTypesHandler.argCount = argCount-1;
              proto[methodName] = unboundTypesHandler;
          } else {
              // There was an existing function with the same name registered. Set up a function overload routing table.
              ensureOverloadTable(proto, methodName, humanName);
              proto[methodName].overloadTable[argCount-1] = unboundTypesHandler;
          }
  
          whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              // Replace the initial unbound-types-handler stub with the proper function. If multiple overloads are registered,
              // the function handlers go into an overload table.
              var invokerArgsArray = [argTypes[0] /* return value */, null /* no class 'this'*/].concat(argTypes.slice(1) /* actual params */);
              var func = craftInvokerFunction(humanName, invokerArgsArray, null /* no class 'this'*/, rawInvoker, fn);
              if (undefined === proto[methodName].overloadTable) {
                  func.argCount = argCount-1;
                  proto[methodName] = func;
              } else {
                  proto[methodName].overloadTable[argCount-1] = func;
              }
              return [];
          });
          return [];
      });
    }

  function __embind_register_class_constructor(
      rawClassType,
      argCount,
      rawArgTypesAddr,
      invokerSignature,
      invoker,
      rawConstructor
    ) {
      assert(argCount > 0);
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      var args = [rawConstructor];
      var destructors = [];
  
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
          classType = classType[0];
          var humanName = 'constructor ' + classType.name;
  
          if (undefined === classType.registeredClass.constructor_body) {
              classType.registeredClass.constructor_body = [];
          }
          if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
              throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount-1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
          }
          classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
              throwUnboundTypeError('Cannot construct ' + classType.name + ' due to unbound types', rawArgTypes);
          };
  
          whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
                  if (arguments.length !== argCount - 1) {
                      throwBindingError(humanName + ' called with ' + arguments.length + ' arguments, expected ' + (argCount-1));
                  }
                  destructors.length = 0;
                  args.length = argCount;
                  for (var i = 1; i < argCount; ++i) {
                      args[i] = argTypes[i]['toWireType'](destructors, arguments[i - 1]);
                  }
  
                  var ptr = invoker.apply(null, args);
                  runDestructors(destructors);
  
                  return argTypes[0]['fromWireType'](ptr);
              };
              return [];
          });
          return [];
      });
    }

  function __embind_register_class_function(
      rawClassType,
      methodName,
      argCount,
      rawArgTypesAddr, // [ReturnType, ThisType, Args...]
      invokerSignature,
      rawInvoker,
      context,
      isPureVirtual
    ) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
  
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
          classType = classType[0];
          var humanName = classType.name + '.' + methodName;
  
          if (isPureVirtual) {
              classType.registeredClass.pureVirtualFunctions.push(methodName);
          }
  
          function unboundTypesHandler() {
              throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
          }
  
          var proto = classType.registeredClass.instancePrototype;
          var method = proto[methodName];
          if (undefined === method || (undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2)) {
              // This is the first overload to be registered, OR we are replacing a function in the base class with a function in the derived class.
              unboundTypesHandler.argCount = argCount - 2;
              unboundTypesHandler.className = classType.name;
              proto[methodName] = unboundTypesHandler;
          } else {
              // There was an existing function with the same name registered. Set up a function overload routing table.
              ensureOverloadTable(proto, methodName, humanName);
              proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
          }
  
          whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
  
              var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
  
              // Replace the initial unbound-handler-stub function with the appropriate member function, now that all types
              // are resolved. If multiple overloads are registered for this function, the function goes into an overload table.
              if (undefined === proto[methodName].overloadTable) {
                  // Set argCount in case an overload is registered later
                  memberFunction.argCount = argCount - 2;
                  proto[methodName] = memberFunction;
              } else {
                  proto[methodName].overloadTable[argCount - 2] = memberFunction;
              }
  
              return [];
          });
          return [];
      });
    }

  function validateThis(this_, classType, humanName) {
      if (!(this_ instanceof Object)) {
          throwBindingError(humanName + ' with invalid "this": ' + this_);
      }
      if (!(this_ instanceof classType.registeredClass.constructor)) {
          throwBindingError(humanName + ' incompatible with "this" of type ' + this_.constructor.name);
      }
      if (!this_.$$.ptr) {
          throwBindingError('cannot call emscripten binding method ' + humanName + ' on deleted object');
      }
  
      // todo: kill this
      return upcastPointer(
          this_.$$.ptr,
          this_.$$.ptrType.registeredClass,
          classType.registeredClass);
    }
  function __embind_register_class_property(
      classType,
      fieldName,
      getterReturnType,
      getterSignature,
      getter,
      getterContext,
      setterArgumentType,
      setterSignature,
      setter,
      setterContext
    ) {
      fieldName = readLatin1String(fieldName);
      getter = embind__requireFunction(getterSignature, getter);
  
      whenDependentTypesAreResolved([], [classType], function(classType) {
          classType = classType[0];
          var humanName = classType.name + '.' + fieldName;
          var desc = {
              get: function() {
                  throwUnboundTypeError('Cannot access ' + humanName + ' due to unbound types', [getterReturnType, setterArgumentType]);
              },
              enumerable: true,
              configurable: true
          };
          if (setter) {
              desc.set = function() {
                  throwUnboundTypeError('Cannot access ' + humanName + ' due to unbound types', [getterReturnType, setterArgumentType]);
              };
          } else {
              desc.set = function(v) {
                  throwBindingError(humanName + ' is a read-only property');
              };
          }
  
          Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
  
          whenDependentTypesAreResolved(
              [],
              (setter ? [getterReturnType, setterArgumentType] : [getterReturnType]),
          function(types) {
              var getterReturnType = types[0];
              var desc = {
                  get: function() {
                      var ptr = validateThis(this, classType, humanName + ' getter');
                      return getterReturnType['fromWireType'](getter(getterContext, ptr));
                  },
                  enumerable: true
              };
  
              if (setter) {
                  setter = embind__requireFunction(setterSignature, setter);
                  var setterArgumentType = types[1];
                  desc.set = function(v) {
                      var ptr = validateThis(this, classType, humanName + ' setter');
                      var destructors = [];
                      setter(setterContext, ptr, setterArgumentType['toWireType'](destructors, v));
                      runDestructors(destructors);
                  };
              }
  
              Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
              return [];
          });
  
          return [];
      });
    }

  var emval_free_list=[];
  
  var emval_handle_array=[{},{value:undefined},{value:null},{value:true},{value:false}];
  function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
          emval_handle_array[handle] = undefined;
          emval_free_list.push(handle);
      }
    }
  
  function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              ++count;
          }
      }
      return count;
    }
  
  function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              return emval_handle_array[i];
          }
      }
      return null;
    }
  function init_emval() {
      Module['count_emval_handles'] = count_emval_handles;
      Module['get_first_emval'] = get_first_emval;
    }
  function __emval_register(value) {
  
      switch(value){
        case undefined :{ return 1; }
        case null :{ return 2; }
        case true :{ return 3; }
        case false :{ return 4; }
        default:{
          var handle = emval_free_list.length ?
              emval_free_list.pop() :
              emval_handle_array.length;
  
          emval_handle_array[handle] = {refcount: 1, value: value};
          return handle;
          }
        }
    }
  function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(handle) {
              var rv = emval_handle_array[handle].value;
              __emval_decref(handle);
              return rv;
          },
          'toWireType': function(destructors, value) {
              return __emval_register(value);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: null, // This type does not need a destructor
  
          // TODO: do we need a deleteObject here?  write a test where
          // emval is passed into JS via an interface
      });
    }

  function enumReadValueFromPointer(name, shift, signed) {
      switch (shift) {
          case 0: return function(pointer) {
              var heap = signed ? HEAP8 : HEAPU8;
              return this['fromWireType'](heap[pointer]);
          };
          case 1: return function(pointer) {
              var heap = signed ? HEAP16 : HEAPU16;
              return this['fromWireType'](heap[pointer >> 1]);
          };
          case 2: return function(pointer) {
              var heap = signed ? HEAP32 : HEAPU32;
              return this['fromWireType'](heap[pointer >> 2]);
          };
          default:
              throw new TypeError("Unknown integer type: " + name);
      }
    }
  function __embind_register_enum(
      rawType,
      name,
      size,
      isSigned
    ) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
  
      function ctor() {
      }
      ctor.values = {};
  
      registerType(rawType, {
          name: name,
          constructor: ctor,
          'fromWireType': function(c) {
              return this.constructor.values[c];
          },
          'toWireType': function(destructors, c) {
              return c.value;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': enumReadValueFromPointer(name, shift, isSigned),
          destructorFunction: null,
      });
      exposePublicSymbol(name, ctor);
    }

  function requireRegisteredType(rawType, humanName) {
      var impl = registeredTypes[rawType];
      if (undefined === impl) {
          throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
      }
      return impl;
    }
  function __embind_register_enum_value(
      rawEnumType,
      name,
      enumValue
    ) {
      var enumType = requireRegisteredType(rawEnumType, 'enum');
      name = readLatin1String(name);
  
      var Enum = enumType.constructor;
  
      var Value = Object.create(enumType.constructor.prototype, {
          value: {value: enumValue},
          constructor: {value: createNamedFunction(enumType.name + '_' + name, function() {})},
      });
      Enum.values[enumValue] = Value;
      Enum[name] = Value;
    }

  function _embind_repr(v) {
      if (v === null) {
          return 'null';
      }
      var t = typeof v;
      if (t === 'object' || t === 'array' || t === 'function') {
          return v.toString();
      } else {
          return '' + v;
      }
    }
  
  function floatReadValueFromPointer(name, shift) {
      switch (shift) {
          case 2: return function(pointer) {
              return this['fromWireType'](HEAPF32[pointer >> 2]);
          };
          case 3: return function(pointer) {
              return this['fromWireType'](HEAPF64[pointer >> 3]);
          };
          default:
              throw new TypeError("Unknown float type: " + name);
      }
    }
  function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              return value;
          },
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following if() and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              return value;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': floatReadValueFromPointer(name, shift),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function integerReadValueFromPointer(name, shift, signed) {
      // integers are quite common, so generate very specialized functions
      switch (shift) {
          case 0: return signed ?
              function readS8FromPointer(pointer) { return HEAP8[pointer]; } :
              function readU8FromPointer(pointer) { return HEAPU8[pointer]; };
          case 1: return signed ?
              function readS16FromPointer(pointer) { return HEAP16[pointer >> 1]; } :
              function readU16FromPointer(pointer) { return HEAPU16[pointer >> 1]; };
          case 2: return signed ?
              function readS32FromPointer(pointer) { return HEAP32[pointer >> 2]; } :
              function readU32FromPointer(pointer) { return HEAPU32[pointer >> 2]; };
          default:
              throw new TypeError("Unknown integer type: " + name);
      }
    }
  function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) { // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come out as 'i32 -1'. Always treat those as max u32.
          maxRange = 4294967295;
      }
  
      var shift = getShiftFromSize(size);
  
      var fromWireType = function(value) {
          return value;
      };
  
      if (minRange === 0) {
          var bitshift = 32 - 8*size;
          fromWireType = function(value) {
              return (value << bitshift) >>> bitshift;
          };
      }
  
      var isUnsignedType = (name.indexOf('unsigned') != -1);
  
      registerType(primitiveType, {
          name: name,
          'fromWireType': fromWireType,
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following two if()s and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              if (value < minRange || value > maxRange) {
                  throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
              }
              return isUnsignedType ? (value >>> 0) : (value | 0);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
      ];
  
      var TA = typeMapping[dataTypeIndex];
  
      function decodeMemoryView(handle) {
          handle = handle >> 2;
          var heap = HEAPU32;
          var size = heap[handle]; // in elements
          var data = heap[handle + 1]; // byte offset into emscripten heap
          return new TA(buffer, data, size);
      }
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': decodeMemoryView,
          'argPackAdvance': 8,
          'readValueFromPointer': decodeMemoryView,
      }, {
          ignoreDuplicateRegistrations: true,
      });
    }

  function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8
      //process only std::string bindings with UTF8 support, in contrast to e.g. std::basic_string<unsigned char>
      = (name === "std::string");
  
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              var length = HEAPU32[value >> 2];
  
              var str;
              if (stdStringIsUTF8) {
                  var decodeStartPtr = value + 4;
                  // Looping here to support possible embedded '0' bytes
                  for (var i = 0; i <= length; ++i) {
                      var currentBytePtr = value + 4 + i;
                      if (i == length || HEAPU8[currentBytePtr] == 0) {
                          var maxRead = currentBytePtr - decodeStartPtr;
                          var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                          if (str === undefined) {
                              str = stringSegment;
                          } else {
                              str += String.fromCharCode(0);
                              str += stringSegment;
                          }
                          decodeStartPtr = currentBytePtr + 1;
                      }
                  }
              } else {
                  var a = new Array(length);
                  for (var i = 0; i < length; ++i) {
                      a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
                  }
                  str = a.join('');
              }
  
              _free(value);
  
              return str;
          },
          'toWireType': function(destructors, value) {
              if (value instanceof ArrayBuffer) {
                  value = new Uint8Array(value);
              }
  
              var getLength;
              var valueIsOfTypeString = (typeof value === 'string');
  
              if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                  throwBindingError('Cannot pass non-string to std::string');
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                  getLength = function() {return lengthBytesUTF8(value);};
              } else {
                  getLength = function() {return value.length;};
              }
  
              // assumes 4-byte alignment
              var length = getLength();
              var ptr = _malloc(4 + length + 1);
              HEAPU32[ptr >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                  stringToUTF8(value, ptr + 4, length + 1);
              } else {
                  if (valueIsOfTypeString) {
                      for (var i = 0; i < length; ++i) {
                          var charCode = value.charCodeAt(i);
                          if (charCode > 255) {
                              _free(ptr);
                              throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                          }
                          HEAPU8[ptr + 4 + i] = charCode;
                      }
                  } else {
                      for (var i = 0; i < length; ++i) {
                          HEAPU8[ptr + 4 + i] = value[i];
                      }
                  }
              }
  
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
      if (charSize === 2) {
          decodeString = UTF16ToString;
          encodeString = stringToUTF16;
          lengthBytesUTF = lengthBytesUTF16;
          getHeap = function() { return HEAPU16; };
          shift = 1;
      } else if (charSize === 4) {
          decodeString = UTF32ToString;
          encodeString = stringToUTF32;
          lengthBytesUTF = lengthBytesUTF32;
          getHeap = function() { return HEAPU32; };
          shift = 2;
      }
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              // Code mostly taken from _embind_register_std_string fromWireType
              var length = HEAPU32[value >> 2];
              var HEAP = getHeap();
              var str;
  
              var decodeStartPtr = value + 4;
              // Looping here to support possible embedded '0' bytes
              for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = value + 4 + i * charSize;
                  if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                      var maxReadBytes = currentBytePtr - decodeStartPtr;
                      var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                      if (str === undefined) {
                          str = stringSegment;
                      } else {
                          str += String.fromCharCode(0);
                          str += stringSegment;
                      }
                      decodeStartPtr = currentBytePtr + charSize;
                  }
              }
  
              _free(value);
  
              return str;
          },
          'toWireType': function(destructors, value) {
              if (!(typeof value === 'string')) {
                  throwBindingError('Cannot pass non-string to C++ string type ' + name);
              }
  
              // assumes 4-byte alignment
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              HEAPU32[ptr >> 2] = length >> shift;
  
              encodeString(value, ptr + 4, length + charSize);
  
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          isVoid: true, // void return values can be optimized out sometimes
          name: name,
          'argPackAdvance': 0,
          'fromWireType': function() {
              return undefined;
          },
          'toWireType': function(destructors, o) {
              // TODO: assert if anything else is given?
              return undefined;
          },
      });
    }

  function requireHandle(handle) {
      if (!handle) {
          throwBindingError('Cannot use deleted val. handle = ' + handle);
      }
      return emval_handle_array[handle].value;
    }
  function __emval_as(handle, returnType, destructorsRef) {
      handle = requireHandle(handle);
      returnType = requireRegisteredType(returnType, 'emval::as');
      var destructors = [];
      var rd = __emval_register(destructors);
      HEAP32[destructorsRef >> 2] = rd;
      return returnType['toWireType'](destructors, handle);
    }


  function __emval_get_property(handle, key) {
      handle = requireHandle(handle);
      key = requireHandle(key);
      return __emval_register(handle[key]);
    }

  function __emval_incref(handle) {
      if (handle > 4) {
          emval_handle_array[handle].refcount += 1;
      }
    }

  var emval_symbols={};
  function getStringOrSymbol(address) {
      var symbol = emval_symbols[address];
      if (symbol === undefined) {
          return readLatin1String(address);
      } else {
          return symbol;
      }
    }
  function __emval_new_cstring(v) {
      return __emval_register(getStringOrSymbol(v));
    }

  function __emval_run_destructors(handle) {
      var destructors = emval_handle_array[handle].value;
      runDestructors(destructors);
      __emval_decref(handle);
    }

  function __emval_take_value(type, argv) {
      type = requireRegisteredType(type, '_emval_take_value');
      var v = type['readValueFromPointer'](argv);
      return __emval_register(v);
    }

  function _abort() {
      abort();
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
  
      // Memory resize rules:
      // 1. When resizing, always produce a resized heap that is at least 16MB (to avoid tiny heap sizes receiving lots of repeated resizes at startup)
      // 2. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 3a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to 
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 3b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 4. Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 5. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit was set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      var minHeapSize = 16777216;
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for(var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    }

  function _exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      exit(status);
    }

  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        return low;
      }};
  function _fd_close(fd) {
      return 0;
    }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)]=num
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }
embind_init_charCodes();
BindingError = Module['BindingError'] = extendError(Error, 'BindingError');;
InternalError = Module['InternalError'] = extendError(Error, 'InternalError');;
init_ClassHandle();
init_RegisteredPointer();
init_embind();;
UnboundTypeError = Module['UnboundTypeError'] = extendError(Error, 'UnboundTypeError');;
init_emval();;
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = {
  "__cxa_allocate_exception": ___cxa_allocate_exception,
  "__cxa_throw": ___cxa_throw,
  "_embind_register_bool": __embind_register_bool,
  "_embind_register_class": __embind_register_class,
  "_embind_register_class_class_function": __embind_register_class_class_function,
  "_embind_register_class_constructor": __embind_register_class_constructor,
  "_embind_register_class_function": __embind_register_class_function,
  "_embind_register_class_property": __embind_register_class_property,
  "_embind_register_emval": __embind_register_emval,
  "_embind_register_enum": __embind_register_enum,
  "_embind_register_enum_value": __embind_register_enum_value,
  "_embind_register_float": __embind_register_float,
  "_embind_register_integer": __embind_register_integer,
  "_embind_register_memory_view": __embind_register_memory_view,
  "_embind_register_std_string": __embind_register_std_string,
  "_embind_register_std_wstring": __embind_register_std_wstring,
  "_embind_register_void": __embind_register_void,
  "_emval_as": __emval_as,
  "_emval_decref": __emval_decref,
  "_emval_get_property": __emval_get_property,
  "_emval_incref": __emval_incref,
  "_emval_new_cstring": __emval_new_cstring,
  "_emval_run_destructors": __emval_run_destructors,
  "_emval_take_value": __emval_take_value,
  "abort": _abort,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "exit": _exit,
  "fd_close": _fd_close,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "setTempRet0": _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = asm["__wasm_call_ctors"]

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = asm["malloc"]

/** @type {function(...*):?} */
var _free = Module["_free"] = asm["free"]

/** @type {function(...*):?} */
var ___getTypeName = Module["___getTypeName"] = asm["__getTypeName"]

/** @type {function(...*):?} */
var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = asm["__embind_register_native_and_builtin_types"]

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = asm["__errno_location"]

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = asm["stackSave"]

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = asm["stackRestore"]

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"]

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = asm["setThrew"]

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = asm["dynCall_jiji"]





// === Auto-generated postamble setup entry stuff ===



var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;

/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

noExitRuntime = true;

run();





"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function __Z7webMainv(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc();
	console.log(tmp0);
}
function _cheerpCreate_ZN6client6StringC2EPKc(){
	var tmp0=0,Lgeptoindexphi=0,tmp2=null,tmp3=null;
	tmp2=String();
	Lgeptoindexphi=0;
	tmp0=77;
	while(1){
		tmp3=String.fromCharCode(tmp0<<24>>24);
		tmp2=tmp2.concat(tmp3);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(_$pstr===_$pstr&&(0+Lgeptoindexphi|0)===39)return String(tmp2);
		tmp0=_$pstr[0+Lgeptoindexphi|0]|0;
		continue;
	}
}
function __ZN8PolyBLEP9getAndIncEv(Larg0){
	var tmp0=-0.,LmergedArray=null,tmp2=null,tmp2o=0,tmp3=-0.,tmp4=-0.,tmp5=0,tmp6=0;
	tmp0=+__ZNK8PolyBLEP3getEv(Larg0);
	LmergedArray=new Int32Array(4);
	tmp3=+Larg0.d2;
	tmp4=+Larg0.d5;
	tmp3+=tmp4;
	tmp4=tmp3<0?-tmp3:tmp3;
	tmp5=~~(tmp4*2.3283064365386963E-10);
	LmergedArray[1]=tmp5;
	tmp6=~~(tmp4%4294967296);
	LmergedArray[0]=tmp6;
	LmergedArray[3]=(tmp6|0)!==0?tmp5^ -1|0:-tmp5|0;
	LmergedArray[2]=-tmp6|0;
	tmp2o=tmp3<0?2:0;
	tmp2=tmp3<0?LmergedArray:LmergedArray;
	tmp5=tmp2[tmp2o+1|0]|0;
	tmp6=tmp2[tmp2o]|0;
	Larg0.d5=tmp3-((+(tmp5|0))*4294967296+(+(tmp6>>>0)));
	return tmp0;
}
function __ZN8PolyBLEP3incEv(Larg0){
	var LmergedArray=null,tmp1=null,tmp1o=0,tmp2=-0.,tmp3=-0.,tmp4=0,tmp5=0;
	tmp2=+Larg0.d2;
	tmp3=+Larg0.d5;
	LmergedArray=new Int32Array(4);
	tmp2+=tmp3;
	tmp3=tmp2<0?-tmp2:tmp2;
	tmp4=~~(tmp3*2.3283064365386963E-10);
	LmergedArray[1]=tmp4;
	tmp5=~~(tmp3%4294967296);
	LmergedArray[0]=tmp5;
	LmergedArray[3]=(tmp5|0)!==0?tmp4^ -1|0:-tmp4|0;
	LmergedArray[2]=-tmp5|0;
	tmp1o=tmp2<0?2:0;
	tmp1=tmp2<0?LmergedArray:LmergedArray;
	tmp4=tmp1[tmp1o+1|0]|0;
	tmp5=tmp1[tmp1o]|0;
	Larg0.d5=tmp2-((+(tmp4|0))*4294967296+(+(tmp5>>>0)));
}
function __ZNK8PolyBLEP3getEv(Larg0){
	var tmp0=null,tmp1=-0.,tmp2=-0.,LmergedArray=null,LmergedArrayo=0,tmp4=null,tmp4o=0,tmp5=-0.,tmp6=-0.,tmp7=0,tmp8=0,tmp9=-0.,tmp10=-0.,tmp11=-0.,tmp12=-0.;
	tmp1=+Larg0.d2;
	tmp2=+Larg0.d1;
	if(tmp1*tmp2>=tmp2*.25){
		tmp1=+Larg0.d3;
		return tmp1* +Math.sin( +Larg0.d5*6.2831853071795862);
	}
	LmergedArray=new Int32Array(4);
	tmp4=new Int32Array(2);
	tmp0=new Int32Array(2);
	switch(Larg0.i0|0){
		case 0:
		tmp1=+Larg0.d3;
		return tmp1* +Math.sin( +Larg0.d5*6.2831853071795862);
		case 1:
		tmp1=+Larg0.d3;
		return tmp1* +Math.cos( +Larg0.d5*6.2831853071795862);
		case 2:
		tmp2=+Larg0.d5;
		tmp5=tmp2+.25;
		tmp6=tmp5<0?-tmp5:tmp5;
		tmp7=~~(tmp6*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp6%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp5<0?0:0;
		LmergedArray=tmp5<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp5-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp6=tmp2+.75;
		tmp9=tmp6<0?-tmp6:tmp6;
		tmp7=~~(tmp9*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp9%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp6<0?0:0;
		LmergedArray=tmp6<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp6-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp2*=4;
		if(tmp2>=3){
			tmp2+=-4;
		}else if(tmp2>1){
			tmp2=2-tmp2;
		}
		if(tmp5<tmp1){
			tmp5=tmp5/tmp1+-1;
			tmp5*=(tmp5*tmp5*-0.33333333333333331);
		}else if(1-tmp1<tmp5){
			tmp5=(tmp5+-1)/tmp1+1;
			tmp5*=(tmp5*tmp5*.33333333333333331);
		}else{
			tmp5=0;
		}
		if(tmp6<tmp1){
			tmp6=tmp6/tmp1+-1;
			tmp6*=(tmp6*tmp6*-0.33333333333333331);
		}else if(1-tmp1<tmp6){
			tmp6=(tmp6+-1)/tmp1+1;
			tmp6*=(tmp6*tmp6*.33333333333333331);
		}else{
			tmp6=0;
		}
		tmp9=+Larg0.d3;
		return tmp9*(tmp2+tmp1*4*(tmp5-tmp6));
		case 3:
		tmp6=+Larg0.d5;
		tmp2=tmp6+.5;
		tmp5=tmp2<0?-tmp2:tmp2;
		tmp7=~~(tmp5*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp5%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp2<0?0:0;
		LmergedArray=tmp2<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp2-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		if(tmp6<tmp1){
			tmp5=tmp6/tmp1+-1;
			tmp5=-tmp5*tmp5;
		}else if(1-tmp1<tmp6){
			tmp5=(tmp6+-1)/tmp1+1;
			tmp5*=tmp5;
		}else{
			tmp5=0;
		}
		if(tmp2<tmp1){
			tmp2=tmp2/tmp1+-1;
			tmp2=-tmp2*tmp2;
		}else if(1-tmp1<tmp2){
			tmp2=(tmp2+-1)/tmp1+1;
			tmp2*=tmp2;
		}else{
			tmp2=0;
		}
		tmp1=+Larg0.d3;
		return tmp1*((tmp6<.5?1:-1)+(tmp5-tmp2));
		case 4:
		tmp2=+Larg0.d5;
		tmp9=+Larg0.d4;
		tmp5=tmp2+1-tmp9;
		tmp6=tmp5<0?-tmp5:tmp5;
		tmp7=~~(tmp6*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp6%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp5<0?0:0;
		LmergedArray=tmp5<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp5-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp6=tmp9*-2;
		if(tmp2<tmp9){
			tmp6+=2;
		}
		if(tmp2<tmp1){
			tmp2=tmp2/tmp1+-1;
			tmp2=-tmp2*tmp2;
		}else if(1-tmp1<tmp2){
			tmp2=(tmp2+-1)/tmp1+1;
			tmp2*=tmp2;
		}else{
			tmp2=0;
		}
		if(tmp5<tmp1){
			tmp1=tmp5/tmp1+-1;
			tmp1=-tmp1*tmp1;
		}else if(1-tmp1<tmp5){
			tmp1=(tmp5+-1)/tmp1+1;
			tmp1*=tmp1;
		}else{
			tmp1=0;
		}
		tmp5=+Larg0.d3;
		return tmp5*(tmp6+(tmp2-tmp1));
		case 5:
		tmp2=+Larg0.d5;
		tmp2+=.5;
		tmp5=tmp2<0?-tmp2:tmp2;
		tmp7=~~(tmp5*2.3283064365386963E-10);
		LmergedArray[3]=tmp7;
		tmp8=~~(tmp5%4294967296);
		LmergedArray[2]=tmp8;
		LmergedArray[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		LmergedArray[0]=-tmp8|0;
		tmp4o=tmp2<0?0:2;
		tmp4=tmp2<0?LmergedArray:LmergedArray;
		tmp7=tmp4[tmp4o+1|0]|0;
		tmp8=tmp4[tmp4o]|0;
		tmp2-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		if(tmp2<tmp1){
			tmp5=tmp2/tmp1+-1;
			tmp5=-tmp5*tmp5;
		}else if(1-tmp1<tmp2){
			tmp5=(tmp2+-1)/tmp1+1;
			tmp5*=tmp5;
		}else{
			tmp5=0;
		}
		tmp1=+Larg0.d3;
		return (tmp2*2+-1-tmp5)*tmp1;
		case 6:
		tmp2=+Larg0.d5;
		tmp5=tmp2<0?-tmp2:tmp2;
		tmp7=~~(tmp5*2.3283064365386963E-10);
		LmergedArray[3]=tmp7;
		tmp8=~~(tmp5%4294967296);
		LmergedArray[2]=tmp8;
		LmergedArray[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		LmergedArray[0]=-tmp8|0;
		tmp4o=tmp2<0?0:2;
		tmp4=tmp2<0?LmergedArray:LmergedArray;
		tmp7=tmp4[tmp4o+1|0]|0;
		tmp8=tmp4[tmp4o]|0;
		tmp2-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		if(tmp2<tmp1){
			tmp5=tmp2/tmp1+-1;
			tmp5=-tmp5*tmp5;
		}else if(1-tmp1<tmp2){
			tmp5=(tmp2+-1)/tmp1+1;
			tmp5*=tmp5;
		}else{
			tmp5=0;
		}
		tmp1=+Larg0.d3;
		return (1-tmp2*2+tmp5)*tmp1;
		case 7:
		tmp2=+_fmax(1.0E-4,+_fmin(.9999,+Larg0.d4));
		tmp5=+Larg0.d5;
		tmp6=tmp2*.5;
		tmp9=tmp6+tmp5;
		tmp10=tmp9<0?-tmp9:tmp9;
		tmp7=~~(tmp10*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp10%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp9<0?0:0;
		LmergedArray=tmp9<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp9-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp6=tmp5+1-tmp6;
		tmp10=tmp6<0?-tmp6:tmp6;
		tmp7=~~(tmp10*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp10%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp6<0?0:0;
		LmergedArray=tmp6<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp6-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp5*=2;
		if(tmp5>=2-tmp2){
			tmp5=(tmp5+-2)/tmp2;
		}else if(tmp5>=tmp2){
			tmp5=1-(tmp5-tmp2)/(1-tmp2);
		}else{
			tmp5/=tmp2;
		}
		tmp2=tmp1/(tmp2-tmp2*tmp2);
		if(tmp9<tmp1){
			tmp9=tmp9/tmp1+-1;
			tmp9*=(tmp9*tmp9*-0.33333333333333331);
		}else if(1-tmp1<tmp9){
			tmp9=(tmp9+-1)/tmp1+1;
			tmp9*=(tmp9*tmp9*.33333333333333331);
		}else{
			tmp9=0;
		}
		if(tmp6<tmp1){
			tmp1=tmp6/tmp1+-1;
			tmp1*=(tmp1*tmp1*-0.33333333333333331);
		}else if(1-tmp1<tmp6){
			tmp1=(tmp6+-1)/tmp1+1;
			tmp1*=(tmp1*tmp1*.33333333333333331);
		}else{
			tmp1=0;
		}
		tmp6=+Larg0.d3;
		return tmp6*(tmp5+tmp2*(tmp9-tmp1));
		case 8:
		tmp5=+Larg0.d5;
		tmp9=+Larg0.d4;
		tmp2=(tmp9+-0.5)*.25;
		tmp11=tmp5+.875+tmp2;
		tmp6=tmp11<0?-tmp11:tmp11;
		tmp7=~~(tmp6*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp6%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp11<0?0:0;
		LmergedArray=tmp11<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp11-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp2+=(tmp5+.375);
		tmp5=tmp2<0?-tmp2:tmp2;
		tmp7=~~(tmp5*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp5%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp2<0?0:0;
		LmergedArray=tmp2<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp2-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		if(tmp11<tmp1){
			tmp5=tmp11/tmp1+-1;
			tmp5=-tmp5*tmp5;
		}else if(1-tmp1<tmp11){
			tmp5=(tmp11+-1)/tmp1+1;
			tmp5*=tmp5;
		}else{
			tmp5=0;
		}
		if(tmp2<tmp1){
			tmp6=tmp2/tmp1+-1;
			tmp6=-tmp6*tmp6;
		}else if(1-tmp1<tmp2){
			tmp6=(tmp2+-1)/tmp1+1;
			tmp6*=tmp6;
		}else{
			tmp6=0;
		}
		tmp9=(1-tmp9)*.5;
		tmp10=tmp9+tmp11;
		tmp12=tmp10<0?-tmp10:tmp10;
		tmp7=~~(tmp12*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp12%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp10<0?0:0;
		LmergedArray=tmp10<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp10-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp2+=tmp9;
		tmp9=tmp2<0?-tmp2:tmp2;
		tmp7=~~(tmp9*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp9%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp2<0?0:0;
		LmergedArray=tmp2<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp2-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp5=(tmp11<.5?1:-1)+(tmp5-tmp6)+(tmp10<.5?1:-1);
		if(tmp10<tmp1){
			tmp6=tmp10/tmp1+-1;
			tmp6=-tmp6*tmp6;
		}else if(1-tmp1<tmp10){
			tmp6=(tmp10+-1)/tmp1+1;
			tmp6*=tmp6;
		}else{
			tmp6=0;
		}
		if(tmp2<tmp1){
			tmp1=tmp2/tmp1+-1;
			tmp1=-tmp1*tmp1;
		}else if(1-tmp1<tmp2){
			tmp1=(tmp2+-1)/tmp1+1;
			tmp1*=tmp1;
		}else{
			tmp1=0;
		}
		tmp2=+Larg0.d3;
		return (tmp5+(tmp6-tmp1))*(tmp2*.5);
		case 9:
		tmp5=+Larg0.d5;
		tmp2=tmp5+.5;
		tmp6=tmp2<0?-tmp2:tmp2;
		tmp7=~~(tmp6*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp6%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp2<0?0:0;
		LmergedArray=tmp2<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp2-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		if(tmp5<.5){
			tmp1=+Math.sin(tmp5*6.2831853071795862);
			tmp6=tmp1*2+-0.63661977236758138;
			tmp1=+Larg0.d2;
			tmp5=+Larg0.d5;
		}else{
			tmp6=-0.63661977236758138;
		}
		if(tmp5<tmp1){
			tmp5=tmp5/tmp1+-1;
			tmp5*=(tmp5*tmp5*-0.33333333333333331);
		}else if(1-tmp1<tmp5){
			tmp5=(tmp5+-1)/tmp1+1;
			tmp5*=(tmp5*tmp5*.33333333333333331);
		}else{
			tmp5=0;
		}
		if(tmp2<tmp1){
			tmp2=tmp2/tmp1+-1;
			tmp2*=(tmp2*tmp2*-0.33333333333333331);
		}else if(1-tmp1<tmp2){
			tmp2=(tmp2+-1)/tmp1+1;
			tmp2*=(tmp2*tmp2*.33333333333333331);
		}else{
			tmp2=0;
		}
		tmp9=+Larg0.d3;
		return tmp9*(tmp6+tmp1*6.2831853071795862*(tmp5+tmp2));
		case 10:
		tmp1=+Larg0.d5;
		tmp1+=.25;
		tmp2=tmp1<0?-tmp1:tmp1;
		tmp7=~~(tmp2*2.3283064365386963E-10);
		LmergedArray[3]=tmp7;
		tmp8=~~(tmp2%4294967296);
		LmergedArray[2]=tmp8;
		LmergedArray[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		LmergedArray[0]=-tmp8|0;
		tmp4o=tmp1<0?0:2;
		tmp4=tmp1<0?LmergedArray:LmergedArray;
		tmp7=tmp4[tmp4o+1|0]|0;
		tmp8=tmp4[tmp4o]|0;
		tmp1-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp2=+Math.sin(tmp1*3.1415926535897931);
		tmp5=+Larg0.d2;
		if(tmp1<tmp5){
			tmp1=tmp1/tmp5+-1;
			tmp1*=(tmp1*tmp1*-0.33333333333333331);
		}else if(1-tmp5<tmp1){
			tmp1=(tmp1+-1)/tmp5+1;
			tmp1*=(tmp1*tmp1*.33333333333333331);
		}else{
			tmp1=0;
		}
		tmp6=+Larg0.d3;
		return tmp6*(tmp2*2+-1.2732395447351628+tmp5*6.2831853071795862*tmp1);
		case 11:
		tmp2=+Larg0.d5;
		tmp11=+Larg0.d4;
		tmp5=tmp11*.5;
		tmp10=tmp2+.75+tmp5;
		tmp2=tmp10<0?-tmp10:tmp10;
		tmp7=~~(tmp2*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp2%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp10<0?0:0;
		LmergedArray=tmp10<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp10-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		if(tmp10>=tmp11){
			tmp2=-0;
		}else{
			tmp9=tmp10*4;
			tmp2=tmp9/tmp11;
			if(tmp9>=tmp11*2){
				tmp2=4-tmp2;
			}
		}
		tmp2-=tmp11;
		if(tmp11>0){
			tmp9=tmp10+1;
			tmp5=tmp9-tmp5;
			tmp6=tmp5<0?-tmp5:tmp5;
			tmp7=~~(tmp6*2.3283064365386963E-10);
			tmp0[1]=tmp7;
			tmp8=~~(tmp6%4294967296);
			tmp0[0]=tmp8;
			tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
			tmp4[0]=-tmp8|0;
			LmergedArrayo=tmp5<0?0:0;
			LmergedArray=tmp5<0?tmp4:tmp0;
			tmp7=LmergedArray[LmergedArrayo+1|0]|0;
			tmp8=LmergedArray[LmergedArrayo]|0;
			tmp5-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
			tmp9-=tmp11;
			tmp6=tmp9<0?-tmp9:tmp9;
			tmp7=~~(tmp6*2.3283064365386963E-10);
			tmp0[1]=tmp7;
			tmp8=~~(tmp6%4294967296);
			tmp0[0]=tmp8;
			tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
			tmp4[0]=-tmp8|0;
			LmergedArrayo=tmp9<0?0:0;
			LmergedArray=tmp9<0?tmp4:tmp0;
			tmp7=LmergedArray[LmergedArrayo+1|0]|0;
			tmp8=LmergedArray[LmergedArrayo]|0;
			tmp9-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
			tmp11=tmp1*2/tmp11;
			if(tmp10<tmp1){
				tmp10=tmp10/tmp1+-1;
				tmp10*=(tmp10*tmp10*-0.33333333333333331);
			}else if(1-tmp1<tmp10){
				tmp10=(tmp10+-1)/tmp1+1;
				tmp10*=(tmp10*tmp10*.33333333333333331);
			}else{
				tmp10=0;
			}
			if(tmp5<tmp1){
				tmp5=tmp5/tmp1+-1;
				tmp5*=(tmp5*tmp5*-0.33333333333333331);
			}else if(1-tmp1<tmp5){
				tmp5=(tmp5+-1)/tmp1+1;
				tmp5*=(tmp5*tmp5*.33333333333333331);
			}else{
				tmp5=0;
			}
			tmp10-=(tmp5*2);
			if(tmp9<tmp1){
				tmp9=tmp9/tmp1+-1;
				tmp9*=(tmp9*tmp9*-0.33333333333333331);
			}else if(1-tmp1<tmp9){
				tmp9=(tmp9+-1)/tmp1+1;
				tmp9*=(tmp9*tmp9*.33333333333333331);
			}else{
				tmp9=0;
			}
			tmp2+=(tmp11*(tmp10+tmp9));
		}
		tmp9=+Larg0.d3;
		return tmp2*tmp9;
		case 12:
		tmp2=+Larg0.d5;
		tmp5=tmp2*4;
		if(tmp5>=3){
			tmp5+=-4;
		}else if(tmp5>1){
			tmp5=2-tmp5;
		}
		tmp6=+_fmax(-1,+_fmin(1,tmp5*2));
		tmp9=tmp2+.125;
		tmp5=tmp9<0?-tmp9:tmp9;
		tmp7=~~(tmp5*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp5%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp9<0?0:0;
		LmergedArray=tmp9<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp9-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp5=tmp9+.5;
		tmp10=tmp5<0?-tmp5:tmp5;
		tmp7=~~(tmp10*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp10%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp5<0?0:0;
		LmergedArray=tmp5<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp5-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		if(tmp9<tmp1){
			tmp9=tmp9/tmp1+-1;
			tmp9*=(tmp9*tmp9*-0.33333333333333331);
		}else if(1-tmp1<tmp9){
			tmp9=(tmp9+-1)/tmp1+1;
			tmp9*=(tmp9*tmp9*.33333333333333331);
		}else{
			tmp9=0;
		}
		if(tmp5<tmp1){
			tmp5=tmp5/tmp1+-1;
			tmp10=tmp5*(tmp5*tmp5*-0.33333333333333331);
		}else if(1-tmp1<tmp5){
			tmp5=(tmp5+-1)/tmp1+1;
			tmp10=tmp5*(tmp5*tmp5*.33333333333333331);
		}else{
			tmp10=0;
		}
		tmp5=tmp1*4;
		tmp6+=(tmp5*(tmp9-tmp10));
		tmp2+=.375;
		tmp9=tmp2<0?-tmp2:tmp2;
		tmp7=~~(tmp9*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp9%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp2<0?0:0;
		LmergedArray=tmp2<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp2-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp9=tmp2+.5;
		tmp10=tmp9<0?-tmp9:tmp9;
		tmp7=~~(tmp10*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp10%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp9<0?0:0;
		LmergedArray=tmp9<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp9-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		if(tmp2<tmp1){
			tmp2=tmp2/tmp1+-1;
			tmp2*=(tmp2*tmp2*-0.33333333333333331);
		}else if(1-tmp1<tmp2){
			tmp2=(tmp2+-1)/tmp1+1;
			tmp2*=(tmp2*tmp2*.33333333333333331);
		}else{
			tmp2=0;
		}
		if(tmp9<tmp1){
			tmp1=tmp9/tmp1+-1;
			tmp1*=(tmp1*tmp1*-0.33333333333333331);
		}else if(1-tmp1<tmp9){
			tmp1=(tmp9+-1)/tmp1+1;
			tmp1*=(tmp1*tmp1*.33333333333333331);
		}else{
			tmp1=0;
		}
		tmp9=+Larg0.d3;
		return tmp9*(tmp6+tmp5*(tmp2-tmp1));
		case 13:
		tmp5=+_fmin(.9999,+Larg0.d4);
		tmp6=+Larg0.d5;
		tmp2=tmp6*4;
		if(tmp2>=3){
			tmp2+=-4;
		}else if(tmp2>1){
			tmp2=2-tmp2;
		}
		tmp11=1/(1-tmp5);
		tmp2=+_fmax(-1,+_fmin(1,tmp11*tmp2));
		tmp5*=.25;
		tmp6+=.25;
		tmp9=tmp6-tmp5;
		tmp10=tmp9<0?-tmp9:tmp9;
		tmp7=~~(tmp10*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp10%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp9<0?0:0;
		LmergedArray=tmp9<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp9-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp10=tmp9+.5;
		tmp12=tmp10<0?-tmp10:tmp10;
		tmp7=~~(tmp12*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp12%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp10<0?0:0;
		LmergedArray=tmp10<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp10-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp11=tmp1*(tmp11*2);
		if(tmp9<tmp1){
			tmp9=tmp9/tmp1+-1;
			tmp9*=(tmp9*tmp9*-0.33333333333333331);
		}else if(1-tmp1<tmp9){
			tmp9=(tmp9+-1)/tmp1+1;
			tmp9*=(tmp9*tmp9*.33333333333333331);
		}else{
			tmp9=0;
		}
		if(tmp10<tmp1){
			tmp10=tmp10/tmp1+-1;
			tmp10*=(tmp10*tmp10*-0.33333333333333331);
		}else if(1-tmp1<tmp10){
			tmp10=(tmp10+-1)/tmp1+1;
			tmp10*=(tmp10*tmp10*.33333333333333331);
		}else{
			tmp10=0;
		}
		tmp2+=(tmp11*(tmp9-tmp10));
		tmp5+=tmp6;
		tmp6=tmp5<0?-tmp5:tmp5;
		tmp7=~~(tmp6*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp6%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp5<0?0:0;
		LmergedArray=tmp5<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp5-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		tmp6=tmp5+.5;
		tmp9=tmp6<0?-tmp6:tmp6;
		tmp7=~~(tmp9*2.3283064365386963E-10);
		tmp0[1]=tmp7;
		tmp8=~~(tmp9%4294967296);
		tmp0[0]=tmp8;
		tmp4[1]=(tmp8|0)!==0?tmp7^ -1|0:-tmp7|0;
		tmp4[0]=-tmp8|0;
		LmergedArrayo=tmp6<0?0:0;
		LmergedArray=tmp6<0?tmp4:tmp0;
		tmp7=LmergedArray[LmergedArrayo+1|0]|0;
		tmp8=LmergedArray[LmergedArrayo]|0;
		tmp6-=((+(tmp7|0))*4294967296+(+(tmp8>>>0)));
		if(tmp5<tmp1){
			tmp5=tmp5/tmp1+-1;
			tmp5*=(tmp5*tmp5*-0.33333333333333331);
		}else if(1-tmp1<tmp5){
			tmp5=(tmp5+-1)/tmp1+1;
			tmp5*=(tmp5*tmp5*.33333333333333331);
		}else{
			tmp5=0;
		}
		if(tmp6<tmp1){
			tmp1=tmp6/tmp1+-1;
			tmp1*=(tmp1*tmp1*-0.33333333333333331);
		}else if(1-tmp1<tmp6){
			tmp1=(tmp6+-1)/tmp1+1;
			tmp1*=(tmp1*tmp1*.33333333333333331);
		}else{
			tmp1=0;
		}
		tmp6=+Larg0.d3;
		return tmp6*(tmp2+tmp11*(tmp5-tmp1));
		default:
		return 0;
	}
}
function _fmax(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=0;
	tmp0={d:new DataView(new ArrayBuffer(8)),o:0};
	tmp0.d.setFloat64(tmp0.o,Larg0,true);
	tmp1=tmp0.d.getInt32(1*4+tmp0.o,true)|0;
	tmp2=tmp0.d.getInt32(tmp0.o,true)|0;
	a:if((tmp2|tmp1|0)!==0){
		if((tmp1|0)===-2147483648)if((tmp2|0)===0)break a;
		if(tmp1>>>0>=1048576)if((tmp1&2147483647)-1048576>>>0>=2145386496){
			if((tmp1|0)<0)if(tmp1>>>0<2148532224)break a;
			if((tmp1|0)===2146435072)if((tmp2|0)===0)break a;
			if((tmp1|0)===-1048576){
				if((tmp2|0)===0)break a;
				return Larg1;
			}
			return Larg1;
		}
	}
	tmp0.d.setFloat64(tmp0.o,Larg1,true);
	tmp1=tmp0.d.getInt32(1*4+tmp0.o,true)|0;
	tmp2=tmp0.d.getInt32(tmp0.o,true)|0;
	a:if((tmp2|tmp1|0)!==0){
		if((tmp1|0)===-2147483648)if((tmp2|0)===0)break a;
		if(tmp1>>>0>=1048576)if((tmp1&2147483647)-1048576>>>0>=2145386496){
			if((tmp1|0)<0)if(tmp1>>>0<2148532224)break a;
			if((tmp1|0)===2146435072)if((tmp2|0)===0)break a;
			if((tmp1|0)===-1048576){
				if((tmp2|0)===0)break a;
				return Larg0;
			}
			return Larg0;
		}
	}
	return Larg0>Larg1?Larg0:Larg1;
}
function _fmin(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=0;
	tmp0={d:new DataView(new ArrayBuffer(8)),o:0};
	tmp0.d.setFloat64(tmp0.o,Larg0,true);
	tmp1=tmp0.d.getInt32(1*4+tmp0.o,true)|0;
	tmp2=tmp0.d.getInt32(tmp0.o,true)|0;
	a:if((tmp2|tmp1|0)!==0){
		if((tmp1|0)===-2147483648)if((tmp2|0)===0)break a;
		if(tmp1>>>0>=1048576)if((tmp1&2147483647)-1048576>>>0>=2145386496){
			if((tmp1|0)<0)if(tmp1>>>0<2148532224)break a;
			if((tmp1|0)===2146435072)if((tmp2|0)===0)break a;
			if((tmp1|0)===-1048576){
				if((tmp2|0)===0)break a;
				return Larg1;
			}
			return Larg1;
		}
	}
	tmp0.d.setFloat64(tmp0.o,Larg1,true);
	tmp1=tmp0.d.getInt32(1*4+tmp0.o,true)|0;
	tmp2=tmp0.d.getInt32(tmp0.o,true)|0;
	a:if((tmp2|tmp1|0)!==0){
		if((tmp1|0)===-2147483648)if((tmp2|0)===0)break a;
		if(tmp1>>>0>=1048576)if((tmp1&2147483647)-1048576>>>0>=2145386496){
			if((tmp1|0)<0)if(tmp1>>>0<2148532224)break a;
			if((tmp1|0)===2146435072)if((tmp2|0)===0)break a;
			if((tmp1|0)===-1048576){
				if((tmp2|0)===0)break a;
				return Larg0;
			}
			return Larg0;
		}
	}
	return Larg0<Larg1?Larg0:Larg1;
}
function __ZN8PolyBLEP11setWaveformENS_8WaveformE(Larg0,Larg1){
	Larg0.i0=Larg1;
}
function __ZN8PolyBLEP4syncEd(Larg0,Larg1){
	var LmergedArray=null,tmp1=-0.,tmp2=null,tmp2o=0,tmp3=0,tmp4=0;
	Larg0.d5=Larg1;
	LmergedArray=new Int32Array(4);
	tmp1=Larg1<0?-Larg1:Larg1;
	tmp3=~~(tmp1*2.3283064365386963E-10);
	LmergedArray[1]=tmp3;
	tmp4=~~(tmp1%4294967296);
	LmergedArray[0]=tmp4;
	LmergedArray[3]=(tmp4|0)!==0?tmp3^ -1|0:-tmp3|0;
	LmergedArray[2]=-tmp4|0;
	tmp2o=Larg1<0?2:0;
	tmp2=Larg1<0?LmergedArray:LmergedArray;
	tmp3=tmp2[tmp2o+1|0]|0;
	tmp4=tmp2[tmp2o]|0;
	if(Larg1>=0){
		Larg0.d5=Larg1-((+(tmp3|0))*4294967296+(+(tmp4>>>0)));
		return;
	}
	Larg0.d5=(+((tmp4>>>0>1?tmp3^ -1|0:-tmp3|0)|0))*4294967296+(+(1-tmp4>>>0))+Larg1;
}
function __ZN8PolyBLEP13setPulseWidthEd(Larg0,Larg1){
	Larg0.d4=Larg1;
}
function __ZNK8PolyBLEP11getFreqInHzEv(Larg0){
	return  +Larg0.d2* +Larg0.d1;
}
function __ZN8PolyBLEP13setSampleRateEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp0=+Larg0.d2;
	tmp1=+Larg0.d1;
	Larg0.d1=Larg1;
	Larg0.d2=tmp0*tmp1/Larg1;
}
function __ZN8PolyBLEP12setFrequencyEd(Larg0,Larg1){
	Larg0.d2=Larg1/ +Larg0.d1;
}
function __ZN8PolyBLEPC1Ed(Larg0,Larg1){
	Larg0.d3=1;
	Larg0.d5=0;
	Larg0.d1=Larg1;
	Larg0.d2=440/Larg1;
	Larg0.i0=0;
	Larg0.d4=.5;
}
function __ZN13maxiDelayline14dlFromPositionEdidi(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=0;
	tmp1=Larg0.i1|0;
	if((tmp1|0)>=(Larg2|0)){
		Larg0.i1=0;
		tmp1=0;
	}
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a5;
	Larg0.d4=+L$poptgep$poptgep1$poptgepsqueezed[(Larg4|0)<(Larg2|0)?Larg4|0:0|0];
	L$poptgep$poptgep1$poptgepsqueezed[tmp1]=Larg1*Larg3+ +L$poptgep$poptgep1$poptgepsqueezed[tmp1]*Larg3;
	Larg0.i1=tmp1+1|0;
	return +Larg0.d4;
}
function __ZN13maxiDelayline2dlEdid(Larg0,Larg1,Larg2,Larg3){
	var tmp0=0;
	tmp0=Larg0.i1|0;
	if((tmp0|0)>=(Larg2|0)){
		Larg0.i1=0;
		tmp0=0;
	}
	Larg0.d4=+Larg0.a5[tmp0];
	Larg0.a5[tmp0]=Larg1*Larg3*.5+ +Larg0.a5[tmp0]*Larg3;
	Larg0.i1=tmp0+1|0;
	return +Larg0.d4;
}
function __ZN13maxiDelaylineC1Ev(Larg0){
	var L$poptgep$poptgep$poptgepsqueezed=null,Lgeptoindexphi=0;
	L$poptgep$poptgep$poptgepsqueezed=Larg0.a5;
	Lgeptoindexphi=0;
	while(1){
		L$poptgep$poptgep$poptgepsqueezed[Lgeptoindexphi]=0;
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(L$poptgep$poptgep$poptgepsqueezed!==L$poptgep$poptgep$poptgepsqueezed||88200!==(0+Lgeptoindexphi|0))continue;
		break;
	}
}
function __ZN7maxiOsc8triangleEd(Larg0,Larg1){
	var tmp0=-0.;
	tmp0=+Larg0.d1;
	if(tmp0>=1){
		tmp0+=-1;
		Larg0.d1=tmp0;
	}
	tmp0+=(1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1));
	Larg0.d1=tmp0;
	if(!(tmp0<=.5)){
		tmp0=1-tmp0;
	}
	tmp0=(tmp0+-0.25)*4;
	Larg0.d4=tmp0;
	return tmp0;
}
function __ZN7maxiOsc4rectEdd(Larg0,Larg1,Larg2){
	return +Larg0.d4;
}
function __ZN7maxiOsc4sawnEd(Larg0,Larg1){
	var tmp0=0,tmp1=-0.,tmp2=-0.,tmp3=-0.;
	tmp1=+Larg0.d1;
	if(tmp1>=.5){
		tmp1+=-1;
		Larg0.d1=tmp1;
	}
	tmp1+=(1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1));
	Larg0.d1=tmp1;
	tmp2=8820.22/Larg1*tmp1;
	if(tmp2<-0.5){
		tmp2=-0.5;
	}else if(tmp2>.5){
		tmp2=.5;
	}
	tmp2=tmp2*1000+500;
	tmp3=+Math.floor(tmp2);
	tmp3=tmp2-tmp3;
	tmp0=~~tmp2;
	tmp1=tmp3* +_transition[tmp0+1|0]+ +_transition[tmp0]*(1-tmp3)-tmp1;
	Larg0.d4=tmp1;
	return tmp1;
}
function __ZN7maxiOsc3sawEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp0=+Larg0.d1;
	Larg0.d4=tmp0;
	if(tmp0>=1){
		tmp1=tmp0+-2;
		Larg0.d1=tmp1;
	}else{
		tmp1=tmp0;
	}
	Larg0.d1=tmp1+1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1)*2;
	return tmp0;
}
function __ZN7maxiOsc13phasorBetweenEddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,L$pmux=-0.,tmp2=-0.;
	tmp0=+Larg0.d1;
	Larg0.d4=tmp0;
	if(tmp0<Larg2){
		tmp2=Larg2;
	}else{
		tmp2=tmp0;
	}
	L$pmux=tmp2>=Larg3?Larg2:tmp2;
	a:{
		if(!(tmp2>=Larg3))if(!(tmp0<Larg2))break a;
		Larg0.d1=L$pmux;
		tmp2=L$pmux;
	}
	Larg0.d1=tmp2+(Larg3-Larg2)/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	return tmp0;
}
function __ZN7maxiOsc7impulseEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp1=+Larg0.d1;
	if(tmp1>=1){
		tmp1+=-1;
		Larg0.d1=tmp1;
	}
	tmp0=1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	Larg0.d1=tmp1+tmp0;
	return tmp1<tmp0?1:0;
}
function __ZN7maxiOsc5pulseEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.,tmp1=-0.;
	if(Larg2<0){
		tmp0=0;
	}else if(Larg2>1){
		tmp0=1;
	}else{
		tmp0=Larg2;
	}
	tmp1=+Larg0.d1;
	if(tmp1>=1){
		tmp1+=-1;
		Larg0.d1=tmp1;
	}
	tmp1+=(1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1));
	Larg0.d1=tmp1;
	if(tmp1<tmp0)Larg0.d4=-1;
	if(tmp1>tmp0){
		Larg0.d4=1;
		return 1;
	}
	return +Larg0.d4;
}
function __ZN7maxiOsc6squareEd(Larg0,Larg1){
	var tmp0=-0.;
	tmp0=+Larg0.d1;
	if(tmp0<.5)Larg0.d4=-1;
	if(tmp0>.5)Larg0.d4=1;
	if(tmp0>=1){
		tmp0+=-1;
		Larg0.d1=tmp0;
	}
	Larg0.d1=tmp0+1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	return +Larg0.d4;
}
function __ZN7maxiOsc6phasorEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp0=+Larg0.d1;
	Larg0.d4=tmp0;
	if(tmp0>=1){
		tmp1=tmp0+-1;
		Larg0.d1=tmp1;
	}else{
		tmp1=tmp0;
	}
	Larg0.d1=tmp1+1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	return tmp0;
}
function __ZN7maxiOsc7coswaveEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp0=+Math.cos( +Larg0.d1*6.2831853071795862);
	Larg0.d4=tmp0;
	tmp1=+Larg0.d1;
	if(tmp1>=1){
		tmp1+=-1;
		Larg0.d1=tmp1;
	}
	Larg0.d1=tmp1+1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	return tmp0;
}
function __ZN7maxiOsc7sinebufEd(Larg0,Larg1){
	var tmp0=0,tmp1=-0.,tmp2=-0.;
	tmp1= +Larg0.d1+512/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	if(tmp1>=511){
		tmp1+=-512;
	}
	Larg0.d1=tmp1;
	tmp2=+Math.floor(tmp1);
	tmp2=tmp1-tmp2;
	tmp0=~~tmp1;
	tmp1=(1-tmp2)* +_sineBuffer[tmp0+1|0]+tmp2* +_sineBuffer[tmp0+2|0];
	Larg0.d4=tmp1;
	return tmp1;
}
function __ZN7maxiOsc8sinebuf4Ed(Larg0,Larg1){
	var tmp0=0,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=-0.,tmp5=-0.;
	tmp3= +Larg0.d1+512/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	if(tmp3>=511){
		tmp3+=-512;
	}
	Larg0.d1=tmp3;
	tmp4=+Math.floor(tmp3);
	tmp4=tmp3-tmp4;
	tmp0=~~tmp3;
	if(tmp3===0){
		tmp1=+_sineBuffer[tmp0+1|0];
		tmp2=+_sineBuffer[tmp0+2|0];
		tmp5=+_sineBuffer[tmp0];
		tmp3=0;
	}else{
		tmp1=+_sineBuffer[tmp0+1|0];
		tmp2=+_sineBuffer[tmp0+2|0];
		tmp3=+_sineBuffer[tmp0-1|0];
		tmp5=+_sineBuffer[tmp0];
	}
	tmp5+=(tmp4*((tmp1-tmp3)*.5+tmp4*(tmp3-tmp5*2.5+tmp1*2-tmp2*.5+tmp4*((tmp5-tmp1)*1.5+(tmp2-tmp3)*.5))));
	Larg0.d4=tmp5;
	return tmp5;
}
function __ZN7maxiOsc8sinewaveEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=-0.;
	tmp0=+Math.sin( +Larg0.d1*6.2831853071795862);
	Larg0.d4=tmp0;
	tmp1=+Larg0.d1;
	if(tmp1>=1){
		tmp1+=-1;
		Larg0.d1=tmp1;
	}
	Larg0.d1=tmp1+1/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1);
	return tmp0;
}
function __ZN7maxiOsc10phaseResetEd(Larg0,Larg1){
	Larg0.d1=Larg1;
}
function __ZN7maxiOsc5noiseEv(Larg0){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=0,tmp6=-0.,L$poptgep11$poptgep$poptgepsqueezed=null,L$poptgep$poptgep$poptgepsqueezed=null,L$ppre$pi=0;
	L$poptgep11$poptgep$poptgepsqueezed=_impure_data$p14;
	if(L$poptgep11$poptgep$poptgepsqueezed!==null){
		L$poptgep$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.a2;
		L$ppre$pi=L$poptgep$poptgep$poptgepsqueezed[1]|0;
		tmp0=L$poptgep$poptgep$poptgepsqueezed[0]|0;
		tmp1=L$ppre$pi*1284865837|0;
	}else{
		L$poptgep11$poptgep$poptgepsqueezed={a0:new Uint16Array(6),i1:0,a2:new Int32Array(2)};
		_impure_data$p14=L$poptgep11$poptgep$poptgepsqueezed;
		L$poptgep$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=13070;
		L$poptgep$poptgep$poptgepsqueezed[1]=43981;
		L$poptgep$poptgep$poptgepsqueezed[2]=4660;
		L$poptgep$poptgep$poptgepsqueezed[3]=58989;
		L$poptgep$poptgep$poptgepsqueezed[4]=57068;
		L$poptgep$poptgep$poptgepsqueezed[5]=5;
		L$poptgep11$poptgep$poptgepsqueezed.i1=11;
		L$poptgep$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.a2;
		L$poptgep$poptgep$poptgepsqueezed[1]=0;
		L$poptgep$poptgep$poptgepsqueezed[0]=1;
		tmp1=0;
		tmp0=1;
	}
	tmp2=tmp0>>>16;
	L$ppre$pi=tmp0&65535;
	tmp3=(tmp2*32557|0)+(L$ppre$pi*19605|0)|0;
	tmp4=tmp3<<16;
	L$ppre$pi=L$ppre$pi*32557|0;
	tmp5=tmp4+L$ppre$pi|0;
	L$ppre$pi=(((((tmp0*1481765933|0)+tmp1|0)+(tmp2*19605|0)|0)+(tmp3>>>16)|0)+(tmp4>>>0>(L$ppre$pi^ -1)>>>0?1:0)|0)+((tmp5|0)===-1?1:0)|0;
	L$poptgep11$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.a2;
	L$poptgep11$poptgep$poptgepsqueezed[1]=L$ppre$pi;
	L$poptgep11$poptgep$poptgepsqueezed[0]=tmp5+1|0;
	tmp6=(+(L$ppre$pi&2147483647|0))*4.6566128730773926E-10*2+-1;
	Larg0.d4=tmp6;
	return tmp6;
}
function __ZN7maxiOscC1Ev(Larg0){
	Larg0.d1=0;
}
function __ZN12maxiPolyBLEP13setPulseWidthEd(Larg0,Larg1){
	Larg0.d4=Larg1;
}
function __ZN12maxiPolyBLEP11setWaveformEN8PolyBLEP8WaveformE(Larg0,Larg1){
	Larg0.i0=Larg1;
}
function __ZN12maxiPolyBLEP4playEd(Larg0,Larg1){
	Larg0.d2=Larg1/ +Larg0.d1;
	return +__ZN8PolyBLEP9getAndIncEv(Larg0);
}
function __ZN12maxiPolyBLEPC1Ev(Larg0){
	var tmp0=-0.;
	Larg0.d3=1;
	Larg0.d5=0;
	Larg0.i0=0;
	Larg0.d4=.5;
	tmp0=(+(__ZN12maxiSettings10sampleRateE|0));
	Larg0.d1=tmp0;
	Larg0.d2=440/tmp0;
}
function __ZN12maxiRatioSeqC1Ev(Larg0){
	Larg0.d0=0;
	Larg0.i1=0;
	Larg0.i2=0;
}
function __ZN12maxiRatioSeq10playValuesEdPN6client12Float64ArrayES2_(Larg0,Larg1,Larg2,Larg3){
	var L$psroa$p9$p0=null,L$psroa$p9$p0o=0,tmp1=-0.,L$p=0,Lgeptoindexphi=0,L$psroa$p0$p0=null,Lgeptoindexphi2=0;
	L$p=~~ +Larg2.length;
	Lgeptoindexphi=L$p<<3;
	if((Lgeptoindexphi|0)!==0){
		L$psroa$p0$p0=new Float64Array(Lgeptoindexphi/8|0);
		if((Lgeptoindexphi|0)>0){
			L$p&=536870911;
			if((L$p|0)!==0){
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					L$psroa$p0$p0[Lgeptoindexphi2]=+Larg2[0+Lgeptoindexphi|0];
					Lgeptoindexphi2=Lgeptoindexphi2+1|0;
					if(L$psroa$p0$p0!==L$psroa$p0$p0||(0+L$p|0)!==(0+Lgeptoindexphi2|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
			}
		}
	}
	L$p=~~ +Larg3.length;
	Lgeptoindexphi=L$p<<3;
	if((Lgeptoindexphi|0)!==0){
		L$psroa$p0$p0=new Float64Array(Lgeptoindexphi/8|0);
		if((Lgeptoindexphi|0)>0){
			L$p&=536870911;
			if((L$p|0)!==0){
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					L$psroa$p0$p0[Lgeptoindexphi2]=+Larg3[0+Lgeptoindexphi|0];
					Lgeptoindexphi2=Lgeptoindexphi2+1|0;
					if(L$psroa$p0$p0!==L$psroa$p0$p0||(0+L$p|0)!==(0+Lgeptoindexphi2|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
				L$psroa$p9$p0o=0+L$p|0;
				L$psroa$p9$p0=L$psroa$p0$p0;
			}else{
				L$psroa$p9$p0o=0+L$p|0;
				L$psroa$p9$p0=L$psroa$p0$p0;
			}
		}else{
			L$psroa$p9$p0o=0;
			L$psroa$p9$p0=L$psroa$p0$p0;
		}
	}else{
		L$psroa$p0$p0=nullArray;
		L$psroa$p9$p0o=0;
		L$psroa$p9$p0=nullArray;
	}
	L$p=((L$psroa$p9$p0o)*8)-((0)*8)>>3;
	if((Larg0.i2|0)!==(L$p|0)){
		Larg0.i2=L$p;
		Larg0.i1=L$p-1|0;
	}
	tmp1=+__ZN12maxiRatioSeq8playTrigEdPN6client12Float64ArrayE(Larg0,Larg1,Larg2);
	Lgeptoindexphi=Larg0.i1|0;
	if(tmp1===0)return +L$psroa$p0$p0[Lgeptoindexphi];
	Lgeptoindexphi=Lgeptoindexphi+1|0;
	L$p=(Lgeptoindexphi|0)===(L$p|0)?0|0:Lgeptoindexphi|0;
	Larg0.i1=L$p;
	return +L$psroa$p0$p0[L$p];
}
function __ZN12maxiRatioSeq8playTrigEdPN6client12Float64ArrayE(Larg0,Larg1,Larg2){
	var L$psroa$p9$p09=null,L$psroa$p9$p09o=0,tmp1=-0.,tmp2=-0.,tmp3=0,Lgeptoindexphi=0,L$psroa$p0$p010=null,tmp6=-0.,tmp7=-0.,tmp8=-0.,Lgeptoindexphi2=0;
	tmp3=~~ +Larg2.length;
	Lgeptoindexphi=tmp3<<3;
	if((Lgeptoindexphi|0)!==0){
		L$psroa$p0$p010=new Float64Array(Lgeptoindexphi/8|0);
		if((Lgeptoindexphi|0)>0){
			tmp3&=536870911;
			if((tmp3|0)===0){
				L$psroa$p9$p09o=0+tmp3|0;
				L$psroa$p9$p09=L$psroa$p0$p010;
				tmp1=0;
			}else{
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					L$psroa$p0$p010[Lgeptoindexphi2]=+Larg2[0+Lgeptoindexphi|0];
					Lgeptoindexphi2=Lgeptoindexphi2+1|0;
					if(L$psroa$p0$p010!==L$psroa$p0$p010||(0+tmp3|0)!==(0+Lgeptoindexphi2|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
				if((tmp3|0)===0){
					L$psroa$p9$p09o=0+tmp3|0;
					L$psroa$p9$p09=L$psroa$p0$p010;
					tmp1=0;
				}else{
					Lgeptoindexphi2=0;
					Lgeptoindexphi=0;
					while(1){
						Lgeptoindexphi2=~~( +L$psroa$p0$p010[Lgeptoindexphi]+(+(Lgeptoindexphi2|0)));
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if(L$psroa$p0$p010!==L$psroa$p0$p010||(0+Lgeptoindexphi|0)!==(0+tmp3|0))continue;
						break;
					}
					L$psroa$p9$p09o=0+tmp3|0;
					L$psroa$p9$p09=L$psroa$p0$p010;
					tmp1=(+(Lgeptoindexphi2|0));
				}
			}
		}else{
			L$psroa$p9$p09o=0;
			L$psroa$p9$p09=L$psroa$p0$p010;
			tmp1=0;
		}
	}else{
		tmp1=0;
		L$psroa$p9$p09o=0;
		L$psroa$p9$p09=nullArray;
		L$psroa$p0$p010=nullArray;
	}
	tmp3=((0)*8);
	Lgeptoindexphi=((L$psroa$p9$p09o)*8);
	if((Lgeptoindexphi|0)===(tmp3|0)){
		Larg0.d0=Larg1;
		return 0;
	}
	tmp3=Lgeptoindexphi-tmp3>>3;
	tmp2=-1/(+(__ZN12maxiSettings10sampleRateE|0));
	tmp6=0;
	Lgeptoindexphi=0;
	while(1){
		tmp6+= +L$psroa$p0$p010[Lgeptoindexphi];
		tmp7=tmp6/tmp1;
		if(tmp7===1){
			tmp7=0;
		}
		tmp8=+Larg0.d0;
		if(tmp8>Larg1){
			Larg0.d0=tmp2;
			tmp8=tmp2;
		}
		Lgeptoindexphi2=tmp8<=tmp7?1:0;
		if(tmp7<Larg1)if(Lgeptoindexphi2){
			Larg0.d0=Larg1;
			return 1;
		}
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(Lgeptoindexphi>>>0<tmp3>>>0)continue;
		break;
	}
	Larg0.d0=Larg1;
	return 0;
}
function __ZN9maxiIndexC1Ev(Larg0){
	Larg0.d0=1;
	Larg0.i1=1;
	Larg0.d2=0;
}
function __ZN9maxiIndex4pullEddPN6client12Float64ArrayE(Larg0,Larg1,Larg2,Larg3){
	var L$psroa$p7$p0=null,L$psroa$p7$p0o=0,tmp1=0,Lgeptoindexphi=0,L$psroa$p0$p0=null,Lgeptoindexphi2=0,tmp5=-0.;
	tmp1=~~ +Larg3.length;
	Lgeptoindexphi=tmp1<<3;
	if((Lgeptoindexphi|0)!==0){
		L$psroa$p0$p0=new Float64Array(Lgeptoindexphi/8|0);
		if((Lgeptoindexphi|0)>0){
			tmp1&=536870911;
			if((tmp1|0)!==0){
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					L$psroa$p0$p0[Lgeptoindexphi2]=+Larg3[0+Lgeptoindexphi|0];
					Lgeptoindexphi2=Lgeptoindexphi2+1|0;
					if(L$psroa$p0$p0!==L$psroa$p0$p0||(0+tmp1|0)!==(0+Lgeptoindexphi2|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
				L$psroa$p7$p0o=0+tmp1|0;
				L$psroa$p7$p0=L$psroa$p0$p0;
			}else{
				L$psroa$p7$p0o=0+tmp1|0;
				L$psroa$p7$p0=L$psroa$p0$p0;
			}
		}else{
			L$psroa$p7$p0o=0;
			L$psroa$p7$p0=L$psroa$p0$p0;
		}
	}else{
		L$psroa$p0$p0=nullArray;
		L$psroa$p7$p0o=0;
		L$psroa$p7$p0=nullArray;
	}
	a:{
		if( +Larg0.d0<=0){
			if(!(Larg1>0))break a;
		}else{
			tmp1=Larg0.i1|0;
			if(!(Larg1>0))break a;
			if((tmp1&255)===0)break a;
		}
		Larg0.d0=Larg1;
		Larg0.i1=0;
		if(Larg2<0){
			tmp5=0;
		}else if(Larg2>1){
			tmp5=1;
		}else{
			tmp5=Larg2;
		}
		tmp5=+Math.floor(tmp5*.99999998999999994*(+(((L$psroa$p7$p0o)*8)-((0)*8)>>3>>>0)));
		tmp5=+L$psroa$p0$p0[~~tmp5];
		Larg0.d2=tmp5;
		return tmp5;
	}
	Larg0.d0=Larg1;
	Larg0.i1=0;
	return +Larg0.d2;
}
function __ZN10maxiBiquadC1Ev(Larg0){
	var L$poptgep$poptgep6$poptgepsqueezed=null;
	Larg0.d0=0;
	Larg0.d1=0;
	Larg0.d2=0;
	Larg0.d3=0;
	Larg0.d4=0;
	Larg0.d6=1.4142135623730951;
	L$poptgep$poptgep6$poptgepsqueezed=Larg0.a7;
	L$poptgep$poptgep6$poptgepsqueezed[0]=0;
	L$poptgep$poptgep6$poptgepsqueezed[1]=0;
	L$poptgep$poptgep6$poptgepsqueezed[2]=0;
}
function __ZN10maxiBiquad3setENS_11filterTypesEddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=-0.,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=-0.,tmp5=-0.;
	tmp1=+Math.abs(Larg4);
	tmp1=+Math.pow(10,tmp1/20);
	tmp2=+Math.tan(Larg2*3.1415926535897931/(+(__ZN12maxiSettings10sampleRateE|0)));
	switch(Larg1|0){
		case 0:
		tmp3=tmp2*tmp2;
		tmp2/=Larg3;
		tmp1=1/(tmp3+(tmp2+1));
		tmp4=tmp3*tmp1;
		Larg0.d0=tmp4;
		Larg0.d1=tmp4*2;
		Larg0.d2=tmp4;
		Larg0.d3=(tmp3+-1)*2*tmp1;
		Larg0.d4=(tmp3+(1-tmp2))*tmp1;
		break;
		case 1:
		tmp4=tmp2*tmp2;
		tmp2/=Larg3;
		tmp1=1/(tmp4+(tmp2+1));
		Larg0.d0=tmp1;
		Larg0.d1=tmp1*-2;
		Larg0.d2=tmp1;
		Larg0.d3=(tmp4+-1)*2*tmp1;
		Larg0.d4=(tmp4+(1-tmp2))*tmp1;
		break;
		case 2:
		tmp3=tmp2*tmp2;
		tmp2/=Larg3;
		tmp1=1/(tmp3+(tmp2+1));
		tmp4=tmp2*tmp1;
		Larg0.d0=tmp4;
		Larg0.d1=0;
		Larg0.d2=-tmp4;
		Larg0.d3=(tmp3+-1)*2*tmp1;
		Larg0.d4=(tmp3+(1-tmp2))*tmp1;
		break;
		case 3:
		tmp5=tmp2*tmp2;
		tmp2/=Larg3;
		tmp1=1/(tmp5+(tmp2+1));
		tmp4=(tmp5+1)*tmp1;
		Larg0.d0=tmp4;
		tmp3=(tmp5+-1)*2*tmp1;
		Larg0.d1=tmp3;
		Larg0.d2=tmp4;
		Larg0.d3=tmp3;
		Larg0.d4=(tmp5+(1-tmp2))*tmp1;
		break;
		case 4:
		if(Larg4>=0){
			tmp4=tmp2*tmp2;
			tmp3=1/Larg3*tmp2;
			tmp5=1/(tmp4+(tmp3+1));
			tmp2*=(tmp1/Larg3);
			Larg0.d0=(tmp4+(tmp2+1))*tmp5;
			tmp1=(tmp4+-1)*2*tmp5;
			Larg0.d1=tmp1;
			Larg0.d2=(tmp4+(1-tmp2))*tmp5;
			Larg0.d3=tmp1;
			Larg0.d4=(tmp4+(1-tmp3))*tmp5;
			break;
		}
		tmp4=tmp1/Larg3*tmp2;
		tmp3=tmp2*tmp2;
		tmp5=1/(tmp3+(tmp4+1));
		tmp2*=(1/Larg3);
		Larg0.d0=(tmp3+(tmp2+1))*tmp5;
		tmp1=(tmp3+-1)*2*tmp5;
		Larg0.d1=tmp1;
		Larg0.d2=(tmp3+(1-tmp2))*tmp5;
		Larg0.d3=tmp1;
		Larg0.d4=(tmp3+(1-tmp4))*tmp5;
		break;
		case 5:
		if(Larg4>=0){
			tmp4=tmp2*tmp2;
			tmp3=tmp2* +Larg0.d6;
			tmp5=1/(tmp4+(tmp3+1));
			tmp0=tmp2* +Math.sqrt(tmp1*2);
			tmp2*=(tmp1*tmp2);
			Larg0.d0=(tmp2+(tmp0+1))*tmp5;
			Larg0.d1=(tmp2+-1)*2*tmp5;
			Larg0.d2=tmp5*(tmp2+(1-tmp0));
			Larg0.d3=(tmp4+-1)*2*tmp5;
			Larg0.d4=(tmp4+(1-tmp3))*tmp5;
			break;
		}
		tmp5=tmp2* +Math.sqrt(tmp1*2);
		tmp1=tmp2*(tmp1*tmp2);
		tmp4=1/(tmp1+(tmp5+1));
		tmp3=tmp2*tmp2;
		tmp2*= +Larg0.d6;
		Larg0.d0=tmp4*(tmp3+(tmp2+1));
		Larg0.d1=(tmp3+-1)*2*tmp4;
		Larg0.d2=tmp4*(tmp3+(1-tmp2));
		Larg0.d3=(tmp1+-1)*2*tmp4;
		Larg0.d4=(tmp1+(1-tmp5))*tmp4;
		break;
		case 6:
		if(Larg4>=0){
			tmp4=tmp2*tmp2;
			tmp3=tmp2* +Larg0.d6;
			tmp5=1/(tmp4+(tmp3+1));
			tmp2*= +Math.sqrt(tmp1*2);
			Larg0.d0=(tmp4+(tmp1+tmp2))*tmp5;
			Larg0.d1=(tmp4-tmp1)*2*tmp5;
			Larg0.d2=tmp5*(tmp4+(tmp1-tmp2));
			Larg0.d3=(tmp4+-1)*2*tmp5;
			Larg0.d4=(tmp4+(1-tmp3))*tmp5;
			break;
		}
		tmp4=tmp2* +Math.sqrt(tmp1*2);
		tmp3=tmp2*tmp2;
		tmp5=1/(tmp3+(tmp1+tmp4));
		tmp2*= +Larg0.d6;
		Larg0.d0=tmp5*(tmp3+(tmp2+1));
		Larg0.d1=(tmp3+-1)*2*tmp5;
		Larg0.d2=tmp5*(tmp3+(1-tmp2));
		Larg0.d3=(tmp3-tmp1)*2*tmp5;
		Larg0.d4=(tmp3+(tmp1-tmp4))*tmp5;
		break;
		default:
	}
}
function __ZN10maxiBiquad4playEd(Larg0,Larg1){
	var L$poptgep$poptgep2$poptgepsqueezed=null,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=-0.,tmp5=-0.,tmp6=-0.;
	L$poptgep$poptgep2$poptgepsqueezed=Larg0.a7;
	tmp1=+L$poptgep$poptgep2$poptgepsqueezed[1];
	tmp2=+L$poptgep$poptgep2$poptgepsqueezed[2];
	tmp3=Larg1- +Larg0.d3*tmp1- +Larg0.d4*tmp2;
	L$poptgep$poptgep2$poptgepsqueezed[0]=tmp3;
	tmp4=+Larg0.d0;
	tmp5=+Larg0.d1;
	tmp6=+Larg0.d2;
	L$poptgep$poptgep2$poptgepsqueezed[2]=tmp1;
	L$poptgep$poptgep2$poptgepsqueezed[1]=tmp3;
	return tmp3*tmp4+tmp1*tmp5+tmp2*tmp6;
}
function __ZN16maxiNonlinearityC1Ev(Larg0){
}
function __ZN16maxiNonlinearity12fastAtanDistEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.;
	tmp0=Larg1*Larg2;
	return 1/(Larg2/(Larg2*Larg2*.28+1))*(tmp0/(tmp0*tmp0*.28+1));
}
function __ZN16maxiNonlinearity8atanDistEdd(Larg0,Larg1,Larg2){
	return 1/ +Math.atan(Larg2)* +Math.atan(Larg1*Larg2);
}
function __ZN16maxiNonlinearity8fastatanEd(Larg0,Larg1){
	return Larg1/(Larg1*Larg1*.28+1);
}
function __ZN16maxiNonlinearity8softclipEd(Larg0,Larg1){
	if(Larg1>=1)return 1;
	if(Larg1<=-1)return -1;
	return (Larg1- +Math.pow(Larg1,3)/3)*.66666666666666663;
}
function __ZN16maxiNonlinearity8hardclipEd(Larg0,Larg1){
	if(Larg1>=1)return 1;
	if(Larg1<=-1)return -1;
	return Larg1;
}
function __ZN16maxiNonlinearity8asymclipEddd(Larg0,Larg1,Larg2,Larg3){
	if(Larg1>=1)return 1;
	if(Larg1<=-1)return -1;
	if(Larg1<0)return - +Math.pow(-Larg1,Larg2);
	return +Math.pow(Larg1,Larg3);
}
function __ZN7maxiMapC1Ev(Larg0){
}
function __ZN7maxiMap5clampEddd(Larg0,Larg1,Larg2){
	if(Larg0>Larg2)return Larg2;
	if(Larg0<Larg1)return Larg1;
	return Larg0;
}
function __ZN7maxiMap6explinEddddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=-0.;
	tmp0=Larg2<Larg0?Larg2:Larg0;
	return (Larg4-Larg3)*( +Math.log((tmp0<Larg1?Larg1:tmp0)/Larg1)/ +Math.log(Larg2/Larg1))+Larg3;
}
function __ZN7maxiMap6linexpEddddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=-0.;
	tmp0=Larg2<Larg0?Larg2:Larg0;
	return  +Math.pow(Larg4/Larg3,((tmp0<Larg1?Larg1:tmp0)-Larg1)/(Larg2-Larg1))*Larg3;
}
function __ZN7maxiMap6linlinEddddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=-0.;
	tmp0=Larg2<Larg0?Larg2:Larg0;
	return (Larg4-Larg3)*(((tmp0<Larg1?Larg1:tmp0)-Larg1)/(Larg2-Larg1))+Larg3;
}
function __ZN10maxiSample9normaliseEd(Larg0,Larg1){
	var tmp0=0,tmp1=-0.,tmp2=null,tmp3=-0.;
	if( +Larg0.a8.length>0){
		tmp1=0;
		tmp0=0;
		while(1){
			tmp2=Larg0.a8;
			tmp3=+tmp2[0+tmp0|0];
			tmp3=+Math.abs(tmp3);
			if(tmp3>tmp1){
				tmp1=tmp3;
			}
			tmp0=tmp0+1|0;
			if( +tmp2.length>(+(tmp0|0)))continue;
			break;
		}
	}else{
		tmp1=0;
	}
	if( +Larg0.a8.length>0){
		tmp1=Larg1/tmp1;
		tmp0=0;
		while(1){
			tmp2=Larg0.a8;
			tmp2[0+tmp0|0]=+Math.round( +tmp2[0+tmp0|0]*tmp1);
			tmp0=tmp0+1|0;
			if( +tmp2.length>(+(tmp0|0)))continue;
			break;
		}
	}
}
function _round(Larg0){
	var tmp0=null,tmp1=-0.,tmp2=0,tmp3=0,tmp4=0,tmp5=0;
	tmp0={d:new DataView(new ArrayBuffer(8)),o:0};
	tmp0.d.setFloat64(tmp0.o,Larg0,true);
	tmp2=tmp0.d.getInt32(1*4+tmp0.o,true)|0;
	tmp3=tmp0.d.getInt32(tmp0.o,true)|0;
	tmp4=tmp2>>>20&2047;
	tmp5=tmp4-1023|0;
	if(tmp4>>>0<1043){
		if(tmp4>>>0<1023){
			tmp2&= -2147483648;
			tmp3=(tmp5|0)===-1?tmp2|1072693248|0:tmp2|0;
			tmp2=0;
		}else{
			if((1048575>>>tmp5&tmp2|tmp3|0)===0)return Larg0;
			tmp3=(524288>>>tmp5)+tmp2& -1048576>>tmp5;
			tmp2=0;
		}
	}else{
		if(tmp4>>>0>1074)return (tmp5|0)===1024?Larg0+Larg0:Larg0;
		tmp5= -1>>>(tmp4-1043|0);
		if((tmp5&tmp3|0)===0)return Larg0;
		tmp4=(1<<(1074-tmp4|0))+tmp3|0;
		tmp3=tmp2+(tmp4>>>0<tmp3>>>0?1:0)|0;
		tmp2=tmp4&(tmp5^ -1);
	}
	tmp0.d.setInt32(1*4+tmp0.o,tmp3,true);
	tmp0.d.setInt32(tmp0.o,tmp2,true);
	tmp1=+tmp0.d.getFloat64(tmp0.o,true);
	return tmp1;
}
function __ZN10maxiSample16playUntilAtSpeedEdd(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=0,tmp2=-0.,tmp3=-0.,tmp4=-0.,tmp5=-0.;
	tmp2=+Larg0.d0;
	tmp3=(+(~~tmp2|0));
	tmp2-=tmp3;
	if(Larg1>1){
		tmp4=1;
	}else{
		tmp4=Larg1;
	}
	if(tmp4* +Larg0.a8.length>tmp3){
		tmp0=Larg0.a8;
		tmp4=+Larg0.d0;
		tmp1=~~tmp4;
		tmp5=+tmp0[0+(tmp1+1|0)|0];
		tmp3=+tmp0[0+(tmp1+2|0)|0];
		tmp5=(1-tmp2)*tmp5+tmp2*tmp3;
	}else{
		tmp4=+Larg0.d0;
		tmp5=0;
	}
	Larg0.d3=tmp5;
	Larg0.d0=tmp4+Larg2/(+((__ZN12maxiSettings10sampleRateE|0)/(Larg0.i6|0)|0));
	return tmp5;
}
function __ZN10maxiSample14loopSetPosOnZXEdd(Larg0,Larg1,Larg2){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=-0.,tmp2=0;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a7;
	a:{
		b:{
			if( +L$poptgep$poptgep1$poptgepsqueezed.d0<=0){
				if(!(Larg1>0))break b;
			}else{
				tmp2=L$poptgep$poptgep1$poptgepsqueezed.i1|0;
				if(!(Larg1>0))break b;
				if((tmp2&255)===0)break b;
			}
			L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
			L$poptgep$poptgep1$poptgepsqueezed.i1=0;
			if(Larg2>1){
				tmp1=1;
			}else if(Larg2<0){
				tmp1=0;
			}else{
				tmp1=Larg2;
			}
			tmp1*= +Larg0.a8.length;
			Larg0.d0=tmp1;
			break a;
		}
		L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		tmp1=+Larg0.d0;
	}
	tmp1+=1;
	Larg0.d0=tmp1;
	if( +Larg0.a8.length<=(+(~~tmp1|0))){
		Larg0.d0=0;
		tmp2=0;
	}else{
		tmp1=+Larg0.d0;
		tmp2=~~tmp1;
	}
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
	tmp1=+L$poptgep$poptgep1$poptgepsqueezed[0+tmp2|0];
	Larg0.d3=tmp1;
	return tmp1;
}
function __ZN10maxiSample28playOnZXAtSpeedBetweenPointsEdddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=0,tmp5=-0.;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a7;
	a:{
		b:{
			if( +L$poptgep$poptgep1$poptgepsqueezed.d0<=0){
				if(!(Larg1>0))break b;
			}else{
				tmp4=L$poptgep$poptgep1$poptgepsqueezed.i1|0;
				if(!(Larg1>0))break b;
				if((tmp4&255)===0)break b;
			}
			L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
			L$poptgep$poptgep1$poptgepsqueezed.i1=0;
			Larg0.d0=0;
			Larg0.d1=0;
			tmp1= +Larg0.a8.length*Larg3;
			Larg0.d0=tmp1;
			break a;
		}
		L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		tmp1=+Larg0.d0;
	}
	tmp2=(+(~~tmp1|0));
	tmp1-=tmp2;
	tmp3=Larg3+Larg4;
	if(tmp3>1){
		tmp3=1;
	}
	if(tmp3* +Larg0.a8.length>tmp2){
		L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
		tmp3=+Larg0.d0;
		tmp4=~~tmp3;
		tmp5=+L$poptgep$poptgep1$poptgepsqueezed[0+(tmp4+1|0)|0];
		tmp2=+L$poptgep$poptgep1$poptgepsqueezed[0+(tmp4+2|0)|0];
		tmp5=(1-tmp1)*tmp5+tmp1*tmp2;
	}else{
		tmp3=+Larg0.d0;
		tmp5=0;
	}
	Larg0.d3=tmp5;
	Larg0.d0=tmp3+Larg2/(+((__ZN12maxiSettings10sampleRateE|0)/(Larg0.i6|0)|0));
	return tmp5;
}
function __ZN10maxiSample25playOnZXAtSpeedFromOffsetEddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,tmp1=-0.,L$poptgep$poptgep1$poptgepsqueezed=null,tmp3=-0.,tmp4=0,tmp5=-0.;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a7;
	a:{
		b:{
			if( +L$poptgep$poptgep1$poptgepsqueezed.d0<=0){
				if(!(Larg1>0))break b;
			}else{
				tmp4=L$poptgep$poptgep1$poptgepsqueezed.i1|0;
				if(!(Larg1>0))break b;
				if((tmp4&255)===0)break b;
			}
			L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
			L$poptgep$poptgep1$poptgepsqueezed.i1=0;
			Larg0.d0=0;
			Larg0.d1=0;
			tmp3= +Larg0.a8.length*Larg3;
			Larg0.d0=tmp3;
			break a;
		}
		L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		tmp3=+Larg0.d0;
	}
	tmp4=~~tmp3;
	tmp3-=(+(tmp4|0));
	if( +Larg0.a8.length>(+(tmp4+1|0))){
		L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
		tmp5=+Larg0.d0;
		tmp4=~~tmp5;
		tmp0=+L$poptgep$poptgep1$poptgepsqueezed[0+tmp4|0];
		tmp1=+L$poptgep$poptgep1$poptgepsqueezed[0+(tmp4+1|0)|0];
		tmp3=(1-tmp3)*tmp0+tmp3*tmp1;
	}else{
		tmp5=+Larg0.d0;
		tmp3=0;
	}
	Larg0.d3=tmp3;
	Larg0.d0=tmp5+Larg2/(+((__ZN12maxiSettings10sampleRateE|0)/(Larg0.i6|0)|0));
	return tmp3;
}
function __ZN10maxiSample15playOnZXAtSpeedEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.,tmp1=-0.,L$poptgep$poptgep1$poptgepsqueezed=null,tmp3=-0.,tmp4=0,tmp5=-0.;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a7;
	a:{
		b:{
			if( +L$poptgep$poptgep1$poptgepsqueezed.d0<=0){
				if(!(Larg1>0))break b;
			}else{
				tmp4=L$poptgep$poptgep1$poptgepsqueezed.i1|0;
				if(!(Larg1>0))break b;
				if((tmp4&255)===0)break b;
			}
			L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
			L$poptgep$poptgep1$poptgepsqueezed.i1=0;
			Larg0.d0=0;
			Larg0.d1=0;
			tmp3=0;
			break a;
		}
		L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		tmp3=+Larg0.d0;
	}
	tmp4=~~tmp3;
	tmp3-=(+(tmp4|0));
	if( +Larg0.a8.length>(+(tmp4+1|0))){
		L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
		tmp5=+Larg0.d0;
		tmp4=~~tmp5;
		tmp0=+L$poptgep$poptgep1$poptgepsqueezed[0+tmp4|0];
		tmp1=+L$poptgep$poptgep1$poptgepsqueezed[0+(tmp4+1|0)|0];
		tmp3=(1-tmp3)*tmp0+tmp3*tmp1;
	}else{
		tmp5=+Larg0.d0;
		tmp3=0;
	}
	Larg0.d3=tmp3;
	Larg0.d0=tmp5+Larg2/(+((__ZN12maxiSettings10sampleRateE|0)/(Larg0.i6|0)|0));
	return tmp3;
}
function __ZN10maxiSample8playOnZXEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=0,L$poptgep$poptgep1$poptgepsqueezed=null,tmp3=-0.;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a7;
	a:{
		b:{
			if( +L$poptgep$poptgep1$poptgepsqueezed.d0<=0){
				if(!(Larg1>0))break b;
			}else{
				tmp1=L$poptgep$poptgep1$poptgepsqueezed.i1|0;
				if(!(Larg1>0))break b;
				if((tmp1&255)===0)break b;
			}
			L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
			L$poptgep$poptgep1$poptgepsqueezed.i1=0;
			Larg0.d0=0;
			Larg0.d1=0;
			tmp3=0;
			break a;
		}
		L$poptgep$poptgep1$poptgepsqueezed.d0=Larg1;
		L$poptgep$poptgep1$poptgepsqueezed.i1=0;
		tmp3=+Larg0.d0;
		tmp3=(+(~~tmp3|0));
	}
	if( +Larg0.a8.length>tmp3){
		L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
		tmp3=+Larg0.d0;
		tmp0=+L$poptgep$poptgep1$poptgepsqueezed[0+~~tmp3|0];
	}else{
		tmp3=+Larg0.d0;
		tmp0=0;
	}
	Larg0.d3=tmp0;
	Larg0.d0=tmp3+1;
	return tmp0;
}
function __ZN10maxiSample15playOnceAtSpeedEd(Larg0,Larg1){
	var tmp0=null,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=0,tmp5=-0.;
	tmp3=+Larg0.d0;
	tmp4=~~tmp3;
	tmp3-=(+(tmp4|0));
	if( +Larg0.a8.length>(+(tmp4+1|0))){
		tmp0=Larg0.a8;
		tmp5=+Larg0.d0;
		tmp4=~~tmp5;
		tmp1=+tmp0[0+tmp4|0];
		tmp2=+tmp0[0+(tmp4+1|0)|0];
		tmp3=(1-tmp3)*tmp1+tmp3*tmp2;
	}else{
		tmp5=+Larg0.d0;
		tmp3=0;
	}
	Larg0.d3=tmp3;
	Larg0.d0=tmp5+Larg1/(+((__ZN12maxiSettings10sampleRateE|0)/(Larg0.i6|0)|0));
	return tmp3;
}
function __ZN10maxiSample8playOnceEv(Larg0){
	var tmp0=null,tmp1=-0.,tmp2=-0.;
	tmp2=+Larg0.d0;
	if( +Larg0.a8.length>(+(~~tmp2|0))){
		tmp0=Larg0.a8;
		tmp2=+Larg0.d0;
		tmp1=+tmp0[0+~~tmp2|0];
	}else{
		tmp2=+Larg0.d0;
		tmp1=0;
	}
	Larg0.d3=tmp1;
	Larg0.d0=tmp2+1;
	return tmp1;
}
function __ZN10maxiSample9playUntilEd(Larg0,Larg1){
	var tmp0=-0.,tmp1=null,tmp2=-0.;
	tmp2= +Larg0.d0+1;
	Larg0.d0=tmp2;
	if(Larg1>1){
		tmp0=1;
	}else{
		tmp0=Larg1;
	}
	if(tmp0* +Larg0.a8.length>(+(~~tmp2|0))){
		tmp1=Larg0.a8;
		tmp2=+tmp1[0+~~ +Larg0.d0|0];
		Larg0.d3=tmp2;
		return tmp2;
	}
	Larg0.d3=0;
	return 0;
}
function __ZN10maxiSample8playLoopEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.,tmp1=null,tmp2=-0.,tmp3=-0.,tmp4=0;
	Larg0.d0= +Larg0.d0+1;
	tmp2=+Larg0.a8.length;
	tmp3=+Larg0.d0;
	tmp0=tmp2*Larg1;
	if(tmp3<tmp0){
		Larg0.d0=tmp0;
		tmp3=tmp0;
	}
	tmp4=~~tmp3;
	if(tmp2*Larg2<=(+(tmp4|0))){
		Larg0.d0=tmp0;
		tmp4=~~tmp0;
	}
	tmp1=Larg0.a8;
	tmp2=+tmp1[0+tmp4|0];
	Larg0.d3=tmp2;
	return tmp2;
}
function __ZN10maxiSample5play4Eddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,tmp1=-0.,tmp2=-0.,L$pmux=-0.,tmp4=null,tmp5=0,tmp6=-0.,tmp7=0,tmp8=-0.;
	tmp1=+Larg0.d0;
	if(Larg1>0){
		if(tmp1<Larg2){
			tmp2=Larg2;
		}else{
			tmp2=tmp1;
		}
		L$pmux=tmp2>=Larg3?Larg2:tmp2;
		a:{
			if(!(tmp2>=Larg3))if(!(tmp1<Larg2))break a;
			Larg0.d0=L$pmux;
			tmp2=L$pmux;
		}
		tmp2+=((Larg3-Larg2)/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1));
		Larg0.d0=tmp2;
		L$pmux=+Math.floor(tmp2);
		tmp1=tmp2-L$pmux;
		tmp4=Larg0.a8;
		if(tmp2>0){
			tmp5=~~L$pmux-1|0;
		}else{
			tmp5=0;
		}
		L$pmux=+tmp4[0+tmp5|0];
		tmp5=~~tmp2;
		tmp6=+tmp4[0+tmp5|0];
		if(tmp2<Larg3+-2){
			tmp7=tmp5+1|0;
		}else{
			tmp7=0;
		}
		tmp8=+tmp4[0+tmp7|0];
		if(tmp2<Larg3+-3){
			tmp5=tmp5+2|0;
		}else{
			tmp5=0;
		}
		tmp2=+tmp4[0+tmp5|0];
		tmp6+=(tmp1*((tmp8-L$pmux)*.5+tmp1*(L$pmux-tmp6*2.5+tmp8*2-tmp2*.5+tmp1*((tmp6-tmp8)*1.5+(tmp2-L$pmux)*.5))));
		Larg0.d3=tmp6;
		return tmp6;
	}
	if(tmp1<=Larg2){
		Larg0.d0=Larg3;
		tmp1=Larg3;
	}
	tmp1-=((Larg3-Larg2)/((+(__ZN12maxiSettings10sampleRateE|0))/(-Larg1)));
	Larg0.d0=tmp1;
	tmp2=+Math.floor(tmp1);
	tmp8=tmp1-tmp2;
	tmp4=Larg0.a8;
	tmp5=~~tmp1;
	tmp0=+tmp4[0+(tmp1>Larg2&&tmp1<Larg3+-1?tmp5+1|0:0|0)|0];
	L$pmux=+tmp4[0+tmp5|0];
	if(tmp1>Larg2){
		tmp7=tmp5-1|0;
	}else{
		tmp7=0;
	}
	tmp6=+tmp4[0+tmp7|0];
	if(tmp1>Larg2+1){
		tmp5=tmp5-2|0;
	}else{
		tmp5=0;
	}
	tmp1=+tmp4[0+tmp5|0];
	tmp2=-tmp8;
	L$pmux+=(((tmp6-tmp0)*.5+(tmp0-L$pmux*2.5+tmp6*2-tmp1*.5+tmp8*((L$pmux-tmp6)*1.5+(tmp1-tmp0)*.5))*tmp2)*tmp2);
	Larg0.d3=L$pmux;
	return L$pmux;
}
function __ZN10maxiSample31playAtSpeedBetweenPointsFromPosEdddd(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=-0.,tmp5=-0.,tmp6=null;
	tmp3=~~ +Larg0.a8.length;
	if((+(tmp3>>>0))<=Larg3){
		tmp4=(+(tmp3-1>>>0));
	}else{
		tmp4=Larg3;
	}
	if(Larg1>0){
		if(Larg4<Larg2){
			tmp5=Larg2;
		}else{
			tmp5=Larg4;
		}
		if(tmp5>=tmp4){
			tmp5=Larg2;
		}
		tmp5+=((tmp4-Larg2)/((+(__ZN12maxiSettings10sampleRateE|0))/Larg1));
		tmp4=+Math.floor(tmp5);
		tmp5-=tmp4;
		tmp0=~~tmp4;
		tmp1=tmp0+1|0;
		tmp2=tmp0+2|0;
		tmp6=Larg0.a8;
		tmp4= +tmp6[0+(tmp2>>>0<tmp3>>>0?tmp2|0:tmp3-1|0)|0]*tmp5+ +tmp6[0+(tmp1>>>0<tmp3>>>0?tmp1|0:tmp0-1|0)|0]*(1-tmp5);
		Larg0.d3=tmp4;
		return tmp4;
	}
	if(Larg4<=Larg2){
		tmp5=tmp4;
	}else{
		tmp5=Larg4;
	}
	tmp5-=((tmp4-Larg2)/((+(__ZN12maxiSettings10sampleRateE|0))/(-Larg1)));
	tmp4=+Math.floor(tmp5);
	tmp5-=tmp4;
	tmp3=~~tmp4;
	tmp6=Larg0.a8;
	tmp4= +tmp6[0+((tmp3|0)>1?tmp3-2|0:0|0)|0]*tmp5+ +tmp6[0+((tmp3|0)>0?tmp3-1|0:0|0)|0]*(-1-tmp5);
	Larg0.d3=tmp4;
	return tmp4;
}
function __ZN10maxiSample24playAtSpeedBetweenPointsEddd(Larg0,Larg1,Larg2,Larg3){
	return +__ZN10maxiSample31playAtSpeedBetweenPointsFromPosEdddd(Larg0,Larg1,Larg2,Larg3,+Larg0.d0);
}
function __ZN10maxiSample11setPositionEd(Larg0,Larg1){
	var tmp0=-0.;
	if(Larg1>1){
		tmp0=1;
	}else if(Larg1<0){
		tmp0=0;
	}else{
		tmp0=Larg1;
	}
	Larg0.d0=tmp0* +Larg0.a8.length;
}
function __ZN10maxiSample4playEv(Larg0){
	var tmp0=0,tmp1=null,tmp2=-0.;
	tmp2= +Larg0.d0+1;
	Larg0.d0=tmp2;
	if( +Larg0.a8.length<=(+(~~tmp2|0))){
		Larg0.d0=0;
		tmp0=0;
	}else{
		tmp2=+Larg0.d0;
		tmp0=~~tmp2;
	}
	tmp1=Larg0.a8;
	tmp2=+tmp1[0+tmp0|0];
	Larg0.d3=tmp2;
	return tmp2;
}
function __ZN10maxiSample7triggerEv(Larg0){
	Larg0.d0=0;
	Larg0.d1=0;
}
function __ZN10maxiSampleC1Ev(Larg0){
	var L$poptgep$poptgep2$poptgepsqueezed=null;
	Larg0.d0=0;
	Larg0.d1=0;
	L$poptgep$poptgep2$poptgepsqueezed=Larg0.a4;
	L$poptgep$poptgep2$poptgepsqueezed.d0=.5;
	L$poptgep$poptgep2$poptgepsqueezed.d1=.5;
	L$poptgep$poptgep2$poptgepsqueezed.d2=0;
	Larg0.i5=Larg0.i5& -65536|1;
	Larg0.i6=__ZN12maxiSettings10sampleRateE|0;
	L$poptgep$poptgep2$poptgepsqueezed=Larg0.a7;
	L$poptgep$poptgep2$poptgepsqueezed.d0=1;
	L$poptgep$poptgep2$poptgepsqueezed.i1=1;
	Larg0.a8=new Float64Array(1);
}
function __ZN10maxiSample5resetEv(Larg0){
	Larg0.d0=0;
}
function __ZN10maxiSample10loopRecordEdbddd(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=null,L$poptgep$poptgep$poptgepsqueezed=null,tmp2=-0.;
	L$poptgep$poptgep$poptgepsqueezed=Larg0.a4;
	L$poptgep$poptgep$poptgepsqueezed.d2= +L$poptgep$poptgep$poptgepsqueezed.d0*(+(Larg2&1))+ +L$poptgep$poptgep$poptgepsqueezed.d1* +L$poptgep$poptgep$poptgepsqueezed.d2;
	tmp2=+Larg0.d1;
	if(tmp2< +Larg0.a8.length*Larg4)Larg0.d1= +Larg0.a8.length*Larg4;
	if(Larg2){
		tmp0=Larg0.a8;
		L$poptgep$poptgep$poptgepsqueezed=new Float64Array( +L$poptgep$poptgep$poptgepsqueezed.d2*((1-Larg3)*Larg1+ +tmp0[0+~~ +Larg0.d1|0]/32767*Larg3)*32767);
	}
	tmp2= +Larg0.d1+1;
	Larg0.d1=tmp2;
	if(tmp2>= +Larg0.a8.length*Larg5)Larg0.d1= +Larg0.a8.length*Larg4;
}
function __ZN10maxiSample5clearEv(Larg0){
	Larg0.a8.fill(0);
}
function __ZN10maxiSample16setSampleAndRateEPN6client12Float64ArrayEi(Larg0,Larg1,Larg2){
	var tmp0=null;
	tmp0=new Float64Array(Larg1);
	Larg0.a8=tmp0;
	Larg0.i6=44100;
	Larg0.d0= +tmp0.length+-1;
	Larg0.i6=Larg2;
}
function __ZN10maxiSample9setSampleEPN6client12Float64ArrayE(Larg0,Larg1){
	var tmp0=null;
	tmp0=new Float64Array(Larg1);
	Larg0.a8=tmp0;
	Larg0.i6=44100;
	Larg0.d0= +tmp0.length+-1;
}
function __ZN10maxiSample7isReadyEv(Larg0){
	return ( +Larg0.a8.length>1?1:0)|0;
}
function __ZN10maxiSample9getLengthEv(Larg0){
	return ~~ +Larg0.a8.length|0;
}
function __ZN11maxiTriggerC1Ev(Larg0){
	Larg0.d0=1;
	Larg0.i1=1;
}
function __ZN11maxiTrigger9onChangedEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.;
	tmp0=+Larg0.d0;
	tmp0=+Math.abs(Larg1-tmp0);
	if(tmp0>Larg2){
		Larg0.d0=Larg1;
		return 1;
	}
	Larg0.d0=Larg1;
	return 0;
}
function __ZN11maxiTrigger4onZXEd(Larg0,Larg1){
	var tmp0=0;
	if( +Larg0.d0<=0){
		if(!(Larg1>0)){
			Larg0.d0=Larg1;
			Larg0.i1=0;
			return 0;
		}
	}else{
		tmp0=Larg0.i1|0;
		if(!(Larg1>0)){
			Larg0.d0=Larg1;
			Larg0.i1=0;
			return 0;
		}
		if((tmp0&255)===0){
			Larg0.d0=Larg1;
			Larg0.i1=0;
			return 0;
		}
	}
	Larg0.d0=Larg1;
	Larg0.i1=0;
	return 1;
}
function __ZN10maxiFilterC1Ev(Larg0){
	Larg0.d5=0;
	Larg0.d6=0;
	Larg0.d7=0;
	Larg0.d8=0;
}
function __ZN10maxiFilter8bandpassEddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,L$poptgep$poptgep2$poptgepsqueezed=null,tmp2=-0.,tmp3=-0.,tmp4=-0.;
	Larg0.d9=Larg2;
	tmp2=(+(__ZN12maxiSettings10sampleRateE|0));
	tmp3=tmp2*.5;
	if(tmp3<Larg2)Larg0.d9=tmp3;
	else{
		tmp3=Larg2;
	}
	if(Larg3>=1){
		tmp4=.99999899999999997;
	}else{
		tmp4=Larg3;
	}
	tmp3=+Math.cos(tmp3*6.2831853071795862/tmp2);
	Larg0.d7=tmp3;
	tmp0=(1-tmp4)* +Math.sqrt(tmp4*(tmp4-tmp3*tmp3*4+2)+1);
	L$poptgep$poptgep2$poptgepsqueezed=Larg0.a3;
	L$poptgep$poptgep2$poptgepsqueezed[0]=tmp0;
	tmp3=tmp4*(tmp3*2);
	L$poptgep$poptgep2$poptgepsqueezed[1]=tmp3;
	tmp4*=tmp4;
	L$poptgep$poptgep2$poptgepsqueezed[2]=tmp4;
	tmp2=+L$poptgep$poptgep2$poptgepsqueezed[11];
	tmp3=tmp0*Larg1+tmp3*tmp2+tmp4* +L$poptgep$poptgep2$poptgepsqueezed[12];
	Larg0.d2=tmp3;
	L$poptgep$poptgep2$poptgepsqueezed[12]=tmp2;
	L$poptgep$poptgep2$poptgepsqueezed[11]=tmp3;
	return tmp3;
}
function __ZN10maxiFilter5hiresEddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,tmp1=-0.,tmp2=-0.,tmp3=-0.;
	if(Larg2<10){
		tmp1=10;
	}else{
		tmp1=Larg2;
	}
	Larg0.d9=tmp1;
	tmp2=(+(__ZN12maxiSettings10sampleRateE|0));
	if(tmp1>tmp2){
		Larg0.d9=tmp2;
		tmp1=tmp2;
	}
	if(Larg3<1){
		tmp3=1;
	}else{
		tmp3=Larg3;
	}
	tmp1=+Math.cos(tmp1*6.2831853071795862/tmp2);
	Larg0.d7=tmp1;
	tmp2=2-tmp1*2;
	Larg0.d8=tmp2;
	tmp1+=-1;
	tmp0=+Math.sqrt(- +Math.pow(tmp1,3));
	tmp3*=tmp1;
	tmp1=+Larg0.d6;
	tmp2= +Larg0.d5+tmp2*(Larg1-tmp1);
	tmp1+=tmp2;
	Larg0.d6=tmp1;
	Larg0.d5=(tmp3+tmp0*1.4142135623730951)/tmp3*tmp2;
	tmp1=Larg1-tmp1;
	Larg0.d2=tmp1;
	return tmp1;
}
function __ZN10maxiFilter5loresEddd(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,tmp1=-0.,tmp2=-0.,tmp3=-0.;
	if(Larg2<10){
		tmp1=10;
	}else{
		tmp1=Larg2;
	}
	Larg0.d9=tmp1;
	tmp2=(+(__ZN12maxiSettings10sampleRateE|0));
	if(tmp1>tmp2){
		Larg0.d9=tmp2;
		tmp1=tmp2;
	}
	if(Larg3<1){
		tmp3=1;
	}else{
		tmp3=Larg3;
	}
	tmp1=+Math.cos(tmp1*6.2831853071795862/tmp2);
	Larg0.d7=tmp1;
	tmp2=2-tmp1*2;
	Larg0.d8=tmp2;
	tmp1+=-1;
	tmp0=+Math.sqrt(- +Math.pow(tmp1,3));
	tmp3*=tmp1;
	tmp1=+Larg0.d6;
	tmp2= +Larg0.d5+tmp2*(Larg1-tmp1);
	tmp1+=tmp2;
	Larg0.d6=tmp1;
	Larg0.d5=(tmp3+tmp0*1.4142135623730951)/tmp3*tmp2;
	Larg0.d2=tmp1;
	return tmp1;
}
function __ZN10maxiFilter6hipassEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.;
	tmp0=+Larg0.a3[10];
	tmp0=Larg1-(tmp0+(Larg1-tmp0)*Larg2);
	Larg0.d2=tmp0;
	Larg0.a3[10]=tmp0;
	return tmp0;
}
function __ZN10maxiFilter6lopassEdd(Larg0,Larg1,Larg2){
	var tmp0=-0.;
	tmp0=+Larg0.a3[10];
	tmp0+=((Larg1-tmp0)*Larg2);
	Larg0.d2=tmp0;
	Larg0.a3[10]=tmp0;
	return tmp0;
}
function __ZN10maxiFilter12getResonanceEv(Larg0){
	return +Larg0.d10;
}
function __ZN10maxiFilter9getCutoffEv(Larg0){
	return +Larg0.d9;
}
function __ZN10maxiFilter12setResonanceEd(Larg0,Larg1){
	Larg0.d10=Larg1;
}
function __ZN10maxiFilter9setCutoffEd(Larg0,Larg1){
	Larg0.d9=Larg1;
}
function __ZN12maxiSettingsC1Ev(Larg0){
}
function __ZN12maxiSettings13getSampleRateEv(){
	return __ZN12maxiSettings10sampleRateE|0;
}
function __ZN12maxiSettings5setupEiii(Larg0,Larg1,Larg2){
	__ZN12maxiSettings10sampleRateE=Larg0;
}
var _$pstr=new Uint8Array([77,97,120,105,109,105,108,105,97,110,32,50,32,45,32,74,97,118,97,115,99,114,105,112,116,32,84,114,97,110,115,112,105,108,101,32,48,46,50,0]);
var __ZN12maxiSettings10sampleRateE=44100;
var _transition=new Float64Array([-0.500003,-0.500003,-0.500023,-0.500063,-0.500121,-0.500179,-0.500259,-0.50036,-0.500476,-0.500591,-0.500732,-0.500893,-0.501066,-0.501239,-0.50144,-0.501661,-0.501891,-0.502123,-0.502382,-0.502662,-0.502949,-0.50324,-0.503555,-0.503895,-0.504238,-0.504587,-0.504958,-0.505356,-0.505754,-0.506162,-0.506589,-0.507042,-0.507495,-0.50796,-0.508444,-0.508951,-0.509458,-0.509979,-0.510518,-0.511079,-0.511638,-0.512213,-0.512808,-0.51342,-0.51403,-0.514659,-0.515307,-0.51597,-0.51663,-0.517312,-0.518012,-0.518724,-0.519433,-0.520166,-0.520916,-0.521675,-0.522432,-0.523214,-0.524013,-0.524819,-0.525624,-0.526451,-0.527298,-0.528147,-0.528999,-0.52987,-0.530762,-0.531654,-0.532551,-0.533464,-0.534399,-0.535332,-0.536271,-0.537226,-0.538202,-0.539172,-0.540152,-0.541148,-0.542161,-0.543168,-0.544187,-0.54522,-0.546269,-0.54731,-0.548365,-0.549434,-0.550516,-0.55159,-0.552679,-0.553781,-0.554893,-0.555997,-0.557118,-0.558252,-0.559391,-0.560524,-0.561674,-0.562836,-0.564001,-0.565161,-0.566336,-0.567524,-0.568712,-0.569896,-0.571095,-0.572306,-0.573514,-0.574721,-0.575939,-0.577171,-0.578396,-0.579622,-0.580858,-0.582108,-0.583348,-0.58459,-0.585842,-0.587106,-0.588358,-0.589614,-0.590879,-0.592154,-0.593415,-0.594682,-0.595957,-0.59724,-0.598507,-0.599782,-0.601064,-0.602351,-0.603623,-0.604902,-0.606189,-0.607476,-0.60875,-0.610032,-0.61131899999999995,-0.612605,-0.613877,-0.615157,-0.616443,-0.617723,-0.618992,-0.620268,-0.62154799999999999,-0.62282,-0.624083,-0.62535,-0.626622,-0.627882,-0.629135,-0.630391,-0.631652,-0.632898,-0.634138,-0.63538,-0.636626,-0.637854,-0.639078,-0.640304,-0.641531,-0.64273899999999995,-0.643943,-0.645149,-0.646355,-0.647538,-0.64872,-0.649903,-0.651084,-0.652241,-0.653397,-0.654553,-0.65570499999999998,-0.656834,-0.657961,-0.659087,-0.660206,-0.661304,-0.66239899999999996,-0.66349199999999997,-0.664575,-0.665639,-0.666699,-0.667756,-0.6688,-0.66982699999999995,-0.670849,-0.671866,-0.672868,-0.673854,-0.674835,-0.675811,-0.676767,-0.677709,-0.678646,-0.679576,-0.680484,-0.68138,-0.682269,-0.683151,-0.684008,-0.684854,-0.685693,-0.686524,-0.687327,-0.688119,-0.688905,-0.689682,-0.690428,-0.691164,-0.691893,-0.692613,-0.6933,-0.693978,-0.694647,-0.695305,-0.695932,-0.696549,-0.697156,-0.697748,-0.69831299999999996,-0.698865,-0.699407,-0.699932,-0.700431,-0.700917,-0.701391,-0.701845,-0.702276,-0.702693,-0.703097,-0.703478,-0.703837,-0.704183,-0.704514,-0.704819,-0.705105,-0.705378,-0.70563299999999995,-0.70586,-0.706069,-0.706265,-0.706444,-0.706591,-0.706721,-0.706837,-0.706938,-0.707003,-0.707051,-0.707086,-0.707106,-0.707086,-0.707051,-0.70700099999999999,-0.706935,-0.706832,-0.706711,-0.706576,-0.70642099999999997,-0.706233,-0.706025,-0.705802,-0.70555699999999999,-0.705282,-0.704984,-0.704671,-0.704334,-0.703969,-0.703582,-0.703176,-0.702746,-0.702288,-0.70181,-0.701312,-0.70078499999999999,-0.700234,-0.699664,-0.69907,-0.698447,-0.6978,-0.697135,-0.696446,-0.695725,-0.694981,-0.694219,-0.693435,-0.692613,-0.691771,-0.690911,-0.69003,-0.689108,-0.688166,-0.68720599999999998,-0.686227,-0.685204,-0.684162,-0.68310099999999996,-0.682019,-0.680898,-0.679755,-0.678592,-0.677407,-0.676187,-0.674941,-0.673676,-0.672386,-0.671066,-0.669718,-0.66835,-0.66695499999999996,-0.665532,-0.66408299999999998,-0.662611,-0.661112,-0.659585,-0.658035,-0.656459,-0.654854,-0.653223,-0.651572,-0.649892,-0.648181,-0.646446,-0.644691,-0.642909,-0.641093,-0.639253,-0.637393,-0.63551,-0.633588,-0.631644,-0.62968,-0.627695,-0.625668,-0.62362099999999998,-0.621553,-0.619464,-0.617334,-0.615183,-0.61301099999999997,-0.610817,-0.608587,-0.606333,-0.60405799999999998,-0.60176,-0.59942899999999999,-0.597072,-0.594695,-0.592293,-0.589862,-0.587404,-0.584925,-0.58242,-0.579888,-0.577331,-0.574751,-0.572145,-0.569512,-0.566858,-0.564178,-0.561471,-0.558739,-0.555988,-0.553209,-0.550402,-0.547572,-0.544723,-0.54185,-0.538944,-0.536018,-0.533072,-0.530105,-0.527103,-0.524081,-0.52104,-0.51798,-0.514883,-0.511767,-0.508633,-0.505479,-0.502291,-0.499083,-0.495857,-0.492611,-0.489335,-0.486037,-0.48272,-0.479384,-0.476021,-0.472634,-0.46923,-0.465805,-0.462356,-0.458884,-0.455394,-0.451882,-0.448348,-0.444795,-0.44122,-0.437624,-0.434008,-0.430374,-0.426718,-0.423041,-0.419344,-0.415631,-0.411897,-0.40814,-0.404365,-0.400575,-0.396766,-0.392933,-0.389082,-0.385217,-0.381336,-0.377428,-0.373505,-0.369568,-0.365616,-0.361638,-0.357645,-0.353638,-0.349617,-0.345572,-0.341512,-0.337438,-0.33335,-0.329242,-0.325118,-0.32098,-0.316829,-0.31266,-0.308474,-0.304276,-0.300063,-0.295836,-0.291593,-0.287337,-0.283067,-0.278783,-0.274487,-0.270176,-0.265852,-0.261515,-0.257168,-0.252806,-0.248431,-0.244045,-0.239649,-0.23524,-0.230817,-0.226385,-0.221943,-0.21749,-0.213024,-0.208548,-0.204064,-0.199571,-0.195064,-0.190549,-0.186026,-0.181495,-0.176952,-0.1724,-0.167842,-0.163277,-0.1587,-0.154117,-0.149527,-0.14493,-0.140325,-0.135712,-0.131094,-0.12647,-0.121839,-0.117201,-0.112559,-0.10791,-0.103257,-0.0985979,-0.093934299999999998,-0.0892662,-0.0845935,-0.079917,-0.0752362,-0.0705516,-0.0658635,-0.0611729,-0.0564786,-0.0517814,-0.0470818,-0.0423802,-0.0376765,-0.0329703,-0.0282629,-0.0235542,-0.0188445,-0.0141335,-0.00942183,-0.00470983,2.41979E-6,.00471481,.00942681,.0141384,.0188494,.023559,.028268,.0329754,.0376813,.0423851,.0470868,.0517863,.0564836,.0611777,.0658683,.0705566,.075241199999999994,.0799218,.084598199999999998,.089271199999999995,.0939393,.0986028,.103262,.107915,.112563,.117206,.121844,.126475,.131099,.135717,.14033,.144935,.149531,.154122,.158705,.163281,.167847,.172405,.176956,.1815,.18603,.190553,.195069,.199576,.204068,.208552,.213028,.217495,.221947,.226389,.230822,.235245,.239653,.244049,.248436,.252811,.257173,.26152,.265857,.270181,.274491,.278788,.283071,.287341,.291597,.29584,.300068,.30428,.308478,.312664,.316833,.320984,.325122,.329246,.333354,.337442,.341516,.345576,.34962,.353642,.357649,.361642,.36562,.369572,.373509,.377432,.38134,.385221,.389086,.392936,.39677,.400579,.404369,.408143,.4119,.415634,.419347,.423044,.426721,.430377,.434011,.437627,.441223,.444798,.448351,.451885,.455397,.458887,.462359,.465807,.469232,.472637,.476024,.479386,.482723,.486039,.489338,.492613,.49586,.499086,.502294,.505481,.508635,.511769,.514885,.517982,.521042,.524083,.527105,.530107,.533074,.53602,.538946,.541851,.544725,.547574,.550404,.553211,.555989,.55874,.561472,.564179,.566859,.569514,.572146,.574753,.577332,.579889,.582421,.584926,.587405,.589863,.592294,.594696,.59707299999999996,.59943,.60176,.604059,.606333,.608588,.610818,.613012,.615183,.61733499999999997,.619464,.621553,.62362099999999998,.625669,.627696,.629681,.631645,.633588,.63551,.637393,.639253,.641093,.642909,.644691,.646446,.648181,.649892,.651572,.653223,.654854,.656459,.658035,.659585,.661112,.662611,.66408299999999998,.665532,.66695499999999996,.66835,.669718,.671066,.672386,.673676,.674941,.676187,.677407,.678592,.679755,.680898,.682019,.68310099999999996,.684162,.685204,.686227,.68720599999999998,.688166,.689108,.69003,.690911,.691771,.692613,.693435,.694219,.694981,.695725,.696447,.697135,.6978,.698447,.69907,.699664,.700234,.700786,.701312,.70181,.702288,.702746,.703177,.703582,.703969,.704334,.704671,.704984,.705282,.70555699999999999,.705802,.706025,.706233,.706422,.706576,.706712,.706832,.706936,.707002,.707051,.707086,.707106,.707086,.707051,.707003,.70693899999999998,.706838,.706721,.706592,.706445,.706265,.70607,.705861,.705634,.705378,.705105,.70482,.704515,.704184,.703837,.703478,.703097,.702694,.702276,.70184599999999997,.701392,.700917,.700432,.699932,.699408,.69886599999999999,.698314,.69774899999999995,.697156,.696549,.695933,.695305,.694648,.693979,.69330099999999995,.692613,.691894,.691165,.690428,.689683,.688905,.68812,.687327,.686525,.685693,.684854,.684009,.68315199999999998,.68227,.68138,.680485,.679577,.678647,.67771,.676768,.675811,.674836,.673855,.672869,.67186699999999999,.670849,.66982699999999995,.66880099999999998,.667757,.6667,.66564,.664576,.663493,.6624,.661305,.66020699999999999,.659088,.657962,.656834,.65570499999999998,.654553,.653398,.652241,.651085,.649903,.648721,.647539,.646356,.645149,.643944,.64273899999999995,.64153199999999999,.640304,.63907899999999995,.637855,.636626,.63538099999999997,.634139,.632899,.631652,.630392,.629136,.62788299999999997,.626622,.62535,.624083,.62282,.62154799999999999,.620268,.618993,.617724,.616443,.615158,.613878,.612605,.61132,.610032,.608751,.607477,.606189,.60490299999999997,.603623,.602351,.60106499999999996,.599782,.598508,.59724,.595957,.594682,.593415,.592154,.59088,.589615,.588359,.587106,.585843,.584591,.583349,.582108,.580859,.579623,.578397,.577172,.575939,.574721,.573515,.572307,.571095,.569897,.568713,.567525,.566337,.565161,.564002,.562837,.561674,.560525,.559392,.558252,.557119,.555998,.554893,.553782,.552679,.55159,.550516,.549434,.548365,.54731,.546269,.54522,.544187,.543168,.542161,.541148,.540153,.539173,.538202,.537226,.536271,.535332,.5344,.533464,.532551,.531654,.530762,.52987,.528999,.528147,.527298,.526451,.525624,.524819,.524014,.523214,.522432,.521675,.520916,.520166,.519433,.518724,.518012,.517312,.51663,.51597,.515307,.51466,.51403,.51342,.512808,.512213,.511638,.511079,.510518,.509979,.509458,.508951,.508444,.50796,.507495,.507042,.506589,.506162,.505754,.505356,.504958,.504587,.504237,.503895,.503555,.50324,.502949,.502662,.502382,.502123,.501891,.501661,.50144,.501239,.501066,.500893,.500732,.500591,.500476,.50036,.500259,.500179,.500121,.500063,.500023,.500003,.500003]);
var _sineBuffer=new Float64Array([0,.012268,.024536,.036804,.049042,.06131,.073547,.085785,.097991999999999995,.1102,.12241,.13455,.1467,.15884,.17093,.18301,.19507,.20709,.21909,.23105,.24295,.25485,.26669,.2785,.29025,.30197,.31366,.32529,.33685,.34839,.35986,.37128,.38266,.39395,.40521,.41641,.42752,.4386,.44958,.46051,.47137,.48215,.49286,.50351,.51407,.52457,.53497,.54529,.55554,.5657,.57578,.58575,.59567,.60547,.61519999999999997,.62482,.63437,.6438,.65314,.66237999999999997,.67151,.68057,.68951,.69833,.70706,.7157,.72421,.7326,.74091,.74907999999999997,.75717,.76514,.77298,.78069999999999994,.7883,.79581,.80316,.81042,.81754,.82455,.83142,.8382,.84482,.85132,.8577,.86392,.87006,.87604,.88187,.8876,.89319,.89861999999999997,.90396,.90912,.91415,.91907,.92383,.92847,.93294999999999995,.93728999999999995,.9415,.94555999999999995,.94948999999999994,.95325,.95691,.96038999999999996,.96374999999999999,.96692,.96999999999999997,.97289999999999998,.97565,.97826999999999997,.98073999999999994,.98306,.98523,.98724,.98914,.99084,.99243,.99387,.99514999999999998,.99628,.99724999999999997,.99807999999999996,.99875,.99926999999999999,.99965999999999999,.99987999999999999,.99997,.99987999999999999,.99965999999999999,.99926999999999999,.99875,.99807999999999996,.99724999999999997,.99628,.99514999999999998,.99387,.99243,.99084,.98914,.98724,.98523,.98306,.98073999999999994,.97826999999999997,.97565,.97289999999999998,.96999999999999997,.96692,.96374999999999999,.96038999999999996,.95691,.95325,.94948999999999994,.94555999999999995,.9415,.93728999999999995,.93294999999999995,.92847,.92383,.91907,.91415,.90912,.90396,.89861999999999997,.89319,.8876,.88187,.87604,.87006,.86392,.8577,.85132,.84482,.8382,.83142,.82455,.81754,.81042,.80316,.79581,.7883,.78069999999999994,.77298,.76514,.75717,.74907999999999997,.74091,.7326,.72421,.7157,.70706,.69833,.68951,.68057,.67151,.66237999999999997,.65314,.6438,.63437,.62482,.61519999999999997,.60547,.59567,.58575,.57578,.5657,.55554,.54529,.53497,.52457,.51407,.50351,.49286,.48215,.47137,.46051,.44958,.4386,.42752,.41641,.40521,.39395,.38266,.37128,.35986,.34839,.33685,.32529,.31366,.30197,.29025,.2785,.26669,.25485,.24295,.23105,.21909,.20709,.19507,.18301,.17093,.15884,.1467,.13455,.12241,.1102,.097991999999999995,.085785,.073547,.06131,.049042,.036804,.024536,.012268,0,-0.012268,-0.024536,-0.036804,-0.049042,-0.06131,-0.073547,-0.085785,-0.097991999999999995,-0.1102,-0.12241,-0.13455,-0.1467,-0.15884,-0.17093,-0.18301,-0.19507,-0.20709,-0.21909,-0.23105,-0.24295,-0.25485,-0.26669,-0.2785,-0.29025,-0.30197,-0.31366,-0.32529,-0.33685,-0.34839,-0.35986,-0.37128,-0.38266,-0.39395,-0.40521,-0.41641,-0.42752,-0.4386,-0.44958,-0.46051,-0.47137,-0.48215,-0.49286,-0.50351,-0.51407,-0.52457,-0.53497,-0.54529,-0.55554,-0.5657,-0.57578,-0.58575,-0.59567,-0.60547,-0.61519999999999997,-0.62482,-0.63437,-0.6438,-0.65314,-0.66237999999999997,-0.67151,-0.68057,-0.68951,-0.69833,-0.70706,-0.7157,-0.72421,-0.7326,-0.74091,-0.74907999999999997,-0.75717,-0.76514,-0.77298,-0.78069999999999994,-0.7883,-0.79581,-0.80316,-0.81042,-0.81754,-0.82455,-0.83142,-0.8382,-0.84482,-0.85132,-0.8577,-0.86392,-0.87006,-0.87604,-0.88187,-0.8876,-0.89319,-0.89861999999999997,-0.90396,-0.90912,-0.91415,-0.91907,-0.92383,-0.92847,-0.93294999999999995,-0.93728999999999995,-0.9415,-0.94555999999999995,-0.94948999999999994,-0.95325,-0.95691,-0.96038999999999996,-0.96374999999999999,-0.96692,-0.96999999999999997,-0.97289999999999998,-0.97565,-0.97826999999999997,-0.98073999999999994,-0.98306,-0.98523,-0.98724,-0.98914,-0.99084,-0.99243,-0.99387,-0.99514999999999998,-0.99628,-0.99724999999999997,-0.99807999999999996,-0.99875,-0.99926999999999999,-0.99965999999999999,-0.99987999999999999,-0.99997,-0.99987999999999999,-0.99965999999999999,-0.99926999999999999,-0.99875,-0.99807999999999996,-0.99724999999999997,-0.99628,-0.99514999999999998,-0.99387,-0.99243,-0.99084,-0.98914,-0.98724,-0.98523,-0.98306,-0.98073999999999994,-0.97826999999999997,-0.97565,-0.97289999999999998,-0.96999999999999997,-0.96692,-0.96374999999999999,-0.96038999999999996,-0.95691,-0.95325,-0.94948999999999994,-0.94555999999999995,-0.9415,-0.93728999999999995,-0.93294999999999995,-0.92847,-0.92383,-0.91907,-0.91415,-0.90912,-0.90396,-0.89861999999999997,-0.89319,-0.8876,-0.88187,-0.87604,-0.87006,-0.86392,-0.8577,-0.85132,-0.84482,-0.8382,-0.83142,-0.82455,-0.81754,-0.81042,-0.80316,-0.79581,-0.7883,-0.78069999999999994,-0.77298,-0.76514,-0.75717,-0.74907999999999997,-0.74091,-0.7326,-0.72421,-0.7157,-0.70706,-0.69833,-0.68951,-0.68057,-0.67151,-0.66237999999999997,-0.65314,-0.6438,-0.63437,-0.62482,-0.61519999999999997,-0.60547,-0.59567,-0.58575,-0.57578,-0.5657,-0.55554,-0.54529,-0.53497,-0.52457,-0.51407,-0.50351,-0.49286,-0.48215,-0.47137,-0.46051,-0.44958,-0.4386,-0.42752,-0.41641,-0.40521,-0.39395,-0.38266,-0.37128,-0.35986,-0.34839,-0.33685,-0.32529,-0.31366,-0.30197,-0.29025,-0.2785,-0.26669,-0.25485,-0.24295,-0.23105,-0.21909,-0.20709,-0.19507,-0.18301,-0.17093,-0.15884,-0.1467,-0.13455,-0.12241,-0.1102,-0.097991999999999995,-0.085785,-0.073547,-0.06131,-0.049042,-0.036804,-0.024536,-0.012268,0,.012268]);
var _impure_data$p14=null;
function constructor_class$p_Z10maxiFilter(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.a3=new Float64Array(20);
	this.d4=-0.;
	this.d5=-0.;
	this.d6=-0.;
	this.d7=-0.;
	this.d8=-0.;
	this.d9=-0.;
	this.d10=-0.;
}
function constructor_class$p_Z10maxiSample(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.a4={d0:-0.,d1:-0.,d2:-0.};
	this.i5=0;
	this.i6=0;
	this.a7={d0:-0.,i1:0};
	this.a8=null;
}
function createArray_literal0(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]=-0.;
	return r;
}
function maxiSettings(){
	this.i0=0;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN12maxiSettingsC1Ev(this);
}
maxiSettings.setup=function (a0,a1,a2){
	return __ZN12maxiSettings5setupEiii(a0,a1,a2);
};
maxiSettings.getSampleRate=function (){
	return __ZN12maxiSettings13getSampleRateEv();
};
maxiSettings.setup=function (a0,a1,a2){
	return __ZN12maxiSettings5setupEiii(a0,a1,a2);
};
maxiSettings.getSampleRate=function (){
	return __ZN12maxiSettings13getSampleRateEv();
};
function maxiFilter(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.a3=new Float64Array(20);
	this.d4=-0.;
	this.d5=-0.;
	this.d6=-0.;
	this.d7=-0.;
	this.d8=-0.;
	this.d9=-0.;
	this.d10=-0.;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN10maxiFilterC1Ev(this);
}
maxiFilter.prototype.setCutoff=function (a0){
	return __ZN10maxiFilter9setCutoffEd(this,a0);
};
maxiFilter.prototype.setResonance=function (a0){
	return __ZN10maxiFilter12setResonanceEd(this,a0);
};
maxiFilter.prototype.getCutoff=function (){
	return __ZN10maxiFilter9getCutoffEv(this);
};
maxiFilter.prototype.getResonance=function (){
	return __ZN10maxiFilter12getResonanceEv(this);
};
maxiFilter.prototype.setCutoff=function (a0){
	return __ZN10maxiFilter9setCutoffEd(this,a0);
};
maxiFilter.prototype.setResonance=function (a0){
	return __ZN10maxiFilter12setResonanceEd(this,a0);
};
maxiFilter.prototype.getCutoff=function (){
	return __ZN10maxiFilter9getCutoffEv(this);
};
maxiFilter.prototype.getResonance=function (){
	return __ZN10maxiFilter12getResonanceEv(this);
};
maxiFilter.prototype.lopass=function (a0,a1){
	return __ZN10maxiFilter6lopassEdd(this,a0,a1);
};
maxiFilter.prototype.hipass=function (a0,a1){
	return __ZN10maxiFilter6hipassEdd(this,a0,a1);
};
maxiFilter.prototype.lores=function (a0,a1,a2){
	return __ZN10maxiFilter5loresEddd(this,a0,a1,a2);
};
maxiFilter.prototype.hires=function (a0,a1,a2){
	return __ZN10maxiFilter5hiresEddd(this,a0,a1,a2);
};
maxiFilter.prototype.bandpass=function (a0,a1,a2){
	return __ZN10maxiFilter8bandpassEddd(this,a0,a1,a2);
};
function maxiTrigger(){
	this.d0=-0.;
	this.i1=0;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN11maxiTriggerC1Ev(this);
}
maxiTrigger.prototype.onZX=function (a0){
	return __ZN11maxiTrigger4onZXEd(this,a0);
};
maxiTrigger.prototype.onChanged=function (a0,a1){
	return __ZN11maxiTrigger9onChangedEdd(this,a0,a1);
};
maxiTrigger.prototype.onZX=function (a0){
	return __ZN11maxiTrigger4onZXEd(this,a0);
};
maxiTrigger.prototype.onChanged=function (a0,a1){
	return __ZN11maxiTrigger9onChangedEdd(this,a0,a1);
};
function maxiSample(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.a4={d0:-0.,d1:-0.,d2:-0.};
	this.i5=0;
	this.i6=0;
	this.a7={d0:-0.,i1:0};
	this.a8=null;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN10maxiSampleC1Ev(this);
}
maxiSample.prototype.getLength=function (){
	return __ZN10maxiSample9getLengthEv(this);
};
maxiSample.prototype.isReady=function (){
	return __ZN10maxiSample7isReadyEv(this);
};
maxiSample.prototype.setSample=function (a0){
	return __ZN10maxiSample9setSampleEPN6client12Float64ArrayE(this,a0);
};
maxiSample.prototype.setSampleAndRate=function (a0,a1){
	return __ZN10maxiSample16setSampleAndRateEPN6client12Float64ArrayEi(this,a0,a1);
};
maxiSample.prototype.clear=function (){
	return __ZN10maxiSample5clearEv(this);
};
maxiSample.prototype.loopRecord=function (a0,a1,a2,a3,a4){
	return __ZN10maxiSample10loopRecordEdbddd(this,a0,a1,a2,a3,a4);
};
maxiSample.prototype.reset=function (){
	return __ZN10maxiSample5resetEv(this);
};
maxiSample.prototype.getLength=function (){
	return __ZN10maxiSample9getLengthEv(this);
};
maxiSample.prototype.isReady=function (){
	return __ZN10maxiSample7isReadyEv(this);
};
maxiSample.prototype.setSample=function (a0){
	return __ZN10maxiSample9setSampleEPN6client12Float64ArrayE(this,a0);
};
maxiSample.prototype.setSampleAndRate=function (a0,a1){
	return __ZN10maxiSample16setSampleAndRateEPN6client12Float64ArrayEi(this,a0,a1);
};
maxiSample.prototype.clear=function (){
	return __ZN10maxiSample5clearEv(this);
};
maxiSample.prototype.loopRecord=function (a0,a1,a2,a3,a4){
	return __ZN10maxiSample10loopRecordEdbddd(this,a0,a1,a2,a3,a4);
};
maxiSample.prototype.reset=function (){
	return __ZN10maxiSample5resetEv(this);
};
maxiSample.prototype.trigger=function (){
	return __ZN10maxiSample7triggerEv(this);
};
maxiSample.prototype.play=function (){
	return __ZN10maxiSample4playEv(this);
};
maxiSample.prototype.setPosition=function (a0){
	return __ZN10maxiSample11setPositionEd(this,a0);
};
maxiSample.prototype.playAtSpeedBetweenPoints=function (a0,a1,a2){
	return __ZN10maxiSample24playAtSpeedBetweenPointsEddd(this,a0,a1,a2);
};
maxiSample.prototype.playAtSpeedBetweenPointsFromPos=function (a0,a1,a2,a3){
	return __ZN10maxiSample31playAtSpeedBetweenPointsFromPosEdddd(this,a0,a1,a2,a3);
};
maxiSample.prototype.play4=function (a0,a1,a2){
	return __ZN10maxiSample5play4Eddd(this,a0,a1,a2);
};
maxiSample.prototype.playLoop=function (a0,a1){
	return __ZN10maxiSample8playLoopEdd(this,a0,a1);
};
maxiSample.prototype.playUntil=function (a0){
	return __ZN10maxiSample9playUntilEd(this,a0);
};
maxiSample.prototype.playOnce=function (){
	return __ZN10maxiSample8playOnceEv(this);
};
maxiSample.prototype.playOnceAtSpeed=function (a0){
	return __ZN10maxiSample15playOnceAtSpeedEd(this,a0);
};
maxiSample.prototype.playOnZX=function (a0){
	return __ZN10maxiSample8playOnZXEd(this,a0);
};
maxiSample.prototype.playOnZXAtSpeed=function (a0,a1){
	return __ZN10maxiSample15playOnZXAtSpeedEdd(this,a0,a1);
};
maxiSample.prototype.playOnZXAtSpeedFromOffset=function (a0,a1,a2){
	return __ZN10maxiSample25playOnZXAtSpeedFromOffsetEddd(this,a0,a1,a2);
};
maxiSample.prototype.playOnZXAtSpeedBetweenPoints=function (a0,a1,a2,a3){
	return __ZN10maxiSample28playOnZXAtSpeedBetweenPointsEdddd(this,a0,a1,a2,a3);
};
maxiSample.prototype.loopSetPosOnZX=function (a0,a1){
	return __ZN10maxiSample14loopSetPosOnZXEdd(this,a0,a1);
};
maxiSample.prototype.playUntilAtSpeed=function (a0,a1){
	return __ZN10maxiSample16playUntilAtSpeedEdd(this,a0,a1);
};
maxiSample.prototype.normalise=function (a0){
	return __ZN10maxiSample9normaliseEd(this,a0);
};
function maxiMap(){
	this.i0=0;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN7maxiMapC1Ev(this);
}
maxiMap.linlin=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6linlinEddddd(a0,a1,a2,a3,a4);
};
maxiMap.linexp=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6linexpEddddd(a0,a1,a2,a3,a4);
};
maxiMap.explin=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6explinEddddd(a0,a1,a2,a3,a4);
};
maxiMap.clamp=function (a0,a1,a2){
	return __ZN7maxiMap5clampEddd(a0,a1,a2);
};
maxiMap.linlin=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6linlinEddddd(a0,a1,a2,a3,a4);
};
maxiMap.linexp=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6linexpEddddd(a0,a1,a2,a3,a4);
};
maxiMap.explin=function (a0,a1,a2,a3,a4){
	return __ZN7maxiMap6explinEddddd(a0,a1,a2,a3,a4);
};
maxiMap.clamp=function (a0,a1,a2){
	return __ZN7maxiMap5clampEddd(a0,a1,a2);
};
function maxiNonlinearity(){
	this.i0=0;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN16maxiNonlinearityC1Ev(this);
}
maxiNonlinearity.prototype.asymclip=function (a0,a1,a2){
	return __ZN16maxiNonlinearity8asymclipEddd(this,a0,a1,a2);
};
maxiNonlinearity.prototype.hardclip=function (a0){
	return __ZN16maxiNonlinearity8hardclipEd(this,a0);
};
maxiNonlinearity.prototype.softclip=function (a0){
	return __ZN16maxiNonlinearity8softclipEd(this,a0);
};
maxiNonlinearity.prototype.fastatan=function (a0){
	return __ZN16maxiNonlinearity8fastatanEd(this,a0);
};
maxiNonlinearity.prototype.atanDist=function (a0,a1){
	return __ZN16maxiNonlinearity8atanDistEdd(this,a0,a1);
};
maxiNonlinearity.prototype.fastAtanDist=function (a0,a1){
	return __ZN16maxiNonlinearity12fastAtanDistEdd(this,a0,a1);
};
maxiNonlinearity.prototype.asymclip=function (a0,a1,a2){
	return __ZN16maxiNonlinearity8asymclipEddd(this,a0,a1,a2);
};
maxiNonlinearity.prototype.hardclip=function (a0){
	return __ZN16maxiNonlinearity8hardclipEd(this,a0);
};
maxiNonlinearity.prototype.softclip=function (a0){
	return __ZN16maxiNonlinearity8softclipEd(this,a0);
};
maxiNonlinearity.prototype.fastatan=function (a0){
	return __ZN16maxiNonlinearity8fastatanEd(this,a0);
};
maxiNonlinearity.prototype.atanDist=function (a0,a1){
	return __ZN16maxiNonlinearity8atanDistEdd(this,a0,a1);
};
maxiNonlinearity.prototype.fastAtanDist=function (a0,a1){
	return __ZN16maxiNonlinearity12fastAtanDistEdd(this,a0,a1);
};
function maxiBiquad(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.d4=-0.;
	this.i5=0;
	this.d6=-0.;
	this.a7=new Float64Array(3);
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN10maxiBiquadC1Ev(this);
}
maxiBiquad.prototype.play=function (a0){
	return __ZN10maxiBiquad4playEd(this,a0);
};
maxiBiquad.prototype.set=function (a0,a1,a2,a3){
	return __ZN10maxiBiquad3setENS_11filterTypesEddd(this,a0,a1,a2,a3);
};
maxiBiquad.prototype.play=function (a0){
	return __ZN10maxiBiquad4playEd(this,a0);
};
maxiBiquad.prototype.set=function (a0,a1,a2,a3){
	return __ZN10maxiBiquad3setENS_11filterTypesEddd(this,a0,a1,a2,a3);
};
function maxiIndex(){
	this.d0=-0.;
	this.i1=0;
	this.d2=-0.;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN9maxiIndexC1Ev(this);
}
maxiIndex.prototype.pull=function (a0,a1,a2){
	return __ZN9maxiIndex4pullEddPN6client12Float64ArrayE(this,a0,a1,a2);
};
maxiIndex.prototype.pull=function (a0,a1,a2){
	return __ZN9maxiIndex4pullEddPN6client12Float64ArrayE(this,a0,a1,a2);
};
function maxiRatioSeq(){
	this.d0=-0.;
	this.i1=0;
	this.i2=0;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN12maxiRatioSeqC1Ev(this);
}
maxiRatioSeq.prototype.playTrig=function (a0,a1){
	return __ZN12maxiRatioSeq8playTrigEdPN6client12Float64ArrayE(this,a0,a1);
};
maxiRatioSeq.prototype.playValues=function (a0,a1,a2){
	return __ZN12maxiRatioSeq10playValuesEdPN6client12Float64ArrayES2_(this,a0,a1,a2);
};
maxiRatioSeq.prototype.playTrig=function (a0,a1){
	return __ZN12maxiRatioSeq8playTrigEdPN6client12Float64ArrayE(this,a0,a1);
};
maxiRatioSeq.prototype.playValues=function (a0,a1,a2){
	return __ZN12maxiRatioSeq10playValuesEdPN6client12Float64ArrayES2_(this,a0,a1,a2);
};
function maxiPolyBLEP(){
	this.i0=0;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.d4=-0.;
	this.d5=-0.;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN12maxiPolyBLEPC1Ev(this);
}
maxiPolyBLEP.prototype.play=function (a0){
	return __ZN12maxiPolyBLEP4playEd(this,a0);
};
maxiPolyBLEP.prototype.setWaveform=function (a0){
	return __ZN12maxiPolyBLEP11setWaveformEN8PolyBLEP8WaveformE(this,a0);
};
maxiPolyBLEP.prototype.setPulseWidth=function (a0){
	return __ZN12maxiPolyBLEP13setPulseWidthEd(this,a0);
};
function maxiOsc(){
	this.d0=-0.;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.d4=-0.;
	this.d5=-0.;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN7maxiOscC1Ev(this);
}
maxiOsc.prototype.noise=function (){
	return __ZN7maxiOsc5noiseEv(this);
};
maxiOsc.prototype.phaseReset=function (a0){
	return __ZN7maxiOsc10phaseResetEd(this,a0);
};
maxiOsc.prototype.sinewave=function (a0){
	return __ZN7maxiOsc8sinewaveEd(this,a0);
};
maxiOsc.prototype.sinebuf4=function (a0){
	return __ZN7maxiOsc8sinebuf4Ed(this,a0);
};
maxiOsc.prototype.sinebuf=function (a0){
	return __ZN7maxiOsc7sinebufEd(this,a0);
};
maxiOsc.prototype.coswave=function (a0){
	return __ZN7maxiOsc7coswaveEd(this,a0);
};
maxiOsc.prototype.phasor=function (a0){
	return __ZN7maxiOsc6phasorEd(this,a0);
};
maxiOsc.prototype.square=function (a0){
	return __ZN7maxiOsc6squareEd(this,a0);
};
maxiOsc.prototype.pulse=function (a0,a1){
	return __ZN7maxiOsc5pulseEdd(this,a0,a1);
};
maxiOsc.prototype.impulse=function (a0){
	return __ZN7maxiOsc7impulseEd(this,a0);
};
maxiOsc.prototype.phasorBetween=function (a0,a1,a2){
	return __ZN7maxiOsc13phasorBetweenEddd(this,a0,a1,a2);
};
maxiOsc.prototype.saw=function (a0){
	return __ZN7maxiOsc3sawEd(this,a0);
};
maxiOsc.prototype.sawn=function (a0){
	return __ZN7maxiOsc4sawnEd(this,a0);
};
maxiOsc.prototype.rect=function (a0,a1){
	return __ZN7maxiOsc4rectEdd(this,a0,a1);
};
maxiOsc.prototype.triangle=function (a0){
	return __ZN7maxiOsc8triangleEd(this,a0);
};
function maxiDelayline(){
	this.d0=-0.;
	this.i1=0;
	this.d2=-0.;
	this.d3=-0.;
	this.d4=-0.;
	this.a5=new Float64Array(176400);
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN13maxiDelaylineC1Ev(this);
}
maxiDelayline.prototype.dl=function (a0,a1,a2){
	return __ZN13maxiDelayline2dlEdid(this,a0,a1,a2);
};
maxiDelayline.prototype.dlFromPosition=function (a0,a1,a2,a3){
	return __ZN13maxiDelayline14dlFromPositionEdidi(this,a0,a1,a2,a3);
};
function PolyBLEP(a0){
	this.i0=0;
	this.d1=-0.;
	this.d2=-0.;
	this.d3=-0.;
	this.d4=-0.;
	this.d5=-0.;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN8PolyBLEPC1Ed(this,a0);
}
PolyBLEP.prototype.setFrequency=function (a0){
	return __ZN8PolyBLEP12setFrequencyEd(this,a0);
};
PolyBLEP.prototype.setSampleRate=function (a0){
	return __ZN8PolyBLEP13setSampleRateEd(this,a0);
};
PolyBLEP.prototype.getFreqInHz=function (){
	return __ZNK8PolyBLEP11getFreqInHzEv(this);
};
PolyBLEP.prototype.setPulseWidth=function (a0){
	return __ZN8PolyBLEP13setPulseWidthEd(this,a0);
};
PolyBLEP.prototype.sync=function (a0){
	return __ZN8PolyBLEP4syncEd(this,a0);
};
PolyBLEP.prototype.setWaveform=function (a0){
	return __ZN8PolyBLEP11setWaveformENS_8WaveformE(this,a0);
};
PolyBLEP.prototype.get=function (){
	return __ZNK8PolyBLEP3getEv(this);
};
PolyBLEP.prototype.inc=function (){
	return __ZN8PolyBLEP3incEv(this);
};
PolyBLEP.prototype.getAndInc=function (){
	return __ZN8PolyBLEP9getAndIncEv(this);
};
maxiSettings.promise=
maxiFilter.promise=
maxiTrigger.promise=
maxiSample.promise=
maxiMap.promise=
maxiNonlinearity.promise=
maxiBiquad.promise=
maxiIndex.promise=
maxiRatioSeq.promise=
maxiPolyBLEP.promise=
maxiOsc.promise=
maxiDelayline.promise=
PolyBLEP.promise=
Promise.resolve();
__Z7webMainv();
//bindings- intended to mix this source in with the emscripten modules
Module.maxiMap = maxiMap;
Module.maxiTrigger = maxiTrigger;
Module.maxiNonlinearity = maxiNonlinearity;
Module.maxiJSSettings = maxiSettings;
Module.maxiBiquad = maxiBiquad;
Module.maxiOsc = maxiOsc;
Module.maxiRatioSeq = maxiRatioSeq;
Module.maxiIndex = maxiIndex;
Module.maxiFilter = maxiFilter;
Module.maxiDelayline = maxiDelayline;
Module.maxiSample = maxiSample;
Module.maxiPolyBLEP = maxiPolyBLEP;

// Module.cheerpTypes = cheerpTypes;
// Module.maxiFilter = maxiFilter;
// Module.maxiZeroCrossingDetector = maxiZeroCrossingDetector;

// Module.cheerpTypes2 = cheerpTypes2;
// Module.vectorTest = vectorTest;

// import Maximilian from "./sema-engine.wasmmodule.js";
// import RingBuffer from "./ringbuf.js";
// import { RingBuffer } from "ringbuf.js";
export class SABInputTransducer {
	constructor(id, triggered = 0) {
		this.value = 0;
		this.id = id;
		this.triggered = triggered;
		this.zx = new Module.maxiTrigger();
	}

	getSABValue(inputBuffers, trigger) {
		let reading = 1;
		if (this.triggered) {
			reading = this.zx.onZX(trigger);
		}
		if (reading) {
			let sab = inputBuffers[this.id];
			if (sab) {
				this.value = sab.value;
			}
		}
		return this.value;
	}
}

export class SABOutputTransducer {
	constructor(outputSABs, port, ttype, channel, now, blocksize) {
		this.port = port;
		this.zx = new Module.maxiTrigger();
		this.channel = channel;
		this.blocksize = blocksize;
    this.ttype = ttype;

		//check for existing channels
		if (channel in outputSABs && outputSABs[channel].blocksize == blocksize) {
			//reuse existing
			this.ringbuf = outputSABs[channel].rb;
		} else {
			//create a new SAB and notify the receiver
			this.sab = RingBuffer.getStorageForCapacity(32 * blocksize, Float64Array);
			this.ringbuf = new RingBuffer(this.sab, Float64Array);

      outputSABs[channel] = {
				rb: this.ringbuf,
				sab: this.sab,
				created: now,
				blocksize: blocksize,
			};

			this.port.postMessage({
				rq: "buf",
				value: this.sab,
				ttype: ttype,
				channelID: channel,
				blocksize: blocksize,
			});
		}
	}

	send(trig, value) {
		if (this.zx.onZX(trig)) {
			//console.log("tr", this.ringbuf.available_write(), value, this);
			if (this.ringbuf.available_write() > this.blocksize) {
				if (typeof value == "number") {
					this.ringbuf.push(new Float64Array([value]));
				} else {
					// console.log("SAB", value.length, this.blocksize);
					if (value.length == this.blocksize) {
						this.ringbuf.push(value);
					} else if (value.length < this.blocksize) {
						let newVal = new Float64Array(this.blocksize);
						for (let i in value) newVal[i] = value[i];
						this.ringbuf.push(newVal);
					} else {
						this.ringbuf.push(value.slice(0, this.blocksize));
					}
				}
				// console.log('val written', value);
			}
		}
		return value;
	}
}

//warning this is the same as in ringbuf, but packaged differently - needs fixing!!!
export default class RingBuffer {
  static getStorageForCapacity(capacity, type) {
    if (!type.BYTES_PER_ELEMENT) {
      throw 'Pass in a ArrayBuffer subclass';
    }
    var bytes = 8 + (capacity + 1) * type.BYTES_PER_ELEMENT;
    return new SharedArrayBuffer(bytes);
  }
  // `sab` is a SharedArrayBuffer with a capacity calculated by calling
  // `getStorageForCapacity` with the desired capacity.
  constructor(sab, type) {
    if (!ArrayBuffer.__proto__.isPrototypeOf(type) &&
      type.BYTES_PER_ELEMENT !== undefined) {
      throw 'Pass a concrete typed array class as second argument';
    }

    // Maximum usable size is 1<<32 - type.BYTES_PER_ELEMENT bytes in the ring
    // buffer for this version, easily changeable.
    // -4 for the write ptr (uint32_t offsets)
    // -4 for the read ptr (uint32_t offsets)
    // capacity counts the empty slot to distinguish between full and empty.
    this._type = type;
    this.capacity = (sab.byteLength - 8) / type.BYTES_PER_ELEMENT;
    this.buf = sab;
    this.write_ptr = new Uint32Array(this.buf, 0, 1);
    this.read_ptr = new Uint32Array(this.buf, 4, 1);
    this.storage = new type(this.buf, 8, this.capacity);
  }
  // Returns the type of the underlying ArrayBuffer for this RingBuffer. This
  // allows implementing crude type checking.
  type() {
    return this._type.name;
  }
  // Push bytes to the ring buffer. `bytes` is an typed array of the same type
  // as passed in the ctor, to be written to the queue.
  // Returns the number of elements written to the queue.
  push(elements) {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);

    if ((wr + 1) % this._storage_capacity() == rd) {
      // full
      return 0;
    }

    let to_write = Math.min(this._available_write(rd, wr), elements.length);
    let first_part = Math.min(this._storage_capacity() - wr, to_write);
    let second_part = to_write - first_part;

    this._copy(elements, 0, this.storage, wr, first_part);
    this._copy(elements, first_part, this.storage, 0, second_part);

    // publish the enqueued data to the other side
    Atomics.store(
      this.write_ptr,
      0,
      (wr + to_write) % this._storage_capacity()
    );

    return to_write;
  }
  // Read `elements.length` elements from the ring buffer. `elements` is a typed
  // array of the same type as passed in the ctor.
  // Returns the number of elements read from the queue, they are placed at the
  // beginning of the array passed as parameter.
  pop(elements) {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);

    if (wr == rd) {
      return 0;
    }

    let to_read = Math.min(this._available_read(rd, wr), elements.length);

    let first_part = Math.min(this._storage_capacity() - rd, elements.length);
    let second_part = to_read - first_part;

    this._copy(this.storage, rd, elements, 0, first_part);
    this._copy(this.storage, 0, elements, first_part, second_part);

    Atomics.store(this.read_ptr, 0, (rd + to_read) % this._storage_capacity());

    return to_read;
  }

  // True if the ring buffer is empty false otherwise. This can be late on the
  // reader side: it can return true even if something has just been pushed.
  empty() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);

    return wr == rd;
  }

  // True if the ring buffer is full, false otherwise. This can be late on the
  // write side: it can return true when something has just been poped.
  full() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);

    return (wr + 1) % this.capacity != rd;
  }

  // The usable capacity for the ring buffer: the number of elements that can be
  // stored.
  capacity() {
    return this.capacity - 1;
  }

  // Number of elements available for reading. This can be late, and report less
  // elements that is actually in the queue, when something has just been
  // enqueued.
  available_read() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    return this._available_read(rd, wr);
  }

  // Number of elements available for writing. This can be late, and report less
  // elements that is actually available for writing, when something has just
  // been dequeued.
  available_write() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    return this._available_write(rd, wr);
  }

  // private methods //

  // Number of elements available for reading, given a read and write pointer..
  _available_read(rd, wr) {
    if (wr > rd) {
      return wr - rd;
    } else {
      return wr + this._storage_capacity() - rd;
    }
  }

  // Number of elements available from writing, given a read and write pointer.
  _available_write(rd, wr) {
    let rv = rd - wr - 1;
    if (wr >= rd) {
      rv += this._storage_capacity();
    }
    return rv;
  }

  // The size of the storage for elements not accounting the space for the index.
  _storage_capacity() {
    return this.capacity;
  }

  // Copy `size` elements from `input`, starting at offset `offset_input`, to
  // `output`, starting at offset `offset_output`.
  _copy(input, offset_input, output, offset_output, size) {
    for (var i = 0; i < size; i++) {
      output[offset_output + i] = input[offset_input + i];
    }
  }
}


console.log(
	"running %cMaximilian v2.5.0 (Wasm)",
	"font-weight: bold; color: #bada55"
	// "font-weight: bold; background: #000; color: #bada55"
);

var cl, ci, cw, ce;


class fft {
	constructor(bins, hopPercentage) {
		this.fft = new Module.maxiFFTAdaptor();
		this.fft.setup(bins * 2, Math.floor(bins * 2 * hopPercentage), bins * 2);
		this.mags = this.fft.getMagnitudesAsJSArray();
		this.phases = this.fft.getPhasesAsJSArray();
	}
	play(sig) {
		let newVal = 0;
		if (this.fft.process(sig, Module.maxiFFTModes.WITH_POLAR_CONVERSION)) {
			newVal = 1;
			this.mags = this.fft.getMagnitudesAsJSArray();
			this.phases = this.fft.getPhasesAsJSArray();
		}
		let res = [newVal, this.mags, this.phases];
		return res;
	}
}

class ifft {
	constructor(bins, hopPercentage) {
		this.ifft = new Module.maxiIFFTAdaptor();
		this.ifft.setup(bins * 2, Math.floor(bins * 2 * hopPercentage), bins * 2);
	}
	play(trig, mags, phases) {
		return this.ifft.process(trig, mags, phases, Module.maxiIFFTModes.SPECTRUM);
	}
}

class mfcc {
	constructor(fftsize, hopsize, numCoeffs) {
		this.fft = new Module.maxiFFTAdaptor();
		this.fft.setup(fftsize, hopsize, fftsize);
		this.mfcc = new Module.maxiMFCCAdaptor();
		this.mfcc.setup(fftsize / 2, 40, numCoeffs, 20, 20000);
		this.coeffs = new Float64Array(numCoeffs);
	}

	play(sig) {
		let newVal = 0;
		if (this.fft.process(sig, Module.maxiFFTModes.WITH_POLAR_CONVERSION)) {
			newVal = 1;
			this.coeffs = this.mfcc.mfcc(this.fft.getMagnitudesAsJSArray());
		}
		return [newVal, this.coeffs];
	}
}

class poll {
	constructor() {
		this.clock = new Module.maxiOsc();
	}

	play(val) {
		if (this.clock.impulse(0.5)) {
			console.log(val);
		}
	}
}

function mtof(midinote) {
	return Math.pow(2, (midinote - 69) / 12) * 440.0;
}

var inputSABs = {};

var outputSABs = {};

/**
 * The main Maxi Audio wrapper with a WASM-powered AudioWorkletProcessor.
 *
 * @class MaxiProcessor
 * @extends AudioWorkletProcessor
 */
class MaxiProcessor extends AudioWorkletProcessor {
	/**
	 * @getter
	 */
	static get parameterDescriptors() {
		// TODO: parameters are static? can we not change this map with a setter?
		return [
			{
				name: "gain",
				defaultValue: 0.5,
				minValue: 0.0000009,
				maxValue: 1.0,
			},
		];
	}

	/**
	 * @constructor
	 */
	constructor() {
		super();

		//indicate audio settings in WASM and JS domains
		Module.maxiSettings.setup(sampleRate, 1, 512);
		// Module.maxiJSSettings.setup(sampleRate, 1, 512);
		//we don't know the number of channels at this stage, so reserve lots for the DAC
		this.DAC = [];
		this.DACInitialised = false;

		this.numPeers = 1;

		this._q = [this.newq(), this.newq()];
		this._mems = [this.newmem(), this.newmem()];
		this._cleanup = [0, 0];
		this.signals = [this.silence, this.silence];
		this.currentSignalFunction = 0;

		this.xfadeControl = new Module.maxiLine();

		this.mediaStreamConnected = false;

		this.OSCMessages = {};

		this.incoming = {};

		this.currentSample = 0;

		this.sampleBuffers = {};
		this.sampleVectorBuffers = {};
		this.sampleVectorBuffers["defaultEmptyBuffer"] = new Float32Array(1);

		this.transducers = [];

		this.netClock = new Module.maxiAsyncKuramotoOscillator(3); //TODO: this should be the same as numpeers
		this.kuraPhase = -1;
		this.kuraPhaseIdx = 1;

		this.codeSwapStates = {
			QUEUD: 0,
			XFADING: 1,
			NONE: 2,
		};
		this.codeSwapState = this.codeSwapStates.NONE;

		this.codeQuantModes = {
			QUANTISE_TO_BAR: 0,
			DONTQUANTISE: 1,
		};
		this.codeQuantMode = this.codeQuantModes.DONTQUANTISE;

		this.port.onmessage = this.onMessageHandler;

		this.takeOverConsole();

		// CLOCK VARIABLES

		// this.clock = new Module.maxiOsc();
		// this.tempo = 120.0; // tempo (in beats per minute);
		// this.secondsPerBeat = 60.0 / this.tempo;
		// this.counterTimeValue = this.secondsPerBeat / 4; //___16th note

		this.clockPhasor;
		this.bpm = 120;
		this.beatsPerBar = 4;
		this.maxTimeLength = sampleRate * 60 * 60 * 24; //24 hours

		this.clockUpdate();

		this.bitTime = Module.maxiBits.sig(0); //this needs to be decoupled from the audio engine? or not... maybe a 'permenant block' with each grammar?
		this.dt = 0;

		this.clearBufferModes = {
			INACTIVE: 0,
			CLEARING_BUFFER: 1,
		};
		this.clearBufferMode = this.clearBufferModes.INACTIVE;
		this.clearBufferCount = 10;

		console.info(`Sample rate: ${sampleRate}`); // moving this to end of ctor for console feedback on successful processor initialisation
	}

	takeOverConsole(){
		if (console) {
			if (console.log) cl = console.log;
			if (console.log) ci = console.info;
			if (console.log) cw = console.warn;
			if (console.log) ce = console.error;
			if (cl && ci && cw && ce) {
				cw("taking over PROCESSOR console");
				console.log = function () {
					this.port.postMessage({
						func: "logs",
						payload: [...arguments],
						type: "[PROCESSOR]",
					});
					cl.apply(this, arguments);
				}.bind(this);
				console.info = function (text) {
					this.port.postMessage({
						func: "logs",
						payload: [...arguments],
						type: "[PROCESSOR]",
					});
					ci.apply(this, arguments);
				}.bind(this);
				console.warn = function (text) {
					this.port.postMessage({
						func: "logs",
						payload: [...arguments],
						type: "[PROCESSOR]",
					});
					cw.apply(this, arguments);
				}.bind(this);
				console.error = function (text) {
					this.port.postMessage({
						func: "logs",
						payload: [...arguments],
						type: "[PROCESSOR]",
					});
					ce.apply(this, arguments);
				}.bind(this);
				ce("PROCESSOR console taken over");
			}
		}
	}


	/**
	 *
	 * @param {*} a value from this.codeQuantModes
	 */
	setCodeQuantiseMode = (newMode) => {
		this.codeQuantMode = newMode;
	};

	/**
	 *
	 * @param {*} q
	 * @param {*} inputs
	 */
	silence = (q, inputs) => {
		return 0.0;
	};

	/**
	 *
	 */
	newq = () => {
		return {
			vars: {},
		};
	};

	/**
	 *
	 */
	newmem = () => {
		return new Array(512);
	};

	/**
	 *
	 * @param {*} x
	 * @param {*} idx
	 */
	OSCTransducer = function (x, idx = 0) {
		let val = this.OSCMessages[x];
		return val ? (idx >= 0 ? val[idx] : val) : 0.0;
	};

	/**
	 *
	 * @param {*} bufferName
	 */
	getSampleBuffer = (bufferName) => {
		let sample = this.sampleVectorBuffers["defaultEmptyBuffer"]; //defailt - silence
		if (bufferName in this.sampleVectorBuffers) {
			sample = this.sampleVectorBuffers[bufferName];
		} else {
			// this error will be caught on the this.eval() function catch, line 488
			throw new Error(`${bufferName} doesn't exist yet`);
		}
		return sample;
	};

	/**
	 *
	 */
	clockUpdate = () => {
		this.beatLengthInSamples = (60 / this.bpm) * sampleRate;
		this.barPhaseMultiplier =
			this.maxTimeLength / this.beatLengthInSamples / this.beatsPerBar;

		// console.info(
		// 	"clockUpdate: ",
		// 	this.barPhaseMultiplier,
		// 	this.maxTimeLength,
		// 	this.beatsPerBar
		// );
	};

	/**
	 *
	 * @param {*} bpm
	 */
	setBPM = (bpm) => {
		if (this.bpm != bpm) {
			this.bpm = bpm;
			this.clockUpdate();
		}
		return 0;
	};

	/**
	 *
	 * @param {*} bpb
	 */
	setBeatsPerBar = (bpb) => {
		if (this.beatsPerBar != bpb) {
			this.beatsPerBar = bpb;
			this.clockUpdate();
		}
		return 0;
	};

	/**
	 * @CLP phasor over one bar length
	 * * upon EVAL, this is dynamically invoqued from the LOOP function
	 * @param {*} multiples
	 * @param {*} phase
	 */
	clockPhase = (multiples, phase) => {
		return (
			(((this.clockPhasor * this.barPhaseMultiplier * multiples) % 1.0) +
				phase) %
			1.0
		);
	};

	/**
	 * @CLT phasor over one bar length
	 * * upon EVAL, this is dynamically invoqued from the LOOP function
	 * @param {*} multiples
	 * @param {*} phase
	 */
	clockTrig = (multiples, phase) => {
		let clphase = this.clockPhase(multiples, phase);
		return clphase - (1.0 / sampleRate) * multiples <= 0 ? 1 : 0;
	};

	/**
	 *
	 * @param {*} sendFrequency
	 */
	createMLOutputTransducer = (sendFrequency) => {
		return new OutputTransducer(this.port, sampleRate, sendFrequency, "ML");
	};

	/**
	 *
	 * @param {*} sendFrequency
	 */
	createNetOutputTransducer = (sendFrequency) => {
		return new OutputTransducer(this.port, sampleRate, sendFrequency, "NET");
	};

	/**
	 *
	 *
	 * * this is dynamically invoked from the LOOP function upon EVAL
	 */
	dacOut = (x, ch) => {
		if (ch >= this.DAC.length) {
			ch = this.DAC.length - 1;
		} else if (ch < 0) {
			ch = 0;
		}
		// this.DAC[ch] = this.logGain(x);
		this.DAC[ch] = x;
		return x;
	};

	/**
	 * Writes the resulting computed signal from each component in the heap (mems)
	 * to each DAC's channel
	 *
	 * * this is dynamically invoked from the LOOP function upon EVAL
	 */
	dacOutAll = (x) => {
		for (let i = 0; i < this.DAC.length; i++) {
			// this.DAC[i] = this.logGain(x);
			this.DAC[i] = x;
		}
		return x;
	};

	/**
	 *
	 * @param {*} id
	 */
	updateSABInputs = (id) => {
		for (let v in inputSABs) {
			let avail = inputSABs[v].rb.available_read();
			// console.log(avail, SABs[v].rb.capacity);
			if (avail != inputSABs[v].rb.capacity && avail > 0) {
				for (let i = 0; i < avail; i += inputSABs[v].blocksize) {
					let val = new Float64Array(inputSABs[v].blocksize);
					inputSABs[v].rb.pop(val);
					inputSABs[v].value = val.length == 1 ? val[0] : val;
				}
			}
		}
	};

	/**
	 *
	 * @param {*} id
	 */
	getSABValue = (id) => {
		let res = 0;
		let sab = inputSABs[id];
		if (sab) {
			res = sab.value;
		}
		return res;
	};

	/**
	 *
	 * @param {*} name
	 * @param {*} buf
	 */
	addSampleBuffer = (name, buf) => {
		// console.log(`loading sample '${name}'`);
		// this.sampleVectorBuffers[name] = this.translateFloat32ArrayToBuffer(buf);
		this.sampleVectorBuffers[name] = new Float64Array(buf);
	};

	/**
	 *
	 * @param {*} name
	 * @param {*} buf
	 */
	addSharedArrayBuffer = (data) => {
		console.info("buffer received");
		let sab = data.value;
		let rb = new RingBuffer(sab, Float64Array);
		inputSABs[data.channelID] = {
			sab,
			rb,
			blocksize: data.blocksize,
			value: data.blocksize > 1 ? new Float64Array(data.blocksize) : 0,
		};
	};

	eval = (data) => {
		// check if new code is being sent for evaluation?
		let setupFunction;
		let loopFunction;
		try {
			setupFunction = eval(data["setup"]);
			loopFunction = eval(data["loop"]);

			this.nextSignalFunction = 1 - this.currentSignalFunction;
			// setup function with the  types
			this._q[this.nextSignalFunction] = setupFunction();
			//allow feedback between evals
			this._mems[this.nextSignalFunction] =
				this._mems[this.currentSignalFunction];
			// output[SPECTROGAMCHANNEL][i] = specgramValue;
			// then use channelsplitter
			this.signals[this.nextSignalFunction] = loopFunction;

			this._cleanup[this.nextSignalFunction] = 0;

			let xfadeBegin = Module.maxiMap.linlin(
				1.0 - this.nextSignalFunction,
				0,
				1,
				-1,
				1
			);

			let xfadeEnd = Module.maxiMap.linlin(
				this.nextSignalFunction,
				0,
				1,
				-1,
				1
			);

			this.xfadeControl.prepare(xfadeBegin, xfadeEnd, 2, true); // short xfade across signals
			this.xfadeControl.triggerEnable(true); //enable the trigger straight away
			this.codeSwapState = this.codeSwapStates.QUEUD;
		} catch (err) {
			// Propagate error to the AWN scope
			this.port.postMessage(err); //ready to suspend
		}
	};

	hush = () => {
		// insert a couple of buffers of silence into the webaudio buffer,  before telling the audio engine that it's ready to suspend
		try {
			this.clearBufferMode = this.clearBufferModes.CLEARING_BUFFER;
			this.clearBufferCount = 3;
		} catch (err) {
			console.log(err);
		}
	};

	unhush = () => {
		try {
			this.clearBufferMode = this.clearBufferModes.INACTIVE;
		} catch (err) {
			console.log(err);
		}
	};

	/**
	 * @onMessageHandler
	 * * message port async handler
	 * @param {*} event
	 */
	onMessageHandler = (event) => {
		if (event.data.address) {
			this.OSCMessages[event.data.address] = event.data.args;
		} else if (event.data.func) {
			if (event.data.func === "sendbuf") {
				this.addSampleBuffer(event.data.name, event.data.data);
			} else if (event.data.func === "sab") {
				this.addSharedArrayBuffer(event.data);
			}
		} else if (event.data.sample) {
			let sampleKey = event.data.sample.substr(0, event.data.sample.length - 4);

			this.addSampleBuffer(sampleKey, event.data.buffer);
		} else if ("phase" in event.data) {
			this.netClock.setPhase(event.data.phase, event.data.i);
			// this.kuraPhase = event.data.phase;
			// this.kuraPhaseIdx = event.data.i;
		} else if (event.data.eval) {
			this.eval(event.data);
		} else if (event.data.hush) {
			this.hush();
		} else if (event.data.unhush) {
			this.unhush();
		}
	};

	/**
	 * Initialises all DAC channels to zero and settings for Module
	 * @param {*} sampleRate
	 * @param {*} channels
	 * @param {*} bufferSize
	 */
	initialiseDAC = (sampleRate, channels, bufferSize) => {
		for (let i = 0; i < channels; i++) this.DAC[i] = 0.0;

		console.info(`DAC: ${channels} channels`);

		// Module.maxiJSSettings.setup(sampleRate, channels, bufferSize);
		Module.maxiSettings.setup(sampleRate, channels, bufferSize);

		this.DACInitialised = true;
	};

	/**
	 *
	 * @param {*} inputs
	 * @param {*} outputs
	 * @param {*} parameters
	 */
	process(inputs, outputs, parameters) {
		if (!this.DACInitialised) {
			this.initialiseDAC(sampleRate, outputs[0].length, 512);
		}

		for (let outputId = 0; outputId < outputs.length; ++outputId) {
			let output = outputs[outputId];
			let channelCount = output.length;

			for (let i = 0; i < output[0].length; ++i) {
				this.updateSABInputs();

				for (let channel = 0; channel < channelCount; channel++) {
					this.DAC[channel] = 0.0;
				}

				//this needs decoupling?
				// this is a clock for the nibble lang
				this.bitTime = Module.maxiBits.inc(this.bitTime);

				//leave this here - we'll bring it back in one day?
				//net clocks
				// if (this.kuraPhase != -1) {
				//   // this.netClock.setPhase(this.kuraPhase, this.kuraPhaseIdx);
				//   console.log(this.kuraPhaseIdx);
				//testing
				// this.netClock.setPhase(this.netClock.getPhase(0), 1);
				// this.netClock.setPhase(this.netClock.getPhase(0), 2);
				//   this.kuraPhase = -1;
				// }

				// this.netClock.play(this.clockFreq, 100);

				//this.clockPhasor = this.netClock.getPhase(0) / (2 * Math.PI);
				this.clockPhasor =
					(this.currentSample % this.maxTimeLength) / this.maxTimeLength;
				this.currentSample++;

				//share the clock if networked
				// if (this.netClock.size() > 1 && this.clockPhaseSharingInterval++ == 2000) {
				//   this.clockPhaseSharingInterval=0;
				//   let phase = this.netClock.getPhase(0);
				//   // console.log(`DEBUG:MaxiProcessor:phase: ${phase}`);
				//   this.port.postMessage({ phase: phase, c: "phase" });
				// }

				this.bitclock = Module.maxiBits.sig(
					Math.floor(this.clockPhase(1, 0) * 1023.999999999)
				);

				// let w = 0;
				//new code waiting?

				let barTrig = this.clockTrig(1, 0);

				if (this.codeSwapState == this.codeSwapStates.QUEUD) {
					//fade in when a new bar happens
					if (
						(this.codeQuantMode == this.codeQuantModes.QUANTISE_TO_BAR &&
							barTrig) ||
						this.codeQuantMode == this.codeQuantModes.DONTQUANTISE
					) {
						this.codeSwapState = this.codeSwapStates.XFADING;
						this.currentSignalFunction = 1 - this.currentSignalFunction;
						//console.log("xfade start", this.currentSignalFunction);
					}
				}

				if (this.codeSwapState == this.codeSwapStates.XFADING) {
					try {
						this.signals[0](
							this._q[0],
							inputs[0][0] ? inputs[0][0][i] : null,
							this._mems[0]
						);

						this.signals[1](
							this._q[1],
							inputs[0][0] ? inputs[0][0][i] : null,
							this._mems[1]
						);
					} catch (err) {
						console.log("EVAL ERROR – XFADING", err);
						console.log("signals: ", this.signals);
						console.log("currentSignalFunction: ", this.currentSignalFunction);
						console.log(
							"_q[currentSignalFunction]: ",
							this._q[this.currentSignalFunction]
						);
						console.log("inputs: ", inputs);
						console.log("mems: ", this._mems);
					}
					this.codeSwapState = this.codeSwapStates.NONE;
					// console.log("xfade complete", xf);
				} else {
					//no xfading - play as normal
					// w = this.signals[this.currentSignalFunction](this._q[this.currentSignalFunction], inputs[0][0][i], this._mems[this.currentSignalFunction]);
					try {
						this.signals[this.currentSignalFunction](
							this._q[this.currentSignalFunction],
							inputs[0][0] ? inputs[0][0][i] : null,
							this._mems[this.currentSignalFunction]
						);
					} catch (err) {
						console.log("EVAL ERROR – NO xfading ", err);
						console.log("signals: ", this.signals);
						console.log("currentSignalFunction: ", this.currentSignalFunction);
						console.log(
							"_q[currentSignalFunction]: ",
							this._q[this.currentSignalFunction]
						);
						console.log("inputs: ", inputs);
						console.log("mems: ", this._mems);
					}
				}

				// let scope = this._mems[this.currentSignalFunction][":show"];
				// let scopeValue = scope !== undefined ? scope : output[channel][0];
				// output[1][i] = specgramValue;

				if (parameters.gain.length === 1) {
					for (let channel = 0; channel < channelCount; channel++) {
						output[channel][i] =
							this.DAC[channel] * Math.pow(parameters.gain[0], 2);
					}
				} else {
					for (let channel = 0; channel < channelCount; channel++) {
						output[channel][i] =
							this.DAC[channel] * Math.pow(parameters.gain[i], 2);
					}
				}
			}

			if (this.clearBufferMode == this.clearBufferModes.CLEARING_BUFFER) {
				this.clearBufferCount--;
				for (let i = 0; i < output[0].length; ++i) {
					for (let channel = 0; channel < channelCount; channel++) {
						this.DAC[channel] = 0.0;
					}
				}
				if (this.clearBufferCount == 0) {
					//this.clearBufferMode == this.clearBufferModes.INACTIVE;
					this.port.postMessage({ rq: "rts" }); //ready to suspend
				}
			}
		}

		//remove old algo and data?
		let oldIdx = 1.0 - this.currentSignalFunction;
		if (this.xfadeControl.isLineComplete() && this._cleanup[oldIdx] == 0) {
			this.signals[oldIdx] = this.silence;
			//clean up object heap - we must do this because emscripten objects need manual memory management
			for (let obj in this._q[oldIdx]) {
				//if there a delete() function
				if (this._q[oldIdx][obj].delete != undefined) {
					//delete the emscripten object manually
					this._q[oldIdx][obj].delete();
				}
			}
			//create a blank new heap for the next livecode evaluation
			this._q[oldIdx] = this.newq();
			//signal that the cleanup is complete
			this._cleanup[oldIdx] = 1;
		}

		return true;
	}

};

registerProcessor("maxi-processor", MaxiProcessor);

