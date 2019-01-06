import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { selectIsUserSignedIn } from '../../data/user/selectors'
import HomePage from './component'

const mapStateToProsp = createSelector(
  selectIsUserSignedIn,
  isUserSignedIn => ({
    isUserSignedIn,
  }),
)

export default connect(mapStateToProsp)(HomePage)
