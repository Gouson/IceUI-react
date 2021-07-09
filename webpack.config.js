const path = require('path')
module.exports = {
    entry: {
        ice: './index.tsx'
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
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: ['file-loader']
        }]
    }
}