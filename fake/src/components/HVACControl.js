import React from 'react';
import { connect } from 'react-redux';
import { updateTemperature, updateHumidity, updateFanSpeed } from '../actions';

const HVACControl = ({ temperature, humidity, fanSpeed, updateTemperature, updateHumidity, updateFanSpeed }) => {
  const handleTemperatureChange = (event) => {
    updateTemperature(event.target.value);
  };

  const handleHumidityChange = (event) => {
    updateHumidity(event.target.value);
  };

  const handleFanSpeedChange = (event) => {
    updateFanSpeed(event.target.value);
  };

  return (
    <div>
      <h2>HVAC Control</h2>
      <p>Temperature: {temperature} degrees</p>
      <input type="range" min="0" max="100" value={temperature} onChange={handleTemperatureChange} />
      <p>Humidity: {humidity}%</p>
      <input type="range" min="0" max="100" value={humidity} onChange={handleHumidityChange} />
      <p>Fan Speed: {fanSpeed} RPM</p>
      <input type="range" min="0" max="100" value={fanSpeed} onChange={handleFanSpeedChange} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    temperature: state.temperature,
    humidity: state.humidity,
    fanSpeed: state.fanSpeed
  };
};

const mapDispatchToProps = {
  updateTemperature,
  updateHumidity,
  updateFanSpeed
};

export default connect(mapStateToProps, mapDispatchToProps)(HVACControl);