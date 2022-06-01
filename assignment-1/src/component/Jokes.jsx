import React from 'react'

const Jokes = ({punchline,setup}) => {
  return (
    <div>
       
        <p style={{display:setup? "block" :"none"}}> <span></span>{setup}</p>
        <p><span></span>{punchline}</p>

    </div>
  )
}

export default Jokes