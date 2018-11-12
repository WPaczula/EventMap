import React from 'react'
import PropTypes from 'prop-types'
import LoggedInPanel from './log-in-panel/index'
import LoggedOutPanel from './log-out-panel/index'
import { AccountControlContainer } from './style'

const AccountControl = ({ isUserLoggedIn, logIn, logOut }) => (
  <AccountControlContainer>
    {
    !isUserLoggedIn
      ? (
        <LoggedInPanel logIn={logIn} />
      ) : (
        <LoggedOutPanel logOut={logOut} />
      )
    }
  </AccountControlContainer>
)

AccountControl.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
}
export default AccountControl
