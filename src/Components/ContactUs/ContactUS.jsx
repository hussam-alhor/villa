import React from 'react'
import "./ContactUS.css"
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";


const ContactUS = () => {
    return (
        <div>
            <div className="section secCard">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="sec-heading contactHead">
                                <h6>| CONTACT US</h6>
                                <h2>Get In Touch With Our Agents</h2>
                            </div>
                            <p className='paragContact'>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
                            <div className="contactPhone">
                                <div className="phone">
                                    <MdOutlinePhoneInTalk/>
                                    <p>010-020-0340 <br/> <span>phone Number</span></p>
                                </div>
                                <div className="phone">
                                    <TfiEmail/>
                                    <p>info@villa.co <br/> <span>Business Email</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <form action="">
                                <div className="inputContact">
                                    <label htmlFor="">FullName</label>
                                    <input type="text" placeholder='Your Name'/>
                                </div>
                                <div className="inputContact">
                                    <label htmlFor="">Email Address</label>
                                    <input type="Email" placeholder='Your E-mail'/>
                                </div>
                                <div className="inputContact">
                                    <label htmlFor="">Subject</label>
                                    <input type="text" placeholder='Subject...'/>
                                </div>
                                <div className="inputContact">
                                    <label htmlFor="">FullName</label>
                                    <textarea name="" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
                                </div>
                                <div className="btnContact">
                                 <button>Send Message</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ContactUS
