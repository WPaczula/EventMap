import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmitButton } from '../style'
import Input from '../../input'
import MessagePopup from '../../message-popup'
import FacebookLogin from '../facebook-login'
import GoogleLogin from '../google-login'

class RegisterForm extends Component {
  state = {
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    errorMessage: '',
    shouldShowError: false,
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    socialLogin: PropTypes.func.isRequired,
  }

  setNickname = (nickname) => {
    this.setState({ nickname })
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
    const {
      email, nickname, password, confirmPassword,
    } = this.state
    const { onSubmit } = this.props

    if (password === confirmPassword) onSubmit(email, nickname, password)
    else this.setState(() => ({ errorMessage: 'Passwords don\'t match', shouldShowError: true }))
  }

  handleFacebookResponse = (response) => {
    if (response) {
      const { name, email, userID } = response
      const { socialLogin } = this.props

      if (name && email && userID) {
        socialLogin(name, email, userID)
      }
    }
  }

  handleGoogleResponse = (response) => {
    const { profileObj } = response
    const { socialLogin } = this.props

    const { name, email, googleId } = profileObj

    if (name && email && googleId) {
      socialLogin(name, email, googleId)
    }
  }

  render() {
    const {
      nickname,
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
        icon="📨"
      />
      <Input
        value={nickname}
        onChange={this.setNickname}
        placeholder="nickname"
        type="text"
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

      <FacebookLogin
        onClick={this.handleFacebookResponse}
      />
      <GoogleLogin
        onSuccess={this.handleGoogleResponse}
        onFailure={(response) => { console.error(response) }}
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
