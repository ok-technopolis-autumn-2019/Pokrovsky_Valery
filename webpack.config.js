var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './js/todosMain.js',
    output: {
        path: __dirname+"/dist",
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })]
};