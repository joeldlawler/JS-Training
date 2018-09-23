// // object literal syntax
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function() {
//     console.log("Object Literal Draw Method");
//   }
// };

// // circle.draw();

// // If an object has one or more methods
// // the objec has behavior

// // If the object has behavior,
// // creating an object using object literal syntax
// // causes issues

// // Two Solutions - Factory and Constructor functions

// // Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log("Factory Function Draw Method");
//     }
//   };
// }

// const factCircle = createCircle(1);
// // factCircle.draw();

// // Constructor Function
// function ConstructorCircle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log("Constructor Function Draw Method");
//   };
// }

// ConstructorCircle.call({}, 1);
// // ^^^ is the same as vvv  because functions are objects.
// const constructorCircle = new ConstructorCircle(1);
// // The new keyword does three things:
// //      1. new creates a new empty object {}
// //      2. this references the empty object created by the new key word
// //      3. returns the object from the Constructor Function

// constructorCircle.draw();

// // Factory and Constructor functions are both regular
// // functions

// //
// //
// // Value (Primitives) vs Reference Types

// // Value Types = Number, String, Boolean, Symbol, undefined, null

// // Reference Types = Object, Function, Array

// //  * Primitives are copied by value

// //  * Objects are copied by their references

// //
// // Using Primitive

// let number = 10;

// function increase(number) {
//   number++;
//   console.log("number inside function " + number);
//   // ^^^ number inside function 11
//   // the number inside of this function is
//   // independent from the one at the top.
// }

// increase(number);

// console.log("number after function " + number);
// // ^^^ returns number after function 10

// //
// // Using Reference Type

// let objNumber = { value: 10 };

// function objIncrease(objNumber) {
//   objNumber.value++;
//   console.log("objNumber inside function " + objNumber.value);
//   // ^^^ objNumber inside function 11
// }

// objIncrease(objNumber);

// console.log("objNumber after function " + objNumber.value);
// // ^^^ returns objNumber after function 11

//
// Adding or Removing Properties
// Unlike Java or C#, objects in JavaScript are dynamic
// Properties can be added or removed

// const Circle = createCircle(1);

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("Circle Draw Method");
  };
}

const circle = new Circle(10);

// Two ways to add a property

circle.xPosition = "120";
circle.yPosition = "400";

// Properties can also be added using []
circle["color"] = "red";

// These property names can then be variables
const zIndex = "z-index";
circle[zIndex] = 10;

// console.log(circle);

// Properties can also be deleted

// This is useful for when data is
// returned that we don't want to
// send to the client
delete circle.xPosition;
delete circle["yPosition"];

//
//
// Enumerating Properties

// Two Ways
// Loop
for (let key in circle) {
  //if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

// Using Object
const keys = Object.keys(circle);
//console.log(keys);

// Check for property
// if ("radius" in circle) console.log("Circle has radius");

//
//
// Abstraction
//    Hide the details and complexity
//    Show/expose the essentials

function Rectangle(height, width) {
  this.height = height;
  this.width = width;

  // Using let defines defaultLocation as
  // a local variable and makes it acccessible
  // only inside this object.
  // once the function Rectangle has executed,
  // let variables will go out of scope.
  let defaultLocation = { x: 5, y: 10 };
  let computeLocation = function() {
    return { height: defaultLocation.x + defaultLocation.y };
  };
  this.draw = function() {
    let x, y;

    return computeLocation();
  };

  // use to define getters or setters
  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) throw new Error("Invalid location");

      defaultLocation = value;
    }
  });
}

const rectangle = new Rectangle(4, 4);

console.log(rectangle.defaultLocation);

//
//
// Private Properties and Methods
//    A closure determines what variables will be
//    available to an inner function.
//
//    let x, y; are only available in the this.draw = function() {}
//    there scope is limited to the function they are in.
//    They get created when the function is called and go away
//    once it has been executed.
//    After the function has executed, they go out of scope.
//
//    Scope is temporary.
//      let x, y; - Are temporary
//    Closure stays in memory.
//      this.height = height;  - Stay in memory.
//
//    Private properties and functions delared with let and const
//    simplify the interface of the object.
