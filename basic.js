// // Even or Odd
// function checkEvenOrOdd(num) {
//     if (num % 2 === 0) {
//         console.log(num + " is even.")
//     } else {
//         console.log(num + " is odd.")
//     }
// }
// checkEvenOrOdd(5)
// checkEvenOrOdd(6)

// //Equal or Not
// function compareStrings(str1, str2) {
//     if (str1 === str2) {
//         console.log("the strings are equal")
//     } else {
//         console.log("the strings are not equal")
//     }
// }
// compareStrings("ahmed", "mohamed")
// compareStrings("عبدالله", "عبدالله")

// //Arithmetic operators
// let sum = 5 + 5
// let difference = 5 - 3
// let product = 5 * 5
// let division = 8 / 2
// let remainder = 5 % 2
// console.log("Arithmetic results:", sum, difference, product, division, remainder)

// //Comparison operators
// console.log('5' == 5)
// console.log('5' === 5)
// console.log(5 > 7)

// //Logical operators
// console.log(true && false)
// console.log(true || false)
// console.log(!false)

// // let : block scopeded
// let y = 15
// y = 20
// // let y = 25 // not allowed
// console.log(y)

// // var : function scoped
// var x = 10
// var x = 20
// console.log(x)

// //const : block scoped
// const z = 10
// // z = 20 // not allowed
// console.log(z)

// // type coercion
// console.log( 1 + '3') // 1 turned to string
// console.log( 1 * '3') // 3 turned to number
// console.log(false + 2 ) // false = 0

//------------------------------------------------------------//
// Function Declaration
function greetDeclaration(name) {
  return `Hello, ${name} from a declaration!`;
}
console.log(greetDeclaration("Abdalla"));

// Function Expression
const greetExpression = function (name) {
  return `Hello, ${name} from an expression!`;
};
console.log(greetExpression("Hassan"));

// Arrow Function
const greetArrow = (name) => `Hello, ${name} from an arrow function!`;
console.log(greetArrow("Moahmed"));

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([10, 20, 30, 5, 15]));

function multiply(a, b) {
  return a * b;
}

const multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(4, 5));