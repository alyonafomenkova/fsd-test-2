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
    'colors-and-type': PATHS.source + '/pages/colors-and-type/colors-and-type.js',
    'form-elements': PATHS.source + '/pages/form-elements/form-elements.js',
    'cards': PATHS.source + '/pages/cards/cards.js',
    'headers-and-footers': PATHS.source + '/pages/headers-and-footers/headers-and-footers.js',
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  devServer: {
    //index: 'colors-and-type.html',
    index: 'form-elements.html',
    //index: 'cards.html',
    //index: 'headers-and-footers.html',
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
      AirDatepicker: path.resolve(__dirname, 'node_modules/air-datepicker/dist'),
      Dropdown: path.resolve(__dirname, 'node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css'),
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
        loader: 'pug-loader',
        options: {
          'pretty': true
        }
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        },
        exclude: [/fonts/],
      },

      {
        test: /\.(woff2|woff|ttf|svg)$/,
        include: [/fonts/],
        loader: 'file-loader?limit=1024&name=fonts/[name].[ext]',
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
      template: PATHS.source + '/pages/colors-and-type/colors-and-type.pug',
      chunks: ['colors-and-type'],
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
      filename: 'headers-and-footers.html',
      template: PATHS.source + '/pages/headers-and-footers/headers-and-footers.pug',
      chunks: ['headers-and-footers'],
      inject: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ]
};

module.exports = config;
