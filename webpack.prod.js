const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        button: './packages/button/index.js',
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'lib'),
        library: {
            name: 'XUI',
            type: 'umd'
        },
        clean: true
    },
    externals: ['vue'],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]   
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}