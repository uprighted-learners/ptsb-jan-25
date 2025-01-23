/* 
    ? BOOLEANS 
    * stores a binary value
    * true, false
    * boolean expressions evaluate to true or false
    * JS leans heavily on "truthy" or "falsy"
*/

const isTrue = true
const isFalse = false

// console.log(Boolean("hello"))
// console.log(Boolean(123))
// console.log(Boolean([1, 2, 3]))
// console.log(Boolean([]))
// console.log(Boolean({}))

// // these are all the falsy values
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(0))
// console.log(Boolean("")) // the empty string
// console.log(Boolean(false))

// ! Conditionals
// if/else statments

// // only one code block in a conditional statement will run
// if (0) {
//   // the first code block only runs if the condition is true
//   console.log("the condition was true")
// } else {
//   // the else code block runs if the condition is false
//   console.log("the condition was false")
// }

/* 

! Comparisons
comparison operators create boolean expressions
boolean expressions evaluate to a boolean (true or false)

the operators are:
    * == (is equal to)
    * === (is strictly equal to) (strict means same value AND same type)
    * != (is not equal to)
    * !== (is not strictly equal to)
    * > (these do exactly what you learned in 3rd grade)
    * <
    * >=
    * <=
*/

// // the == operator will coerce types
// console.log(isTrue == true)
// console.log(isTrue == "true")
// console.log(isTrue == 1)
// console.log("!!!!!!!!!!")

// console.log(1 == "1")
// console.log([1, 2] == "1,2")

// // the === operator will NOT coerce types
// // equality means same value and same type
// console.log(isTrue === true) // true
// console.log(isTrue === 1) // false
// console.log(1 === "1") // false
// console.log("!!!!!!!!!!")

// // the != operator is the inverse of ==
// // and !== is the inverse of ===

// console.log(isTrue != true) // false
// console.log(0 != 1) // true

// console.log(1 != "1") // false
// console.log(1 !== "1") // true
// console.log("!!!!!!!!!!")

// console.log(1 > 0) // true
// console.log(1 > 2) // false
// console.log(1 > 1) // false
// console.log(1 >= 1) // true
// console.log(1 <= 1) // true

// // ! Using comparisons in a conditional

// if (0 < 1) {
//   console.log("this is true or truthy")
// } else {
//   console.log("this is false or falsy")
// }

// // ! Using functions as conditions

// const sentence = "JavaScript is fun"

// if (sentence.includes("funny")) {
//   console.log("this is true or truthy")
// } else {
//   console.log("this is false or falsy")
// }

/* 
! Chaining conditions / complex conditions
AND: && (looks for EVERY item to be truthy)
OR: || (looks for ANY item to be truthy)
both return whatever the last value in their chain was
(which is not necessarily a boolean)
*/

// console.log(Boolean(0 && 2 && 3))
// console.log(0 && 2 && 3)

// console.log(Boolean(0 || 0 || ""))
// console.log(0 || 0 || null)

// console.log((true && 0) || null)
// console.log(true || (0 && null))

// ! Putting it all together

const temperature = 76
const isRaining = false
const precipitation = "sleet"

let weather

if (temperature < 32 && isRaining) {
  weather = "this is terrible, get me out of here"
} else if (temperature < 32 || (temperature < 85 && isRaining)) {
  weather = "this sucks"
} else if ((temperature < 50 && isRaining) || precipitation === "sleet") {
  weather = "at least it's not freezing"
} else if (temperature < 50) {
  weather = "it's pretty chilly!"
} else if (temperature < 85) {
  weather = "it's nice out :)"
} else if (temperature >= 85 && isRaining) {
  weather = "hope this rain cools it off"
} else {
  weather = "??"
}

console.log(weather)
