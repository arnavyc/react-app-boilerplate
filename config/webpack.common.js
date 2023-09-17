/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

import HTMLWebpackPlugin from 'html-webpack-plugin'
import WebpackBar from 'webpackbar'
import appRoot from 'app-root-path'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export default {
  entry: './src/index.tsx',
  output: {
    path: `${appRoot.toString()}/dist`,
    filename: 'bundle.js',
  },
  stats: 'errors-only',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x?)$/,
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
    new ForkTsCheckerWebpackPlugin(),
  ],
}
