import './App.css';
import data from './component/Jokesdata';
import Jokes from './component/Jokes';
function App() {

  return (
    <div>
      
      {data.map((user) => {
      return  <div key={user.punchline}>< Jokes{...user}/></div> 

     })}
    </div>
  )
  }



  // the normal way of passing data through props 
      //  <div>
    //   <Jokes   setup={"Why don't pirates travel on mountain roads?"} punchline={"Scurvy"}/>
    //   <Jokes   setup={"Why do bees stay in the hive in the winter?"} punchline={"Swarm."}/>
    //   <Jokes   punchline={"Scurvy"}/>
    //   <Jokes   punchline={"Scurvy"}/>

    //  </div>
   


export default App;
