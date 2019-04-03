const {dist} = require("./helpers");

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
    mode: 'development',
    watch: true,
    devServer: {
        contentBase: dist(),
        publicPath: '',
        quiet: false,
        noInfo: false,
        historyApiFallback: true,
        port: 8000,
        hot: true,
        open: false,
    },
    devtool: 'source-map',
    plugins: []
});
