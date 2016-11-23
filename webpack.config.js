'use strict';

const NODE_ENV = process.env.NODE_ENV =
	process.env.NODE_ENV === 'production' || process.argv.includes('--production')
		? 'production' : 'development';

const path = require('path');
const webpack = require('webpack');

const config = {
	context: __dirname,
	entry: './src/entry',
	output: {
		path: path.join(__dirname, './build/'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js']
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
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'es2016', 'es2017']
				}
			}, {
				test: /\.json$/,
				loader: 'json'
			}, {
				test: /\.html$/,
				loader: 'html'
			}, {
				test: /\.css$/,
				loader: combineLoaders(
					{
						loader: 'style'
					}, {
						loader: 'css',
						query: {
							minimize: NODE_ENV === 'production'
						}
					}
				)
			}, {
				test: /\.less$/,
				loader: combineLoaders(
					{
						loader: 'style'
					}, {
						loader: 'css',
						query: {
							minimize: NODE_ENV === 'production'
						}
					}, {
						loader: 'less'
					}
				)
			}, {
				test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
				loader: 'file',
				query: {
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
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	);
} else {
	config.devtool = 'cheap-module-inline-source-map';
}

function combineLoaders(...loaders) {
	return loaders.map(({ loader, query }) => query ? `${loader}?${JSON.stringify(query)}` : loader).join('!');
}

module.exports = config;