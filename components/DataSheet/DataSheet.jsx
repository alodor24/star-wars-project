import { useState } from 'react'
import { ListGroup, Col } from 'react-bootstrap'
import Characters from '../Characters'
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
              {item.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>

      <Col sm={7}>
        <SC.WrapperInfo>
          {typeView === 'charaters' && <Characters data={dataSelected} />}
          {typeView === 'planets' && <div>Planets</div>}
          {typeView === 'films' && <div>Films</div>}
          {typeView === 'species' && <div>Species</div>}
          {typeView === 'vehicles' && <div>Vehicles</div>}
          {typeView === 'starships' && <div>Starships</div>}
        </SC.WrapperInfo>
      </Col>
    </>
  )
}

export default DataSheet