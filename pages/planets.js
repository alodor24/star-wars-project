import { Container, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import DataSheet from '../components/DataSheet'

const Planets = ({ data }) => {
  return (
    <Layout title='Star Wars Page | Planets'>
      <Container>
        <h1>Planets</h1>
        <Row>
          <DataSheet data={data} typeView="planets" />
        </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://swapi.dev/api/planets/')
  const data = await res.json()

  return {
    props: {
      data: data || null,
    },
  }
}

export default Planets
