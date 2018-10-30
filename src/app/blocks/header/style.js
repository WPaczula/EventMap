import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import media from '../../style/media'
import { primaryColorLight, primaryColor, primaryColorDark } from '../../style/colors'

export const headerSize = (scale = 1) => `${4.2 * scale}em`

export const HeaderContainer = styled.header`
  display: block;
`

export const Navigation = styled.nav`
  height: ${headerSize()};
  width: 100%;
  background: ${primaryColorDark};
  box-shadow: 0 0.25em 0.25em 0 rgba(0, 0, 0, 0.14);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: flex-end;
`

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;

  ${media.upToDesktop`
    height: ${headerSize(3)};
    overflow: hidden;
    transition: height .5s;
    position: absolute;
    width: 100%;
    top: ${headerSize()};
    background: ${primaryColor};
    flex-direction: column;

    ${props => props.hidden && css`
      height: 0;
    `}
  `}
`

export const MenuItem = styled.li`
  text-align: center;
  flex: 1;
  line-height: ${headerSize()};
  text-transform: uppercase;
  cursor: pointer;
  transition: all .2s ease;
  color: #fff;
  display: flex;
  background: ${props => (props.active ? primaryColorLight : 'unset')};

  &:hover {
    background: ${primaryColorLight};
  }
`

export const NavigationLink = styled(Link)`
  flex: 1;
  color: #fff;
  text-decoration: none;
`
