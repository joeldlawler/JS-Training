// Array from Range

const numbers = arryFromRange(-10, 10);

console.log(numbers);

function arryFromRange(min, max) {
  let output = [];

  for (let i = min; i <= max; i++) output.push(i);

  return output;
}
