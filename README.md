# sema-engine

![Node.js CI](https://github.com/frantic0/sema-engine/workflows/Node.js%20CI/badge.svg)
![version](https://img.shields.io/badge/version-0.1.4-red)
[![npm](https://img.shields.io/npm/v/sema-engine.svg)](https://www.npmjs.com/package/sema-engine)
[![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)](https://github.com/emersion/stability-badges#experimental)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-yellow.svg)](https://github.com/frantic0/sema-engine/blob/main/CONTRIBUTING.md)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fsema.codes)](https://frantic0.github.io/sema-engine/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/frantic0/sema-engine/blob/main/LICENSE)

**sema-engine** is a JavaScript audio signal engine for live coding, interactive music, machine listening, and browser-based DSP applications.

It provides a small API around a high-performance Web Audio `AudioWorklet` processor, a live-code compiler pipeline, sample loading, analyser support, shared buffers, and learner integration. It was extracted from [Sema](https://github.com/mimic-sussex/sema), a live coding playground for music and machine learning, and refactored as a reusable engine for the [MIMIC project](https://mimicproject.com/about).

> Status: experimental. APIs may change.

## Features

- Web Audio API engine built around an `AudioWorklet` processor.
- Maximilian-powered DSP objects compiled for browser use.
- Live-code compilation using Nearley grammars.
- ES module and UMD builds.
- Sample loading into the audio processor.
- Analyser utilities for visualisation.
- Shared buffer support for communication between the audio engine, UI, and learners.
- Integration hooks for machine learning workflows through `Learner`.

## How it works

`sema-engine` brings together three main parts:

1. **Maximilian DSP**  
   C++ DSP objects are used as the audio foundation.

2. **Web Audio API AudioWorklet**  
   The engine loads a custom `maxi-processor.js` worklet that runs audio code off the main JavaScript thread.

3. **Nearley compiler**  
   Language grammars are compiled from EBNF-style specifications and used to turn live-code text into DSP code that can be evaluated by the engine.

## Installation

```sh
npm install sema-engine
```

The package exposes both ES module and UMD/CommonJS-compatible builds.

## Quick start

```js
import {
  Engine,
  compile,
  Learner,
  getBlock
} from "sema-engine";

const engine = new Engine();

// This must point to the location where maxi-processor.js is served.
const assetBaseUrl = window.location.origin;

async function startEngine() {
  const ok = await engine.init(assetBaseUrl);

  if (!ok) {
    throw new Error("Failed to initialise sema-engine.");
  }

  engine.play();
}
```

### Important: serve `maxi-processor.js`

`engine.init(assetBaseUrl)` loads the worklet processor from:

```txt
${assetBaseUrl}/maxi-processor.js
```

Make sure `maxi-processor.js` is available at that URL.

For example, if your app is served from:

```txt
https://example.com/my-app
```

and you pass:

```js
await engine.init("https://example.com/my-app");
```

then the processor must be available at:

```txt
https://example.com/my-app/maxi-processor.js
```

When using a bundler, copy the file from:

```txt
node_modules/sema-engine/maxi-processor.js
```

to your public/static output directory.

## Browser usage with native ES modules

You can also use the built module directly in a browser page:

```html
<script type="module">
  import {
    Engine,
    compile,
    Learner,
    getBlock
  } from "./index.mjs";

  const engine = new Engine();

  const assetBaseUrl = new URL(".", window.location.href)
    .href
    .replace(/\/$/, "");

  document.getElementById("playButton").addEventListener("click", async () => {
    const ok = await engine.init(assetBaseUrl);

    if (!ok) {
      console.error("Failed to initialise sema-engine.");
      return;
    }

    engine.play();
  });
</script>
```

## Loading samples

Samples are loaded relative to the same base URL passed to `engine.init()`.

```js
document.getElementById("loadSamplesButton").addEventListener("click", () => {
  if (!engine) {
    throw new Error("Engine not initialised. Start the engine first.");
  }

  try {
    engine.loadSample("909.wav", "/audio/909.wav");
    engine.loadSample("909b.wav", "/audio/909b.wav");
    engine.loadSample("909closed.wav", "/audio/909closed.wav");
    engine.loadSample("909open.wav", "/audio/909open.wav");
  } catch (error) {
    console.error("Failed to load samples:", error);
  }
});
```

If `assetBaseUrl` is:

```txt
https://example.com/my-app
```

then:

```js
engine.loadSample("909.wav", "/audio/909.wav");
```

loads:

```txt
https://example.com/my-app/audio/909.wav
```

## Compiling and evaluating live code

Use `compile(grammarSource, liveCodeSource)` to compile live-code text against a grammar specification. If compilation succeeds, pass the generated DSP code to the engine.

```js
function evalLiveCode(grammarSource, liveCodeSource) {
  if (!engine) {
    throw new Error("Engine not initialised. Start the engine first.");
  }

  try {
    const { errors, dspCode } = compile(grammarSource, liveCodeSource);

    if (errors && errors.length > 0) {
      console.error("Compilation errors:", errors);
      return;
    }

    if (dspCode) {
      engine.eval(dspCode);
    }
  } catch (error) {
    console.error("Failed to compile and evaluate live code:", error);
  }
}
```

## Using a Learner

`Learner` can be connected to the engine for machine learning workflows and shared-buffer communication.

```js
let learner;

document.getElementById("learnerButton").addEventListener("click", async () => {
  if (!engine) {
    throw new Error("Engine not initialised. Start the engine first.");
  }

  try {
    learner = new Learner();
    await engine.addLearner("l1", learner);
  } catch (error) {
    console.error("Error creating or initialising learner:", error);
  }
});
```

## Evaluating JavaScript editor blocks

`getBlock` is a utility for extracting the current code block from an editor. In Sema-style CodeMirror editors, blocks are delimited by three or more underscores:

```txt
___
```

Example:

```js
function evalJsBlock(editorJS) {
  if (!learner) {
    throw new Error("Learner not initialised. Create a learner first.");
  }

  if (!editorJS) {
    throw new Error("No JavaScript editor instance provided.");
  }

  const code = getBlock(editorJS);
  learner.eval(code);
}
```

## API overview

| Export | Description |
| --- | --- |
| `Engine` | Main audio engine. Initialises the AudioContext, loads the worklet processor, evaluates DSP code, loads samples, manages analysers, and communicates with learners. |
| `compile` | High-level compiler function for turning grammar and live-code input into DSP code. |
| `compileGrammar` | Compiles a grammar specification. |
| `parse` | Parses source text with a compiled grammar. |
| `ASTreeToDSPcode` | Converts parsed AST structures into DSP code. |
| `ASTreeToJavascript` | JavaScript IR utilities. |
| `Learner` | Learner integration class for ML-related workflows. |
| `getBlock` | Extracts the active code block from an editor. |
| `Logger` | Logging utility used by the engine and processor. |

## Browser requirements

`sema-engine` relies on Web Audio API `AudioWorklet`, so it should be served from a secure context:

- `https://...`
- or `http://localhost` during development

Most modern Chromium-based browsers support AudioWorklets. If you experience issues, check that:

- the page is served over HTTPS or localhost,
- `maxi-processor.js` is reachable,
- the browser allows audio playback after a user gesture,
- the browser console does not show CORS or worklet loading errors.

## Development

Clone the repository and initialise submodules:

```sh
git clone https://github.com/frantic0/sema-engine.git
cd sema-engine
git submodule update --init --recursive
```

Install dependencies:

```sh
npm install
```

Run the development build:

```sh
npm run dev
```

Build the library:

```sh
npm run build
```

Run tests:

```sh
npm test
```

## Building the AudioWorklet processor

If you are contributing to the custom Web Audio API processor or the Maximilian/Open303 build pipeline, you will also need:

- [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html)
- [Cheerp compiler](https://leaningtech.com/cheerp/)

Then run:

```sh
make
```

This builds the Maximilian/WebAssembly/Pure JS processor and then builds the `sema-engine` library outputs.

To update submodules:

```sh
git submodule update --remote --merge
```

## Tests and examples

`sema-engine` uses Mocha for unit and integration tests.

The development build includes a local example for experimenting with:

- starting and stopping the engine,
- loading samples,
- evaluating live code,
- evaluating JavaScript blocks,
- creating learners,
- creating analysers,
- testing grammar changes.

Run:

```sh
npm run dev
```

Then open the local development page served by the dev task.

A published example is also available here:

[https://frantic0.github.io/sema-engine/](https://frantic0.github.io/sema-engine/)

## Documentation

More documentation is available in the project wiki:

[https://github.com/frantic0/sema-engine/wiki](https://github.com/frantic0/sema-engine/wiki)

For a complete application built around this engine, see:

[https://github.com/mimic-sussex/sema](https://github.com/mimic-sussex/sema)

## Contributing

Pull requests are welcome.

Please:

1. Fork the repository.
2. Create a branch from `develop`.
3. Make your changes.
4. Run tests and build locally.
5. Submit a pull request.

See [CONTRIBUTING.md](https://github.com/frantic0/sema-engine/blob/main/CONTRIBUTING.md) for more details.

## Related publications

Bernardo, F., Kiefer, C., Magnusson, T. (2020).  
**A Signal Engine for a Live Coding Language Ecosystem.**  
*Journal of the Audio Engineering Society*, Vol. 68, No. 10.  
DOI: [https://doi.org/10.17743/jaes.2020.0016](https://doi.org/10.17743/jaes.2020.0016)

## Funding

This project has received funding from two UKRI/AHRC research grants:

- [MIMIC: Musically Intelligent Machines Interacting Creatively, Ref: AH/R002657/1](https://gtr.ukri.org/projects?ref=AH%2FR002657%2F1)
- [Innovating Sema, Ref: AH/V005154/1](https://gtr.ukri.org/projects?ref=AH/V005154%2F1)

## License

MIT. See [LICENSE](https://github.com/frantic0/sema-engine/blob/main/LICENSE).
