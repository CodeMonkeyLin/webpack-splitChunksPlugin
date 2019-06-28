const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: "./src/index.js",
        main: "./src/main.js",
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash:8].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    // module: {
    //     noParse: /jquery/
    // },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.BannerPlugin('智鹤牛逼!')
    ],
    mode: 'production'
}