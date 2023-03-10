import React, { useState } from 'react';
import { Range } from 'react-range';

const DualRangeInput = () => {
  const [values, setValues] = useState([25, 75]);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div>
      <p>Minimum Value: {values[0]}</p>
      <p>Maximum Value: {values[1]}</p>
      <Range
        values={values}
        step={1}
        min={0}
        max={100}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
              style={{
                height: '100%',
                width: '50%',
                backgroundColor: '#ddd',
                borderRadius: '4px',
                alignSelf: 'flex-end'
              }}
            />
            <div
              style={{
                height: '100%',
                width: '50%',
                backgroundColor: '#ddd',
                borderRadius: '4px',
                alignSelf: 'flex-end'
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ index, props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              border: '1px solid #ddd',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div
              style={{
                height: '6px',
                width: '6px',
                backgroundColor: '#ddd',
                borderRadius: '50%',
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default DualRangeInput;
