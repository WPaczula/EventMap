import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '../modal'
import LoginForm from './login-form'
import RegisterForm from './register-form'
import { StyledPopup, LogoContainer, X } from './style'

export const popupTypes = {
  login: 'LOGIN',
  register: 'REGISTER',
}

class AccountPopup extends Component {
    static propTypes={
      exit: PropTypes.func.isRequired,
      onSubmit: PropTypes.func.isRequired,
      socialLogin: PropTypes.func.isRequired,
      popupType: PropTypes.oneOf(['LOGIN', 'REGISTER']),
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
        onSubmit,
        popupType,
        socialLogin,
      } = this.props

      const PopupComponent = popupType === popupTypes.login
        ? LoginForm
        : RegisterForm

      return (
        <Modal>
          <StyledPopup>
            <X onClick={exit} />
            <LogoContainer />
            {
              <PopupComponent onSubmit={onSubmit} socialLogin={socialLogin} />
            }
          </StyledPopup>
        </Modal>
      )
    }
}

export default AccountPopup
