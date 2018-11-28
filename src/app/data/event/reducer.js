import Immutable from 'seamless-immutable'
import makeReducer from '../../lib/store'
import { 
  FETCH_CATEGORY_EVENTS_SUCCEEDED, 
  FETCH_CATEGORY_EVENTS_FAILED,
  FETCH_EVENT_SUCCEEDED,
  FETCH_EVENT_FAILED,
 } from './constants'

const initialState = Immutable({
  byCategory: null,
  byId: null,
})

const handlers = {
  [FETCH_CATEGORY_EVENTS_SUCCEEDED]: (state, { categoryId, events }) => state.setIn(['byCategory', categoryId], events),
  [FETCH_CATEGORY_EVENTS_FAILED]: (state, { categoryId, error }) => state.setIn(['byCategory', categoryId, 'error'], error),

  [FETCH_EVENT_SUCCEEDED]: (state, { id, event }) => state.setIn(['byId', id], event),
  [FETCH_EVENT_FAILED]: (state, { id, error }) => state.setIn(['byId', id, 'error'], error),
}

export default makeReducer(handlers, initialState)
