/**
 * MUTATIONS
 *
 */

const object = {
  randomProperty: 420
};

// object = 'a';

object.a = "a";

console.log(object);

const newObject = object;

newObject.b = "b";

console.log(newObject);

console.log(object);

const anotherNewObject = { ...object };
anotherNewObject.c = "c";
console.log(anotherNewObject);
console.log(object);

// Même chose pour les arrays

const arr = [];
const newArr = arr;
arr.push("1");

console.log(newArr);

const anotherNewArr = [...arr];
arr.push("2");
console.log(anotherNewArr);
