// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

const IS_RRODUCITON = process.node_env === 'production';

const INPUT =  './src/index.js'
const OUTPUT_LOCATION = './scripts';
const OUTPUT_NAME = 'bundle.js'

export default (async () => ({
  input: INPUT,
  plugins: [
    resolve(),
    commonjs(),
    IS_RRODUCITON && getBabelOutputPlugin({
      presets: ['@babel/preset-env', 'minify']
    }),
  ],
  output: {
    file: `${OUTPUT_LOCATION}/${OUTPUT_NAME}`,
    // format: 'cjs'
    format: 'esm'
  }
}))();
