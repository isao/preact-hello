import resolve from 'rollup-plugin-node-resolve'
import {name} from './package.json'

export default {
    input: './dist/babel/app.js',
    output: {
        file: `dist/${name}.js`,
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        resolve(),
    ],
}
