var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
    },{
      test:/.scss$/,
      exclude:/node_modules/,
      use:['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  stats: {
    colors: true
  },
  mode:'development',
  devtool: 'source-map',
  watch:true
};