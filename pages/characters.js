import { Container } from 'react-bootstrap'
import Layout from '../components/Layout'

const Characters = ({ data }) => {
  return (
    <Layout title='Star Wars Page | Characters'>
      <Container>
        <h1>Characters</h1>
        {(data.results || []).map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch('https://swapi.dev/api/people/')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Characters
