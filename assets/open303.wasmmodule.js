

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
var Module = typeof Open303 !== 'undefined' ? Open303 : {};

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

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;

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
var wasmBinaryFile = 'data:application/octet-stream;base64,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BAvQBAEDfCAAQoCAgICAgID4PzcDYCAAIAArA4gBIgMgACsDmAEgACsDcKIiAUS4+fP///8PQKIgASABoiICIAIgAUSHCGYq6QlhP6IgAiABRCOfIVgeNPW+oiACRB14Jxsv4Qe/oqBEkmYZCfTPZj+goqBEXshmEUVVtb+goiABRIUdXZ9WVcW/oqBEtitBAwAA8D+goqBEfwAAAAAAEECgojkDWCAAIAFE46we/P//7z+iIAIgAUQp11kfjaruP6IgAiABRFDHC9jf9Os/oiACIAFE5SBAylIY6D+iIAIgAUS55JbIEWrcP6IgAiABRO5ifw536bQ/oiACREpkFVIteIu/oqBEE+0xosBFzr+goqBEpzkVMMom5L+goqBExx3CwE1m6r+goqBEQ+60x59T7b+goqBExlTl8P7/77+goqBEfwr+////77+gIgI5AwggACACRAAAAAAAAPA/oDkDACAAKAKgAUEPRgRAIAAgAUTNO39mnqDmP6JEGC1EVPshGUCjIgFEQLEECNXEGECiRO2kgd9h1T0/oCABRBXI7Cx6tyhAokQAAAAAAADwP6AgASABokR1WyIXnKkRQKKgozkDACAAIAMgASABIAEgASABIAFEAwmKH7MevECgokQ+6Nmsys22wKCiRESGVbyRx33AoKJEB+v/HKY3g0CgokQEyqZc4btqQKCiRKaBH9Ww/zBAoCIBojkDWCAAIANEAAAAAAAA8D+gIAMgAUQeHh4eHh6uP6JEAAAAAAAA8L+gokQAAAAAAADwP6CiOQNgCwunBAEFfCAAKAKgAUEPRgRAIAArA6gBIQUgACAAKwNYIgQCfETNO39mnqD2PyICIAArAygiA0TNO39mnqD2P2QNABpEzTt/Zp6g9r8iAiADRM07f2aeoPa/Yw0AGiADCyICIAIgAiACRFVVVVVVVcW/oqKioKIiAjkDqAEgAEGwAWogACsDyAEgACsDsAGiIAUgACsDwAGiIAArA7gBIAKioKBEAAAAAAAAEDigIgU5AwAgACAAKwMQIgYgACsDACICIAKgIAArAxgiBCABIAWhIAahoKKgIgU5AxAgACAEIAIgACsDICIBIAUgBCAEoKGgoqAiBDkDGCAAIAEgAiADIAQgASABoKGgoqAiATkDICAAIAMgAiABIAMgA6ChoqAiAjkDKCAAKwNgIgMgA6AgAqIPCyAAKwOoASECIAAgACsDWCAAKwMoIgaiIgM5A6gBIABBsAFqIAArA7gBIAOiIAIgACsDwAGioCAAKwPIASAAKwOwAaKgRAAAAAAAABA4oCICOQMAIAAgACsDaEQAAAAAAADAP6IgAaIgAqEiBSAAKwMIIgIgBSAAKwMQoaKgIgM5AxAgACADIAIgAyAAKwMYoaKgIgE5AxggACABIAIgASAAKwMgoaKgIgQ5AyAgACAEIAIgBCAGoaKgIgI5AyggBSAAKwMwoiADIAArAziioCABIAArA0CioCAEIAArA0iioCAAKwNQIAKioEQAAAAAAAAgQKILCQBBsNcAEA8aC4YCACAAQgA3AgAgAEIANwIMIABCADcCGCAAQgA3AiQgAEIANwIwIABCADcCPCAAQgA3AkggAEIANwJUIABCADcCYCAAQQA2AAcgAEEANgATIABBADYAHyAAQQA2ACsgAEEANgA3IABBADYAQyAAQQA2AE8gAEEANgBbIABBADYAZyAAQQA2AHMgAEIANwJsIABBADYAfyAAQgA3AnggAEEANgCLASAAQgA3AoQBIABBADYAlwEgAEIANwKQASAAQQA2AKMBIABCADcCnAEgAEEANgCvASAAQgA3AqgBIABBADYAuwEgAEIANwK0ASAAQoCAgICAgIDwPzcDyAEgAEEQNgLAASAAC4ACACAAECoaIABB0AFqECoaIABBoANqECoaIABB8ARqECoaIABBwAZqECoaIABBkAhqECoaIABB4AlqECoaIABBsAtqECoaIABBgA1qECoaIABB0A5qECoaIABBoBBqECoaIABB8BFqECoaIABBwBNqECoaIABBkBVqECoaIABB4BZqECoaIABBsBhqECoaIABCgICAgICA4LDAADcDkBogAEKAgICAgJDi8sAANwOIGiAAQgA3A6gaIABBADYCoBogAEIANwOYGiAAQQA2AoAaIABBsBpqQoGChIiQoMCAATcAACAAQQA7AYQaIABBtRpqQoGChIiQoMCAATcAACAACx0AIAFEAAAAAAAAAABkQQFzRQRAIAAgATkDiBoLCxYBAX8gAC0AhRohASAAQQA6AIUaIAELHgAgAEIANwOoGiAAQv////8PNwOYGiAAQQE6AIQaCwoAIABBADoAhBoL1QIAIABCADcDKCAAQoCAgICAgID4PzcD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IABCADcDACAAQgA3AwgLlAcBDn8gABBnIQggAEHYgw1qEGchCSAAQbCHGmoQOSEBIABB+IcaahCCARogAEHwiRpqEDAhAiAAQcCLGmoQSyEKIABB8IsaahBgIQsgAEGQjBpqEEEhAyAAQYCNGmoQYCEMIABBoI0aahBgIQ0gAEHAjRpqEG4hBSAAQZCOGmoQbiEGIABB4I4aahBuIQcgAEGwjxpqEEEhBCAAQaCQGmoQXhogAEGAkRpqECsaIABBjK0aakEANgIAIABBiK0aaiAAQYStGmoiDjYCACAAIA42AoStGiAAQYACOwGArRogAEL/////DzcD+KwaIABCgICAgICAgPg/NwPgrBogAEIANwPYrBogAEKAgICAgIDApMAANwPQrBogAEKAgICAgICA+D83A8isGiAAQoCAgICAgMC0wAA3A8CsGiAAQoCAgICAgNDHwAA3A7isGiAAQoCAgICAgICEwAA3A7CsGiAAQoCAgICAgICEwAA3A6isGiAAQtWq1arVqtXyPzcDkKwaIABCgICAgICA0MfAADcDgKwaIABCgICAgICAgKfAADcD+KsaIABCADcD8KsaIABCgICAgICAgJTAADcD6KsaIABCgICAgICAgJRANwPgqxogAEKAgICAgJDi8sAANwPYqxogAEKAgICAgIDgvcAANwPQqxogAEKAgICAgICA+D83A8irGiAAQoCAgICAgOC9wAA3A8CrGiAAQsTJtNSxy8D+PzcDoKwaIABCgICAgICAwJzAADcDiKwaIABCmue3/YfSpuo/NwOYrBogASAIED8gAUEGEDsgASAJEEAgAUEFEDwgCkEAEE8gAkQAAAAAAAAAABAxIAJEAAAAAAA4k0AQMiAAQYCKGmpCADcDACACRAAAAAAAAOA/EDMgAkQAAAAAAADwPxA2IAtEAAAAAAAATkAQYyADQQIQRSADRH5YxyQYFQjAEEcgA0QAAAAAAABpQBBGIAxEAAAAAAAAAAAQYyANRAAAAAAAAC5AEGMgBUECEHEgBkECEHEgB0EFEHEgBEEGEEUgACAAKwPYqxoQdSAAQfCHGmooAgBEAAAAAAAA4D8QbSAAQfSHGmooAgBEAAAAAAAA4D8QbSAFRJHtfD81PkZAEHIgBkSYbhKDwCo4QBByIAdEarx0kxgELEAQciAERBueXinLEB5AEEYg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AgAgByADNgIEIAUgCWohCQsgAiAIDQAaIAIoAgQLIgQgAEcNAAsgCUUNASADKAIEIgEoAgAiAiAHKAIENgIEIAcoAgQgAjYCACADQQA2AgggASADRg0BA0AgASgCBCECIAFBCGoQZhogARClAiACIQEgAiADRw0ACwwBCwNAIAQoAgQhAgJ/IAIgBCgCCCABRw0AGgJAAkAgACACRgRAQQEhBgwBCwNAIAEgAigCCCIFRiEGIAEgBUcNAiACKAIEIgIgAEcNAAsLIAAhAgsgAiAERwRAIAQoAgAiCCACKAIAIgUoAgQ2AgQgBSgCBCAINgIAIAMoAgAiCCAENgIEIAQgCDYCACADIAU2AgAgBSADNgIECyACIAYNABogAigCBAsiBCAARw0ACwsgA0EQaiQAC8MDAgF/AXwgAC0Aga0aBEAgAEGwhxpqED0gAEH4hxpqEIMBIABBwI0aahBzIABBkI4aahBzIABB4I4aahBzIABBsI8aahBDIABBoJAaahBfIABBkIwaahBDCwJ/IAIEQCAAIAArA/CrGjkD2KwaIABBwIsaaiAAKwPArBoQTiAAQdiLGmoiAisDACAAQZiNGmorAwAgACsD2KsaEGQaIABCgICAgICAgPg/NwPorBogAisDACAAQbiNGmorAwAgACsD2KsaEGQaIABCgICAgICAgPg/NwPwrBogAEHQrBpqDAELIABCADcD2KwaIABBwIsaaiAAKwO4rBoQTiAAQdiLGmoiAisDACAAQZiNGmorAwAgACsD2KsaEGQaIABCgICAgICAgPg/NwPorBogAisDACAAQbiNGmorAwAgACsD2KsaEGQaIABCgICAgICAgPg/NwPwrBogAEHIrBpqCyECIABB8IkaaiIDIAIrAwAQMyAAKwPAqxohBCAAIAG3ROr3ov4Dk60/ohCSAiAERBW3MQr+BpM/oqIiBDkD0KsaIABB+IsaaiAEOQMAIABBwIsaahBQIANBARA3IABBADoAga0aC80CAQF8IAArA8CrGiEDIAAgAbdE6vei/gOTrT+iEJICIANEFbcxCv4Gkz+iojkD0KsaIABB8IkaagJ/IAIEQCAAIAArA/CrGjkD2KwaIABBwIsaaiAAKwPArBoQTiAAQdiLGmoiAisDACAAQZiNGmorAwAgACsD2KsaEGQaIABCgICAgICAgPg/NwPorBogAisDACAAQbiNGmorAwAgACsD2KsaEGQaIABCgICAgICAgPg/NwPwrBogAEHQrBpqDAELIABCADcD2KwaIABBwIsaaiAAKwO4rBoQTiAAQdiLGmoiAisDACAAQZiNGmorAwAgACsD2KsaEGQaIABCgICAgICAgPg/NwPorBogAisDACAAQbiNGmorAwAgACsD2KsaEGQaIABCgICAgICAgPg/NwPwrBogAEHIrBpqCyICKwMAEDMgAEEAOgCBrRoLSgAgAEGMrRpqKAIARQRAIABB8IkaahA4DwsgACAAKAL4rBq3RAAAAAAAQFHAoEQAAAAAAAAoQKMQzwJEAAAAAACAe0CiOQPQqxoLqAMCAX8FfCAAQagBahBuIQEgAEIANwN4IABCgICAgICA0MfAADcDcCAAQgA3A4ABIABCgICAgICAgPg/NwNoIABCADcDiAEgAELuw8fcpJarkT83A5gBIABCgICAgICQ4vLAADcDkAEgAEKAgICAgICA+D83A2AgAUECEHEgAUQAAAAAAMBiQBByIABCADcDOCAAQoCAgICAgID4PzcDMCAAQQ82AqABIABBQGtCADcDACAAQgA3A0ggAEIANwNQIAAQJyAAKwOYASAAKwNwoiICRBgtRFT7IQnAoEQAAAAAAADQP6IQoQIhAyAAKwOIASEEIAKaEJICIQYgAhCRAiEFIAAgBCADIAIQkAIgAyAFoqGjoiAGRAAAAAAAAPA/IAShoqEiAjkDCCAAIAJEAAAAAAAA8D+gIgM5AwAgACAEIAMgA6IgAiACokQAAAAAAADwP6AgBSACIAKgoqCjIgIgAqKjIgI5A1ggACgCoAFBD0YEQCAAIAJEAAAAAAAAEUCiOQNYCyABEHMgAEIANwMoIABCADcDICAAQgA3AxggAEIANwMQIAALJgAgAEGoAWoQcyAAQgA3AyggAEIANwMgIABCADcDGCAAQgA3AxALBAAgAAuIAgEEfCAARBgtRFT7IRlAAnwgAUQAAAAAAAAAAGRFBEAgACsDkAEMAQsgACABOQOQASABCyIDozkDmAEgAEGoAWogARBwIAArA5gBIAArA3CiIgFEGC1EVPshCcCgRAAAAAAAANA/ohChAiECIAArA4gBIQMgAZoQkgIhBSABEJECIQQgACADIAIgARCQAiACIASioaOiIAVEAAAAAAAA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BGohASADQQRqIQMgAkEEayICQQNLDQALCyACRQ0AA0AgAyABLQAAOgAAIANBAWohAyABQQFqIQEgAkEBayICDQALCyAAC5ABAQN/IAAhAQJAAkAgAEEDcUUNACAALQAARQRAQQAPCwNAIAFBAWoiAUEDcUUNASABLQAADQALDAELA0AgASICQQRqIQEgAigCACIDQX9zIANBgYKECGtxQYCBgoR4cUUNAAsgA0H/AXFFBEAgAiAAaw8LA0AgAi0AASEDIAJBAWoiASECIAMNAAsLIAEgAGsLBAAjAAsGACAAJAALEgEBfyMAIABrQXBxIgEkACABCwuRTwcAQYAIC+ADT3BlbjMwMwBwbGF5AHNldFNhbXBsZVJhdGUAc2V0V2F2ZWZvcm0Ac2V0Q3V0b2ZmAHNldFJlc29uYW5jZQBzZXRFbnZNb2QAc2V0RGVjYXkAc2V0QWNjZW50AHNldFZvbHVtZQBzZXRBbXBTdXN0YWluAHNldFByZUZpbHRlckhpZ2hwYXNzAHNldEZlZWRiYWNrSGlnaHBhc3MAc2V0UG9zdEZpbHRlckhpZ2hwYXNzAHNldFNxdWFyZVBoYXNlU2hpZnQAc2V0U2xpZGVUaW1lAHNldE5vcm1hbEF0dGFjawBzZXRBY2NlbnRBdHRhY2sAc2V0QWNjZW50RGVjYXkAc2V0QW1wRGVjYXkAc2V0QW1wUmVsZWFzZQB0cmlnZ2VyTm90ZQBzbGlkZVRvTm90ZQByZWxlYXNlTm90ZQBub3RlT24Ac2V0UGl0Y2hCZW5kAE41cm9zaWM3T3BlbjMwM0UAAAAAqBoAAFQFAABQTjVyb3NpYzdPcGVuMzAzRQAAAIgbAABwBQAAAAAAAGgFAABQS041cm9zaWM3T3BlbjMwM0UAAIgbAACUBQAAAQAAAGgFAABpaQB2AHZpAIQFAACYGgAAhAUAAGRpaQD8GQAAhAUAAJgaAAB2aWlkAEHwCwsV/BkAAIQFAABcGgAAFBoAAHZpaWlpAEGQDAvmDfwZAACEBQAAXBoAAFwaAAB2b2lkAGJvb2wAY2hhcgBzaWduZWQgY2hhcgB1bnNpZ25lZCBjaGFyAHNob3J0AHVuc2lnbmVkIHNob3J0AGludAB1bnNpZ25lZCBpbnQAbG9uZwB1bnNpZ25lZCBsb25nAGZsb2F0AGRvdWJsZQBzdGQ6OnN0cmluZwBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBzdGQ6OndzdHJpbmcAc3RkOjp1MTZzdHJpbmcAc3RkOjp1MzJzdHJpbmcAZW1zY3JpcHRlbjo6dmFsAGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4ATlN0M19fMjEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUATlN0M19fMjIxX19iYXNpY19zdHJpbmdfY29tbW9uSUxiMUVFRQAAqBoAAHUJAAAsGwAANgkAAAAAAAABAAAAnAkAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQAALBsAALwJAAAAAAAAAQAAAJwJAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSXdOU18xMWNoYXJfdHJhaXRzSXdFRU5TXzlhbGxvY2F0b3JJd0VFRUUAACwbAAAUCgAAAAAAAAEAAACcCQAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEc05TXzExY2hhcl90cmFpdHNJRHNFRU5TXzlhbGxvY2F0b3JJRHNFRUVFAAAALBsAAGwKAAAAAAAAAQAAAJwJAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURpTlNfMTFjaGFyX3RyYWl0c0lEaUVFTlNfOWFsbG9jYXRvcklEaUVFRUUAAAAsGwAAyAoAAAAAAAABAAAAnAkAAAAAAABOMTBlbXNjcmlwdGVuM3ZhbEUAAKgaAAAkCwAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJY0VFAACoGgAAQAsAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWFFRQAAqBoAAGgLAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0loRUUAAKgaAACQCwAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJc0VFAACoGgAAuAsAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXRFRQAAqBoAAOALAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lpRUUAAKgaAAAIDAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJakVFAACoGgAAMAwAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWxFRQAAqBoAAFgMAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ltRUUAAKgaAACADAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZkVFAACoGgAAqAwAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWRFRQAAqBoAANAMAEGGGgsq4D8AAAAAAADgvwAAAAAAAPA/AAAAAAAA+D8AAAAAAAAAAAbQz0Pr/Uw+AEG7GgvcFUADuOI/AwAAAAQAAAAEAAAABgAAAIP5ogBETm4A/CkVANFXJwDdNPUAYtvAADyZlQBBkEMAY1H+ALveqwC3YcUAOm4kANJNQgBJBuAACeouAByS0QDrHf4AKbEcAOg+pwD1NYIARLsuAJzp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T3BlbjMwMzo6RW1zY3JpcHRlbkJpbmRpbmdJbml0aWFsaXplcl9PcGVuMzAzKCkQUHZvaWQgY29uc3QqIGVtc2NyaXB0ZW46OmludGVybmFsOjpnZXRBY3R1YWxUeXBlPHJvc2ljOjpPcGVuMzAzPihyb3NpYzo6T3BlbjMwMyopEUp2b2lkIGVtc2NyaXB0ZW46OmludGVybmFsOjpyYXdfZGVzdHJ1Y3Rvcjxyb3NpYzo6T3BlbjMwMz4ocm9zaWM6Ok9wZW4zMDMqKRJNZW1zY3JpcHRlbjo6aW50ZXJuYWw6Okludm9rZXI8cm9zaWM6Ok9wZW4zMDMqPjo6aW52b2tlKHJvc2ljOjpPcGVuMzAzKiAoKikoKSkTRHJvc2ljOjpPcGVuMzAzKiBlbXNjcmlwdGVuOjppbnRlcm5hbDo6b3BlcmF0b3JfbmV3PHJvc2ljOjpPcGVuMzAzPigpFBtyb3NpYzo6T3BlbjMwMzo6Z2V0U2FtcGxlKCkVmAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjxkb3VibGUgKHJvc2ljOjpPcGVuMzAzOjoqKSgpLCBkb3VibGUsIHJvc2ljOjpPcGVuMzAzKj46Omludm9rZShkb3VibGUgKHJvc2ljOjpPcGVuMzAzOjoqIGNvbnN0JikoKSwgcm9zaWM6Ok9wZW4zMDMqKRauAWVtc2NyaXB0ZW46OmludGVybmFsOjpNZXRob2RJbnZva2VyPHZvaWQgKHJvc2ljOjpPcGVuMzAzOjoqKShkb3VibGUpLCB2b2lkLCByb3NpYzo6T3BlbjMwMyosIGRvdWJsZT46Omludm9rZSh2b2lkIChyb3NpYzo6T3BlbjMwMzo6KiBjb25zdCYpKGRvdWJsZSksIHJvc2ljOjpPcGVuMzAzKiwgZG91YmxlKRcjcm9zaWM6Ok9wZW4zMDM6OnNldFdhdmVmb3JtKGRvdWJsZSkYJHJvc2ljOjpPcGVuMzAzOjpzZXRSZXNvbmFuY2UoZG91YmxlKRkgcm9zaWM6Ok9wZW4zMDM6OnNldERlY2F5KGRvdWJsZSkaJXJvc2ljOjpPcGVuMzAzOjpzZXRBbXBTdXN0YWluKGRvdWJsZSkbLHJvc2ljOjpPcGVuMzAzOjpzZXRQcmVGaWx0ZXJIaWdocGFzcyhkb3VibGUpHCtyb3NpYzo6T3BlbjMwMzo6c2V0RmVlZGJhY2tIaWdocGFzcyhkb3VibGUpHS1yb3NpYzo6T3BlbjMwMzo6c2V0UG9zdEZpbHRlckhpZ2hwYXNzKGRvdWJsZSkeK3Jvc2ljOjpPcGVuMzAzOjpzZXRTcXVhcmVQaGFzZVNoaWZ0KGRvdWJsZSkfJ3Jvc2ljOjpPcGVuMzAzOjpzZXROb3JtYWxBdHRhY2soZG91YmxlKSAncm9zaWM6Ok9wZW4zMDM6OnNldEFjY2VudEF0dGFjayhkb3VibGUpISZyb3NpYzo6T3BlbjMwMzo6c2V0QWNjZW50RGVjYXkoZG91YmxlKSIjcm9zaWM6Ok9wZW4zMDM6OnNldEFtcERlY2F5KGRvdWJsZSkjJXJvc2ljOjpPcGVuMzAzOjpzZXRBbXBSZWxlYXNlKGRvdWJsZSkkugFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChyb3NpYzo6T3BlbjMwMzo6KikoaW50LCBib29sKSwgdm9pZCwgcm9zaWM6Ok9wZW4zMDMqLCBpbnQsIGJvb2w+OjppbnZva2Uodm9pZCAocm9zaWM6Ok9wZW4zMDM6OiogY29uc3QmKShpbnQsIGJvb2wpLCByb3NpYzo6T3BlbjMwMyosIGludCwgYm9vbCkltgFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TWV0aG9kSW52b2tlcjx2b2lkIChyb3NpYzo6T3BlbjMwMzo6KikoaW50LCBpbnQpLCB2b2lkLCByb3NpYzo6T3BlbjMwMyosIGludCwgaW50Pjo6aW52b2tlKHZvaWQgKHJvc2ljOjpPcGVuMzAzOjoqIGNvbnN0JikoaW50LCBpbnQpLCByb3NpYzo6T3BlbjMwMyosIGludCwgaW50KSYfcm9zaWM6OkFjaWRTZXF1ZW5jZXI6OmdldE5vdGUoKSczcm9zaWM6OlRlZUJlZUZpbHRlcjo6Y2FsY3VsYXRlQ29lZmZpY2llbnRzQXBwcm94NCgpKCZyb3NpYzo6VGVlQmVlRmlsdGVyOjpnZXRTYW1wbGUoZG91YmxlKSkhX0dMT0JBTF9fc3ViX0lfb3BlbjMwMy5lbWJpbmQuY3BwKiFyb3NpYzo6QWNpZFBhdHRlcm46OkFjaWRQYXR0ZXJuKCkrJXJvc2ljOjpBY2lkU2VxdWVuY2VyOjpBY2lkU2VxdWVuY2VyKCksK3Jvc2ljOjpBY2lkU2VxdWVuY2VyOjpzZXRTYW1wbGVSYXRlKGRvdWJsZSktJnJvc2ljOjpBY2lkU2VxdWVuY2VyOjptb2RlV2FzQ2hhbmdlZCgpLh1yb3NpYzo6QWNpZFNlcXVlbmNlcjo6c3RhcnQoKS8ccm9zaWM6OkFjaWRTZXF1ZW5jZXI6OnN0b3AoKTAncm9zaWM6OkFuYWxvZ0VudmVsb3BlOjpBbmFsb2dFbnZlbG9wZSgpMShyb3NpYzo6QW5hbG9nRW52ZWxvcGU6OnNldEF0dGFjayhkb3VibGUpMidyb3NpYzo6QW5hbG9nRW52ZWxvcGU6OnNldERlY2F5KGRvdWJsZSkzKXJvc2ljOjpBbmFsb2dFbnZlbG9wZTo6c2V0UmVsZWFzZShkb3VibGUpNChyb3NpYzo6QW5hbG9nRW52ZWxvcGU6On5BbmFsb2dFbnZlbG9wZSgpNSxyb3NpYzo6QW5hbG9nRW52ZWxvcGU6OnNldFNhbXBsZVJhdGUoZG91YmxlKTYqcm9zaWM6OkFuYWxvZ0VudmVsb3BlOjpzZXRUYXVTY2FsZShkb3VibGUpNyNyb3NpYzo6QW5hbG9nRW52ZWxvcGU6Om5vdGVPbihib29sKTggcm9zaWM6OkFuYWxvZ0VudmVsb3BlOjpub3RlT2ZmKCk5KXJvc2ljOjpCbGVuZE9zY2lsbGF0b3I6OkJsZW5kT3NjaWxsYXRvcigpOi1yb3NpYzo6QmxlbmRPc2NpbGxhdG9yOjpzZXRTYW1wbGVSYXRlKGRvdWJsZSk7KXJvc2ljOjpCbGVuZE9zY2lsbGF0b3I6OnNldFdhdmVGb3JtMShpbnQpPClyb3NpYzo6QmxlbmRPc2NpbGxhdG9yOjpzZXRXYXZlRm9ybTIoaW50KT0kcm9zaWM6OkJsZW5kT3NjaWxsYXRvcjo6cmVzZXRQaGFzZSgpPipyb3NpYzo6QmxlbmRPc2NpbGxhdG9yOjp+QmxlbmRPc2NpbGxhdG9yKCk/QXJvc2ljOjpCbGVuZE9zY2lsbGF0b3I6OnNldFdhdmVUYWJsZTEocm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZSopQEFyb3NpYzo6QmxlbmRPc2NpbGxhdG9yOjpzZXRXYXZlVGFibGUyKHJvc2ljOjpNaXBNYXBwZWRXYXZlVGFibGUqKUEjcm9zaWM6OkJpcXVhZEZpbHRlcjo6QmlxdWFkRmlsdGVyKClCIXJvc2ljOjpCaXF1YWRGaWx0ZXI6OmNhbGNDb2VmZnMoKUMccm9zaWM6OkJpcXVhZEZpbHRlcjo6cmVzZXQoKUQqcm9zaWM6OkJpcXVhZEZpbHRlcjo6c2V0U2FtcGxlUmF0ZShkb3VibGUpRSFyb3NpYzo6QmlxdWFkRmlsdGVyOjpzZXRNb2RlKGludClGKXJvc2ljOjpCaXF1YWRGaWx0ZXI6OnNldEZyZXF1ZW5jeShkb3VibGUpRyRyb3NpYzo6QmlxdWFkRmlsdGVyOjpzZXRHYWluKGRvdWJsZSlIKXJvc2ljOjpCaXF1YWRGaWx0ZXI6OnNldEJhbmR3aWR0aChkb3VibGUpSRlyb3NpYzo6Q29tcGxleDo6Q29tcGxleCgpShpyb3NpYzo6Q29tcGxleDo6fkNvbXBsZXgoKUslcm9zaWM6OkRlY2F5RW52ZWxvcGU6OkRlY2F5RW52ZWxvcGUoKUwmcm9zaWM6OkRlY2F5RW52ZWxvcGU6On5EZWNheUVudmVsb3BlKClNK3Jvc2ljOjpEZWNheUVudmVsb3BlOjpzZXRTYW1wbGVSYXRlKGRvdWJsZSlOMnJvc2ljOjpEZWNheUVudmVsb3BlOjpzZXREZWNheVRpbWVDb25zdGFudChkb3VibGUpTytyb3NpYzo6RGVjYXlFbnZlbG9wZTo6c2V0Tm9ybWFsaXplU3VtKGJvb2wpUB9yb3NpYzo6RGVjYXlFbnZlbG9wZTo6dHJpZ2dlcigpURpiaXRydjIoaW50LCBpbnQqLCBkb3VibGUqKVIeY2Z0ZnN1YihpbnQsIGRvdWJsZSosIGRvdWJsZSopUx5jZnRic3ViKGludCwgZG91YmxlKiwgZG91YmxlKilUHWNmdDFzdChpbnQsIGRvdWJsZSosIGRvdWJsZSopVSJjZnRtZGwoaW50LCBpbnQsIGRvdWJsZSosIGRvdWJsZSopViZyZGZ0KGludCwgaW50LCBkb3VibGUqLCBpbnQqLCBkb3VibGUqKVc7cm9zaWM6OkZvdXJpZXJUcmFuc2Zvcm1lclJhZGl4Mjo6Rm91cmllclRyYW5zZm9ybWVyUmFkaXgyKClYMnJvc2ljOjpGb3VyaWVyVHJhbnNmb3JtZXJSYWRpeDI6OnNldEJsb2NrU2l6ZShpbnQpWTxyb3NpYzo6Rm91cmllclRyYW5zZm9ybWVyUmFkaXgyOjp+Rm91cmllclRyYW5zZm9ybWVyUmFkaXgyKClaTnJvc2ljOjpGb3VyaWVyVHJhbnNmb3JtZXJSYWRpeDI6OnRyYW5zZm9ybVJlYWxTaWduYWwoZG91YmxlKiwgcm9zaWM6OkNvbXBsZXgqKVtGcm9zaWM6OkZvdXJpZXJUcmFuc2Zvcm1lclJhZGl4Mjo6dHJhbnNmb3JtUmVhbFNpZ25hbChkb3VibGUqLCBkb3VibGUqKVxVcm9zaWM6OkZvdXJpZXJUcmFuc2Zvcm1lclJhZGl4Mjo6dHJhbnNmb3JtU3ltbWV0cmljU3BlY3RydW0ocm9zaWM6OkNvbXBsZXgqLCBkb3VibGUqKV1Ncm9zaWM6OkZvdXJpZXJUcmFuc2Zvcm1lclJhZGl4Mjo6dHJhbnNmb3JtU3ltbWV0cmljU3BlY3RydW0oZG91YmxlKiwgZG91YmxlKilePXJvc2ljOjpFbGxpcHRpY1F1YXJ0ZXJCYW5kRmlsdGVyOjpFbGxpcHRpY1F1YXJ0ZXJCYW5kRmlsdGVyKClfKXJvc2ljOjpFbGxpcHRpY1F1YXJ0ZXJCYW5kRmlsdGVyOjpyZXNldCgpYClyb3NpYzo6TGVha3lJbnRlZ3JhdG9yOjpMZWFreUludGVncmF0b3IoKWEqcm9zaWM6OkxlYWt5SW50ZWdyYXRvcjo6fkxlYWt5SW50ZWdyYXRvcigpYi1yb3NpYzo6TGVha3lJbnRlZ3JhdG9yOjpzZXRTYW1wbGVSYXRlKGRvdWJsZSljL3Jvc2ljOjpMZWFreUludGVncmF0b3I6OnNldFRpbWVDb25zdGFudChkb3VibGUpZD1yb3NpYzo6TGVha3lJbnRlZ3JhdG9yOjpnZXROb3JtYWxpemVyKGRvdWJsZSwgZG91YmxlLCBkb3VibGUpZTdyb3NpYzo6TWlkaU5vdGVFdmVudDo6TWlkaU5vdGVFdmVudChpbnQsIGludCwgaW50LCBpbnQpZiZyb3NpYzo6TWlkaU5vdGVFdmVudDo6fk1pZGlOb3RlRXZlbnQoKWcvcm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZTo6TWlwTWFwcGVkV2F2ZVRhYmxlKCloMHJvc2ljOjpNaXBNYXBwZWRXYXZlVGFibGU6On5NaXBNYXBwZWRXYXZlVGFibGUoKWkrcm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZTo6Z2VuZXJhdGVNaXBNYXAoKWorcm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZTo6c2V0V2F2ZWZvcm0oaW50KWsrcm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZTo6cmVuZGVyV2F2ZWZvcm0oKWwucm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZTo6ZmlsbFdpdGhTcXVhcmUzMDMoKW0ucm9zaWM6Ok1pcE1hcHBlZFdhdmVUYWJsZTo6c2V0U3ltbWV0cnkoZG91YmxlKW4lcm9zaWM6Ok9uZVBvbGVGaWx0ZXI6Ok9uZVBvbGVGaWx0ZXIoKW8icm9zaWM6Ok9uZVBvbGVGaWx0ZXI6OmNhbGNDb2VmZnMoKXArcm9zaWM6Ok9uZVBvbGVGaWx0ZXI6OnNldFNhbXBsZVJhdGUoZG91YmxlKXEicm9zaWM6Ok9uZVBvbGVGaWx0ZXI6OnNldE1vZGUoaW50KXIncm9zaWM6Ok9uZVBvbGVGaWx0ZXI6OnNldEN1dG9mZihkb3VibGUpcx1yb3NpYzo6T25lUG9sZUZpbHRlcjo6cmVzZXQoKXQZcm9zaWM6Ok9wZW4zMDM6Ok9wZW4zMDMoKXUlcm9zaWM6Ok9wZW4zMDM6OnNldFNhbXBsZVJhdGUoZG91YmxlKXYhcm9zaWM6Ok9wZW4zMDM6OnNldEVudk1vZChkb3VibGUpdxpyb3NpYzo6T3BlbjMwMzo6fk9wZW4zMDMoKXghcm9zaWM6Ok9wZW4zMDM6OnNldEN1dG9mZihkb3VibGUpeSFyb3NpYzo6T3BlbjMwMzo6c2V0QWNjZW50KGRvdWJsZSl6IXJvc2ljOjpPcGVuMzAzOjpzZXRWb2x1bWUoZG91YmxlKXskcm9zaWM6Ok9wZW4zMDM6OnNldFNsaWRlVGltZShkb3VibGUpfCRyb3NpYzo6T3BlbjMwMzo6c2V0UGl0Y2hCZW5kKGRvdWJsZSl9IHJvc2ljOjpPcGVuMzAzOjpub3RlT24oaW50LCBpbnQpfnVzdGQ6Ol9fMjo6bGlzdDxyb3NpYzo6TWlkaU5vdGVFdmVudCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxyb3NpYzo6TWlkaU5vdGVFdmVudD4gPjo6cmVtb3ZlKHJvc2ljOjpNaWRpTm90ZUV2ZW50IGNvbnN0Jil/JnJvc2ljOjpPcGVuMzAzOjp0cmlnZ2VyTm90ZShpbnQsIGJvb2wpgAEmcm9zaWM6Ok9wZW4zMDM6OnNsaWRlVG9Ob3RlKGludCwgYm9vbCmBASByb3NpYzo6T3BlbjMwMzo6cmVsZWFzZU5vdGUoaW50KYIBI3Jvc2ljOjpUZWVCZWVGaWx0ZXI6OlRlZUJlZUZpbHRlcigpgwEccm9zaWM6OlRlZUJlZUZpbHRlcjo6cmVzZXQoKYQBJHJvc2ljOjpUZWVCZWVGaWx0ZXI6On5UZWVCZWVGaWx0ZXIoKYUBKnJvc2ljOjpUZWVCZWVGaWx0ZXI6OnNldFNhbXBsZVJhdGUoZG91YmxlKYYBDV9fZ2V0VHlwZU5hbWWHARxzdGQ6OnR5cGVfaW5mbzo6bmFtZSgpIGNvbnN0iAEqX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVziQEvZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDx2b2lkLCB2b2lkPjo6Z2V0KCmKAS9lbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGJvb2wsIHZvaWQ+OjpnZXQoKYsBP3ZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9pbnRlZ2VyPGNoYXI+KGNoYXIgY29uc3QqKYwBRnZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9pbnRlZ2VyPHNpZ25lZCBjaGFyPihjaGFyIGNvbnN0KimNAUh2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfaW50ZWdlcjx1bnNpZ25lZCBjaGFyPihjaGFyIGNvbnN0KimOAUB2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfaW50ZWdlcjxzaG9ydD4oY2hhciBjb25zdCopjwFJdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX2ludGVnZXI8dW5zaWduZWQgc2hvcnQ+KGNoYXIgY29uc3QqKZABPnZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9pbnRlZ2VyPGludD4oY2hhciBjb25zdCopkQFHdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX2ludGVnZXI8dW5zaWduZWQgaW50PihjaGFyIGNvbnN0KimSAT92b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfaW50ZWdlcjxsb25nPihjaGFyIGNvbnN0KimTAUh2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfaW50ZWdlcjx1bnNpZ25lZCBsb25nPihjaGFyIGNvbnN0KimUAT52b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfZmxvYXQ8ZmxvYXQ+KGNoYXIgY29uc3QqKZUBP3ZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9mbG9hdDxkb3VibGU+KGNoYXIgY29uc3QqKZYBgAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHZvaWQ+OjpnZXQoKZcBmwFlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHVuc2lnbmVkIGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4sIHZvaWQ+OjpnZXQoKZgBiQFlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4sIHZvaWQ+OjpnZXQoKZkBjAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhcjE2X3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyMTZfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcjE2X3Q+ID4sIHZvaWQ+OjpnZXQoKZoBjAFlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhcjMyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyMzJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcjMyX3Q+ID4sIHZvaWQ+OjpnZXQoKZsBOmVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZW1zY3JpcHRlbjo6dmFsLCB2b2lkPjo6Z2V0KCmcAUN2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfbWVtb3J5X3ZpZXc8Y2hhcj4oY2hhciBjb25zdCopnQFKdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX21lbW9yeV92aWV3PHNpZ25lZCBjaGFyPihjaGFyIGNvbnN0KimeAUx2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfbWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4oY2hhciBjb25zdCopnwFEdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX21lbW9yeV92aWV3PHNob3J0PihjaGFyIGNvbnN0KimgAU12b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfbWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+KGNoYXIgY29uc3QqKaEBQnZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9tZW1vcnlfdmlldzxpbnQ+KGNoYXIgY29uc3QqKaIBS3ZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9tZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+KGNoYXIgY29uc3QqKaMBQ3ZvaWQgKGFub255bW91cyBuYW1lc3BhY2UpOjpyZWdpc3Rlcl9tZW1vcnlfdmlldzxsb25nPihjaGFyIGNvbnN0KimkAUx2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfbWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4oY2hhciBjb25zdCoppQFEdm9pZCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OnJlZ2lzdGVyX21lbW9yeV92aWV3PGZsb2F0PihjaGFyIGNvbnN0KimmAUV2b2lkIChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVnaXN0ZXJfbWVtb3J5X3ZpZXc8ZG91YmxlPihjaGFyIGNvbnN0KimnAS5lbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8dm9pZD46OmdldCgpqAEuZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGJvb2w+OjpnZXQoKakBL2Vtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8Y2hhciwgdm9pZD46OmdldCgpqgElc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPGNoYXI+OjptaW4oKasBJXN0ZDo6X18yOjpudW1lcmljX2xpbWl0czxjaGFyPjo6bWF4KCmsATZlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPHNpZ25lZCBjaGFyLCB2b2lkPjo6Z2V0KCmtASxzdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8c2lnbmVkIGNoYXI+OjptaW4oKa4BLHN0ZDo6X18yOjpudW1lcmljX2xpbWl0czxzaWduZWQgY2hhcj46Om1heCgprwE4ZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDx1bnNpZ25lZCBjaGFyLCB2b2lkPjo6Z2V0KCmwAS5zdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8dW5zaWduZWQgY2hhcj46Om1pbigpsQEuc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPHVuc2lnbmVkIGNoYXI+OjptYXgoKbIBMGVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8c2hvcnQsIHZvaWQ+OjpnZXQoKbMBJnN0ZDo6X18yOjpudW1lcmljX2xpbWl0czxzaG9ydD46Om1pbigptAEmc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPHNob3J0Pjo6bWF4KCm1ATllbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPHVuc2lnbmVkIHNob3J0LCB2b2lkPjo6Z2V0KCm2AS9zdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8dW5zaWduZWQgc2hvcnQ+OjptaW4oKbcBL3N0ZDo6X18yOjpudW1lcmljX2xpbWl0czx1bnNpZ25lZCBzaG9ydD46Om1heCgpuAEuZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxpbnQsIHZvaWQ+OjpnZXQoKbkBJHN0ZDo6X18yOjpudW1lcmljX2xpbWl0czxpbnQ+OjptaW4oKboBJHN0ZDo6X18yOjpudW1lcmljX2xpbWl0czxpbnQ+OjptYXgoKbsBN2Vtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8dW5zaWduZWQgaW50LCB2b2lkPjo6Z2V0KCm8AS1zdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8dW5zaWduZWQgaW50Pjo6bWluKCm9AS1zdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8dW5zaWduZWQgaW50Pjo6bWF4KCm+AS9lbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGxvbmcsIHZvaWQ+OjpnZXQoKb8BJXN0ZDo6X18yOjpudW1lcmljX2xpbWl0czxsb25nPjo6bWluKCnAASVzdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8bG9uZz46Om1heCgpwQE4ZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDx1bnNpZ25lZCBsb25nLCB2b2lkPjo6Z2V0KCnCAS5zdGQ6Ol9fMjo6bnVtZXJpY19saW1pdHM8dW5zaWduZWQgbG9uZz46Om1pbigpwwEuc3RkOjpfXzI6Om51bWVyaWNfbGltaXRzPHVuc2lnbmVkIGxvbmc+OjptYXgoKcQBMGVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZmxvYXQsIHZvaWQ+OjpnZXQoKcUBMWVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZG91YmxlLCB2b2lkPjo6Z2V0KCnGAYABZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPjo6Z2V0KCnHAZsBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHVuc2lnbmVkIGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gPjo6Z2V0KCnIAYkBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4gPjo6Z2V0KCnJAYwBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhcjE2X3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyMTZfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcjE2X3Q+ID4gPjo6Z2V0KCnKAYwBZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhcjMyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyMzJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcjMyX3Q+ID4gPjo6Z2V0KCnLATllbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZW1zY3JpcHRlbjo6dmFsPjo6Z2V0KCnMAUhlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+LCB2b2lkPjo6Z2V0KCnNAVgoYW5vbnltb3VzIG5hbWVzcGFjZSk6OlR5cGVkQXJyYXlJbmRleCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OmdldFR5cGVkQXJyYXlJbmRleDxjaGFyPigpzgFPZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4sIHZvaWQ+OjpnZXQoKc8BXyhhbm9ueW1vdXMgbmFtZXNwYWNlKTo6VHlwZWRBcnJheUluZGV4IChhbm9ueW1vdXMgbmFtZXNwYWNlKTo6Z2V0VHlwZWRBcnJheUluZGV4PHNpZ25lZCBjaGFyPigp0AFRZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPiwgdm9pZD46OmdldCgp0QFhKGFub255bW91cyBuYW1lc3BhY2UpOjpUeXBlZEFycmF5SW5kZXggKGFub255bW91cyBuYW1lc3BhY2UpOjpnZXRUeXBlZEFycmF5SW5kZXg8dW5zaWduZWQgY2hhcj4oKdIBSWVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+LCB2b2lkPjo6Z2V0KCnTAVkoYW5vbnltb3VzIG5hbWVzcGFjZSk6OlR5cGVkQXJyYXlJbmRleCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OmdldFR5cGVkQXJyYXlJbmRleDxzaG9ydD4oKdQBUmVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+LCB2b2lkPjo6Z2V0KCnVAWIoYW5vbnltb3VzIG5hbWVzcGFjZSk6OlR5cGVkQXJyYXlJbmRleCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OmdldFR5cGVkQXJyYXlJbmRleDx1bnNpZ25lZCBzaG9ydD4oKdYBR2Vtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50Piwgdm9pZD46OmdldCgp1wFXKGFub255bW91cyBuYW1lc3BhY2UpOjpUeXBlZEFycmF5SW5kZXggKGFub255bW91cyBuYW1lc3BhY2UpOjpnZXRUeXBlZEFycmF5SW5kZXg8aW50Pigp2AFQZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+LCB2b2lkPjo6Z2V0KCnZAWAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OlR5cGVkQXJyYXlJbmRleCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OmdldFR5cGVkQXJyYXlJbmRleDx1bnNpZ25lZCBpbnQ+KCnaAUhlbXNjcmlwdGVuOjppbnRlcm5hbDo6VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmc+LCB2b2lkPjo6Z2V0KCnbAVgoYW5vbnltb3VzIG5hbWVzcGFjZSk6OlR5cGVkQXJyYXlJbmRleCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OmdldFR5cGVkQXJyYXlJbmRleDxsb25nPigp3AFRZW1zY3JpcHRlbjo6aW50ZXJuYWw6OlR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPiwgdm9pZD46OmdldCgp3QFhKGFub255bW91cyBuYW1lc3BhY2UpOjpUeXBlZEFycmF5SW5kZXggKGFub255bW91cyBuYW1lc3BhY2UpOjpnZXRUeXBlZEFycmF5SW5kZXg8dW5zaWduZWQgbG9uZz4oKd4BSWVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+LCB2b2lkPjo6Z2V0KCnfAVkoYW5vbnltb3VzIG5hbWVzcGFjZSk6OlR5cGVkQXJyYXlJbmRleCAoYW5vbnltb3VzIG5hbWVzcGFjZSk6OmdldFR5cGVkQXJyYXlJbmRleDxmbG9hdD4oKeABSmVtc2NyaXB0ZW46OmludGVybmFsOjpUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPiwgdm9pZD46OmdldCgp4QFaKGFub255bW91cyBuYW1lc3BhY2UpOjpUeXBlZEFycmF5SW5kZXggKGFub255bW91cyBuYW1lc3BhY2UpOjpnZXRUeXBlZEFycmF5SW5kZXg8ZG91YmxlPigp4gEVX19jeHhfZ2xvYmFsX3Zhcl9pbml04wFuRW1zY3JpcHRlbkJpbmRpbmdJbml0aWFsaXplcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXM6OkVtc2NyaXB0ZW5CaW5kaW5nSW5pdGlhbGl6ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzKCnkAS5lbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8Y2hhcj46OmdldCgp5QE0c3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPGNoYXIsIHRydWU+OjptaW4oKeYBNHN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czxjaGFyLCB0cnVlPjo6bWF4KCnnATVlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8c2lnbmVkIGNoYXI+OjpnZXQoKegBO3N0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czxzaWduZWQgY2hhciwgdHJ1ZT46Om1pbigp6QE7c3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPHNpZ25lZCBjaGFyLCB0cnVlPjo6bWF4KCnqATdlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8dW5zaWduZWQgY2hhcj46OmdldCgp6wE9c3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPHVuc2lnbmVkIGNoYXIsIHRydWU+OjptaW4oKewBPXN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czx1bnNpZ25lZCBjaGFyLCB0cnVlPjo6bWF4KCntAS9lbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8c2hvcnQ+OjpnZXQoKe4BNXN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czxzaG9ydCwgdHJ1ZT46Om1pbigp7wE1c3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPHNob3J0LCB0cnVlPjo6bWF4KCnwAThlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8dW5zaWduZWQgc2hvcnQ+OjpnZXQoKfEBPnN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czx1bnNpZ25lZCBzaG9ydCwgdHJ1ZT46Om1pbigp8gE+c3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPHVuc2lnbmVkIHNob3J0LCB0cnVlPjo6bWF4KCnzAS1lbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8aW50Pjo6Z2V0KCn0ATNzdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8aW50LCB0cnVlPjo6bWluKCn1ATNzdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8aW50LCB0cnVlPjo6bWF4KCn2ATZlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8dW5zaWduZWQgaW50Pjo6Z2V0KCn3ATxzdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8dW5zaWduZWQgaW50LCB0cnVlPjo6bWluKCn4ATxzdGQ6Ol9fMjo6X19saWJjcHBfbnVtZXJpY19saW1pdHM8dW5zaWduZWQgaW50LCB0cnVlPjo6bWF4KCn5AS5lbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8bG9uZz46OmdldCgp+gE0c3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPGxvbmcsIHRydWU+OjptaW4oKfsBNHN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czxsb25nLCB0cnVlPjo6bWF4KCn8ATdlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8dW5zaWduZWQgbG9uZz46OmdldCgp/QE9c3RkOjpfXzI6Ol9fbGliY3BwX251bWVyaWNfbGltaXRzPHVuc2lnbmVkIGxvbmcsIHRydWU+OjptaW4oKf4BPXN0ZDo6X18yOjpfX2xpYmNwcF9udW1lcmljX2xpbWl0czx1bnNpZ25lZCBsb25nLCB0cnVlPjo6bWF4KCn/AS9lbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZmxvYXQ+OjpnZXQoKYACMGVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxkb3VibGU+OjpnZXQoKYECSGVtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPiA+OjpnZXQoKYICT2Vtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4gPjo6Z2V0KCmDAlFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4gPjo6Z2V0KCmEAkllbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+ID46OmdldCgphQJSZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PiA+OjpnZXQoKYYCR2Vtc2NyaXB0ZW46OmludGVybmFsOjpMaWdodFR5cGVJRDxlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+ID46OmdldCgphwJQZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4gPjo6Z2V0KCmIAkhlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4gPjo6Z2V0KCmJAlFlbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4gPjo6Z2V0KCmKAkllbXNjcmlwdGVuOjppbnRlcm5hbDo6TGlnaHRUeXBlSUQ8ZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+ID46OmdldCgpiwJKZW1zY3JpcHRlbjo6aW50ZXJuYWw6OkxpZ2h0VHlwZUlEPGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4gPjo6Z2V0KCmMAhdfR0xPQkFMX19zdWJfSV9iaW5kLmNwcI0CA2xvZ44CBWxkZXhwjwIEc2luaJACA3NpbpECA2Nvc5ICA2V4cJMCDV9fRE9VQkxFX0JJVFOUAgRmYWJzlQIKX19yZW1fcGlvMpYCA3Bvd5cCBHNxcnSYAgVleHBtMZkCD19fRE9VQkxFX0JJVFMuMZoCB19fZXhwbzKbAgR0YW5onAIFX19zaW6dAgVmbG9vcp4CEF9fcmVtX3BpbzJfbGFyZ2WfAgVfX2Nvc6ACBV9fdGFuoQIDdGFuogIIX19zdHJkdXCjAhtvcGVyYXRvciBuZXcodW5zaWduZWQgbG9uZymkAh1vcGVyYXRvciBuZXdbXSh1bnNpZ25lZCBsb25nKaUCFm9wZXJhdG9yIGRlbGV0ZSh2b2lkKimmAhhvcGVyYXRvciBkZWxldGVbXSh2b2lkKimnAmN2b2lkICgqc3RkOjpfXzI6Oihhbm9ueW1vdXMgbmFtZXNwYWNlKTo6X19saWJjcHBfYXRvbWljX2xvYWQ8dm9pZCAoKikoKT4odm9pZCAoKiBjb25zdCopKCksIGludCkpKCmoAhZzdGQ6OmdldF9uZXdfaGFuZGxlcigpqQIcc3RkOjp0eXBlX2luZm86On50eXBlX2luZm8oKaoCBnN0cmNtcKsCMV9fY3h4YWJpdjE6Ol9fc2hpbV90eXBlX2luZm86On5fX3NoaW1fdHlwZV9pbmZvKCmsAitfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvOjpub29wMSgpIGNvbnN0rQIrX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbzo6bm9vcDIoKSBjb25zdK4CP19fY3h4YWJpdjE6Ol9fZnVuZGFtZW50YWxfdHlwZV9pbmZvOjp+X19mdW5kYW1lbnRhbF90eXBlX2luZm8oKa8CM19fY3h4YWJpdjE6Ol9fY2xhc3NfdHlwZV9pbmZvOjp+X19jbGFzc190eXBlX2luZm8oKbACOV9fY3h4YWJpdjE6Ol9fc2lfY2xhc3NfdHlwZV9pbmZvOjp+X19zaV9jbGFzc190eXBlX2luZm8oKbECO19fY3h4YWJpdjE6Ol9fdm1pX2NsYXNzX3R5cGVfaW5mbzo6fl9fdm1pX2NsYXNzX3R5cGVfaW5mbygpsgI3X19jeHhhYml2MTo6X19wb2ludGVyX3R5cGVfaW5mbzo6fl9fcG9pbnRlcl90eXBlX2luZm8oKbMCYV9fY3h4YWJpdjE6Ol9fZnVuZGFtZW50YWxfdHlwZV9pbmZvOjpjYW5fY2F0Y2goX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCosIHZvaWQqJikgY29uc3S0Ajxpc19lcXVhbChzdGQ6OnR5cGVfaW5mbyBjb25zdCosIHN0ZDo6dHlwZV9pbmZvIGNvbnN0KiwgYm9vbCm1AjdzdGQ6OnR5cGVfaW5mbzo6b3BlcmF0b3I9PShzdGQ6OnR5cGVfaW5mbyBjb25zdCYpIGNvbnN0tgJbX19jeHhhYml2MTo6X19jbGFzc190eXBlX2luZm86OmNhbl9jYXRjaChfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvIGNvbnN0Kiwgdm9pZComKSBjb25zdLcCDl9fZHluYW1pY19jYXN0uAJrX19jeHhhYml2MTo6X19jbGFzc190eXBlX2luZm86OnByb2Nlc3NfZm91bmRfYmFzZV9jbGFzcyhfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCosIGludCkgY29uc3S5Am5fX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6aGFzX3VuYW1iaWd1b3VzX3B1YmxpY19iYXNlKF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkKiwgaW50KSBjb25zdLoCcV9fY3h4YWJpdjE6Ol9fc2lfY2xhc3NfdHlwZV9pbmZvOjpoYXNfdW5hbWJpZ3VvdXNfcHVibGljX2Jhc2UoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQqLCBpbnQpIGNvbnN0uwJzX19jeHhhYml2MTo6X19iYXNlX2NsYXNzX3R5cGVfaW5mbzo6aGFzX3VuYW1iaWd1b3VzX3B1YmxpY19iYXNlKF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkKiwgaW50KSBjb25zdLwCcl9fY3h4YWJpdjE6Ol9fdm1pX2NsYXNzX3R5cGVfaW5mbzo6aGFzX3VuYW1iaWd1b3VzX3B1YmxpY19iYXNlKF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkKiwgaW50KSBjb25zdL0CW19fY3h4YWJpdjE6Ol9fcGJhc2VfdHlwZV9pbmZvOjpjYW5fY2F0Y2goX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCosIHZvaWQqJikgY29uc3S+Al1fX2N4eGFiaXYxOjpfX3BvaW50ZXJfdHlwZV9pbmZvOjpjYW5fY2F0Y2goX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCosIHZvaWQqJikgY29uc3S/AlxfX2N4eGFiaXYxOjpfX3BvaW50ZXJfdHlwZV9pbmZvOjpjYW5fY2F0Y2hfbmVzdGVkKF9fY3h4YWJpdjE6Ol9fc2hpbV90eXBlX2luZm8gY29uc3QqKSBjb25zdMACZl9fY3h4YWJpdjE6Ol9fcG9pbnRlcl90b19tZW1iZXJfdHlwZV9pbmZvOjpjYW5fY2F0Y2hfbmVzdGVkKF9fY3h4YWJpdjE6Ol9fc2hpbV90eXBlX2luZm8gY29uc3QqKSBjb25zdMECgwFfX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6cHJvY2Vzc19zdGF0aWNfdHlwZV9hYm92ZV9kc3QoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQgY29uc3QqLCB2b2lkIGNvbnN0KiwgaW50KSBjb25zdMICdl9fY3h4YWJpdjE6Ol9fY2xhc3NfdHlwZV9pbmZvOjpwcm9jZXNzX3N0YXRpY190eXBlX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCkgY29uc3TDAnNfX2N4eGFiaXYxOjpfX3ZtaV9jbGFzc190eXBlX2luZm86OnNlYXJjaF9iZWxvd19kc3QoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN0xAKBAV9fY3h4YWJpdjE6Ol9fYmFzZV9jbGFzc190eXBlX2luZm86OnNlYXJjaF9hYm92ZV9kc3QoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQgY29uc3QqLCB2b2lkIGNvbnN0KiwgaW50LCBib29sKSBjb25zdMUCdF9fY3h4YWJpdjE6Ol9fYmFzZV9jbGFzc190eXBlX2luZm86OnNlYXJjaF9iZWxvd19kc3QoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN0xgJyX19jeHhhYml2MTo6X19zaV9jbGFzc190eXBlX2luZm86OnNlYXJjaF9iZWxvd19kc3QoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN0xwJvX19jeHhhYml2MTo6X19jbGFzc190eXBlX2luZm86OnNlYXJjaF9iZWxvd19kc3QoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN0yAKAAV9fY3h4YWJpdjE6Ol9fdm1pX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2Fib3ZlX2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN0yQJ/X19jeHhhYml2MTo6X19zaV9jbGFzc190eXBlX2luZm86OnNlYXJjaF9hYm92ZV9kc3QoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQgY29uc3QqLCB2b2lkIGNvbnN0KiwgaW50LCBib29sKSBjb25zdMoCfF9fY3h4YWJpdjE6Ol9fY2xhc3NfdHlwZV9pbmZvOjpzZWFyY2hfYWJvdmVfZHN0KF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkIGNvbnN0Kiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TLAhBfX2Vycm5vX2xvY2F0aW9uzAIIZGxtYWxsb2PNAgZkbGZyZWXOAgRzYnJrzwIEZXhwMtACBnNjYWxibtECBm1lbWNwedICBm1lbXNldNMCB21lbW1vdmXUAgZzdHJsZW7VAglzdGFja1NhdmXWAgxzdGFja1Jlc3RvcmXXAgpzdGFja0FsbG9jBxIBAA9fX3N0YWNrX3BvaW50ZXI=';
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

  function heap32VectorToArray(count, firstElement) {
      var array = [];
      for (var i = 0; i < count; i++) {
          array.push(HEAP32[(firstElement >> 2) + i]);
      }
      return array;
    }
  
  function runDestructors(destructors) {
      while (destructors.length) {
          var ptr = destructors.pop();
          var del = destructors.pop();
          del(ptr);
      }
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
  "_embind_register_bool": __embind_register_bool,
  "_embind_register_class": __embind_register_class,
  "_embind_register_class_constructor": __embind_register_class_constructor,
  "_embind_register_class_function": __embind_register_class_function,
  "_embind_register_emval": __embind_register_emval,
  "_embind_register_float": __embind_register_float,
  "_embind_register_integer": __embind_register_integer,
  "_embind_register_memory_view": __embind_register_memory_view,
  "_embind_register_std_string": __embind_register_std_string,
  "_embind_register_std_wstring": __embind_register_std_wstring,
  "_embind_register_void": __embind_register_void,
  "abort": _abort,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = asm["__wasm_call_ctors"]

/** @type {function(...*):?} */
var ___getTypeName = Module["___getTypeName"] = asm["__getTypeName"]

/** @type {function(...*):?} */
var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = asm["__embind_register_native_and_builtin_types"]

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = asm["__errno_location"]

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = asm["malloc"]

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = asm["stackSave"]

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = asm["stackRestore"]

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"]

/** @type {function(...*):?} */
var _free = Module["_free"] = asm["free"]





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





/* global Module */

"use strict";

console.log(
	"running%c Open303 (Wasm)",
	"font-weight: bold; color: #bada55"
);



//NOTE: This is the main thing that post.js adds to the setup, a Module export definition which is required for the WASM design pattern
export default Module;

