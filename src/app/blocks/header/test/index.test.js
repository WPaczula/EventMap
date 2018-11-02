import React from 'react'
import { shallow } from 'enzyme'
import { HeaderComponent as Header } from '..'
import { MenuList, MenuItem } from '../style'
import Hamburger from '../hamburger'

describe('header', () => {
  const renderHeader = (opts = {}) => {
    const {
      location = { pathname: '/' },
      routes = [
        { path: '/', key: 'root' },
        { path: '/path', key: 'other' },
      ],
    } = opts

    return shallow(<Header location={location} routes={routes} />)
  }

  it('should highlight active item based on location.', () => {
    const location = { pathname: '/active' }
    const activeKey = 'active'
    const routes = [
      { path: '/', key: 'root' },
      { path: '/active', key: activeKey },
    ]

    const activeItem = renderHeader({ location, routes })
      .find(MenuItem)
      .find({ active: true })

    expect(activeItem.key()).toBe(activeKey)
  })

  it('should have hamburger button which toggles the menu', () => {
    const wrapper = renderHeader()
    const menu = wrapper.find(MenuList)
    const hamburger = wrapper.find(Hamburger)

    hamburger.simulate('click')

    expect(menu.prop('hidden')).toBe(true)
  })

  it('should hide mobile menu if link is chosen.', () => {
    const wrapper = renderHeader()
    const inactiveMenuItem = wrapper
      .find(MenuItem)
      .find({ active: false })
    const menu = wrapper
      .find(MenuList)
    wrapper.instance().toggleMenuHidden(false)

    inactiveMenuItem.simulate('click', { preventDefault: jest.fn() })

    expect(menu.prop('hidden')).toBe(true)
  })
})
