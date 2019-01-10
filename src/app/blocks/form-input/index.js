import styled from 'styled-components'
import React from 'react'

const StyledInput = styled.input`
  margin-top: 0.25rem;
  display: block;
  height: 2rem;
  width: 100%;
  border: thin solid hsl(0,0%,80%);  
  border-radius: 4px;
  padding-left: 0.5rem;
`

const Input = props => (
  <StyledInput
    {...props}
    onKeyPress={(e) => {
      if (e.target.keyCode === 13) { e.preventDefault() }
    }
    }
  />
)

export default Input
