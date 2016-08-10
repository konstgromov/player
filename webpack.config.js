'use strict';

var NODE_ENV = process.env.NODE_ENV =
    process.argv.indexOf('--production') !== -1
        ? 'production' : 'development';

var path = require('path'),
    webpack = require('webpack');

var config = {
    entry: 'entry',
    output: {
        path: path.resolve('./build/'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js'],
        root: path.resolve('./src/')
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=react&presets[]=es2015'
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.css$/,
                loader: 'style!css?' + (NODE_ENV === 'production' ? 'minimize' : '-minimize')
            }, {
                test: /\.less$/,
                loader: 'style!css?' + (NODE_ENV === 'production' ? 'minimize' : '-minimize') + '!less'
            }, {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        })
    ]
};

if (NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
} else {
    config.devtool = 'cheap-module-inline-source-map';
}

module.exports = config;