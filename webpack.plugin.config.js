const path = require('path');
// const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NodeExternals = require('webpack-node-externals');
// const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackRules = require('./webpack/rule-webpack.setting'); // Import webpack rules.

//#region Resolve paths

// Import webpack setting.
const oPathOption = require('./webpack/path.option').paths;
let oPaths = {
    src: oPathOption.getSource(__dirname),
    app: oPathOption.getApplication(__dirname),
    dist: oPathOption.getDist(__dirname),
};

oPaths['plugin'] = path.resolve(oPaths.app, 'plugins');
oPaths['ngMultiSelector'] = path.resolve(oPaths.plugin, 'ng-multi-selector');

//#endregion

//#region Plugins

let plugins = [];

//#region Clean webpack plugin

let cleanedFolders = [oPaths.dist];
let cleanWebpackPlugin = new CleanWebpackPlugin(cleanedFolders, {
        // Absolute path to your webpack root folder (paths appended to this)
        // Default: root of your package
        root: __dirname,

        // Write logs to console.
        verbose: true,

        // Use boolean "true" to test/emulate delete. (will not remove files).
        // Default: false - remove files
        dry: false,

        // If true, remove files on recompile.
        // Default: false
        watch: false,

        // Instead of removing whole path recursively,
        // remove all path's content with exclusion of provided immediate children.
        // Good for not removing shared files from build directories.
        exclude: null,

        // allow the plugin to clean folders outside of the webpack root.
        // Default: false - don't allow clean folder outside of the webpack root
        allowExternal: false
    });

plugins.push(cleanWebpackPlugin);

//#endregion

//#region Annotate plugin
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
plugins.push(new ngAnnotatePlugin({add: true}));
//#endregion

//#region Copy webpack plugin

// List of items to be copied.
let copiedItems = ['index.js', 'ng-multi-selector.css', 'ng-multi-selector.html', 'package.json', 'README.md'];
let absolutePathCopiedItems = [];

for (let copiedItemIndex = 0; copiedItemIndex < copiedItems.length; copiedItemIndex++){
    absolutePathCopiedItems.push({
        from: path.resolve(oPaths.ngMultiSelector, copiedItems[copiedItemIndex]),
        to: oPaths.dist
    });
}
let webpackCopyPluginOption = new CopyWebpackPlugin(absolutePathCopiedItems);
plugins.push(webpackCopyPluginOption);

//#endregion

//#endregion

/*
* Module export.
* */
module.exports = {
    context: oPaths.src,
    entry: {
        'index': path.resolve(oPaths.ngMultiSelector, 'index.js')
    },
    externals: [NodeExternals()],
    module: {
        rules: webpackRules.get()
    },
    plugins: plugins,
    output: {
        path: oPaths.dist,
        filename: '[name].js'
    }
};

// new MergeIntoSingleFilePlugin({
//     files: {
//         'ng-multi-selector.min.js': [
//             path.resolve(pathNgMultiSelector, 'ng-multi-selector.js')
//         ]
//     },
//     transform: {
//         'ng-multi-selector.min.js': function (code) {
//             return require("uglify-js").minify(code).code
//         }
//     }
// }),
//     new webpack.optimize.UglifyJsPlugin({
//         compress: {
//             warnings: false
//         },
//         output: {
//             comments: false
//         }
//     }),
//     new ExtractTextPlugin('ng-multi-selector.min.css'),
//     new webpack.optimize.CommonsChunkPlugin({
//         name: 'index',
//         minChunks: Infinity
//     }),
//     new CopyWebpackPlugin([
//         {
//             from: pathNgMultiSelector,
//             to: pathDistribution
//         },
//         {
//             from: path.resolve(__dirname, 'readme.md'),
//             to: pathDistribution
//         }
//     ], {
//         ignore: ['index.js']
//     })