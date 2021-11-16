/* eslint-disable @typescript-eslint/no-require-imports */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/client/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'scripts/[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  mode: process.env.NODE_ENV || 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/client/assets/index.html',
      // favicon: './client/assets/icons/favicon.png',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              ['@babel/plugin-transform-runtime', { 'regenerator': true }]
            ],
          }
        }
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              //webp: {
              //  quality: 30,
              //}
              name: 'dirname/[hash].[ext]',
            },
          },
        ],
      },
    ]
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'eval-cheap-module-source-map' : undefined,
  devServer: {
    hot: true,
    compress: true,
    proxy: {
      '/login': { target: 'http://localhost:3000' },
      '/logout': { target: 'http://localhost:3000' },
      '/api': { target: 'http://localhost:3000' },
    },
    client: {
      overlay: false,
    },
  }
};
