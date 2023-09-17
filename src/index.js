/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

import React from 'react'
import ReactDOMClient from 'react-dom/client'

import App from './App.jsx'

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)
root.render(React.createElement(App))
