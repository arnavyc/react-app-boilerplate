/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

import React from 'react'
import ReactDOMClient from 'react-dom/client'

import App from './App'

const container = document.getElementById('app')

if (container == null) {
  throw new Error("no element with id 'app' found")
}

const root = ReactDOMClient.createRoot(container)
root.render(<App />)
