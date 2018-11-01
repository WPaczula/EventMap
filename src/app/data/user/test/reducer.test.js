import Immutable from 'seamless-immutable'
import reducer from '../reducer'
import {
  storeTokens,
  storeTokensError,
  clearTokens,
} from '../actions'

describe('user', () => {
  describe('reducer', () => {
    const makeState = (opts = {}) => {
      const { tokens = null, error = undefined } = opts

      return Immutable({
        tokens,
        error,
      })
    }

    it('should have initial state', () => {
      const prevState = undefined
      const action = { type: '@@INIT' }

      const nextState = reducer(prevState, action)

      expect(nextState).toEqual(makeState())
    })

    it('should store tokens.', () => {
      const prevState = makeState()
      const tokens = {}
      const action = storeTokens(tokens)

      const nextState = reducer(prevState, action)

      expect(nextState).toEqual(makeState({ tokens }))
    })

    it('should store get togens error.', () => {
      const prevState = makeState()
      const error = {}
      const action = storeTokensError(error)

      const nextState = reducer(prevState, action)

      expect(nextState).toEqual(makeState({ error }))
    })

    it('should clear tokens.', () => {
      const prevState = makeState({ tokens: {} })
      const action = clearTokens()

      const nextState = reducer(prevState, action)

      expect(nextState).toEqual(makeState())
    })
  })
})
