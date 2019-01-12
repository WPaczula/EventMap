import styled from 'styled-components'
import React from 'react'
import { secondaryColorLight, secondaryColorDark } from '../../style/colors'
import media from '../../style/media'
import Logo from '../logo'
import Button from '../button'

export const StyledPopup = styled.div`
  ${media.fromTablet`
    min-width: 26em;
    min-height: 35em;
    width: 20%;
    height: 60%;
    border-radius: 5%;
  `}

  background-image:
  linear-gradient(to bottom, ${secondaryColorLight}, 70%, ${secondaryColorDark});
  box-shadow: 0 0.25em 0.25em 0 rgba(0, 0, 0, 0.14);
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`
export const X = styled.div`
  position: absolute;
  right: 1.5em;
  top: 1.5em;
  width: 2em;
  height: 2em;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    position: absolute;
    left: 1em;
    content: ' ';
    height: 2em;
    width: 0.3em;
    background-color: white;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`
const StyledLogoContainer = styled.div`
    margin: auto;
    margin-top: 2em;
    text-align: center;
    padding: 10%;
`

export const SubmitButton = styled(Button)`
  display: block;
  margin: 4em auto;
  padding: 2em 4em;
`

export const LogoContainer = () => <StyledLogoContainer><Logo /></StyledLogoContainer>

export const createSocialButton = color => styled(Button)`
  background-color: ${color};
  border-color: white;
  border-radius: 4px;
  display: block;
  margin: 1.5rem auto;
  width: 15rem;

  &:hover {
    background-color: ${color};
    border-color: white;
  }
`
