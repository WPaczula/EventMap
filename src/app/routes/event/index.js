import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { selectEvent, selectEventId } from './selectors'
import {
  loadEvent,
  tryToSignUpForEvent,
  tryToGiveUpEvent,
  handleEventError,
} from '../../data/event/actions'
import EventPage from './component'
import { selectIsUserSignedIn } from '../../data/user/selectors'

const mapStateToProps = createSelector(
  selectEvent,
  selectEventId,
  selectIsUserSignedIn,
  (event, id, isUserSignedIn) => ({ event, id, isUserSignedIn }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  loadEvent,
  tryToSignUpForEvent,
  tryToGiveUpEvent,
  handleEventError,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)
