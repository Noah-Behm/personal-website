import logo from './me.jpg';
import './App.css';
import ReactRoundedImage from "react-rounded-image";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">


        <div className="container-column">

          <div>
            <div className="container-row">
              <div className="p-2">        
                <p className="Name-Text">
                  Hello I'm Noah Behm    
                </p>
              </div>
              <div className="p-2">   
                  <ReactRoundedImage image={logo} roundedSize="1" imageWidth="230" imageHeight="230" />
              </div>
            </div>
          </div>

          <div>
              <div className="p-2">        
                <p className='small-text'>
                  I'm a computer science student at Michigan State University, graduating in 2022. This is a placeholder text which will be filled in later with something better. 
                </p>
              </div>
          </div>




        </div>
      </header>



    </div>
    
  );
}

export default App;
