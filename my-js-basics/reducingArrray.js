// Reducing an Array

const numbers = [1, -1, 2, 3];

// What is happening
// Iterates the length of the arrray

// First pass  accumulator = 1 (first value) currentValue = -2 (second value) accumulator = 0
// Second pass accumulator = 0 (currentValue from first pass) currentValue = 2 (third value)  accumulator = 2
// Third pass  accumulator = 2 (currentValue) currentValue = 3 (fourth value) accumulator = 5

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);
