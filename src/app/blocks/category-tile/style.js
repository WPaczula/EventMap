import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import media from '../../style/media'
import { secondaryColor } from '../../style/colors'

export const CategoryTileLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem; 
  font-weight: 800;
  color: white;
  cursor: pointer;
  padding: 5rem 0;
  border-radius: 0.5rem;
  flex: 1;

  ${media.upToTablet`
    padding: 2rem 0;
  `}
`

export const CategoryTitle = styled.p`
  text-align: center;
  background-color: #00000061;
  padding: 0.5em;  
`

export const CategoryTileContainer = styled.div`
  display: flex;
  border-radius: 0.5rem;
  margin: 1rem 2rem;
  flex: 0 1 25rem;
  box-shadow: 0 0.25em 0.25em 0 rgba(0,0,0,0.14);

  ${props => (props.loading
    ? css`
    background-color: lightgray;
    padding: 5rem 3rem;
    color: lightgray;
  ` : css`
    background-image: url(${props.photoUrl});
    background-color: ${secondaryColor};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
  `)}
`
