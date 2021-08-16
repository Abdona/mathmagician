/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class MyCalculator extends React.Component {
  render() {
    return (
      <div className="grid-continer">
        <input className="resultscreen" placeholder="0" />
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button className="buttoperation">/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="buttoperation">x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="buttoperation">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="buttoperation">+</button>
        <button className="zeroitem">0</button>
        <button>.</button>
        <button className="buttoperation">=</button>
      </div>
    );
  }
}
