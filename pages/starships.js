import { Container, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import DataSheet from '../components/DataSheet'

const Starships = ({ data }) => {
  return (
    <Layout title='Star Wars Page | Starships'>
      <Container>
        <h1>Starships</h1>
        <Row>
          <DataSheet data={data} typeView="starships" />
        </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://swapi.dev/api/starships/')
  const data = await res.json()

  return {
    props: {
      data: data || null,
    },
  }
}

export default Starships
