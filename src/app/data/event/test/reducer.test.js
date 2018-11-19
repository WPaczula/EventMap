import Immutable from 'seamless-immutable'
import reducer from '../reducer'
import {
  categoryEventsLoaded, categoryEventsLoadingError,
} from '../actions'

describe('event reducer', () => {
  const makeState = (opts = {}) => {
    const {
      byCategory = undefined,
    } = opts

    return Immutable({ byCategory })
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
})
