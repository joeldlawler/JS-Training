// Get Max Using Reduce Method
// The reduce method can be used
// to get a single value of an array.

const numbers = [1, 2, 3, 4, 5, 6, 3];

const max = getMax(numbers);

function getMax(array) {
  if (array.length === 0) return undefined;

  // let maxValue = 0;
  // for (let value of array) if (value > maxValue) maxValue = value;
  // return maxValue;

  return array.reduce(
    (accumulator, currentValue) =>
      accumulator > currentValue ? accumulator : currentValue
  );
}

console.log(max);
