import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import StyledDiv from './style'

export default class Modal extends Component {
    div = document.createElement('div');

    static propTypes = {
      children: PropTypes.node.isRequired,
    }

    constructor(props) {
      super(props)
      this.modal = null
    }

    componentWillMount() {
      this.modal = document.getElementById('modal-root')
    }

    render() {
      const { children } = this.props
      return createPortal(<StyledDiv>{children}</StyledDiv>, this.modal)
    }
}
