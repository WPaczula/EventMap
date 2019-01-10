import Immutable from 'seamless-immutable'
import reducer from '../reducer'
import {
  storeTokens,
  storeTokensError,
  clearTokens,
  handleError,
  createAccount,
  accountCreated,
  accountCreationFailed,
  usersDataLoaded,
  userDataLoadingFailed,
  deleteAccountSucceeded,
  deleteAccountFailed,
  clearAccountDeletionFailed,
} from '../actions'

describe('user', () => {
  describe('reducer', () => {
    const makeState = (opts = {}) => {
      const {
        tokens = null,
        unhandledError = false,
        unhandledRegister = false,
        error = undefined,
        byId = null,
        deleted = false,
      } = opts

      return Immutable({
        tokens,
        unhandledError,
        unhandledRegister,
        error,
        byId,
        deleted,
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

      expect(nextState).toEqual(makeState({ error, unhandledError: true }))
    })

    it('should clear tokens.', () => {
      const prevState = makeState({ tokens: {} })
      const action = clearTokens()

      const nextState = reducer(prevState, action)

      expect(nextState).toEqual(makeState())
    })

    it('should clear unhandled errors.', () => {
      const prevState = makeState({ unhandledError: true })
      const action = handleError()

      const nextState = reducer(prevState, action)

      expect(nextState).toEqual(makeState())
    })

    it('should clear state when create account is requrested.', () => {
      const prevState = makeState({ unhandledError: true, unhandledRegister: false })
      const action = createAccount()

      const nextState = reducer(prevState, action)

      expect(nextState).toEqual(makeState())
    })

    it('should set unhandledRegister after registration is completed.', () => {
      const prevState = makeState()
      const action = accountCreated()

      const nextState = reducer(prevState, action)

      expect(nextState).toEqual(makeState({ unhandledRegister: true }))
    })

    it('should set unhandled error.', () => {
      const prevState = makeState()
      const error = {}
      const action = accountCreationFailed(error)

      const nextState = reducer(prevState, action)

      expect(nextState).toEqual(makeState({ error, unhandledError: true }))
    })

    it('should store users data.', () => {
      const usersData = {}
      const id = 'id'
      const action = usersDataLoaded(id, usersData)

      const nextState = reducer(makeState(), action)

      expect(nextState).toEqual(makeState({ byId: { [id]: usersData } }))
    })

    it('should store users loading error.', () => {
      const error = new Error()
      const id = 'id'
      const action = userDataLoadingFailed(id, error)

      const nextState = reducer(makeState(), action)

      expect(nextState).toEqual(makeState({ byId: { [id]: { error } } }))
    })

    it('should store information about deleted user.', () => {
      const action = deleteAccountSucceeded()

      const nextState = reducer(makeState(), action)

      expect(nextState).toEqual(makeState({ deleted: true }))
    })

    it('should store error if one happened after trying to delete an account.', () => {
      const error = new Error()
      const action = deleteAccountFailed(error)

      const nextState = reducer(makeState(), action)

      expect(nextState).toEqual(makeState({ deleted: { error } }))
    })

    it('should clear deleted information after proper action', () => {
      const action = clearAccountDeletionFailed()

      const nextState = reducer(makeState({ deleted: { error: new Error() } }), action)

      expect(nextState).toEqual(makeState({ deleted: false }))
    })
  })
})
