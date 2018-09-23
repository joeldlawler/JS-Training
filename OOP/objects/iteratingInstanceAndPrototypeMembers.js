// Inheritance
//
// Iterating Instance and Prototype Members

// Instance members
function Circle(radius) {
  this.radius = radius;

  this.move = function() {
    console.log("move has been called");
  };
}

// Even though this is called before
// the prototype member draw has been
// created, draw() is still accessible
// because we have a single object in memory
// as soon as we modifiy that, all the
// changes are visible

const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function() {
  console.log("draw");
};

// console.log(Object.keys(c1));
// returns ["radius", "move"] because
// Object.keys only returns instance
// members

for (let key in c1) console.log(key);
// returns radius move draw
// for in loop returns all members
// instance and prototype

// Own is also used for Instance Properties
console.log(c1.hasOwnProperty("radius"));
// returns true
