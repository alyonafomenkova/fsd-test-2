const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};
const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: {
    'colors-and-type': PATHS.source + '/pages/uikit/colors-and-type/colors-and-type.js',
    'form-elements': PATHS.source + '/pages/uikit/form-elements/form-elements.js',
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  devServer: {
    index: 'form-elements.html',
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
    port: 8000,
    open: 'chrome',
  },
  resolve: {
    alias: {
      Normalize: path.resolve(__dirname, 'node_modules/normalize.scss/normalize.scss'),
      Theme: path.resolve(__dirname, 'src/base/theme.scss'),
      Fonts: path.resolve(__dirname, 'src/fonts'),
      FontsScss: path.resolve(__dirname, 'src/base/fonts.scss'),
      Base: path.resolve(__dirname, 'src/base/base.scss'),
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
          'sass-loader'
        ]
      },

      {
        test: /\.pug$/,
        loaders: [
          {
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              "pretty":true
            }
          }
        ]
      },

      {
        test: /\.(woff2|woff|ttf|svg)$/,
        loader: 'file-loader?limit=1024&name=fonts/[name].[ext]'
      },
    ],
  },

  plugins: [
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'colors-and-type.html',
      template: PATHS.source + '/pages/uikit/colors-and-type/colors-and-type.pug',
      chunks: ['colors-and-type'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'form-elements.html',
      template: PATHS.source + '/pages/uikit/form-elements/form-elements.pug',
      chunks: ['form-elements'],
      inject: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ]
};

module.exports = config;
