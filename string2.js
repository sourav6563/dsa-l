const honey = "malayalamaa";

// for (let i = 0; i < honey.length; i++) {
//   const element = honey[i];
//   console.log(element);
// }

// for (let i = 0; i < honey.length; i++) {
//   const element = honey.charAt(i);
//   console.log(element);
// }
const honeyArray = honey.split("");
for (let i = 0; i < honeyArray.length; i++) {
  let k = honeyArray.length - 1;
  let temp = honeyArray[i];
  honeyArray[i] = honeyArray[k];
  honeyArray[k] = temp;
  k--;
}
const reverseArray = honeyArray.join("");
console.log(reverseArray);

const reverseArray2 = honey.split("").reverse().join("");
console.log(reverseArray2);

let sunny = "sunny leone";
let modifiedsunny = "";

for (let i = 0; i < sunny.length; i++) {
  let ch = sunny.charCodeAt(i);
  if (ch >= 65 && ch < 90) {
    modifiedsunny = String.fromCharCode(ch + 32);
  }
  if (ch >= 97 && ch < 122) {
    modifiedsunny += String.fromCharCode(ch - 32);
  }
}
console.log(modifiedsunny);

let bunny = "hhhhvvvgg";
let buns = {};

for (let i = 0; i < bunny.length; i++) {
  buns[bunny[i]] = (buns[bunny[i]]|| 0) + 1;
}
console.log(buns);
