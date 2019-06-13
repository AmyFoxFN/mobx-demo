const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {
      mobx: path.join(__dirname, './mobx/mobx.module.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              /**
               * @desc the order and options of 'plugin-proposal-decorators' and 'plugin-proposal-class-properties' is very strict.
               * @see https://babeljs.io/docs/en/next/babel-plugin-proposal-decorators.html#note-compatibility-with-babel-plugin-proposal-class-properties
               */
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  // dev
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: '0.0.0.0',
    port: 8008,
    open: true
  }
}
