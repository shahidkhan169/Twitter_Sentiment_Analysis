import React from 'react';
import Navbar from './Navbar';
import Model from './Model';
import './App.css'; // Optional: Add custom styles if needed
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="app h-screen flex flex-col items-center justify-center relative">
      {/* Content Container Centered */}
      <div className="content-container text-center">
        <Navbar />
        <Model />
      </div>

      {/* Link to Dataset Description Page at the bottom */}
     <div className="absolute bottom-10 w-full text-center">
      <Link
        to="/description"
        className="text-blue-500 underline text-lg hover:text-blue-300"
      >
        Click Here for Dataset Description
      </Link>
    </div>
    </div>
  );
};

export default MainPage;
