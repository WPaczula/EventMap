import {
  GET_TOKENS,
  STORE_TOKENS,
  FAILED_TO_GET_TOKENS,
  CLEAR_TOKENS,
} from './constants'

export const getAccessToken = (email, password) => ({ type: GET_TOKENS, email, password })
export const storeTokens = tokens => ({ type: STORE_TOKENS, tokens })
export const storeTokensError = error => ({ type: FAILED_TO_GET_TOKENS, error })
export const clearTokens = () => ({ type: CLEAR_TOKENS })
