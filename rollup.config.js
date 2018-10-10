import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel';
import {name, babel as babelrc} from './package.json'

export default {
    input: './src/app.tsx',
    output: {
        file: `dist/${name}.js`,
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        babel(babelrc),
    ],
}
