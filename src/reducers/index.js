import { combineReducers } from 'redux';

import history from './history1';
import currentExpression from './currentExpression1';

export default combineReducers({
  history,
  currentExpression
});
