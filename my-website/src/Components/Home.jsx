import React from "react";
import logo from '../images/me.jpg';
import github_logo from '../images/GitHub-Logo.png';
import linkedin_logo from '../images/linkedin-logo.png';
import resume_logo from '../images/resume.png';
import './Home.css';
import ReactRoundedImage from "react-rounded-image";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar.jsx";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Home = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('../images/resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'noahbehm_resume.pdf';
            alink.click();
        })
    })
  }
  return (
    <div className="App">
    <header className='nav-head'>
      <Navbar className = 'nav-bar'/>
    </header>
    <body className="App-header">

        <div className="container-row">
          <div className="container-column">
            <div className="p-2">        
                <p className="Name-Text">
                  Hello, I'm Noah Behm    
                </p>
            </div>
            <div className="p-2">
              <p className='small-text'>
                I'm a computer science student at Michigan State University, graduating in 2022. 
                Look around my page to learn more about me and see what I'm up to!
              </p>
            </div>
          </div>
          <div className="container-column-2">
            <div className="p-2">   
                <ReactRoundedImage className="me-img" image={logo} roundedSize="0" imageWidth="400" imageHeight="400" roundedColor="#dddcf194"/>
            </div>
          </div>
        </div>

        <div className="container-row-2">
          <div className="p-2">
            <a href="https://github.com/Noah-Behm" target="_blank" rel="noopener noreferrer">
              <img className='Github-image' src={github_logo} alt="Github logo" height={130} width={200}></img>
            </a>
          </div>
          <div className="p-2">
          <a href="https://www.linkedin.com/in/noah-behm-395b8522b/" target="_blank" rel="noopener noreferrer">
            <img className='Linkedin-image' src={linkedin_logo} alt="Linkedin logo" height={110} width={130}></img>
          </a>
          </div>
          <div className="p-2">
            
            <Popup trigger={
                <button onClick={onButtonClick} className="resume-button">
                  <img className='resume-image' src={resume_logo} alt="Resume logo" height={110} width={130} onClick={onButtonClick}></img>
                </button>
              } position="right center">
              <div>Thank you for downloading my resume!</div>
            </Popup>
          </div>
        </div>
    </body>

    <hr className='head-foot-line'></hr>
    <footer className='contact-info'>
      <p className='footer-text'>
        contact me
      </p>
      <p className='footer-text'>
        behmnoah@gmail.com/behmnoah@msu.edu 
      </p>
    </footer>
  </div>
  );
};
  
export default Home;