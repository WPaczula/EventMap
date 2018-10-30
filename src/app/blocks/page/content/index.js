import React from 'react'
import PropTypes from 'prop-types'
import StyledContent from './style'

const Content = ({ children }) => (
  <StyledContent>
    {children}
  </StyledContent>
)

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
