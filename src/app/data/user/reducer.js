import Immutable from 'seamless-immutable'
import {
  STORE_TOKENS,
  FAILED_TO_GET_TOKENS,
  COOKIE_NAME,
  CLEAR_TOKENS,
} from './constants'
import Cookie from '../../lib/cookie'

const initialState = {
  tokens: null,
}

const handlers = {
  [STORE_TOKENS]: (state, { tokens }) => state.set('tokens', tokens),
  [FAILED_TO_GET_TOKENS]: (state, { error }) => state.set('error', error),
  [CLEAR_TOKENS]: state => state.set('tokens', null),
}

const reducer = (state = Immutable(initialState), action) => {
  let nextState = state

  if (!state.tokens) {
    const cookieJSON = Cookie.get(COOKIE_NAME)
    if (cookieJSON) nextState = state.set('tokens', JSON.parse(cookieJSON))
  }

  const handler = handlers[action.type]
  return handler ? handler(nextState, action) : nextState
}

export default reducer
