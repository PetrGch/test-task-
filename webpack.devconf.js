'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function pathResolve(yourPath) {
    return path.resolve(__dirname, yourPath);
}

module.exports = {
    context:    pathResolve('frontend'),

    entry: {
        index:  './index'
    },

    output: {
        path:           pathResolve('public'),
        publicPath:     '/',
        filename:       '[name].js',
        chunkFilename:  '[id].js',
        library:        '[name]'
    },

    devtool:            "cheap-source-map",

    resolve: {
        modules:        ['node_modules'],
        extensions:     ['.js', '.css']
    },

    resolveLoader: {
        modules:            ['node_modules'],
        moduleExtensions:   ['-loader'],
        extensions:         ['.js']
    },

    module: {
        loaders: [
            {
                test:           /\.js$/,
                exclude:        /\/node_modules\//,
                loader:         'babel',
                query: {
                    presets:    ['es2015','react'],
                    plugins:    ['transform-runtime']
                }
            },
            {
                test:       /\.css$/,
                loader:     ExtractTextPlugin.extract({ fallback: 'style', use: 'css?importLoaders=1!postcss-loader' })
            },
            {
                test:       /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader:     'file?name=[path][name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            ReactDOM:   'react-dom',
            React:      'react',
            PropTypes:  'react/lib/ReactPropTypes',
            $:          "jquery",
            jQuery:     "jquery",
            "window.jQuery": "jquery"
        })
    ],

    devServer: {
        host:           'localhost',
        port:           3000,
        contentBase:    pathResolve('public'),
        publicPath:     '/',
        hot:            true,
        inline:         true,
        watchOptions: {
            aggregateTimeout:   100,
            ignored:            /node_modules/,
        }
    },

    watch: true,

    watchOptions: {
        aggregateTimeout:   100,
        ignored:            /node_modules/,
    },
};