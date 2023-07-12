console.log("----Exercise 1----");
console.log(sum(1, 2, 3, 4, 5));
console.log(sum([1, 2, 3, 4, 5]));

/**
 * 
 * @param  {...any} args 
 * @returns number
 * sums the array
 */
function sum(...args) {
  if (args.length === 1 && Array.isArray(args[0])) {
    args = [...args[0]];
  }

  return args.reduce((a, b) => a + b);
}

console.log("----Exercise 2----");

let circle = {
  radius: 5,
  get area() {
    return Math.PI * (this.radius * this.radius);
  },
};
console.log(circle.radius);
console.log(circle.area);

console.log("----Exercise 3----");

try{
    console.log(countOccurences(true, 1));
} catch(e) {
    console.error(e.message);
}
/**
 * 
 * @param {number} array 
 * @param {number} key 
 * @returns number
 * count the occurence of key in array
 */
function countOccurences(array, key) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid Array");
  }
  return array.reduce((accumulator, current) => {
    const occured = current === key ? 1 : 0;
    return accumulator + occured;
  }, 0);
}
