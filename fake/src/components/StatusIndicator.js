import React from 'react';

const StatusIndicator = ({ level }) => {
  const blockStyle = {
    width: '8px',
    // Write a ternary expression to set the height to 10px if level is 'low', 20px if level is 'medium', and 30px if level is 'high'
    height: level === 'low' ? '3px' : level === 'medium' ? '6px' : '9px',
    margin: '0',
  };

  const redBlock = <div style={{ ...blockStyle, backgroundColor: 'red' }} />;
  const yellowBlock = (
    <div style={{ ...blockStyle, backgroundColor: 'yellow', marginTop: '1px' }} />
  );
  const greenBlock = (
    <div style={{ ...blockStyle, backgroundColor: 'green', marginTop: '1px' }} />
  );

  let blocks = [];
  if (level === 'low') {
    blocks.push(redBlock);
  } else if (level === 'medium') {
    blocks.push(yellowBlock, yellowBlock);
  } else if (level === 'high') {
    blocks.push(greenBlock, greenBlock, greenBlock);
  }
  console.log(blocks)
  return <div>{blocks}</div>;
};

export default StatusIndicator;
