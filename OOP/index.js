// object literal syntax
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("Object Literal Draw Method");
  }
};

// circle.draw();

// If an object has one or more methods
// the objec has behavior

// If the object has behavior,
// creating an object using object literal syntax
// causes issues

// Two Solutions - Factory and Constructor functions

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("Factory Function Draw Method");
    }
  };
}

const factCircle = createCircle(1);
// factCircle.draw();

// Constructor Function
function ConstructorCircle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("Constructor Function Draw Method");
  };
}

ConstructorCircle.call({}, 1);
// ^^^ is the same as vvv  because functions are objects.
const constructorCircle = new ConstructorCircle(1);
// The new keyword does three things:
//      1. new creates a new empty object {}
//      2. this references the empty object created by the new key word
//      3. returns the object from the Constructor Function

constructorCircle.draw();

// Factory and Constructor functions are both regular
// functions

//
//
// Value (Primitives) vs Reference Types

// Value Types = Number, String, Boolean, Symbol, undefined, null

// Reference Types = Object, Function, Array

//  * Primitives are copied by value

//  * Objects are copied by their references

//
// Using Primitive

let number = 10;

function increase(number) {
  number++;
  console.log("number inside function " + number);
  // ^^^ number inside function 11
  // the number inside of this function is
  // independent from the one at the top.
}

increase(number);

console.log("number after function " + number);
// ^^^ returns number after function 10

//
// Using Reference Type

let objNumber = { value: 10 };

function objIncrease(objNumber) {
  objNumber.value++;
  console.log("objNumber inside function " + objNumber.value);
  // ^^^ objNumber inside function 11
}

objIncrease(objNumber);

console.log("objNumber after function " + objNumber.value);
// ^^^ returns objNumber after function 11
