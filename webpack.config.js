const path = require('path');

// Get webpack rule configuration.
let webpackRuleOption = require('./webpack/rule-webpack.setting');

// Get webpack plugin configuration.
let webpackPluginOption = require('./webpack/plugins');

// Import webpack settings.
const settings = require('./webpack/paths');

// Get environment variable.
let env = process.env.NODE_ENV;

// True if built is set to production mode.
// False if built is set to development mode.
let bProductionMode = env && 'production' === env.trim().toLowerCase();

// Build path options.
const paths = {
    root: __dirname,
    source: settings.paths.getSource(__dirname),
    app: settings.paths.getApplication(__dirname),
    dist: settings.paths.getDist(__dirname)
};

/*
* Module export.
* */
module.exports = {
    context: settings.paths.getSource(__dirname),
    entry: {
        'jQueryVendors': ['jquery', 'bootstrap', 'admin-lte', 'bluebird'],
        'angularVendors': ['angular', '@uirouter/angularjs', 'angular-block-ui', 'angular-toastr',
            'angular-translate', 'angular-translate-loader-static-files'],
        'app': path.resolve(paths.app, 'app.js')
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                default: {
                    enforce: true,
                    priority: 1
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 2,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'async'
                }
            }
        }
    },
    module: {
        rules: webpackRuleOption.get()
    },
    plugins: webpackPluginOption.get(bProductionMode, paths),
    output: {
        path: path.resolve(paths.dist),
        filename: '[name].[hash].js'
    }
};


// Return module configurations.
return module.exports;