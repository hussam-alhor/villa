import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./SingleProperties.css"
import single from "./../../assets/image/single-property.jpg"
import ListInfo from '../ListInfo/ListInfo'
const SingleProperties = () => {
  return (
    <div>
        <div className="singleSec section secCard">
      <Container>
        <Row>
            <Col lg={7}>
                <img src={single} alt="" className='single'/>
                <div className="singleText">
                <p className='singleDisc'>Appartment</p>
                <h2 className='singleTit'>24 New Street Miami, OR 24560</h2>
                </div>
                
            </Col>
            <Col lg={4}>
                <ListInfo/>
            </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default SingleProperties
