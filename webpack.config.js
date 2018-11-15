const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => ({
  entry: env.production
    ? {
      main: ['@babel/polyfill', path.join(__dirname, '/src/client/index.js')],
      static: ['@babel/polyfill', path.join(__dirname, '/src/static/index.js')],
    }
    : ['@babel/polyfill', path.join(__dirname, '/src/client/index.js')],
  output: {
    path: path.join(__dirname, '/build'),
    filename: env.production ? '[name]/bundle.js' : 'bundle.js',
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
  plugins: env.production 
    ? [
    new CopyWebpackPlugin(
      [
        { from: path.join(__dirname, '/src/workers/sw.js'), to: path.join(__dirname, '/build')},
        { from: path.join(__dirname, '/favicon.ico'), to: path.join(__dirname, '/build')},
        { from: path.join(__dirname, '/assets'), to: path.join(__dirname, '/build/assets')},
        { from: path.join(__dirname, '/manifest.json'), to: path.join(__dirname, '/build')},
        { from: path.join(__dirname, '/src/static/error.html'), to: path.join(__dirname, '/build')},        
      ]
    )
  ]
  : [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/client/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
})
