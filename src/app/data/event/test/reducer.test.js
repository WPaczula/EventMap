import Immutable from 'seamless-immutable'
import reducer from '../reducer'
import {
  categoryEventsLoaded,
  categoryEventsLoadingError,
  eventLoaded,
  eventLoadingError,
  signedUpForEvent,
  signedUpFOrEventFailed,
  gaveUpEvent,
  giveUpEventFailed,
  handleEventError,
  fetchMapEventsSucceeded,
  fetchMapEventsFailed,
  createEventSucceeded,
  createEventFailed,
  clearNewEvent,
  updateEventSucceeded,
  updateEventFailed,
  updateLoadedEvent,
} from '../actions'

describe('event reducer', () => {
  const makeState = (opts = {}) => {
    const {
      byCategory = null,
      byId = null,
      map = null,
      newEvent = null,
      updateEvent = null,
    } = opts

    return Immutable({
      byCategory,
      byId,
      map,
      newEvent,
      updateEvent,
    })
  }

  it('should have initial state', () => {
    const prevState = undefined
    const action = { type: '@@INIT' }

    const nextState = reducer(prevState, action)

    expect(nextState).toEqual(makeState())
  })

  it('should store events by category after proper action.', () => {
    const events = [{}, {}, {}]
    const categoryId = 'id'
    const action = categoryEventsLoaded(categoryId, events)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ byCategory: { [categoryId]: events } }))
  })

  it('should store error in proper category after fetching error.', () => {
    const error = new Error()
    const categoryId = 'id'
    const action = categoryEventsLoadingError(categoryId, error)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ byCategory: { [categoryId]: { error } } }))
  })

  it('should store event by id after proper action.', () => {
    const event = {}
    const id = 'id'
    const action = eventLoaded(id, event)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ byId: { [id]: event } }))
  })

  it('should store error after event fetching error.', () => {
    const error = new Error()
    const id = 'id'
    const action = eventLoadingError(id, error)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ byId: { [id]: { error } } }))
  })

  it('should save information about signing to an event.', () => {
    const event = {}
    const id = 'id'
    const action = signedUpForEvent(id)

    const state = reducer(makeState({ byId: { [id]: event } }), action)

    expect(state).toEqual(makeState({ byId: { [id]: { ...event, signed: true } } }))
  })

  it('should save error when sign in failed.', () => {
    const error = new Error()
    const id = 'id'
    const action = signedUpFOrEventFailed(id, error)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ byId: { [id]: { error } } }))
  })

  it('should clear signing in after user gives up event.', () => {
    const event = {}
    const id = 'id'
    const action = gaveUpEvent(id)

    const state = reducer(makeState({ byId: { [id]: event } }), action)

    expect(state).toEqual(makeState({ byId: { [id]: { ...event, signed: false } } }))
  })

  it('should save error when giving up failed.', () => {
    const error = new Error()
    const id = 'id'
    const action = giveUpEventFailed(id, error)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ byId: { [id]: { error } } }))
  })

  it('should clear error when handled.', () => {
    const id = 'id'
    const action = handleEventError(id)

    const state = reducer(makeState({ byId: { [id]: { error: {} } } }), action)

    expect(state).toEqual(makeState({ byId: { [id]: { error: undefined } } }))
  })

  it('should store map events after succeed action fired.', () => {
    const events = [{}, {}, {}]
    const action = fetchMapEventsSucceeded(events)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ map: events }))
  })

  it('should store error when map fetch failed.', () => {
    const error = new Error()
    const action = fetchMapEventsFailed(error)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ map: { error } }))
  })

  it('should store an id of a new event.', () => {
    const id = 'id'
    const action = createEventSucceeded(id)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ newEvent: id }))
  })

  it('should store error if new event cant be made.', () => {
    const error = new Error()
    const action = createEventFailed(error)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ newEvent: { error } }))
  })

  it('should clear new event flag after proper action.', () => {
    const action = clearNewEvent()

    const state = reducer(makeState({ newEvent: 'id' }), action)

    expect(state).toEqual(makeState())
  })

  it('should store id of newly updated event.', () => {
    const id = 'id'
    const action = updateEventSucceeded(id)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ updateEvent: id }))
  })

  it('should store error if one happened when updating.', () => {
    const error = new Error()
    const action = updateEventFailed(error)

    const state = reducer(makeState(), action)

    expect(state).toEqual(makeState({ updateEvent: { error } }))
  })

  it('should update event by id when users update was succesful.', () => {
    const event = {
      title: 'title',
    }
    const newEvent = {
      title: 'new title',
    }
    const id = 'id'
    const action = updateLoadedEvent(id, newEvent)

    const state = reducer(makeState({ byId: { [id]: event } }), action)

    expect(state.byId[id].title).toBe(newEvent.title)
  })
})
