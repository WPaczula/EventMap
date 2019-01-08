import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { selectCategories } from '../../data/category/selectors'
import EditEventPage from './component'
import {
  clearUpdateEventFlag, updateEvent, loadEvent, updateLoadedEvent,
} from '../../data/event/actions'
import { selectEvent, selectEventId } from './selectors'
import { selectUpdateEventError, selectUpdateEvent } from '../../data/event/selectors'

const mapStateToProps = createSelector(
  selectCategories,
  selectEvent,
  selectEventId,
  selectUpdateEventError,
  selectUpdateEvent,
  (categories, event, id, error, updateEventId) => ({
    categories: categories && categories.map(c => ({
      label: c.name,
      value: c._id,
    })).asMutable(),
    event,
    id,
    didUpdateFail: !!error,
    successfulyEdited: updateEventId === id,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  clearUpdateEventFlag,
  updateEvent,
  loadEvent,
  updateLoadedEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage)
