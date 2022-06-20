import { Container, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import DataSheet from '../components/DataSheet'

const Vehicles = ({ data }) => {
  return (
    <Layout title='Star Wars Page | Vehicles'>
      <Container>
        <h1>Vehicles</h1>
        <Row>
          <DataSheet data={data} typeView="vehicles" />
        </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://swapi.dev/api/vehicles/')
  const data = await res.json()

  return {
    props: {
      data: data || null,
    },
  }
}

export default Vehicles
