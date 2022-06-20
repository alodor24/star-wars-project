import 'bootstrap/dist/css/bootstrap.min.css'
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

  main {
    margin-top: 100px;

    ::after {
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

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
    padding: 20px 0;

    p {
      color: rgba(255, 255, 255, .65);
      text-align: center;
      margin-bottom: 0;
      font-weight: 400;
    }

    a {
      color: rgba(235, 182, 1, 1);
      text-decoration: none;
    }
  }
`