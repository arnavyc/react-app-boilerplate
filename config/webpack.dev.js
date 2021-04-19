/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

const ESLintFormatterPretty = require('eslint-formatter-pretty');
const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const config = {
  mode: 'development',
  plugins: [new ESLintPlugin({ formatter: ESLintFormatterPretty })],
  devServer: {
    quiet: true,
  },
};

module.exports = merge(commonConfig, config);
