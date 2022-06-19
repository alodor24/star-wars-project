import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Mulish', sans-serif;
    background-image: url('/images/bg.png');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
`