import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { selectIsUserSignedIn } from '../../data/user/selectors'
import HomePage from './component'
import { selectPopularEvents } from '../../data/event/selectors'
import { loadPopularEvents } from '../../data/event/actions'

const mapStateToProps = createSelector(
  selectIsUserSignedIn,
  selectPopularEvents,
  (isUserSignedIn, popularEvents) => ({
    isUserSignedIn,
    popularEvents,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  loadPopularEvents,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
