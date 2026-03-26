let text1 = "Bismillah";
text1 += " ir Rahman ir Rahim";
document.getElementById("javaScript").innerHTML = text1;
/* 
Now adding strings with numbers, the numbers will be converted to strings and then added to the string.
*/
let text2 = "The number is: ";
text2 += 4;
document.getElementById("javaScript").innerHTML += " " + text2;

let number1 = 5;
let result = number1 > 8;
let result2 = number1 < 8;
let result3 = number1 == 5;
let result4 = number1 != 5;
let result5 = number1 === 5; // This will check if the value and type are the same.
document.getElementById("javaScript").innerHTML += "<br> " + result5; // This will print true because 5 is equal to 5 and both are of the same type.
document.getElementById("javaScript").innerHTML += "<br> " + result4; // This will print false because 5 is equal to 5.
document.getElementById("javaScript").innerHTML += " <br> " + result3; // This will print true because 5 is equal to 5.

document.getElementById("javaScript").innerHTML += "<br> " + result2; // This will print true because 5 is less than 8.
document.getElementById("javaScript").innerHTML += " <br> " + result; // This will print false because 5 is not greater than 8.

let count = 1;
count ||= 5; // This will assign 5 to count because count is 1 which is truthy.
document.getElementById("javaScript").innerHTML += "<br> " + count; // This will print 5 because count was 1 and now it is assigned 5.

let isActive = false;
isActive &&= "The user is active"; // This will not assign "The user is active" to isActive because isActive is false.
document.getElementById("javaScript").innerHTML += "<br> " + isActive; // This will print false because isActive was false and it is not assigned "The user is active".
let settings = {
  speed: 0,
};
settings.speed ??= 5; // This will assign 0 to settings.speed because settings.speed is 0 which is not nullish.
document.getElementById("javaScript").innerHTML += "<br> " + settings.speed; // This will print 0 because settings.speed was 0 and it is not assigned 5.
settings.speed2 ??= 5; // This will assign 5 to settings.speed2 because settings.speed2 is undefined which is nullish.
document.getElementById("javaScript").innerHTML += "<br> " + settings.speed2; // This will print 5 because settings.speed2 was undefined and now it is assigned 5.

/* 
Switch statement is used to perform different actions based on different conditions. It is an alternative to if-else statements when you have multiple conditions to check.
*/
let weather = "sunny";
switch (weather) {
  case "snowy":
    document.getElementById("javaScript").innerHTML +=
      "<br> The weather is snowy.";
    break;
  case "rainy":
    document.getElementById("javaScript").innerHTML +=
      "<br> The weather is rainy.";
    break;
  case "sunny":
    document.getElementById("javaScript").innerHTML +=
      "<br> The weather is sunny.";

  default:
    document.getElementById("javaScript").innerHTML +=
      "<br> The weather is unknown.";
}

let score = 78;
switch (true) {
  case score >= 90:
    console.log("Excellent");
    break;
  case score >= 70:
    console.log("Good");
    break;
  case score >= 60:
    console.log("Keep practicing");
    break;
  default:
    console.log("Better luck next time");
}

let isLoggedIn = true;
let theMessage = isLoggedIn
  ? "Welcome back Masud!"
  : "Please login then try again.";
console.log(theMessage);

let guestCount = 12;
let tableSize;
tableSize = guestCount > 10 ? "Large Table needed" : "Regular Table needed";
console.log(tableSize);

let userType = "student";
let booksCheckedOut = 6;
switch (userType) {
  case booksCheckedOut > 5 ? "Limit reached" : "You can borrow more books":
    break;
  case "teacher":
    console.log("No limits");
    break;
  default:
    console.log("Please create an account");
}

let goal = "weightLoss";
let steps = 8000;
switch (goal) {
  case "weightLoss":
    let message =
      steps >= 10000
        ? "Daily goal met!"
        : "Walk a bit more to reach your goal.";
    console.log(message);
    break;
  case "muscleGain":
    let message2 = "Focus on protein today!";
    console.log(message2);
    break;
  default:
    console.log("Keep moving!");
}

/* 
Now its time to start loops, we will start with for loop, for loop is used to repeat a block of code a certain number of times. It consists of three parts: initialization, condition, and increment/decrement.
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`Number${i} is even .`);
    
  }
  else {
    console.log(`Number ${i} is odd.`);
  }
}

for (let i = 1; i <= 20; i++) {
  console.log(`${i}: ${i % 2 === 0 ? "Even" : "Odd"}`); 
}

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} is a FizzBuzz(the number is divisible by both 3 and 5.)`);
  } else if (i % 3 === 0) {
    console.log(`${i} is a Fizz(the number is divisible by 3.)`);
  }else if (i % 5 === 0) {
    console.log(`${i} is a Buzz(the number is divisible by 5.)`);
  } else {
    console.log(i);
  }
}

