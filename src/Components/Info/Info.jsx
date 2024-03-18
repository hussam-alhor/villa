import React from 'react'
import { FaEnvelope } from "react-icons/fa6";
import { FaMap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Info.css" ;
import "./../Container.css";
import Container from 'react-bootstrap/Container';
import {Row , Col } from 'react-bootstrap';




const Info = () => {
  return (
    <div>
      <div className="sub-header">
        <Container>
          <Row className='hu huscontain'>
              <Col lg={8} md={8}>
                  <div className="hu1">
                      <div className="hu2 huu2"> 
                          <FaEnvelope />
                          <p>info@company.com</p>
                      </div>
                      <div className="hu2"> 
                          <FaMap />
                          <p>Sunny Isles Beach, FL 33160</p>
                      </div>
                    </div>
              </Col>
              <Col lg={4} md={4}>
                <div className="hu3">
                    <div className="huicon">
                        <FaFacebook />  
                    </div>
                    <div className="huicon">
                        <FaTwitter />  
                    </div>
                    <div className="huicon">
                        <FaLinkedin />  
                    </div>
                    <div className="huicon">
                        <FaInstagram />  
                    </div>
                </div>
              </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Info
