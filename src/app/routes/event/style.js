import styled, { css } from 'styled-components'
import media from '../../style/media'
import { secondaryColorLight, secondaryColor } from '../../style/colors'
import Button from '../../blocks/button'
import Link from '../../blocks/link'
import ButtonLink from '../../blocks/button-link'

export const EventPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;
`

export const Header = styled.div`
  position: relative;
  width: 100vw;
  height: 20em;

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
  ${props => props.src === '' && css`
    background-color: ${secondaryColor};
  `}

  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Content = styled.div`
  max-width: 75%;
  margin: 1em auto;
  display: flex;
  flex-direction: column;

  ${props => props.loading && css`
    background-color: lightgray;
    width: calc(75% - 2em);
    height: 12em;
    margin-top: 6.25rem;
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

export const MoreInfo = styled.a`
  display: block;
  text-decoration: none;
  color: ${secondaryColorLight};
  font-weight: 800;
  margin-top: 1em;

  &:hover {
    color: ${secondaryColor};
    text-decoration: underline;
    cursor: pointer; 
  }
`

export const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-shadow: 0px 0px 84px -26px rgba(0,0,0,0.53);
  text-align: center;
  justify-content: center;
`

export const Author = styled(Link)`
  &::before {
    content: 'by ';
    color: black;
    font-weight: normal;
    font-size: 0.5em;
  }

  font-weight: 800;
  font-size: 1.5em;
  flex: 0;
`

export const ParticipationButton = styled(Button)`
  flex: 0;
  line-height: 1.2;
  white-space: normal;
  max-width: 9em;
  margin: 1em auto;
  min-height: 5em;
`

export const Cost = styled.p`
  text-align: center;
  margin: 0.5em;
  font-weight: 600;
`

export const MapContainer = styled.div`
  ${media.fromTablet`
    width: calc(75% - 2em);
  `}
  
  border: 2px solid ${secondaryColorLight};
  width: calc(100% - 3rem);
  height: 34rem;
  margin: 1em auto;
  box-shadow: 0px 0px 84px -26px rgba(0,0,0,0.53);

  ${props => props.loading && css`
    background-color: lightgray;
    border: none;
    box-shadow: none;
  `}
`

export const EditEventLink = styled(ButtonLink)`
  position: absolute;
  right: 1.5rem;
  bottom: 0;
  z-index: 10;
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`

export const Tag = styled.div`
  color: white;
  font-weight: bold;
  background: ${secondaryColor};
  flex: 0;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  margin: 0.25rem;
  white-space: nowrap;
`
