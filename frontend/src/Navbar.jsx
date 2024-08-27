import React from 'react';
import './Navbar.css';
import twitterLogo from './assets/Twitter_logo.png'; // Make sure this is the correct path to your image file

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={twitterLogo} alt="Twitter Logo" className="twitter-logo" />
      <nav className="navbar">
        <h1>Sentimental Analysis</h1>
      </nav>
    </div>
  );
};

export default Navbar;
