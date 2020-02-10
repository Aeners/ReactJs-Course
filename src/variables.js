/**
 * DÉCLARATION DE VARIABLES
 *
 */
let str = "LA meilleure chaîne de caractère";
// const str = 'LA meilleure chaîne de caractère,       et pour toujours !'

console.log(str);
str = "bah enfaite non...";

console.log(str);

let unintialized;

console.log(unintialized);

// DESTRUCTURING

const nestObj = {
  carnet: {
    batiment: {
      bati_id: 123,
      old_carnet: {
        surface: 42
      }
    }
  }
};

const batiSurface = nestObj.carnet.batiment.old_carnet.surface;

const {
  carnet: {
    batiment: {
      old_carnet: { surface: niceVarName }
    }
  }
} = nestObj;

console.log(batiSurface);
// console.log(surface);
console.log(niceVarName);

// DYNAMIC KEY ACCESSOR

const formValues = {
  firstName: "Arnaud"
};

const inputName = "firstName";

console.log(formValues[inputName]);
