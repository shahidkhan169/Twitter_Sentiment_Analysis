// src/App.js
import React from 'react';
import Navbar from './Navbar'
import Model from './Model';
import './App.css'; // Optional: Add custom styles if needed

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Model />
    </div>
  );
};

export default App;
