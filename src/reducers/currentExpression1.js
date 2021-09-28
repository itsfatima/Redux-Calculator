import { ADD_OPERATION, ADD_NUMBER1, ADD_NUMBER2, RESTORE_EXPRESSION } from '../actions/currentExpression';
import { ADD_HISTORY_ITEM } from '../actions/history';

const DEFAULT_STATE = '';

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_OPERATION:
      return state + action.payload;

    case ADD_NUMBER1:
      return state + action.payload;

    case ADD_NUMBER2:
      return state + action.payload;

    case ADD_HISTORY_ITEM: 
      return '';

    case RESTORE_EXPRESSION:
      return action.payload;

    default:
      return state;
  }
}