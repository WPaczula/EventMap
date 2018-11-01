import makeReducer from '../../lib/store'
import {
  STORE_TOKENS,
  FAILED_TO_GET_TOKENS,
} from './constants'

const initialState = {
  tokens: null,
}

const handlers = {
  [STORE_TOKENS]: (state, { tokens }) => state.set('tokens', tokens),
  [FAILED_TO_GET_TOKENS]: (state, { error }) => state.setIn(['token', 'error'], error),
}

export default makeReducer(handlers, initialState)
