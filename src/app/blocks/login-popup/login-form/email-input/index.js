import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledEmail from './style'

class EmailInput extends Component {
    state = { }

    static propTypes = {
      onEmailChange: PropTypes.func.isRequired,
      email: PropTypes.string,
    }

    inputHandler=(input) => {
      const { onEmailChange } = this.props
      onEmailChange(input.target.value)
    }

    render() {
      const { email } = this.props
      return (
        <StyledEmail>
          <input type="email" placeholder="email adress" value={email} onChange={this.inputHandler} required />
          <hr />
        </StyledEmail>
      )
    }
}

export default EmailInput
