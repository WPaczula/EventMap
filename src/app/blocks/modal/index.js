import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import StyledDiv from './style'

export default class Modal extends Component {
    div = document.createElement('div');

    static propTypes = {
      children: PropTypes.node.isRequired,
      message: PropTypes.bool,
    }

    constructor(props) {
      super(props)
      this.modal = null
    }

    componentWillMount() {
      const { message } = this.props

      this.modal = message
        ? document.getElementById('message-root')
        : document.getElementById('modal-root')
      if (!document.getElementById('root').classList.contains('blurred')) {
        document.getElementById('root').classList.add('blurred')
      }
    }

    componentWillUnmount() {
      const isModalOpen = document.getElementById('modal-root').hasChildNodes()
      const isMessageOpne = document.getElementById('message-root').hasChildNodes()

      if ((isModalOpen && !isMessageOpne) || (!isModalOpen && isMessageOpne)) {
        document.getElementById('root').classList.remove('blurred')
      }
    }

    render() {
      const { children } = this.props
      return createPortal(<StyledDiv>{children}</StyledDiv>, this.modal)
    }
}
