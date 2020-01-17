const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  // devServer: {
  //   open: true
  // },
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV == 'development') {
      // mutate for development...
    } else {
      // mutate config for production...
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].br[query]',
          algorithm: 'brotliCompress',
          compressionOptions: { level: 11 },
          cache: true,
        })
      )
    }
  }
}
