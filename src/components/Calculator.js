import React from 'react';
import calculate from '../logic/calculate';
/* eslint-disable */
import operate from '../logic/operate';
/* eslint-enable */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */

class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.num = '';
    this.value = 0;
    this.state = {
      screen: 0, total: 0, next: 0, operation: '',
    };
    this.calchandler = this.calchandler.bind(this);
  }

  calchandler(e) {
    if (e.target.innerText === 'AC') {
      this.num = '';
      const { total, next, operation } = calculate(this.state, e.target.innerText);
      this.setState({
        screen: 0, total, next, operation,
      });
    } else if (e.target.id === 'eqoperation') {
      const { total, next, operation } = calculate(this.state, e.target.innerText);
      this.setState({
        screen: total, total, next, operation,
      });
      this.num = total;
    } else if (e.target.innerText === '+/-') {
      const { total, next, operation } = calculate(this.state, e.target.innerText);
      this.setState({
        screen: next || total, total, next, operation,
      });
      this.num = next || total;
    } else {
      this.num += e.target.innerText;
      this.setState({ screen: this.num, ...calculate(this.state, e.target.innerText) });
    }
  }

  render() {
    return (
      <div className="grid-continer">
        <input className="resultscreen" readOnly placeholder={this.state.screen} />
        <button onClick={this.calchandler} type="button">AC</button>
        <button onClick={this.calchandler} type="button">+/-</button>
        <button onClick={this.calchandler} type="button">%</button>
        <button onClick={this.calchandler} type="button" className="buttoperation">÷</button>
        <button onClick={this.calchandler} type="button">7</button>
        <button onClick={this.calchandler} type="button">8</button>
        <button onClick={this.calchandler} type="button">9</button>
        <button onClick={this.calchandler} type="button" className="buttoperation">x</button>
        <button onClick={this.calchandler} type="button">4</button>
        <button onClick={this.calchandler} type="button">5</button>
        <button onClick={this.calchandler} type="button">6</button>
        <button onClick={this.calchandler} type="button" className="buttoperation">-</button>
        <button onClick={this.calchandler} type="button">1</button>
        <button onClick={this.calchandler} type="button">2</button>
        <button onClick={this.calchandler} type="button">3</button>
        <button onClick={this.calchandler} type="button" className="buttoperation">+</button>
        <button onClick={this.calchandler} type="button" className="zeroitem">0</button>
        <button onClick={this.calchandler} type="button">.</button>
        <button onClick={this.calchandler} type="button" id="eqoperation" className="buttoperation">=</button>
      </div>
    );
  }
}

export default MyCalculator;
