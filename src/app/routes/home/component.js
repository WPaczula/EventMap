import React from 'react'
import PropTypes from 'prop-types'
import SearchMap from './search-map'
import {
  StyledHome,
} from './style'
import ButtonLink from '../../blocks/button-link'

const Home = ({ isUserSignedIn }) => (
  <StyledHome>
    Welcome home 🙌
    { isUserSignedIn && <ButtonLink to="/new-event">New event!</ButtonLink>}
    <SearchMap />
  </StyledHome>
)

Home.propTypes = {
  isUserSignedIn: PropTypes.bool,
}

export default Home
