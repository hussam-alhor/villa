import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Deal.css"

const Deal = () => {

const table = [ 
  {
    id : 1 ,
    elem1 :  "Total Flat Space",
    elem2 : "185 m2"
  },
  {
    id : 2 ,
    elem1 :  "Floor number",
    elem2 : "26th"
  },
  {
    id : 3 ,
    elem1 :  "Number of room",
    elem2 : "4"
  },
  {
    id : 4 ,
    elem1 :  "Parking Available",
    elem2 : "Yes"
  },
  {
    id : 1,
    elem1 :  "Payment Process",
    elem2 : "Bank"
  },
]

  return (
  
    <div>
      <div className="section best-deal">
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="section-heading">
                        <h6>| Best Deal</h6>
                        <h2>Find Your Best Right Now!</h2>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="tabs-content">
                        <Row>
                            <div className="nav-warpper">
                                <ul className='nav nav-tabs' role>
                                  <li className='itemm'>Appartment</li>
                                  <li className='itemm'>Villa House</li>
                                  <li className='itemm'>Penthouse</li>
                                </ul>
                                <div className="tap-content">
                                  <Row>
                                    <Col lg={3}>
                                      <div className="info-table">
                                        <ul>
                                          {
                                            table.map (element => {
                                              return (
                                                <li key={element.id}>{element.elem1} <span>{element.elem2}</span></li>
                                              )
                                            })
                                          }
                                          <li>"Total flat Space"</li>
                                        </ul>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default Deal
