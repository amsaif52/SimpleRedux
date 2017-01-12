const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/MainApp",
  output:{
    filename: 'bundle.js',
    path: __dirname+'/dist',
    publicPath: '/dist/'
  },
  module:{
    loaders:[
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
		extensions: ['', '.js', '.jsx']
	},
  plugins:[
    new HtmlWebpackPlugin({template: './index.html'})
  ]
}
