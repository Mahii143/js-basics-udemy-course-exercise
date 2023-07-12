console.log("----Exercise 1----");

let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};
showAddress(address);

/**
 * 
 * @param {object} address
 * logs each key value pairs of the object 
 */
function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

console.log("----Exercise 2----");
//create address obj using factory funtion and consturctor function

//factory function
/**
 * 
 * @param {string} street 
 * @param {string} city 
 * @param {string} zipCode 
 * @returns object
 * creates object for Address
 */
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

// constructor function
/**
 * 
 * @param {string} street 
 * @param {string} city 
 * @param {string} zipCode 
 * @returns object
 * creates object for Address
 */
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// create two objs
const add1 = createAddress("1", "b", "c");
const add2 = new Address("a", "b", "c");

console.log(add1, "\n", add2);

console.log("----Exercise 3----");

let address1 = new Address("abc", "cde", "efg");
let address2 = new Address("abc", "cde", "efg");

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

/**
 * 
 * @param {object} address1 
 * @param {object} address2 
 * @returns boolean
 * checks both object are equal interms of their keys
 */
function areEqual(address1, address2) {
  const keys = Object.keys(address1);
  for (let key of keys) {
    if (address1[key] !== address2[key]) return false;
  }
  return true;
}

/**
 * 
 * @param {object} address1 
 * @param {object} address2 
 * @returns boolean
 * checks both objects are same instances
 */
function areSame(address1, address2) {
  return address1 === address2;
}

console.log("----Exercise 4----");

let postLit = {
  title: "What is blogs?",
  body: "Blogs are a type of regularly updated websites that provide insight into a certain topic. The word blog is a combined version of the words “web” and “log.”",
  author: "Mahir",
  views: 673194,
  comments: [
    {
      author: "Jonkin",
      body: "Hi this post is cool!",
    },
    {
      author: "Bas",
      body: "Hi this post is cool!",
    },
    {
      author: "Lola",
      body: "Hi this post is cool!",
    },
  ],
  isLive: true,
};
console.log(postLit);

console.log("----Exercise 5----");

let post = new Post("a", "b", "c");
console.log(post);
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

console.log("----Exercise 6----");

let priceRanges = [
  {
    label: "$",
    tooltip: "Inexpensive",
    minPerPerson: 0,
    maxPerPerson: 10,
  },
  {
    label: "$$",
    tooltip: "Moderate",
    minPerPerson: 11,
    maxPerPerson: 20,
  },
  {
    label: "$$$",
    tooltip: "Expensive",
    minPerPerson: 21,
    maxPerPerson: 50,
  },
];

let restaurants = [
  { averagePerPerson: 5 },
  { averagePerPerson: 15 },
  { averagePerPerson: 35 },
];

for (let restaurant of restaurants) {
  showLabel(restaurant.averagePerPerson);
}

/**
 * 
 * @param {number} averagePerPerson 
 * logs the label of given average number
 */
function showLabel(averagePerPerson) {
  for (let range of priceRanges) {
    if (Math.floor((range.maxPerPerson + range.minPerPerson) / 2) === averagePerPerson) {
      console.log(range.label, range.tooltip);
    }
  }
}
