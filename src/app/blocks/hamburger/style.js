import styled, { css } from 'styled-components'
import media from '../../style/media'

export const HamburgerWrapper = styled.div`
${media.upToDesktop`
  display: block;
  flex: 0 0 auto;
  float: right;
`}

display: none;
width: 35px;
height: 30px;
margin: auto 10px;
position: relative;
cursor: pointer;
`

export const HamburgerLine = styled.span`
background-color:#FFF;
position: absolute;
border-radius: 2px;
transition: .3s cubic-bezier(.8, .5, .2, 1.4);
width:100%;
height: 4px;

&:nth-child(1) {
  top:0px;
  left: 0px;
}

&:nth-child(2) {
  top:13px;
  left: 0px;
}

&:nth-child(3) {
  bottom:0px;
  left: 0px;
}

${props => props.active && css`
  &:nth-child(1) {
    transform: rotate(45deg) scaleX(0.7);
    top: 13PX;
    left: -8px;
  }

  &:nth-child(2) {
    transform: scale(0);
    transition-duration: 50ms
  }

  &:nth-child(3) {
    transform: rotate(-45deg) scaleX(0.7);
    top: 13PX;
    left: 7px;
  }
`}
`
