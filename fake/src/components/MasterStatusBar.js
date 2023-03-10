import React from 'react';

const MasterStatusBar = ({ status }) => {
  let color = '';
  let message = '';

  switch (status) {
    case 'ok':
      color = 'green';
      message = 'System is operating normally';
      break;
    case 'warning':
      color = 'yellow';
      message = 'Warning: system is experiencing issues';
      break;
    case 'error':
      color = 'red';
      message = 'Error: system is down';
      break;
    default:
      color = 'grey';
      message = 'Unknown status';
  }

  return (
    <div
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '10px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
    >
      {message}
    </div>
  );
};

export default MasterStatusBar;