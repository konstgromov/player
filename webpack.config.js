'use strict';

if (process.env.NODE_ENV !== 'production') {
	process.env.NODE_ENV = 'development';
}

var NODE_ENV = process.env.NODE_ENV;

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var cssLoaders = ['style-loader', 'css-loader', {
	loader: 'postcss-loader',
	options: {
		plugins: function () {
			return [autoprefixer()];
		}
	}
}];

var config = {
	context: __dirname,
	entry: {
		app: ['babel-polyfill', 'entry']
	},
	output: {
		path: path.join(__dirname, './build/'),
		filename: '[name].js',
		chunkFilename: 'chunks/[name].js',
		publicPath: '/build/'
	},
	resolve: {
		modules: [
			path.join(__dirname, './src/'),
			'node_modules'
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [['es2015', { modules: false }], 'es2016', 'es2017', 'react'],
					plugins: ['syntax-dynamic-import', 'transform-object-rest-spread']
				}
			}, {
				test: /\.css$/,
				use: cssLoaders
			}, {
				test: /\.scss$/,
				use: cssLoaders.concat('sass-loader')
			}, {
				test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
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
		new webpack.optimize.ModuleConcatenationPlugin()
	);
} else {
	config.devtool = 'module-inline-source-map';
}

module.exports = config;