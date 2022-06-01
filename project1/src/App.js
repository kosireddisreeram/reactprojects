/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './App.css'
function App() {
  return (
    <div>
      <nav className='nav'>

      <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt="image" className='logo'/>

<ul className='nav-items'>
  <li>Pricing</li>
  <li>About</li>
  <li>Contact</li>
</ul>
      </nav>
      <h1>Reasons I'm excited to learn react</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>was originally created by jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <p className='footer'>@ 2021 Ziroll development. All rights reserved.</p>
    </div>
  );
}

export default App;
