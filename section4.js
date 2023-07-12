// Landscape
console.log("----Landscape----");
isLandscape(80, 20);
isLandscape(180, 220);
isLandscape(850, 520);
isLandscape(850, 1420);
isLandscape(1800, 1020);

/**
 * 
 * @param {number} width 
 * @param {number} height 
 * logs if it's landscape? (true or not)
 */
function isLandscape(width, height) {
  console.log(width > height);
}

// FizzBuzz
console.log("----FizzBuzz----");
fizzBuzz(150);
fizzBuzz(200);
fizzBuzz(3);
fizzBuzz(30);

/**
 * 
 * @param {number} a 
 * fizz - if a divisible only by 3
 * buzz - if a divisible only by 5
 * fizzbuzz - if a divisible by 3 and 5
 */
function fizzBuzz(a) {
  switch (true) {
    case a % 3 === 0 && a % 5 !== 0:
      console.log("Fizz");
      break;
    case a % 5 === 0 && a % 3 !== 0:
      console.log("Buzz");
      break;
    case a % 3 === 0 && a % 5 === 0:
      console.log("FizzBuzz");
      break;
    default:
      console.log("Invalid");
      break;
  }
}

// Demerits
console.log("----Speed Points----");
checkSpeed(150);
checkSpeed(130);
checkSpeed(169);

/**
 * 
 * @param {number} speed 
 * logs OK if speed is below limit 
 * logs the points for each km overspeeding
 * logs License revoked for dangerous overspeeding
 */
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    let points = (speed - speedLimit) / kmPerPoint;
    if (points >= 12) {
      console.log("License revoked");
    } else {
      console.log("Overspeeding points: ", points);
    }
  }
}
// EVEN OR ODD
console.log("----Numbers----");
printNumbersType(14);

/**
 * 
 * @param {number} N
 * logs even or odd for each numbers from 0 to N 
 */
function printNumbersType(N) {
  let result = "";
  for (let value = 0; value <= N; value++) {
    result += "" + value + "-" + (value % 2 === 0 ? "EVEN " : "ODD ");
  }
  console.log(result);
}

// count truthy
console.log("----Count Truthy----");

// Falsey
/**
 * null
 * undefined
 * ''
 */
// False
/**
 * false
 * 0
 * NaN
 */
const array = [0, "", undefined, null, 2, 3];
countTruthy(array);

/**
 * 
 * @param {any} array
 * logs each values equivalent boolean value 
 */
function countTruthy(array) {
  array.forEach((element) => {
    console.log(element + "=" + Boolean(element));
  });
}

// Prime Number or not
console.log("----Prime Number----");

showPrimes(100);

/**
 * 
 * @param {number} N
 * logs all the primes from 1 to N 
 */
function showPrimes(N) {
  for (let value = 1; value <= N; value++) {
    if (isPrime(value)) {
      console.log(value + " ");
    }
  }
}

/**
 * 
 * @param {number} number 
 * @returns boolean
 * true - prime
 * false - not prime 
 */
function isPrime(number) {
  let isPrime = true;
  for (let factor = 2; factor <= number / 2; factor++) {
    if (number % factor === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
// process.kill(process.pid)
// Math functions
console.log("----Math functions----");
for (let index = 0; index <= 50; index++) {
  process.stdout.write(Math.floor(Math.random() * (100 - 5) + 5) + " ");
}
console.log(process);

// String
console.log("----String----");

console.log("Mahir".toLowerCase());
console.log("Mahir".toLowerCase() === "MAHIR".toLowerCase());
console.log("Mahir".toLowerCase() == "MAHIR".toLowerCase());
console.log("Mahir" === "MAHIR");
console.log("Mahir" == "MAHIR");

let message = "This is my first message in my Udemy course";
console.log(message.indexOf("first"));
console.log(message.includes("first"));
console.log(message.replace("my", "not my"));
console.log(message.toUpperCase(message));
console.log(message.startsWith("This"));
console.log(message.endsWith("course"));

const circle = {
    radius: 10,
};
console.log(circle);
circle.radius = 20;
console.log(circle);

// circle = {
//     radius: 50
// }
// console.log(circle);

/**
 * 
 * @param {object} obj 
 * @param {number} radius
 * set the radius of given object 
 */
function changeRadius(obj, radius) {
  obj.radius = radius;
  console.log("changed", obj);
}
console.log(
    'We cant change object assigned as "const" but we can change it\'s properties...'
    );
    changeRadius(circle, 100);
console.log("changed circle", circle);


// This keyword has two scopes global and function...

/**
 * 
 * @param {number} price 
 * @returns object
 * creates an object Product using price
 */
function createProduct(price) {
    return {
        price: price,
        range: (function () {
            if (price > 50) return "expensive";
      return "cheap";
    })(),
    _type: (function () {
        return this.range;
    })(),
};
}

const prod = createProduct(200);
console.log(prod);

/**
 * 
 * @param {number} price
 * constructor function for creating Product objects 
 */
function Product(price) {
    this.price = price;
  this.range = function () {
    return this.price > 50 ? "Expensive" : "Cheap";
  };
  this._type = this.range();
}

const prod2 = new Product(500);
console.log(prod2);

console.log("----Optional Chaining----")
const undefinedMethod = prod2.price.increment?.();
console.log('optional method returns',undefinedMethod);

console.log('----string countinues----');
console.log(message.trim(message));

// date and time


console.log('----Date and time----');

const now = new Date();
console.log(now.toDateString());
console.log(now.toTimeString());

const date1 = new Date('2023 Jul 07 04:57');
console.log(date1.toTimeString());

const date2 = new Date(2023,7,7);
console.log(date1.toDateString());

console.log(now.toISOString());




