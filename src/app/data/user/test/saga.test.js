import { expectSaga, matchers } from 'redux-saga-test-plan'
import Cookie from '../../../lib/cookie'
import { COOKIE_NAME, GET_TOKENS } from '../constants'
import {
  getAccessToken,
  logout,
  getUsersData,
  deleteUserAccount,
} from '../saga'
import {
  selectTokens, selectAccessToken, selectUsersId,
} from '../selectors'
import {
  storeTokens,
  storeTokensError,
  loadUsersData,
  usersDataLoaded,
  userDataLoadingFailed,
  deleteAccount,
  deleteAccountSucceeded,
  deleteAccountFailed,
} from '../actions'

describe('user', () => {
  describe('sagas', () => {
    describe('clearTokens', () => {
      it('should clear cookies.', () => {
        const api = { logoutUser: jest.fn() }
        const token = 'token'
        const window = { location: { reload: jest.fn() } }

        return expectSaga(logout, api, window)
          .provide([
            [matchers.select(selectAccessToken), token],
          ])
          .call(api.logoutUser, token)
          .call(Cookie.remove, COOKIE_NAME)
          .run()
      })
    })

    describe('getAccessToken', () => {
      it('should not do anything if tokens are saved.', () => {
        const api = {
          getTokens: jest.fn(),
        }
        const email = 'email'
        const password = 'password'
        const action = { type: GET_TOKENS, email, password }


        return expectSaga(getAccessToken, api, action)
          .provide([
            [matchers.select(selectTokens), {}],
          ]).select(selectTokens)
          .not.call(api.getTokens)
          .run()
      })

      it('should store tokens in cookies and put success action.', () => {
        const tokens = {}
        const api = {
          getTokens: jest.fn().mockReturnValueOnce(tokens),
        }
        const email = 'email'
        const password = 'password'
        const action = { type: GET_TOKENS, email, password }

        return expectSaga(getAccessToken, api, action)
          .provide([
            [matchers.select(selectTokens), undefined],
          ])
          .call(api.getTokens, email, password)
          .put(storeTokens(tokens))
          .call(Cookie.set, COOKIE_NAME, JSON.stringify(tokens))
          .run()
      })

      it('should put error action.', () => {
        const error = new Error()
        const api = {
          getTokens: jest.fn().mockImplementation(() => { throw error }),
        }
        const email = 'email'
        const password = 'password'
        const action = { type: GET_TOKENS, email, password }
        const window = { location: { reload: jest.fn() } }

        return expectSaga(getAccessToken, api, window, action)
          .provide([
            [matchers.select(selectTokens), undefined],
          ])
          .put(storeTokensError(error))
          .run()
      })
    })
  })

  describe('get users data', () => {
    it('should call api for users data.', () => {
      const api = {
        getUsersData: jest.fn(),
      }
      const id = 'id'
      const action = loadUsersData(id)

      return expectSaga(getUsersData, api, action)
        .call(api.getUsersData, id)
        .run()
    })

    it('should put success action if users data is stored.', () => {
      const data = {}
      const api = {
        getUsersData: jest.fn().mockReturnValue(data),
      }
      const id = 'id'
      const action = loadUsersData(id)

      return expectSaga(getUsersData, api, action)
        .put(usersDataLoaded(id, data))
        .run()
    })

    it('should put error action if users data failed to load.', () => {
      const error = new Error()
      const api = {
        getUsersData: jest.fn().mockImplementation(() => { throw error }),
      }
      const id = 'id'
      const action = loadUsersData(id)

      return expectSaga(getUsersData, api, action)
        .put(userDataLoadingFailed(id, error))
        .run()
    })
  })
})

describe('delete account saga', () => {
  it('should select tokens and shoot to api with them', () => {
    const tokens = {}
    const api = { deleteUsersAccount: jest.fn() }
    const action = deleteAccount()
    const id = 'id'

    return expectSaga(deleteUserAccount, api, action)
      .provide([
        [matchers.select(selectAccessToken), tokens],
        [matchers.select(selectUsersId), id],
      ])
      .call(api.deleteUsersAccount, tokens)
      .run()
  })

  it('should put action if call succeeds.', () => {
    const tokens = {}
    const api = { deleteUsersAccount: jest.fn() }
    const action = deleteAccount()
    const id = 'id'

    return expectSaga(deleteUserAccount, api, action)
      .provide([
        [matchers.select(selectAccessToken), tokens],
        [matchers.select(selectUsersId), id],
      ])
      .call(api.deleteUsersAccount, tokens)
      .call(Cookie.remove, COOKIE_NAME)
      .put(deleteAccountSucceeded(id))
      .run()
  })

  it('should put fail action if call fails.', () => {
    const tokens = {}
    const error = new Error()
    const api = { deleteUsersAccount: jest.fn().mockImplementation(() => { throw error }) }
    const action = deleteAccount()
    const id = 'id'

    return expectSaga(deleteUserAccount, api, action)
      .provide([
        [matchers.select(selectAccessToken), tokens],
        [matchers.select(selectUsersId), id],
      ])
      .call(api.deleteUsersAccount, tokens)
      .put(deleteAccountFailed(error))
      .run()
  })
})
