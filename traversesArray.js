const array = ['a', 10, 'b', 'hello', 122, 15];

// function performed to report possible input errors
function isArray(suposedArray) {
  if (!Array.isArray(suposedArray) || suposedArray.length === 0) {
    throw new Error('The input must be a non-empty array');
  }
  if (!suposedArray.every((element) => (typeof element === 'string' || typeof element === 'number'))) {
    throw new Error('The values in the array must consist of letters or numbers');
  }
}

function onlyLetters(array) {
  isArray(array);

  const lettersArray = array.filter((element) => isNaN(element));

  return lettersArray;
}

function onlyNumbers(array) {
  isArray(array);

  const numbersArray = array.filter((element) => !isNaN(element));

  return numbersArray;
}

function largestNumber(array) {
  const numbersArray = onlyNumbers(array);

  if (numbersArray.length === 0) {
    return 'The array contains only letters';
  }

  const largestN = Math.max(...numbersArray);

  return largestN;
}

console.log(onlyLetters(array));
console.log(onlyNumbers(array));
console.log(largestNumber(array));

// The implemented functions prioritizes code readability and prevention of potential input errors over extreme performance optimization