import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledInput from './style'

class Input extends Component {
    static propTypes = {
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }

    handleChange = (input) => {
      const { onChange } = this.props
      const { target } = input
      onChange(target.value)
    }

    render() {
      const {
        value,
        type,
        placeholder,
        icon,
      } = this.props

      return (
        <StyledInput icon={icon}>
          <label>{icon}</label>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={this.handleChange}
            required
          />
        </StyledInput>
      )
    }
}

export default Input
