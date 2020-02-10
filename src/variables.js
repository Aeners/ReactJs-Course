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
        surface: 42,
        hauteur: 5
      }
    }
  }
};

const batiSurface = nestObj.carnet.batiment.old_carnet.surface;

const {
  carnet: {
    batiment: { old_carnet }
  }
} = nestObj;

console.log(batiSurface);
// console.log(surface);

// DYNAMIC KEY ACCESSOR

const formValues = {
  firstName: "Arnaud"
};

// function handleChange(name, value) {
//   formValues[name] = value;
// }

// <input name="firstName" value={formValues.firstName} onChange={handleChange} />;

const inputName = "firstName";

console.log(formValues[inputName]);

// STRING LITERALS

// const inputClass = "input-" + formValues.firstName + "-blue";

const inputClass = `input-${formValues.firstName}-blue`;

console.log(inputClass);
