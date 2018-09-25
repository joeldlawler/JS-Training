// The This Keyword

const Circle = function() {
  this.draw = function() {
    console.log(this);
  };
};

// When we use the new operator
// it will create an empty object {} and point
// this (line 5 console.log(this);) to it.
const c = new Circle();

// Method Call
c.draw();

const draw = c.draw; // returns Circle {draw: ƒ}

// Function Call
draw(); // returns Window {postMessage: ƒ, blur: ƒ,....

// When we call this method as a function the this (line 5 console.log(this);) will point
// to the global object which is Window in the browser

// if we use 'use strict'
// this will no longer point to the glodal object/Window
// this will be set to undefined

// ES6 Class
// JavaScript will execute this class in
// 'strict mode'

class Square {
  drawSquare() {
    console.log(this);
  }
}

const s = new Square();
const drawSquare = s.drawSquare(); // returns Square {}

drawSquare(); // returns error
