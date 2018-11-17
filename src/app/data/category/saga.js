import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects'
import {
  FETCH_CATEGORIES_LIST_REQUESTED,
} from './constants'
import {
  categoriesListLoaded, categoriesListLoadingFailed,
} from './actions'

export function* fetchCategoriesListSaga(api) {
  try {
    const categories = yield call(api.getCategories)

    yield put(categoriesListLoaded(categories))
  } catch (e) {
    yield put(categoriesListLoadingFailed(e))
  }
}

function* categoriesSaga(api) {
  yield takeLatest(FETCH_CATEGORIES_LIST_REQUESTED, fetchCategoriesListSaga, api)
}

export default categoriesSaga
