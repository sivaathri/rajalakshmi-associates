import React from 'react';
import logoImg from '../assets/logo.png';

export const Logo = ({ className = "h-9 xs:h-11 sm:h-13 md:h-14 lg:h-16" }) => {
  return (
    <div className="flex items-center select-none py-0 my-0">
      <img
        src={logoImg}
        alt="Rajalakshimi Associates"
        className={`w-auto object-contain transition-transform duration-300 hover:scale-105 ${className}`}
      />
    </div>
  );
};

export default Logo;
