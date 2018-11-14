import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import {
  getAccessToken, clearTokens, createAccount, handleError, handleRegister,
} from '../../data/user/actions'
import {
  selectIsUserSignedIn, selectUnhandledRegister, selectError, selectUnhandledError,
} from '../../data/user/selectors'
import AccountControl from './component'

const mapStateToProps = createSelector(
  selectIsUserSignedIn,
  selectUnhandledRegister,
  selectError,
  selectUnhandledError,
  (isUserLoggedIn, unhandledRegister, error, unhandledError) => ({
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
    logOut: clearTokens,
    register: createAccount,
  },
  dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(AccountControl)
