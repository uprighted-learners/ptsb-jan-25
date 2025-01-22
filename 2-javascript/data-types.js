/* 
    ? DATA TYPES
    Primitive types (immutable, hold one piece of information)
        * string
        * number (including NaN)
        * boolean (true and false)
        * null
        * undefined
        * (bigint)
        * (Symbol)
    Reference types (these are actually all implementations of Object)
        * object
        * array
        * function
        * map
        * set
        * (and more)
*/

// STRINGS

console.log("a string is a chunk of text")
console.log("delineated by quote marks")
console.log("a string can have anything in it!🔥🔥  #$O(#$*@# 209948     ")
console.log("if you can type it, it can be a string")

console.log("the only thing you can't put in is 'quote marks'")
console.log('you can use single quotes to make a string with "" in it')
console.log('one solution is to use "escape character\'s"  ')
console.log(`another solution is to use "template string's"`)

let power = "superpower!!"
console.log(`template strings have a ${power}`)

// concatenation
const dogName = "Ace"
const sentence = "Rob's dog is named" + " " + dogName
console.log(sentence)

// ? NUMBERS

console.log(3 + 2)
console.log(3 - 2)
console.log(3 * 2)
console.log(3 / 2)
console.log(3 ** 2) // exponent operator
console.log(13 % 5) // modulus (integer divison, remainder)

// Math object
console.log(Math.floor(13 / 5))
console.log(Math.ceil(23.345345345))
console.log(Math.sqrt(-1))

// typeof
console.log(typeof NaN)
console.log(Infinity / 100)

let num = 1
num = "one"

console.log(num)
console.log(typeof num)

// TYPE COERCION

// explicit coercion, type conversion, type casting
// done using type constructors

const two = "2"

let newNum = Number(two)
let newStr = String(3453)

console.log(newNum)
console.log(newStr)

console.log(two + two)
console.log(newNum + newNum)

// implicit type coercion
// something changes types as a side effect of another operation
console.log(two + newNum) // 22
console.log(2 * "2") // 4
console.log(2 * "two") // NaN
console.log(2 + [2, 2]) // 22,2

// string lengths
//             0123456789
let thisStr = "abcdefgh"
let thatStr = "abcdefhg"

console.log(thisStr.length)
console.log(thisStr[9])
