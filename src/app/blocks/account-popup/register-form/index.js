import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmitButton } from '../style'
import Input from '../../input'
import MessagePopup from '../../message-popup'

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    errorMessage: '',
    shouldShowError: false,
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  setEmail = (email) => {
    this.setState({ email })
  }

  setPassword = (password) => {
    this.setState({ password })
  }

  setConfirmPassword = (confirmPassword) => {
    this.setState({ confirmPassword })
  }

  register = () => {
    const { email, password, confirmPassword } = this.state
    const { onSubmit } = this.props

    if (password === confirmPassword) onSubmit(email, password)
    else this.setState(() => ({ errorMessage: 'Passwords don\'t match', shouldShowError: true }))
  }

  render() {
    const {
      email,
      password,
      confirmPassword,
      errorMessage,
      shouldShowError,
    } = this.state

    return (
    <>
      <Input
        value={email}
        onChange={this.setEmail}
        placeholder="email adress"
        type="email"
        icon="👤"
      />
      <Input
        value={password}
        onChange={this.setPassword}
        placeholder="password"
        type="password"
        icon="💬"
      />
      <Input
        value={confirmPassword}
        onChange={this.setConfirmPassword}
        placeholder="confirm password"
        type="password"
        icon="💬"
      />
      <SubmitButton inverse onClick={this.register}>Register</SubmitButton>
      { shouldShowError && (
        <MessagePopup error unMount={() => { this.setState({ shouldShowError: false }) }}>
          {errorMessage}
        </MessagePopup>
      )
      }
    </>
    )
  }
}

export default RegisterForm
