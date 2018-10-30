import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HamburgerWrapper, HamburgerLine } from './style'

class Hamburger extends Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  onClick = () => {
    const { onClick } = this.props
    const { active } = this.state

    this.setState({ active: !active })
    onClick()
  }

  render() {
    const { active } = this.state
    const { className } = this.props

    return (
      <HamburgerWrapper className={className} onClick={this.onClick}>
        <HamburgerLine active={active} />
        <HamburgerLine active={active} />
        <HamburgerLine active={active} />
      </HamburgerWrapper>
    )
  }
}

export default Hamburger
