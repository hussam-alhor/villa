import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Fact.css"

const Fact = () => {

    const contentCounter = [
        {
            id : 1 ,
            num : 34 ,
            text1 : "Buildings" , 
            text2 : "Finished Now"
        },
        {
            id : 2,
            num : 12,
            text1 : "Years" , 
            text2 : "Experience"
        },
        {
            id : 3 ,
            num : 24 ,
            text1 : "Awwards" , 
            text2 : "Won 2023"
        }
    ]

  return (
    <div>
      <div className="facts">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="warapper">
                        <Row>
                            {
                                contentCounter.map(content => {
                                    return (
                                        <Col lg={4} key={content.id}>
                                        <div className="counter">
                                            <h2>{content.num}</h2>
                                            <p className='text'>
                                                {content.text1} <br/> {content.text2}
                                            </p>
                                        </div>
                                    </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default Fact
