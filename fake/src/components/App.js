import React from 'react';
import HVACControl from './HVACControl';
import NavBar from './NavBar';
import ZoneGlanceBar from './ZoneGlanceBar.js';
import Settings from './Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerService from './CustomerService';
import Dashboard from './Dashboard';
import Navbar from './NavBar';
import ZoneView from './ZoneView';
import ErrorBoundary from '../utils/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route exact path="/ZoneView/:zoneId" element={<ZoneView />} />

        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
