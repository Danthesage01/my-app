import React from "react"
import reactLogo from "../images/react-logo-small.png"
export default function Navbar(){
  return(
  <nav className="nav">
  <div className="nav-icon">
   <img src={reactLogo} alt="react-logo" className="nav-img"/> 
   <h3>ReactFacts</h3>
  </div>
  <div className="nav-text">
   <h4>React Course- Project 1</h4>
  </div>
  </nav>
  )
}