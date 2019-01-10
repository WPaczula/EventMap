import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import UserPage from './component'
import { selectUser, selectUserId } from './selectors'
import { selectUsersId as selectUsersOwnId, selectIsAccountDeleted, selectAccountDeletionFailed } from '../../data/user/selectors'
import { loadUsersData, deleteAccount, clearAccountDeletionFailed } from '../../data/user/actions'

const mapStateToProps = createSelector(
  selectUserId,
  selectUser,
  selectUsersOwnId,
  selectIsAccountDeleted,
  selectAccountDeletionFailed,
  (id, userData, ownId, isAccountDeleted, didAccountDeletionFail) => ({
    id,
    userData,
    isOwnPage: ownId === id,
    isAccountDeleted,
    didAccountDeletionFail,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  loadUsersData,
  deleteAccount,
  clearAccountDeletionFailed,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage))
