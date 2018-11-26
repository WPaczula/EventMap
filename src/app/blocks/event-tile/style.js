import styled, { css } from 'styled-components'
import { secondaryColorLight, primaryColorDark } from '../../style/colors'

export const EventTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${primaryColorDark};
  padding: 2em 12em 2em 3em;
  margin: 1em;
  border-radius: 2em;
  box-shadow: 0 0.25em 0.25em 0 rgba(0,0,0,0.14);
  position: relative;
  text-decoration: none;

  ${props => props.loading && css`
    background-color: lightgray;
    color: lightgray;
    height: 11em;
    width: 23em;
  `}
`

export const Title = styled.h1`
  color: ${secondaryColorLight};
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 0.5em;
`

export const Description = styled.p`
  color: white;
  font-weight: normal;
  margin-bottom: 0.5em;
`

export const Owner = styled.p`
  color: ${secondaryColorLight};
`

export const EventImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0 2em 2em 0;
  height: 100%;
`
