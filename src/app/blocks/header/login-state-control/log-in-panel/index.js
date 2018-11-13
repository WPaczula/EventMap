import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from '../../../link'
import LoginPopup, { popupTypes } from '../../../login-popup/index'
import { Separator } from './style'

class LogIn extends Component {
    state = { isLoginPopupOpen: false }

  static propTypes = {
    logIn: PropTypes.func.isRequired,
  }

    togglePopup = () => {
      const { isLoginPopupOpen } = this.state

      this.setState({ isLoginPopupOpen: !isLoginPopupOpen })
    };

    render() {
      const { isLoginPopupOpen } = this.state
      const { logIn } = this.props

      return (
        <>
          <Link onClick={this.togglePopup}>
            Login
          </Link>
          <Separator>|</Separator>
          <Link>
            Register
          </Link>
          {
            isLoginPopupOpen
            && <LoginPopup popupType={popupTypes.login} exit={this.togglePopup} onLogin={logIn} />
          }
        </>
      )
    }
}

export default LogIn
