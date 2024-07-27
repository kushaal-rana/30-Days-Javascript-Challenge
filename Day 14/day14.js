// Day 14: Classes

// Activity 1: Class Definition
    // • Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
        class Person {
            constructor(firstName, lastName, age) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
            }
            // set fullName(name) {
            //     this.name = name;
            // }
            get fullName() {
                return `${this.firstName} ${this.lastName}`;
            }
            set fullName(name) {
                const [firstName, lastName] = name.split(" ");
                this.firstName = firstName;
                this.lastName = lastName;
            }

            greeting(message) {
                return `Hello, my name is ${this.firstName} and I am ${this.age} years old. ${message}`;
            }
            static genericGreeting(){
                return `Have a Good Day`;
            }
        }
        const per1 = new Person("Kushaal", 100);
        console.log(per1.greeting("It was nice to meet you"));
    // • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
        function updateAge(newAge) {
            this.age = newAge;
            console.log(`Updated age: ${this.age}`);
        }
        Person.prototype.updateAge = function(newAge) {
            this.age = newAge;
            console.log(`Updated age: ${this.age}`);
        };
        const per = new Person("Kushaal", 100);
        console.log(per.greeting("It was nice to meet you"));

        // Update the age using the new method
        per.updateAge(101);

        // Verify if the method exists
        console.log(per.updateAge); // This should log the function definition if it exists
        console.log(Object.getPrototypeOf(per)); // This should show the prototype object including the updateAge method


// Activity 2: Class Inheritance
    // • Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
        class Student extends Person {
            static countStudents = 0;
            constructor(name, age, studentId) {
                super(name, age);
                this.studentId = studentId;
                Student.countStudents++;
            }
            getStudentId(){
                return this.studentId;
            }

            greeting(message) {
                return `Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}. ${message}`;
            }
        }
        const stu1 = new Student("Kushaal", 100, "12345");
        console.log(stu1.getStudentId()); // Output: 12345
    
    // • Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
        
        const stu2 = new Student("John", 100, "12345");
        console.log(stu2.greeting("Please Welcome"));

// Activity 3: Static Methods and Properties
    // • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
        console.log(Person.genericGreeting()); // Output: Hello, my name is Person and I am a generic greeting.
    // • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
        const stu3 = new Student("Chai", 10, "345");
        console.log(`Total number of students: ${Student.countStudents}`); // Output: Total number of students: 2


// Activity 4: Getters and Setters
    // • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
        const per2 = new Person("Kush","Rana",10);
        console.log(per2.fullName);

    // • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using the setter and log the updated full name.
        const per3 = new Person("K","Rana")
        console.log(per3.fullName); // Output: Kushaal Rana
        per3.fullName = "Kushaal Rana";
        console.log(per3.fullName); // Output: Kushaal Rana

// Activity 5: Private Fields (Optional)
    // • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
        class Account {
             _balance;

              constructor(){
                this._balance = 0;
              }
             
              deposit(money){
                if(money>0){
                this._balance += money;
                console.log(`Deposited: ${money}. New balance: ${this._balance}`);
             }
             else{
                console.log("Invalid deposit amount.");
             }
            }

             withdraw(money){
                if (money > 0 && money <= this._balance) {
                this._balance -= money;
                console.log(`Withdrew: ${money}. Newbalance: ${this._balance}`);
                } else {
                console.log("Invalid withdrawal amount or insufficient balance.");
                }
            }
            get getBalance(){
                return this._balance;
            }
        }
        const acc1 = new Account();
        acc1.deposit(1000);
        acc1.withdraw(500);
        console.log(acc1.getBalance); // Output: 500

    // • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
        const acc2 = new Account();
        acc2.deposit(2000);
        acc2.withdraw(1500);
        acc2.withdraw(2000);
        console.log(acc2.getBalance); // Output: 0
    
