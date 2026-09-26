let array = [1, 0, 0, 5, 8];
let j = 0; // pointer to place the next non-zero element

for (let i = 0; i < array.length; i++) {
  if (array[i] !== 0) {
    [array[i], array[j]] = [array[j], array[i]];
    j++;
  }
}
console.log(array);
