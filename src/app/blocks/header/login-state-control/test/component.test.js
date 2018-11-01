import React from 'react'
import { shallow } from 'enzyme'
import LoginStateControl from '../component'

describe('login state control component', () => {
  const renderComponent = (opts = {}) => {
    const {
      isUserLoggedIn = false,
      logIn = jest.fn(),
      logOut = jest.fn(),
    } = opts

    return shallow(<LoginStateControl
      logIn={logIn}
      logOut={logOut}
      isUserLoggedIn={isUserLoggedIn}
    />)
  }

  it('should run logIn when not logged and clicked.', () => {
    const logIn = jest.fn()
    const hamburger = renderComponent({ logIn })

    hamburger.simulate('click')

    expect(logIn).toBeCalledTimes(1)
  })

  it('should run logOut when logged in and clicked.', () => {
    const logOut = jest.fn()
    const isUserLoggedIn = true
    const hamburger = renderComponent({ logOut, isUserLoggedIn })

    hamburger.simulate('click')

    expect(logOut).toBeCalledTimes(1)
  })
})
