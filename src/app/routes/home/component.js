import React from 'react'
import PropTypes from 'prop-types'
import SearchMap from './search-map'
import {
  StyledHome,
  CtaButton,
} from './style'

const Home = ({ isUserSignedIn }) => (
  <StyledHome>
    { isUserSignedIn && <CtaButton to="/new-event">New event!</CtaButton>}
    <SearchMap />
    <CtaButton to="/search">Search</CtaButton>
  </StyledHome>
)

Home.propTypes = {
  isUserSignedIn: PropTypes.bool,
}

export default Home
