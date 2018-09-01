// https://programmingwithmosh.com/

// before ES6

/*
Template Literals
Before ES6, we had to deal with these ugly string concatenations:
*/

var name = "Mosh";
var message = "Hi " + name + ",";

// after ES6

var name = "Mosh";
var message = `Hi ${name},`;

/*
Note that I’m using the backtick character here. As funny as it sounds, 
nobody knew what backticks were until Angular 2 was released! 
That’s the character before number 1 on your keyboard.

To add a placeholder in a template literal, we use the ${expression} syntax. 
You can replace “expression” with any JavaScript expressions. 
Here, we are adding the name variable there. You can also call a function or 
pass any JavaScript expressions that results in a value.

Another benefit of using template literals is that they can expand multiple lines. 
They are particularly useful when composing email messages:
*/

var message = `
Hi ${name},

Thank you for joining my mailing list. 

Happy coding,
Mosh
`;

/*
Let and Const
Prior to ES6, we used the var keyword to define variables. 
The scope of a variable defined using the var keyword is the entire enclosing function. Here’s an example:
*/

function doSomething() {
  for (var x = 0; x < 5; x++) {
    // Technically, x should only be scoped to this block because this is
    // where we have defined x.
  }

  // But it turns out that x is available here as well!
  console.log(x); // 5
}

/*
 That’s not how most if not all other programming languages behave! Variables defined within a 
 block should be scoped to that block only. In this example, x should not be accessible outside of the for block.

Another issue with the var keyword is that if you use it at the top level outside of a function, 
it creates a property on the global object:
 */

var x = 1;
console.log(window.x); // 1

// ES6 introduced 2 new keywords for resolving these issues: let and const. Both
// these keywords define variables that are scoped to the containing “block” not “function”:

function doSomething() {
  for (let x = 0; x < 5; x++) {
    // With the "let" keyword, now x is only accessible in this block.
  }

  // x is out of the scope here
  console.log(x); // x is not defined
}

//  With const we can define a constant. So we cannot reassign it later:
const x = 1;
x = 2; // throws "Assignment to constant variable."

// Also, unlike the var keyword, let and const don’t create a property on the global object if you use them at the top level:

let x = 1;
console.log(window.x); // undefined

// So, here is what you should take away:

//  Ditch the var keyword. Use only let and const.
//  Prefer const to let. Use let only if you need to re-assign the identifier; otherwise, use const to prevent accidentally re-assigning a constant.

// Destructuring
// Destructuring is an expression that allows us to extract properties from an object, or items from an array. Let’s say we have an address object like this:

const address = {
  street: "123 Flinders st",
  city: "Melbourne",
  state: "Victoria"
};

// Now, somewhere else we need to access these properties and store their values in a bunch of variables:

const street = address.street;
const city = address.city;
const state = address.state;

// We have this repetitive code over and over: “address.” repeated 3 times. Object destructuring gives us a short and clean syntax to extract the value of multiple properties in an object:

// const { street, city, state } = address;
// That’s it! This code is exactly equivalent to the snippet above. We use curly braces on the left to destructure the address object. Inside the braces, we’re defining 3 variables: street, city, and state. Their values will be extracted from the corresponding properties in the address object.

// Note that we don’t have to list all the properties in the address object. Maybe we’re interested only in the street property:

// const { street } = address;
// Object destructuring is particularly useful when you’re dealing with nested objects:

const person = {
  name: "Mosh",
  address: {
    billing: {
      street: "123 Flinders st",
      city: "Melbourne",
      state: "Victoria"
    }
  }
};
// Without destructuring, we would have to write this ugly and repetitive code:

const street = person.address.billing.street;
const city = person.address.billing.city;
const state = person.address.billing.state;

// So annoying!
// Now, we can achieve the same result using a single line of code:

// const { street, city, state } = person.address.billing;
// We can also destructure arrays but we use square brackets ([]) instead of curly braces ({}). Let’s say we have an array and we want to extra the first and second item and store them in two different variables:

// ES5
const values = ["John", "Smith"];
const first = values[0];
const last = values[1];
// ugly!
// With destructuring, we can re-write the above code like this:

// ES6
const values = ["John", "Smith"];
const [first, last] = values;
