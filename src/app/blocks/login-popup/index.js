import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '../modal/index'
import Logo from '../logo/index'
import LoginForm from './login-form/index'
import { StyledPopup, LoginLogo, X } from './style'

class LoginPopup extends Component {
    state = { }

    static propTypes={
      popupHandler: PropTypes.func.isRequired,

    }

    componentWillMount() {
      if (document) document.onkeyup = this.escapeHandler
    }

    componentWillUnmount() {
      if (document) document.onkeyup = null
    }

    escapeHandler = (event) => {
      const { popupHandler } = this.props

      if (event.key === 'Escape') popupHandler()
    }

    render() {
      const { popupHandler } = this.props


      return (
        <Modal>
          <StyledPopup>
            <X onClick={popupHandler} />
            <LoginLogo>
              <Logo />
            </LoginLogo>
            <LoginForm />

          </StyledPopup>
        </Modal>
      )
    }
}

export default LoginPopup
