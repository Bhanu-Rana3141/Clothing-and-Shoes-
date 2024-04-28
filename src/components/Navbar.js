import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <div className="navbar">
          <a href="/"><img id="img-logo" height={'60px'} src="Images/1_Logo.png" alt="Logo"/></a>
          <div className="nav-links">
              <a href="/">Home</a>
              <a href="/shop">Shop</a>
              <a href="/contact">Contact</a>
          </div>
          <button type="button" id="login-btn"><a href="/login">Login</a></button>
      </div> 
    </>
  );
}
