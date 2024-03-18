import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import "./Appartment.css"
import appartment from "./../../assets/image/appartment.jfif"
import  icon1 from "./../../assets/image/noteIcon.png"
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import ListInfo from '../ListInfo/ListInfo'

const Acordion = [
    {
        id : "1" ,
        header : "Best useful link ?" ,
        body1 : "Get ",
        strong : "the best villa",
        body2 : " website template in HTML CSS and Bootstrap for your business. TemplateMo provides you",
        link : " the best free CSS templates ",
        body3 : "in the world. Please tell your friends about it."
    },
    {
        id : "2" ,
        header : "How dose this work ?" ,
        body1 : "Dolor ",
        strong : "almesit amet",
        body2 : ", consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur " ,
        span : "adipiscing" ,
        body3 : " elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id : "3",
        header : "Why is villa agency the best ?" ,
        body1: "Dolor ",
        strong : "almesit amet",
        body2 : ", consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur " ,
        span : "adipiscing" ,
        body3 : " elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

// const inffo = [ 
//     {
//         id : 1 ,
//         img : "../src/assets/image/info-icon-01.png" ,
//         tit : "250 m",
//         dis : "Total float space"
//     },
//     {
//         id : 2 ,
//         img : "../src/assets/image/info-icon-02.png" ,
//         tit : "Contract" ,
//         dis : "Contract Ready"
//     },
//     {
//         id : 3 ,
//         img : "../src/assets/image/info-icon-03.png" ,
//         tit : "Payment",
//         dis : " Payment Process"
//     },
//     {
//         id : 4 ,
//         img : "../src/assets/image/info-icon-04.png" ,
//         tit : "Safety",
//         dis : "24/7 Under Control"
//     }
// ]

const Appartment = () => {
  return (
    <div>
     <div className="appartment section">
        <Container>
            <Row>
                <Col lg={4}>
                <div className="left-image">
                    <img src={appartment} alt=""  className='imgAppart'/>
                    <Link to="#"> <img src={icon1} alt="" /> </Link>
                </div>
                </Col>
                <Col lg={5}>
                    <div className="sec-heading">
                        <h6>| FEATURED</h6>
                        <h2>Best Appartment & Sea View</h2>
                    </div>
                    <Accordion defaultActiveKey="1" flush>
                        {
                            Acordion.map( accordion  => {
                                return (
                                    <Accordion.Item eventKey={accordion.id} >
                                      <Accordion.Header>{accordion.header}</Accordion.Header>
                                        <Accordion.Body>
                                            {accordion.body1} 
                                            <strong>{accordion.strong}</strong>
                                            {accordion.body2}
                                             <a href="#">{accordion.link}</a> 
                                             <span>{accordion.span}</span>
                                            {accordion.body3}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })
                        }
                    </Accordion>
                </Col>
                <Col lg={3}>  
                 <ListInfo/>
                </Col>
            </Row>
        </Container>
     </div>
    </div>
  )
}

export default Appartment
