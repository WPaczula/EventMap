import { expectSaga, matchers } from 'redux-saga-test-plan'
import {
  fetchCategoryEvents, fetchEvent, signUpForEvent, giveUpEvent,
} from '../saga'
import {
  loadCategoryEvents,
  categoryEventsLoaded,
  categoryEventsLoadingError,
  loadEvent,
  eventLoaded,
  eventLoadingError,
  signedUpForEvent,
  tryToSignUpForEvent,
  signedUpFOrEventFailed,
  tryToGiveUpEvent,
  gaveUpEvent,
  giveUpEventFailed,
} from '../actions'
import { selectAccessToken } from '../../user/selectors'

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
    const token = {}

    return expectSaga(fetchEvent, api, action)
      .provide([
        [matchers.select(selectAccessToken), token],
      ]).select(selectAccessToken)
      .call(api.getEvent, id, token)
      .put(eventLoaded(id, event))
      .run()
  })

  it('should put error action if fetch fails.', () => {
    const error = new Error()
    const api = { getEvent: jest.fn().mockImplementation(() => { throw error }) }
    const id = 'id'
    const action = loadEvent(id)

    return expectSaga(fetchEvent, api, action)
      .provide([
        [matchers.select(selectAccessToken), {}],
      ])
      .put(eventLoadingError(id, error))
      .run()
  })
})

describe('sign up for event saga', () => {
  it('should select tokens and call api', () => {
    const tokens = {}
    const api = { signUpForEvent: jest.fn() }
    const id = 'id'
    const action = tryToSignUpForEvent(id)

    return expectSaga(signUpForEvent, api, action)
      .provide([
        [matchers.select(selectAccessToken), tokens],
      ])
      .select(selectAccessToken)
      .call(api.signUpForEvent, id, tokens)
      .run()
  })

  it('should put success action when signed up for event.', () => {
    const id = 'id'
    const api = { signUpForEvent: jest.fn() }
    const action = tryToSignUpForEvent(id)

    return expectSaga(signUpForEvent, api, action)
      .provide([
        [matchers.select(selectAccessToken), {}],
      ])
      .put(signedUpForEvent(id))
      .run()
  })

  it('should store error when ', () => {
    const id = 'id'
    const error = new Error()
    const api = { signUpForEvent: jest.fn().mockImplementation(() => { throw error }) }
    const action = tryToSignUpForEvent(id)

    return expectSaga(signUpForEvent, api, action)
      .provide([
        [matchers.select(selectAccessToken), {}],
      ])
      .put(signedUpFOrEventFailed(id, error))
      .run()
  })
})

describe('give up event saga', () => {
  it('should select tokens and call api', () => {
    const tokens = {}
    const api = { giveUpEvent: jest.fn() }
    const id = 'id'
    const action = tryToGiveUpEvent(id)

    return expectSaga(giveUpEvent, api, action)
      .provide([
        [matchers.select(selectAccessToken), tokens],
      ])
      .select(selectAccessToken)
      .call(api.giveUpEvent, id, tokens)
      .run()
  })

  it('should put success action when signed up for event.', () => {
    const id = 'id'
    const api = { giveUpEvent: jest.fn() }
    const action = tryToGiveUpEvent(id)

    return expectSaga(giveUpEvent, api, action)
      .provide([
        [matchers.select(selectAccessToken), {}],
      ])
      .put(gaveUpEvent(id))
      .run()
  })

  it('should store error when ', () => {
    const id = 'id'
    const error = new Error()
    const api = { giveUpEvent: jest.fn().mockImplementation(() => { throw error }) }
    const action = tryToGiveUpEvent(id)

    return expectSaga(giveUpEvent, api, action)
      .provide([
        [matchers.select(selectAccessToken), {}],
      ])
      .put(giveUpEventFailed(id, error))
      .run()
  })
})
