// console.log(" js snippet");

// const numbers = [1, 2, 3, 4, 5,];

// const result = numbers.map(num=>num*2);
// console.log(result);

// const person = {
//   name: "John",
//   age: 30,
// };
// const { name, age } = person;
// const message = "${name}is ${age} years old";
// console.log(message);

//desturct an object into variables
const user = {
  name: "Mayur",
  age: 24,
  email: "mayurrastogi46@gmail.com",
  address: "Bareilly",
};
const { name, age, email, address } = user;
console.log(name, age, email, address);

//Use map(), filter(), and reduce() methods to manipulate an arrays

let numbers = [2, 5, 3, 1, 9, 7, 8, 6, 4];
//map() method
let addNumber5 = numbers.map((number) => {
  return number + 5;
});
console.log(addNumber5);

//filter() method

let numberss = [2, 5, 3, 1, 9, 7, 8, 6, 4];
let greaterthan5 = numberss.filter((number) => {
  return number > 5;
});
console.log(greaterthan5);

//reduce() method
let num = [2, 5, 3, 1, 9, 7, 8, 6, 4];

let sum = num.reduce((acc, curr) => {
  return acc + curr;
}, 0); //0 is the initial value of acc
console.log(sum);

//Use spread operator to merge two arrays

let fruits = ["apple", "banana", "mango"];
let fruitsAndVegetables = [
  ...fruits,
  "potato",
  "tomato",
  "onion",
  "cucumber",
  "carrot",
];
console.log(fruits); //["apple", "banana", "mango"]
console.log(fruitsAndVegetables); //["apple", "banana", "mango", "potato", "tomato", "onion", "cucumber", "carrot"]
