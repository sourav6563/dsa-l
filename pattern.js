//
// process.stdout.write('world')

let prompt = require("prompt-sync")();
let n = Number(prompt("give the input "));

// for (let i = 1; i <= n; i++) {
//   let asc = 65
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(asc) + " ");
//     asc++;
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("_" + " ");
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     process.stdout.write("*" + " ");
//   }
//   console.log();
// }

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j === i || i + j === n + 1) {
      process.stdout.write("*" + " ");
    } else {
      process.stdout.write(" " + " ");
    }
  }

  console.log();
}
