# alias-webpack-plugin
Webpack alias batch relative paths configuration plugin

## Usage
```bash
yarn add -D alias-webpack-plugin
```

## Example

create a `alias.json` file or create a custom `.json` file
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