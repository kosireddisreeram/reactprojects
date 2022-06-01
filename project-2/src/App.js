import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    
    <nav className="container">
      <div style={{display:'flex'}}>
         <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""  className='logo'/>
         <h1>REACT FACTS</h1>
         </div>
      <div>
      <h3>React-course Project-1</h3>

      </div>
      
      
    </nav>
    <div className="body">

      <h1>Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>It is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
    </div>
  );
}

export default App;
