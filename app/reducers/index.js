import { combineReducers } from 'redux';
import { ENABLE, DISABLE } from '../actions/'
import { routerReducer as routing } from 'react-router-redux';

function enabler(state = false, action) {
  switch(action.type) {
    case ENABLE:
      return true
    case DISABLE:
      return false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  enabler,
  routing
});

export default rootReducer;
