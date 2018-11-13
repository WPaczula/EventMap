import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmitButton } from './style'
import Input from '../../input'

class LoginForm extends Component {
  state = { email: '', password: '' }

  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  }

  setEmail = (email) => {
    this.setState({ email })
  }

  setPassword = (password) => {
    this.setState({ password })
  }

  logIn = () => {
    const { email, password } = this.state
    const { onLogin } = this.props

    onLogin(email, password)
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
        icon="👤"
      />
      <Input
        value={password}
        onChange={this.setPassword}
        placeholder="password"
        type="password"
        icon="💬"
      />
      <SubmitButton inverse onClick={this.logIn}>Log in</SubmitButton>
    </>
    )
  }
}

export default LoginForm
