// Polymorphism
// many forms

// Create a class Person then another class called Manager that inherits
// from Person. Both classes will include a method called wake_up().
// We will then create objects of both types and put them in an array.

// When we loop through that array, the system will call the function
// wake_up() on each of the objects and the implementation will be determined dynamically.

// https://www.codeproject.com/Articles/315169/Polymorphism-in-JavaScript

/** This is our Person class */
Person = function(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
  // alert('A new person has been accepted');
};

/* definition of our Person class */
Person.prototype = {
  /** wake person up */
  wake_up: function() {
    alert("A person is awake");
  },
  /** retrieve person's age */
  get_age: function() {
    return this.age;
  }
};

// Now let us create an Inheritance class so that other classes can inherit from our class person.

Inheritance_Manager = {};

Inheritance_Manager.extend = function(subClass, baseClass) {
  function inheritance() {}
  inheritance.prototype = baseClass.prototype;
  subClass.prototype = new inheritance();
  subClass.prototype.constructor = subClass;
  subClass.baseConstructor = baseClass;
  subClass.superClass = baseClass.prototype;
};

// Ok we are then going to define our class Manager as follows:

Manager = function(id, name, age, salary) {
  Manager.baseConstructor.call(this, id, name, age);
  this.salary = salary;
  // alert('A manager has been registered.');
};

// Our class Manager will inherit from Person as follows:

Inheritance_Manager.extend(Manager, Person);

// Let’s add more functionality and overwrite our wake_up() function

Manager.prototype = {
  wake_up: function() {
    alert("I am in control");
  }
};

// Now we create an array and store in objects of type Person and Manager.
var arrPeople = new Array();
arrPeople[0] = new Person(1, "Joe Tester", 26);
arrPeople[1] = new Manager(1, "Joe Tester", 26, "20.000");

// See how the function wake_up() behaves based on the different objects we have.
// This is what we call Polymorphism. Polymorphism makes things so simple when
// you have many objects that present the same interface but different implementations.

for (var i in arrPeople) {
  arrPeople[i].wake_up();
  alert(arrPeople[i].get_age());
}
