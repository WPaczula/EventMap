import React from 'react'
import PropTypes from 'prop-types'
import { StyledLink } from './style'

const Link = ({ to = '', children, onClick }) => (
  <StyledLink to={to} onClick={onClick}>
    {children}
  </StyledLink>
)

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Link
