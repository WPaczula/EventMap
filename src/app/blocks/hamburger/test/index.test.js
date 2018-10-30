import React from 'react'
import { shallow } from 'enzyme'
import Hamburger from '..'
import { HamburgerLine } from '../style'

describe('hamburger', () => {
  const renderHamburger = (opts = {}) => {
    const { onClick = jest.fn() } = opts

    return shallow(<Hamburger onClick={onClick} />)
  }
  it('should run onClick when clicked.', () => {
    const onClick = jest.fn()
    const hamburger = renderHamburger({ onClick })

    hamburger.simulate('click')

    expect(onClick).toBeCalledTimes(1)
  })

  it('should activate animation when clicked.', () => {
    const hamburger = renderHamburger()

    hamburger.simulate('click')
    const lines = hamburger.find(HamburgerLine)

    expect(lines.every({ active: true })).toBe(true)
  })
})
