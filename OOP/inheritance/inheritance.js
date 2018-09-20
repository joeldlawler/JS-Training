// Inheritance

// Inheritance is a mechanism that allows you
// to eliminate redundant code.

const Animal = function(sound) {
  this.sound = sound;
};

Animal.prototype.makeSound = function() {
  console.log(this.sound);
};

const Dog = function(name, breed) {
  this.name = name;
  this.breed = breed;
};

Dog.prototype = new Animal("woof");

const Cat = function(name, breed) {
  this.name = name;
  this.breed = breed;
};

Cat.prototype = new Animal("meow");

const dog = new Dog("Fido", "Collie");
const cat = new Cat("Oliver", "Siamese");

dog.makeSound();
cat.makeSound();
