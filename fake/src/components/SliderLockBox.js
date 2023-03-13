import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import '../styles/SliderLockBox.css';

const SliderLockBox = () => {
    const [daytimeValue, setDaytimeValue] = useState([20, 30]);
    const [nighttimeValue, setNighttimeValue] = useState([25, 35]);
    const [locked, setLocked] = useState(true);

    const handleDaytimeChange = (event, newValue) => {
        setDaytimeValue(newValue);
    };

    const handleNighttimeChange = (event, newValue) => {
        setNighttimeValue(newValue);
    };

    const handleLockToggle = () => {
        setLocked(!locked);
    };

    return (
        <div className={`slider-lock-box ${locked ? 'locked' : ''}`}>
        <button className="lock-button" onClick={handleLockToggle}>
            {locked ? <LockIcon /> : <LockOpenIcon />}
        </button>
            <div className="slider-container">
                <div className="slider-range">
                    <WbSunnyIcon />
                    <Slider
                        getAriaLabel={() => 'Daytime temperature range'}
                        value={daytimeValue}
                        onChange={handleDaytimeChange}
                        valueLabelDisplay="auto"
                        disabled={locked}
                        classes={{
                            valueLabel: 'slider-value-label'
                        }}
                        min={10}
                        max={40}
                        step={0.5}
                        marks={[
                            { value: 10, label: '10°C' },
                            { value: 20, label: '20°C' },
                            { value: 30, label: '30°C' },
                            { value: 40, label: '40°C' },
                        ]}
                        valueLabelFormat={(value) => `${value}°C`}
                        className="slider"
                    />
                </div>
                <div className="slider-range">
                    <NightsStayIcon />
                    <Slider
                        getAriaLabel={() => 'Nighttime temperature range'}
                        value={nighttimeValue}
                        onChange={handleNighttimeChange}
                        valueLabelDisplay="auto"
                        disabled={locked}
                        classes={{
                            valueLabel: 'slider-value-label'
                        }}
                        min={10}
                        max={40}
                        step={0.5}
                        marks={[
                            { value: 10, label: '10°C' },
                            { value: 20, label: '20°C' },
                            { value: 30, label: '30°C' },
                            { value: 40, label: '40°C' },
                        ]}
                        valueLabelFormat={(value) => `${value}°C`}
                        className="slider-blue"
                    />
                </div>
            </div>
        </div>);
};

export default SliderLockBox;