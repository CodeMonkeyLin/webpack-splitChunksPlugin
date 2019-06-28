const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        index: "./src/index.js",
        main: "./src/main.js",
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
        compress: true,
        hot: true,
        open: true,
        port: 8090
    }
}