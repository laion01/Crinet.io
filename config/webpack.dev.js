const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const TimeFixPlugin = require('time-fix-plugin')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const pages = require('./pages')
const PORT = 8080;

let pageLoader = pages.reduce((acc, pageName) => {
  let page = new HTMLWebpackPlugin({
    template: `./src/pages/${pageName}.pug`,
    filename: `${pageName}.html`
  })
  acc.push(page)
  return acc
}, [])

if (process.env.STATS === 'true') {
  pageLoader.push(new BundleAnalyzerPlugin())
}

const devConfig = {
  entry: {
    main: [
      'babel-runtime/regenerator',
      './src/main.js'
    ]
  },
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'js/[name].js',
    publicPath: '/'
  },
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, '../src'),
    port: PORT,
    stats: {
      colors: true,
      children: false
    }
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: eslintFriendlyFormatter,
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.css|postcss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.jpg|png|gif|svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: pageLoader.concat([
    new TimeFixPlugin(),
    new StyleLintPlugin({
      files: 'src/**/*.{vue,htm,html,css,sss,less,scss,sass}',
      emitErrors: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      pages: JSON.stringify(pages)
    }),
    new PreloadWebpackPlugin()
  ])
}

module.exports = merge(
  devConfig,
  commonConfig
)