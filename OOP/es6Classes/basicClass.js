class Circle {
  constructor(radius) {
    this.radius = radius;
    // move will not be on the prototype
    this.move = function() {
      console.log("draw");
    };
  }

  draw() {
    console.log("draw");
  }
}

const c = new Circle(1);

console.log(c);
