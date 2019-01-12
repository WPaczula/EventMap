import {
  GET_TOKENS,
  STORE_TOKENS,
  FAILED_TO_GET_TOKENS,
  LOG_OUT,
  CREATE_ACCOUNT,
  ACCOUNT_CREATED,
  ACCOUNT_CREATION_FAILED,
  HANDLE_ERROR,
  HANDLE_REGISTERED,
  GET_USERS_DATA,
  GET_USERS_DATA_SUCCEEDED,
  GET_USERS_DATA_FAILED,
  DELETE_ACCOUNT_REQUESTED,
  DELETE_ACCOUNT_SUCCEEDED,
  DELETE_ACCOUNT_FAILED,
  CLEAR_ACCOUNT_DELETION_FAILED,
} from './constants'

export const getAccessToken = (email, password) => ({ type: GET_TOKENS, email, password })
export const storeTokens = tokens => ({ type: STORE_TOKENS, tokens })
export const storeTokensError = error => ({ type: FAILED_TO_GET_TOKENS, error })
export const logOut = () => ({ type: LOG_OUT })

export const createAccount = (email, nickname, password) => ({
  type: CREATE_ACCOUNT, email, nickname, password,
})
export const accountCreated = () => ({ type: ACCOUNT_CREATED })
export const accountCreationFailed = error => ({ type: ACCOUNT_CREATION_FAILED, error })
export const handleRegister = () => ({ type: HANDLE_REGISTERED })

export const loadUsersData = id => ({ type: GET_USERS_DATA, id })
export const usersDataLoaded = (id, data) => ({ type: GET_USERS_DATA_SUCCEEDED, id, data })
export const userDataLoadingFailed = (id, error) => ({ type: GET_USERS_DATA_FAILED, id, error })

export const handleError = () => ({ type: HANDLE_ERROR })

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT_REQUESTED,
})
export const deleteAccountSucceeded = id => ({
  type: DELETE_ACCOUNT_SUCCEEDED,
  id,
})
export const deleteAccountFailed = error => ({
  type: DELETE_ACCOUNT_FAILED,
  error,
})
export const clearAccountDeletionFailed = () => ({
  type: CLEAR_ACCOUNT_DELETION_FAILED,
})
