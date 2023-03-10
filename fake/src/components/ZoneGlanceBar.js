import React from 'react';
import { connect } from 'react-redux';

const ZoneGlanceBar = ({ zone, humidity, fanSpeed, temperature }) => {
  return (
    <div className="zone">
      <h2>{zone.name}</h2>
      <p>Current Temperature: {temperature}°F</p>
      <p>Set Temperature: {zone.setTemperature}°F</p>
      <p>Humidity: {humidity}%</p>
      <p>Fan Speed: {fanSpeed}</p>
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