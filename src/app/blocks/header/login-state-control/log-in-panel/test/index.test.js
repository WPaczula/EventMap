import { shallow } from 'enzyme'
import React from 'react'
import LogInPanel from '..'
import LogInPopup from '../../../../login-popup'
import Link from '../../../../link'

describe('log in panel', () => {
  it('should show login popup when login is clicked.', () => {
    const logInPanel = shallow(<LogInPanel logIn={jest.fn()} />)

    const logInLink = logInPanel.find(Link).at(0)
    logInLink.simulate('click')
    const loginPopup = logInPanel.find(LogInPopup)

    expect(loginPopup.exists()).toBe(true)
  })

  it('should pass on login fn to popup.', () => {
    const login = jest.fn()
    const logInPanel = shallow(<LogInPanel logIn={login} />)

    const logInLink = logInPanel.find(Link).at(0)
    logInLink.simulate('click')
    const loginPopup = logInPanel.find(LogInPopup)

    expect(loginPopup.prop('onLogin')).toBe(login)
  })
})
