import { createSelector } from 'reselect'
import { selectUserSelector } from '../../data/user/selectors'

export const selectUserId = (state, props) => props.match.params.userId

export const selectUser = createSelector(
  selectUserId,
  selectUserSelector,
  (id, selectUserById) => selectUserById(id),
)
