import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../components/Layout/Layout'

const Custom404 = () => {
  return (
    <Layout title='Star Wars Page | 404'>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col>
            <h3>404 - Page Not Found</h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Custom404
