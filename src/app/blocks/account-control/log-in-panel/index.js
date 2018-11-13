import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from '../../link'
import AccountPopup, { popupTypes } from '../../account-popup'
import { Separator } from './style'

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
        <Link onClick={() => this.togglePopup(popupTypes.login)}>
          Login
        </Link>
        <Separator>|</Separator>
        <Link onClick={() => this.togglePopup(popupTypes.register)}>
          Register
        </Link>
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
