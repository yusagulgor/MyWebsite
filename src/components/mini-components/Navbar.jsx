import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "bg-BgHome"; 
      case "/about":
        return "bg-BgAbout";
      case "/project":
        return "bg-black";   
      default:
        return "bg-black";
    }
  };

  return (
    <nav className={`p-4 flex justify-between items-center ${getBackgroundColor()}`}> 
      <div className="flex items-center justify-start">
        <Link to="/" className="text-white hover:text-gray-400 transition duration-300">
          <span className="text-white font-semibold text-xl"> 
            Yüşa Mervan
          </span>
        </Link>
      </div>
      <div className='flex items-center justify-end space-x-4'> 
        <div className='text-white'>
          <Link to="/about" className="text-white flex items-center">
            <FaUser className="mr-1" /> 
            About
          </Link>
        </div>
        <div className='text-white'>
          <Link to="/project" className="text-white flex items-center">
            <FaUser className="mr-1" /> 
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
