import {
  takeLatest, call, put, select,
} from 'redux-saga/effects'
import {
  FETCH_CATEGORY_EVENTS,
  FETCH_EVENT,
  SIGN_UP_FOR_EVENT,
  GIVE_UP_EVENT,
  FETCH_USERS_EVENTS,
} from './constants'
import {
  categoryEventsLoaded,
  categoryEventsLoadingError,
  eventLoaded,
  eventLoadingError,
  signedUpFOrEventFailed,
  signedUpForEvent,
  gaveUpEvent,
  giveUpEventFailed,
  usersEventsLoaded,
  usersEventsLoadingError,
} from './actions'
import { selectAccessToken } from '../user/selectors'

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
    const token = yield select(selectAccessToken)
    const event = yield call(api.getEvent, id, token)

    yield put(eventLoaded(id, event))
  } catch (e) {
    yield put(eventLoadingError(id, e))
  }
}

export function* signUpForEvent(api, { id }) {
  try {
    const token = yield select(selectAccessToken)
    yield call(api.signUpForEvent, id, token)

    yield put(signedUpForEvent(id))
  } catch (e) {
    yield put(signedUpFOrEventFailed(id, e))
  }
}

export function* giveUpEvent(api, { id }) {
  try {
    const token = yield select(selectAccessToken)
    yield call(api.giveUpEvent, id, token)

    yield put(gaveUpEvent(id))
  } catch (e) {
    yield put(giveUpEventFailed(id, e))
  }
}

export function* fetchUsersEvents(api, { id }) {
  try {
    const events = yield call(api.getUsersEvents, id)

    yield put(usersEventsLoaded(id, events))
  } catch (e) {
    yield put(usersEventsLoadingError(id, e))
  }
}

export default function* eventSaga(api) {
  yield takeLatest(FETCH_CATEGORY_EVENTS, fetchCategoryEvents, api)
  yield takeLatest(FETCH_EVENT, fetchEvent, api)
  yield takeLatest(SIGN_UP_FOR_EVENT, signUpForEvent, api)
  yield takeLatest(GIVE_UP_EVENT, giveUpEvent, api)
  yield takeLatest(FETCH_USERS_EVENTS, fetchUsersEvents, api)
}
