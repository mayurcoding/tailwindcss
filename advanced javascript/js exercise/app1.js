// // console.log(" js snippet");

// // const numbers = [1, 2, 3, 4, 5,];

// // const result = numbers.map(num=>num*2);
// // console.log(result);

// // const person = {
// //   name: "John",
// //   age: 30,
// // };
// // const { name, age } = person;
// // const message = "${name}is ${age} years old";
// // console.log(message);

// //desturct an object into variables
// const user = {
//   name: "Mayur",
//   age: 24,
//   email: "mayurrastogi46@gmail.com",
//   address: "Bareilly",
// };
// const { name, age, email, address } = user;
// console.log(name, age, email, address);

// //Use map(), filter(), and reduce() methods to manipulate an arrays

// let numbers = [2, 5, 3, 1, 9, 7, 8, 6, 4];
// //map() method
// let addNumber5 = numbers.map((number) => {
//   return number + 5;
// });
// console.log(addNumber5);

// //filter() method

// let numberss = [2, 5, 3, 1, 9, 7, 8, 6, 4];
// let greaterthan5 = numberss.filter((number) => {
//   return number > 5;
// });
// console.log(greaterthan5);

// //reduce() method
// let num = [2, 5, 3, 1, 9, 7, 8, 6, 4];

// let sum = num.reduce((acc, curr) => {
//   return acc + curr;
// }, 0); //0 is the initial value of acc
// console.log(sum);

// //Use spread operator to merge two arrays

// let fruits = ["apple", "banana", "mango"];
// let fruitsAndVegetables = [
//   ...fruits,
//   "potato",
//   "tomato",
//   "onion",
//   "cucumber",
//   "carrot",
// ];
// console.log(fruits); //["apple", "banana", "mango"]
// console.log(fruitsAndVegetables); //["apple", "banana", "mango", "potato", "tomato", "onion", "cucumber", "carrot"]

// function greetings()
// {
//   let message = "hi";
//   function sayHi()
//   {
//     console.log(message);
//   }
//   return sayHi;
// }
// const hi = greetings();
// hi();

// //write a javscript function that increments and logs a counter each time its called
// function counter()
// {
//   let count = 0;
//   return function inner()
//   {
//     count++;
//     console.log(count);
//     console.log('Counter: $(count)');
//   }
// }

// const incrementCounter = counter();
// incrementCounter();
// incrementCounter();
// incrementCounter();
// incrementCounter();

// Understand hoisting , higher order functions and closures in javascript

// // 1- Explain hoisting with an example

// Hoisting is a JavaScript mechanism where variables and function declarations
// are moved ("hoisted") to the top of their scope before code execution. However,
//  only the declaration is hoisted, not the initialization.

// ---

// Example 1: Hoisting with `var`
// ```javascript
// console.log(a); // Output: undefined
// var a = 5;
// console.log(a); // Output: 5
// ```
// Explanation:
// - The variable `a` is hoisted to the top, but only its declaration (`var a;`), not its initialization (`a = 5;`).
// - Since `a` is hoisted with an initial value of `undefined`, the first `console.log(a);` prints `undefined`.
// - After `a` is assigned `5`, the second `console.log(a);` prints `5`.

// ---

//  Example 2: Hoisting with `let` and `const`
// ```javascript
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// console.log(b);
// ```
// Explanation:
// - Unlike `var`, `let` and `const` do not get initialized with `undefined`.
// - They are hoisted but remain in a **temporal dead zone** (TDZ) until the declaration is encountered.
// - Accessing `b` before its declaration causes a **ReferenceError**.

// Example 3: Hoisting with Functions
// ```javascript
// hello(); // Output: "Hello, world!"

// function hello() {
//   console.log("Hello, world!");
// }
// ```
// Explanation:
// - Function declarations are fully hoisted, meaning they can be called before their definition.

// However, function expressions are **not** hoisted the same way:
// ```javascript
// greet(); // TypeError: greet is not a function

// var greet = function() {
//   console.log("Hi there!");
// };

// Write a higher order function that takes a callback function as an argument.

// let stepOne = (callback) => {
//   console.log("Step One completed");
//   callback();
// }

// let stepTwo = () => {
//   console.log("Step Two completed");
// }
// stepOne(stepTwo);

// // Create a closure that returns a function with access to its own scope.

// function counter()
// {
//   let count = 0;
//   return function inner()
//   {
//     count++;
//     console.log(count);
//     console.log('Counter: $(count)');
//   }
// }

// const incrementCounter = counter();
// incrementCounter();
// incrementCounter();
// incrementCounter();
// incrementCounter();

// Write a javascript code that promise with 'hello' the append 'world!' and logs the message.

// const promise = Promise.resolve("Hello");
// promise.then((value) => {
//   console.log(value + " World!");
// });

// // Create a promise that resolves after 2 seconds.
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved after 2 seconds");
//   }, 2000);
// });
// console.log("Promise created");
// //use then() method to handle promise resolution.

// promise.then((value) => console.log(value));

// // Use a async/await to fetch data from an API.
// let url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     for (let item in data) {
//       console.log(data[item].title);
//     }
//   });















//1. Explain event bubbling with an example.
// Event bubbling is a concept in the DOM (Document Object Model) where an event starts
//  from the deepest target element and then bubbles up to the ancestor elements.
// This means that if an event is triggered on a child element, it will also trigger on
// its parent elements, unless explicitly stopped.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Event Bubbling Example</title>
// </head>
// <body>
//   <div id="parent" style="padding: 20px; border: 1px solid black;">
//     Parent
//     <div id="child" style="padding: 20px; border: 1px solid red;">
//       Child
//     </div>
//   </div>

//   <script>
//     document.getElementById('parent').addEventListener('click', function() {
//       console.log('Parent clicked');
//     });

//     document.getElementById('child').addEventListener('click', function(event) {
//       console.log('Child clicked');
//       // Uncomment the next line to stop event bubbling
//       // event.stopPropagation();
//     });
//   </script>
// </body>
// </html>
// In this example:

// There are two nested div elements: parent and child.
// Both div elements have click event listeners attached to them.
// When you click on the child div, the event will first trigger the child's event listener, logging "Child clicked".
// Then, the event will bubble up to the parent div, triggering its event listener and logging "Parent clicked".
// If you want to stop the event from bubbling up to the parent elements, you can use the event.stopPropagation() method inside the child's event listener. Uncomment the event.stopPropagation() line in the child's event listener to see this in action.


// 2. Implement event delegation with to handle events on mutlitple elements.



const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  if (event.target.id === "button1") {
    console.log("Button 1 clicked");
  }
  if (event.target.id === "button2") {
    console.log("Button 2 clicked");
  }
  if (event.target.id === "button3") {
    console.log("Button 3 clicked");
  }
});

//use this keyword to access the content of a function.
function greet(name) {
  console.log("Hello My name is Mayur Rastogi and I am a web developer");
  console.log(this.name);
}
greet();