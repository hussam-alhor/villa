import Carousel from 'react-bootstrap/Carousel';
import "./Carusel.css"

function Carusel() {
  const heroData = [ 
    {
      id : 1 ,
      image : '../src/assets/image/villa1.jfif',
      city : "Tornto,",
      state : "Canada",
      disc1 : "hurry!",
      disc : "get the best villa for you"
  
    },
    {
      id : 2 ,
      image : '../src/assets/image/villa2.jpg',
      city : "melbourne,",
      state : "Australia",
    disc1 : "be quick!" ,
      disc :"get th best villa in town"
    },
    {
      id : 3 ,
      image : '../src/assets/image/villa3.jpg',
      city : "Miami,",
      state : "South Florida",
    disc1 : "act now!",
      disc : "get the highest level penthouse"
    }
  ]
  return (
    <Carousel data-bs-theme>
      {
        heroData.map( hero => {
           return (
            <Carousel.Item key={hero.id}>
<div className="img">
            <img
              className="d-block w-100 "
              src={hero.image}
              alt={"slide" + hero.id}
            />
            </div>
            <Carousel.Caption>
              <div className="caption">
                <p className='city'>{hero.city} <span className='state'>{hero.state}</span></p>
                <h1 className='disc'>{hero.disc1} <br/>{hero.disc}</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
           )
        })
      }
    </Carousel>
  );
}

export default Carusel;