// Day 3: Control Structures

// Activity 1: If-Else Statements
    // • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
        let num1 = 10;
        // let num1 = -10;
        // let num1 = 0;
        if(num1>0) console.log(`Num1 is Positive ${num1}`);
        else if(num1<0) console.log(`Num1 is Negative ${num1}`);
        else if(num1==0) console.log(`Num1 is Zero ${num1}`)
    // • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
        let age = 19;
        if(age>18) console.log('You are eligible to vote');
        else if(age<18) console.log('You are not eligible to vote');
            

// Activity 2: Nested If-Else Statements
    // • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
        let num2 = 10;
        let num3 = 5;
        let num4 = 20;
            if(num2>num3 && num2>num4){
                console.log(`The largest number is ${num2}`);
            }
            else if(num3>num2 && num3>num4){
                console.log(`The largest number is ${num3}`);
            }
            else console.log(`The largest number is ${num4}`);

// Activity 3: Switch Case
    // • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
        let num5 = 3;
        switch(num5) {
            case 1: console.log(`The day of the week is Monday`); break
            case 2: console.log(`The day of the week is Tuesday`); break
            case 3: console.log(`The day of the week is Wednesday`); break
            case 4: console.log(`The day of the week is Thursday`); break
            case 5: console.log(`The day of the week is Friday`); break
            case 6: console.log(`The day of the week is Saturday`); break
            case 7: console.log(`The day of the week is Sunday`); break
            default: console.log(`Invalid day number`); break;
        }                

    // • Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
        let score = 85;
            switch(Math.round(score/10)) {
                case 9: console.log('Grade: A'); break
                case 8: console.log('Grade: B'); break
                case 7: console.log('Grade: C'); break
                case 6: console.log('Grade: D'); break
                default: console.log('Grade: F'); break;
            }

// Activity 4: Conditional (Ternary) Operator
    // • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
        let num6 = 10;
        num6%2===0?console.log("Number is even"):console.log("Number is odd");

// Activity 5: Combining Conditions
    // • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
         let year = 2020;
         if((year%4==0 && year%100!==0) || (year%4===0)) console.log(`${year} is a leap year`);
         else console.log(`${year} is not a leap year`);