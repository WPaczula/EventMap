import React from 'react'
import PropTypes from 'prop-types'
import { StyledLogo } from './style'

const LogoIcon = ({ className }) => <StyledLogo className={className} />

LogoIcon.propTypes = {
  className: PropTypes.string,
}
export default LogoIcon
