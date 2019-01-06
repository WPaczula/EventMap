import styled from 'styled-components'
import { secondaryColor } from '../../../style/colors'

export const MapTitle = styled.h1`
  position: absolute;
  top: 0;
  width: 100vw;
  background-color: ${secondaryColor};
  color: white;
  font-size: 2rem;
  left: -50vw;
  margin-left: 50%;
  padding: 1.5rem;
`

export const MapTitleContainer = styled.div`
  position: relative;
  height: 3rem;
  padding: 3rem;
`
