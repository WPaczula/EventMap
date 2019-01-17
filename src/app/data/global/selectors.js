import { createSelector } from 'reselect'

const selectGlobalState = state => state.global

export const selectTerms = createSelector(
  selectGlobalState,
  termsState => termsState.terms,
)
