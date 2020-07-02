import { combineReducers } from 'redux';

const getStep = (state = [], action) => {
  if (action.type === 'GET_STEP') {
    return [...action.payload];
  }
  return state;
};

export default combineReducers({
  getStep: getStep,
});
