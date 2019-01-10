import {
  put, call, takeLatest, select,
} from 'redux-saga/effects'
import Cookie from '../../lib/cookie'
import {
  GET_TOKENS,
  COOKIE_NAME,
  CLEAR_TOKENS,
  CREATE_ACCOUNT,
  GET_USERS_DATA,
  DELETE_ACCOUNT_REQUESTED,
} from './constants'
import {
  storeTokens,
  storeTokensError,
  accountCreated,
  accountCreationFailed,
  usersDataLoaded,
  userDataLoadingFailed,
  deleteAccountSucceeded,
  deleteAccountFailed,
} from './actions'
import { selectTokens, selectAccessToken } from './selectors'

export function* getAccessToken(api, window, action) {
  try {
    const savedTokens = yield select(selectTokens)
    if (!savedTokens) {
      const tokens = yield call(api.getTokens, action.email, action.password)

      yield put(storeTokens(tokens))
      yield call(Cookie.set, COOKIE_NAME, JSON.stringify(tokens))
      /* eslint-disable-next-line */
      if (typeof window !== 'undefined' && window && window.location) window.location.reload()
    }
  } catch (e) {
    yield put(storeTokensError(e))
  }
}

export function* clearTokens() {
  yield call(Cookie.remove, COOKIE_NAME)
}

export function* createAccount(api, { email, nickname, password }) {
  try {
    yield call(api.createAccount, email, nickname, password)

    yield put(accountCreated())
  } catch (e) {
    yield put(accountCreationFailed(e))
  }
}

export function* getUsersData(api, { id }) {
  try {
    const data = yield call(api.getUsersData, id)

    yield put(usersDataLoaded(id, data))
  } catch (e) {
    yield put(userDataLoadingFailed(id, e))
  }
}

export function* deleteUserAccount(api) {
  try {
    const tokens = yield select(selectAccessToken)
    yield call(api.deleteUsersAccount, tokens)

    yield put(deleteAccountSucceeded())
  } catch (e) {
    yield put(deleteAccountFailed(e))
  }
}

function* userSaga(api) {
  yield takeLatest(GET_TOKENS, getAccessToken, api, window)
  yield takeLatest(CLEAR_TOKENS, clearTokens)
  yield takeLatest(CREATE_ACCOUNT, createAccount, api)
  yield takeLatest(GET_USERS_DATA, getUsersData, api)
  yield takeLatest(DELETE_ACCOUNT_REQUESTED, deleteUserAccount, api)
}

export default userSaga
