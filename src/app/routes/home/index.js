import React from 'react'
import styled from 'styled-components'
import SearchMap from './search-map'

const StyledHome = styled.div`
  font-size: 5em;
  text-align: center;
`

const Home = () => (
  <StyledHome>
    Home
    <SearchMap />
  </StyledHome>
)

export default Home
