var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './src/idx.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  stats: {
    colors: true
  },
  mode:'development',
  devtool: 'source-map'
};