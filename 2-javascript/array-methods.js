const worstInstruments = ["saxophone", "bagpipes", "accordian", "concertina"]

// ? Add and remove

// .push adds to the end (and returns the new length if you happen to want that)
const arrayLength = worstInstruments.push("kazoo")
console.log(arrayLength)

// .pop removes from the end (and returns the removed value)
const poppedValue = worstInstruments.pop()
console.log(poppedValue)

// .shift removes from the beginning (and returns the removed value)
const shifted = worstInstruments.shift()
console.log(shifted)

// .unshift adds to the beginning
const newLength = worstInstruments.unshift("saxophone")
console.log(newLength)

console.log(worstInstruments)

// ? Boolean array methods

console.log(worstInstruments.includes("guitar")) // false
console.log(worstInstruments.includes("bagpipes")) // true

console.log(worstInstruments.every((element) => typeof element === "string")) // true
console.log(worstInstruments.every((element) => element.length > 9)) // false

console.log(worstInstruments.some((element) => typeof element === "number")) // false
console.log(worstInstruments.some((element) => element.length > 9)) // true

// ? Index and order

// .at works like access by index except it can take a negative number
console.log(worstInstruments.at(-2))

// .slice makes a copy of a given chunk of an array
// takes two params: start (inclusive), end (exclusive)
// end is optional, defaults to end of array

console.log(worstInstruments.slice(1, 3))

// .splice replaces a chunk of an array with something else
// params:
//      * start (first value to replace / location to insert)
//      * deleteCount - how many values to remove (can be 0!)
//      * newValue - values to insert (optional)
//          * you can add an arbitrary number of them
//          * does NOT have to be the same number you removed

worstInstruments.splice(1, 0, "kazoo")

// .sort sorts an array in place (mutates in places)
// .toSorted returns a sorted copy

let sortedInstruments = worstInstruments.toSorted()
console.log(sortedInstruments)
console.log(worstInstruments) // unchanged

// both of these take an optional callback to determine sort order (see docs)
worstInstruments.sort((a, b) => a.length - b.length)
console.log(worstInstruments) // changed!

// .reverse and .toReversed work exactly the same as sorted and toSorted
// except there's no optional callback

// ? Looping

// .forEach is just a basic loop! runs the callback once for each element

worstInstruments.forEach((inst) => console.log(inst.toLocaleUpperCase()))

// ? Map, Filter, Reduce
// always return a copy and leave the original alone
// all take a callback

// .map creates a new element for each existing element
// the predicate takes one argument and can return anything
// (whatever you return is what gets added to the new array)

const screamingInstruments = worstInstruments.map((inst) => inst.toUpperCase())
console.log(screamingInstruments)

// .filter creates a new array with only values that meet a condition
// the predicate takes one argument and must return a boolean

const longInstruments = worstInstruments.filter((inst) => inst.length > 8)
console.log(longInstruments)

// .reduce creates a single value from an array
// first argument is a callback (required)
//  * takes two params
//      * the first one is the accumulated value
//      * the second one is the element of the array
// second argument (optional) is a starting value

const nums = [1, 2, 3, 4, 5]

const sum = nums.reduce((a, b) => a + b, 10)
console.log(sum)

const charCount = worstInstruments.reduce((a, b) => a + b.length, 0)
console.log(charCount)
