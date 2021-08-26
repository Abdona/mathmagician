import calculate from './logic/calculate';

test('Should match state', () => {
  const mockState = {
    total: null,
    next: null,
    operation: null,
  };

  expect(calculate(mockState, 'AC')).toStrictEqual(mockState);
});

test('Should initialize next', () => {
  const mockState = {
    total: null,
    next: null,
    operation: null,
  };

  expect(calculate(mockState, '1')).toStrictEqual({
    next: '1',
    total: null,
  });
});

test('Should add', () => {
  const mockState = {
    total: null,
    next: '5',
    operation: null,
  };

  expect(calculate(mockState, '+')).toStrictEqual(
    { total: '5', next: null, operation: '+' },
  );
});

test('Should equate', () => {
  const mockState = {
    total: '5',
    next: '5',
    operation: '+',
  };

  expect(calculate(mockState, '=')).toStrictEqual(
    { total: '10', next: null, operation: null },
  );
});

test('Should add', () => {
  const mockState = {
    total: '5',
    next: null,
    operation: '+',
  };

  expect(calculate(mockState, '5')).toStrictEqual(
    { next: '5' },
  );
});

test('Should subtract', () => {
  const mockState = {
    total: '5',
    next: '5',
    operation: '-',
  };

  expect(calculate(mockState, '=')).toStrictEqual(
    { total: '0', next: null, operation: null },
  );
});

test('Should add qualifier', () => {
  const mockState = {
    total: null,
    next: '5',
    operation: null,
  };

  expect(calculate(mockState, '+/-')).toStrictEqual({ next: '-5' });
});

test('Should add decimal point', () => {
  const mockState = {
    total: null,
    next: '5',
    operation: null,
  };

  expect(calculate(mockState, '.')).toStrictEqual({ next: '5.' });
});

test('Should return remainder', () => {
  const mockState = {
    total: '7',
    next: '5',
    operation: '%',
  };

  expect(calculate(mockState, '=')).toStrictEqual({ total: '2', next: null, operation: null });
});

test('Should divide', () => {
  const mockState = {
    total: '10',
    next: '2',
    operation: '÷',
  };

  expect(calculate(mockState, '=')).toStrictEqual({ total: '5', next: null, operation: null });
});

test('Should multiply', () => {
  const mockState = {
    total: '10',
    next: '2',
    operation: 'x',
  };

  expect(calculate(mockState, '=')).toStrictEqual({ total: '20', next: null, operation: null });
});
