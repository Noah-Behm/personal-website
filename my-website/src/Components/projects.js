import React from "react";
import Navbar from "../Navigation/Navbar";
import "./projects.css"

const Projects = () => {
  return (
    <div className="parent">
      <header className='nav-head'>
        <Navbar className = 'nav-bar'/>
      </header>
      <body className="contain">
        These are my projects
      </body>
    </div>
  );
};
  
export default Projects;