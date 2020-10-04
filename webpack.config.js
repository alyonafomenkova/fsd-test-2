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
const pages = ['theme', 'form-elements', 'cards', 'header-and-footer', 'landing', 'search', 'details', 'sign-in', 'sign-up'];

const config = {
  mode: 'development',
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: PATHS.build,
    filename: 'index.bundle.js',
  },
  devServer: {
    index: 'search.html',
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
      filename: 'index.css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ]
};

pages.forEach((page) => {
  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: PATHS.source + `/pages/${page}/${page}.pug`,
    }),
  );
});

module.exports = config;
