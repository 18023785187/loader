const {
    resolve
} = require('path')
// plugins
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
    },
    resolveLoader: {
        modules: ['node_modules', './loaders']
    },
    module: {
        rules: [{
            test: /\.h$/,
            use: [{
                loader: 'xmlToObject-loader'
            }]
        }]
    },
    plugins: [
        new WebpackBar(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public/index.html'),
            collapseWhitespace: true,
            removeComments: true,
            inject: 'body'
        })
    ],
    devServer: {
        compress: true,
        port: 8000,
        open: true,
        hot: true,
    },
    optimization: {
        minimize: false
    },
}