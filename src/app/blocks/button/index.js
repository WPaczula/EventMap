import styled, { css } from 'styled-components'
import { secondaryColor, secondaryColorDark } from '../../style/colors'
import { hover } from '../../style/pseudo'

const Button = styled.button`
  background: ${secondaryColor};
  color: white;
  border: 2px solid ${secondaryColorDark};
  border-radius: 5em;
  font-weight: 800;
  padding: 1em 2em;
  margin: 1em;
  line-height: 0em;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;

  ${hover`
    background: ${secondaryColorDark};
  `}

  ${props => props.inverse && css`
    background: white;
    color: ${secondaryColor};
    border-color: white;

    ${hover`
      color: white;
      border-color: ${secondaryColorDark};
    `}
  `}
`

export default Button
