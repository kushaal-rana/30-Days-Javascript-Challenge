export function addTwoNumbers(a, b) {
  return a + b;
}

export const person = {
  name: "Kushaal",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
export { add, subtract, multiply, divide };

const greet = (name) => `Hello, ${name}!`;
export default greet;

const MAX_SPEED_CAR = 240;
const MAX_SPEED_BIKE = 180;

const startVehicle = (vehicle) => `${vehicle} started.`;
const stopVehicle = (vehicle) => `${vehicle} stopped.`;
export { MAX_SPEED_CAR, MAX_SPEED_BIKE, startVehicle, stopVehicle };
