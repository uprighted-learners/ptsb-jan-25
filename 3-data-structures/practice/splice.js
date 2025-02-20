// ? Array.prototype.splice()
// changes the contents of an array
// by removing stuff (optional)
// and adding stuff (optional)
// to a specific point in the array

const fruits = ["apples", "bananas"]

// start at index 1, remove 0 things, add all this stuff
fruits.splice(1, 0, "oranges", "pineapple", "dragonfruit", "durian")
console.log(fruits)

// start at index 3, remove 2 things, add nothing
fruits.splice(3, 2)
console.log(fruits)

// start at index 2, remove one thing and add one thing
// (this is very common, a drop-in replacement)
fruits.splice(2, 1, "canned pineapple")
console.log(fruits)

fruits.splice(1, 1, "clementines", "naval oranges", "mandarins")
console.log(fruits)

// if you omit the second argument, it deletes everything after that point
fruits.splice(2)
console.log(fruits)
