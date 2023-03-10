import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  zones: [
    {
      id: 1,
      name: 'Lobby',
      setTemperature: 72,
      currentTemperature: 70,
      humidity: 45,
      fanSpeed: 'Low'
    },
    {
      id: 2,
      name: 'Conference Room 1',
      setTemperature: 70,
      currentTemperature: 72,
      humidity: 50,
      fanSpeed: 'High'
    },
    {
      id: 3,
      name: 'Conference Room 2',
      setTemperature: 72,
      currentTemperature: 70,
      humidity: 45,
      fanSpeed: 'Medium'
    },
    {
      id: 4,
      name: 'Executive Office',
      setTemperature: 68,
      currentTemperature: 70,
      humidity: 50,
      fanSpeed: 'High'
    },
    {
      id: 5,
      name: 'Marketing Department',
      setTemperature: 70,
      currentTemperature: 68,
      humidity: 45,
      fanSpeed: 'Low'
    },
    {
      id: 6,
      name: 'Sales Department',
      setTemperature: 72,
      currentTemperature: 70,
      humidity: 50,
      fanSpeed: 'High'
    },
    {
      id: 7,
      name: 'Human Resources Department',
      setTemperature: 70,
      currentTemperature: 72,
      humidity: 45,
      fanSpeed: 'Low'
    },
    {
      id: 8,
      name: 'IT Department',
      setTemperature: 68,
      currentTemperature: 70,
      humidity: 50,
      fanSpeed: 'High'
    },
    {
      id: 9,
      name: 'Accounting Department',
      setTemperature: 70,
      currentTemperature: 68,
      humidity: 45,
      fanSpeed: 'Low'
    },
    {
      id: 10,
      name: 'Break Room',
      setTemperature: 72,
      currentTemperature: 70,
      humidity: 50,
      fanSpeed: 'Medium'
    }
  ]
};

const zonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ZONE':
      // Add a new zone to the zones array
      return {
        ...state,
        zones: [...state.zones, action.payload]
      };
    case 'UPDATE_ZONE_TEMPERATURE':
      // Update the temperature for the corresponding zone
      const updatedZones = state.zones.map((zone) => {
        if (zone.id === action.payload.zoneId) {
          return {
            ...zone,
            currentTemperature: action.payload.temperature
          };
        }
        return zone;
      });
      return {
        ...state,
        zones: updatedZones
      };
    // Handle other actions here
    default:
      return state;
  }
};

const temperature = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_TEMPERATURE:
      return action.temperature;
    default:
      return state;
  }
};

const humidity = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_HUMIDITY:
      return action.humidity;
    default:
      return state;
  }
};

const fanSpeed = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_FAN_SPEED:
      return action.fanSpeed;
    default:
      return state;
  }
};

const alertsReducer = (state = [], action) => {
  switch (action.type) {
  case ActionTypes.ADD_ALERT:
  return [...state, action.payload];
  case ActionTypes.REMOVE_ALERT:
  return state.filter((alert) => alert.id !== action.payload.id);
  default:
  return state;
  }
  };

const rootReducer = combineReducers({
  zones: zonesReducer,
  temperature,
  humidity,
  fanSpeed,
  alerts: alertsReducer
});

export default rootReducer;
