import React, { Component } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import Hamburger from './hamburger'
import LoginStateControl from './login-state-control'
import Logo from '../logo/index'
import {
  HeaderContainer,
  Navigation,
  MenuItem,
  MenuList,
  NavigationLink,
  ControlPanel,
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

    this.ref = React.createRef()

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

    if (this.ref.current) this.ref.current.toggle(false)

    if (!menuHidden) this.toggleMenuHidden(true)
  }

  render() {
    const { menuHidden } = this.state
    const { routes } = this.props

    return (
      <HeaderContainer>
        <ControlPanel>
          <Logo />
          <LoginStateControl />
        </ControlPanel>
        <Navigation>
          <Hamburger onClick={() => this.toggleMenuHidden(!menuHidden)} ref={this.ref} />
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
