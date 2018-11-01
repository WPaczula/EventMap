import { expectSaga, matchers } from 'redux-saga-test-plan'
import Cookie from '../../../lib/cookie'
import { COOKIE_NAME } from '../constants'
import {
  getAccessToken,
  clearTokens,
} from '../saga'
import {
  selectTokens,
} from '../selectors'
import {
  storeTokens,
  storeTokensError,
} from '../actions'

describe('user', () => {
  describe('sagas', () => {
    describe('clearTokens', () => {
      it('should clear cookies.', () => expectSaga(clearTokens)
        .call(Cookie.remove, COOKIE_NAME)
        .run())
    })

    describe('getAccessToken', () => {
      it('should not do anything if tokens are saved.', () => {
        const api = {
          getTokens: jest.fn(),
        }

        return expectSaga(getAccessToken, api)
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

        return expectSaga(getAccessToken, api)
          .provide([
            [matchers.select(selectTokens), undefined],
          ])
          .call(api.getTokens)
          .put(storeTokens(tokens))
          .call(Cookie.set, COOKIE_NAME, JSON.stringify(tokens))
          .run()
      })

      it('should put error action.', () => {
        const error = new Error()
        const api = {
          getTokens: jest.fn().mockImplementation(() => { throw error }),
        }

        return expectSaga(getAccessToken, api)
          .provide([
            [matchers.select(selectTokens), undefined],
          ])
          .put(storeTokensError(error))
          .run()
      })
    })
  })
})
