import typescript from 'rollup-plugin-typescript'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './src/app.tsx',
  output: {
      format: 'esm',
      file: 'dist/bundle.js', // Should match package.json module field.
  },
  plugins: [
    typescript(),
    resolve(),
  ],
  //external: ['preact'],
}
