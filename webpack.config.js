const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        ice: './lib/index.tsx'
    }, //程序的入口
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'ICEUI',
        libraryTarget: 'umd'

    },
    module: { //如何解析
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }, {
            test: /\.svg$/,
            loader: 'svg-sprite-loader'
        }]
    }
}