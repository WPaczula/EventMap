import styled from 'styled-components'
import Button from '../../button'
import media from '../../../style/media'

export const StyledAccountButton = styled(Button)`
  margin-left: auto;

  ${media.fromDesktop`
    padding: 1em 4em;
  `}
`
