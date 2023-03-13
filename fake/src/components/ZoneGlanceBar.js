import React, { useState } from 'react';
import { connect } from 'react-redux';
import StatusIndicator from './StatusIndicator';
import BoltTwoToneIcon from '@mui/icons-material/BoltTwoTone';
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import ThermostatTwoToneIcon from '@mui/icons-material/ThermostatTwoTone';
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';
import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone';
import '../styles/ZoneGlanceBar.css';

const ZoneGlanceBar = ({ zoneId, zone, humidity, fanSpeed, temperature, onClick, handleZoneId }) => {
  const [showChart, setShowChart] = useState(false);

  const handleShowChart = () => {
    setShowChart(!showChart);
  };

  return (
    <div className="zone">
      <h5 className="zone__name">{zone.name}</h5>
      <span className="zone__icons">
        <StatusIndicator level="high" className="zone__status-indicator" />
        <BoltTwoToneIcon className="zone__icon" />
        <StatusIndicator level="high" className="zone__status-indicator" />
        <ThermostatTwoToneIcon className="zone__icon" />
        <StatusIndicator level="high" className="zone__status-indicator" />
        <OpacityTwoToneIcon className="zone__icon" />
        <StatusIndicator level="high" className="zone__status-indicator" />
        <AirTwoToneIcon className="zone__icon" />
        <StatusIndicator level="high" className="zone__status-indicator" />
        <BuildTwoToneIcon className="zone__icon" />
        <button className="zone__button" onClick={handleShowChart}><ShowChartTwoToneIcon /></button>
        
        <button className="zone__button" onClick={() => onClick(zone.zoneId)}><TuneTwoToneIcon /></button>
        
        {/* Render chart if showChart is true */}
        <p className={`zone__chart ${showChart ? 'zone__chart--show' : ''}`}>Chart goes here</p>
      </span>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const zoneId = ownProps.zoneId;
  const zoneState = state.zones.zones.find((zone) => zone.id === zoneId);
  return {
    zone: zoneState,
    humidity: zoneState.humidity,
    fanSpeed: zoneState.fanSpeed,
    temperature: zoneState.currentTemperature,
  };
};

export default connect(mapStateToProps)(ZoneGlanceBar);
