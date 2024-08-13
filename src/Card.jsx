import React from 'react'
import './Card.css'
function Card({img,name}) {
  return (
    <div className='countryCard'>
        <div className='countryflag'>
            <img src={img} alt="" />
        </div>
      <div className='name'>
            <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Card
