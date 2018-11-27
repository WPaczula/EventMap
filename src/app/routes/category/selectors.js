import { createSelector } from 'reselect'
import { selectCategoryEventsSelector } from '../../data/event/selectors'

export const selectCategoryId = (state, props) => props.match.params.categoryId

export const selectCategoryEvents = createSelector(
  selectCategoryId,
  selectCategoryEventsSelector,
  (categoryId, selectCategoryEventsById) => selectCategoryEventsById(categoryId),
)
