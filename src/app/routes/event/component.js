import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Map from './map'
import Address from '../../blocks/address'
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
  Cost,
  MoreInfo,
} from './style'

class EventPage extends Component {
  static propTypes = {
    isUserSignedIn: PropTypes.bool.isRequired,
    loadEvent: PropTypes.func.isRequired,
    event: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      ownerId: PropTypes.string.isRequired,
      ownerName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      externalUrl: PropTypes.string.isRequired,
      startDate: PropTypes.number.isRequired,
      endDate: PropTypes.number.isRequired,
      address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        postalCode: PropTypes.string.isRequired,
        buildingNumber: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }),
      cost: PropTypes.number,
    }),
  }

  componentDidMount() {
    const { event, loadEvent } = this.props

    if (!event) {
      loadEvent()
    }
  }

  render() {
    const { event, isUserSignedIn } = this.props

    const position = event && [event.latitude, event.longitude]
    const now = new Date()
    const didStart = event.startDate - now > 0

    return (
      event
        ? (
          <EventPageLayout>
            <Header>
              <Image src={event.photoUrl || ''} alt={event.title} />
              <Title>{event.title}</Title>
            </Header>
            <Content>
              <Description>
                {event.description}
                {event.externalUrl && (
                <MoreInfo href={event.externalUrl} target="_blank">
                  More information...
                </MoreInfo>
                )}
              </Description>
              <InfoPanel>
                <Author to={`/user/${event.ownerId}`}> {event.ownerName}</Author>
                <Address
                  {...event.address}
                />
                {
                  event.cost && (
                  <Cost>
                    {event.cost} zł
                  </Cost>
                  )
              }
                { isUserSignedIn && didStart && (
                <SignUpButton>
                  Join now
                </SignUpButton>
                ) }
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
