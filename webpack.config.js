/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

const prodConfig = require('./config/webpack.prod');
const devConfig = require('./config/webpack.dev');
const commonConfig = require('./config/webpack.common');

module.exports = (env) => {
  let res = {};
  if (env.production) {
    res = prodConfig;
  } else if (env.development) {
    res = devConfig;
  } else {
    res = commonConfig;
  }
  return res;
};
