/* eslint-disable */

const config = require("./webpack.config.base");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');

module.exports = config({
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    // bundle the client for hot reloading
    'webpack-hot-middleware/client',
  ],
  output: {
    path: path.resolve(path.resolve(__dirname, "www"), "dist"),
    filename: "./dist/js/app.js"
  },
  plugins: [
    new ExtractTextPlugin({
      disable: true
    }), 
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ]
});
