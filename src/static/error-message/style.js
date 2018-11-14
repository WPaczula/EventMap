import styled, { keyframes } from 'styled-components'

const float = keyframes`
  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
`

export const ErrorPage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 100vh;
`

export const ErrorMessage = styled.h1`
  flex: 0;

  &::after{
    content: '🛸';
    animation: ${float} 1s infinite;
    display: block;
    font-size: 5em;
    text-align: center;
  }
`
