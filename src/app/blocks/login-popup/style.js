import styled from 'styled-components'
import { secondaryColorLight, secondaryColorDark } from '../../style/colors'

export const StyledPopup = styled.div`
    background-image:
    linear-gradient(to bottom, ${secondaryColorLight}, ${secondaryColorDark});
    box-shadow: 0 0.25em 0.25em 0 rgba(0, 0, 0, 0.14);
    position: absolute;
    width: 20%;
    height: 60%;
    min-width: 40em;
    min-height: 40em;
    margin: auto;
    border-radius: 5%;
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
  opacity: 0.8;
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
export const LoginLogo = styled.div`
    margin: auto;
    text-align: center;
    padding: 10%;
`
