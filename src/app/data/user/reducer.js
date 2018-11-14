import Immutable from 'seamless-immutable'
import {
  STORE_TOKENS,
  FAILED_TO_GET_TOKENS,
  COOKIE_NAME,
  CLEAR_TOKENS,
  ACCOUNT_CREATION_FAILED,
  ACCOUNT_CREATED,
  CREATE_ACCOUNT,
  HANDLE_ERROR,
  HANDLE_REGISTERED,
} from './constants'
import Cookie from '../../lib/cookie'

const initialState = {
  tokens: null,
  unhandledError: false,
  unhandledRegister: false,
}

const handlers = {
  [STORE_TOKENS]: (state, { tokens }) => state.set('tokens', tokens),
  [FAILED_TO_GET_TOKENS]: (state, { error }) => state
    .set('error', error)
    .set('unhandledError', true),
  [CLEAR_TOKENS]: state => state.set('tokens', null),

  [CREATE_ACCOUNT]: state => state
    .set('unhandledRegister', false)
    .set('unhandledError', false),
  [ACCOUNT_CREATED]: state => state.set('unhandledRegister', true),
  [ACCOUNT_CREATION_FAILED]: (state, { error }) => state
    .set('error', error)
    .set('unhandledError', true),

  [HANDLE_REGISTERED]: state => state.set('unhandledRegister', false),
  [HANDLE_ERROR]: state => state.set('unhandledError', false),
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
