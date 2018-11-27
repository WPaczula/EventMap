import {
  FETCH_CATEGORIES_LIST_REQUESTED,
  FETCH_CATEGORIES_LIST_SUCCEEDED,
  FETCH_CATEGORIES_LIST_FAILED,
} from './constants'

export const fetchCategoriesList = () => ({ type: FETCH_CATEGORIES_LIST_REQUESTED })
export const categoriesListLoaded = categories => ({
  type: FETCH_CATEGORIES_LIST_SUCCEEDED,
  categories,
})
export const categoriesListLoadingFailed = error => ({ type: FETCH_CATEGORIES_LIST_FAILED, error })
