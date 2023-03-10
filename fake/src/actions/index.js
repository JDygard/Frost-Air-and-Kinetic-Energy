import * as ActionTypes from '../constants/ActionTypes';

export const updateZoneTemperature = (zoneId, temperature) => {
  return {
    type: ActionTypes.UPDATE_ZONE_TEMPERATURE,
    payload: {
      zoneId,
      temperature
    }
  };
};

export const updateTemperature = (temperature) => {
  return {
    type: ActionTypes.UPDATE_TEMPERATURE,
    temperature
  };
};

export const updateHumidity = (humidity) => {
  return {
    type: ActionTypes.UPDATE_HUMIDITY,
    humidity
  };
};

export const updateFanSpeed = (fanSpeed) => {
  return {
    type: ActionTypes.UPDATE_FAN_SPEED,
    fanSpeed
  };
};