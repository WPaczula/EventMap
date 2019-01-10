import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchPage from './component'
import { selectCategories } from '../../data/category/selectors'
import { createSelector } from '../../../../node_modules/reselect'
import { selectSearchEvents } from '../../data/event/selectors'
import { searchEvents } from '../../data/event/actions'

const mapStateToProps = createSelector(
  selectCategories,
  selectSearchEvents,
  (categories, events) => ({
    categories: categories && categories.map(c => ({
      label: c.name,
      value: c._id,
    })).asMutable(),
    events,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  searchEvents,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
