import styled from 'styled-components'
import { secondaryColorLight } from '../../../../style/colors'

export default styled.div`
    text-align: center;
    font-size: 2em;
    color: white;
&::before{
content:'🔒 '
}
& input{
    color: white;
    font-size: 0.6em;
    background-color: inherit;
    border: none;
}
& input:focus{
    outline: none;
}
& input::placeholder{
    color:#ffffffb3;
}
& hr{
    width: 44%;
    margin: auto;
    margin-top: 1%;
    border: none;
    border-bottom: 1px solid ${secondaryColorLight};
    border-width: medium;
}
`
