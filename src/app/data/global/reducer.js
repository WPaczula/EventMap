import Immutable from 'seamless-immutable'
import makeReducer from '../../lib/store'
import { LOAD_TERMS_SUCCEEDED, LOAD_TERMS_FAILED } from './constants'

const initialState = Immutable({
  terms: null,
})

const handlers = {
  [LOAD_TERMS_SUCCEEDED]: (state, { terms }) => state.set('terms', terms),
  [LOAD_TERMS_FAILED]: (state, { error }) => state.set('error', error),
}

export default makeReducer(handlers, initialState)
