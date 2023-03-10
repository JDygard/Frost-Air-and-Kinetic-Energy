import React from 'react';
import HVACControl from './HVACControl';
import NavBar from './NavBar';
import ZoneGlanceBar from './ZoneGlanceBar.js';
import Settings from './Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerService from './CustomerService';
import Dashboard from './Dashboard';

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/customer-service" element={<CustomerService />} />
          </Routes>
        </Router>
    );
};

export default App;
