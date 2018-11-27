import { expectSaga } from 'redux-saga-test-plan'
import { fetchCategoriesListSaga } from '../saga'
import { fetchCategoriesList, categoriesListLoaded, categoriesListLoadingFailed } from '../actions'

describe('categories saga', () => {
  it('should call api when such request is made.', () => {
    const api = {
      getCategories: jest.fn(),
    }
    const action = fetchCategoriesList()

    return expectSaga(fetchCategoriesListSaga, api, action)
      .call(api.getCategories)
      .run()
  })

  it('should put success action if request succeeds', () => {
    const categories = [{}, {}, {}]
    const api = {
      getCategories: jest.fn().mockReturnValueOnce(categories),
    }
    const action = fetchCategoriesList()

    return expectSaga(fetchCategoriesListSaga, api, action)
      .put(categoriesListLoaded(categories))
      .run()
  })

  it('should put fail action if request failed', () => {
    const error = new Error()
    const api = {
      getCategories: jest.fn().mockImplementation(() => { throw error }),
    }
    const action = fetchCategoriesList()

    return expectSaga(fetchCategoriesListSaga, api, action)
      .put(categoriesListLoadingFailed(error))
      .run()
  })
})
