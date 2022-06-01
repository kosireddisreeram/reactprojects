import React from 'react'

const Todolist = ({todoList,deletee}) => {
  
  return (
    <div>
        {todoList.map((todo,index)=>{
            return <div key={index}>
                <h5>{todo} &nbsp; <button onClick={()=>deletee(index)}>Delete</button></h5>
                </div>
        })}
    </div>
  )
}

export default Todolist