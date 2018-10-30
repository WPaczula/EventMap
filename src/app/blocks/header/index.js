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
import routes from '../../routes'

class Header extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      menuHidden: true,
    }
  }

  toggleMenuHidden = (value) => {
    const { searchHidden } = this.state

    this.setState({ menuHidden: value })
    if (!searchHidden) this.toggleSearchHidden(true)
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

export default withRouter(Header)
