import React from 'react'
import PropTypes from 'prop-types'
import SearchMap from './search-map'
import {
  StyledHome,
  NewEventButton,
} from './style'

const Home = ({ isUserSignedIn }) => (
  <StyledHome>
    Welcome home 🙌
    { isUserSignedIn && <NewEventButton to="/new-event">New event!</NewEventButton>}
    <SearchMap />
  </StyledHome>
)

Home.propTypes = {
  isUserSignedIn: PropTypes.bool,
}

export default Home
