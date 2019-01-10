import styled from 'styled-components'
import { secondaryColor } from '../../style/colors'

export const TagsContainer = styled.div`
  background: white;
  padding: 0.5rem;
  overflow: hidden;
  border: thin solid hsl(0,0%,80%);  
  border-radius: 4px;
  display: flex;
`

export const X = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: none;
  color: white;
  margin-left: 0.5rem;
`

export const TagsList = styled.ul``

export const Tag = styled.li`
  color: white;
  font-weight: bold;
  background: ${secondaryColor};
  float: left;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  margin: 0.25rem;

  &:hover > ${X} {
    display: inline;
  }
`

export const Input = styled.input`
  border: 0;
  flex: 1;
  font-size: 1rem;
  outline: 0;
  margin: 0.6rem 0;
`
