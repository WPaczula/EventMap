import styled, { css } from 'styled-components'
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

  ${props => props.loading && css`
    height: 8.43rem;
  `}
`

export const EventsTitle = styled.h2`
  width: 100vw;
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
  background-color: lightgray;
  margin: 1em 0;
`

export const Scroller = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
`

export const EventsSection = styled.div`
  display: flex;
  
  & > * {
    flex: 0 0 auto;
  }
`
