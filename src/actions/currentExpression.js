export const ADD_OPERATION = 'ADD_OPERATION';
export const ADD_NUMBER1 = 'ADD_NUMBER1';
export const ADD_NUMBER2 = 'ADD_NUMBER2';
export const RESTORE_EXPRESSION = 'RESTORE_EXPRESSION';

export const toExpression = (type, payload) => ({
  type,
  payload
});

export const opToExpression = (op) => toExpression(ADD_OPERATION, op);

export const num1ToExpression = num1 => toExpression(ADD_NUMBER1, num1);

export const num2ToExpression = num2 => toExpression(ADD_NUMBER2, num2);

export const restoreExpression = (payload) => ({
  type: RESTORE_EXPRESSION,
  payload,
});