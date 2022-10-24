import Navbar from "../Navigation/Navbar";
import React from "react";
import './about.css';

const About = () => {
  return (
    <div className="parent">
      <header className='nav-head'>
        <Navbar className = 'nav-bar'/>
      </header>
      <body className="contain">
        My name is noah behm
      </body>
    </div>
  );
};
  
export default About;