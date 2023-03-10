import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const ZoneView = ({ zones, open, setOpen }) => {
  const { zoneId } = useParams();
  const zone = zones.find((zone) => zone.id === parseInt(zoneId));
  
  if (!zone) {
    return <div>Zone not found</div>;
  }

  const toggleSubZone = (subZoneId) => {
    setOpen(open === subZoneId ? null : subZoneId);
  };

  return (
    <div className="zone-view">
      <h2>{zone.name}</h2>
      <p>Current temperature: {zone.currentTemperature}°C</p>
      <p>Set temperature: {zone.setTemperature}°C</p>
      <p>Humidity: {zone.humidity}%</p>
      <p>Fan speed: {zone.fanSpeed}</p>
      <ul>
        {zone.subZones?.map((subZone) => (
          <li key={subZone.id}>
            <div
              className="subzone-header"
              onClick={() => toggleSubZone(subZone.id)}
            >
              {subZone.name}
            </div>
            {open === subZone.id && (
              <div className="subzone-details">
                <p>Current temperature: {subZone.currentTemperature}°C</p>
                <p>Set temperature: {subZone.setTemperature}°C</p>
                <p>Humidity: {subZone.humidity}%</p>
                <p>Fan speed: {subZone.fanSpeed}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { zones } = state.zones;
  return {
    zones: zones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOpen: (open) => dispatch({ type: 'SET_OPEN', payload: open }),
  };
};

const ConnectedZoneView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ZoneView);

export default () => {
  const [open, setOpen] = React.useState(null);
  return <ConnectedZoneView open={open} setOpen={setOpen} />;
};
