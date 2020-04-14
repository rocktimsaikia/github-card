const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    entry: './src/widget.component.mjs',
    output: {
        filename: 'widget.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    plugins: [new MinifyPlugin()]
};