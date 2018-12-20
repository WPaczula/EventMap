import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import UserPage from './component'
import { selectUser, selectUsersEvents, selectUserId } from './selectors'
import { getUsersData } from '../../data/user/actions'
import { getUsersEvents } from '../../data/event/actions'

const mapStateToProps = createSelector(
  selectUserId,
  selectUser,
  selectUsersEvents,
  (id, userData, events) => ({
    id,
    userData,
    events,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsersData,
  getUsersEvents,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage))
