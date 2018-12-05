import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { selectEvent } from './selectors'
import { loadEvent } from '../../data/event/actions'
import EventPage from './component'
import { selectIsUserSignedIn } from '../../data/user/selectors'

const mapStateToProps = createSelector(
  selectEvent,
  selectIsUserSignedIn,
  (event, isUserSignedIn) => ({ event, isUserSignedIn }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  loadEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)
