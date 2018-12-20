import { createSelector } from 'reselect'

const selectEventState = state => state.event

export const selectCategoryEventsSelector = createSelector(
  selectEventState,
  eventState => categoryId => eventState.byCategory && eventState.byCategory[categoryId],
)

export const selectEventSelector = createSelector(
  selectEventState,
  eventState => id => eventState.byId && eventState.byId[id],
)

export const selectUsersEventSelector = createSelector(
  selectEventState,
  eventState => id => eventState.byUser && eventState.byUser[id],
)
