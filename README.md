# sema-engine

![Node.js CI](https://github.com/frantic0/sema-engine/workflows/Node.js%20CI/badge.svg)


*sema-engine* is a Javascript library that provides a high-performance audio engine for modern Web applications, with an easy-to-use API. It is based on two main components:

* the Web Audio API Audio Worklets

* the Maximilian DSP C++ library – as a git submodule

The *sema-engine* library exposes ES and UMD modules (works on the browser, with modern native JS modules and older JS module formats—amd, cjs for nodejs applications—think electron!).

The *sema-engine* currently uses Github Actions workflows for build automation and continuous integration. The development builds propagate source maps (.map), so you can have modern debugging features—e.g. using breakpoints in the context of the client application. Production builds ship all formats optimised and minified.



## Usage

You can use modules of the *sema-engine* library straight out-of-the-box in a simple HTML file using inline `<script>` tags.

```
 <script type="module">

    import { Engine } from "./sema-engine.mjs";

    let engine,
        analyser = 0;


    let patch1 = {
          setup: `() => {
            () => {
              let q = this.newq();
              q.b0u2 = new Maximilian.maxiOsc();
              q.b0u2.phaseReset(0);;;;
              return q;
            }
          }`,
          loop: `(q, inputs, mem) => {
            this.dacOutAll(q.b0u2.sinewave(440));
          }`
    };

    const $ = (elemId, callback) =>
      document.getElementById(elemId).addEventListener("click", callback);

    $("playButton", () => {
      let audioWorkletURL = document.location.origin + "/maxi-processor.js";
      engine = new Engine();
      engine.init(audioWorkletURL);
      engine.play();
    });
    $("stopButton", () => engine.stop());
    $("plusButton", () => engine.more());
    $("minusButton", () => engine.less());
    $("loadSamplesButton", () => {
      engine.loadSample("crebit2.ogg", "./audio/crebit2.ogg");
      engine.loadSample("kick1.wav", "./audio/kick1.wav");
      engine.loadSample("snare1.wav", "./audio/snare1.wav");
    });
    $("evalButton", () => {
      let editorValue = editor.getValue();
      console.log(editorValue);
      engine.eval(patch2);
    });

    $("createAnalyserButton", () => {
      engine.createAnalyser(analyser++, data => console.log(data) );
    });
```

Note that the main library tag has `type = module` and that you need to add the all the dependencies of its package.






Additionally, if you are developing a Web application in modern environment, using a bundler such as Webpack or Rollup, can easily *sema-engine* as a dependency as it is published in Node Package Manager (NPM) registry.

```
npm install sema-engine
```


## Build

If you are cloning this library first time, initialise the submodules
```
git submodule update --init --recursive
```

Install dependencies
```
npm i
```

Build the Maximilian native JS and WebAssembly modules
```
make
```

Build the sema-engine library into UMD and ES modules
```
npm run build
```

Test the sema-engine library in a local example
```
npm run dev
```

To update submodule if there are any upgrades
```
git submodule update --remote --merge
```


## Tests and Examples

The *sema-engine* library uses AVA, a modern and minimal test environment with good features over Mocha (e.g. parallel exec) and fills other criteria (community, support, used in many modern JS libraries, etc.).

## Contributing


# Related Publications


Bernardo, F., Kiefer, C., Magnusson, T. (forthcoming). A Signal Engine for a Live Code Language Ecosystem. Journal of Audio Engineering Society, Vol. 68, No. 1, October