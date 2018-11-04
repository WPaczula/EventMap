import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledPassword from './style'

class PasswordInput extends Component {
    state = { }

    static propTypes = {
      onPasswordChange: PropTypes.func.isRequired,
      password: PropTypes.string,
    }

    inputHandler=(input) => {
      const { onPasswordChange } = this.props
      onPasswordChange(input.target.value)
    }

    render() {
      const { password } = this.props
      return (
        <StyledPassword>
          <input type="password" placeholder="password" value={password} onChange={this.inputHandler} required />
          <hr />
        </StyledPassword>
      )
    }
}

export default PasswordInput
