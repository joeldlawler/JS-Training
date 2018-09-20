// Scope

// A scope of a variable or a constant determines
// where that variable or a constant is available.

// A scope of a variable is limited to the block
// which it is defined.

{
  const message = "hi";
  // console.log(message); // returns "hi"
}

// console.log(message); //returns "message is not defined"

// Local variables or constants take precedence
// over global variables or constants

const color = "red";

function start() {
  const color = "blue";
  console.log(color); // returns "blue"
}
start();

console.log(color); // returns "red"
