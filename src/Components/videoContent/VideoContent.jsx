import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./VideoContent.css"
import viedoImg from "./../../assets/image/video-frame.jpg"
import { FaPlay } from "react-icons/fa";

const VideoContent = () => {
  return (
    <div>
     <div className="viedo-content">
        <Container>
            <Row>
                <Col lg={{span: 10 , offset : 1}}>
                    <div className="video-frame">
                        <img src={viedoImg} alt="img video" />
                        <a href="https://youtube.com">
                        <FaPlay />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default VideoContent
