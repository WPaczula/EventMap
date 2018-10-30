import React from 'react'
import { StyledHeader, NavigationLink } from './style'
import routes from '../../routes'

const Header = () => (
  <StyledHeader>
    {
      routes.map(r => (
        <NavigationLink to={r.path} key={r.key}>{r.key}</NavigationLink>))
    }
  </StyledHeader>
)

export default Header
