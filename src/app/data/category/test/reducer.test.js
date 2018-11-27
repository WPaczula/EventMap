import Immutable from 'seamless-immutable'
import reducer from '../reducer'
import { categoriesListLoaded, categoriesListLoadingFailed } from '../actions'

describe('categories reducer', () => {
  const makeState = (opts = {}) => {
    const {
      categories = undefined,
      error = undefined,
    } = opts

    return Immutable({
      categories,
      error,
    })
  }

  it('should have initial state', () => {
    const init = { type: '@@INIT' }

    const state = reducer(undefined, init)

    expect(state).toEqual(makeState())
  })

  it('should save categories if success action was fired.', () => {
    const categories = [{}, {}, {}]
    const prevState = makeState()
    const action = categoriesListLoaded(categories)

    const state = reducer(prevState, action)

    expect(state).toEqual(makeState({ categories }))
  })

  it('should save loading error when categories fail to load.', () => {
    const error = new Error()
    const prevState = makeState()
    const action = categoriesListLoadingFailed(error)

    const state = reducer(prevState, action)

    expect(state).toEqual(makeState({ error }))
  })
})
