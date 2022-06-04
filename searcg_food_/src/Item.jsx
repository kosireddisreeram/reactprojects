/* eslint-disable no-unused-vars */
import React from 'react'

const Item = (props) => {
    const{meal,image,id,price}=props
  return (
    <div>

        <img src={image} alt=""/>
        <p>{meal}</p>
        <p>{price}</p>
    </div>
  )
}

export default Item