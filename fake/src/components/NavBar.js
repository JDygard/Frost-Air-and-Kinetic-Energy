import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">
          <img src="/FrostAirLogo.png" alt="Frost Logo" className='logo' />
        </NavLink>
      </div>
      <div className="navbar__links">
        <NavLink to="/Settings" >Settings</NavLink>
        <NavLink to="/CustomerService" >Customer Service</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
