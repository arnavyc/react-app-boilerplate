/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

import HTMLWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar';
import appRoot from 'app-root-path';

export default {
  entry: './src/index.js',
  output: {
    path: `${appRoot.toString()}/dist`,
    filename: 'bundle.js',
  },
  stats: 'errors-only',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new WebpackBar(),
  ],
};
