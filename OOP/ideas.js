const friends = [
  {
    name: "Anna",
    books: ["Bear Town", "Harry Potter"],
    age: 21
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18
  }
];

function filterArray(...params) {
  // If the first value of parameters is not an array, throw an error
  if (typeof params[0] !== "object") throw Error("Array not supplied");

  const property = params[1];
  const filterValue = params[2];
  const direction = params[3];

  const output = params[0].filter(m =>
    m.name.toLowerCase().startsWith(filterValue.toLowerCase())
  );

  return output;
}

console.log(filterArray(friends, "name", "A", "desc"));
