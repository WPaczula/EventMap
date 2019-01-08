import styled from 'styled-components'
import { secondaryColorLight } from '../../style/colors'
import media from '../../style/media'
import Button from '../button'

export const AccountControlContainer = styled.div`
  ${media.fromTablet`
    padding-right: 0.9em;
  `}

  margin-left: auto;
  color: ${secondaryColorLight};
  padding: 0.9em 0.1em;
  font-size: 1.2em;
`

export const AccountButton = styled(Button)`
  margin: 0 0.2rem;
  padding: 1rem;
`
