import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <Card name="sreeram" image='https://images.pexels.com/photos/4069289/pexels-photo-4069289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' button="Email" button1="Linkedin" about="I am a hard working engineering graduate specialized in front end technologies" intersts="playing chess"/>
    </div>
  );
}

export default App;
