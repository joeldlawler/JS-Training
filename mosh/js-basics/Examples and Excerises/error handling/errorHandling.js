// Try Catch

// Error should be a done at the beggining of
// a function or a method.  This is defense
// programming.

const person = {
  firstName: "bob",
  lastName: "smith",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");
    const parts = value.split(" ");
    if (parts.length != 2) throw new Error("Enter First and Last name.");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = "df df";
} catch (ex) {
  console.error(ex);
}

console.log(person);
