// friends - an array of objects
// where object field "books" - list of favorite books
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

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
const allbooks = friends.reduce(
  function(accumulator, currentValue) {
    return [...accumulator, ...currentValue.books];
  },
  ["A New Hope", "Fight Club", "The Dead Days"]
);

console.log(allbooks);
