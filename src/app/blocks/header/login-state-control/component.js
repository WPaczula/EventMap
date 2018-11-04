import React from 'react'
import PropTypes from 'prop-types'
import { StyledAccountLink } from './style'
import LogIn from './log-in/index'
import LogOut from './log-out/index'
// Zrob z tego klase
// Link Login | Register dla zalogowanego
// Logout dla niezalogowanego
// onClick w login => this.setState({ popup: popupTypes.login })
//  w render this.state.popup && this.state.popup === popupTypes.login && <LoginPopup />
// gdzie popup ma w sobie <Modal />
const AccountControl = ({ isUserLoggedIn, logIn, logOut }) => (!isUserLoggedIn
  ? (
    <LogIn />
  ) : (
    <LogOut />
  )
)

AccountControl.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
}
export default AccountControl
