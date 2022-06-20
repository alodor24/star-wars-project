import { Tabs, Tab } from 'react-bootstrap'
import * as SC from './Characters.styles'

const Characters = ({ data }) => {
  return (
    <Tabs defaultActiveKey="info" className="mb-3">
      <Tab eventKey="info" title="Info">
        <SC.Text><strong>Name: </strong>{data.name}</SC.Text>
        <SC.Text><strong>Height: </strong>{data.height}</SC.Text>
        <SC.Text><strong>Mass: </strong>{data.mass}</SC.Text>
        <SC.Text><strong>Hair Color: </strong>{data.hair_color}</SC.Text>
        <SC.Text><strong>Skin Color: </strong>{data.skin_color}</SC.Text>
        <SC.Text><strong>Eye Color: </strong>{data.eye_color}</SC.Text>
        <SC.Text><strong>Birth Year: </strong>{data.birth_year}</SC.Text>
        <SC.Text><strong>Gender: </strong>{data.gender}</SC.Text>
        <SC.Text><strong>Homeworld: </strong>{data.homeworld}</SC.Text>
      </Tab>

      <Tab eventKey="films" title="Films">
        {data.films.length > 0 ? (
          <SC.WrapperList>
            {data.films.map((item, index) => (
              <li key={index}>
                <SC.Text><strong>Film: </strong>{item}</SC.Text>
              </li>
            ))}
          </SC.WrapperList>
        ) : (
          <SC.Text>No Data</SC.Text>
        )}
      </Tab>

      <Tab eventKey="species" title="Species">
        {data.species.length > 0 ? (
          <SC.WrapperList>
            {data.species.map((item, index) => (
              <li key={index}>
                <SC.Text><strong>Specie: </strong>{item}</SC.Text>
              </li>
            ))}
          </SC.WrapperList>
        ) : (
          <SC.Text>No Data</SC.Text>
        )}
      </Tab>

      <Tab eventKey="vehicles" title="Vehicles">
        {data.vehicles.length > 0 ? (
          <SC.WrapperList>
            {data.vehicles.map((item, index) => (
              <li key={index}>
                <SC.Text><strong>Vehicle: </strong>{item}</SC.Text>
              </li>
            ))}
          </SC.WrapperList>
        ) : (
          <SC.Text>No Data</SC.Text>
        )}
      </Tab>

      <Tab eventKey="starships" title="Starships">
        {data.starships.length > 0 ? (
          <SC.WrapperList>
            {data.starships.map((item, index) => (
              <li key={index}>
                <SC.Text><strong>Starship: </strong>{item}</SC.Text>
              </li>
            ))}
          </SC.WrapperList>
        ) : (
          <SC.Text>No Data</SC.Text>
        )}
      </Tab>
    </Tabs>
  )
}

export default Characters