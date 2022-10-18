import logo from './me.jpg';
import './App.css';
import ReactRoundedImage from "react-rounded-image";

function App() {
  return (
    <div className="App">
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
                  I'm a computer science student at Michigan State University, graduating in 2022. I'm looking for employment as a software engineer. Please look
                  around my page to get to know me better!   
                </p>
              </div>
          </div>




        </div>
      </header>



    </div>
    
  );
}

export default App;
