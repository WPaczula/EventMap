import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  EventTileContainer,
  Title,
  Description,
  Owner,
  EventImage,
} from './style'

class EventTile extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired, // TODO change to eventId
    title: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
  }

  render() {
    const {
      id,
      title,
      ownerId,
      description,
      photoUrl,
      ownerName,
    } = this.props

    return (
      <EventTileContainer>
        <Link to={`/event/${id}`}>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <EventImage alt={`${title}`} src={photoUrl} />
          <Owner to={`/user/${ownerId}`}>{ownerName}</Owner>
        </Link>
      </EventTileContainer>
    )
  }
}

const Loading = () => <EventTileContainer loading>...</EventTileContainer>
EventTile.Loading = Loading

export default EventTile
