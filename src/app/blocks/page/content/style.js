import styled from 'styled-components'
import { headerSize } from '../../header/style'

const StyledContent = styled.main`
    display: flex;  
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    margin: 0 auto;
    margin-top: ${props => (props.short ? 0 : headerSize())};
    white-space: pre-wrap;
    width: 100vw;
`

export default StyledContent
