import calculate from './logic/calculate';

test('Should match state', () => {
  const mockState = {
    total: null,
    next: null,
    operation: null,
  };

  expect(calculate(mockState, 'AC')).toStrictEqual(mockState);
});
