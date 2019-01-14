import { createSelector } from 'reselect'

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
  tokens => !!(tokens && tokens.access_token),
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

export const selectIsAccountDeleted = createSelector(
  selectUserState,
  userState => userState && userState.deleted && typeof userState.deleted === 'boolean',
)

export const selectAccountDeletionFailed = createSelector(
  selectUserState,
  userState => userState && userState.deleted && !!userState.deleted.error,
)
