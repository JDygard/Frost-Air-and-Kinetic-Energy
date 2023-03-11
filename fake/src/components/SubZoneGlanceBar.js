import React, { useState } from 'react';
import { connect } from 'react-redux';
import StatusIndicator from './StatusIndicator';
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import ThermostatTwoToneIcon from '@mui/icons-material/ThermostatTwoTone';
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';
import '../styles/ZoneGlanceBar.css';

const SubZoneGlanceBar = ({ subZone, humidity, fanSpeed, temperature }) => {
  const [showChart, setShowChart] = useState(false);

  const handleShowChart = () => {
    setShowChart(!showChart);
  };
  console.log(subZone);

  const subZoneName = subZone?.name;

  return (
    <div className="zone">
      <h5 className="zone__name">{subZoneName}</h5>
      <span className="zone__icons">
        <StatusIndicator level="high" className="zone__status-indicator" />
        {`${temperature}°C`}
        <ThermostatTwoToneIcon className="zone__icon" />
        <StatusIndicator level="high" className="zone__status-indicator" />
        {`${humidity}%`}
        <OpacityTwoToneIcon className="zone__icon" />
        <StatusIndicator level="high" className="zone__status-indicator" />
        <BuildTwoToneIcon className="zone__icon" />
        <button className="zone__button" onClick={handleShowChart}>
          <ShowChartTwoToneIcon />
        </button>
        {/* Render chart if showChart is true */}
        {showChart && <p>Chart goes here</p>}
      </span>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { subZoneId } = ownProps;
  console.log(subZoneId)
  let subZoneState = null;
  for (const zone of state.zones.zones) {
    const subZones = zone.subZones || [];
    subZoneState = subZones.find((subZone) => subZone.id === subZoneId);
    if (subZoneState) {
      break;
    }
  }
  return {
    subZone: subZoneState,
    humidity: subZoneState?.humidity,
    fanSpeed: subZoneState?.fanSpeed,
    temperature: subZoneState?.currentTemperature,
  };
};

export default connect(mapStateToProps)(SubZoneGlanceBar);
