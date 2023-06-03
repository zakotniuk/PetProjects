const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {   test: /\.(png|jpe?g|gif|svg)$/i, type: 'asset/resource'},
            {   test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            {// Match js, jsx, ts & tsx files
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
            
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({//собирает главную страницу сборки
            title: "My React App",
            filename: 'index.html',
            template: './src/index.html' //шаблон на основе которого строится файл сборки
        }),
    ],
    devServer: {
        port: 8080,
        compress: true,
        hot: true, //авто-перезагрузка сервера на 8080 порту
        static: {
          directory: path.join(__dirname, 'public'),
        },
      },

    mode: 'development'
}