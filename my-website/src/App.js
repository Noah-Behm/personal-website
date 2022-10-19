import logo from './me.jpg';
import './App.css';
import ReactRoundedImage from "react-rounded-image";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar className = 'nav-bar'/>
      <header className="App-header">

          <div className="container-row">
            <div className="container-column">
              <div className="p-2">        
                  <p className="Name-Text">
                    Hello I'm Noah Behm    
                  </p>
              </div>
              <div className="p-2">
                <p className='small-text'>
                  I'm a computer science student at Michigan State University, graduating in 2022. 
                  Look around my page to learn more about me and see what I'm up to!
                </p>
              </div>
            </div>




            <div className="p-2">   
                <ReactRoundedImage image={logo} roundedSize="0" imageWidth="350" imageHeight="350" roundedColor="#dddcf194"/>
            </div>
          </div>

      </header>
      <hr className='head-foot-line'></hr>
      <footer className='contact-info'>
        <p className='footer-text'>
          Contact me!
        </p>
        <p className='footer-text'>
          behmnoah@gmail.com/behmnoah@msu.edu 
        </p>
      </footer>


    </div>
    
  );
}

export default App;
