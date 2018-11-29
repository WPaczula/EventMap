import { expectSaga } from 'redux-saga-test-plan'
import { fetchCategoryEvents, fetchEvent } from '../saga'
import {
  loadCategoryEvents,
  categoryEventsLoaded,
  categoryEventsLoadingError,
  loadEvent,
  eventLoaded,
  eventLoadingError,
} from '../actions'

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

describe('fetch event saga', () => {
  it('should call api and put success action if api succeeds.', () => {
    const event = {}
    const api = { getEvent: jest.fn().mockReturnValue(event) }
    const id = 'id'
    const action = loadEvent(id)

    return expectSaga(fetchEvent, api, action)
      .call(api.getEvent, id)
      .put(eventLoaded(id, event))
      .run()
  })

  it('should put error action if fetch fails.', () => {
    const error = new Error()
    const api = { getEvent: jest.fn().mockImplementation(() => { throw error }) }
    const id = 'id'
    const action = loadEvent(id)

    return expectSaga(fetchEvent, api, action)
      .call(api.getEvent, id)
      .put(eventLoadingError(id, error))
      .run()
  })
})
