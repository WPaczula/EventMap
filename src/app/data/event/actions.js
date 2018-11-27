import {
  FETCH_CATEGORY_EVENTS,
  FETCH_CATEGORY_EVENTS_SUCCEEDED,
  FETCH_CATEGORY_EVENTS_FAILED,
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
