// Inheritance
//
// Prototype vs Instacnce Members

function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    this.draw();
    console.log("move has been called");
  };
}

Circle.prototype.draw = function() {
  // Prototype members
  console.log("draw has been called");
};

const c1 = new Circle(1);

// Although Circle And Square have
// the same Prototype the draw() method
// only is available on the Circle object
function Square(height, width) {
  // Instance members
  this.height = height;
  this.width = width;
}

const s1 = new Square(200, 200);
