import { LOAD_TERMS_REQUESTED, LOAD_TERMS_SUCCEEDED, LOAD_TERMS_FAILED } from './constants'

export const loadTerms = () => ({
  type: LOAD_TERMS_REQUESTED,
})
export const termsLoaded = terms => ({
  type: LOAD_TERMS_SUCCEEDED,
  terms,
})
export const termsLoadingError = error => ({
  type: LOAD_TERMS_FAILED,
  error,
})
