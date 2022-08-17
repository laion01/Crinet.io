const path = require('path')
const fs = require('fs')
const glob = require('glob-all')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const PATHS = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  resources: 'template/resources'
}

const pages = fs.readdirSync(`${PATHS.src}/pages`)
const pagesNames = pages.map((page) => page.split('.')[0])

let plugins = pagesNames.reduce((acc, pageName) => {
  let page = new HTMLWebpackPlugin({
    template: `${PATHS.src}/pages/${pageName}.pug`,
    filename: `${pageName}.html`,
    inject: true
  })
  acc.push(page)
  return acc
}, [])

const smp = new SpeedMeasurePlugin({ disable: process.env.STATS !== 'true' })

const prodConfig = {
  entry: {
    main: `${PATHS.src}/main.js`
  },
  mode: 'production',
  output: {
    filename: `${PATHS.resources}/js/[name].js`,
    path: PATHS.dist,
    chunkFilename: `${PATHS.resources}/js/[name]-[chunkhash].js`,
    publicPath: '/'
  },
  stats: {
    children: false
  },
  optimization: {
    minimizer: [new UglifyJSPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.css|postcss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.jpg|png|gif$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (file) => {
                let path = file.replace(/.*src[\\|\/]images[\\|\/]/i, '')
                return `${PATHS.resources}/images/${path}`
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (file) => {
                let path = file.replace(/.*src[\\|\/]images[\\|\/]/i, '')
                return `${PATHS.resources}/images/${path}`
              }
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true }
              ]
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
              name: `${PATHS.resources}/fonts/[name].[ext]`,
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: plugins.concat([
    new MiniCssExtractPlugin({
      filename: `${PATHS.resources}/css/[name].css`,
      chunkFilename: `${PATHS.resources}/css/[name]-[chunkhash].css`
    }),
    new PurgecssPlugin({
      paths: glob.sync([
        path.join(PATHS.src, '/**/*.vue'),
        path.join(PATHS.src, '/**/*.pug'),
        path.join(PATHS.src, '/**/*.js')
      ], { nodir: true }),
      whitelistPatterns: [/swiper.*/, /multiselect.*/, /simplebar.*/, /__.*/],
      extractors: [
        {
          extractor: class {
            static extract (content) {
              return content.match(/[A-Za-z0-9_:/-]+/g) || []
            }
          },
          extensions: ['vue', 'pug', 'js']
        }
      ]
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'allChunks'
    })
  ])
}

const mergedConfig = merge(
  prodConfig,
  commonConfig
)

module.exports = smp.wrap(mergedConfig)
