// let array = [5, 1, 4, 8, 9];

// for (let i = 0; i < array.length - 1; i++) {
//   let minIndex = i;
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[j] < array[minIndex]) {
//       minIndex = j;
//     }
//   }
//   if (minIndex !== i) {
//     [array[i], array[minIndex]] = [array[minIndex], array[i]];
//   }
// }
// console.log(array);

const bubbleSort = () => {
  let array1 = [5, 8, 9, 10];
  for (let i = 0; i < array1.length - 1; i++) {
    for (let j = 0; j < array1.length - 1 - i; j++) {
      if (array1[j] > array1[j + 1]) {
        [array1[j], array1[j + 1]] = [array1[j + 1], array1[j]];
      }
    }
  }
  console.log(array1);
};
bubbleSort();

const selectionSort = () => {
  const array = [9, 8, 9, 4, 2, 1, 0];

  for (let i = 0; i < array.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  console.log(array);
};

selectionSort();

const insertionSort = () => {
  const array = [31, 9, 7, 8, 4, 0, 5];

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  console.log(array);
  
};

insertionSort()