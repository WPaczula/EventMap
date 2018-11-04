import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledButton from './style'

class Submit extends Component {
    state = { }

static propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

render() {
  const { onSubmit } = this.props
  return (<StyledButton><input type="submit" onClick={onSubmit} /></StyledButton>)
}
}

export default Submit
