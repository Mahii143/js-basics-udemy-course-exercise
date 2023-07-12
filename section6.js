const numbers = [3, 4];
numbers.push(5, 6);
numbers.unshift(1, 2);
numbers.splice(2, 0, "a", "b");

console.log(numbers);

numbers.pop();

const first = numbers.shift();
console.log(first);

numbers.splice(1, 2);

console.log(numbers);

// Three methods to remove
/*
numbers = []; // requires to declare using let or var
numbers.length = 0; 
numbers.splice(0,numbers.length);
*/
const joined = numbers.join(",");
console.log(joined);

const courses = [
  {
    id: 1,
    name: "Node JS",
  },
  {
    id: 2,
    name: "javascript",
  },
];
courses.sort(sortByName);

/**
 * Comparator function for sorting
 * @param {number} a 
 * @param {number} b 
 * @returns number
 * positive if a.name > b.name
 * negative if a.name < b.name
 * zero if equal
 */
function sortByName(a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}

console.log(courses);

const test = [-1, 2, -2, -9, 3, 4, 5];
const allPositive = test.every(allArePositive);

/**
 * 
 * @param {number} value 
 * @returns boolean
 * checks value is positive or not
 */
function allArePositive(value) {
  return value >= 0;
}
console.log(allPositive);

const somePositive = test.some(someArePositive);

/**
 * 
 * @param {number} value 
 * @returns boolean
 * checks value is positive or not
 */
function someArePositive(value) {
  return value >= 0;
}
console.log(somePositive);

// filter , map, and chaining of methods :)
const items =
  "<ul>" +
  test
    .filter((n) => n < 0)
    .map((n) => "<li>" + n + "</li>")
    .join("") +
  "</ul>";

console.log(items);

console.log("----Execise 1----");
const rangeOfNumbers = arrayFromRange(-10, 12);
console.log(rangeOfNumbers.join(" "));

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns number[]
 * array from given range
 */
function arrayFromRange(min, max) {
  const output = [];
  for (let index = min; index <= max; index++) {
    output.push(index);
  }
  return output;
}

console.log("----Execise 2----");
console.log(includesNumber(rangeOfNumbers, 5));

/**
 * 
 * @param {number} array 
 * @param {number} number 
 * @returns boolean
 * checks if number was included in array
 */
function includesNumber(array, number) {
  for (let value of array) {
    if (value === number) return true;
  }
  return false;
}

console.log("----Execise 3----");
console.log(exceptNumber(rangeOfNumbers, 5).join(" "));

/**
 * 
 * @param {number} array 
 * @param {number} number 
 * @returns number[]
 * returns array with removed given number
 */
function exceptNumber(array, number) {
  return array.filter((n) => n !== number);
}

console.log("----Execise 4----");

console.log(move(rangeOfNumbers, 0, 192).join(" "));


/**
 * 
 * @param {number} array 
 * @param {number} index 
 * @param {number} offset 
 * @returns number[]
 * shifts the index number to given offset
 */
function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset");
    return [];
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
console.log("----Execise 5----");

console.log(countOccurences([1, 2, 1, 1, 1, 2, 3, 4], 1));

/**
 * 
 * @param {number} array 
 * @param {number} key 
 * @returns number
 * counts the occurence of key in array
 */
function countOccurences(array, key) {
  return array.reduce((accumulator, current) => {
    const occured = current === key ? 1 : 0;
    return accumulator + occured;
  }, 0);
}

console.log("----Execise 6----");

console.log(getMax(rangeOfNumbers));
// console.log(Math.max(rangeOfNumbers));

/**
 * 
 * @param {number} array 
 * @returns number
 * maximum of array
 */
function getMax(array) {
  // return Math.max(...array);
  return array.reduce((max, current) => {
    return max > current ? max : current;
  }, 0);
}

console.log("----Execise 7----");
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

movies.sort(sortByYear);

const filteredMovies = movies.filter(movie => movie.year === 2018 && movie.rating > 4);

filteredMovies.map(movie => console.log(movie.title));

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns number
 * sorts using rating
 */
function sortByYear(a, b) {
  return b.rating - a.rating;
}
