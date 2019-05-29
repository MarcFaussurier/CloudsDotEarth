const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", 
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(path.resolve(__dirname, 'www'), 'dist')
  },
  plugins: [
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
      })
  ]
};
