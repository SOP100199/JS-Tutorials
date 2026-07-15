/*
2 Phases - Creation and Execution Phase 
*/

// sayHello();

// function sayHello() {
//   console.log("HELLO");
// };

// Temporal Dead Zone
//  Prevents accidental use of the variables before they are declared

{
  console.log(a);

  var a = 10;
}
{
    console.log(name);

    const name = "SOP";
}