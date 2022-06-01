import React from 'react'

const Card = (props) => {
    const{image,name,button,button1,about,intersts}=props
  return (
    <div className='container'>

        <img src={image} alt="alte"/>
        <p>{name}</p>
        <button>{button}</button>
        <button>{button1}</button>
        <p>{about}</p>
        <p>{intersts}</p>


    </div>
  )
}

export default Card