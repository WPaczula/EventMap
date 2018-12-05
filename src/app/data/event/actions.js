import {
  FETCH_CATEGORY_EVENTS,
  FETCH_CATEGORY_EVENTS_SUCCEEDED,
  FETCH_CATEGORY_EVENTS_FAILED,
  FETCH_EVENT,
  FETCH_EVENT_SUCCEEDED,
  FETCH_EVENT_FAILED,
} from './constants'

export const loadCategoryEvents = categoryId => ({
  type: FETCH_CATEGORY_EVENTS, categoryId,
})
export const categoryEventsLoaded = (categoryId, events) => ({
  type: FETCH_CATEGORY_EVENTS_SUCCEEDED, categoryId, events,
})
export const categoryEventsLoadingError = (categoryId, error) => ({
  type: FETCH_CATEGORY_EVENTS_FAILED, categoryId, error,
})

export const loadEvent = id => ({
  type: FETCH_EVENT, id,
})
export const eventLoaded = (id, event) => ({
  type: FETCH_EVENT_SUCCEEDED, id, event,
})
export const eventLoadingError = (id, error) => ({
  type: FETCH_EVENT_FAILED, id, error,
})
