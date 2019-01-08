import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { AccountButton } from '../style'

const LogIn = ({ logOut, usersId, history }) => (
  <>
    <AccountButton onClick={() => history.push(`/user/${usersId}`)}>Profile</AccountButton>
    <AccountButton onClick={logOut}>
      Logout
    </AccountButton>
  </>
)

LogIn.propTypes = {
  logOut: PropTypes.func.isRequired,
  usersId: PropTypes.string.isRequired,
}

export default withRouter(LogIn)
