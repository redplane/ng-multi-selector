const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NodeExternals = require('webpack-node-externals');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

// Resolve source code directory.
const pathSourceCode = path.resolve(__dirname, 'src');
const pathDirective = path.resolve(__dirname, 'src/app/directives');
const pathNgMultiSelector = path.resolve(pathDirective, 'ng-multi-selector');
const pathDistribution = path.resolve(pathSourceCode, 'plugin-dist');

/*
* Module export.
* */
module.exports = {
    context: pathSourceCode,
    entry: {
        'index': path.resolve(pathNgMultiSelector, 'index.js')
    },
    externals: [NodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                })
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules\\/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            [
                path.resolve(pathDistribution)
            ],
            {
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
            }),
        new ngAnnotatePlugin({add: true}),
        new MergeIntoSingleFilePlugin({
            files: {
                'ng-multi-selector.min.js': [
                    path.resolve(pathNgMultiSelector, 'ng-multi-selector.js')
                ]
            },
            transform: {
                'ng-multi-selector.min.js': function (code) {
                    return require("uglify-js").minify(code).code
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin('ng-multi-selector.min.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'index',
            minChunks: Infinity
        }),
        new CopyWebpackPlugin([
            {
                from: pathNgMultiSelector,
                to: pathDistribution
            },
            {
                from: path.resolve(__dirname, 'readme.md'),
                to: pathDistribution
            }
        ], {
            ignore: ['index.js']
        })
    ],
    output: {
        path: pathDistribution,
        filename: '[name].js'
    }
};