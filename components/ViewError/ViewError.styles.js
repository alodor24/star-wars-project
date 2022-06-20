import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const Text = styled.h3`
  color: rgba(255, 255, 255, .85);
  text-shadow: 0px 4px 7px rgba(2, 178, 255, 1);
  margin-bottom: 25px;
`

export const Button = styled.div`
  border: solid 1px rgba(2, 178, 255, 1);
  border-radius: 5px;
  padding: 10px 20px;
  transition: all .3s ease-in-out;
  cursor: pointer;

  :hover {
    box-shadow: 0px 5px 15px rgba(2, 178, 255, 1);
  }

  a {
    color: rgba(2, 178, 255, 1);
    text-decoration: none;
  }
`
