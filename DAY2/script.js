// function add(a,b){ // here and b are parameters
//     return a+b;
// }

// add(3,1) // here 3 and 1 are arguments

//  returning without printing the output
// function calculateArea(lenght,width){
//     return lenght*width
// }
// function calculatePerimeter(lenght,width){
//     return 2*lenght+width
// }

// Function Expression

// const greet = function(name){ // this type of function expression is called as Anonymous Function
//     return "Hello"+ name
// }
// // chance for TDZ if the variable is used before the declaration
// console.log(greet("SOP"));

// //  Names Fucntion Expression

// const factorial = function fact(n){
//      if (n === 1) return 1;

//     return n * fact(n - 1);
// }

//  Arrow Functions

// const add = (a, b) => {
//   return a + b;
// };

// if one parameter is present:
// const square = (x) => x * x;
// // or
// const area = (x, y) => x * y;

// No Parameters

// const clog = () => {
//   console.log("Hello");
// };

// // Returing Object

// const obj = () => ({
//   name: "SOP",
// });

//  Arrow functions do not have their own THIS

// const student ={
//     name:"SOP",
//     greet:()=>{
//         console.log(this.name)

//     }
// }

// console.log(student.greet());  // Undefined

// //  Arguments
// const test =(...args) =>{
//     console.log(args);
// }
// test(1,3,4,5,5,4)

//  Constructors (cant use new for arrow functions)

// const person  = (name)=>{
//     this.name = name;
// }

// const p= new person("SOP");

// console.log(p);
// but

// const Person = function(name){
//     this.name =name;
// }

// const p1 = new Person("SOP");
// console.log(p1.name)

// When to use Arrow Functions
// 1) Short utility functions
// 2) Array methods like (numbers.map(n=>n*2));
// 3)callbacks setTimeout(() => {
//     console.log("Done");
// }, 1000);

// WHEN NOT TO USE ARROW FUNCTIONS

// 1) object methods

// const add = (a,b) =>{
//     return a+b ;
// }
// const sub = (a,b) =>{
//     return a-b ;
// }
// const cub = (x) => x*x*x;
// const isEven = (a) => a %2 ==0;

// const max = (a,b)=> (a>b)?a:b

///////// HIGHER ORDER FUNCTIONS

// 1) MAP

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = nums.map((x) => x * 2);

// console.log(result);

// // 2) filter
// const filter_result = nums.filter((x) => x % 2 === 0);
// console.log(filter_result);

// // 3) forEach
// const fnums = [1, 2, 3, 4];
// fnums.forEach((x, index) => (fnums[index] = x + 1)); // it does operation on the array itsself but does gets stored in a new variable
// console.log(fnums);
// //adding 1 for every element

// //  Task

// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a, b) {
//   return a - b;
// }
// function operation(operation, a, b) {
//   return operation(a, b);
// }

// console.log(operation(add, 1, 2));
// // task 2
// function calculate(number, operation) {
//   return operation(number);
// }

// const square = (x) => x * x;
// const cube = (x) => x * x * x;
// const double = (x) => x * 2;
// const half = (x) => x / 2;
// console.log(calculate(5, square));
// console.log(calculate(5, cube));
// console.log(calculate(5, double));
// console.log(calculate(5, half));

// conclusion:

// Function Name

// ↓

// The function itself
// Function Name()

// ↓

// The result returned by the function

// Callback Functions

// Callback?
// A function passed into another function that will be called LATER.

// const hello = () => {
//   console.log("HELLO");
// };
// // setInterval(hello,500);

// //  Topic 6 - Returning Function

// function multiplyBy(n) {
//   return function (x) {
//     return x * n;
//   };
// }

// const double = multiplyBy(2);
// const triple = multiplyBy(3);

// console.log(double(3));
// console.log(triple(3));

// // Topic 7- Currying
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log("currying- " + add(2)(1));

// // or with arrow functions

// const aradd = (a) => (b) => a + b;

// console.log("Arrow Currying- " + aradd(1)(2));

// // EG Tax amount
// const tax18 = (tax) => (price) => price + (price * tax) / 100;

// const gst18 = tax18(18);

// console.log(gst18(100));
// console.log(gst18(500));

// //  Topic -8 Function Composition

// const getPrice = () => 1000;
// const applyDiscount = (price) => price * 0.9;
// const addGST = (price) => price * 1.18;
// const generateInvoice = (total) => `₹${total}`;
// const invoice = generateInvoice(addGST(applyDiscount(getPrice())));

// console.log(invoice);

// // Topic 9 - Website Flow

// // Topic 10 - Callbacks -> Promise ->Async/Await

// async function main(params) {
//   const user = await getUser();
//   const orders = await getOrders(user);
//   const total = await calculatePrice(orders);

//   display(total);
// }

// main();

//  E-COMMERCE CHECKOUT
//  --Need to place an Order

function getUser() {
  console.log("Fetching User");

  return {
    id: 101,
    name: "SOP",
  };
}
function getCart(user) {
  console.log("Getting cart of " + user.name);

  return [
    { name: "Keyboard", price: 1000 },
    { name: "Mouse", price: 500 },
    { name: "Headphones", price: 2500 },
  ];
}
function calculatePrice(cart) {
  let total = 0;
  for (const item of cart) {
    total += item.price;
  }
  return total;
}

function applyDiscount(price) {
  return price * 0.9; //10%
}

function addGST(price) {
  return price * 1.18;
}

function genInvoice(total) {
  return {
    total,
    invoiceNumber: "INV001",
  };
}
function displayInvoice(invoice) {
  console.log("Invoice:");

  console.log(invoice);
}

const user = getUser();
const cart = getCart(user);
const total = calculatePrice(cart);
const discountedPrice = applyDiscount(total);
const finalPrice = addGST(discountedPrice);

const invoice = genInvoice(finalPrice);

displayInvoice(invoice);

// Task - Student Result Management System

function getStudent() {
  return {
    id: 1,
    name: "SOP",
  };
}
function getMarks(student) {
  return {
    math: 100,
    chem: 100,
    phy: 80,
    biology: 100,
    english: 100,
  };
}

function calculateAverage(marks){
    let total = 0;
    for(const i in marks ){
        total+=marks[i];
    }
    let avg = total/ Object.keys(marks).length;
    return avg;
}

function assignGrade(avg){
    if (avg >90 && avg <101){
        return "A"
    }
    else if (avg >80 && avg <90){
        return "B"
    }
    else if (avg >70 && avg <60){
        return "C"
        
    }
    else if (avg >40 && avg <50){
        return "D"
        
    }
    else{
        return "F"
    }
}
function genReportCard(grade,user,avg){
    console.log("Report Card of "+user.name);
    console.log(grade+" average: ",avg);
}

function displayReportCard(repocard){
    console.log(repocard);
}

const student = getStudent();
const marks  = getMarks(student);
const average = calculateAverage(marks);
const grade = assignGrade(average);
const repotCard = genReportCard(grade,student,average);

displayReportCard(repotCard)