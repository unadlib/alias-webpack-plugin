# alias-webpack-plugin
Webpack alias batch relative paths configuration plugin

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