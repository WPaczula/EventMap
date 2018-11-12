import React from 'react'
import { shallow } from 'enzyme'
import LoginStateControl from '../component'
import LogInPanel from '../log-in-panel'
import LogOutPanel from '../log-out-panel'

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

  it('should render LogInPanel when user is logged in.', () => {
    const logIn = jest.fn()
    const isUserLoggedIn = false
    const accountPanel = renderComponent({ logIn, isUserLoggedIn })

    const logInPanel = accountPanel.find(LogInPanel)

    expect(logInPanel.exists()).toBe(true)
    expect(logInPanel.prop('logIn')).toBe(logIn)
  })

  it('should run logOut when logged in and clicked.', () => {
    const logOut = jest.fn()
    const isUserLoggedIn = true
    const accountPanel = renderComponent({ logOut, isUserLoggedIn })

    const logOutPanel = accountPanel.find(LogOutPanel)

    expect(logOutPanel.exists()).toBe(true)
    expect(logOutPanel.prop('logOut')).toBe(logOut)
  })
})
