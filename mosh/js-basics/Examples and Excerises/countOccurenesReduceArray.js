// Except

const numbers = [1, 2, 3, 4, 5, 6, 3];

const count = countOccurances(numbers, 3);

function countOccurances(array, searchElement) {
  // let occurs = 0;

  // for (let value of array) if (value === searchElement) occurs++;

  // return sum;

  return array.reduce((accumulator, currentValue) => {
    const occurence = currentValue === searchElement;
    console.log(accumulator, currentValue, searchElement);
    return accumulator + occurence;
  }, 0);
}

console.log(count);
