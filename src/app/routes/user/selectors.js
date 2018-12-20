import { createSelector } from 'reselect'
import { selectUserSelector } from '../../data/user/selectors'
import { selectUsersEventSelector } from '../../data/event/selectors'

export const selectUserId = (state, props) => props.match.params.userId

export const selectUser = createSelector(
  selectUserId,
  selectUserSelector,
  (id, selectUserById) => selectUserById(id),
)

export const selectUsersEvents = createSelector(
  selectUserId,
  selectUsersEventSelector,
  (id, selectUserEvents) => selectUserEvents(id),
)
