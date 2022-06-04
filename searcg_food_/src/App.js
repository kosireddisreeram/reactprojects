import './App.css';
import { useState } from 'react';
import React from 'react';
import Products from './Products';
import Items from './Items';
function App() {
  const[search,setSearch] =useState("");
  const [data,setData] = useState([]);
const YOUR_APP_ID="83dc95d1";
const YOUR_APP_KEY="b29951a29b00cb34739b8ca132635129"
const formHandler=(e)=>{
 e.preventDefault();
    console.log(search);
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits),
    )

    // setSearch("")

  }
  const searchHandler=(e)=>{
       setSearch(e.target.value);
  }
  return (
      <center>
        <h1>EDAMAM API </h1>

        <form onSubmit={formHandler}>
          <input type="text" onChange={searchHandler} value={search} /> &nbsp; &nbsp;
          <input type="submit" className='button' value="search"/>
        </form>
        <br/>
        {data.length>=1 ? <Products data={data}/> :null}
       <Items/>
      </center>


    
  );
}

export default App;
