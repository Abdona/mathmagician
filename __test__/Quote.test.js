import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Quote from '../src/components/Quote';
import '@testing-library/jest-dom';

describe('Test Quote page Components', () => {
  it('test Quote function component renders without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<Quote />, divElement);
  });

  it('render correctly', () => {
    const { getByTestId } = render(<Quote />);
    expect(getByTestId('quote')).toHaveTextContent('Mathematics is not about numbers,equations,computations,or algorithms: its about understanding.- William Paul Thurston.');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
