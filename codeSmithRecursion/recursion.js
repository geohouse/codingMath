// Take in character and repeat 5 times
function repeater(char, numTimes) {
  let repeatString = "";
  function printChar(numTimes) {
    if (numTimes === 0) {
      return repeatString;
    }

    repeatString += char;
    return printChar(numTimes - 1);
  }
  printChar(numTimes);
  return repeatString;
}
let outputString = repeater("@", 12);
console.log(outputString);

// Factorial - given an input number, return its factorial

function factorial(num, total = 1) {
  if (num === 0) {
    return total;
  }
  total = total * num;
  return factorial(num - 1, total);
}

let testFactorial = factorial(4);
console.log(testFactorial);

// Get length of array using recursion (not the .length property)

function getLength(array, length = 0) {
  if (array[0] === undefined) {
    return length;
  }
  array.pop();
  let newLength = length + 1;
  return getLength(array, newLength);
}

console.log(getLength([1]));
console.log(getLength([]));
console.log(getLength([1, 2]));
console.log(getLength([1, 2, 3, 4, 5]));
