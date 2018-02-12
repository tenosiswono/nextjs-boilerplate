const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withSass = require('@zeit/next-sass')
const UglifyJs = require('uglifyjs-webpack-plugin')

module.exports = withSass({
  cssModules: true,
  webpack: (config, options) => {
    if (!options.dev) {
      config.plugins.push(new UglifyJs())
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          generateStatsFile: true,
          statsFilename: 'stats.json'
        })
      )
      if (options.isServer) {
        config.externals = ['react', 'react-dom', ...config.externals]
      }

      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
      })
    }

    if (typeof config.webpack === 'function') {
      return config.webpack(config, options)
    }
    return config
  }
})
