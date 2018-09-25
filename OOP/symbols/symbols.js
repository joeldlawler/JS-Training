// Private Members Using Symbols

// Symbol is a ES6 primative type.
// Symbol is a essentially an unique identifier.
// A unique value is returned when it is called.

const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {}
}
