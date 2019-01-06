import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import SearchMap from './search-map'
import Link from '../../blocks/link'
import { secondaryColorDark, secondaryColor } from '../../style/colors'
import { hover } from '../../style/pseudo'

const StyledHome = styled.div`
  text-align: center;
`

const NewEventButton = styled(Link)`
  background: ${secondaryColor};
  color: white;
  border: 2px solid ${secondaryColorDark};
  border-radius: 5em;
  font-weight: 800;
  padding: 1em 2em;
  margin: 1em auto;
  line-height: 0em;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  display: block;
  flex: 0;
  max-width: 20rem;

  ${hover`
    background: ${secondaryColorDark};
  `}

  ${props => props.inverse && css`
    background: white;
    color: ${secondaryColor};
    border-color: white;

    ${hover`
      color: white;
      border-color: ${secondaryColorDark};
    `}
  `}
`

const Home = ({ isUserSignedIn }) => (
  <StyledHome>
    Home
    { isUserSignedIn && <NewEventButton to="/new-event">New event!</NewEventButton>}
    <SearchMap />
  </StyledHome>
)

Home.propTypes = {
  isUserSignedIn: PropTypes.bool,
}

export default Home
