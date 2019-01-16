import styled from 'styled-components'
import ButtonLink from '../../blocks/button-link'
import { secondaryColor } from '../../style/colors'
import media from '../../style/media'

export const StyledHome = styled.div`
  text-align: center;
`

export const CtaButton = styled(ButtonLink)`
  flex: 0;
  max-width: 30rem;
  padding: 2rem;
  display: block;
  margin: 2rem auto;
  font-size: 2rem;

  ${media.upToTablet`
    max-width: 15rem;
    font-size: 1.5rem;
    padding: 1rem;
  `}
`

export const PopularEventsSection = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex: 0 0 auto;
  }
`

export const Title = styled.h1`
  position: absolute;
  top: 0;
  width: 100vw;
  background-color: ${secondaryColor};
  color: white;
  font-size: 2rem;
  left: -50vw;
  margin-left: 50%;
  padding: 1.5rem;
`

export const TitleContainer = styled.div`
  position: relative;
  height: 3rem;
  padding: 3rem;
`
