import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AccountButton } from '../style'
import AccountPopup, { popupTypes } from '../../account-popup'

class LogIn extends Component {
  state = { activePopup: undefined }

  static propTypes = {
    logIn: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    unhandledRegister: PropTypes.bool,
  }

  componentWillReceiveProps(newProps) {
    const { unhandledRegister } = this.props
    if (!unhandledRegister && newProps.unhandledRegister) {
      this.setState({ activePopup: popupTypes.login })
    }
  }

  togglePopup = (value) => {
    this.setState({ activePopup: value })
  }

  render() {
    const { activePopup } = this.state
    const { logIn, register } = this.props

    const onSubmit = activePopup === popupTypes.login
      ? logIn
      : register

    return (
      <>
        <AccountButton onClick={() => this.togglePopup(popupTypes.login)}>
          Login
        </AccountButton>
        <AccountButton onClick={() => this.togglePopup(popupTypes.register)}>
          Register
        </AccountButton>
        {
          activePopup
          && (
          <AccountPopup
            popupType={activePopup}
            exit={() => this.togglePopup(undefined)}
            onSubmit={onSubmit}
          />
          )
        }
      </>
    )
  }
}

export default LogIn
