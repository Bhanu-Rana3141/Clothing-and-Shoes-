import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <img height={'60px'} src="Images\1_Logo.png" alt="" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shoes">Shoes</Link></li>
        <li><Link to="/clothing">Clothes</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
        <button><Link to="/login">Login</Link></button>
    </nav>
  );
};

export default Navbar;