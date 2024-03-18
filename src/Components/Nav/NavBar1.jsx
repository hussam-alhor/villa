 import { FaCalendarMinus } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap"
import { Link , NavLink } from "react-router-dom"
import "./NavBar1.css";
import { useState } from "react";

const NavBar1 = ({logo , navitems }) => {

const [burger_class , setBurgerClass] = useState("burger-bar unclicked")
const [munuClass , setMunuClass] = useState("hidden")
const [isClicked , setClicked] = useState(false)

// menu change 
const updateMenu = () => {
  if (!isClicked) {
    setBurgerClass ("burger-bar clicked")
    setMunuClass ("visible")
  }
  else {
    setBurgerClass ("burger-bar unclicked")
    setMunuClass("hidden")
  }
  setClicked(!isClicked)
}
  return (
    <div>
        <Row>
            <Col xs={12}>
              <div className="nav">
                <Container>
                <div className="log">
                <h1 className='logo'>{logo}</h1>
                </div>
                <ul className="links">
                    {
                    navitems.map ((element , index)=> {
                        return (
                            <li key={index} className={"link" + " " + munuClass}>
                                 <NavLink 
                                        to={ element === "home"? "/" : "/" + element} 
                                        className={({isActive})=>
                                        isActive ? "active link" : "link"
                                        }>
                                            {element}
                                </NavLink> 
                            </li>
                        )
                    })}
                  <li className="link"> <Link to = '#' className='link'><div className="svg"><FaCalendarMinus/></div> Schedule a visit</Link></li>
                </ul>
                <a className="burger-menu" onClick={updateMenu}>
                    <span className={burger_class}></span>
                    <span className={burger_class}></span>
                    <span className={burger_class}></span>
                  </a>
              </Container>
              </div>
            </Col>
        </Row>
    </div>
  )

}
export default NavBar1
