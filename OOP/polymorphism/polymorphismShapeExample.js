function extend(Child, Parent) {
  Child.prototype = Object.create(Shape.prototype);
  Child.prototype.constructor = Parent;
}

function Shape() {}

Shape.prototype.duplicate = function() {
  console.log("Duplicate Called");
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  console.log("Duplicate Circle.");
};

function Square() {}

extend(Square, Shape);

Circle.prototype.duplicate = function() {
  console.log("Duplicate Square.");
};

const shapes = [new Circle(), new Square()];

// Poly (many) Morphism (forms)
// We can create children dynamically.
for (let shape of shapes) shape.duplicate();
