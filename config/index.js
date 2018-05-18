'use strict'

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        // '*': {
        //     target: proxyTarget,
        //     logLevel: 'debug',
        //     changeOrigin: true,
        //     onProxyRes(proxyRes, req, res) {
        //         var _location = proxyRes.headers['location']
        //         if (_location) {
        //             console.log('_location:' + _location)
        //             proxyRes.headers['location'] = _location.replace(
        //                 proxyTarget + '/',
        //                 '/'
        //             )
        //         }
        //     },
        //     filter: function(pathname, req) {
        //         const pathRegexp = /^\/.*\.(js|json)$|^\/images\/.*$|^\/src\/.*$|^\/__webpack_hmr$|^\/reload\/reload.js$/
        //         var ret = pathRegexp.test(pathname)
        //         if (ret) {
        //             console.log('   local get: ' + pathname)
        //         }
        //         return !ret
        //     }
        // }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 3000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../public/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../public'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
