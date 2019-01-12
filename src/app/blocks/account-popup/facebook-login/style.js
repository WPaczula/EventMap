import styled from 'styled-components'
import Button from '../../button'

const facebookColor = '#4267B2'

export const FacebookButton = styled(Button)`
  background-color: ${facebookColor};
  border-color: white;
  border-radius: 4px;
  display: block;
  margin: 1.5rem auto;

  &:hover {
    background-color: ${facebookColor};
    border-color: white;
  }
`
