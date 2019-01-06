import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import UserPage from './component'
import { selectUser, selectUserId } from './selectors'
import { loadUsersData } from '../../data/user/actions'

const mapStateToProps = createSelector(
  selectUserId,
  selectUser,
  (id, userData) => ({
    id,
    userData,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  loadUsersData,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage))
