import React from 'react'
import { shallow } from 'enzyme'
import AccountControl from '../component'
import LogInPanel from '../log-in-panel'
import LogOutPanel from '../log-out-panel'
import MessagePopup from '../../message-popup'

describe('login state control component', () => {
  const renderComponent = (opts = {}) => {
    const {
      isUserLoggedIn = false,
      logIn = jest.fn(),
      logOut = jest.fn(),
      register = jest.fn(),
      unhandledRegister = false,
      error = undefined,
      unhandledError = false,
      handleError = jest.fn(),
      handleRegister = jest.fn(),
    } = opts

    return shallow(<AccountControl
      logIn={logIn}
      logOut={logOut}
      isUserLoggedIn={isUserLoggedIn}
      register={register}
      unhandledRegister={unhandledRegister}
      error={error}
      unhandledError={unhandledError}
      handleError={handleError}
      handleRegister={handleRegister}
      socialLogin={jest.fn()}
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

  it('should show message popup when register is completed.', () => {
    const accountPanel = renderComponent({ unhandledRegister: true })

    const message = accountPanel.find(MessagePopup)

    expect(message.exists()).toBe(true)
  })

  it('should show message popup when register couldnt be completed.', () => {
    const message = 'message'
    const accountPanel = renderComponent({ unhandledError: true, error: { message } })

    const messagePopup = accountPanel.find(MessagePopup)

    expect(messagePopup.exists()).toBe(true)
    expect(messagePopup.prop('error')).toBe(true)
    expect(messagePopup.prop('children')).toBe(message)
  })
})
