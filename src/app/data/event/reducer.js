import Immutable from 'seamless-immutable'
import makeReducer from '../../lib/store'
import { FETCH_CATEGORY_EVENTS_SUCCEEDED, FETCH_CATEGORY_EVENTS_FAILED } from './constants'

const initialState = Immutable({
  byCategory: undefined,
})

const handlers = {
  [FETCH_CATEGORY_EVENTS_SUCCEEDED]: (state, { categoryId, events }) => state.setIn(['byCategory', categoryId], events),
  [FETCH_CATEGORY_EVENTS_FAILED]: (state, { categoryId, error }) => state.setIn(['byCategory', categoryId, 'error'], error),
}

export default makeReducer(handlers, initialState)
