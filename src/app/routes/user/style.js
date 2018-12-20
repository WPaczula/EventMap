import styled from 'styled-components'
import { secondaryColor } from '../../style/colors'

export const UserPageLayout = styled.div`
  display: block;
`

export const UserName = styled.div`
  width: 100vw;
  text-align: center;
  font-size: 3em;
  padding: 2rem;
  background-color: ${secondaryColor};
  color: white;
  font-weight: 800;
`

export const EventsTitle = styled.h2`
  width: 100vw;
    text-align: center;
    padding: 2rem;
    font-size: 1.5rem;
    background-color: lightgray;
    margin: 1em 0;
`

export const EventsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 15%;
`
