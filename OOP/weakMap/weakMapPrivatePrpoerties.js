// Private Members Using WeakMap();

// A weakmao is essentially a dictionary
// where keys are objects and values can be anything

// They are called weakmaps because the keys are weak.
// So if there are no references to the keys, they will
// be garbage collected.

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    // private property
    _radius.set(this, radius);
    // using =>, this is now set to the constructor function
    _move.set(this, () => {
      console.log("moving", this);
    });
  }
  // access the private property
  draw() {
    console.log(_radius.get(this));
    _move.get(this)();
  }
}
const c = new Circle(1);
c.draw(); // returns 1
// moving Circle{}
