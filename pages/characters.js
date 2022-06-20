import { Container, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import DataSheet from '../components/DataSheet'

const Characters = ({ data }) => {
  return (
    <Layout title='Star Wars Page | Characters'>
      <Container>
        <h1>Characters</h1>
        <Row>
          <DataSheet data={data} typeView="charaters" />
        </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://swapi.dev/api/people/')
  const data = await res.json()

  return {
    props: {
      data: data || null,
    },
  }
}

export default Characters
