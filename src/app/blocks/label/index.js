import styled from 'styled-components'

const Label = styled.label`
  display: block;
  width: 100vw;
  margin-bottom: 0.5rem;
  padding: 0 2rem;

& > div {
  display: block !important;
}

& > div >.react-datetime-picker__wrapper {
  border-radius: 4px;
  border-color: hsl(0,0%,80%);
}
`

export default Label
