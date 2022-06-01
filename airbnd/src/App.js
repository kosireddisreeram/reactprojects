import React from 'react'
import './App.css';


import Card from './components/Card';
import Navbar from './components/Navbar';
import data from './data';
const App = () => {
  return (
          <><Navbar /><div className='container'>
      {/* <Card imge={logo} rating={"5.0"} reviewcount={6} country={"what ever you want . "} title={"life lessons"} price={136} /> */}

      {data.map((elem, id) => {
        return <div key={id}><Card {...elem}/>
          {/* // img={elem.coverImg}
          // rating={elem.stats.rating}
          // reviewcount={elem.stats.reviewCount}
          // price={elem.price}
          // country={elem.location}
          // title={elem.title} /> */}

        </div>;
      })}
    </div></>
  )
}

export default App