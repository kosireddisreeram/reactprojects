import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {
  const [city,setCity] = useState("")
  const [result,setResult]= useState("");
  const inputHandler = (e) =>{
setCity(e.target.value)
  }
  const formHandler=(e)=>{
    e.preventDefault();

    // getting the api using the fetch
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then((response)=>response.json())
      .then((data)=>{
        const kelvin = data.main.temp;
        const celsius = Math.round(kelvin-273.15);
        console.log(celsius)
         setResult(`the temperatue ${city} is ${celsius}`);

        setCity('');
      })
    }
  return (
    <div className="App">
      <h1>Weather App</h1>
           <form onSubmit={formHandler}>
             <input type="text"  value={city} onChange={inputHandler}/> <br></br>
             <input type="submit" name="search"/>
           </form>
           <h1>{result}</h1>
   </div>
  );
}

export default App;
