const sum = require ('../src/sum');

it('adds 5 + 7 to equal 12', () => {
  expect(sum(5, 7)).toBe(12);
});