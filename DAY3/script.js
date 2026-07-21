// DAY3 of JS MASTERY

// Objects
const student = {
  name: "SOP",
  age: "20",
  study() {
    console.log("Studying ... ");
  },
};

//  Accessing Properties

// console.log(student.name);
// console.log(student["name"]);

// ADDING ELEMENTS INTO THE OBJECT

// student.college = "IITM"
// console.log(student);

// // DELETING ELEMENTS

// delete student["age"]
// console.log(student);

// OBJECT DESTRUCTURING

// const { name, age } = student;

// console.log(name, age);

// SHORTHAND PROPERTY

// const name = "SOP";
// const age = 20;

// const student = {
//     name: name,
//     age: age
// };

// Computed Properties
// const field = "marks";

// const student = {
//   [field]: 95,
// };

console.log(student);

// Task 1
// const laptop = {
//   brand: "",
//   model: "",
//   price: 0,
// };
// laptop.ram = 16;
// laptop.price = 100000;
// delete laptop.model;
// console.log(laptop);

// Task 2

const employee = {
  name: "Alex",
  salary: 50000,
};

const { name, salary } = employee;

console.log(name, salary);

// Task 3

function createStudent(name, age) {
    
  return {
    name,
    age,
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    },
  };
}
const s1 = createStudent("SOP",20);
s1.greet()

// 📘 Day 3 – Topic 2: Prototype Chain



console.log(student.toString());
console.log(student.hasOwnProperty("age"));



// Array Prototype
const nums = [1,2,3];

nums.push(5);
console.log(nums);

console.log(nums.includes(10));

const new_nums = nums.map((x)=>x*2);
console.log(`new_nums: ${new_nums}`);
const filtered_nums = new_nums.filter((x)=>x%2==0)
console.log(`new_nums ${filtered_nums}`);


 

// Object Prototyping 


const grandParent = {
  greet(){
    console.log("Prototype- Hello");
    
  }
}
console.log(grandParent.valueOf());


const parent = Object.create(grandParent);

const child = Object.create(parent);
child.greet()



// Task 1 


const phone = {

    ring(){

        console.log("Ringing...");

    }

};


const samsung =Object.create(phone);

samsung.brand ="samsung";
samsung.model = "Pro Max";


samsung.ring()



// Task 2 

const calculator = {

    add(a,b){

        return a+b;

    }

};

const scientific = Object.create(calculator);

scientific.add= (a,b)=> a+b;
scientific.cube= (a)=> a*a*a;

console.log(scientific.add(5,6));
console.log(scientific.cube(2));



// Task 3
const animal = {

  bark(){
    console.log("Bow BOw");
  },
  live(){
    console.log("I am Alive");    
  },
  eat(){
    console.log('Eating');
    
  }
}

const dog = Object.create(animal);

dog.bark();
dog.eat();
dog.live();





//  Topic- this 


// const student = {
//     name: "SOP",

//     greet() {
//         console.log(this.name);
//     }
// };

// student.greet();  Prints SOP 


const car = {
    brand: "BMW",

    show() {
        console.log(this.brand);
    }
};

car.show();




function show(){
  console.log(this.name);  
}


const p1={
  name:"Alex",
  show
}
const p2={
  name:"John",
  show
}

p1.show()
p2.show()


//  nestes Objects

const company = {
  name:"OpenAI",

  employee:{
    name:"SOP",
    show(){
      console.log(this.name)
    }
  }
}
company.employee.show();


// Task1 

const laptop = {
    brand: "Dell",
    model: "G15",

    details() {
      console.log(this.model);
    }
};


laptop.details()


// Task 2
const student1 = {
    name: "SOP",
    marks: 95,
    percentage(){
      return `${this.marks}`
    }
};
console.log(student1.percentage()+"%");


// Task 3
function introduce() {
console.log("Hi!! this is ", this.name);
}


const student2 ={
  name:"Peter",
  introduce
}
const teacher ={
  name:"Zuri",
  introduce
}

student2.introduce()
teacher.introduce()


function introduce(city) {
    console.log(`Hi, I'm ${this.name} from ${city}`);
}

const student3 = {
    name: "SOP"
};

introduce.call(student3, "Bangalore");


//  Classes

// class Student {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// const s=new Student("Alex",14);
// s.greet()


// Inheritance


class Vehical{
   constructor(name) {
        this.name = name;
    }
  start(){
    console.log("Started");
  }
}

class Car extends Vehical {
    constructor(name, brand) {

        super(name);

        this.brand = brand;

    }
}

const c = new Car();

c.start()


// Static Methods


class MathUtils {
  static square(x){
    return x*x;
  }

}

console.log(MathUtils.square(4))


//  Getters and Setters 

class Student {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}

const s = new Student("SOP");
