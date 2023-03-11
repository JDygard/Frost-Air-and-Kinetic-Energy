import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  zones: [
    {
      id: 1,
      name: 'First Floor',
      setTemperature: 22,
      currentTemperature: 21,
      humidity: 45,
      fanSpeed: 'Low',
      subZones: [
        {
          id: 1,
          name: 'Room 101',
          setTemperature: 22,
          currentTemperature: 20,
          humidity: 40,
          fanSpeed: 'Low'
        },
        {
          id: 2,
          name: 'Room 102',
          setTemperature: 20,
          currentTemperature: 22,
          humidity: 50,
          fanSpeed: 'High'
        },
        {
          id: 3,
          name: 'Room 103',
          setTemperature: 22,
          currentTemperature: 21,
          humidity: 45,
          fanSpeed: 'Medium'
        },
        {
          id: 4,
          name: 'Room 104',
          setTemperature: 21,
          currentTemperature: 19,
          humidity: 40,
          fanSpeed: 'Low'
        }
      ]
    },
    {
      id: 2,
      name: 'Second Floor',
      setTemperature: 20,
      currentTemperature: 22,
      humidity: 50,
      fanSpeed: 'Medium',
      subZones: [
        {
          id: 1,
          name: 'Room 201',
          setTemperature: 22,
          currentTemperature: 20,
          humidity: 40,
          fanSpeed: 'Low'
        },
        {
          id: 2,
          name: 'Room 202',
          setTemperature: 20,
          currentTemperature: 22,
          humidity: 50,
          fanSpeed: 'High'
        },
        {
          id: 3,
          name: 'Room 203',
          setTemperature: 22,
          currentTemperature: 21,
          humidity: 45,
          fanSpeed: 'Medium'
        },
        {
          id: 4,
          name: 'Room 204',
          setTemperature: 21,
          currentTemperature: 19,
          humidity: 40,
          fanSpeed: 'Low'
        },
        {
          id: 5,
          name: 'Room 205',
          setTemperature: 20,
          currentTemperature: 21,
          humidity: 50,
          fanSpeed: 'High'
        }
      ]
    },
    {
      id: 3,
      name: 'Loading Dock',
      setTemperature: 18,
      currentTemperature: 17,
      humidity: 60,
      fanSpeed: 'High',
      subZones: [
        {
          id: 1,
          name: 'Receiving',
          setTemperature: 18,
          currentTemperature: 16,
          humidity: 55,
          fanSpeed: 'High'
        },
        {
          id: 2,
          name: 'Dispatch',
          setTemperature: 19,
          currentTemperature: 18,
          humidity: 60,
          fanSpeed: 'High'
        }
      ]
    },
    {
      id: 4,
      name: 'Kitchen',
      setTemperature: 22,
      currentTemperature: 20,
      humidity: 45,
      fanSpeed: 'High',
      subZones: [
        {
          id: 11,
          name: 'Refrigerator',
          setTemperature: 4,
          currentTemperature: 3,
          humidity: 35,
          fanSpeed: 'Low'
        },
        {
          id: 12,
          name: 'Freezer',
          setTemperature: -18,
          currentTemperature: -20,
          humidity: 20,
          fanSpeed: 'High'
        },
        {
          id: 13,
          name: 'Prep Area',
          setTemperature: 22,
          currentTemperature: 21,
          humidity: 50,
          fanSpeed: 'High'
        },
        {
          id: 15,
          name: 'Stove',
          setTemperature: 0,
          currentTemperature: 15,
          humidity: 30,
          fanSpeed: 'Medium'
        }
      ]
    }
  ]
};

const maintenanceIntervals = {
  "tasks": [
    {
      "id": 1,
      "name": "Replace air filters",
      "interval": 3,
      "last_performed": "2022-02-15"
    },
    {
      "id": 2,
      "name": "Clean condenser coils",
      "interval": 12,
      "last_performed": "2021-09-01"
    },
    {
      "id": 3,
      "name": "Inspect and clean evaporator coils",
      "interval": 6,
      "last_performed": "2021-12-01"
    },
    {
      "id": 4,
      "name": "Check and tighten electrical connections",
      "interval": 6,
      "last_performed": "2021-12-01"
    },
    {
      "id": 5,
      "name": "Check and calibrate thermostats",
      "interval": 12,
      "last_performed": "2021-09-01"
    },
    {
      "id": 6,
      "name": "Inspect and lubricate motors and bearings",
      "interval": 6,
      "last_performed": "2021-12-01"
    },
    {
      "id": 7,
      "name": "Inspect and adjust fan belts",
      "interval": 6,
      "last_performed": "2021-12-01"
    },
    {
      "id": 8,
      "name": "Clean and check operation of humidifiers and dehumidifiers",
      "interval": 12,
      "last_performed": "2021-09-01"
    },
    {
      "id": 9,
      "name": "Check and recharge refrigerant levels",
      "interval": 12,
      "last_performed": "2021-09-01"
    },
    {
      "id": 10,
      "name": "Inspect and test safety controls",
      "interval": 12,
      "last_performed": "2021-09-01"
    }
  ]
}


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
