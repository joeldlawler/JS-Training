// Every and Some

const numbers = [1, -1, 2, 3];

// The function stops as soon as it hits the first
// value that it is looking for
const atLeastOneNegative = numbers.every(function(value) {
  return value >= 0;
});

console.log(atLeastOneNegative);

const atLeastOnePositive = numbers.some(function(value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
