import styled, { css } from 'styled-components'
import media from '../../style/media'
import { secondaryColorLight } from '../../style/colors'
import Button from '../../blocks/button'

export const EventPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;
`

export const Header = styled.div`
  position: relative;
  width: 100vw;
  height: 15em;

  &::after {
    display: block;
    position: absolute;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #34515ecf 50%);
    height: 100%;
    width: 100%;
    content: '';
    top: 0;
    z-index: 1;
    border-radius: 0.5em;
  }

  ${props => props.loading && css`
    background-color: lightgray;

    &::after {
      content: '';
      background-image: none;
    }
  `}
`

export const Title = styled.h1`
  z-index: 2;
  color: white;
  position: absolute;
  background-color: #00000061;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Content = styled.div`
  max-width: 75%;
  margin: 2em auto;
  display: flex;
  flex-direction: column;

  ${props => props.loading && css`
    background-color: lightgray;
    width: calc(75% - 2em);
    height: 12em;
  `}

  ${media.fromDesktop`
    flex-direction: row;
  `}

  & > * {
    margin: 1em;
  }
`

export const Description = styled.p`
  padding: 1em 3em;
  text-align: justify;
  box-shadow: 0px 0px 84px -26px rgba(0,0,0,0.53);
  flex: 1;
`

export const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-shadow: 0px 0px 84px -26px rgba(0,0,0,0.53);
  text-align: center;
  max-height: 9em;
  justify-content: center;
`

export const Author = styled.p`
  color: ${secondaryColorLight};
  font-weight: 800;
  font-size: 1.5em;
  flex: 0;
`

export const SignUpButton = styled(Button)`
  flex: 0;
  line-height: 1.2;
  white-space: normal;
  max-width: 7em;
  margin: 1em auto;
  min-height: 5em;
`

export const MapContainer = styled.div`
  ${media.fromTablet`
    width: calc(75% - 2em);
  `}
  
  border: 5px solid ${secondaryColorLight};
  width: 100%;
  height: 34em;
  margin: 1em auto;
  box-shadow: 0px 0px 84px -26px rgba(0,0,0,0.53);

  ${props => props.loading && css`
    background-color: lightgray;
    border: none;
    box-shadow: none;
  `}
`
