import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
  
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/report-issues">Report Issues</Link></li>
      <li><Link to="/real-time-data">Real-Time Data</Link></li>
    </ul>
  </nav>
);

export default Navbar;
