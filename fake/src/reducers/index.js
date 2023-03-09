import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/ActionTypes';

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

const rootReducer = combineReducers({
  temperature,
  humidity,
  fanSpeed
});

export default rootReducer;
