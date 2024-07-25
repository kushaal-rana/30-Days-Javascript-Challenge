// Day 12: Error Handling


// Activity 1: Basic Error Handling with Try-Catch
    // • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
            const error = function(){
                throw new Error('An error occurred');
            }
            try{
                error();
            }
            catch(error){
                console.error('Error:', error.message);
            }

    // • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
            function divide(number1, number2){
                if(number2==0) throw new Error('Error: Denominator is zero');    
                return number1/number2;
            }
            try {
                console.log(divide(1,2));
                console.log(divide(4,0));
            } catch (error) {
                console.log('Error Occured:', error.message);
            }
// Activity 2: Finally Block
    // • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
            try {
                let result = divide(1,2);
                console.log('Result:', result);
            } catch (error) {
                console.log("Error Occured", error)
            }
            finally {
                console.log("Finally block executed");
            }
// Activity 3: Custom Error Objects
    // • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
            class ApiError extends Error{
                constructor(status, message) {
                    super(message);
                    this.status = status;
                    this.name = 'ApiError';
                }
            }
            function CustomError() {
                try {
                    console.log("Throwing Custom Error");
                    throw new ApiError(404, "This is Cusom Message: 404 Not Found");
                } catch (error) {
                    console.error('Custom Status:', error.status);
                    // console.error('Custom Message:', error.message);
                    // console.error('Custom Error:', error);
                }
            }
            CustomError();

    // • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
            function validateUserInput(userInput) {
                if (userInput.trim()==""){
                    throw new ApiError(401, "Input cannot be empty");
                }
            }
            try {
                validateUserInput("");
            } catch (error) {
                // console.error('Custom Status:', error.status);
                console.error('Custom Error:', error.message);
            }
            

// Activity 4: Error Handling in Promises
    // • Task 6: Create a promise that randomly resolves or rejects. Use •catch() to handle the rejection and log an appropriate message to the console.
            const promise = new Promise((resolve, reject) => {
                const number = Math.round(Math.random()*10+1);
                console.log(number, "Taks 6");
                if(number%2==0){
                    resolve("The Promise Has been resolved Taks 6");
                }
                else{
                    reject("The Promise has been rejected Taks 6");
                }
            });
            promise.then((message)=>{
                console.log(message);
            })
            .catch((error)=>{
                console.log("Error:",error);
            })

    // • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
    function handlePromise() {
        return new Promise((resolve, reject) => {
          const number = Math.round(Math.random() * 10 + 1);
          setTimeout(() => {
            console.log(number, "Taks 7");
            if (number % 2 == 0) {
              resolve("The Promise Has been resolved");
            } else {
              reject("The Promise has been rejected");
            }
            }, 2000);
          });
      }
      async function promiseHandled() {
        try {
          const result = await handlePromise();
          console.log("Result of Task 7 is ", result);
          console.log("Executed  Task 7");
        } catch (error) {
          console.log("Executed after waiting Task 7");
          console.log("Error:", error, "Task 7");
        }
      }
      promiseHandled();
    
    

// Activity 5: Graceful Error Handling in Fetch
    // • Task 8: Use the fetch API to request data from an invalid URL and handle the error using -catch() . Log an appropriate error message to the console.
    fetch('https://this-is-not-a-url.com')
       .then(response => {
            if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
       .then(data => console.log(data))
       .catch(error => console.error('Error:', error));

    // • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
    async function fetchData() {
        try {
            const response = await fetch('https://this-is-not-a-url.com');
            if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    fetchData();
