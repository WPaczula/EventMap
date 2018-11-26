import { createSelector } from 'reselect'

const selectEventState = state => state.event

export const selectCategoryEventsSelector = createSelector(
  selectEventState,
  eventState => categoryId => eventState.byCategory && eventState.byCategory[categoryId],
)
