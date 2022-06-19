import { createGlobalStyle, keyframes } from 'styled-components'

const Animation = keyframes`
  from {
    width: 200px;
    height: 200px;
    right: -150px;
    bottom: -20%;
    opacity: 1;
  }

  to {
    width: 20px;
    height: 20px;
    right: 500px;
    bottom: 50%;
    opacity: 0;
  }
`

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Mulish', sans-serif;
    background-image: url('/images/bg.png');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  main::after {
    content: '';
    position: fixed;
    width: 200px;
    height: 200px;
    right: -150px;
    bottom: -20%;
    opacity: 0;
    background-image: url('/images/milenian-falcon.png');
    background-size: contain;
    animation-name: ${Animation};
    animation-duration: 7s;
    animation-timing-function: ease-out;
    animation-delay: 5s;
  }

  .bg-dark {
    background-color: #000 !important;
  }

  .navbar-brand {
    cursor: pointer;
  }

  .navbar-nav a {
    color: rgba(255, 255, 255, .75);
    transition: all .2s ease-in-out;
    text-decoration: none;
    margin: 5px 12px;

    &:hover {
      color: rgba(255, 255, 255, .55);
    }

    &:last-child {
      margin-right: 0;
    }
  }
`