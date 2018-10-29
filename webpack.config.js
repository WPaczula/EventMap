const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    '@babel/polyfill',
    path.join(__dirname, '/src/client/index.js'),
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
            ],
            /* eslint-disable global-require */
            plugins: [
              require('babel-plugin-styled-components'),
              require('@babel/plugin-proposal-class-properties'),
            ],
            /* eslint-disable */
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/client/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
}
