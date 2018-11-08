const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

const modeConfig = env => require(`./build-utils/webpack.${env}`)(__dirname)

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => 
  webpackMerge( // Object.assign for webpack
    {
      mode,
      output: {
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
    },
    modeConfig(mode),
  )
