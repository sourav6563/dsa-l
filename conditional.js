// const answer = Number(
//   prompt("Please Enter Your Age that we van verify you are valid voter or not"),
// );
// //remeber in the case of Nan even verify using === its giev you false

const { Logger } = require("sass");

// if (isNaN(answer)) {
//   console.log("please add a valid input");
// } else if (answer >= 18) {
//   console.log("you are above 18 you are valid voter");
// } else {
//   console.log(
//     "you are not above 18 you are not a valid voter be in next time good luck",
//   );
// }

// const amount = Number(prompt("What is the final Amount?"));

// // console.log(amount);
// if (isNaN(amount) || amount <= 0) {
// console.log("Invalid input! Please enter a valid  amount.");
// } else {
// let discount = 0;
// if (amount <= 5000) {
//   discount = 0;
// } else if (amount <= 7000) {
//   discount = 10;
// } else if (amount <= 10000) {
//   discount = 15;
// } else if (amount <= 50000) {
//   discount = 25;
// } else {
//   discount = 40;
// }
//
// const discountTier = [
// {
// limit: 5000,
// discount: 0,
// },
// {
// limit: 7000,
// discount: 10,
// },
// {
// limit: 10000,
// discount: 15,
// },
// {
// limit: 50000,
// discount: 25,
// },
// ];
//
// // let discount = 0;
//   for (const tier of discountTier) {
//     if (amount <= tier.limit) {
//       discount = tier.discount;
//       break;
//     }
//   }
// const find = discountTier.find((f) => amount <= f.limit);
// console.log(find);
// discount = find ? find.discount : 0;
//
// console.log(
// `Your Final amount is ${(amount - (amount * discount) / 100).toFixed(2)} `,
// );
// }

//question 2

// let unit = Number(prompt("Enter your  Electricity Unit"));

// if (isNaN(unit)) {
//   console.log("please Enter a valid Input");
// } else {
//   let amount = 0;
//   if (unit > 400) {
//     amount = (unit - 400) * 13;
//     unit = 400;
//   }
//   if (unit > 200 && unit <= 400) {
//     amount += (unit - 200) * 7;
//     unit = 200;
//   }
//   if (unit > 100 && unit <= 200) {
//     amount += (unit - 100) * 5;
//     unit = 100;
//   }

//   amount += unit * 2;
//   console.log(amount);
// }

// let salary = Number(prompt("please Enter Your Annual Salary"));

// if (isNaN(salary)) {
//   console.log("please Enter a valid Input");
// } else {
//   let tax = 0;
//   if (salary > 1200000) {
//     tax = (salary - 1200000) * 0.3;
//     salary = 1200000;
//   }
//   if (salary > 1000000 && salary <= 1200000) {
//     tax += (salary - 1000000) * 0.2;
//     salary = 1000000;
//   }
//   if (salary > 700000 && salary <= 1000000) {
//     tax += (salary - 700000) * 0.15;
//     salary = 700000;
//   }
//   if (salary > 500000 && salary <= 700000) {
//     tax += (salary - 500000) * 0.1;
//     salary = 500000;
//   }

//   // The remaining salary (0 to 10,000) is taxed at 0%
//   // tax += salary * 0; (which is just 0, so we don't need to add anything)

//   console.log("Your total  annual tax is:", tax);
// }

// let amount = Number(prompt("Enter the Deposit Amount"));

// if (isNaN(amount) || amount <= 0 || amount % 100 !== 0) {
//   console.log("please Add Amount on Multiple Of 500,200,100 only");
// } else {
//   if (amount >= 500) {
//     console.log(` 500 Notes:- ${Math.floor(amount / 500)}`);
//     amount = amount % 500;
//   }
//   if (amount >= 200) {
//     console.log(` 200 Notes:- ${Math.floor(amount / 200)}`);
//     amount = amount % 200;
//   }
//   if (amount >= 100) {
//     console.log(` 100 Notes:- ${Math.floor(amount / 100)}`);
//     amount = amount % 100;
//   }
// }

//Ternary operator..

15 > 16 ? console.log(`right answer`) : console.log(`wrong answer`);

let month = "january";

switch (month) {
  case "january":
    console.log(`hey its january`);

    break;
  case "february":
    console.log(`hey its february`);

  default:
    break;
}
