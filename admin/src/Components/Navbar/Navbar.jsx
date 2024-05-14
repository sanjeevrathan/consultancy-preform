import React from 'react';
import './Navbar.css';
import navlogo from '../Assets/nav-logo.png';
import brand_logo from '../Assets/brand_logo.png';
import navprofileIcon from '../Assets/nav-profile.svg';
//import brandName from '../Assets/brand-name.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo-container flex items-center">
        <img src={navlogo} className='nav-logo' alt="" />
        <img src={brand_logo} className='brand-name' alt="cool" />
      </div>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  );
};

export default Navbar;
