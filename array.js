const arr = [];

arr.push(5, 6, 7, {
  honey: "sunny",
});
// arr.pop();

// console.log(arr);

// console.log(arr[1]);
// arr[3] = {
//   sunny: "honey",
// };
// console.log(arr);

// const arrv = new Array(3);
// arrv.push("honey");
// console.log(arrv);

// import PromptSync from "prompt-sync";
// let prompt = PromptSync();
// const arr3 = new Array(5);
// let sum = 0;

// for (let i = 0; i < arr3.length; i++) {
//   let input = Number(prompt("give value for array= "));
//   arr3[i] = input;
//   sum += arr3[i];
// }
// console.log(arr3);
// console.log(sum);

// const arr4 = new Array(5);
// arr4[0] = Number(prompt("give value for array= "));
// arr4[1] = Number(prompt("give value for array= "));
// let firstMax = Math.max(arr4[0], arr4[1]);
// let secondMax = Math.min(arr4[0], arr4[1]);

// for (let i = 2; i < arr4.length; i++) {
//   let input = Number(prompt("give value for array= "));
//   arr4[i] = input;
//   if (arr4[i] > firstMax) {
//     firstMax = arr4[i];
//   }
//   if (arr4[i] < secondMax && arr4[i] !== firstMax) {
//     secondMax = arr4[i];
//   }
// }
// console.log(firstMax);
// console.log(secondMax);

const bunny = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const temp = [];
const reverse = [...bunny].reverse();
console.log(bunny);
console.log(reverse);

for (let i = bunny.length - 1; i >= 0; i--) {
  temp.push(bunny[i]);
}

console.log(temp);

const reverse2 = bunny.reduce((acc, crr) => [crr, ...acc], []);
console.log(reverse2);

const hungama = [50, 12, 18, 17, 20, 25, 30];

let left = 0;
let right = hungama.length - 1;

while (left < right) {
  let temp = hungama[left];
  // hungama[left] = hungama[right];
  // hungama[right] = temp;
  [hungama[left], hungama[right]] = [hungama[right], hungama[left]];
  left++;
  right--;
}
console.log(hungama);

const funny = [1, 0, 0, 1, 1, 0, 1];
let i = 0;
let j = 0;
while (i < funny.length) {
  if (funny[i] == 0) {
    [funny[i], funny[j]] = [funny[j], funny[i]];
    j++;
  }
  i++;
}
console.log(funny);

const fucking = [3, 6, 5, 4, 7, 8];
let copy = fucking[0];

for (let i = 0; i < fucking.length - 1; i++) {
  fucking[i] = fucking[i + 1];
}
fucking[fucking.length - 1] = copy;
console.log(fucking);

const sucking = [3, 6, 5, 4, 7, 8];
let copycopy2 = sucking[sucking.length - 1];

for (let i = sucking.length - 1; i > 0; i--) {
  sucking[i] = sucking[i - 1];
}
sucking[0] = copycopy2;
console.log(sucking);

const vaki = [1, 2, 3, 4, 5];
const tempo = new Array(vaki.length);
let k = 1 % vaki.length;

for (let i = 0; i < vaki.length; i++) {
  tempo[i] = vaki[(i + k) % vaki.length];
}
console.log(tempo);

const arrr = [1, 2, 3, 4, 5];
let km = 2 % arrr.length;
reverseArray(0, km - 1);

function reverseArray(start, end) {
  while (start < end) {
    let temp = arrr[start];
    arrr[start] = arrr[end];
    arrr[end] = temp;
    start++;
    end--;
  }
}
console.log(arrr);
let arrb = [11, 22, 11, 22, 33];

var removeDuplicates = function (nums) {
  if (nums.length === 0) return [];

  // 1. Sort the array first because this algorithm relies on duplicates being adjacent
  nums.sort((a, b) => a - b);

  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }

  // 2. Slice the array up to index j to return only the unique elements
  return nums.slice(0, j);
};
console.log(removeDuplicates(arrb));

// LeetCode 88: Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1; // Pointer for nums1
  let p2 = n - 1; // Pointer for nums2
  let p = m + n - 1; // Pointer for placement in nums1

  // Compare elements from the end of both arrays and place the larger one at the end of nums1
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // If there are remaining elements in nums2, copy them over
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log("Merged Array:", nums1);
