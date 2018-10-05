# Hello World (Preact, TypeScript, Babel, and Rollup)

This is an example of compiling a Preact component and including it in an HTML page. Build with:

    npm run build

## TypeScript Configuration

TypeScript configuration is in `tsconfig.json`, reference info [here](http://www.typescriptlang.org/docs/handbook/compiler-options.html). Usage:

- `"target": "esnext"` says do not transpile the Javascript, since we'll use Babel for this.
- `"module": "es2015",` says our modules are ES2015 (not CommonJS, SystemJS, etc).
- `"jsx": "react",` says we have markup inlined in the code, and it should be transformed for the browser.
- `"jsxFactory": "h",` specifies the function name to use for the JSX transformations. Must set to "h" for Preact.
- `"moduleResolution": "node"` says do not use legacy "classic" module resolution. Required for our use of ES2015 modules with `npm` installed dependencies.

## Babel Configuration

Babel transforms Javascript specification X to Javascript specification Y. TypeScript already does this, but it does supply polyfills for missing features. Babel has a rich plugin ecosystem, often packaged as "presets".

Preset `@babel/env` allows us to transform Javascript to support particular *browsers*, instead of a particular language specification. So if browser B supports ES5, and some of ES2015, for example, supported parts will be left untouched. Unsupported syntax will be transpiled. Missing features will be polyfilled.

The targeted browser list is specified by the `browserslist` array. The browser data, and usage information are [here](https://github.com/browserslist/browserslist).

`@babel/env` reference is [here](https://babeljs.io/docs/en/babel-preset-env), see the `babel` and `browserslist` configs in `package.json`. Usage:
- `"loose": true` results in less verbose, perhaps more performant, code transformations.
- `"modules": false"` is important to preserve the ES2015 module syntax, which will be post-processed by Rollup.
- `"useBuiltIns": "entry"` needed to make sure polyfills are processed correctly. `"usage"` appears to break polyfill processing by Rollup.

## Rollup Configuration

Rollup processes ES2015 module directives, and bundles them. Configuration reference [here](https://rollupjs.org/guide/en).
