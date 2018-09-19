// Except

const numbers = [1, 2, 3, 4, 5, 6];

console.log(except(numbers, [3, 2, 1]));

function except(array, excluded) {
  let output = [];

  for (let element of array)
    if (!excluded.includes(element)) output.push(element);

  return output;
}
