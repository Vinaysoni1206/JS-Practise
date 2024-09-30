//Ques 1. Factorial of n
// function factorial(n){
//     if(n==0){
//         return 1;
//     }else{
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(4))

//Ques 2. Create an array with range of numbers
//Input: start=1, end=5 ========>>>>> Output:
// function rangeOfNumbers(start, end) {
//   if (start === end + 1) {
//     return [];
//   } else {
//     let num = rangeOfNumbers(start, end-1);
//     num.push(end);
//     return num;
//   }
// }
// console.log("Range of Numbers : ", rangeOfNumbers(1, 5));

//Ques 3. Fibonacci Number
//Fibonacci series => 0,1,1,2,3,5,8,13,21,34,55,....
// function fb(num){
//     if(num<=1){
//         return num;
//     }else{
//         return fb(num-1)+fb(num-2);
//     };
// }
// console.log('FB Series :', fb(11));

//Ques 4. Reverse a string
// function reverseString(str){
//     if(str==""){
//         return "";
//     }else{
//         return reverseString(str.substr(1))+ str.charAt(0);
//     }
// };
// console.log("Reversed String :", reverseString("hello world") )

//Ques 5. Subsets (Backtracking algorithm using recursion)
//Given an integer array nums of unique elements, return all possible subsets(the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

//logic :  starting from one element an array either contain en element or either not
// [] => [1],[] => ([1,2],[1]),([2],[])  => ([1,2,3],[1,2]  && [1,3],[1]) , ([2,3],[2] && [3],[]);


//Ques 6. Palindrome Number
//An integer is a palindrome when it reads the same forward and backword
//Input: x = 121 =====>>>>>> true;
//Input: y = 10  =====>>>>>> fale;


// const obj = {
//   a: 10,
//   b: {
//     c: 23,
//     d: {
//       e: 30,
//       f: [
//         {
//           g: 10,
//         },
//         {
//           h: 5,
//           i: {
//             j: 2,
//           },
//         },
//         {
//           k: 50,
//         },
//       ],
//     },
//   },
//   l: "text",
// };

// function getCount(obj){
//     let count=0;
//     for(i in obj){
//         if(typeof obj[i]=="number"){
//             count+=obj[i]
//         }else if(typeof obj[i]=="object" || Array.isArray(obj[i])){
//             count+= getCount(obj[i])
//         }
//     }
//     return count;
// }

// console.log(getCount(obj));


// const obj1 = {
//   a: 1,
//   b: null,
//   c: {
//     d: 2,
//     e: null,
//     f: {
//       g: 3,
//     },
//   },
// };

// function removeNull(obj){
//     let a=obj;
//     for(i in a){
//         if(a[i]==null){
//             delete a[i];
//         }else{
//             if(typeof(a[i])=="object"){
//                 removeNull(a[i]);
//             }
//         }
//     }
//     return a;
// }
// console.log("Remove Null : ", removeNull(obj1))

// function findLargestNumber(obj, value = 0) {
//   let num = value;
//   for (i in obj) {
//     if (typeof obj[i] == "number") {
//       if (obj[i] > num) num = obj[i];
//     } else {
//       if (typeof obj[i] == "object" && !Array.isArray(obj[i])) {
//         num = findLargestNumber(obj[i], num);
//       } else if (Array.isArray(obj[i])) {
//         let a=obj[i];
//         for (j in a) {
//           num = findLargestNumber(a[j], num);
//         }
//       }
//     }
//   }
//   return num;
// }
// console.log("Largest number :", findLargestNumber(obj));

// function numValueCalculator(obj, count = 0) {
//   let a = count;
//   for (i in obj) {
//     if (typeof obj[i] == "number") {
//       a += obj[i];
//     } else {
//       if (typeof obj[i] == "object") {
//         a = numValueCalculator(obj[i], a);
//       } else if (Array.isArray(obj[i])) {
//         for (j in obj[i]) {
//           a = numValueCalculator(obj[i][j], a);
//         }
//       }
//     }
//   }
//   return a;
// }
// console.log(numValueCalculator(obj));

// function countTotalProperties(obj, count = 0) {
//   let c = count;
//   for (i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       c += 1;
//       if (
//         typeof obj[i] == "object" &&
//         !Array.isArray(obj[i]) &&
//         obj[i] != null
//       ) {
//         c = countTotalProperties(obj[i], c);
//       } else if (Array.isArray(obj[i])) {
//         console.log("zzz", obj[i].length)
//         for (let j = 0; j < obj[i].length; j++) {
//           if (typeof obj[i][j] == "object" && obj[i][j] != null) {
//             c = countTotalProperties(obj[i][j], c);
//           } else {
//             c += 1;
//           }
//         }
//       }
//     }
//   }
//   return c;
// }
// console.log(countTotalProperties(obj));

// function findValueByKey(obj, key) {
//   let value;
//   for (i in obj) {
//     if ( i == key) {
//       value = obj[i];
//       return value;
//     } else {
//       if (typeof obj[i] == "object") {
//         value = findValueByKey(obj[i], key);
//       } else if (Array.isArray(obj[i])) {
//         for (j in obj[i]) {
//           value = findValueByKey(obj[i][j], key);
//         }
//       }else{
//         continue;
//       }
//     }
//   }
//   return value;
// }

// console.log(findValueByKey(obj, "h"));

