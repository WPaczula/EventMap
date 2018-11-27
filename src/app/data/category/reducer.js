import Immutable from 'seamless-immutable'
import makeReducer from '../../lib/store'
import { FETCH_CATEGORIES_LIST_SUCCEEDED, FETCH_CATEGORIES_LIST_FAILED } from './constants'

const initialState = Immutable({
  categories: undefined,
  error: undefined,
})

const handlers = {
  [FETCH_CATEGORIES_LIST_SUCCEEDED]: (state, { categories }) => state.set('categories', categories),
  [FETCH_CATEGORIES_LIST_FAILED]: (state, { error }) => state.set('error', error),
}

export default makeReducer(handlers, initialState)
