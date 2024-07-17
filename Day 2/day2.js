// Day 2: Operators
    
// Activity 1: 
    // •Task 1: Write a program to add two numbers and log the result to the console.
        let num1 = 10; 
        let num2 = 5;
        console.log(num1 + num2); // Output: 15

    // • Task 2: Write a program to subtract two numbers and log the result to the console.
        let num3 = 10;
        let num4 = 5;
        console.log(num3 - num4); // Output: 5

    // • Task 3: Write a program to multiply two numbers and log the result to the console.
        let num5 = 10;
        let num6 = 10;
        console.log(num5 * num6); // Output: 100

    // • Task 4: Write a program to divide two numbers and log the result to the console.
        let num7 = 10;
        let num8 = 5;
        console.log(num7 / num8); // Output: 2

    // • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
        let num9 = 100;
        let num10 = 50;
        console.log(num9 % num10); // Output: 0

// Activity 2: Assignment Operators
    // • Task 6: Use the += operator to add a number to a variable and log the result to the console.
        let num11 = 20;
        num11 += 5;
        console.log(num11); // Output: 25

    // • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
        let num12 = 20;
        num12 -= 5;
        console.log(num12); // Output: 15

// Activity 3: Comparison Operators
    // • Task 8: Write a program to compare two numbers using > and < and log the result to the console.
        let num13 = 10;
        let num14 = 5;
        console.log(num13 > num14); // Output: true
        console.log(num13 < num14); // Output: false
        
        // • Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
        let num15 = 10;
        let num16 = 10;
        console.log(num13 >= num14); // Output: true
        console.log(num13 <= num14); // Output: true
    
    // • Task 10: Write a program to compare two numbers using == and === and log the result to the console.
        let num17 = 10
        let num18 = '10';
        console.log(num17 == num18); // Output: true
        console.log(num17 === num18); // Output: false


// Activity 4: Logical Operators
    // • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
        let num19 = 20
        let num20 = 10
        console.log(num19 > num20 && num19 < 30); // Output: true
    
    // • Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
        let num21 = 10
        let num22 = 20
        console.log(num21 > num20 || num21 < 30); // Output: true
    
    // • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
        let flag = true;
        if(!flag){
            console.log("Flag is false");
        }
        else{
            console.log("Flag is true");
        }


// Activity 5: Ternary Operator
    // • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
    let num23 = 10;
    console.log(num23 > 0 ? "Number is positive" : "Number is negative"); // Output: Number is positive
