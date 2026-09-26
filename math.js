let a = 32;
let b = 20;

while (a != b) {
  if (a > b) a = a - b;
  else b = b - a;
}
console.log(a);

const gdc = (a, b) => {
  if (a == b) return a;

  if (a > b) {
    return gdc(a - b, b);
  } else {
    return gdc(a, b - a);
  }
};

console.log(gdc(32, 20));

const gdc2 = (a, b) => {
  if (b === 0) return a;
  return gdc2(b, a % b);
};
console.log(gdc2(32, 20));

let n = 30;
for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {

  
}
