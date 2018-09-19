const courses = [
  {
    id: 1,
    name: "Java"
  },
  {
    id: 2,
    name: "Node.js"
  },
  {
    id: 3,
    name: "C#"
  },
  {
    id: 4,
    name: "Angular"
  }
];

// sort optionally takes an arguement used for comparison
// converts argument to string
// usese ASCII - American Standard Code for Information Interchange
// https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
courses.sort(function(a, b) {
  // a < b => -1
  // a > => 1
  // a === b => 0

  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

const reverseSortCourses = courses.reverse(function(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);
console.log(reverseSortCourses);
