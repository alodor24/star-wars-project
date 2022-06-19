import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'
import * as SC from './FooterApp.styles'

const FooterApp = () => {
  return (
    <SC.Footer>
      <Container>
        <SC.Text>
          Developed by{' '}
          <Link href="https://alodor.vercel.app/" passHref>
            <a target="_blank" title="Visit site">
              Alodor
            </a>
          </Link>
        </SC.Text>
      </Container>
    </SC.Footer>
  )
}

export default FooterApp