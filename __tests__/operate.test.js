import operate from '../src/logic/operate';

const fnum = 5;
const snum = 10;
describe('Test operate function', () => {
  test('add operation return String result', () => {
    expect(operate(fnum, snum, '+')).toEqual('15');
  });
});
