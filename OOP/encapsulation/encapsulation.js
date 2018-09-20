// Encapsulation refers to the bundling of data with
// the methods that operate on that data.

// It is used to hide the values or state of a
// structured data object inside a class, preventing
// unauthorized parties' direct access to them. Publicly
// accessible methods are generally provided in the
// class (so-called getters and setters)
// to access the values, and other client classes call
// these methods to retrieve and modify the values
// within the object.

// Encapsulation provides the ability to write
// functions with few to no parameters.

// "The best functions are those with no
// parameters."  ~ Robert C Martin

let employee = {
  baseSalary: 30_000,
  overtime: 20,
  rate: 20,
  getWage: function() {
    return this.baseSalary + this.overtime * this.rate;
  }
};

employee.getWage();
