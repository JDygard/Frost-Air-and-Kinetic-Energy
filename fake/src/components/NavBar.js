import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">My App</NavLink>
      </div>
      <div className="navbar__links">
        <NavLink to="/Settings" activeClassName="active">Settings</NavLink>
        <NavLink to="/CustomerService" activeClassName="active">Customer Service</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
