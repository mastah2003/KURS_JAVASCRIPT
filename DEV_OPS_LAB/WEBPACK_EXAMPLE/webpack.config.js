const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports= 
{
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[hash].js",
        path: path.resolve(__dirname,"abc")
    },
    module:
    {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }

        ]

    },

    plugins:
    [
        new CleanWebpackPlugin(["abc"]),
        new HtmlWebpackPlugin({
            title: "MÓJ CUSTOM TITLE"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:
    {
        contentBase:  "./abc",
        hot:true 
    }

}