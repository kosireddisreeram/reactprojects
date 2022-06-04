import React from 'react'
import data from './data.json'
import './styles.css'

import Item from './Item'
const Items = () => {
  
    return (
    
            
        <div className='container'>
            {/* map through the data and display the cards */}
          {data.map((item,id)=>{
            return <div key={id} className="container"><Item key={item.id} {...item}/></div>
         
          })}
           
        </div>
    
  )
}

export default Items