# sema-engine

![Node.js CI](https://github.com/frantic0/sema-engine/workflows/Node.js%20CI/badge.svg)


*sema-engine* is a Javascript library that provides an audio engine for modern and high-performance Web applications. It is based on two main components:

* the Web Audio API Audio Worklets

* the Maximilian DSP C++ library

The *sema-engine* library exposes in different formats including UMD and



It is currently maintained and uses Github Actions workflows for continuous integration.


## Usage


You can also import it as a script from

```

```

Additionally, *sema-engine* is published in Node Package Manager (NPM) registry. You can easily add it as a dependency to you web application, using

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