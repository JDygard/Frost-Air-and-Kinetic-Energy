import React from 'react';
import { connect } from 'react-redux';
import StatusIndicator from './StatusIndicator';

// Icons import
import BoltTwoToneIcon from '@mui/icons-material/BoltTwoTone';
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import ThermostatTwoToneIcon from '@mui/icons-material/ThermostatTwoTone';

const ZoneGlanceBar = ({ zone, humidity, fanSpeed, temperature }) => {
  return (
    <div className="zone">
      <h5 style={{ display: 'inline-block', width: "80px", wordWrap: true }}>{zone.name}</h5>
      <div style={{ display: 'inline-block' }}>
        <StatusIndicator level="high" style={{ display: "inline-block"}} />
        <BoltTwoToneIcon style={{ display: 'inline-block' }} />
        <ThermostatTwoToneIcon style={{ display: 'inline-block', marginLeft: '10px' }} />
        <OpacityTwoToneIcon style={{ display: 'inline-block', marginLeft: '10px' }} />
        <AirTwoToneIcon style={{ display: 'inline-block', marginLeft: '10px' }} />
        <BuildTwoToneIcon style={{ display: 'inline-block', marginLeft: '10px' }} />
        <p style={{ display: 'inline-block' }}>Current Temperature: {temperature}°F</p>
        <p style={{ display: 'inline-block', marginLeft: '10px' }}>Set Temperature: {zone.setTemperature}°F</p>
        <p style={{ display: 'inline-block' }}>Humidity: {humidity}%</p>
        <p style={{ display: 'inline-block', marginLeft: '10px' }}>Fan Speed: {fanSpeed}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const zoneState = state.zones.zones.find((zone) => zone.id === ownProps.zone.id);
  return {
    humidity: zoneState.humidity,
    fanSpeed: zoneState.fanSpeed,
    temperature: zoneState.currentTemperature
  };
};

export default connect(mapStateToProps)(ZoneGlanceBar);
