// Except

const numbers = [1, 2, 3, 4, 5, 6];

const output = move(numbers, 0, 3);

console.log(output);

function move(array, index, offset) {
  let output = [...array];

  const position = index + offset;

  if (position >= array.length || position < 0) {
    console.error("Invalid offset");
    return;
  }

  // remove the elemement from the array
  const element = output.splice(index, 1)[0];
  // ^^^ returns the item that was removed
  output.splice(position, 0, element);
  return output;
}
