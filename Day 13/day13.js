// Day 13: Modules

// main.js
import {
    addTwoNumbers,
    person,
    add,
    subtract,
    multiply,
    divide,
  } from "./module.js";
  import greet from "./module.js"
  import _ from 'lodash' 
  import axios from "axios";




// Activity 1: Creating and Exporting Modules
    // • Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

        const sum = addTwoNumbers(5, 10);
        console.log(`The sum of 5 and 10 is ${sum}.`);

    // • Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
        person.greet();
        person.name;

// Activity 2: Named and Default Exports
    // • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
        // main.js
        const num1 = 10;
        const num2 = 5;

        console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
        console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
        console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
        console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);



    // • Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
        const name = "Alice";
        console.log(greet(name));


// Activity 3: Importing Entire Modules
    // • Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
        import * as vehicle from "./module.js"
        console.log(`Max speed of a car: ${vehicle.MAX_SPEED_CAR} km/h`);
        console.log(`Max speed of a bike: ${vehicle.MAX_SPEED_BIKE} km/h`);
        console.log(vehicle.startVehicle("Car"));
        console.log(vehicle.stopVehicle("Car"));

// Activity 4: Using Third-Party Modules
    // • Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
    console.log(_.sum([1, 2, 3, 4, 5]));
    console.log(_.keys({ name: 'Kushaal', age: 100, job: 'developer' }));

    // • Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

// Activity 5: Module Bundling (Optional)
    // • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
