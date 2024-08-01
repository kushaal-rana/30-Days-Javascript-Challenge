// Day 15: Closures
// Tasks/Activities:

// Activity 1: Understanding Closures
// • Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function closure1() {
  let count = 10;
  return function () {
    count++;
    return count;
  };
}
// console.log(closure()())
let resultOfOuterFunction = closure1();
console.log(resultOfOuterFunction()); // Output: 1
// • Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function closer2() {
  let counter = 0;
  function increment() {
    counter++;
    return counter;
  }
  function getCounterValue() {
    return counter;
  }
  return {
    increment: increment,
    getCounterValue: getCounterValue,
  };
}
let closure = closer2();
closure.increment();
console.log(closure.getCounterValue());

// Activity 2: Practical Closures
// • Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateUniqueIds() {
  let lastId = 10;
  return function () {
    lastId++;
    return lastId;
  };
}
let uniqueIdGenerator = generateUniqueIds();
console.log(uniqueIdGenerator()); // Output: 1
console.log(uniqueIdGenerator()); // Output: 2

// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greetUser(username) {
  return function () {
    console.log(`Hello User your Username is: ${username}`);
  };
}
let greetUserByName = greetUser("Kushaal");
greetUserByName(); // Output: Hello User your Username is: Kushaal
let greetAlice = greetUser("Alice");
greetAlice(); // Output: Hello, Alice!

// Activity 3: Closures in Loops
// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
let arr = [];

for (let i = 0; i < 5; i++) {
  arr[i] = function () {
    //we can also use arr.push()
    console.log(`Functin ${i} index is ${i}`);
  };
}
arr[0]();
arr[1]();
arr[2]();
arr[3]();

// Activity 4: Module Pattern
//  • Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
let itemCollection = (function () {
  let items = [];
  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      items = items.filter((i) => i != item);
    },
    listItems: function () {
      console.log(items);
    },
  };
})();
// let items = itemCollection();// use this or use IIFE
itemCollection.addItem("Apple");
itemCollection.addItem("Banana");
itemCollection.listItems(); // Output: ["Apple", "Banana"]
itemCollection.removeItem("Apple");
itemCollection.listItems(); // Output: ["Banana"]

// Activity 5: Memoization
//  • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoization(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Fetching form cache", key);
      return cache.get(key);
    }
    console.log("Calculating result:", key);
    const result = fn(...args); //calling the original function
    cache.set(key, result);
    return result;
  };
}
function add(a, b) {
  return a + b;
}

const memoizedAdd = memoization(add);

console.log(memoizedAdd(1, 2)); // Calculating result: [1,2] => 3
console.log(memoizedAdd(1, 2)); // Fetching from cache: [1,2] => 3
console.log(memoizedAdd(2, 3)); // Calculating result: [2,3] => 5
console.log(memoizedAdd(2, 3)); // Fetching from cache: [2,3] => 5
//  • Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
const memoizedFactorial = memoization(factorial);
console.log(memoizedFactorial(5)); // Calculating result: 5 => 120
console.log(memoizedFactorial(5)); // Fetching from cache: 5 => 120
console.log(memoizedFactorial(6)); // Calculating result: 6 => 720
console.log(memoizedFactorial(6)); // Fetching from cache: 6 => 720
