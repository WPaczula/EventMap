import { shallow } from 'enzyme'
import React from 'react'
import LogInPanel from '..'
import Popup, { popupTypes } from '../../../account-popup'
import { AccountButton } from '../../style'

describe('log in panel', () => {
  const renderLogInPanel = (opts = {}) => {
    const {
      register = jest.fn(),
      logIn = jest.fn(),
      isSuccessfulyRegistered = false,
    } = opts

    return shallow(<LogInPanel
      register={register}
      logIn={logIn}
      socialLogin={jest.fn()}
      isSuccessfulyRegistered={isSuccessfulyRegistered}
    />)
  }

  it('should show login popup when login is clicked.', () => {
    const logInPanel = renderLogInPanel()

    const logInLink = logInPanel.find(AccountButton).at(0)
    logInLink.simulate('click')
    const loginPopup = logInPanel.find(Popup)

    expect(loginPopup.exists()).toBe(true)
  })

  it('should pass on login fn to popup.', () => {
    const logIn = jest.fn()
    const logInPanel = renderLogInPanel({ logIn })

    const logInLink = logInPanel.find(AccountButton).at(0)
    logInLink.simulate('click')
    const loginPopup = logInPanel.find(Popup)

    expect(loginPopup.prop('onSubmit')).toBe(logIn)
  })

  it('should pass register to register popup.', () => {
    const register = jest.fn()
    const logInPanel = renderLogInPanel({ register })

    const registerLink = logInPanel.find(AccountButton).at(1)
    registerLink.simulate('click')
    const registerPopup = logInPanel.find(Popup)

    expect(registerPopup.prop('onSubmit')).toBe(register)
  })

  it('should change popup to login after good register.', () => {
    const logInPanel = renderLogInPanel()
    logInPanel.setState({ activePopup: popupTypes.register })

    logInPanel.setProps({ unhandledRegister: true })
    const registerPopup = logInPanel.find(Popup)

    expect(registerPopup.prop('popupType')).toBe(popupTypes.login)
  })
})
