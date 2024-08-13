import React from 'react'
import './Card.css'
function Card({img,name}) {
  return (
    <div className='countryCard'>
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export default Card
