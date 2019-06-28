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
            chunks: 'all', // 只对异步加载的模块进行拆分，可选值还有all | initial
            minSize: 30000, // 模块最少大于30KB才拆分
            maxSize: 0,  // 模块大小无上限，只要大于30KB都拆分
            minChunks: 1, // 模块最少引用一次才会被拆分
            maxAsyncRequests: 5, // 异步加载时同时发送的请求数量最大不能超过5,超过5的部分不拆分
            maxInitialRequests: 3, // 页面初始化时同时发送的请求数量最大不能超过3,超过3的部分不拆分
            automaticNameDelimiter: '~', // 默认的连接符
            name: true, // 拆分的chunk名,设为true表示根据模块名和CacheGroup的key来自动生成,使用上面连接符连接
            cacheGroups: { // 缓存组配置,上面配置读取完成后进行拆分,如果需要把多个模块拆分到一个文件,就需要缓存,所以命名为缓存组
                vendors: { // 自定义缓存组名
                    test: /[\\/]node_modules[\\/]/, // 检查node_modules目录,只要模块在该目录下就使用上面配置拆分到这个组
                    priority: -10 // 权重-10,决定了哪个组优先匹配,例如node_modules下有个模块要拆分,同时满足vendors和default组,此时就会分到vendors组,因为-10 > -20
                },
                default: { // 默认缓存组名
                    minChunks: 2, // 最少引用两次才会被拆分
                    priority: -20, // 权重-20
                    reuseExistingChunk: true // 如果主入口中引入了两个模块,其中一个正好也引用了后一个,就会直接复用,无需引用两次
                }
            }
        }
    },
    module: {
        noParse: /jquery/
    },
    // devtool: 'cheap-module-eval-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.BannerPlugin('啦啦啦德玛西亚!')
    ],
    mode: 'production'
}