import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ReportIssues from './components/ReportIssues';
import RealTimeData from './components/RealTimeData';
import Footer from './components/Footer';
import WasteManagement from './components/WasteManagement';
import WaterSupply from './components/WaterSupply';
import Electricity from './components/Electricity';
import PublicTransportation from './components/PublicTransportation';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/report-issues" element={<ReportIssues />} />
          <Route path="/real-time-data" element={<RealTimeData />} />
          <Route path="/services/waste-management" element={<WasteManagement />} />
          <Route path="/services/water-supply" element={<WaterSupply />} />
          <Route path="/services/electricity" element={<Electricity />} />
          <Route path="/services/public-transportation" element={<PublicTransportation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
