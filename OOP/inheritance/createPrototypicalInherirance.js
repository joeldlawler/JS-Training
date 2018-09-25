// Create the base/paren/prototype
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("Duplicate Called");
};

// Intermediate Function Inheritance
function extend(Child, Parent) {
  // When reseting the prototype
  // Reset the constructor
  Child.prototype = Object.create(Shape.prototype);
  Child.prototype.constructor = Parent;
}

// Circle

// Construct the circle
function Circle(radius, color) {
  // Call the super constructor
  // to set the color.
  Shape.call(this, color);
  this.radius = radius;
}

// Set Circle's Base/Parent/Prototype
extend(Circle, Shape);

// Create a new circle
const c = new Circle(150, "blue");

// Square

// Construct the Square
function Square(radius, color) {
  // Call the super constructor
  // to set the color.
  Shape.call(this, color);
  this.radius = radius;
}

// Set Square's Base/Parent/Prototype
extend(Square, Shape);

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}
// Create a new Square
const s = new Square(300, "red");
