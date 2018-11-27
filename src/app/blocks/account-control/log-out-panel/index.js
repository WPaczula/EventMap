import React from 'react'
import PropTypes from 'prop-types'
import { AccountButton } from '../style'

const LogIn = ({ logOut }) => (
  <AccountButton onClick={logOut}>
    Logout
  </AccountButton>
)

LogIn.propTypes = {
  logOut: PropTypes.func.isRequired,
}

export default LogIn
