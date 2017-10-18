# alias-webpack-plugin
Webpack alias batch relative paths configuration plugin

[![Travis](https://img.shields.io/travis/unadlib/alias-webpack-plugin.svg)](https://travis-ci.org/unadlib/alias-webpack-plugin)
[![Coverage Status](https://coveralls.io/repos/github/unadlib/alias-webpack-plugin/badge.svg?branch=master)](https://coveralls.io/github/unadlib/alias-webpack-plugin?branch=master)

## Usage
```bash
yarn add -D alias-webpack-plugin
```

## Example

create alias path list to a `alias.json` file or create a custom `.json` file from execution path
```javascript
import aliasWebpackPlugin from 'alias-webpack-plugin'

const webpackConfig = {
  resolve: {
    alias: {
      ...aliasWebpackPlugin(),
    },
  }
}
```