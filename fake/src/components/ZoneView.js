import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const ZoneView = ({ zone }) => {
  const { zoneId } = useParams();
    console.log(zone)
  if (!zone) {
    return <div>Zone not found</div>;
  }

  const zoneInfo = zone[zoneId]; // use zoneId to get zone-specific information
  return (
    <div className="zone-view">
      <h2>{zoneInfo.name}</h2>
      <p>Current temperature: {zoneInfo.currentTemperature}°F</p>
      <p>Set temperature: {zoneInfo.setTemperature}°F</p>
      <p>Humidity: {zoneInfo.humidity}%</p>
      <p>Fan speed: {zoneInfo.fanSpeed}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { zones } = state.zones; // get zone state from redux store
  return {
    zone: zones,
  };
};

export default connect(mapStateToProps)(ZoneView);
