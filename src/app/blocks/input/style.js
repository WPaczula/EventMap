import styled from 'styled-components'

export default styled.div`
  text-align: center;
  font-size: 2em;
  border-bottom: 1px #ffffffb3 solid;
  width: 70%;
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
