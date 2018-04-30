const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');


// Import library.
exports = module.exports = {
    /*
    * Get configuration options.
    * */
    get: function (bProductionMode, paths) {

        let webpackCleanPluginOption = require('./clean-webpack').get(paths);
        let webpackCopyPluginOption = require('./copy-webpack').get(paths);

        // List of plugins.
        let plugins = [];

        //#region Plugins

        // Clean obsolete chunks plugin.
        plugins.push(new CleanObsoleteChunks({
            // Write logs to console.
            // Default: true
            verbose: true,

            // Clean obsolete chunks of webpack child compilations.
            // Default: false
            deep: true
        }));

        // Clean webpack plugin.
        plugins.push(new CleanWebpackPlugin(webpackCleanPluginOption.paths, webpackCleanPluginOption.options));

        /*
        * Enlist plugins which should be run on production mode.
        * */
        if (bProductionMode) {
            //Automatically add annotation to angularjs modules.
            // Bundling can affect module initialization.
            plugins.push(new ngAnnotatePlugin({add: true}));
        }

        /*
        * Not in production mode
        * */
        if (!bProductionMode) {
            // Require original index file.
            let browserSyncPlugin = new BrowserSyncPlugin({
                // browse to http://localhost:3000/ during development,
                // ./public directory is being served
                host: 'localhost',
                port: 8000,
                files: [
                    path.resolve(paths.source, 'index.html')
                ],
                server: {
                    baseDir: [
                        paths.dist
                    ]
                }
            });

            // Push plugins into list.
            plugins.push(browserSyncPlugin);
        }

        /*
        * Enlist default plugins.
        * */
        // Copy files.
        plugins.push(new CopyWebpackPlugin(webpackCopyPluginOption));

        // Using bluebird promise instead of native promise.
        plugins.push(new webpack.ProvidePlugin({
            Promise: 'bluebird'
        }));

        //Automatically inject chunks into html files.
        plugins.push(new HtmlWebpackPlugin({
            template: path.resolve(paths.app, 'index.html'),
            chunksSortMode: 'dependency'
        }));

        //#endregion

        return plugins;
    }
};