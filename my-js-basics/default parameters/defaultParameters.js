// Default Parameters

// Default Parameters set the value if not defined

// Parameters are read in order from left to right

// If a default value is set, it needs to be set for
// all the paramters to the right of it.

function interest(principle, rate, years) {
  rate = rate || 3.5;
  years = years || 5;

  return ((principle * rate) / 100) * years;
}

// ES6 version
function interestES6(principle, rate = 3.5, years = 5) {
  return ((principle * rate) / 100) * years;
}

console.log(interest(100000, 3.5, 5)); // returns 17500
console.log(interest(100000)); // returns 17500

console.log(interest(100000, 3.5, 10)); // returns 35000
// Default Parameter is overwritten by supplied parameter

console.log(interestES6(100000, 3.5, 10)); // returns 35000
// Default Parameter is overwritten by supplied parameter
