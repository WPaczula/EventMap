import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
  margin: 0;
  padding: 0;
  font-family: 'M PLUS 1p', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.blurred{
  filter:blur(4px);
}

#root {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;  
}

#modal-root{
  position: absolute;
}
`

export default GlobalStyle
