import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { selectEvent } from './selectors'
import { loadEvent } from '../../data/event/actions'
import EventPage from './component'

const mapStateToProps = createSelector(
  selectEvent,
  // () => ({
  //   event: {
  //     id: 'id',
  //     title: 'Free tango lessons',
  //     ownerId: 'ownersId',
  //     ownerName: 'Senor Pablo',
  //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     photoUrl: 'http://noloneliness.com/wp-content/uploads/2018/09/Leading-and-following-in-Tango3.jpg',
  //     latitude: 51.505,
  //     longitude: -0.09,
  //     externalUrl: 'google.com',
  //   },
  // }),
  event => ({ event }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  loadEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)
