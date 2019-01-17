import { takeLatest, call, put } from 'redux-saga/effects'
import { LOAD_TERMS_REQUESTED } from './constants'
import { termsLoaded, termsLoadingError } from './actions'

export function* fetchTerms(api) {
  try {
    const terms = yield call(api.loadTerms)

    yield put(termsLoaded(terms))
  } catch (e) {
    yield put(termsLoadingError(e))
  }
}

export default function* globalSaga(api) {
  yield takeLatest(LOAD_TERMS_REQUESTED, fetchTerms, api)
}
