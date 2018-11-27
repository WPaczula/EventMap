import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import CategoriesPage from './component'
import { loadCategoryEvents } from '../../data/event/actions'
import { selectCategoryId, selectCategoryEvents } from './selectors'

/* eslint-disable-next-line no-unused-vars */
const mapStateToProps = state => createSelector(
  selectCategoryEvents,
  selectCategoryId,
  (events, categoryId) => ({
    events,
    categoryId,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  loadCategoryEvents,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriesPage))
