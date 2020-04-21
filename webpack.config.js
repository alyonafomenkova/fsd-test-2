const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const config = {
  mode: 'development',
  // entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: '[name].bundle.js'
  // },
  entry: {
    'colors-and-types':     PATHS.source + '/pages/uikit/colors-and-type/colors-and-type.js',
    //'module/a/index': 'module/a/index.js',
    //'module/b/index': 'module/b/index.js',
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  devServer: {
    //index: 'index.html',
    index: 'colors-and-type.html',
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
    port: 9000,
    writeToDisk: true,
    open: 'chrome',
  },
  resolve: {
    alias: {
      Normalize: path.resolve(__dirname, 'node_modules/normalize.scss/normalize.scss'),//
      Theme: path.resolve(__dirname, 'src/base/theme.scss'),
      Fonts: path.resolve(__dirname, 'src/fonts'),
      FontsScss: path.resolve(__dirname, 'src/base/fonts.scss'),
      Base: path.resolve(__dirname, 'src/base/base.scss')
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'colors-and-type.html',
      template: PATHS.source + '/pages/uikit/colors-and-type/colors-and-type.pug'
    }),
  ]
};

module.exports = config;
