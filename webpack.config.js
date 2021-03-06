const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // mode: 'development',
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'ReUI',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: 'index.html',
    //         title: 'ReUI'
    //     })
    // ],
}