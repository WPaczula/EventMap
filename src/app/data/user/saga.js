import {
  put, call, takeLatest,
} from 'redux-saga/effects'
import { GET_TOKENS } from './constants'
import { storeTokens, storeTokensError } from './actions'

function* getAccessToken(api) {
  try {
    const tokens = yield call(api.getTokens)

    yield put(storeTokens(tokens))
  } catch (e) {
    yield put(storeTokensError(e))
  }
}

function* userSaga(api) {
  yield takeLatest(GET_TOKENS, getAccessToken, api)
}

export default userSaga
