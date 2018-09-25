// Hoisting

// Function Declaration
// Function Declarations are Hoisted

// sayHello can be called before it is
// created becuase Function Declarations
// are moved to the top or Hoisted.
sayHello();

function sayHello() {}

// Function Expression

// Expressions are not Hoisted
sayGoodbye(); // This will throw not found error.

const sayGoodbye = function() {};
