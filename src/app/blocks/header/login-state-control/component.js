import React from 'react'
import PropTypes from 'prop-types'
import { StyledAccountButton } from './style'

const AccountControl = ({ isUserLoggedIn, logIn, logOut }) => (!isUserLoggedIn
  ? (
    <StyledAccountButton onClick={logIn}>
      Login 🚀
    </StyledAccountButton>
  ) : (
    <StyledAccountButton onClick={logOut}>
      Logout 👻
    </StyledAccountButton>
  )
)

AccountControl.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
}
export default AccountControl
