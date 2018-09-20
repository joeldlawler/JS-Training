// Getters and Setters

// getters => access properties
// setters change or mutate them

// Uses a template literal `${person.firstName} ${person.lastName}`

const person = {
  firstName: "bob",
  lastName: "smith",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = "Hank Johnson";

console.log(person);
