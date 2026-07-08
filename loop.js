const honey = ["hunny", "sunny", "bunny"];

for (let i = 0; i < honey.length; i++) {
  const element = honey[i];
  console.log(element);
  //   console.log(i);
}

// const n = Number(prompt("please add the value"));

// if (isNaN(n) || n <= 0) {
//   console.log(`hey Please Add Valid Number`);
// } else {
//   let factorial = 1;
//   for (let i = 1; i <= n; i++) {
//     factorial *= i;
//   }
//   factorial = Math.floor(factorial)
//   console.log(factorial);
// }

// const n = Number(prompt("please add the value"));

// if (isNaN(n) || n <= 0) {
//   console.log(`hey Please Add Valid Number`);
// } else {
//   for (let i = 1; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) console.log(i);
//   }
//   console.log(n);
// }

const printPrimeNumber = (n) => {
  for (let i = 2; i <= n; i++) {
    let primenumber = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        primenumber = false;
        break;
      }
    }
    if (primenumber) {
      console.log(i);
    }
  }
};

// printPrimeNumber(7);

const PrimeNumber = (n) => {
  if (n < 2) return false;
  let primenumber = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      primenumber = false;
      break;
    }
  }
  if (primenumber) {
    return true;
  }
  return false;
};

// console.log(PrimeNumber(55)); // Logs: false
// console.log(PrimeNumber(1)); // Logs: true

const factorNumber = (n) => {
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
  console.log(n);
};

// factorNumber(10)

const number = 5;
console.log(234 / 10);

// let digit = 525204;
// let reverse = 0;

// while (digit > 0) {
//   let lastdigit = digit % 10;
//   reverse = reverse * 10 + lastdigit;

//   digit = Math.floor(digit / 10);;
// }
// console.log(reverse);

// first get last number by mod
// than add in in reverse number add reverse*10
// let digit = 5525;
// let sum = 0;
// while (digit > 0) {
//   let lastdigit = digit % 10;
//   sum += lastdigit;

//   digit = Math.floor(digit / 10);
// }
// console.log(sum);

//hey listen find strong number

const getFactorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
};

// console.log(getFactorial(5));

const getStrongNumber = (n) => {
  let sum = 0;
  let num = n;
  while (n > 0) {
    let rem = n % 10;
    sum = sum + getFactorial(rem);
    n = Math.floor(n / 10);
  }
  return sum === num;
};

// console.log(getStrongNumber(145));

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     console.log(`hey we got five`);
//     break;
//   }
//   console.log(i);
// }

const getFactors = (n) => {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
};

// getFactors(12);

// let data;
// do {
//   data = prompt("hello");
//   console.log(data);
// } while (data !== "exit");

//
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

let guess = 0;
while (guess !== randomNumber) {
  const guessInput = prompt("hey please give the guess Number");
  
  // Safe exit if user cancels, presses Escape, or if prompt is blocked/disabled by the browser
  if (guessInput === null || guessInput === undefined) {
    console.log("Game cancelled or prompts blocked by browser.");
    break;
  }
  
  // Handle empty input or spaces
  if (guessInput.trim() === "") {
    console.log("Please enter a valid number.");
    continue;
  }

  guess = Number(guessInput);
  if (isNaN(guess) || guess < 1) {
    console.log("hey please a valid number");
  } else if (guess > randomNumber) {
    console.log("hey number is too High");
  } else if (guess < randomNumber) {
    console.log(`hey number is too low`);
  } else {
    console.log(`congratulation number matched ${guess}`);
  }
}
