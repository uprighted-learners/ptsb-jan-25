/* 
    ? Arrays
    * list-like objects
    * reference data type
    * hold multiple data types (literally anything that can be stored in JS)
    * array type has methods to perform traversal and mutation operations
    * written like this: [content, goes, here, comma, separated, values]
    * iterable (can be iterated over)
    * can be accessed by index
    * mutable!
*/

if ([]) {
  console.log("empty arrays are truthy")
}

//                0   1      2    3        4
const newArray = [1, "two", [3], { 4: 5 }, true]

// access by index
if (newArray[4]) {
  console.log("this happens because newArray[4] is true")
}

// .length is the only array attribute
console.log(newArray.length)

const worstInstruments = ["kazoo", "bagpipes"]

// assign by index

// assign new values
worstInstruments[2] = "accordian"

// assign over old values
worstInstruments[0] = "saxophone"

// console.log(worstInstruments)
// console.log(worstInstruments.length)
// console.log(worstInstruments[500])

// read or assign by dynamic index
let two = 2
// console.log(worstInstruments[two])

worstInstruments[worstInstruments.length] = "concertina"

console.log(worstInstruments)

const nestedStuff = [
  [1, 2, 3],
  ["one", "two", ["three"]],
]
//                      0           1
//                       0  1  2
//                                   0       1     2
//                                                  0
// const nestedStuff = [[1, 2, 3],["one", "two", ["three"]]]

console.log(nestedStuff[1][2][0])

// Mutability
// Immutable types can't be changed without changing their identity
// but mutable types (arrays and objects) can be!

let thisString = "this is a string"
thisString = thisString.toUpperCase() // this method "changes" the string
// because strings are immutable it's actually making a new copy
// which we then reassign to the same variable
console.log(thisString)

// this is the same array the whole time
const thisArray = []
thisArray[0] = "val1"
thisArray[1] = thisString
console.log(thisArray)

// thisArray = ["other thing"] //TypeError: Assignment to constant variable.
