import Immutable from 'seamless-immutable'
import {
  STORE_TOKENS,
  FAILED_TO_GET_TOKENS,
  COOKIE_NAME,
  ACCOUNT_CREATION_FAILED,
  ACCOUNT_CREATED,
  CREATE_ACCOUNT,
  HANDLE_ERROR,
  HANDLE_REGISTERED,
  GET_USERS_DATA_SUCCEEDED,
  GET_USERS_DATA_FAILED,
  DELETE_ACCOUNT_SUCCEEDED,
  DELETE_ACCOUNT_FAILED,
  CLEAR_ACCOUNT_DELETION_FAILED,
} from './constants'
import Cookie from '../../lib/cookie'

const initialState = {
  tokens: null,
  unhandledError: false,
  unhandledRegister: false,
  byId: null,
  deleted: false,
}

const handlers = {
  [STORE_TOKENS]: (state, { tokens }) => state.set('tokens', tokens),
  [FAILED_TO_GET_TOKENS]: (state, { error }) => state
    .set('error', error)
    .set('unhandledError', true),

  [CREATE_ACCOUNT]: state => state
    .set('unhandledRegister', false)
    .set('unhandledError', false),
  [ACCOUNT_CREATED]: state => state.set('unhandledRegister', true),
  [ACCOUNT_CREATION_FAILED]: (state, { error }) => state
    .set('error', error)
    .set('unhandledError', true),

  [HANDLE_REGISTERED]: state => state.set('unhandledRegister', false),
  [HANDLE_ERROR]: state => state.set('unhandledError', false),

  [GET_USERS_DATA_SUCCEEDED]: (state, { id, data }) => state.setIn(['byId', id], data),
  [GET_USERS_DATA_FAILED]: (state, { id, error }) => state.setIn(['byId', id, 'error'], error),

  [DELETE_ACCOUNT_SUCCEEDED]: (state, { id }) => state
    .set('deleted', true)
    .setIn(['byId', id], null)
    .set('tokens', null),
  [DELETE_ACCOUNT_FAILED]: (state, { error }) => state.setIn(['deleted', 'error'], error),
  [CLEAR_ACCOUNT_DELETION_FAILED]: state => state.set('deleted', false),
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
