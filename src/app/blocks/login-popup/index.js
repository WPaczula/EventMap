import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '../modal'
import LoginForm from './login-form'
import { StyledPopup, LogoContainer, X } from './style'

export const popupTypes = {
  login: 'LOGIN',
  register: 'REGISTER',
}

class LoginPopup extends Component {
    state = { }

    static propTypes={
      exit: PropTypes.func.isRequired,
      onLogin: PropTypes.func.isRequired,
    }

    componentWillMount() {
      if (document) document.onkeyup = this.handleKey
    }

    componentWillUnmount() {
      if (document) document.onkeyup = null
    }

    handleKey = (event) => {
      const { exit } = this.props

      if (event.key === 'Escape') exit()
    }

    render() {
      const {
        exit,
        onLogin,
      } = this.props

      return (
        <Modal>
          <StyledPopup>
            <X onClick={exit} />
            <LogoContainer />
            {
              <LoginForm onLogin={onLogin} />
            }
          </StyledPopup>
        </Modal>
      )
    }
}

export default LoginPopup
