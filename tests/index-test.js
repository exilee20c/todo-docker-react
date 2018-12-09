import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<div>Welcome to React components</div>, node, () => {
      expect(node.innerHTML).toContain('Welcome to React components')
    })
  })
})
