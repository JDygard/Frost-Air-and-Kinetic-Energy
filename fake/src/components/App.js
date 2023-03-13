import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '../utils/ErrorBoundary';

// Components
import Settings from './Settings';
import CustomerService from './CustomerService';
import Dashboard from './Dashboard';
import Navbar from './NavBar';
import ZoneView from './ZoneView';

// Style
import '../styles/global.css';

const App = () => {
  return (
    <div className='lock-it-up'>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route exact path="/ZoneView/:zoneId" element={<ZoneView />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/customerService" element={<CustomerService />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App;
