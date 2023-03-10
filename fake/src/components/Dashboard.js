import React from 'react';
import { connect } from 'react-redux';
import MasterStatusBar from './MasterStatusBar';
import ZoneGlanceBar from './ZoneGlanceBar';

const Dashboard = ({ alerts, zones }) => {
  return (
    <div className="dashboard">
      <MasterStatusBar status="ok" />
      {alerts.length > 0 && (
        <div className="dashboard__alerts">
          Alerts: {alerts.map((alert) => alert.message).join(', ')}
        </div>
      )}
      <div className="dashboard__zones">
        {zones.zones.map((zone) => (
            <ZoneGlanceBar key={zone.id} zone={zone} zoneId={zone.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    systemStatus: state.systemStatus,
    alerts: state.alerts,
    zones: state.zones
  };
};

export default connect(mapStateToProps)(Dashboard);