import React from 'react'
import Appartment from '../../Components/Appartment/Appartment'
import Carusel from '../../Components/Carusel/Carusel'
import Deal from '../../Components/Deal/Deal'
import Fact from '../../Components/Fact/Fact'
import Propertise from '../../Components/Properties/Propertise'
import VideoContent from '../../Components/videoContent/VideoContent'
import VideoSec from '../../Components/VideoSec/VideoSec'



const Home = () => {
  return (
    <div>
      <Carusel/>
      <Appartment/>
      <VideoSec />
      <VideoContent/>
      <Fact/>
      {/* <Deal/> */}
      <Propertise/>
    </div>
  )
}

export default Home
