const base = require('./webpack.config')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        index: "./index.tsx"
    },
    output: {
        path: path.resolve(__dirname, 'doc'),
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'ICE',
            template: 'index.html'
        })
    ]
})