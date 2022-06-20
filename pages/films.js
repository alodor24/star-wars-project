import { Container, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import DataSheet from '../components/DataSheet'

const Films = ({ data }) => {
  return (
    <Layout title='Star Wars Page | Films'>
      <Container>
        <h1>Films</h1>
        <Row>
          <DataSheet data={data} typeView="films" />
        </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://swapi.dev/api/films/')
  const data = await res.json()

  return {
    props: {
      data: data || null,
    },
  }
}

export default Films
