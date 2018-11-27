import { createSelector } from 'reselect'

const selectCategoryState = state => state.category

export const selectCategories = createSelector(
  selectCategoryState,
  categoriesState => categoriesState.categories,
)
