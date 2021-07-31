const formatNumberWithCommas = require('./formatNumberWithCommas');

test('Returns string with appropriate places', () => {
  expect((formatNumberWithCommas(1000))).toBe('1,000');
});

test('Returns string with appropriate places', () => {
  expect((formatNumberWithCommas(10000))).toBe('10,000');
});

test('Returns string with appropriate places', () => {
  expect(formatNumberWithCommas('1000000')).toBe('1,000,000');
});

test('Returns string with appropriate places', () => {
  expect(formatNumberWithCommas('0')).toBe('0');
});


test('Returns string with appropriate places', () => {
  expect(formatNumberWithCommas('-1000')).toBe('-1,000');
});

test('Returns string with appropriate places', () => {
  expect(formatNumberWithCommas('1,000')).toBe('1,000');
});

test('Returns string with appropriate places', () => {
  expect(formatNumberWithCommas(null)).toBe('0');
});


test('Returns string with appropriate places', () => {
  expect(formatNumberWithCommas(undefined)).toBe('0');
});
