import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">FAKE</NavLink>
      </div>
      <div className="navbar__links">
        <NavLink to="/Settings" activeClassName="active">Settings</NavLink>
        <NavLink to="/CustomerService" activeClassName="active">Customer Service</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
