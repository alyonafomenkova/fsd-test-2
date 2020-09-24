const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};
const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: {
    'theme': PATHS.source + '/pages/theme/theme.js',
    'form-elements': PATHS.source + '/pages/form-elements/form-elements.js',
    'cards': PATHS.source + '/pages/cards/cards.js',
    'header-and-footer': PATHS.source + '/pages/header-and-footer/header-and-footer.js',
    'landing': PATHS.source + '/pages/landing/landing.js',
    'search': PATHS.source + '/pages/search/search.js',
    'details': PATHS.source + '/pages/details/details.js',
    'sign-in': PATHS.source + '/pages/sign-in/sign-in.js',
    'sign-up': PATHS.source + '/pages/sign-up/sign-up.js',
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  devServer: {
    index: 'details.html',
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
    port: 8000,
    open: 'chrome',
  },
  resolve: {
    alias: {
      Normalize: path.resolve(__dirname, 'node_modules/normalize.scss/normalize.scss'),
      Mixins: path.resolve(__dirname, 'src/base/mixins.scss'),
      Theme: path.resolve(__dirname, 'src/base/theme.scss'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Fonts: path.resolve(__dirname, 'src/assets/fonts'),
      FontsScss: path.resolve(__dirname, 'src/base/fonts.scss'),
      Base: path.resolve(__dirname, 'src/base/base.scss'),
      AirDatepicker: path.resolve(__dirname, 'node_modules/air-datepicker/dist'),
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          'pretty': true
        }
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]'
        },
        exclude: [/fonts/],
      },

      {
        test: /\.(woff2|woff|ttf|svg)$/,
        include: [/fonts/],
        loader: 'file-loader?limit=1024&name=assets/fonts/[name].[ext]',
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: PATHS.source + '/assets/favicons', to: PATHS.build + '/assets/favicons' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'header-and-footer.html',
      template: PATHS.source + '/pages/theme/theme.pug',
      chunks: ['theme'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'form-elements.html',
      template: PATHS.source + '/pages/form-elements/form-elements.pug',
      chunks: ['form-elements'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      template: PATHS.source + '/pages/cards/cards.pug',
      chunks: ['cards'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'header-and-footer.html',
      template: PATHS.source + '/pages/header-and-footer/header-and-footer.pug',
      chunks: ['header-and-footer'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'landing.html',
      template: PATHS.source + '/pages/landing/landing.pug',
      chunks: ['landing'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'search.html',
      template: PATHS.source + '/pages/search/search.pug',
      chunks: ['search'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'details.html',
      template: PATHS.source + '/pages/details/details.pug',
      chunks: ['details'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      template: PATHS.source + '/pages/sign-in/sign-in.pug',
      chunks: ['sign-in'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-up.html',
      template: PATHS.source + '/pages/sign-up/sign-up.pug',
      chunks: ['sign-up'],
      inject: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ]
};

module.exports = config;
