import typescript from 'rollup-plugin-typescript'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: './src/app.tsx',
    output: {
        format: 'esm',
        file: 'dist/bundle.js',
    },
    experimentalCodeSplitting: true,
    manualChunks: {
        vendor: ['preact'],
    },
    plugins: [
        typescript(),
        resolve(),
    ],
}

// broken, see https://github.com/rollup/rollup-plugin-node-resolve/issues/164
