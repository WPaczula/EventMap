import { createSelector } from 'reselect'
import { selectEventSelector } from '../../data/event/selectors'

export const selectEventId = (state, props) => props.match.params.eventId

export const selectEvent = createSelector(
  selectEventId,
  selectEventSelector,
  (id, selectEventById) => selectEventById(id),
)
