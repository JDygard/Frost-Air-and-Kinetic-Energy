import React from 'react';
import { connect } from 'react-redux';
import MasterStatusBar from './MasterStatusBar';
import ZoneGlanceBar from './ZoneGlanceBar';
import ZoneView from './ZoneView';
import '../styles/Dashboard.css';

const ZoneGlanceBars = ({ zones, onZoneClick }) => {
  return (
    <div className="dashboard__zones">
      {zones.map((zone) => (
        <ZoneGlanceBar key={zone.id} zone={zone} zoneId={zone.id} onClick={() => onZoneClick(zone.id)} />
      ))}
    </div>
  );
};

const Dashboard = ({ alerts, zones }) => {
  const [showZoneView, setShowZoneView] = React.useState(false);
  const [classNames, setClassNames] = React.useState(['dashboard']);
  const [zoneViewClassNames, setZoneViewClassNames] = React.useState(['zoneview']);
  const [zoneId, setZoneId] = React.useState('');

  function handleZoneViewClick(zoneId) {
    console.log(zoneId)
    setZoneId(zoneId);
    setShowZoneView(prevShowZoneView => !prevShowZoneView);
  }

  React.useEffect(() => {
    if (showZoneView) {
      console.log('showZoneView is true')
      setClassNames(['dashboard dashboard--hide']);
      setZoneViewClassNames(['zoneview zoneview--show']);
    } else {
      console.log('showZoneView is false')
      setClassNames(['dashboard']);
      setZoneViewClassNames(['zoneview']);
    }
  }, [showZoneView]);

  return (
    <div className="dashboard-wrapper">
      <div className={classNames}>
        <MasterStatusBar status="ok" />
        {alerts.length > 0 && (
          <div className="dashboard__alerts">
            Alerts: {alerts.map((alert) => alert.message).join(', ')}
          </div>
        )}
        <ZoneGlanceBars zones={zones.zones} onZoneClick={handleZoneViewClick} />
      </div>
      {showZoneView && <ZoneView classes={zoneViewClassNames} zoneId={zoneId} />}
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