import React, { Component } from 'react'
import Header from './login-header/index'
import Email from './email-input/index'
import Password from './password-input/index'
import Submit from './login-submit/index'

class LoginForm extends Component {
    state = { email: '', password: '' }

    setEmail = (email) => {
      this.setState({ email })
    }

    setPassword = (password) => {
      this.setState({ password })
    }

    logIn=() => {
      const { email, password } = this.state
      console.log(`email: ${email} password: ${password}`)
    }

    render() {
      const { email, password } = this.state
      return (
      <>
        <Header />
        <Email email={email} onEmailChange={this.setEmail} />
        <Password password={password} onPasswordChange={this.setPassword} />
        <Submit onSubmit={this.logIn} />
      </>)
    }
}

export default LoginForm
