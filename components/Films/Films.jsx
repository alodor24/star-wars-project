import { Tabs, Tab } from 'react-bootstrap'
import Text from '../Text'
import WrapperList from '../WrapperList'

const Films = ({ data }) => {
  return (
    <Tabs defaultActiveKey="info" className="mb-3">
      <Tab eventKey="info" title="Info">
        <Text><strong>Title: </strong>{data.title}</Text>
        <Text><strong>Episode ID: </strong>{data.episode_id}</Text>
        <Text><strong>Opening Crawl: </strong>{data.opening_crawl}</Text>
        <Text><strong>Director: </strong>{data.director}</Text>
        <Text><strong>Producer: </strong>{data.producer}</Text>
        <Text><strong>Release Date: </strong>{data.release_date}</Text>
      </Tab>

      <Tab eventKey="characters" title="Characters">
        {data.characters.length > 0 ? (
          <WrapperList>
            {data.characters.map((item, index) => (
              <li key={index}>
                <Text><strong>Character: </strong>{item}</Text>
              </li>
            ))}
          </WrapperList>
        ) : (
          <Text>No Data</Text>
        )}
      </Tab>

      <Tab eventKey="planets" title="Planets">
        {data.planets.length > 0 ? (
          <WrapperList>
            {data.planets.map((item, index) => (
              <li key={index}>
                <Text><strong>Planet: </strong>{item}</Text>
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
    </Tabs>
  )
}

export default Films