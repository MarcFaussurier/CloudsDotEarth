const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./../../../webpack.config.dev');

const config = {
  PORT: 3000,
  HOST: 'localhost'
};

const compiler = webpack(webpackConfig);

const server = express();

server.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);
server.use(require('webpack-hot-middleware')(compiler));

server.use(express.static(__dirname));
server.use(express.static(__dirname + "/../../../www"));

// Prepare to receive requests.
server.listen(config.PORT, config.HOST, err => {
  if (err) throw err;

  console.log('Listening at http://' + config.HOST + ':' + config.PORT);
});