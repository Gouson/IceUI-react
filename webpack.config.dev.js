const base = require('./webpack.config')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {

    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            title: 'ICE',
            template: 'index.html'
        })
    ]
})