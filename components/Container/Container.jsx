import React from 'react'
import * as SC from './Container.styles'

const Container = ({ children }) => {
  return (
    <SC.Container>{ children }</SC.Container>
  )
}

export default Container