import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import CategoriesPage from './component'
import { selectCategories } from '../../data/category/selectors'

const mapStateToProps = createSelector(
  selectCategories,
  categories => ({
    categories,
  }),
)

export default connect(mapStateToProps)(CategoriesPage)
