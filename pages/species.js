import { Container, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import DataSheet from '../components/DataSheet'

const Species = ({ data }) => {
  return (
    <Layout title='Star Wars Page | Species'>
      <Container>
        <h1>Species</h1>
        <Row>
          <DataSheet data={data} typeView="species" />
        </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://swapi.dev/api/species/')
  const data = await res.json()

  return {
    props: {
      data: data || null,
    },
  }
}

export default Species
