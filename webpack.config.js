const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => ({
  output: {
    path: env.mode === 'production' ? path.resolve(__dirname, 'build') : path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: '/node_modules/' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProgressPlugin(),
  ],
  mode: env.mode,
})
