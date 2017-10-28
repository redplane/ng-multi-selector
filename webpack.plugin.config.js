var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// Resolve source code directory.
var pathSourceCode = path.resolve(__dirname, 'src');
var pathDirective = path.resolve(__dirname, 'src/app/directives');
var pathNgMultiSelector = path.resolve(pathDirective, 'ng-multi-selector');
var pathDistribution = path.resolve(pathSourceCode, 'plugin-dist');

/*
* Module export.
* */
module.exports = {
    context: pathSourceCode,
    entry: {
        'ng-multi-selector': path.resolve(pathNgMultiSelector, 'ng-multi-selector.directive.js')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /(node_modules)/
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
                test: /\.html$/, // Only .html files
                loader: 'html-loader' // Run html loader
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                // I want to uglify with mangling only app files, not thirdparty libs
                test: /.*\/app\/.*\.js$/,
                exclude: [/node_modules/],
                loader: "uglify"
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
        new CopyWebpackPlugin([
            {
                from: {
                    glob: pathNgMultiSelector + '/**/*.css'
                },
                to: path.resolve(pathDistribution),
                flatten: true
            }
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'ng-multi-selector',
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'angular': 'angular',
            'Rx': 'rx'
        })
    ],
    output: {
        path: pathDistribution,
        filename: '[name].min.js'
    }
};