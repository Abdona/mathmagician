import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import MyCalculator from '../components/Calculator';
import '@testing-library/jest-dom';

describe('Test MyCalculator Components', () => {
  it('test MyCalculator function component renders without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<MyCalculator />, divElement);
  });

  it('render correctly', () => {
    const { getByTestId } = render(<MyCalculator />);
    expect(getByTestId('mycalc')).toHaveTextContent('Let`s do some mathAC+/-%÷789x456-123+0.=');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<MyCalculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test user interaction simultaion', () => {
  it('test adding two numbers ', () => {
    render(<MyCalculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('')).toContainHTML('5');
  });

  // 5- 3 = 2
  it('test subtracting two numbers ', () => {
    render(<MyCalculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('')).toContainHTML('2');
  });

  // 10 x 3 = 30
  it('test Multiplying two numbers ', () => {
    render(<MyCalculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('')).toContainHTML('30');
  });

  it('test Dividing two numbers ', () => {
    render(<MyCalculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('')).toContainHTML('5');
  });

  it('test Mod Operation two numbers ', () => {
    render(<MyCalculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('%'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('')).toContainHTML('1');
  });
});
