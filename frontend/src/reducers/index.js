import { combineReducers } from 'redux';
import { homeReducer } from './home';
import { createJobReducer } from './createJob';

const reducers = combineReducers({
  homeReducer,
  createJobReducer
});

export default reducers;
