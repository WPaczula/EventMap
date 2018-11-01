import styled from 'styled-components'
import { secondaryColor, secondaryColorDark } from '../../../style/colors'
import media from '../../../style/media'

export const StyledLoginButton = styled.button`
  background: ${secondaryColor};
  color: white;
  border: 2px solid ${secondaryColorDark};
  border-radius: 5em;
  font-weight: 800;
  padding: 1em 2em;
  margin: 1em;
  margin-left: auto;
  line-height: 0em;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;


  ${media.fromDesktop`
    padding: 1em 4em;
  `}

  &:hover {
    background: ${secondaryColorDark}
  }
`
