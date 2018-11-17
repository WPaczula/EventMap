import React from 'react'
import { shallow } from 'enzyme'
import { HeaderComponent as Header } from '../component'
import { MenuList, MenuItem } from '../style'
import Hamburger from '../hamburger'

describe('header', () => {
  const renderHeader = (opts = {}) => {
    const {
      location = { pathname: '/' },
      loadCategories = jest.fn(),
      categories = undefined,
    } = opts

    return shallow(<Header
      location={location}
      loadCategories={loadCategories}
      categories={categories}
    />)
  }

  it('should highlight home if its index page.', () => {
    const location = { pathname: '/' }
    const activeKey = 'index'

    const activeItem = renderHeader({ location })
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
    const location = { pathname: '/category/active' }
    const categories = [
      { key: 'active', name: 'activeName' },
      { key: 'not-active', name: 'notActive' },
    ]
    const wrapper = renderHeader({ categories, location })
    const inactiveMenuItem = wrapper
      .find(MenuItem)
      .find({ active: false })
      .first()
    const menu = wrapper
      .find(MenuList)
    wrapper.instance().toggleMenuHidden(false)

    inactiveMenuItem.simulate('click', { preventDefault: jest.fn() })

    expect(menu.prop('hidden')).toBe(true)
  })

  it('should load categories when before mount.', () => {
    const loadCategories = jest.fn()

    renderHeader({ loadCategories })

    expect(loadCategories).toBeCalledTimes(1)
  })
})
