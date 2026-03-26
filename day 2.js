/* 
Function Declaration (The standard way).
*/

function sumOfTwoNumbers(a, b) {
  return a + b;
}
console.log(sumOfTwoNumbers());

/* 
Function Expression (Saving the function into a variable).
*/

const sumOfTwoNumbers2 = function (a, b) {
  return a + b;
};
console.log(sumOfTwoNumbers2(5, 10));

/* 
Arrow Function (The modern ES6 way used in React).
*/

const sumOfTwoNumWithArrow = (a, b) => {
  return a + b;
};
console.log(sumOfTwoNumWithArrow(7, 5));

/* 
Create a Global Variable called taxRate and set it to 0.05 (5%).

Write an Arrow Function called calculateFinalPrice.

The function should take two parameters: price and discount (give discount a default value of 0).

Inside the function:

Calculate the price after discount: let discountedPrice = price - discount.

Calculate the tax: let finalTax = discountedPrice * taxRate. (Notice it uses the global variable!)

Return the discountedPrice + finalTax.

Test it: Call the function with a price of 100 but no discount and console.log the result.
*/

let taxRate = 0.05;
const calculateFinalPrice = (price, discount = 0) => {
  const discountedPrice = price - discount; // Changed to const
  const finalTax = discountedPrice * taxRate; // Changed to const
  return discountedPrice + finalTax;
};
console.log(calculateFinalPrice(100));

/* 
The "Notification System" Challenge
The Task:

Write a function called notifyUser that takes one parameter (message) and simply logs it to the console.

Write a second function called processPayment. It should take two parameters: amount and callback.

Inside processPayment:

Log: "Processing payment of $[amount]..."

Then, call the callback function and pass it this message: "Payment successful!"

The Test: Call processPayment(500, notifyUser).
*/

const notifyUser = (message) => {
  console.log(`Notification: ${message}`);
};
const processPayment = (amount, callback) => {
  console.log(`Processing payment of ${amount}.....`);
  const status = "Payment Successful";
  callback(`${amount} taka ${status}`);
};
processPayment(500, notifyUser);

/* 
The "Math Lab" Challenge:

Write a function called displayResult that takes one parameter (result) and logs: "The final answer is: [result]".

Write a function called smartMath. It should take three parameters: num1, num2, and operation.

Inside smartMath:

Create a variable total = num1 + num2.

Call the operation function (the callback) and pass it the total.

The Test: Call smartMath(10, 20, displayResult).
*/

function displayResult(result) {
  console.log(`The final answer is: ${result}`);
}
function smartMath(num1, num2, operation) {
  let total = num1 + num2;
  operation(total);
}
smartMath(10, 20, displayResult);
smartMath(5, 5, (res) => console.log(res * 2));

/* 
Task 1: The Basic Greeter (Warm-up)
Create a function called processUserInput that takes a name (string) and a callback function as arguments.

The Goal: The processUserInput function should simply take the name and then call the callback function, passing that name into it.

The Test: Create a callback called welcomeMessage that logs "Hello, [name]!" to the console.
*/

function processUserInput(name, callback) {
  callback();
}
function welcomeMessage(name) {
  console.log(`Hello, ${name}`);
}
processPayment("Akash", welcomeMessage);

/* 
Task 2: The Math Machine
Create a function called calculate that takes three arguments: two numbers and a callback function called operation.
The Goal: The calculate function should execute the operation callback using the two numbers.
The Test: Call calculate twice:
Once with a callback that adds the numbers.
Once with a callback that multiplies the numbers.

*/

function calculate(num1, num2, callback) {
  let result = num1 + num2;
  callback(result);
}
function displayResult(total) {
  console.log(`The sum of two number is : ${total}`);
}
calculate(6, 7, displayResult);
calculate(8,9, multi => console.log(`${multi * 2}`));

/* Task 3: The Delayed Secret
In the real world, callbacks are often used for things that take time (like fetching data).

The Goal: Write a function called delayedMessage that takes a string and a callback.

The Requirement: Use setTimeout inside your function to wait 2 seconds, then execute the callback using the string you provided.

The Test: Make the callback log "Delayed delivery: [your string]" to the console.

*/

/* Task 4: The "Safe" Data Fetcher (Advanced)
Simulate a database request. Create a function called fetchData.

The Goal: This function should take a callback that follows the "error-first" pattern (common in Node.js).

The Logic: 1. Inside fetchData, create a variable isSuccess = true (you can toggle this to test).
2. If isSuccess is true, the callback should be called with null as the first argument (no error) and "Secret Data Found!" as the second.
3. If isSuccess is false, the callback should be called with "Error: 404 Not Found" as the first argument and null as the second.

The Test: Write a callback that checks if an error exists. If it does, log the error; otherwise, log the data.
 */
