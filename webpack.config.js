const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        ice: './lib/index.tsx'
    }, //程序的入口
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'ICEUI',
        libraryTarget: 'umd'

    },
    module: { //如何解析
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'ICE',
            template:'index.html'
        })
    ]
}