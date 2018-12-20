import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EventTile from '../../blocks/event-tile'
import {
  UserPageLayout,
  UserName,
  UsersEvents,
  EventsSection,
  EventsTitle,
} from './style'

class UserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    userData: PropTypes.string,
    events: PropTypes.array,
    getUsersData: PropTypes.func.isRequired,
    getUsersEvents: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      visibleId: null,
    }
  }

  componentDidMount() {
    const {
      id,
      userData,
      events,
      getUsersData,
      getUsersEvents,
    } = this.props

    if (!userData) {
      getUsersData(id)
    }

    if (!events) {
      getUsersEvents(id)
    }
  }

  navigate = () => {
    const { visibleId } = this.state
    const { history } = this.props

    history.push(`/event/${visibleId}`)
  }

  setVisible = (id) => {
    this.setState({ visibleId: id })
  }

  render() {
    const { userData, events } = this.props
    const { visibleId } = this.state

    return (
      <UserPageLayout>
        <UserName>
          { userData }
        </UserName>
        <EventsTitle>
          {'User\'s events'}
        </EventsTitle>
        <EventsSection>
          {
            events && events.map(e => (
              <EventTile
                {...e}
                key={e.id}
                isVisible={visibleId === e.id}
                navigate={this.navigate}
                setVisible={this.setVisible}
              />
            ))
          }
        </EventsSection>
      </UserPageLayout>
    )
  }
}

export default UserPage
