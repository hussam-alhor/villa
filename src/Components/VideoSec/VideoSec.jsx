import React from 'react'
import "./VideoSec.css"
import {Row , Col , Container} from 'react-bootstrap'
const VideoSec = () => {
  return (
    <div>
       <div className="video section">
         <Container>
            <Row>
                <Col lg={{span : 4 , offset:4}} >
                    <div className="content">
                        <h6>| Video View</h6>
                        <h2>Get Closer View & Different Feeling</h2>
                    </div>
                </Col>
            </Row>
         </Container>
       </div>
    </div>
  )
}

export default VideoSec
