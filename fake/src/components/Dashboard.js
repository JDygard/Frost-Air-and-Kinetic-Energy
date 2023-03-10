import React from 'react';
import { connect } from 'react-redux';
import ZoneGlanceBar from './ZoneGlanceBar';

const Dashboard = ({ systemStatus, alerts, zones }) => {
    console.log(zones)
  return (
    <div className="dashboard">
      <div className="dashboard__system-status">
        System Status: {systemStatus}
      </div>
      {alerts.length > 0 && (
        <div className="dashboard__alerts">
          Alerts: {alerts.map((alert) => alert.message).join(', ')}
        </div>
      )}
      <div className="dashboard__zones">
        {zones.zones.map((zone) => (
            <ZoneGlanceBar key={zone.id} zone={zone} />
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