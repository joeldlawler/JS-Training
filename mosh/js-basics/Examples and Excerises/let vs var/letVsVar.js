// Let vs Var

// var => function-scoped

// ES6 (ES2015): let, const => block-scoped

// let is limited to the block
// where it is defined

function startLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // returns i is not defined
}

startLet();

// var is limited to the
// where it is defined

function startVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // returns 5
}

startVar();

var color = "red";
// this is attached to the window object
// it can be seen - window.color
