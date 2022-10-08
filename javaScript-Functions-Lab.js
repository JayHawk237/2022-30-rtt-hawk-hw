// (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
//------------------------------------------------------------------------
// function maxOfTwoNumbers(x,y) {
//     if (x < y) {
//       return y;
//     } else if (x > y) {
//       return x;
//     }
//   }

//-------------------------------------------------------------------------

//Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

//---------------------------------------------------------------------------

// function maxOfThree(r, b, g) {
//     if (r > b && r > g) {
//       return r;
//     }
  
//     else if (b > r && b > g) {
//       return b;
//     }
  
//     else if (g > r && g > b) {
//       return g;
//     }
//   }
//   console.log(maxOfThree())

//----------------------------------------------------------------------------------------------------------------------------------------

//Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

// let vowels = "aeiou"

//     function isCharAVowel(char) {
//         for (let i = 0; i < vowels.length; i++){
//             if (char.toLowerCase() === vowels[i]){
//                 return true
//             }
//         }
//         return false
//     }
//     console.log(isCharAVowel())

//---------------------------------------------------------

//Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
//   console.log(sumArray())

//---------------------------------------------------------

//Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// function multiplyArray(nums) {
//     let product = 1;

//     nums.forEach(function(num) {
//         product *= num;
//     });

//     return product;
// }
// console.log(multiplyArray());

//---------------------------------------------------------

//Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

// let numberOfArguments = function(){
//     return args.length
//   }

//---------------------------------------------------------

//Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// function reverseString(str) {
//     let reversed = "";
//     let count = -1;
    
//     for(let k = 0; k < str.length; k++) {
//         reversed = reversed + str.substr(count, 1)
//         count--;
//     }
//     return reversed;
// }
// console.log(reverseString(""));

//---------------------------------------------------------

//Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

// const longestStringInArray = function(args) {
//     let longest = 0;

//     args.forEach((str) => {
//         if (str.length > longest)
//         {
//             longest = str.length;
//         }
//     });

//     return longest;
// }

//---------------------------------------------------------


//Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. 

// function stringsLongerThan(num, ...args) {
//     const keptStrings = [];

//     args.forEach((function(str) {
//         if(str.length > num) {
//             keptStrings.push(str);
//         }
//     }));
//     return keptStrings;
// }