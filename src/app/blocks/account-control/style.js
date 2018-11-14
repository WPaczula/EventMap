import styled from 'styled-components'
import { secondaryColorLight } from '../../style/colors'
import media from '../../style/media'

export const AccountControlContainer = styled.div`
  ${media.fromTablet`
    padding-right: 0.9em;
  `}

  margin-left: auto;
  color: ${secondaryColorLight};
  padding: 0.9em 0.1em;
  font-size: 1.2em;
`
