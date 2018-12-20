import { createSelector } from 'reselect'
import { didTokenExpire } from './utils'

const selectUserState = state => state.user

export const selectTokens = createSelector(
  selectUserState,
  userState => userState.tokens,
)

export const selectAccessToken = createSelector(
  selectTokens,
  userTokenInfo => userTokenInfo && userTokenInfo.access_token,
)

export const selectIsUserSignedIn = createSelector(
  selectTokens,
  tokens => !!(tokens && !didTokenExpire(tokens.expires)),
)

export const selectUnhandledRegister = createSelector(
  selectUserState,
  userState => userState.unhandledRegister,
)

export const selectError = createSelector(
  selectUserState,
  userState => userState.error,
)

export const selectUnhandledError = createSelector(
  selectUserState,
  userState => userState.unhandledError,
)

export const selectUserSelector = createSelector(
  selectUserState,
  userState => id => userState.data && userState.data[id],
)

export const selectUserErrorSelector = id => createSelector(
  selectUserState,
  userState => userState.data && userState.data[id] && userState.data[id].error,
)
