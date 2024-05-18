# CSS Module Typescript Loader

[![GitHub license](https://img.shields.io/npm/l/css-module-typescript-loader)](https://github.com/webbestmaster/css-module-typescript-loader/blob/master/license)
[![codecov](https://codecov.io/gh/webbestmaster/css-module-typescript-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/webbestmaster/css-module-typescript-loader)
[![npm version](https://img.shields.io/npm/v/css-module-typescript-loader.svg)](https://www.npmjs.com/package/css-module-typescript-loader)
[![Known Vulnerabilities](https://snyk.io/test/github/webbestmaster/css-module-typescript-loader/badge.svg)](https://snyk.io/test/github/webbestmaster/css-module-typescript-loader)
[![Dependency count](https://badgen.net/bundlephobia/dependency-count/css-module-typescript-loader)](https://libraries.io/npm/css-module-typescript-loader)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/css-module-typescript-loader)](https://bundlephobia.com/package/css-module-typescript-loader)
[![nodejs version](https://img.shields.io/node/v/css-module-typescript-loader)](https://nodejs.org/en/docs)
[![Github CI](https://github.com/webbestmaster/css-module-typescript-loader/actions/workflows/github-ci.yml/badge.svg)](https://github.com/webbestmaster/css-module-typescript-loader/actions/workflows/github-ci.yml)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/webbestmaster/css-module-typescript-loader/github-ci.yml)](https://github.com/webbestmaster/css-module-typescript-loader/actions/workflows/github-ci.yml)
[![Type definitions](https://img.shields.io/npm/types/css-module-typescript-loader)](https://www.typescriptlang.org)
[![Website](https://img.shields.io/website?url=https://github.com/webbestmaster/css-module-typescript-loader)](https://github.com/webbestmaster/css-module-typescript-loader)
[![CodeFactor](https://www.codefactor.io/repository/github/webbestmaster/css-module-typescript-loader/badge)](https://www.codefactor.io/repository/github/webbestmaster/css-module-typescript-loader)
[![Package Quality](https://packagequality.com/shield/css-module-typescript-loader.svg)](https://packagequality.com/#?package=css-module-typescript-loader)
[![GitHub stars](https://img.shields.io/github/stars/webbestmaster/css-module-typescript-loader?style=social)](https://github.com/webbestmaster/css-module-typescript-loader)

<!--
[![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/webbestmaster/css-module-typescript-loader)](https://libraries.io/npm/css-module-typescript-loader)
-->

[Webpack](https://webpack.js.org/) loader to create [TypeScript](https://www.typescriptlang.org/) declarations for [CSS Modules](https://github.com/css-modules/css-modules).

Emits TypeScript declaration files matching your CSS Modules in the same location as your source files, e.g. `src/style.css` will generate `src/style.css.d.ts`.

## Why?

There are currently a lot of [solutions to this problem](https://www.npmjs.com/search?q=css%20module%20typescript%20loader). However, this package differs in the following ways:

- Encourages generated TypeScript declarations to be checked into source control, which allows `webpack` and `tsc` commands to be run in parallel in CI.

- Ensures committed TypeScript declarations are in sync with the code that generated.

## Install

```bash
npm i -D css-module-typescript-loader
```

## Usage

Place `css-module-typescript-loader` directly after `css-loader` in your webpack config.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/u,
        use: [
          // Here can be `style-loader` or `mini-css-extract-plugin` loader before `css-module-typescript-loader`
          'css-module-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};
```

## License

See [license](license).

