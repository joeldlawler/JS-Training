// Abstraction

// Through the process of abstraction, a programmer hides all but
// the relevant data about an object in order to reduce
// complexity and increase efficiency.

// Simpler Interface

// Reduct the impact of change.

const Dog = (name, breed, sound) => {
  const bark = () => console.log(sound);
  return {
    name,
    breed,
    bark
  };
};

const dog = Dog("Fido", "Collie", "Grrrr");

// Now if you execute dog.bark(), you will see Grrrr printed on the console.
// However, we dont have access to the sound variable even though our bark
// method is using it. This is also known as a closure in javascript, and
// it is how we implement encapsulation and abstraction. We are binding
// together the bark method and its data (sound), and we do not grant
// access to sound outside of the constructor function scope.
