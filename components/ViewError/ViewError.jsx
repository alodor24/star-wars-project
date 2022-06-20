import { Container } from 'react-bootstrap'
import Link from 'next/link'
import * as SC from './ViewError.styles'

const ViewError = () => {
  return (
    <Container>
      <SC.Wrapper>
        <SC.Text>404 | Page Not Found</SC.Text>
        <SC.Button variant="outline-warning" size="lg">
          <Link href="/">Return you must</Link>
        </SC.Button>
      </SC.Wrapper>
    </Container>
  )
}

export default ViewError