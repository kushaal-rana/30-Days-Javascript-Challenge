// Day 7: Objects

// Activity 1: Object Creation and Access
    // • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
        const book = {
            title: "Build Don't Talk",
            author: "Raj Shamani",
            year: 2022
        }
        console.log(book); // Output: { title: 'Book Title', author: 'Author Name', year: 2022 }
    // • Task 2: Access and log the title and author properties of the book object.
        console.log(`${book.title} by ${book.author}`); // Output: Build Don't Talk by Raj Shamani

    // • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
        book.getBookDetails = function(){
            console.log(`${this.title} by ${this.author}`); //or you can even return 
        }
        book.getBookDetails()
    // • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
        book.updateBookYear = function(year){
            this.year = year;
        }
        console.log(book.year);
        book.updateBookYear(2023)
        console.log(book.year);

// Activity 3: Nested Objects
    // • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
        const library = {
            name: "Chai Aur Library",
            books: [
            {
                title: "Build Don't Talk",
                author: "Raj Shamani",
                year: 2022
            },
            {
                title: "Deep Work",
                author: "Cal Newport",
                year: 2018
            }
        ]
        }
        console.log(library); // Output: { name: 'Chai Aur Library', books: [ { title: 'Build Don't Talk', author: 'Raj Shamani', year: 2022 }, { title: 'Deep Work', author: 'Cal Newport', year: 2018 } ] }
        
    // • Task 6: Access and log the name of the library and the titles of all the books in the library.
        console.log(`${library.name} has ${library.books.length} books.`);
        library.books.forEach(book => console.log(book.title)); // Output: Build Don't Talk, Deep Work

// Activity 4: The this Keyword
    // • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
        book.getBookInfo = function() {
            return `${book.title} ${book.year}`
        }
        console.log(book.getBookInfo()); // Output: Build Don't Talk 2022

    // • Task 8: Add a method to the book object that takes a parameter (year) and returns a boolean indicating whether the book's year is equal to the given year.
        book.getBookYear = function(year) {
            return this.year === year
        }
        console.log(book.getBookYear(2022)); // Output: true

// Activity 5: Object Iteration
    // • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
        for(let i in book){
            console.log(`${i}: ${book[i]}`); // Output: title: Build Don't Talk, author: Raj Shamani, year: 2022, getBookDetails: [Function], getBookInfo: [Function], getBookYear: [Function]
        }
    // • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
        const keys = Object.keys(book);
        const values = Object.values(book);
        
        console.log('Keys:', keys);
        console.log('Values:', values);
