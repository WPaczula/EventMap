import Immutable from 'seamless-immutable'
import makeReducer from '../../lib/store'
import {
  FETCH_CATEGORY_EVENTS_SUCCEEDED,
  FETCH_CATEGORY_EVENTS_FAILED,
  FETCH_EVENT_SUCCEEDED,
  FETCH_EVENT_FAILED,
  SIGN_UP_FOR_EVENT_SUCCEEDED,
  SIGN_UP_FOR_EVENT_FAILED,
  GIVE_UP_EVENT_SUCCEEDED,
  GIVE_UP_EVENT_FAILED,
  HANDLE_EVENT_ERROR,
  GET_MAP_EVENTS_SUCCEEDED,
  GET_MAP_EVENTS_FAILED,
  CREATE_NEW_EVENT_SUCEEDED,
  CREATE_NEW_EVENT_FAILED,
  CLEAR_NEW_EVENT_FLAG,
} from './constants'

const initialState = Immutable({
  byCategory: null,
  byId: null,
  map: null,
  newEvent: null,
})

const handlers = {
  [FETCH_CATEGORY_EVENTS_SUCCEEDED]: (state, { categoryId, events }) => state.setIn(['byCategory', categoryId], events),
  [FETCH_CATEGORY_EVENTS_FAILED]: (state, { categoryId, error }) => state.setIn(['byCategory', categoryId, 'error'], error),

  [FETCH_EVENT_SUCCEEDED]: (state, { id, event }) => state.setIn(['byId', id], event),
  [FETCH_EVENT_FAILED]: (state, { id, error }) => state.setIn(['byId', id, 'error'], error),

  [SIGN_UP_FOR_EVENT_SUCCEEDED]: (state, { id }) => state.setIn(['byId', id, 'signed'], true),
  [SIGN_UP_FOR_EVENT_FAILED]: (state, { id, error }) => state.setIn(['byId', id, 'error'], error),

  [GIVE_UP_EVENT_SUCCEEDED]: (state, { id }) => state.setIn(['byId', id, 'signed'], false),
  [GIVE_UP_EVENT_FAILED]: (state, { id, error }) => state.setIn(['byId', id, 'error'], error),

  [GET_MAP_EVENTS_SUCCEEDED]: (state, { events }) => state.set('map', events),
  [GET_MAP_EVENTS_FAILED]: (state, { error }) => state.setIn(['map', 'error'], error),

  [CREATE_NEW_EVENT_SUCEEDED]: (state, { id }) => state.set('newEvent', id),
  [CREATE_NEW_EVENT_FAILED]: (state, { error }) => state.setIn(['newEvent', 'error'], error),
  [CLEAR_NEW_EVENT_FLAG]: state => state.set('newEvent', null),

  [HANDLE_EVENT_ERROR]: (state, { id }) => state.setIn(['byId', id, 'error'], undefined),
}

export default makeReducer(handlers, initialState)
