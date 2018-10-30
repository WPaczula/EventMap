import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { primaryColorRealDark, primaryColorLight } from '../../style/colors'

export const headerSize = (scale = 1) => `${4.2 * scale}em`

export const StyledHeader = styled.div`
  color: white;
  text-align: center;
  font-size: 2em;
  height: ${headerSize()};
  background-color: ${primaryColorRealDark};
  position: fixed;
  width: 100%;
`

export const NavigationLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1em;

  &:hover {
    color: ${primaryColorLight};
  }
`
