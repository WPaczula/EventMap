import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
  margin: 0;
  padding: 0;
  font-family: 'M PLUS 1p', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  flex: 1;
  display: flex;
  flex-direction: column;
}

#modal-root{
  position: absolute;
}
`

export default GlobalStyle
