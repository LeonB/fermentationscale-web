const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        compressionOptions: { level: 11 },
      })
    ]
  }
}
