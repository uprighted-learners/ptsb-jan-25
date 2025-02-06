/* 
    ? Callbacks
    A callback is a function that is passed to another function as an argument
    - usually anonymous, but don't have to be
    - some common built-in methods take callbacks
    - and of course, we can write our own
*/

const exampleFunction = () => console.log("hi")

// we made a function object!
console.log(exampleFunction) // [Function: exampleFunction]

const newThing = exampleFunction

// this is a function, because a function object was assigned to this variabled
newThing()

// functions can be passed as arguments to other functions
const doMath = (operator, x, y) => operator(x, y)

const add = (x, y) => x + y
const multiply = (x, y) => x * y

console.log(doMath(add, 2, 3))
console.log(doMath(multiply, 2, 3))

console.log(doMath((x, y) => x - y, 2, 3)) // a callback!

const nums = [1, 2, 3, 4, 5]

const filterHelper = (x) => x > 2
// arr.filter() needs to take a function as its argument
const filteredArray = nums.filter(filterHelper)
console.log(filteredArray)

// we can pass anonymous functions as arguments, by just writing them inline
const oddNums = nums.filter((x) => x % 2)
console.log(oddNums)

// callbacks can be long! they don't have to concise!
const bigOddNums = nums.filter((x) => {
  console.log("this is just a normal function")
  console.log(x)

  if (x % 2) {
    if (x > 2) {
      return true
    }
  }
})
console.log(bigOddNums)

// array.map() makes a new array with one entry for each existing entry
const doubledNums = nums.map((x) => x * 2)
console.log(doubledNums)
