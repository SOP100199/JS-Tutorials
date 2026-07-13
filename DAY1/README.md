Day 1 – JavaScript Foundations (The "Why")
Learn
Execution Context
Call Stack
Memory Heap
Scope
Lexical Environment
Hoisting
Temporal Dead Zone (TDZ)
Closures
Practice

Write functions that use closures.

Example ideas:

Counter
Private variables
Banking balance
Challenge

Explain why this works without looking it up:

function outer() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}