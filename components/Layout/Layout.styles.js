import styled from 'styled-components'
import { keyframes } from 'styled-components'

const Animation = keyframes`
  from {
    width: 200px;
    height: 200px;
    right: -50px;
    bottom: -10%;
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

export const Startship = styled.div`
  position: fixed;
  width: 200px;
  height: 200px;
  right: -50px;
  bottom: -10%;
  opacity: 0;
  animation-name: ${Animation};
  animation-duration: 7s;
  animation-timing-function: ease-out;
  animation-delay: 5s;
`