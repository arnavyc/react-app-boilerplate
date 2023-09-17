/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

import ESLintFormatterPretty from 'eslint-formatter-pretty'
import ESLintPlugin from 'eslint-webpack-plugin'
import { merge } from 'webpack-merge'
import commonConfig from './webpack.common.js'

const config = {
  mode: 'development',
  plugins: [new ESLintPlugin({ formatter: ESLintFormatterPretty })],
}

export default merge(commonConfig, config)
