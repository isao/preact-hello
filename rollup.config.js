import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import {name} from './package.json'

export default {
    input: './dist/es7/app.js',  // See also package.json scripts.rollup
    output: {
        file: `dist/${name}.js`,
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
    ],
}
