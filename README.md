# sema-engine

![Node.js CI](https://github.com/frantic0/sema-engine/workflows/Node.js%20CI/badge.svg)



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