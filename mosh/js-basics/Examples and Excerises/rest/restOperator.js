// Rest Operator

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
