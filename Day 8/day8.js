// Day 8: ES6+ Features

// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Kushaal";
let age = 100;
console.log(`Hello, my name is ${name} and I am ${age} years old.🤫`);

// • Task 2: Create a multi-line string using template literals and log it to the console.
let str = `Hello
        - this is the first time
        - I am using multi-line strings
        Hopefully, It works`;
console.log(str);

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let arr1 = [1, 2, 3];
let [first, second] = arr1;
console.log(first, second); // Output: 1 2
// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "Build Don't Talk",
  author: "Raj Shamani",
  year: 2022,
  price: 399,
};
let { title, author } = book;
console.log(title, author); // Output: Build Don't Talk Raj Shamani

// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr2 = [1, 2, 3, 4];
let arr3 = [...arr2, 4, 5];
console.log(arr3);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum1(...numbers) {
  return numbers.reduce((total, curr) => total + curr, 0);
}
function sum2(...numbers) {
  let sum = 0;
  numbers.forEach((ele) => (sum += ele));
  return sum;
}
console.log(sum1(1, 2, 3, 4, 5)); // Output: 15
console.log(sum2(1, 2, 3, 4, 5)); // Output: 15

// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 10)); // Output: 50
console.log(multiply(5)); // Output: 5

// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let firstEle = 1;
let secondEle = 2;
let sampleFun = function () {
  console.log(
    `This is something new, Enchanced Object Literals:, isn't it, Just like Object on Steriods`
  );
};
let objLiterals = { firstEle, secondEle, sampleFun };
console.log(objLiterals); // Output: { firstEle: 1, secondEle: 2, sampleFun: [Function] }

// • Task 9: Create an object with computed property names based on variables and log the object to the console.
let propName = "myProp";
let objComputed = {
  [propName]: "This is computed property",
  otherProp: "This is a normal property",
};
console.log(objComputed); // Output: { myProp: 'This is computed property', otherProp: 'This is a normal property' }
