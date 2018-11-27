import styled from 'styled-components'
import { headerSize } from '../../header/style'
import media from '../../../style/media'

const StyledContent = styled.main`
    display: flex;  
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
    margin: 0 auto;
    margin-top: ${props => (props.short ? 0 : headerSize())};
    white-space: pre-wrap;
    
    ${media.fromDesktop`
        min-width: 60em;
    `}

    min-width: 90%;
`

export default StyledContent
