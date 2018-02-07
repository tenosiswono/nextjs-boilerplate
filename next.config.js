const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  webpack: (config, { dev }) => {
    if (!dev) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          generateStatsFile: true,
          statsFilename: 'stats.json'
        })
      )
    }
    return config
  }
}
