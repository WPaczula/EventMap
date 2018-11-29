import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Map from './map'
import {
  EventPageLayout,
  Image,
  Header,
  Title,
  Content,
  Description,
  Author,
  InfoPanel,
  SignUpButton,
} from './style'

class EventPage extends Component {
  static propTypes = {
    loadEvent: PropTypes.func.isRequired,
    event: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ownerId: PropTypes.string.isRequired,
        ownerName: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        externalUrl: PropTypes.string.isRequired,
      }),
    ),
  }

  componentDidMount() {
    const { event, loadEvent } = this.props

    if (!event) {
      loadEvent()
    }
  }

  render() {
    const { event } = this.props

    const position = event && [event.latitude, event.longitude]

    return (
      event
        ? (
          <EventPageLayout>
            <Header>
              <Image src={event.photoUrl} alt={event.title} />
              <Title>{event.title}</Title>
            </Header>
            <Content>
              <Description>{event.description}</Description>
              <InfoPanel>
                <Author>{event.ownerName}</Author>
                <SignUpButton>
                  Join now
                </SignUpButton>
              </InfoPanel>
            </Content>
            <Map position={position} />
          </EventPageLayout>
        )
        : (
          <EventPageLayout>
            <Header loading />
            <Content loading />
            <Map loading />
          </EventPageLayout>
        )
    )
  }
}

export default EventPage
