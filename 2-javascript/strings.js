let thisStr = "a string"
// access by index
console.log(11, thisStr[3])

// we can't reassign characters
// because strings are primitive and therefore immutable
// thisStr[1] = "!!" // doesn't do anything

console.log(thisStr.slice(2, 5)) // str
console.log(thisStr.slice(-5, -2)) // tri (counting from the back)
console.log(thisStr.slice(2, -2)) // stri

const myName = "        Danny Burrow 1234           "
const upperCase = myName.toUpperCase()
console.log(upperCase, 22)
console.log(myName.trim(), 23)
console.log(myName, 24) // still exists, unchanged

// Template strings

console.log(`template string`) // template string literal

const subString = "include variables"
console.log(
  `template strings can ${subString.toUpperCase()} and do math ${3 / 2}`
)

console.log(subString.length)
