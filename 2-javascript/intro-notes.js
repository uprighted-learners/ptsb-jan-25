/* 
    ? JAVASCRIPT
    * founded in 1996 by Brandon Eich
    * ECMA sets the standard
        * ECMAScript5 is from 2009, ES6 is 2015, 
        * now there's a new edition every year
        * we're on the 15th edition
    * client-side language (runs in browser)
    * interpreted, not compiled
    * first-class functions (functions are a type)
    * weakly typed (as opposed to strongly typed, like Java or C++)
    * dynamically typed (as opposed to statically typed, like TypeScript or Java)
    * multi-paradigm language
        * functional language
        * object-oriented language
        * prototype-based
        * imperative

    ? COMMENTS
    * blocks of code that are not interpreted
    * denoted by // for single lines
    * denoted by /* for multiple lines

    * comments are read but not executed
    * they are still read by the parser
    * do not keep actual secrets in the comments! 

    * as learners, comments help us take notes
    * as developers, comments help
        * communicate with other developers (including our future selves)
        * keep code "readable" -- easy to understand and maintain
    
    * shortcuts:
        * cmd/ctrl + / for single lines
        * optn/alt + shift + a for multi lines

    ? CONSOLE OBJECT
    * gives us access to the interpreter's console
    * allows us to view output from the program
*/

console.log("hello world")
console.warn("this is a warning")
console.error("this is an error")

/* 
    ? VARIABLES
    * a variable represents one piece of data in memory
    * in JS variables must be declared
    * declaration
        * allows memory space to be reserved using an identifier
        * starts with keywords: let, const, or (archaic) var
        * must start with a letter, $, or _
        * if no value is assigned, it's undefined
    * assignment
        * gives the variable a data value
        * can be any value or data type
        * can be reassigned (unless declared with const)
    * initialization
        * giving a new variable its first value
        * usually done on the same line as declaration
*/

// declaration
let variable1

// definition (with the assignment operator)
variable1 = "this has a meaning now"

// we almost always declare and define at the same time
let variable2 = "this is also a string"

variable1 = "variables can be reassigned"
console.log(variable1)

const thing = "a string" // stored in memory but not used
console.log("a string") // used, but not stored in memory

// let, const, and var

let tempVar = "this is temporary"
const constantVar = "this one can't change during the program"

tempVar = "this can be whatever! whenever!"
// constantVar = "oooops" // TypeError: Assignment to constant variable.

// var is archaic, we don't use it anymore
var oldSchool = "this is the old way"
oldSchool =
  "vars can be reassigned, and are more broadly scoped than let or const"

/* 
    ? what makes a good variable name? 
    * describe what information the variable stores
    * follow casing conventions
        * kebab-case (we use this in HTML and CSS)
        * camelCase (we use this in JS)
        * PascalCase or WordCase (this has special use cases in JS)
        * snake_case (other languages use this, for example Python)
        * CONSTANT_CASE or SCREAMING_SNAKE_CASE (for constants)
*/
