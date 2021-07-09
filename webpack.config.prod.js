const base = require('./webpack.config')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        index: "./index.tsx"
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'ICE',
            template: 'index.html'
        })
    ],
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    }
})