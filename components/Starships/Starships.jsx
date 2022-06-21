import { Tabs, Tab } from 'react-bootstrap'
import Text from '../Text'
import WrapperList from '../WrapperList'

const Starships = ({ data }) => {
  return (
    <Tabs defaultActiveKey="info" className="mb-3">
      <Tab eventKey="info" title="Info">
        <Text><strong>Name: </strong>{data.name}</Text>
        <Text><strong>Model: </strong>{data.model}</Text>
        <Text><strong>Manufacturer: </strong>{data.manufacturer}</Text>
        <Text><strong>Cost in Credits: </strong>{data.cost_in_credits}</Text>
        <Text><strong>Length: </strong>{data.length}</Text>
        <Text><strong>Max Atmosphering Speed: </strong>{data.max_atmosphering_speed}</Text>
        <Text><strong>Crew: </strong>{data.crew}</Text>
        <Text><strong>Passengers: </strong>{data.passengers}</Text>
        <Text><strong>Cargo Capacity: </strong>{data.cargo_capacity}</Text>
        <Text><strong>Consumables: </strong>{data.consumables}</Text>
        <Text><strong>Hyperdrive Rating: </strong>{data.hyperdrive_rating}</Text>
        <Text><strong>MGLT: </strong>{data.MGLT}</Text>
        <Text><strong>Starship Class: </strong>{data.starship_class}</Text>
      </Tab>

      <Tab eventKey="pilots" title="Pilots">
        {data.pilots.length > 0 ? (
          <WrapperList>
            {data.pilots.map((item, index) => (
              <li key={index}>
                <Text><strong>Pilot: </strong>{item}</Text>
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

export default Starships