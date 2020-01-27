
const htmlPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const getPath = s => path.join(...[__dirname, ...s])
const PROD = process.env.NODE_ENV === 'production'

let plugins = [
    new webpack.ProgressPlugin(),
    new htmlPlugin({
        title: 'Grama',
        filename: 'index.html',
        template: getPath(['src', 'template.html']),
        inject: 'body',
        meta: {
            viewport: 'width=device-width, initial-scale=1',
        },
        minify: PROD,
        hash: true,
        xhtml: true,
    })
]
if (PROD) {
    // Production plugins.
}

module.exports = {
    devServer: {
        compress: true,
        contentBase: getPath(['docs']),
        filename: 'bundle.js',
        hot: true,
        port: 8080,
    },
    devtool: PROD ? false : 'source-map',
    entry: ['whatwg-fetch', getPath(['src', 'index.js'])],
    mode: PROD ? 'production' : 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.jsx?$/,
            },
            {
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.s?css$/,
            }
        ],
    },
    output: {
        filename: 'bundle.js',
        path: getPath(['docs']),
        publicPath: '/',
    },
    plugins,
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    target: 'web',
}
