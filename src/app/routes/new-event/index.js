import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { selectCategories } from '../../data/category/selectors'
import AddEventPage from './component'
import { createNewEvent, clearNewEvent } from '../../data/event/actions'
import { selectNewEvent, selectNewEventError } from '../../data/event/selectors'

const mapStateToProps = createSelector(
  selectCategories,
  selectNewEvent,
  selectNewEventError,
  (categories, id, error) => ({
    categories: categories && categories.map(c => ({
      label: c.name,
      value: c._id,
    })).asMutable(),
    id,
    didNewEventFail: !!error,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  createNewEvent,
  clearNewEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddEventPage)
