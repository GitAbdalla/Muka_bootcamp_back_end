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
// // Function Declaration
// function greetDeclaration(name) {
//   return `Hello, ${name} from a declaration!`;
// }
// console.log(greetDeclaration("Abdalla"));

// // Function Expression
// const greetExpression = function (name) {
//   return `Hello, ${name} from an expression!`;
// };
// console.log(greetExpression("Hassan"));

// // Arrow Function
// const greetArrow = (name) => `Hello, ${name} from an arrow function!`;
// console.log(greetArrow("Moahmed"));

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([10, 20, 30, 5, 15]));

// function multiply(a, b) {
//   return a * b;
// }

// const multiplyArrow = (a, b) => a * b;

// console.log(multiplyArrow(4, 5));

// // Control flow
// function checkAge(age) {
//   if (age >= 18) {
//     console.log("You are eligible ");
//   } else {
//     console.log("You are not eligible ");
//   }
// }

// checkAge(20);

// function getDayOfWeek(dayNumber) {
//   switch (dayNumber) {
//     case 1:
//       console.log("Saturday");
//       break;
//     case 2:
//       console.log("Sunday");
//       break;
//     case 3:
//       console.log("Monday");
//       break;
//     case 4:
//       console.log("Tuesday");
//       break;
//     case 5:
//       console.log("wednesday");
//       break;
//     case 6:
//       console.log("Thursday");
//       break;
//     case 7:
//       console.log("Friday");
//       break;
//     default:
//       console.log("Invalid day");
//   }
// }

// getDayOfWeek(0);

// const names = ["Ichraf", "Youssef", "Ziad", "Ahmed", "Ibrahim"]; // this is the names of mentors i know

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let cnt = 1;
// while (cnt <= 10) {
//   console.log(cnt);
//   cnt++;
// }

// function even (start , end){
//     let arr = []

//     for(let i = start; i<= end; i++){
//         if(i % 2 === 0){
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }
// even(0 , 20)

// Arrays

const mentors = ["Ichraf", "Youssef", "Ziad", "Ahmed", "Ibrahim"];
console.log(mentors);

function addMentor(arr, mentor) {
  arr.push(mentor);
  console.log(arr);
}
addMentor(mentors, "Abdalla");

function removeMentor(arr) {
  arr.pop();
  console.log(arr);
}
removeMentor(mentors);

mentors.forEach((mentor, index) => {
  console.log(`${index} : ${mentor}`);
});

function getEven() {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const evenNumbers = array.filter((num) => num % 2 === 0);
  return evenNumbers;
}

console.log(getEven());

const numbers = [
  4, 60, 98, 88, 85, 58, 98, 10, 44, 21, 77, 38, 8, 35, 3, 39, 23, 80, 23, 80,
];

numbers.sort((a, b) => a - b);

console.log(numbers);

// Objects

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  yearPublished: 1925,
};

function viewBook(book) {
  for (let property in book) {
    console.log(`${property} : ${book[property]}`);
  }
}
viewBook(book);

book.getDescription = function () {
  return `${this.title} by ${this.author} wasPublished in ${this.yearPublished}`;
};
console.log(book.getDescription());

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
  },
];

console.log(books);

function findByTitle(books, title) {
  const foundBook = books.find((book) => book.title === title);

  if (foundBook) {
    return foundBook;
  } else {
    console.log("Not founded");
  }
}

console.log(findByTitle(books, "1984"));

console.log(findByTitle(books, "The Great Gatsby"));
