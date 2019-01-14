import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmitButton } from '../style'
import Input from '../../input'
import FacebookLogin from '../facebook-login'
import GoogleLogin from '../google-login'

class LoginForm extends Component {
  state = { email: '', password: '' }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    socialLogin: PropTypes.func.isRequired,
  }

  setEmail = (email) => {
    this.setState({ email })
  }

  setPassword = (password) => {
    this.setState({ password })
  }

  logIn = () => {
    const { email, password } = this.state
    const { onSubmit } = this.props

    onSubmit(email, password)
  }

  handleFacebookResponse = (response) => {
    const { name, email, userID } = response
    const { socialLogin } = this.props

    if (name && email && userID) {
      socialLogin(name, email, userID)
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
    const { email, password } = this.state
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
        value={password}
        onChange={this.setPassword}
        placeholder="password"
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
      <SubmitButton inverse onClick={this.logIn}>Log in</SubmitButton>
    </>
    )
  }
}

export default LoginForm
