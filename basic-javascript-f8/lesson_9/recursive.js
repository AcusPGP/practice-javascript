// Remove the duplicated elements in the array
const originalArray = [1, 2, 2, 3, 4, 4, 5]; // Length = 7

// Solution 1:
console.log("----Solution 1----\n");
const uniqueArray1 = removeDuplicates1(originalArray);
function removeDuplicates1(arr) {
     return arr.filter((value, index, self) => {
       return self.indexOf(value) === index;
     });
}
   
console.log(uniqueArray1); // Output: [1, 2, 3, 4, 5]

// Recursive sample
console.log("----Recursive sample----\n");
let countDownNum = 5;

function countDownFunc(number) {
     if (number >= 0) {
          console.log(number);
          return countDownFunc(--number);
     }
}
countDownFunc(countDownNum);

// Solution 2:
console.log("----Solution 2----\n");
function removeDuplicates2(arr, index = 0) {
     if (index === arr.length - 1) {
          return [arr[index]];
     }
   
     const restOfArray = removeDuplicates2(arr, index + 1);
     
     // console.log(restOfArray);

     if (restOfArray.includes(arr[index])) {
          return restOfArray;
     } else {
          return [arr[index], ...restOfArray]; // Spread operator
     }
}
const uniqueArray2 = removeDuplicates2(originalArray);
console.log(uniqueArray2); // Output: [1, 2, 3, 4, 5]
   
