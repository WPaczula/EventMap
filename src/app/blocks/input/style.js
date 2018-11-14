import styled from 'styled-components'
import media from '../../style/media'

export default styled.div`
    ${media.fromTablet`
        width: 70%;
    `}

    text-align: center;
    font-size: 2em;
    border-bottom: 1px #ffffffb3 solid;
    width: 90%;
    max-width: 11em;
    margin: 0 auto;
    padding: 0.3em 0;

    & label {
    font-size: 0.7em;
    margin-right: 0.5em;
    }

    & input {
        color: white;
        font-size: 0.6em;
        background-color: inherit;
        border: none;
    }

    & input:focus {
        outline: none;
    }

    & input::placeholder {
        color: #ffffffb3;
    }
`
