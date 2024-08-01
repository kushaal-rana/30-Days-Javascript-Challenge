// Day 16: Recursion

// Activity 1: Basic Recursion

    // • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
        function factorial(number) {
            if(number==0) return 1;
            return number * factorial(number-1);
        }
        console.log(factorial(5)); // Output: 120
        console.log(factorial(0)); // Output: 1

    // • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
        function fibonacci(n) {
            if(n<=1) return n;
            return fibonacci(n-1) + fibonacci(n-2);
        }
        console.log(fibonacci(5)); // Output: 5
        // console.log(fibonacci(0)); // Output: 0
        // console.log(fibonacci(1)); // Output: 1

// Activity 2: Recursion with Arrays

    // • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
        function sumArray(arr) {
            if(arr.length==0) return 0;
            return arr[0] + sumArray(arr.slice(1));
        }
        console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

    // • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
        function maxArray(arr) {
            if(arr.length == 1) return arr[0];
            let maxOfRest = maxArray(arr.slice(1));
            return arr[0]>maxOfRest?arr[0]:maxOfRest;
        }
        console.log(maxArray([1, 2, 3, 4, 5])); // Output: 5

// Activity 3: String Manipulation with Recursion

    // • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
        function reverseString(str) {
            if(str.length == 0) return '';
            return str[str.length - 1] + reverseString(str.slice(0, str.length - 1))
        }
        console.log(reverseString("hello")); // Output: olleh
        
    // • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
        function checkForPalindrome(str) {
            if(str.length == 0 || str.length == 1) return true;
            if(str[0]!= str[str.length - 1]) return false;
            return checkForPalindrome(str.slice(1, str.length - 1));
        }

// Activity 4: Recursive Search

    // • Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
        function binarySearch(arr, target, start = 0, end = arr.length - 1) {
            if(start > end) return -1;
            let mid = Math.floor((start + end) / 2);
            if(arr[mid] === target) return mid;
            if(arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
            return binarySearch(arr, target, start, mid - 1);
    }
        console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // Output: 4

    // • Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
        function countOccurrences(arr, target) {
            if(arr.length == 0) return 0;
            if(arr[0]==target) return 1 + countOccurrences(arr.slice(1), target);
            return countOccurrences(arr, target);  // Base case: if the target is not found, return 0
        }           
        console.log(countOccurrences([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10], 5)); // Output: 2


// Activity 5: Tree Traversal (Optional)

    // • Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
        function inOrderTraversal(node) {
            if(node) {
                inOrderTraversal(node.left);
                console.log(node.value);
                inOrderTraversal(node.right);
            }
        }
        // Create a binary tree and perform an in-order traversal
        let root = {
            value: 1,
            left: {
                value: 2,
                left: { value: 4 },
                right: { value: 5 }
            },
            right: {
                value: 3,
                left: null,
                right: { value: 6 }
            }
        };
        inOrderTraversal(root); // Output: 4 2 5 1 3 6

    // • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
        function calculateDepth(node) {
            if(node) {
                let leftDepth = calculateDepth(node.left);
                let rightDepth = calculateDepth(node.right);
                return Math.max(leftDepth, rightDepth) + 1;
            }
            return 0;
        }
        console.log(calculateDepth(root)); // Output: 3
