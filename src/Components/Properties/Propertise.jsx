import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Propertise.css"
import prorer from "./../../assets/image/property-01.jpg"
import { Col, Container, Row } from 'react-bootstrap';


const Propertise = () => {
 
    const card = [
        {   
            id : 1,
            img : "../src/assets/image/property-01.jpg",
            tit1 : "Luxury Villa",
            tit2 : "$2.264.000",
            tit3 : "18 New Street Miami, OR 98219",
            text1 : "Bedroom",
            text2 : "Bathroom",
            text3 : "Area",
            text4 : "Floor",
            text5 : "Parking",
            span1 : "6",
            span2 : "5",
            span3 : "450m2",
            span4 : "6",
            span5 : "8 spots"
        },
        {   
            id : 2,
            img : "../src/assets/image/property-02.jpg",
            tit1 : "Luxury Villa",
            tit2 : "$1.180.000",
            tit3 : "54 Mid Street Florida, OR 27001",
            text1 : "Bedroom",
            text2 : "Bathroom",
            text3 : "Area",
            text4 : "Floor",
            text5 : "Parking",
            span1 : "6",
            span2 : "5",
            span3 : "450m2",
            span4 : "3",
            span5 : "8 spots"
        },
        {   
            id : 3,
            img : "../src/assets/image/property-03.jpg",
            tit1 : "Luxury Villa",
            tit2 : "$1.460.000",
            tit3 : "26 Old Street Miami, OR 38540",
            text1 : "Bedroom",
            text2 : "Bathroom",
            text3 : "Area",
            text4 : "Floor",
            text5 : "Parking",
            span1 : "5",
            span2 : "4",
            span3 : "225m2",
            span4 : "3",
            span5 : "`0 spots"
        },
        {   
            id : 4,
            img : "../src/assets/image/property-04.jpg",
            tit1 : "Apartment",
            tit2 : "$548.500",
            tit3 : "26 Old Street Miami, OR 38540",
            text1 : "Bedroom",
            text2 : "Bathroom",
            text3 : "Area",
            text4 : "Floor",
            text5 : "Parking",
            span1 : "4",
            span2 : "3",
            span3 : "125m2",
            span4 : "25th",
            span5 : "2 cars"
        },
        {   
            id : 4,
            img : "../src/assets/image/property-05.jpg",
            tit1 : "Apartment",
            tit2 : "$925.600",
            tit3 : "34 Beach Street Miami, OR 42680",
            text1 : "Bedroom",
            text2 : "Bathroom",
            text3 : "Area",
            text4 : "Floor",
            text5 : "Parking",
            span1 : "4",
            span2 : "4",
            span3 : "180m2",
            span4 : "38th",
            span5 : "2 cars"
        },
        {   
            id : 6,
            img : "../src/assets/image/property-06.jpg",
            tit1 : "34 Beach Street Miami, OR 42680",
            tit2 : "$450.000",
            tit3 : "22 New Street Portland, OR 16540",
            text1 : "Bedroom",
            text2 : "Bathroom",
            text3 : "Area",
            text4 : "Floor",
            text5 : "Parking",
            span1 : "3",
            span2 : "2",
            span3 : "165m2",
            span4 : "26th",
            span5 : "3 cars"
        },
    ]

  return (
    <div>
        <div className="section">  
            <Container>
                <Row>
                        {
                            card.map (  elem => {
                                return (
                                    <Col md={6} lg={4} className="cardd" >
                            <Card style={{ width: '18rem' }} key={elem.id}>
                                <Card.Img variant="top" src={elem.img}/>
                                <Card.Body>
                                  <Card.Title>
                                    <div className="title-card">
                                        <p>{elem.tit1}</p>
                                        <h4>{elem.tit2}</h4>
                                    </div>
                                    <h2>{elem.tit3}</h2>
                                  </Card.Title>
                                  <Card.Text>
                                   <div className="cardtext">
                                    <p>{elem.text1} <span>{elem.span1}</span> </p>
                                    <p>{elem.text2} <span>{elem.span2}</span> </p>
                                    <p>{elem.text3} <span>{elem.span3}</span> </p>
                                    <p>{elem.text4} <span>{elem.span4}</span> </p>
                                    <p>{elem.text5} <span>{elem.span5}</span> </p>
                                   </div>
                                  </Card.Text>
                                  <Button variant="primary" className='main-button'>Go somewhere</Button>
                                </Card.Body>
                             </Card>
                           </Col>
                             )
                           })
                        }
                       
                </Row>
          </Container>
      </div>
    </div>
  )
}

export default Propertise
