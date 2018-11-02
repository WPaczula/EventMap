import {
  put, call, takeLatest, select,
} from 'redux-saga/effects'
import Cookie from '../../lib/cookie'
import { GET_TOKENS, COOKIE_NAME, CLEAR_TOKENS } from './constants'
import { storeTokens, storeTokensError } from './actions'
import { selectTokens } from './selectors'

export function* getAccessToken(api) {
  try {
    const savedTokens = yield select(selectTokens)

    if (!savedTokens) {
      const tokens = yield call(api.getTokens)

      yield put(storeTokens(tokens))
      yield call(Cookie.set, COOKIE_NAME, JSON.stringify(tokens))
    }
  } catch (e) {
    yield put(storeTokensError(e))
  }
}

export function* clearTokens() {
  yield call(Cookie.remove, COOKIE_NAME)
}

function* userSaga(api) {
  yield takeLatest(GET_TOKENS, getAccessToken, api)
  yield takeLatest(CLEAR_TOKENS, clearTokens)
}

export default userSaga
