// Day 11: Promises and Async/Await

// Activity 1: Understanding Promises
    // • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise is resolved")
            }, 2000);
        }).then((message)=>{
            console.log(message)
        })
    
    // • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using -catch ().
        const rejectPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Promise is rejected")
            }, 2000);
        })
        rejectPromise.catch((error) => {
            console.error(error)
        })

// Activity 2: Chaining Promises
    // • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
    const fetchData1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched from 1st API")
            }, 2000);
        })
    }
    
    const fetchData2 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched from 2nd API")
            }, 2000);
        })
    }
    fetchData1()
       .then((message) => {
            console.log(message);
            return fetchData2();
        })
       .then((message) => {
            console.log(message);
        })
       .catch((error) => {
            console.error(error);
        })
    

// Activity 3: Using Async/Await
    
    // • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
        const asyncAwait = async (message)=>{
            const resolvedMessage = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(message);
                }, 2000);
            });
            console.log(resolvedMessage, "Res");
            // console.log(message,"MES");
        }
        asyncAwait("Async/Await is waiting for 2 seconds");

        // function simulateAsyncOperation(value, delay) {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             resolve(value);
        //         }, delay);
        //     });
        // }

        //  Async function that waits for a promise to resolve and logs the resolved value
        // async function waitForPromise() {
        //     try {
        //         const resolvedValue = await simulateAsyncOperation('Resolved Value', 2000);
        //         console.log('Promise resolved with:', resolvedValue);
        //     } catch (error) {
        //         console.error('Error:', error);
        //     }
        // }


    // • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
        const rejectedPromise = new Promise((resolve,reject) => {
            setTimeout(() => {
                reject('Rejected Promise');
            }, 2000);
        })
        async function printRejectedPromise(){
            try {
               const message =  await rejectedPromise;
               console.log("promise msg :-", message)
            } catch (error) {
                console.log("Promise Error: ",error)
            }
        }
        printRejectedPromise();

// Activity 4: Fetching Data from an API
    // • Task 6: Use the fetch APl to get data from a public API and log the response data to the console using promises.
            function fetchPromise(){
            const fetchData = fetch('https://jsonplaceholder.typicode.com/todos/1');
            fetchData
                .then(response => {
                    console.log(response)
                    if(!response.ok) throw new Error("Failed to Fetch the data from the API")
                        // response.json().then(data => resolve(data));
                    return response.json();
                })
                .then((data) => console.log(data,"Used Inside"))
                .catch((error) => {
                    console.error("Promise Error: ",error)
                    reject(error);
                });
            }
        fetchPromise()
        
    // • Task 7: Use the fetch APl to get data from a public API and log the response data to the console using async/await.
        const fetchDataAsync = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);

            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchDataAsync();

// Activity 5: Concurrent Promises
    // • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.        
        const promise1 = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Promise 1 Resolved');
            }, 2000);
        });

        const promise2 = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Promise 2 Resolved');
            }, 3000);
        });

        const promise3 = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Promise 3 Resolved');
            }, 5000);
        });

        Promise.all([promise1, promise2, promise3])
           .then((values) => {
                console.log('All promises resolved:', values);
            });
    // • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
        Promise.race([promise1, promise2, promise3])
           .then((value) => {
                console.log('First promise to resolve:', value);
            });

            // Promise.all and Promise.race are both methods used to handle multiple promises at once. Promise.all is useful when you want to wait for multiple asynchronous operations to complete and need all of them to be successful before proceeding. Promise.race returns the first promise with the shortest delay, whether it is resolved or rejected. 
