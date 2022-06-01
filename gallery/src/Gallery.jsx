import React from 'react'
import './App.css'
const Gallery = ({data}) => {
  return (
    <div className='container'>
        {data.map((elem)=>{
            return <div key={elem.id}> 
        <div>
            <img src={`https://farm${elem.farm}.staticflickr.com/${elem.server}/${elem.id}_${elem.secret}_m.jpg`}  style={{height:"200px",width:"240px"}} alt="alte"/>
        </div>
        </div>
        })}
    </div>
  )
}

export default Gallery