import React from 'react'
import Add from "../components/component-images/womenImg1.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <span className="logo">Sam Chat</span>
        <div className="user">
          <img src={Add} alt="" />
          <span>John</span>
          <button>logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
