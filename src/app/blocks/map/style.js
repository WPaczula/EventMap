import styled, { css } from 'styled-components'
import { secondaryColorLight } from '../../style/colors'
import media from '../../style/media'

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
