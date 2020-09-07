// Array.diff

// Implement a difference function which subtracts one list from another and returns the result
// It should remove all values from list a, which are present in list b
arrayDiff([1, 2], [1]) == [2];

// If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];

// Solution:
function arrayDiff(a, b) {
  return a.filter((x) => b.indexOf(x) === -1);
}

// As a single line arrow function:
const arrayDiff = (a, b) => a.filter((x) => b.indexOf(x) === -1);

console.log(arrayDiff([1, 2], [1]));
