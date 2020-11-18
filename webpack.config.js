const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};
const devMode = process.env.NODE_ENV !== 'production';
const pages = ['theme', 'form-elements', 'cards', 'header-and-footer', 'landing', 'search', 'details', 'sign-in', 'sign-up'];

const common = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: PATHS.build,
    filename: 'index.bundle.js',
  },
  resolve: {
    alias: {
      AirDatepicker: path.resolve(__dirname, 'node_modules/air-datepicker/dist'),
      Base: path.resolve(__dirname, 'src/base/'),
      Fonts: path.resolve(__dirname, 'src/assets/fonts'),
      Normalize: path.resolve(__dirname, 'node_modules/normalize.scss/normalize.scss'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
        },
        exclude: [/fonts/],
      },

      {
        test: /\.(woff2|woff|ttf|svg)$/,
        include: [/fonts/],
        loader: 'file-loader?limit=1024&name=assets/fonts/[folder]/[name].[ext]',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.source}/assets/favicons`, to: `${PATHS.build}/assets/favicons` },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: '[id].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};

pages.forEach((page) => {
  common.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: `${PATHS.source}/pages/${page}/${page}.pug`,
    }),
  );
});

const devConfig = {
  mode: 'development',
  devServer: {
    index: 'form-elements.html',
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
    port: 8000,
    open: 'chrome',
  }
};

module.exports = function (env) {
  if (env === 'production') {
    return common;
  }
  if (env === 'development') {
    return merge([
      common,
      devConfig,
    ]);
  }
};
