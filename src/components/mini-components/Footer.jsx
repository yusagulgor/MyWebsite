import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  // ! renk kodlarına bakılacak

  const location = useLocation();

  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "#18181B";
      case "/about":
        return "#18181B";
      default:
        return "#18181B";
    }
  };

  return (
    <footer style={{backgroundColor:getBackgroundColor()}} className="text-white p-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          © 2024 Yüşa Mervan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
