// Map an Array

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n > 0);

// use the map method to map an array into something else
const items = filtered.map(n => "<i>" + n + "</li>");

// join by default will add a comma
const html = "<ul>" + items.join("") + "</ul>";

// map elements of an array to an object
const objNumbers = filtered.map(n => ({ value: n }));

// methods can be chained

const chainedNumbers = numbers.filter(n => n > 0).map(n => ({ value: n }));

console.log(chainedNumbers);
