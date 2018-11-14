import React from 'react'
import PropTypes from 'prop-types'
import StyledContent from './style'

const Content = ({ children, short }) => (
  <StyledContent short={short}>
    {children}
  </StyledContent>
)

Content.propTypes = {
  children: PropTypes.node.isRequired,
  short: PropTypes.bool,
}

export default Content
