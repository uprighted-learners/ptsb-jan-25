/* 
    ? Objects
    * containers for values
    * organized by key
    * iterable but not indexed
    * curly brackets with comma separated key-value pairs
    * { key: value, key2: value2 }
*/

const value4 = "value 4"

const exampleObject = {
  key1: "value 1",
  key2: ["value 2", 3, 4, 5],
  key3: { nested: "object" },
  key4: value4,
  whatever: "anything goes",
}

// console.log(exampleObject)

/* 
    Keys can be: 
        * must be literal (when writing the object literal)
        * any valid JS identifier 
            * can start with any letter, _, $
        * any number
        * any string
*/

const weirdObject = {
  1: "one",
  2000000: "big numbers allowed!",
  3.5: "floats are allowed apparently",
  "any string": "string keys don't have to follow the js identifier rules!",
  "12invalid  ***": "this is a bad key name, but it's allowed",
  normal: "this is a normal object key",
}

// console.log(weirdObject)

/* 
    ? Accessing object values
    * Dot notation
        * requires that you know the key name
        * requires that the key name be a valid JS identifier
    * Bracket notation
        * every other situation :)
        * evaluates the brackets before accessing the object
*/

const movies = {
  kneecap: "Kneecap",
  fg: "Fall Guy",
  gn: "Green Knight",
  sm: "Superman",
  bk: "Beekeeper",
  23: "23: The Movie",
}

// console.log(movies.fg)
// console.log(movies.gn)

const beekeeper = "bk"

// console.log(movies.beekeeper) // undefined
// (it's not interpreting the variable, it's looking specifically for the key of "beekeeper" which does not exist)

// you can put any valid JS inside the brackets
// it will be interpreted / evaluated before the oject is accessed
// whatever it resolves to is the key that will be checked for
console.log(movies[beekeeper])
console.log(movies[20 + 3])
console.log(movies["SM"])
console.log(movies["SM".toLowerCase()])
console.log(movies[`${"knee"}${"cap"}`])

// console.log(movies[23])
// console.log(movies["sm"])

// ? Modifying objects

movies.bt = "Blink Twice"
movies.dd = "Don and Darko"
movies.dd = "Donnie Darko"
movies[beekeeper] = "Bee Keeper"
movies[23] = "23"
movies[23] = "23 The Movie"

console.log(movies)

// ? Deleting a key-value pair

delete movies.bt
delete movies[23]
delete movies.fg
// delete movies.bk
// delete movies.gn
// delete movies.kneecap
// delete movies.sm

console.log(movies)

/* 
    ? Destructuring
    * use this when you want to save the value as a variable
    * can get multiple keys out at the same time
        * but use it even with single values, for consistency
*/

// const kneecap = movies.kneecap
const { kneecap, dd, bk } = movies
console.log(kneecap, dd, bk)

// you can choose a different variable name if you want
const { gn: greenKnight } = movies

console.log(greenKnight)
