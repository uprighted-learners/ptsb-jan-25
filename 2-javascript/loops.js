/* 
    ? Loops
    executes a block of code repeatedly
    keeps going until an exit condition is met
        exit conditions are something explicit and sometimes implicit
    JS has many many ways to write a loop
    "for loop" is for when the number of iterations is pre-defined
    "while loop" is for when the number of iterations is unknown at the start
*/

// ? while loop
// while (condition) {code block}

let count = 0
while (count < 10) {
  console.log(count)
  count++
  //   count += 1
  //   count = count + 1
}

let num = 0
while (num < 0.9) {
  num = Math.random()
  console.log(Number(num.toFixed(5)))
}

// don't do this!
// while (true) {
//     console.log(":)");
// }

console.log("other stuff happens after the loop finishes")

// ? for loop

// classic for loop
for (let index = 0; index < 10; index++) {
  // console.log(index)
}

for (let i = 10; i >= -27; i -= 3) {
  // console.log(i)
}

for (let i = 2; i <= 100000; i) {
  // console.log(i)
  i = i ** 2
}

//            012345678
const word = "iteration"
// const word =
//   "a string can be any length, and the loop will cover every character"

for (let index = 0; index < word.length; index++) {
  // console.log(index, word[index])
}

// ? for...of loop
// for (elementVariable of iterable) { code block }
// element refers to a single value in an iterable
// elementVariable is a new variable, implicitly declared in the for...of definition
// iterable has to be something that already exists and is an iterable type

for (letter of word) {
  // console.log(word, letter)
}

const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

for (day of daysOfWeek) {
  if (day === "Wed") {
    console.log("Wednesday")
  } else if (day === "Sat") {
    console.log("Saturday")
  } else {
    console.log(day + "day")
  }
}

// ! Nesting loops
// each inner loop must complete all of its iterations before the outer loops can continue
// inner loops will always run more times than outer loops!

const letters = "ABC"
const numbers = "123"
const lowerCase = "abc"

for (letter of letters) {
  console.log(letter)
  for (char of numbers) {
    console.log(char)
    for (l of lowerCase) {
      console.log(l)
    }
  }
}

// ! Combining loops and conditionals

const vowels = "aeiou"

for (letter of word) {
  // if (vowels.includes(letter)) {
  //   console.log(letter)
  // }
  for (vowel of vowels) {
    if (letter == vowel) {
      // console.log(letter)
    }
  }
}

// a clock!

// pseudocode
// for twelve times
//    log hour o clock
//    for 15/30/45
//        log hour:15, hour:30, hour:45
//        increment the minutes by 15
//    increment the hour

for (let i = 1; i <= 12; i++) {
  console.log(i + " o'clock")
  for (let j = 15; j < 60; j += 15) {
    console.log(i + ":" + j)
  }
}

const firstName = "Danny"

// this loop creates a new string
// constructed by randomly capitalizing each letter of the old string

// let spongeBobName = ""
// for (letter of firstName) {
//   if (Math.random() > 0.5) {
//     spongeBobName += letter.toUpperCase()
//   } else {
//     spongeBobName += letter.toLowerCase()
//   }
// }
// console.log(spongeBobName)

const learners = ["Niki", "Rosie", "Nick", "Rob", "Kaleb", "Amos"]

// this does the same thing, once for each student in the array
for (learner of learners) {
  let spongeBobName = ""
  for (letter of learner) {
    if (Math.random() > 0.5) {
      spongeBobName += letter.toUpperCase()
    } else {
      spongeBobName += letter.toLowerCase()
    }
  }
  console.log(spongeBobName)
}

// Even or Odd:
// --Write a for loop that iterates from 1 to 20. For each iteration, print whether the number is even or odd.

for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("even")
  } else {
    console.log("odd")
  }
}

// Sum of Numbers:
// --Calculate the sum of all numbers from 1 to 100 using a for loop.

let sum = 0
for (i = 1; i <= 100; i++) {
  sum += i
}
console.log(sum)

// Reverse a String:
// --Reverse a given string using a for loop.

const thisString = "this is a string"
let newString = ""

for (i = thisString.length - 1; i >= 0; i--) {
  newString += thisString[i]
}
console.log(newString)

// Factorial:
// --Write a program to calculate the factorial of a given number using a for loop.

let factorialOf = 5
let factorial = 1

for (let i = 1; i <= factorialOf; i++) {
  factorial *= i
  // factorial = factorial * i
}
console.log(factorial)

// let factorial2 = 1
// for (let i = 10; i >= 1; i--) {
//   factorial2 *= i
//   console.log(factorial2)
//   // factorial = factorial * i
// }

// Fibonacci Sequence:
// --Generate the first 10 numbers in the Fibonacci sequence using a for loop.

//           a b n
// 0 1 1 2 3 5 8 13 21 34 55 89

// let digits = 10
// let a = 0
// let b = 1
// let fibonacci = [0, 1]

// for (i = 0; fibonacci.length < digits; i++) {
//   let next = a + b
//   fibonacci.push(next)
//   a = b
//   b = next
// }
// console.log(fibonacci)

let digits = 10
let fibonacci = [0, 1]

for (i = 0; fibonacci.length < digits; i++) {
  let next = fibonacci.at(-1) + fibonacci.at(-2)
  fibonacci.push(next)
}
console.log(fibonacci)
