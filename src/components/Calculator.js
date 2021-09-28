import React from 'react';
import { connect } from 'react-redux';
import { opToExpression, num1ToExpression, num2ToExpression } from '../actions/currentExpression';
import { addHistoryItem } from '../actions/history';

const numbers1 = [0, 1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8, 9];
const operations = ['-', '+', '÷', '×','=',];

const Calculator = ({
  expression,
  operationToExpression,
  number1ToExpression,
  number2ToExpression,
  addHistoryItem
}) => <fieldset className="calculator-body">
  <legend>Calculator</legend>
  <input disabled="true" value={expression} className="result"/>

  <br />
  
  {numbers1.map(num1 => <button onClick={() => number1ToExpression(num1)} key={num1}>{num1}</button>)}


  <br />
  
  {numbers2.map(num2 => <button  onClick={() => number2ToExpression(num2)} key={num2}>{num2}</button>)}

  <br />

  {operations.map((op, index) => (
    <button  onClick={() => op === '=' ? addHistoryItem(expression) : operationToExpression(op)} key={index}>{op}</button>)
    )}

</fieldset>;

const mapStateToProps = state => ({
  expression: state.currentExpression,
});


const mapDispatchToProps = (dispatch) => ({
  operationToExpression: op => dispatch(opToExpression(op)),
  number1ToExpression: num1 => dispatch(num1ToExpression(num1)),
  number1ToExpression: num2 => dispatch(num2ToExpression(num2)),
  addHistoryItem: expr => dispatch(addHistoryItem(expr))
})

export default connect(mapStateToProps, mapDispatchToProps)( Calculator);