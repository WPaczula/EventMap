import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchMap from './search-map'
import {
  StyledHome,
  CtaButton,
  PopularEventsSection,
  Title,
  TitleContainer,
} from './style'
import Scroller from '../../blocks/scroller'
import EventTile from '../../blocks/event-tile'
import OfflinePage from '../../../static/error-message'

class Home extends Component {
  static propTypes = {
    loadPopularEvents: PropTypes.func.isRequired,
    popularEvents: PropTypes.array,
    isUserSignedIn: PropTypes.bool,
  }

  constructor(props) {
    super(props)

    this.state = {
      visibleId: null,
    }
  }

  componentDidMount() {
    const { popularEvents, loadPopularEvents } = this.props

    if (!popularEvents) {
      loadPopularEvents()
    }
  }

  navigate = () => {
    const { visibleId } = this.state
    const { history } = this.props

    history.push(`/events/${visibleId}`)
  }

  setVisible = (id) => {
    this.setState({ visibleId: id })
  }

  render() {
    const { isUserSignedIn, popularEvents } = this.props
    const { visibleId } = this.state

    if (popularEvents && popularEvents.offline) {
      return <OfflinePage />
    }

    return (
      <StyledHome>
        <TitleContainer>
          <Title>
            Popular events
          </Title>
        </TitleContainer>
        <Scroller>
          <PopularEventsSection>
            {popularEvents
              ? popularEvents.map(e => (
                <EventTile
                  key={e.id}
                  {...e}
                  isVisible={visibleId === e.id}
                  navigate={this.navigate}
                  setVisible={this.setVisible}
                />
              ))
              : new Array(10).fill().map((e, i) => <EventTile.Loading key={`popular-loading-tile-${i}`} />)
            }
          </PopularEventsSection>
        </Scroller>
        { isUserSignedIn && <CtaButton to="/new-event">New event!</CtaButton>}
        <SearchMap />
        <CtaButton to="/search">Search</CtaButton>
      </StyledHome>
    )
  }
}

export default Home
