import { Tabs, Tab } from 'react-bootstrap'
import Text from '../Text'
import WrapperList from '../WrapperList'

const Characters = ({ data }) => {
  return (
    <Tabs defaultActiveKey="info" className="mb-3">
      <Tab eventKey="info" title="Info">
        <Text><strong>Name: </strong>{data.name}</Text>
        <Text><strong>Height: </strong>{data.height}</Text>
        <Text><strong>Mass: </strong>{data.mass}</Text>
        <Text><strong>Hair Color: </strong>{data.hair_color}</Text>
        <Text><strong>Skin Color: </strong>{data.skin_color}</Text>
        <Text><strong>Eye Color: </strong>{data.eye_color}</Text>
        <Text><strong>Birth Year: </strong>{data.birth_year}</Text>
        <Text><strong>Gender: </strong>{data.gender}</Text>
        <Text><strong>Homeworld: </strong>{data.homeworld}</Text>
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

      <Tab eventKey="species" title="Species">
        {data.species.length > 0 ? (
          <WrapperList>
            {data.species.map((item, index) => (
              <li key={index}>
                <Text><strong>Specie: </strong>{item}</Text>
              </li>
            ))}
          </WrapperList>
        ) : (
          <Text>No Data</Text>
        )}
      </Tab>

      <Tab eventKey="vehicles" title="Vehicles">
        {data.vehicles.length > 0 ? (
          <WrapperList>
            {data.vehicles.map((item, index) => (
              <li key={index}>
                <Text><strong>Vehicle: </strong>{item}</Text>
              </li>
            ))}
          </WrapperList>
        ) : (
          <Text>No Data</Text>
        )}
      </Tab>

      <Tab eventKey="starships" title="Starships">
        {data.starships.length > 0 ? (
          <WrapperList>
            {data.starships.map((item, index) => (
              <li key={index}>
                <Text><strong>Starship: </strong>{item}</Text>
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

export default Characters