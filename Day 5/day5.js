// Day 5: Functions

// Activity 1: Function Declaration
    // • Task 1: Write a function to check if a number is even or odd and log the result to the console.
        function checkEvenOdd(number) {
            if(number%2==0) console.log(`${number} is even`);
            else console.log(`${number} is odd`);
        }
        checkEvenOdd(12)
        checkEvenOdd(11)

    // • Task 2: Write a function to calculate the square of a number and return the result.
        function squareOfNumber(number) {
            return number * number;
        }
        console.log(squareOfNumber(5)); // Output: 25

// Activity 2: Function Expression
    // • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
        function maxOfTwoNumbers(number1, number2) {
            number1>number2? console.log(`${number1} is greater than ${number2}`): console.log(`${number2} is greater than ${number1}`);
        }
        maxOfTwoNumbers(30,50)
    
    // • Task 4: Write a function expression to concatenate two strings and return the result.
        function concatenate(string1, string2) {
            return string1 + string2;
        }
        console.log(concatenate("Hello ", "World!")); // Output: Hello World!

// Activity 3: Arrow Functions

    // • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
         const sum = (a, b ) => a + b;
             console.log(sum(5, 10)); // Output: 15

    // • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
         const checkCharacter = (str,char) => str.includes(char);
         console.log(checkCharacter("Hello World!", "l")); // Output: true

// Activity 4: Function Parameters and Default Values
    // • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
         function multiply(a,b=10) {
             return a * b;
         }
         multiply(10,20);
         multiply(10);
    // • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
         function greeting(name, age=25){
            return (`Hello ${name} your age is ${age}`)
         }

// Activity 5: Higher-Order Functions
    // • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
         const higherOrder = function(func, number) {
            for(let i = 0; i <number; i++) {
                func();
            }
         }
         higherOrder(() =>console.log("I cam called"),4)
    
    // • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
         const higherOrderFunction = (func1, func2, val) => {
            let result = func1(val);
            return func2(result);
         }
         const add5 = num => num + 5;
         const multiplyBy2 = num => num * 2;
         console.log(higherOrderFunction(add5, multiplyBy2, 10));