/**
 * FONCTIONS
 *
 */

function sum(a, b) {
  return a + b;
}

const a = 3;
const b = 2;

console.log(sum(a, b));

// arrow function
const difference = (a, b) => {
  return a - b;
};
console.log(difference(a, b));

// in-line return
const multiply = (a, b) => a * b;
console.log(multiply(a, b));

// anonymous functions
const peoples = [
  {
    firstName: "Michael",
    lastName: "Scott",
    age: 55
  },
  {
    firstName: "Barack",
    lastName: "Obama",
    age: 58
  }
];

const newPeoples = peoples.map(function(guy) {
  if (guy.firstName === "Michael" && guy.lastName === "Scott") {
    guy.age = Infinity;
  }
  return guy;
});

console.log(newPeoples);
console.log(peoples);

const mortalPeoples = newPeoples.filter(({ age }) => age < Infinity);

console.log(mortalPeoples);

// reduce, lodash ...
