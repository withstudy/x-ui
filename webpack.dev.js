const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        index: './example/src/index.js'
    },
    devtool: 'source-map',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    devServer: {
        static: [
            path.resolve(__dirname, 'example/public'),
            path.resolve(__dirname, 'dist')
        ],
        port: 8080,
        host: 'localhost',
        hot: true,
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'example/public/index.html'),
            filename: 'index.html',
            chunks: ['index']
        })
    ]
}