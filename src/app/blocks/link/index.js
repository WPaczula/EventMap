import React from 'react'
import PropTypes from 'prop-types'
import { StyledLink } from './style'

const Link = ({
  to = '', children, onClick, className,
}) => (
  <StyledLink to={to} onClick={onClick} className={className}>
    {children}
  </StyledLink>
)

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default Link
