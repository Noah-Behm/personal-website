import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import MainPage from "./index.js";
import Home from "./Components/Home.jsx"
function App() {

  return (
    <div className="test">
      <Home />
    </div>
    
  )
}

export default App;