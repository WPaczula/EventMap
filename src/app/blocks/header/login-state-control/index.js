import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { getAccessToken, clearTokens } from '../../../data/user/actions'
import { selectIsUserSignedIn } from '../../../data/user/selectors'
import AccountControl from './component'

const mapStateToProps = createSelector(
  selectIsUserSignedIn,
  isUserLoggedIn => ({
    isUserLoggedIn,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logIn: getAccessToken,
    logOut: clearTokens,
  },
  dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(AccountControl)
