import { Tabs, Tab } from 'react-bootstrap'
import Text from '../Text'
import WrapperList from '../WrapperList'

const Species = ({ data }) => {
  return (
    <Tabs defaultActiveKey="info" className="mb-3">
      <Tab eventKey="info" title="Info">
        <Text><strong>Name: </strong>{data.name}</Text>
        <Text><strong>Classification: </strong>{data.classification}</Text>
        <Text><strong>Designation: </strong>{data.designation}</Text>
        <Text><strong>Average Height: </strong>{data.average_height}</Text>
        <Text><strong>Skin Colors: </strong>{data.skin_colors}</Text>
        <Text><strong>Hair Colors: </strong>{data.hair_colors}</Text>
        <Text><strong>Eye Colors </strong>{data.eye_colors}</Text>
        <Text><strong>Average Lifespan: </strong>{data.average_lifespan}</Text>
        <Text><strong>Homeworld: </strong>{data.homeworld}</Text>
        <Text><strong>Language: </strong>{data.language}</Text>
      </Tab>

      <Tab eventKey="characters" title="Characters">
        {data.people.length > 0 ? (
          <WrapperList>
            {data.people.map((item, index) => (
              <li key={index}>
                <Text><strong>Character: </strong>{item}</Text>
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

export default Species