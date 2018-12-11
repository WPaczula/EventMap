import {
  put, call, takeLatest, select,
} from 'redux-saga/effects'
import Cookie from '../../lib/cookie'
import {
  GET_TOKENS, COOKIE_NAME, CLEAR_TOKENS, CREATE_ACCOUNT,
} from './constants'
import {
  storeTokens, storeTokensError, accountCreated, accountCreationFailed,
} from './actions'
import { selectTokens } from './selectors'

export function* getAccessToken(api, window, action) {
  try {
    const savedTokens = yield select(selectTokens)
    if (!savedTokens) {
      const tokens = yield call(api.getTokens, action.email, action.password)

      yield put(storeTokens(tokens))
      yield call(Cookie.set, COOKIE_NAME, JSON.stringify(tokens))
      window.location.reload()
    }
  } catch (e) {
    yield put(storeTokensError(e))
  }
}

export function* clearTokens() {
  yield call(Cookie.remove, COOKIE_NAME)
}

export function* createAccount(api, action) {
  try {
    yield call(api.createAccount, action.email, action.nickname, action.password)

    yield put(accountCreated())
  } catch (e) {
    yield put(accountCreationFailed(e))
  }
}

function* userSaga(api) {
  yield takeLatest(GET_TOKENS, getAccessToken, api, window)
  yield takeLatest(CLEAR_TOKENS, clearTokens)
  yield takeLatest(CREATE_ACCOUNT, createAccount, api)
}

export default userSaga
