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
  userState => id => userState.byId && userState.byId[id],
)

export const selectUserErrorSelector = id => createSelector(
  selectUserState,
  userState => userState.byId && userState.byId[id] && userState.byId[id].error,
)

export const selectUsersId = createSelector(
  selectTokens,
  userState => userState && userState.user_id,
)

export const selectUsersNickname = createSelector(
  selectTokens,
  userState => userState && userState.user_nickname,
)
