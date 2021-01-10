import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import eslint from '@rollup/plugin-eslint';
import wasm from '@rollup/plugin-wasm';


export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'umd', name: 'sema-engine' },
    ],
    plugins: [
      resolve(), // so Rollup can find `nearley`
      commonjs(), // so Rollup can convert `nearley` to an ES module
      terser(),
      wasm()
      // wasm({
      // 	sync: [
      // 		"src/engine/maximilian.wasmmodule.js",
      // 		"src/engine/open303.wasmmodule.js",
      // 	],
      // }),
      // eslint({
      // 	/* your options */
      // }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    external: ['nearley'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];

