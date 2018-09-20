// Function Declarations vs Experessions

// Function Declaration

// Function Declarations can be called before
// they are defined

// This is due to hoisting

// Hoisting is process of moving function declarations
// to the top of the file

walk();

function walk() {
  console.log("walk");
}

// Function Expression
// Functions are objects
// the run is now an object

// Anonymous Function Expression
let run = function() {
  console.log("run");
};

// Named Function Expression
let runNamed = function namedRun() {
  console.log("runNamed");
};
