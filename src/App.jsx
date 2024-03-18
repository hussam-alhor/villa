
import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
// import DarkVariantExample from "./Components/Carusel/DarkVariantExample"
// import Hero from "./Components/Hero/Hero"
import Info from "./Components/Info/Info"
import NavBar1 from "./Components/Nav/NavBar1"
import Contact from "./page/Contact/Contact"
import Details from "./page/Details/Details"
import Home from "./page/Home/Home"
import Properties from "./page/Properties/Properties"


function App() {
  return (
    <>
    <Info/>
    <NavBar1 logo="VILLA" navitems={["home" , "properties" , "property details" , "Contact Us"]} />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/properties" element={<Properties/>} />
      <Route path="/property details" element={<Details/>} />
      <Route path="/Contact Us" element={<Contact/>} />
    </Routes> 
    <Footer/>
    </>
  )
}

export default App
