import React from 'react'
import "./ProperHead.css"

const ProperHead = ({text , title}) => {
  return (
    <div>
          <div className="pro-head">
        <div className="content">
            <p>{text}</p>
            <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default ProperHead
