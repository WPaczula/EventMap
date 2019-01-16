import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { selectEvent, selectEventId } from './selectors'
import {
  loadEvent,
  tryToSignUpForEvent,
  tryToGiveUpEvent,
  handleEventError,
  loadEventParticipants,
} from '../../data/event/actions'
import EventPage from './component'
import { selectIsUserSignedIn, selectUsersId } from '../../data/user/selectors'

const mapStateToProps = createSelector(
  selectEvent,
  selectEventId,
  selectIsUserSignedIn,
  selectUsersId,
  (event, id, isUserSignedIn, usersId) => ({
    event, id, isUserSignedIn, usersId,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  loadEvent,
  tryToSignUpForEvent,
  tryToGiveUpEvent,
  handleEventError,
  loadEventParticipants,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)
