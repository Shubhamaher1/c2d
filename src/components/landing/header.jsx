import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../firebase';


const Header = () => {
   const[active, setActive]= useState("home")
  return (
    <header>
   
    <div className="header">
       <div className="container">
          <div className="row">
             <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                   <div className="center-desk">
                      <div className="logo">
                         <a href="/index"><img src="images/logo.png" alt="#" style={{width:"70px",height:"70px"}} /></a>
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarsExample04">
                      <ul className="navbar-nav mr-auto">
                         <li className={`nav-item ${active=="Home" ? "active" : ""}`}>
                            <a className="nav-link" href="index"onClick={(e)=>{setActive("Home")}}>Home</a>
                            {/* <Link to="/index" className="nav-link">Home</Link> */}
                         </li>
                         <li className={`nav-item ${active=="about" ? "active" : ""}`}>
                           <Link to="/about" className="nav-link">About</Link>
                            {/* <a className="nav-link" Link="about">About</a> */}
                         </li>
                         <li className={`nav-item ${active=="room" ? "active" : ""}`}>
                            {/* <a className="nav-link" Link="room">Our room</a> */}
                            <Link to="/room" className="nav-link">Team</Link>
                         </li>
                        
                     
                         <li className={`nav-item ${active=="contact" ? "active" : ""}`}>
                            {/* <a className="nav-link" Link="contact">Contact Us</a> */}
                            <Link to="/contact" className="nav-link">Contact Us</Link>
               
                         </li>
                         <li className="nav-item">
                           {/* <a className="nav-link" href='/'>Chat</a> */}
                           <Link to="/" className="nav-link">Chat</Link>
                        </li>
                      </ul>
                   </div>
                </nav>
             </div>
          </div>
       </div>
    </div>
 </header>
  )
}

export default Header