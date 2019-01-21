import styled from 'styled-components'

export const StyledLogo = styled.h1`
  font-weight: 800;
  color: white;
  display: inline;

  &::before {
    content: '🌍';
    display: block;
    font-size: 2rem;
  }
`
