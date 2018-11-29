import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { secondaryColorLight, secondaryColor } from '../../style/colors'

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: ${secondaryColorLight};
  font-weight: 800;

  &:hover {
    color: ${secondaryColor};
    text-decoration: underline;
    cursor: pointer; 
  }
`
