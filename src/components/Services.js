import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => (
  <div className="services">
    <h1>City Services</h1>
    <hr></hr>
    <div className="service-buttons">
      <Link to="/services/waste-management" className="neon-button">Waste Management</Link>
      <Link to="/services/water-supply" className="neon-button">Water Supply</Link>
      <Link to="/services/electricity" className="neon-button">Electricity</Link>
      <Link to="/services/public-transportation" className="neon-button">Public Transportation</Link>
    </div>
  </div>
);

export default Services;
