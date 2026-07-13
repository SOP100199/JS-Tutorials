Day 5 – Asynchronous JavaScript

One of the most important topics.

Learn
Event Loop
Callback Queue
Microtask Queue
Promise Queue
Macrotasks
fetch()
XMLHttpRequest (know what it is)
Promises
async/await

Predict outputs before running them.

Example

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

console.log(4);

Explain every line.