import styled from 'styled-components'
import { primaryColorRealDark } from '../../style/colors'

export const headerSize = (scale = 1) => `${4.2 * scale}em`

export const StyledHeader = styled.div`
  color: white;
  text-align: center;
  height: ${headerSize()};
  background-color: ${primaryColorRealDark};
  position: fixed;
  width: 100%;
`
