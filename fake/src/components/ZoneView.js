import React, { useState } from 'react';
import { connect } from 'react-redux';
import SubZoneGlanceBar from './SubZoneGlanceBar';
import SliderLockBox from './SliderLockBox';
import "../styles/ZoneView.css"

const ZoneView = ({ zones, zoneId, classes, clearZoneView }) => {
  const [openSubZones, setOpenSubZones] = useState(false);
  const [openMaintenance, setOpenMaintenance] = useState(false);
  const [openEquipment, setOpenEquipment] = useState(false);
  const zone = zones.find((zone) => zone.id === parseInt(zoneId));

  if (!zone) {
    return <div>Zone not found</div>;
  }  
  
  /*
  TYPESCRIPT VERSION
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  */

  function handleClearZoneView() {
    clearZoneView();
    setOpenSubZones(false);
  }

  return (
    <div className={classes.join(' ')}>
      <div className="zoneview-clear" onClick={handleClearZoneView}></div>
      <div className="zoneview-data">
        <h2>{zone.name}</h2>
        <p>Current temperature: {zone.currentTemperature}°C</p>
        <p>Set temperature: {zone.setTemperature}°C</p>
        <p>Humidity: {zone.humidity}%</p>
        <p>Fan speed: {zone.fanSpeed}</p>
        <SliderLockBox />
        <div className="expandable-section">
          <div
            className="expandable-section-header"
            onClick={() => setOpenSubZones(!openSubZones)}
          >
            Sub-zones
          </div>
          {openSubZones && (
            <div className={`expandable-section-content ${openSubZones ? 'open' : ''}`} >
              {zone.subZones?.map((subZone) => (
                <SubZoneGlanceBar key={subZone.id} subZoneId={subZone.id} />
              ))}
            </div>
          )}
        </div>
        <div className="expandable-section">
          <div
            className="expandable-section-header"
            onClick={() => setOpenMaintenance(!openMaintenance)}
          >
            Maintenance
          </div>
          {openMaintenance && (
            <div className={`expandable-section-content ${openSubZones ? 'open' : ''}`}>
              Placeholder text for Maintenance
            </div>
          )}
        </div>
        <div className="expandable-section">
          <div
            className="expandable-section-header"
            onClick={() => setOpenEquipment(!openEquipment)}
          >
            Equipment
          </div>
          {openEquipment && (
            <div className={`expandable-section-content ${openSubZones ? 'open' : ''}`}>
              Placeholder text for Equipment
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { zones } = state.zones;
  return {
    zones: zones,
  };
};

export default connect(mapStateToProps)(ZoneView);