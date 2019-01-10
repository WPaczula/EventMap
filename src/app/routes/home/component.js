import React from 'react'
import PropTypes from 'prop-types'
import SearchMap from './search-map'
import {
  StyledHome,
  CtaButton,
} from './style'

const Home = ({ isUserSignedIn }) => (
  <StyledHome>
    Welcome home 🙌
    { isUserSignedIn && <CtaButton to="/new-event">New event!</CtaButton>}
    <CtaButton to="/search">Search</CtaButton>
    <SearchMap />
  </StyledHome>
)

Home.propTypes = {
  isUserSignedIn: PropTypes.bool,
}

export default Home
