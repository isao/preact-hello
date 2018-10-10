import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import {name} from './package.json'

export default {
    input: './dist/babel/app.js',
    output: {
        file: `dist/${name}.js`,
        format: 'esm',
        sourceMap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
    ],
}
