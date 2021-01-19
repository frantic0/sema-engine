# sema-engine

![Node.js CI](https://github.com/frantic0/sema-engine/workflows/Node.js%20CI/badge.svg)


*sema-engine* is a Javascript library that provides a high-performance audio engine for modern Web applications, with an easy-to-use API. It is based on two main components:

* the Web Audio API Audio Worklets

* the Maximilian DSP C++ library – as a git submodule

The *sema-engine* library exposes ES and UMD modules (works on the browser, with modern native JS modules and older JS module formats—amd, cjs for nodejs applications—think electron!).

The *sema-engine* is currently maintained and uses Github Actions workflows for build automation and continuous integration, for final packaging for production (all formats optimised and minified) and for development (propagates source maps (.map), so we can have modern debugging features, e.g. using breakpoints in the context of the client application.



## Usage

You can use the *sema-engine* library straight out-of-the-box in a simple HTML file using inline `<script>` tags of `type = module`.

```

```
Note You also neetd to add the dependencies of its package as a set of script tags for your


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


## Contributing


# Related Publications


Bernardo, F., Kiefer, C., Magnusson, T. (forthcoming). A Signal Engine for a Live Code Language Ecosystem. Journal of Audio Engineering Society, Vol. 68, No. 1, October