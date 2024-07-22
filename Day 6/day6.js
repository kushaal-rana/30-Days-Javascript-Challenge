// Day 6: Arrays

// Activity 1: Array Creation and Access
    // • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
        let arr = [1, 2, 3, 4, 5]
        console.log(arr); // Output: [1, 2, 3, 4, 5]
        
        // • Task 2: Access the first and last elements of the array and log them to the console.
        let arr1 = [1, 2, 3, 4, 5]
        console.log(arr[arr.length-1]); // Output: 5
        console.log(arr1.pop()); // Output: 5

// Activity 2: Array Methods (Basic)
    // • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
        let arr2 = [1, 2, 3, 4, 5]
        arr2.push(6);
        console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
    
    // • Task 4: Use the pop method to remove the last element from the array and log the updated array.
        let arr3 = [1, 2, 3, 4, 5]
        arr3.pop();
        console.log(arr3); // Output: [1, 2, 3, 4]

    // • Task 5: Use the shift method to remove the first element from the array and log the updated array.
        let arr4 = [1, 2, 3, 4, 5]
        arr4.shift();
        console.log(arr4); // Output: [2, 3, 4, 5]

    // • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
    let arr5 = [1, 2, 3, 4, 5]
        arr5.unshift(0);
        console.log(arr5); // Output: [0, 1, 2, 3, 4, 5]

// Activity 3: Array Methods (Intermediate)
    // • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
        let arr6 = [1, 2, 3, 4, 5]
        let doubledArr = arr6.map(num => num * 2);
        console.log(doubledArr); // Output: [2, 4, 6, 8, 10]

    // • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
        let arr7 = [1, 2, 3, 4, 5]
        let evenArr = arr7.filter(num => num%2==0);
        console.log(arr7);
        console.log(evenArr); // Output: [2, 4, 6]
    // • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
        let arr8 = [1, 2, 3, 4, 5]
        let sum = arr8.reduce((accumulator, currentValue)=> accumulator+currentValue,0);
        console.log(sum); // Output: 15

// Activity 4: Array Iteration
    // • Task 10: Use a for loop to iterate over the array and log each element to the console.
        let arr9 = [1, 2, 3, 4, 5]
        for(let i=0; i<arr9.length; i++){
            console.log(arr9[i]);
        }
        
    // • Task 11: Use the forEach method to iterate over the array and log each element to the console.
        let arr10 = [1, 2, 3, 4, 5]
        arr10.forEach(element => console.log(element));

// Activity 5: Multi-dimensional Arrays
    // • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
        let matrix = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
        console.log(matrix); // Output: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

    // • Task 13: Access and log a specific element from the two-dimensional array.
        let matrix2 = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
        console.log(matrix2[1][1]) //Output: 1

