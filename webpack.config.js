'use strict';
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './lib/widget.component.mjs',
	output: {
		filename: 'widget.min.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()]
	}
};
