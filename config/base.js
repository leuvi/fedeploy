const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseUrl = file => path.resolve(file)
const isProd = process.env.NODE_ENV

module.exports = {
  entry: {
    app: baseUrl('./src/index.js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: baseUrl('src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-0'],
            plugins: ['dynamic-import-webpack']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                if(isProd == 'prod') {
                  return 'images/[hash].[ext]'
                }
                return '[name].[ext]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: baseUrl('src/index.html')
    })
  ]
}