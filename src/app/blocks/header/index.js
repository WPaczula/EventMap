import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { withRouter } from 'react-router'
import Header from './component'
import { selectCategories } from '../../data/category/selectors'
import { fetchCategoriesList } from '../../data/category/actions'

const mapStateToProps = createSelector(
  selectCategories,
  categories => ({ categories }),
)

const mapDispatchToProps = dispatch => bindActionCreators(
  { loadCategories: fetchCategoriesList }, dispatch,
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
