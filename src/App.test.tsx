/**
 * SPDX-FileCopyrightText: 2021 arnavyc
 *
 * SPDX-License-Identifier: 0BSD
 */

import React from 'react'
import ReactDOMClient from 'react-dom/client'
import renderer from 'react-test-renderer'
import App from './App'

describe('<App /> component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = ReactDOMClient.createRoot(div)
    root.render(<App />)
    root.unmount()
  })

  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
