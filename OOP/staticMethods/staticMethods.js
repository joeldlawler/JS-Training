//Static Methods

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // Instance Method (specific to Circle Object)
  draw() {
    console.log("draw");
  }

  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

// Circle need to be instaniated
// befor we can call draw
const circle = new Circle(1);
console.log(circle.draw());

// To call static methods we don't
// have to create and instance of
// the class.
const c = Circle.parse('{"radius": 1}');
console.log(c);
