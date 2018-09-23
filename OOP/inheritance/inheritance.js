// Inheritance

// Inheritance is a mechanism that allows you
// to eliminate redundant code.
// JavaScript does not have classes
// JaveScript only has objects

// JaveScipt has Prototypical Inheritance
// Prototype ("Parent")

// A prototype is just a regular object.
// There is nothing special about it.

// Every object has a prorotype except
// the root object.

// Example Multilevel Inheritance
//
//  objectBase
//    ^^^ arrayBase
//          ^^^ myArray
//
// Objects created by a given contstructor
// will have the same prototype.
//
//
//
// Property Descriptors
let person = { name: "Fred" };

Object.defineProperty(person, "name", {
  // Can property be changed?
  writable: false,
  // Can property by seen?
  // Enumerable properties show up in for...in loops
  enumerable: false,
  // Can property by deleted?
  configurable: false
});
