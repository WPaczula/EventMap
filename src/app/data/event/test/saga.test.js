import { expectSaga } from 'redux-saga-test-plan'
import { fetchCategoryEvents } from '../saga'
import { loadCategoryEvents, categoryEventsLoaded, categoryEventsLoadingError } from '../actions'

describe('fetchCategoryEvents saga', () => {
  it('should call api to load events.', () => {
    const api = { getCategoryEvents: jest.fn() }
    const categoryId = 'id'
    const action = loadCategoryEvents(categoryId)

    return expectSaga(fetchCategoryEvents, api, action)
      .call(api.getCategoryEvents, categoryId)
      .run()
  })

  it('should put success action after fetch succeeds.', () => {
    const events = [{}, {}, {}]
    const api = { getCategoryEvents: jest.fn().mockReturnValue(events) }
    const categoryId = 'id'
    const action = loadCategoryEvents(categoryId)

    return expectSaga(fetchCategoryEvents, api, action)
      .put(categoryEventsLoaded(categoryId, events))
      .run()
  })

  it('should put error action after fetch fails.', () => {
    const error = new Error()
    const api = { getCategoryEvents: jest.fn().mockImplementation(() => { throw error }) }
    const categoryId = 'id'
    const action = loadCategoryEvents(categoryId)

    return expectSaga(fetchCategoryEvents, api, action)
      .put(categoryEventsLoadingError(categoryId, error))
      .run()
  })
})
