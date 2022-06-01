import './App.css';
import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Gallery from './Gallery';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

function App() {
  const[search,setSearch]=useState("")
  const[data,setData]=useState([]);
  const changeHandler=(e)=>{

    setSearch(e.target.value)
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    ).then((response)=>{
      setData(response.data.photos.photo) 
    })
    console.log(search);
    
  }
  return (
    <div className="App">
        <h2>Gallery</h2>

      <form onSubmit={submitHandler}>
       <input type="text" value={search} onChange={changeHandler}/> <br/><br/>
       <input type="submit" name="search"/>
       </form>
       {data.length>=1 ? <Gallery data={data}/> : "no data loaded"}
    </div>
  );
}

export default App;
