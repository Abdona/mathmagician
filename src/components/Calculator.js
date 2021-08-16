import React from 'react';

export default class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <div className="grid-continer">
        <input className="resultscreen" placeholder="0" />
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="buttoperation">/</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="buttoperation">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="buttoperation">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="buttoperation">+</button>
        <button type="button" className="zeroitem">0</button>
        <button type="button">.</button>
        <button type="button" className="buttoperation">=</button>
      </div>
    );
  }
}
