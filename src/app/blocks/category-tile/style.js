import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const CategoryTileLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem; 
  font-weight: 800;
  color: white;
  cursor: pointer;
  padding: 5rem 3rem;
  border-radius: 1rem;
  background-color: #7200caa6;
  flex: 1;
`

export const CategoryTileContainer = styled.div`
  display: flex;
  border-radius: 1rem;
  margin: 1rem 2rem;
  flex: 0 1 25rem;
  box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.14);

  ${props => (props.loading
    ? css`
    background-color: lightgray;
    padding: 5rem 3rem;
    color: lightgray;
  ` : css`
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1200px-Noto_Emoji_KitKat_263a.svg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
  `)}
`
