import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Modal from '../modal'

const appear = keyframes`
  10%, 90% {
    transform: translateY(5em);  
  }

  100% {
    transform: translateY(0);
  }
`

const MessageContainer = styled.div`
  position: fixed;
  top: -5em;
  left: 0;
  right: 0;
  background-image: ${props => (props.error
    ? 'linear-gradient(to bottom, red, 60%, darkred)'
    : 'linear-gradient(to bottom, green, 60%, darkgreen)')};
  padding: 2em;
  font-size: 1em;
  text-align: center;
  color: white;
  font-weight: 800;
  animation: ${appear} 3s linear forwards;
  box-shadow: 0 0.25em 0.25em 0 rgba(0, 0, 0, 0.14);
`

const MessagePopup = ({ children, error, unMount }) => {
  setTimeout(unMount, 3000)

  return (
    <Modal message>
      <MessageContainer error={error}>
        {children}
      </MessageContainer>
    </Modal>
  )
}

MessagePopup.propTypes = {
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
  unMount: PropTypes.func.isRequired,
}

export default MessagePopup
