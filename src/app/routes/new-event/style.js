import styled from 'styled-components'
import Button from '../../blocks/button'
import media from '../../style/media'
import { secondaryColor } from '../../style/colors'

export const CreateEventLayout = styled.div`
display: flex;
flex-direction: column;
`

export const Title = styled.h1`
position: absolute;
top: 0;
width: 100vw;
background-color: ${secondaryColor};
color: white;
font-size: 1.5rem;
left: -50vw;
margin-left: 50%;
padding: 1.5rem;
text-align: center;

${media.fromTablet`
  font-size: 2rem;
`}
`

export const TitleContainer = styled.div`
position: relative;
height: 3rem;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 4rem;
`

export const Label = styled.label`
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

export const Input = styled.input`
margin-top: 0.25rem;
display: block;
height: 2rem;
width: 100%;
border: thin solid hsl(0,0%,80%);  
border-radius: 4px;
padding-left: 0.5rem;
`

export const SubmitButton = styled(Button)`
margin: 2rem auto;
width: 13rem;
`
