import styled from 'styled-components'
import { secondaryColorDark } from '../../../../style/colors'


export default styled.div`
text-align:center;
& input{
    background-color:white;
    color: ${secondaryColorDark};
    margin-top:7%;  
    font-size: 2em;
    border-radius: 10%;
    padding: 2%;
    border: none;
    box-shadow: 0 0.25em 0.25em 0 rgba(0,0,0,0.14);
    outline: none;
}
& input:active{
  box-shadow: 0 3px 0 ${secondaryColorDark};
  top: 3px;
  background-color: #d2d2d2;
}
`
