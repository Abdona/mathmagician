import React, { useState } from 'react';
import calculate from '../logic/calculate';

/*eslint-disable*/
import operate from '../logic/operate';
/* eslint-enable */

const MyCalculator = () => {
  let num = '';
  const [screen, setScreen] = useState(num);
  const [total, setTotal] = useState();
  const [next, setNext] = useState();
  const [operation, setOperation] = useState();
  const state = { total, next, operation };
  const calchandler = (e) => {
    if (e.target.innerText === 'AC') {
      num = 0;
      const { total, next, operation } = calculate(state, e.target.textContent);
      setScreen(num);
      setTotal(total);
      setNext(next);
      setOperation(operation);
    } else if (e.target.id === 'eqoperation') {
      try {
        const { total, next, operation } = calculate(state, e.target.textContent);
        setScreen(total);
        setTotal(total);
        setNext(next);
        setOperation(operation);
        num = total;
      } catch (error) {
        setScreen('Infit');
      }
    } else if (e.target.innerText === '+/-') {
      const { total, next, operation } = calculate(state, e.target.textContent);
      setScreen(next || total);
      setTotal(total);
      setNext(next);
      setOperation(operation);
      num = next || total;
    } else {
      if (screen === 0) setScreen('');
      setScreen((prevscreen) => setScreen(prevscreen + e.target.textContent));
      const { total, next, operation } = calculate(state, e.target.textContent);
      setTotal((prevTotal) => total || prevTotal);
      setNext(next);
      setOperation((prevOper) => operation || prevOper);
    }
  };
  return (
    <div className="page-section" data-testid="mycalc">
      <h1>Let`s do some math</h1>
      <div className="grid-continer">
        <input className="resultscreen" readOnly placeholder={screen || 0} />
        <button onClick={calchandler} type="button">AC</button>
        <button onClick={calchandler} type="button">+/-</button>
        <button onClick={calchandler} type="button">%</button>
        <button onClick={calchandler} type="button" className="buttoperation">??</button>
        <button onClick={calchandler} type="button">7</button>
        <button onClick={calchandler} type="button">8</button>
        <button onClick={calchandler} type="button">9</button>
        <button onClick={calchandler} type="button" className="buttoperation">x</button>
        <button onClick={calchandler} type="button">4</button>
        <button onClick={calchandler} type="button">5</button>
        <button onClick={calchandler} type="button">6</button>
        <button onClick={calchandler} type="button" className="buttoperation">-</button>
        <button onClick={calchandler} type="button">1</button>
        <button onClick={calchandler} type="button">2</button>
        <button onClick={calchandler} type="button">3</button>
        <button onClick={calchandler} type="button" className="buttoperation">+</button>
        <button onClick={calchandler} type="button" className="zeroitem">0</button>
        <button onClick={calchandler} type="button">.</button>
        <button onClick={calchandler} type="button" id="eqoperation" className="buttoperation">=</button>
      </div>
    </div>
  );
};

export default MyCalculator;
