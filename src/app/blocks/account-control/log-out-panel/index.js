import React from 'react'
import PropTypes from 'prop-types'
import Link from '../../link'

const LogIn = ({ logOut }) => (
  <Link to="" onClick={logOut}>
    Logout
  </Link>
)

LogIn.propTypes = {
  logOut: PropTypes.func.isRequired,
}

export default LogIn
