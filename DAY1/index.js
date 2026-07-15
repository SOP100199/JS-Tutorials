function createCounter() {
  let i = 0;
  function increment() {
    ++i;
    return i;
  }
  function decrement() {
    --i;
    return i;
  }
  function reset() {
    i = 0;
    return i;
  }
  function value() {
    return i;
  }

  return { increment, decrement, reset, value };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.decrement());
console.log(counter.increment()); // 3

console.log(counter.decrement()); // 2

console.log(counter.reset()); // 0

console.log(counter.value()); // 0
