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

export const selectMapEvents = createSelector(
  selectEventState,
  eventState => eventState && eventState.map,
)

export const selectNewEvent = createSelector(
  selectEventState,
  eventState => eventState && eventState.newEvent,
)
export const selectNewEventError = createSelector(
  selectEventState,
  eventState => eventState && eventState.newEvent && eventState.newEvent.error,
)

export const selectUpdateEvent = createSelector(
  selectEventState,
  eventState => eventState && eventState.updateEvent,
)
export const selectUpdateEventError = createSelector(
  selectUpdateEvent,
  updateEvent => updateEvent && updateEvent.error,
)

export const selectSearchEvents = createSelector(
  selectEventState,
  eventState => eventState && eventState.search,
)

export const selectPopularEvents = createSelector(
  selectEventState,
  eventState => eventState && eventState.popular,
)
