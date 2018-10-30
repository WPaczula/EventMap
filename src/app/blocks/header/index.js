import React, { Component } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import Hamburger from '../hamburger'
import {
  HeaderContainer,
  Navigation,
  MenuItem,
  MenuList,
  NavigationLink,
} from './style'

class Header extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      }).isRequired,
    ),
  }

  constructor(props) {
    super(props)

    this.state = {
      menuHidden: true,
    }
  }

  toggleMenuHidden = (value) => {
    this.setState({ menuHidden: value })
  }

  isNavigationItemChosen = (path) => {
    const { location } = this.props

    return path === location.pathname
  }

  hideMobileMenu = (e) => {
    e.preventDefault()
    const { menuHidden } = this.state

    if (!menuHidden) this.toggleMenuHidden(true)
  }

  render() {
    const { menuHidden } = this.state
    const { routes } = this.props

    return (
      <HeaderContainer>
        <Navigation>
          <Hamburger onClick={() => this.toggleMenuHidden(!menuHidden)} />
          <MenuList hidden={menuHidden}>
            {
            routes
              .map(route => (
                <MenuItem
                  key={route.key}
                  active={this.isNavigationItemChosen(route.path)}
                  onClick={this.hideMobileMenu}
                >
                  <NavigationLink
                    to={route.path}
                  >
                    {route.key}
                  </NavigationLink>
                </MenuItem>
              ))
            }
          </MenuList>
        </Navigation>
      </HeaderContainer>
    )
  }
}

export const HeaderComponent = Header
export default withRouter(Header)
