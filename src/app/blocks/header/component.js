import React, { Component } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import Hamburger from './hamburger'
import LoginStateControl from '../account-control'
import {
  HeaderContainer,
  Navigation,
  MenuItem,
  MenuList,
  NavigationLink,
  ControlPanel,
  LogoContainer,
} from './style'

const makeCategoryLink = key => `/categories/${key}`

class Header extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    short: PropTypes.bool,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    loadCategories: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.ref = React.createRef()

    this.state = {
      menuHidden: true,
    }
  }

  componentWillMount() {
    const { loadCategories, categories } = this.props

    if (!categories) {
      loadCategories()
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
    const { categories, short, location } = this.props

    return (
      <HeaderContainer>
        <ControlPanel>
          <LogoContainer />
          {
            !short && <LoginStateControl />
          }
        </ControlPanel>
        { !short && (
        <Navigation>
          <Hamburger onClick={() => this.toggleMenuHidden(!menuHidden)} ref={this.ref} />
          <MenuList hidden={menuHidden}>
            <MenuItem
              key="index"
              active={location.pathname === '/'}
              onClick={this.hideMobileMenu}
            >
              <NavigationLink to="/">
                Home
              </NavigationLink>
            </MenuItem>
            {
            categories && categories
              .filter((c, i) => i < 5)
              .map(category => (
                <MenuItem
                  key={category.key}
                  active={this.isNavigationItemChosen(category.key)}
                  onClick={this.hideMobileMenu}
                >
                  <NavigationLink
                    to={makeCategoryLink(category.key)}
                  >
                    {category.name}
                  </NavigationLink>
                </MenuItem>
              ))
            }
            <MenuItem
              key="other-categories"
              active={location.pathname === '/categories'}
              onClick={this.hideMobileMenu}
            >
              <NavigationLink to="/categories">
                Other
              </NavigationLink>
            </MenuItem>
          </MenuList>
        </Navigation>
        )
        }
      </HeaderContainer>
    )
  }
}

export const HeaderComponent = Header
export default withRouter(Header)
