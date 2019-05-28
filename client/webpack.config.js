const path = require('path');

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
        use: [{
            loader: "style-loader", options: {
                sourceMap: false
            }
        }, {
            loader: "css-loader", options: {
                sourceMap: false
            }
        }, {
            loader: "sass-loader", options: {
                sourceMap: false
            }
        }]
    }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
