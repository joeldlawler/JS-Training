// ES6 Method Overide

// Method overiding is when we
// have a method in a derived class
// and we want change it's implementation
// in a derived class.

class Shape {
  move() {
    console.log("move shape");
  }
}

class Circle extends Shape {
  move() {
    // we can call the parent move method using
    super.move();
    console.log("move circle");
  }
}

const c = new Circle();
