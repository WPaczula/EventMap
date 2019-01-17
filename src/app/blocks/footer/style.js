import styled from 'styled-components'
import {
  primaryColorRealDark, primaryColorDark, primaryColor,
} from '../../style/colors'
import Button from '../button'
import media from '../../style/media'

export const StyledFooter = styled.footer`
  color: white;
  text-align: center;
  background-color: ${primaryColorRealDark};
  width: 100%;
  flex: 0 0 5em;
  position: relative;
`

export const TermsButton = styled(Button)`
  background-color: ${primaryColorDark};
  border-color: ${primaryColorRealDark};
  position: absolute;
  right: 2rem;
  bottom: 0.75rem;

  &:hover {
    background-color: ${primaryColor};
  }
`

export const StyledPopup = styled.div`
  ${media.upToTablet`
    padding: 3rem 2rem;
  `}

  background-image:
  linear-gradient(to bottom, ${primaryColorDark}, 70%, ${primaryColorRealDark});
  box-shadow: 0 0.25em 0.25em 0 rgba(0, 0, 0, 0.14);
  position: absolute;
  color: white;
  padding: 3rem 5rem;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-y: auto;
`
