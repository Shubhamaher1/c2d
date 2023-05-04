import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  function w3_open() {
    document.getElementById("mySidebar").style.width = "50%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  return (<>
  <div className="mobilesidebar" id="mySidebar">
  <button onClick={w3_close} className="w3-bar-item w3-button w3-large">Close &times;</button>
      <Navbar />
      <Search/>
      <Chats onClick={w3_close}/>
  </div>

    <button className="w3-button w3-teal w3-xlarge" onClick={w3_open}>☰</button>
    <div className="sidebar">
      {/* <button onclick="w3_close()" className="w3-bar-item w3-button w3-large">Close &times;</button> */}
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  </>
  );
};

export default Sidebar;
