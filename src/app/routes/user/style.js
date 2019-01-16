import styled, { css } from 'styled-components'
import { secondaryColor } from '../../style/colors'
import Button from '../../blocks/button'

export const UserPageLayout = styled.div`
  display: block;
`

export const UserName = styled.div`
  position: relative;
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

export const EventsSection = styled.div`
  display: flex;
  
  & > * {
    flex: 0 0 auto;
  }
`

export const DeleteButton = styled(Button)`
  position: absolute;
  right: 1rem;
  top: 0;
`
