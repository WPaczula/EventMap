import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { facebookApi } from '../../../../../config'
import { FacebookButton } from './style'

export default class FacebookLoginComponent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      response: null,
    }
  }

  storeResponse = (response) => {
    this.setState({ response })
  }

  render() {
    const { onClick } = this.props
    const { response } = this.state

    return (
      <FacebookLogin
        appId={facebookApi}
        autoLoad
        fields="name,email"
        onClick={() => onClick(response)}
        callback={this.storeResponse}
        render={renderProps => (
          <FacebookButton onClick={renderProps.onClick}>Login with facebook</FacebookButton>
        )}
      />
    )
  }
}
