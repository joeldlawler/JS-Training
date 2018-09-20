// Sum of Arguments

function sum(...items) {
  // if items is an array the ...rest operator will
  // convert it to an array of arrays
  if (items.length === 1 && Array.isArray(items[0]))
    // Use spread operator to
    // convert to single array
    items = [...items[0]];

  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3]));
