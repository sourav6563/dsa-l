/* ==============================================================================
   🔥 TOP 10 MUST-KNOW JAVASCRIPT STRING METHODS & PROPERTIES
   (The core methods used 95%+ of the time in Web Dev & DSA)
   ============================================================================== */

const text = "JavaScript is Amazing";


// 1. .length -> Find total number of characters
console.log("1. LENGTH:");
console.log(text.length); // 👉 21


// 2. Getting Characters -> Use [index] or .at(-1) for negative index
console.log("\n2. GETTING CHARACTERS:");
console.log(text[0]);     // 👉 'J' (First letter)
console.log(text.at(-1)); // 👉 'g' (Last letter)


// 3. .includes("word") -> Check if text contains a substring (returns true/false)
console.log("\n3. INCLUDES:");
console.log(text.includes("Amazing")); // 👉 true
console.log(text.includes("Python"));  // 👉 false


// 4. .indexOf("word") -> Find the starting position of a word (-1 if not found)
console.log("\n4. INDEXOF:");
console.log(text.indexOf("is"));     // 👉 11
console.log(text.indexOf("Python")); // 👉 -1


// 5. .slice(start, end) -> Cut/extract a part of the text
console.log("\n5. SLICE:");
console.log(text.slice(0, 10)); // 👉 "JavaScript"
console.log(text.slice(14));    // 👉 "Amazing"


// 6. .toLowerCase() & .toUpperCase() -> Change case
console.log("\n6. CASE CONVERSION:");
console.log(text.toLowerCase()); // 👉 "javascript is amazing"
console.log(text.toUpperCase()); // 👉 "JAVASCRIPT IS AMAZING"


// 7. .trim() -> Remove extra space from start and end
console.log("\n7. TRIM:");
const spaces = "   hello world   ";
console.log(`'${spaces.trim()}'`); // 👉 'hello world'


// 8. .replace() & .replaceAll() -> Change words inside text
console.log("\n8. REPLACE:");
const str = "cat and cat";
console.log(str.replace("cat", "dog"));    // 👉 "dog and cat" (replaces first)
console.log(str.replaceAll("cat", "dog")); // 👉 "dog and dog" (replaces all)


// 9. .split("delimiter") -> Convert string into an Array (MOST IMPORTANT FOR DSA)
console.log("\n9. SPLIT:");
const fruits = "apple,banana,orange";
console.log(fruits.split(",")); // 👉 [ 'apple', 'banana', 'orange' ]
console.log("Hi".split(""));    // 👉 [ 'H', 'i' ]


// 10. Template Literals -> Join variables into text cleanly using backticks ``
console.log("\n10. JOINING STRINGS:");
const name = "Alex";
const score = 100;
console.log(`${name} scored ${score} points!`); // 👉 "Alex scored 100 points!"


/* ==============================================================================
   ⚡ QUICK CHEAT SHEET (MEMORIZE THESE 10):
   ------------------------------------------------------------------------------
   1. length          -> Find length
   2. str[0] / at(-1) -> Get first / last char
   3. includes()      -> Check if exists
   4. indexOf()       -> Find position
   5. slice()         -> Cut substring
   6. toLowerCase()   -> Small letters
   7. trim()          -> Clean spaces
   8. replaceAll()    -> Replace text
   9. split()         -> String to Array
  10. `${var}`        -> Join string
   ============================================================================== */
