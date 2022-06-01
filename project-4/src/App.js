import './App.css';
import Footer from './components/Footer';
import Image from './components/Image';
import Name from './components/Name';
import Button from './components/Button';
import About from './components/About';
import Interests from './components/Interests';
function App() {
  return (
    <div style={{boeder:"1px solid black", padding:"5rem",}}>
    <div className="App">
        <Name name="Learning"/>
        <div style={{display:"flex", justifyContent:"center",gap:'20px'}}>
        <Button butto="Email"  className="o"/>   <Button butto='Linkedin'/>

        </div>
      <Image imge="https://images.pexels.com/photos/4069289/pexels-photo-4069289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
       
       <About about="I am a hardworking engineering graduate specialized in computer science"/>
       <Interests inter="Playing chess "/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
