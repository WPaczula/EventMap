import React from 'react'
import PropTypes from 'prop-types'
import LoggedInPanel from './log-in-panel/index'
import LoggedOutPanel from './log-out-panel/index'
import { AccountControlContainer } from './style'
import MessagePopup from '../message-popup'

const AccountControl = ({
  isUserLoggedIn,
  logIn,
  logOut,
  register,
  error,
  unhandledError,
  unhandledRegister,
  handleError,
  handleRegister,
}) => (
  <>
    <AccountControlContainer>
      {
      !isUserLoggedIn
        ? (
          <LoggedInPanel
            logIn={logIn}
            register={register}
            unhandledRegister={unhandledRegister}
          />
        ) : (
          <LoggedOutPanel logOut={logOut} />
        )
      }
    </AccountControlContainer>
    { unhandledRegister
      && (
      <MessagePopup unMount={handleRegister}>
        Succesfully created an account, you can log in now 💪
      </MessagePopup>
      )
    }
    { unhandledError
      && <MessagePopup error unMount={handleError}>{error && error.message}</MessagePopup>
    }
  </>
)

AccountControl.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  isSuccessfulyRegistered: PropTypes.bool,
  error: PropTypes.object,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
}
export default AccountControl
