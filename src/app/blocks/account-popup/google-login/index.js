import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GoogleLogin } from 'react-google-login'
import { googleApi } from '../../../../../config'
import { GoogleButton } from './style'

export default class GoogleLoginComponent extends Component {
  static propTypes = {
    onSuccess: PropTypes.func.isRequired,
    onFailure: PropTypes.func.isRequired,
  }

  render() {
    const { onSuccess, onFailure } = this.props

    return (
      <GoogleLogin
        clientId={googleApi}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        render={renderProps => (
          <GoogleButton onClick={renderProps.onClick}>Login with Google</GoogleButton>
        )}
      />
    )
  }
}
