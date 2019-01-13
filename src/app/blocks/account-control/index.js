import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import {
  getAccessToken,
  logOut,
  createAccount,
  handleError,
  handleRegister,
  socialLogin,
} from '../../data/user/actions'
import {
  selectIsUserSignedIn,
  selectUnhandledRegister,
  selectError,
  selectUnhandledError,
  selectUsersId,
} from '../../data/user/selectors'
import AccountControl from './component'

const mapStateToProps = createSelector(
  selectIsUserSignedIn,
  selectUsersId,
  selectUnhandledRegister,
  selectError,
  selectUnhandledError,
  (isUserLoggedIn,
    usersId,
    unhandledRegister,
    error,
    unhandledError) => ({
    usersId,
    isUserLoggedIn,
    unhandledRegister,
    error,
    unhandledError,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    handleError,
    handleRegister,
    logIn: getAccessToken,
    logOut,
    register: createAccount,
    socialLogin,
  },
  dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(AccountControl)
