import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_CATEGORY_EVENTS, FETCH_EVENT } from './constants'
import { categoryEventsLoaded, categoryEventsLoadingError, eventLoaded, eventLoadingError } from './actions'

export function* fetchCategoryEvents(api, { categoryId }) {
  try {
    const events = yield call(api.getCategoryEvents, categoryId)

    yield put(categoryEventsLoaded(categoryId, events))
  } catch (e) {
    yield put(categoryEventsLoadingError(categoryId, e))
  }
}

export function* fetchEvent(api, { id }) {
  try {
    const event = yield call(api.getEvent, id)

    yield put(eventLoaded(id, event))
  } catch (e) {
    yield put(eventLoadingError(id, e))
  }
}

export default function* eventSaga(api) {
  yield takeLatest(FETCH_CATEGORY_EVENTS, fetchCategoryEvents, api)
}
