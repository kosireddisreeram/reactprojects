import './App.css';
import Todolist from './Todolist';
import React from 'react';
import {useState} from 'react'
import Counter from './Counter';
function App() {
  const[task,setTask]=useState("");
  const [todos,SetTodos]=useState([]);

  const changehandler=(e)=>{
setTask(e.target.value)
  }
  const submithandler=(e)=>{
    e.preventDefault();
    // this is the value of the task 
    console.log(task)
    // the below we are taking one variable and pushing the new value in the input to the old todos 
    const newtodo = [...todos,task];
    // setting the settodos and pushing new todo 
    SetTodos(newtodo);
    setTask("")
  }
  const deleteHandler = (indexValue)=>{
   const newTodos= todos.filter((todo,index)=>index!==indexValue) 
  SetTodos(newTodos)
  }
  return (
    <div className="App">
      <h1>Todo Management Application </h1>
          <form onSubmit={submithandler}>
            {/* we are giving the value as task to make sure that every thing what we enter is the value of the task */}
            <input type="text" name="Task" value={task} onChange={changehandler}/> &nbsp;&nbsp;
            <input type="submit" value="Add" name="Add"/>
          </form>
          <Todolist todoList={todos} deletee={deleteHandler}/>
    <Counter/>
    </div>
  );
}

export default App;
