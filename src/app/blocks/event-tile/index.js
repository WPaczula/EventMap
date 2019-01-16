import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  EventTileContainer,
  Title,
  Description,
  Owner,
  EventImage,
  InfoContainer,
  Shower,
} from './style'

class EventTile extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    setVisible: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    isVisible: PropTypes.bool,
  }

  onClick = () => {
    const {
      isVisible, setVisible, navigate, id,
    } = this.props

    if (isVisible) {
      navigate(id)
    } else {
      setVisible(id)
    }
  }

  render() {
    const {
      title,
      description,
      photoUrl,
      ownerName,
      isVisible,
    } = this.props

    return (
      <EventTileContainer onClick={this.onClick}>
        <EventImage alt={`${title}`} src={photoUrl} />
        <InfoContainer>
          <Shower isVisible={isVisible}>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Owner>~{ownerName}</Owner>
          </Shower>
        </InfoContainer>
      </EventTileContainer>
    )
  }
}

const Loading = () => <EventTileContainer loading>...</EventTileContainer>
EventTile.Loading = Loading

export default EventTile
