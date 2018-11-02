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
