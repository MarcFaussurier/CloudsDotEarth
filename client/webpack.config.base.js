/* eslint-disable */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = ({ plugins = [], entry = [], output = {} }) => ({
  entry: [ ... entry, "./src/index.tsx"],
  output: Object.keys(output).length > 0 ? output : {
    path: path.resolve(path.resolve(__dirname, "www"), "dist"),
    filename: "./js/app.[hash].js"
  },
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js", ".jsx", ".tsx", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(j|t)sx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|svg|ico|ttf|eot|woff|woff2|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ManifestPlugin(),
    ...plugins
  ],
  devtool: "source-map",
  devServer: {
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
});
