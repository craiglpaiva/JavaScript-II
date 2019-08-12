// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function sayHi(greeting) {
  const yourGreeting = greeting;
  const name = 'Paul';
  console.log(`${yourGreeting}. How are you?`);

  function answer() {
    const anotherAnswer = "I'm great, thank you.";
    console.log(`${yourGreeting} ${name} ${anotherAnswer}`);
  }

  answer();
}

console.log(sayHi('Hi'));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
let count = 0;
return () => ++count;
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => (++counter),
    decrement: () => (--counter),
  }
};

const newCounter2 = counterFactory();
console.log(newCounter2.increment);
console.log(newCounter2.decrement);