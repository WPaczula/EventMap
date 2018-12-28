import {
  FETCH_CATEGORY_EVENTS,
  FETCH_CATEGORY_EVENTS_SUCCEEDED,
  FETCH_CATEGORY_EVENTS_FAILED,
  FETCH_EVENT,
  FETCH_EVENT_SUCCEEDED,
  FETCH_EVENT_FAILED,
  SIGN_UP_FOR_EVENT,
  SIGN_UP_FOR_EVENT_SUCCEEDED,
  SIGN_UP_FOR_EVENT_FAILED,
  GIVE_UP_EVENT,
  GIVE_UP_EVENT_SUCCEEDED,
  GIVE_UP_EVENT_FAILED,
  HANDLE_EVENT_ERROR,
  GET_MAP_EVENTS,
  GET_MAP_EVENTS_SUCCEEDED,
  GET_MAP_EVENTS_FAILED,
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

export const tryToSignUpForEvent = id => ({
  type: SIGN_UP_FOR_EVENT, id,
})
export const signedUpForEvent = id => ({
  type: SIGN_UP_FOR_EVENT_SUCCEEDED, id,
})
export const signedUpFOrEventFailed = (id, error) => ({
  type: SIGN_UP_FOR_EVENT_FAILED, id, error,
})

export const tryToGiveUpEvent = id => ({
  type: GIVE_UP_EVENT, id,
})
export const gaveUpEvent = id => ({
  type: GIVE_UP_EVENT_SUCCEEDED, id,
})
export const giveUpEventFailed = (id, error) => ({
  type: GIVE_UP_EVENT_FAILED, id, error,
})

export const handleEventError = id => ({
  type: HANDLE_EVENT_ERROR, id,
})


export const fetchMapEvents = (lat, lng, rad) => ({
  type: GET_MAP_EVENTS, lat, lng, rad,
})
export const fetchMapEventsSucceeded = events => ({
  type: GET_MAP_EVENTS_SUCCEEDED, events,
})
export const fetchMapEventsFailed = error => ({
  type: GET_MAP_EVENTS_FAILED, error,
})
