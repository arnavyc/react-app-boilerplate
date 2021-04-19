/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const config = {
  mode: 'production',
};

module.exports = merge(commonConfig, config);
