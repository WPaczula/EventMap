import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_CATEGORY_EVENTS } from './constants'
import { categoryEventsLoaded, categoryEventsLoadingError } from './actions'

export function* fetchCategoryEvents(api, { categoryId }) {
  try {
    const events = yield call(api.getCategoryEvents, categoryId)
    yield put(categoryEventsLoaded(categoryId, events))
  } catch (e) {
    yield put(categoryEventsLoadingError(categoryId, e))
  }
}

export default function* eventSaga(api) {
  yield takeLatest(FETCH_CATEGORY_EVENTS, fetchCategoryEvents, api)
}
