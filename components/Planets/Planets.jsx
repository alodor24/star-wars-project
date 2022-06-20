import { Tabs, Tab } from 'react-bootstrap'
import Text from '../Text'
import WrapperList from '../WrapperList'

const Planets = ({ data }) => {
  return (
    <Tabs defaultActiveKey="info" className="mb-3">
      <Tab eventKey="info" title="Info">
        <Text><strong>Name: </strong>{data.name}</Text>
        <Text><strong>Rotation Period: </strong>{data.rotation_period}</Text>
        <Text><strong>Orbital Period: </strong>{data.orbital_period}</Text>
        <Text><strong>Diameter: </strong>{data.diameter}</Text>
        <Text><strong>Climate: </strong>{data.climate}</Text>
        <Text><strong>Gravity: </strong>{data.gravity}</Text>
        <Text><strong>Terrain: </strong>{data.terrain}</Text>
        <Text><strong>Surface Water: </strong>{data.surface_water}</Text>
        <Text><strong>Population: </strong>{data.population}</Text>
      </Tab>

      <Tab eventKey="residents" title="Residents">
        {data.residents.length > 0 ? (
          <WrapperList>
            {data.residents.map((item, index) => (
              <li key={index}>
                <Text><strong>Resident: </strong>{item}</Text>
              </li>
            ))}
          </WrapperList>
        ) : (
          <Text>No Data</Text>
        )}
      </Tab>

      <Tab eventKey="films" title="Films">
        {data.films.length > 0 ? (
          <WrapperList>
            {data.films.map((item, index) => (
              <li key={index}>
                <Text><strong>Film: </strong>{item}</Text>
              </li>
            ))}
          </WrapperList>
        ) : (
          <Text>No Data</Text>
        )}
      </Tab>
    </Tabs>
  )
}

export default Planets