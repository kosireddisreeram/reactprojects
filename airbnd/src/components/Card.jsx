import React from 'react'
import star from '../logo/star.png'
import '../styles/card.css'
const Card = ({img,rating,reviewcount,title,price,country}) => {
  return (
    <div className='card'>
   <img src={img} className="card-image" alt="logo"/>
 <div className='card-status'>
     <img src={star} alt="star"/>
     <span>{rating}</span>
     <span>{reviewcount}</span>
</div>
<p>{country}</p>
 <p>{title}</p>
 <p><span className="free">for free</span>{price}</p>
    </div>
  )
}

export default Card 