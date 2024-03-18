import React from 'react'
import "./ListInfo.css"

const ListInfo = () => {

    const inffo = [ 
        {
            id : 1 ,
            img : "../src/assets/image/info-icon-01.png" ,
            tit : "250 m",
            dis : "Total float space"
        },
        {
            id : 2 ,
            img : "../src/assets/image/info-icon-02.png" ,
            tit : "Contract" ,
            dis : "Contract Ready"
        },
        {
            id : 3 ,
            img : "../src/assets/image/info-icon-03.png" ,
            tit : "Payment",
            dis : " Payment Process"
        },
        {
            id : 4 ,
            img : "../src/assets/image/info-icon-04.png" ,
            tit : "Safety",
            dis : "24/7 Under Control"
        }
    ]
    

  return (
    <div>
      
        <div className="info">
            <ul>
                {
                    inffo.map( ele => {
                        return (
                            <li key={ele.id}>
                                <img src={ele.img} alt={ele.id} />
                                <h4>{ele.tit}<br></br><span>{ele.dis}</span> </h4>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
    </div>
  )
}

export default ListInfo
