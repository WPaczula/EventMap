import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Map from './map'
import MessagePopup from '../../blocks/message-popup'
import Address from '../../blocks/address'
import Times from '../../blocks/times'
import OfflinePage from '../../../static/error-message'
import {
  EventPageLayout,
  Image,
  Header,
  Title,
  Content,
  Description,
  Author,
  InfoPanel,
  ParticipationButton,
  Cost,
  MoreInfo,
  EditEventLink,
} from './style'

class EventPage extends Component {
  static propTypes = {
    isUserSignedIn: PropTypes.bool.isRequired,
    loadEvent: PropTypes.func.isRequired,
    tryToSignUpForEvent: PropTypes.func.isRequired,
    tryToGiveUpEvent: PropTypes.func.isRequired,
    handleEventError: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    usersId: PropTypes.string,
    event: PropTypes.shape({
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
      signed: PropTypes.bool,
      error: PropTypes.string,
    }),
  }

  componentDidMount() {
    const { event, id, loadEvent } = this.props

    if (!event || event.offline) {
      loadEvent(id)
    }
  }

  signIn = () => {
    const { tryToSignUpForEvent, id } = this.props

    tryToSignUpForEvent(id)
  }

  giveUp = () => {
    const { tryToGiveUpEvent, id } = this.props

    tryToGiveUpEvent(id)
  }

  render() {
    const {
      event,
      isUserSignedIn,
      id,
      handleEventError,
      usersId,
    } = this.props

    const position = event && [event.latitude, event.longitude]

    if (event && event.offline) {
      return <OfflinePage />
    }

    return (
      event
        ? (
          <EventPageLayout>
            <Header>
              <Image src={event.photoUrl || ''} alt={event.title} />
              <Title>{event.title}</Title>
              { event && usersId === event.ownerId && (
                <EditEventLink to={`/edit-event/${id}`}>
                  Edit event
                </EditEventLink>
              )
              }
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
                <Times start={event.startDate} end={event.endDate} />
                {
                  typeof event.cost === 'number' && (
                  <Cost>
                    {`${event.cost.toFixed(2)} zł`}
                  </Cost>
                  )
              }
                { isUserSignedIn && (
                <ParticipationButton onClick={event.signed ? this.giveUp : this.signIn}>
                  { event.signed ? 'Leave event' : 'Join now' }
                </ParticipationButton>
                ) }
              </InfoPanel>
            </Content>
            <Map position={position} />
            { event.error && (
            <MessagePopup error unMount={() => { handleEventError(id) }}>
              {event.error.message}
            </MessagePopup>
            )
             }
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
