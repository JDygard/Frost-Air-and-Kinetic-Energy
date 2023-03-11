import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import SubZoneGlanceBar from './SubZoneGlanceBar';

const ZoneView = ({ zones }) => {
  const [openSubZones, setOpenSubZones] = useState(false);
  const [openMaintenance, setOpenMaintenance] = useState(false);
  const [openEquipment, setOpenEquipment] = useState(false);
  const { zoneId } = useParams();
  const zone = zones.find((zone) => zone.id === parseInt(zoneId));

  if (!zone) {
    return <div>Zone not found</div>;
  }


  return (
    <div className="zone-view">
      <h2>{zone.name}</h2>
      <p>Current temperature: {zone.currentTemperature}°C</p>
      <p>Set temperature: {zone.setTemperature}°C</p>
      <p>Humidity: {zone.humidity}%</p>
      <p>Fan speed: {zone.fanSpeed}</p>
      <div className="expandable-section">
        <div
          className="expandable-section-header"
          onClick={() => setOpenSubZones(!openSubZones)}
        >
          Sub-zones
        </div>
        {openSubZones && (
          <div className="expandable-section-content"  style={{ marginLeft: "20px"}} >
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
          <div className="expandable-section-content">
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
          <div className="expandable-section-content">
            Placeholder text for Equipment
          </div>
        )}
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