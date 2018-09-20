// Spread Operator

// Spread syntax allows an iterable such as an array expression or string to be expanded
// in places where zero or more arguments (for function calls) or elements
// (for array literals) are expected, or an object expression to be expanded in places
// where zero or more key-value pairs (for object literals) are expected.

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];

console.log(arr1);
// arr1 is now [3, 4, 5, 0, 1, 2]
