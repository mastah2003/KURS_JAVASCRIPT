const path = require('path');

module.exports=
{
  entry: "./src/index.js",
  output: {
            filename: "dev.js",
            path:path.resolve(__dirname,"dist")
          }
}
///////////////////////////////////////////////////////////

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
// const webpack = require("webpack");

// module.exports = {
//   mode: "development",
//   entry: {
//     app: "./src/index.js",
//     print: "./src/print.js"
//   },
//   devServer: {
//     contentBase: "./dist",
//     hot: true
//   },
//   plugins: [
//     new CleanWebpackPlugin(["dist"]),
//     new HtmlWebpackPlugin({
//       title: "Output Management"
//     }),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   output: {
//     filename: "[name].[hash].js",
//     path: path.resolve(__dirname, "dist")
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"]
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: ["file-loader"]
//       }
//     ]
//   }
// };
