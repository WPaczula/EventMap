import styled from 'styled-components'
import media from '../../style/media'

export const CategoriesPageLayout = styled.div`
  font-size: 5em;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 1rem;

  ${media.fromTablet`
    margin: 0 5rem;
  `}
`
