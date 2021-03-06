import styled, { css } from 'styled-components'
import media from '../../style/media'

export const EventTileContainer = styled.div`
  height: 26em;
  width: 18em;
  position: relative;  
  margin: 1em;
  cursor: pointer;
  border-radius: 0.5em;
  box-shadow: 0 0.25em 0.25em 0 rgba(0,0,0,0.14);

  ${media.upToTablet`
    height: 10em;
    width: 7em;
    margin: 0.5em;
  `}

  ${props => props.loading && css`
    background-color: lightgrey;
    color: lightgrey;
  `}

  ${props => !props.loading && css`
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
  `}
`

export const InfoContainer = styled.div`
  z-index: 2;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.5em;
`
export const Shower = styled.div`
  transition: top 0.5s;
  top: calc(100% - 3em);
  width: 100%;
  height: 100%;
  position: absolute;

  ${media.upToTablet`
    top: calc(100% - 2rem);
  `}

  ${props => props.isVisible && css`
    top: 50%;

    ${media.upToTablet`
      top: 0;
    `}

    &:hover {
      & > ${Title}, 
      & > ${Description} { 
        text-decoration: underline; 
      }
    }
  `}
`


export const Title = styled.h1`
  color: white;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background-color: #00000061;
  padding: 0.5em;
  text-align: center;

  ${media.upToTablet`
    font-size: 0.8rem;
  `}
`

export const Description = styled.p`
  padding: 0 1em;
  color: white;
  max-height: 7.2em;
  overflow: hidden;

  ${media.upToTablet`
    font-size: 0.7rem;
    max-height: 6.2rem;
    line-height: 1;
  `}
`

export const Owner = styled.p`
  padding: 1em;
  color: white;
  position: absolute;
  top: 10em;
  right: 0;
`

export const EventImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 0.5em;
  object-fit: cover
`
