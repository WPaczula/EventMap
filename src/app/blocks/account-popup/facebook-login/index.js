import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { facebookApi } from '../../../../../config'
import { FacebookButton } from './style'

export default class FacebookLoginComponent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onResponse: PropTypes.func.isRequired,
  }

  render() {
    const { onClick, onResponse } = this.props

    return (
      <>
        <FacebookLogin
          appId={facebookApi}
          autoLoad
          fields="name,email"
          onClick={onClick}
          callback={onResponse}
          render={renderProps => (
            <FacebookButton onClick={renderProps.onClick}>Login with facebook</FacebookButton>
          )}
        />
      </>
    )
  }
}
