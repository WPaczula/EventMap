import {
  GET_TOKENS,
  STORE_TOKENS,
  FAILED_TO_GET_TOKENS,
  CLEAR_TOKENS,
  CREATE_ACCOUNT,
  ACCOUNT_CREATED,
  ACCOUNT_CREATION_FAILED,
  HANDLE_ERROR,
  HANDLE_REGISTERED,
} from './constants'

export const getAccessToken = (email, password) => ({ type: GET_TOKENS, email, password })
export const storeTokens = tokens => ({ type: STORE_TOKENS, tokens })
export const storeTokensError = error => ({ type: FAILED_TO_GET_TOKENS, error })
export const clearTokens = () => ({ type: CLEAR_TOKENS })

export const createAccount = (email, nickname, password) => ({
  type: CREATE_ACCOUNT, email, nickname, password,
})
export const accountCreated = () => ({ type: ACCOUNT_CREATED })
export const accountCreationFailed = error => ({ type: ACCOUNT_CREATION_FAILED, error })
export const handleRegister = () => ({ type: HANDLE_REGISTERED })

export const handleError = () => ({ type: HANDLE_ERROR })
