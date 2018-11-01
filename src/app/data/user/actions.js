import {
  GET_TOKENS,
  STORE_TOKENS,
  FAILED_TO_GET_TOKENS,
  CLEAR_TOKENS,
} from './constants'

export const getAccessToken = () => ({ type: GET_TOKENS })
export const storeTokens = tokens => ({ type: STORE_TOKENS, tokens })
export const storeTokensError = error => ({ type: FAILED_TO_GET_TOKENS, error })
export const clearTokens = () => ({ type: CLEAR_TOKENS })
