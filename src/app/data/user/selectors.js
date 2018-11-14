import { createSelector } from 'reselect'
import { didTokenExpire } from './utils'

const selectUserState = state => state.user

export const selectTokens = createSelector(
  selectUserState,
  userState => userState.tokens,
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
