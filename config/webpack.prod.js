/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

const config = {
  mode: 'production',
};

export default merge(commonConfig, config);
