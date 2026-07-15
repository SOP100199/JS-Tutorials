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

const add = (a, b) => {
  return a + b;
};

// if one parameter is present:
const square = (x) => x * x;
// or
const area = (x, y) => x * y;

// No Parameters

const clog = () => {
  console.log("Hello");
};

// Returing Object

const obj = () => ({
  name: "SOP",
});


//  Arrow functions do not have their own THIS 

const student ={
    name:"SOP",
    greet:()=>{
        console.log(this.name)
        
    }
}

console.log(student.greet());  // Undefined

//  Arguments 
const test =(...args) =>{
    console.log(args);
}
test(1,3,4,5,5,4)

//  Constructors (cant use new for arrow functions)

// const person  = (name)=>{
//     this.name = name;
// }

// const p= new person("SOP");

// console.log(p);
// but 

const Person = function(name){
    this.name =name;
}

const p1 = new Person("SOP");
console.log(p1.name)


// When to use Arrow Functions 
// 1) Short utility functions 
// 2) Array methods like (numbers.map(n=>n*2));
// 3)callbacks setTimeout(() => {
//     console.log("Done");
// }, 1000);



// WHEN NOT TO USE ARROW FUNCTIONS

// 1) object methods


const add = (a,b) =>{
    return a+b ;
}
const sub = (a,b) =>{
    return a-b ;
}
const cub = (x) => x*x*x;
const isEven = (a) => a %2 ==0;




const max = (a,b)=> (a>b)?a:b
