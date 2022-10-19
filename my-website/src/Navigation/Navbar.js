import React from "react";
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="nav-bar">

          <a className="navbar-brand" href="/Home">
            Home
          </a>

          <a className="navbar-brand" href="/About">
            About
          </a>


          <a className="navbar-brand" href="/Projects">
            Projects
          </a>

      </nav>
    </div>
    
  );
};

export default Navbar;