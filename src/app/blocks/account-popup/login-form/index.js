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

  handleSocialResponse = (response) => {
    const { name, email, userID } = response
    const { socialLogin } = this.props

    if (name && email && userID) {
      console.log(response)
      socialLogin(name, email, userID)
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
        onResponse={this.handleSocialResponse}
      />
      <GoogleLogin
        onSuccess={this.handleSocialResponse}
        onFailure={(response) => { console.error(response) }}
      />
      <SubmitButton inverse onClick={this.logIn}>Log in</SubmitButton>
    </>
    )
  }
}

export default LoginForm
