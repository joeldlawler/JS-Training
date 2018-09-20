// Rest Operator

// Rest syntax looks exactly like spread syntax,
// but is used for destructuring arrays and objects.
// In a way, rest syntax is the opposite of spread
// syntax: spread 'expands' an array into its elements, while
// rest collects multiple elements and 'condenses'
// them into a single element.

// The Rest Operator takes all
// the arguements and puts them
// in an array.

// The Rest Operator must be last
// because it is 'the rest' of the
// parameters

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));
