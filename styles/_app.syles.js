import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Mulish', sans-serif;
    background-image: url('/images/bg.png');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  .bg-dark {
    background-color: #000 !important;
  }
`