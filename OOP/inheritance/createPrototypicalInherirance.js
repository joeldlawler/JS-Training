function Shape() {}

Shape.prototype.duplicate = function() {
  console.log("Duplicate Called");
};

function Circle(radius) {
  this.radius = radius;
}

// When reseting the prototype
// Reset the constructor
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Square(size) {
  this.size = size;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const s = new Square(300);
const c = new Circle(150);
