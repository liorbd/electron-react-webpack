const {dist, src} = require("./helpers");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'electron-renderer',

    entry: './app/src/renderer_process.js',

    output: {
        path: dist(),
        publicPath: '',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../app/src/index.ejs')
        }),
        new CopyPlugin([
            {
                from: src('/assets'),
                to: dist('/assets')
            }
        ])
    ],

    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }

}
