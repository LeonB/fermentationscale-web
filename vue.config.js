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

        // asset: '[path].gz[query]',
        // algorithm: 'gzip',
        // test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        // threshold: 10240,
        // minRatio: 0.8
      })
    ]
  }
}
