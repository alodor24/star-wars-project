import { useState } from 'react'
import { ListGroup, Col } from 'react-bootstrap'
import Characters from '../Characters'
import Planets from '../Planets'
import Films from '../Films'
import Species from '../Species'
import Vehicles from '../Vehicles'
import Starships from '../Starships'
import * as SC from './DataSheet.styles'

const DataSheet = ({ data, typeView }) => {
  const [dataSelected, setDataSelected] = useState(data.results[0])

  const handleClick = index => {
    setDataSelected(data.results[index])
  }

  return (
    <>
      <Col sm={5} className="mb-3">
        <ListGroup defaultActiveKey="#1">
          {data.results.map((item, index) => (
            <ListGroup.Item key={index} action href={`#${index + 1}`} onClick={() => handleClick(index)}>
              {item.name || item.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>

      <Col sm={7}>
        <SC.WrapperInfo>
          {typeView === 'charaters' && <Characters data={dataSelected} />}
          {typeView === 'planets' && <Planets data={dataSelected} />}
          {typeView === 'films' && <Films data={dataSelected} />}
          {typeView === 'species' && <Species data={dataSelected} />}
          {typeView === 'vehicles' && <Vehicles data={dataSelected} />}
          {typeView === 'starships' && <Starships data={dataSelected} />}
        </SC.WrapperInfo>
      </Col>
    </>
  )
}

export default DataSheet