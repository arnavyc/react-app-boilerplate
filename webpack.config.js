/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

import prodConfig from './config/webpack.prod.js';
import devConfig from './config/webpack.dev.js';
import commonConfig from './config/webpack.common.js';

export default (env) => {
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
