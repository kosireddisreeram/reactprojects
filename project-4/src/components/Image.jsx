import React from 'react'

const Image = ({imge}) => {
  return (
    <div>
        <img src={imge} alt="imge" className='image'/>
    </div>
  )
}

export default Image